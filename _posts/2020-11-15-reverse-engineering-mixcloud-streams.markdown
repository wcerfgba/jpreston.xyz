---
layout: post
title: Reverse Engineering Mixcloud Streams
---

### Motivation

I was listening to a show on Mixcloud today and when I went to try and rewind I discovered that I was unable to, unless I purchased a premium subscription. While I appreciate that platforms such as Mixcloud have to monetise somehow -- in order to cover employee wages and bandwidth costs, and eventually make profit to invest in new innovations --, I resent the use of anti-features or 'crippleware' as a way to drive users to convert to paying customers. In particular, I have no patience for restrictions which are imposed on my local machine. By the time the data has transferred to my computer, if I were to rewind the stream it would be my own computer which is doing the work of loading data from its local cache and seeking through that data. Scrubbing over a timeline is a basic feature of any audio or video player, and if Mixcloud offered an option to download an MP3 then I would be able to seek freely through the show in the audio player of my choice.

### Investigation

We begin by opening the page for a Mixcloud show in our browser of choice and opening Developer Tools. For this example I am using "Afrojack pres. JACKED Radio Ep. 469" [1]. In order to play the show, our browser will have to request some data from Mixcloud, and this should show up as a request in the Network tab. We hit Play on the stream and see what requests are fired off.

The first three requests are GraphQL requests to load some metadata about the stream. There is a `fetchAudioAdsInfoQuery`, a `seedQuery`, and a `PlayerQuery`. The `seedQuery` and `PlayerQuery` both include a `streamInfo` fragment which looks interesting:

```
{
	"streamInfo": {
		"hlsUrl": "ITItPyZtbmE1ISwsLmp6JDosMDggMiF6My4kazcqLTomIWA/Ij9geWslfX5ie2Y+IS4ueHJ7Iz9iYWFyfXk1fHQlf2dwZ2YybX9zdDA0I2cpcC5hJjogKi9gIXw0fA==",
		"dashUrl": "ITItPyZtbmE1ISwsLmp6JDosMDggMiF6My4kazcqLTomIWAzLz8nc2t+fSxifGZubCotNyVkcGsqM3p1eGdnZSR1YzBkYG1nZi5+dWBhJS0maiJ6LnspLjknKioyMGg/Pyk=",
		"url": "ITItPyZtbmEnIDogID9sZz49KzcjKDAwfiImKWs8KywhNip4LWMidSVpZHtidWY7bH1gY2svJDsueGFzKzJ5fHNyYXkoZ2U3eXx+cWYxeHlwdSsqLXopezZxPyYmeRYBFnl9cRwMGCYQcXA0amIPNBYaDRU=",
		"uuid": "BF4D01F8-DC91-4FB6-B6AD-3E2007955CE3"
	}
}
```

Given the context, the HLS in `hlsUrl` probably stands for "HTTP Live Streaming" and would point to somewhere that had more info on the stream media. These all appear to be Base64 encoded, but upon trying to decode them I did not get a nice URL but just garbage. It is possible that this data has been encrypted, but it is not necessary to investigate further because even if this is the case, the local Mixcloud client would decrypt these fields and fire off a request to the URL, which will then show up in plaintext in our Developer Tools, so obfuscating these URLs is pointless.

The next request after the GraphQL queries is for a `manifest.mpd` file, which as the name suggests, is a manifest for a protocol called MPEG-DASH, or "Dynamic Adaptive Streaming over HTTP". It looks like this:

```
<?xml version="1.0"?>
<MPD
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xmlns="urn:mpeg:dash:schema:mpd:2011"
    xsi:schemaLocation="urn:mpeg:dash:schema:mpd:2011 http://standards.iso.org/ittf/PubliclyAvailableStandards/MPEG-DASH_schema_files/DASH-MPD.xsd"
    type="static"
    mediaPresentationDuration="PT3666.709S"
    minBufferTime="PT10S"
    profiles="urn:mpeg:dash:profile:isoff-main:2011">
  <Period>
    <AdaptationSet
        id="1"
        segmentAlignment="true">
      <AudioChannelConfiguration
          schemeIdUri="urn:mpeg:dash:23003:3:audio_channel_configuration:2011"
          value="1"/>
        <SegmentTemplate
            timescale="1000"
            media="https://audio8.mixcloud.com/secure/dash2/8/b/b/a/f73b-90ca-4cdd-8786-306e3e152f8e.m4a/fragment-$Number$-$RepresentationID$.m4s"
            initialization="https://audio8.mixcloud.com/secure/dash2/8/b/b/a/f73b-90ca-4cdd-8786-306e3e152f8e.m4a/init-$RepresentationID$.mp4"
            startNumber="1">
            <SegmentTimeline>
                <S d="10000" r="365"/>
                <S d="6709"/>
            </SegmentTimeline>
        </SegmentTemplate>
      <Representation
          id="a1-x3"
          mimeType="audio/mp4"
          codecs="mp4a.40.2"
          audioSamplingRate="22050"
          startWithSAP="1"
          bandwidth="69816">
      </Representation>
    </AdaptationSet>
  </Period>
</MPD>
```

Following this manifest are requests for an `init-a1-x3.mp4` and several `fragment-<num>-a1-x3.m4s` files. Looking at the manifest, we can infer that MPEG-DASH works by providing an initalization file which includes the MPEG header, and a series of segments -- available as a sequence of resources whose URLs can be derived from a template -- which all together comprise the whole MPEG stream.

A quick Web search turns up plenty of information on the manifest format, and further allows us to confirm that the `r="365"` inside the `SegmentTimeline` indicates the number of 'repeats', equivalent to `number_of_segments - 1`.

Thanks to the simple naming scheme, it is trivial to download all of the segment files using cURL which includes support for downloading sequences of URLs using some simple syntax:

```
curl -O "https://audio8.mixcloud.com/secure/dash2/8/b/b/a/f73b-90ca-4cdd-8786-306e3e152f8e.m4a/fragment-[1-366]-a1-x3.m4s"
```

We also download the initialization file as well.

Once we have all the files, we just need to join then together to build the complete MPEG stream. This is easy enough on a Linux system using standard tools:

```
cat init-a1-x3.mp4 $(ls -v | grep fragment) > mix.mp4
```

The `-v` flag for `ls` toggles "natural sort of (version) numbers within text", which ensures our segments sort in the correct order, with `fragment-10-a1-x3.m4s` appearing before `fragment-100-a1-x3.m4s`, for example.

Opening the resulting file in VLC allows us to listen to the whole stream, but for some reason seeking is broken, possibly due to issues with the header file, or extra header data in the segments which we do not care about. We can re-mix the file by simply importing into Audacity and then exporting as an MP3 or other format of our choice, which will generate a new header file with the raw audio data from the complete stream.

Finally, we have our rendered MP3 with the complete stream of the show, which we can now seek to our heart's delight.

### Conclusion

The Mixcloud stream protocol is not heavily obfuscated and is trivial to reverse engineer using commonly available Unix tools and a bit of intuition about how streaming media works. If Mixcloud wanted to make this reverse engineering more difficult in the future, they should encrypt the individual MPEG segments and then decrypt them in the browser once they are downloaded. This would ensure that they are encrypted at rest in the cache, and an attacker would have to inspect the JavaScript to determine how to decrypt the segments, and then apply this decryption to the downloaded segments, before they could be stitched together.

Additionally, Mixcloud could offer an option to download a complete MP3 so users can listen to a stream offline. If such a feature required a subscription, this would be a good motivator for people to convert from free users, and in my opinion is a much better approach to take than crippling the UX for free users: providing a poor experience for free users doesn't motivate me to become a subscriber, instead it leaves a bad taste in my mouth and makes me _not_ want to pay. From what I can glean from Mixcloud's knowledge base, downloading is currently supported for 'Select' creators (so the uploader of the stream you want to download from also has to have a paid plan) and is limited to in-app downloads (meaning you have to use Android or iOS, and can only listen in the official Mixcloud app) [2].

### References

[1] <https://www.mixcloud.com/afrojack/afrojack-pres-jacked-radio-ep-470/> \
[2] <https://help.mixcloud.com/hc/en-us/articles/360004054359-How-do-I-listen-offline->

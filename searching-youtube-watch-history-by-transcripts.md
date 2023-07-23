---
layout: page
title: 'Searching YouTube Watch History by Transcripts'
date: '2022-03-31'
last_modified_at: '2022-03-31'
code: true
excerpt: |
  The other day I was discussing something with a friend and I remembered a video essay I had watched which referenced a play by Samuel Beckett. Unfortunately I couldn't remember what the video was, but I did remember the description of the referenced work.

  In order to find the original video, I wrote the following short Python 3 software script to search through the transcripts of my YouTube watch history.
---

<link rel="stylesheet" href="{{ "/assets/css/highlight.css" | relative_url }}">

The other day I was discussing something with a friend and I remembered a video essay I had watched which referenced a play by Samuel Beckett. Unfortunately I couldn't remember what the video was, but I did remember the description of the referenced work.

In order to find the original video, I wrote the following short Python 3 software script to search through the transcripts of my YouTube watch history:

```py
from youtube_transcript_api import YouTubeTranscriptApi
from youtube_transcript_api._errors import TranscriptsDisabled, NoTranscriptFound
import json
import re

f = open('watch-history.json')
hist = json.load(f)

def get_transcript(video_id):
  try:
    raw = YouTubeTranscriptApi.get_transcript(video_id)
    return ' '.join([item['text'] for item in raw])
  except (TranscriptsDisabled, NoTranscriptFound):
    return ''

searches = ['disembodied', 'beckett']

for i in range(1, len(hist)):
  item = hist[i]
  video_id = item['titleUrl'].removeprefix("https://www.youtube.com/watch?v\u003d")
  print("Searching {} - {} - {}...".format(i, video_id, item['title']))
  transcript = get_transcript(video_id)
  search_matches = [re.search(search, transcript, flags = re.I) for search in searches]
  if any(search_matches):
    print("FOUND!\n")

```

This script uses the youtube-transcript-api library[^1] to retrieve the full-text transcript for each video in my watch history, and search it for keywords. You will need to install this package if you want to use this script.

Unfortunately YouTube do not provide an API to retrieve one's watch history, but it is possible to download a JSON file of your watch history by using Google Takeout[^2].

Thanks to this little script I was able to locate the original video, "YouTube Is Absurd", by David J. Bradley[^3].

Note that the script does not terminate on finding a match, as I had a few false matches in my more recent history, and so I wanted to keep surfacing results. You can make the script terminate on the first matching result by adding a `break` after the final `print()`.

I hope YouTube will add the ability to search videos by transcript in the future, and restore API access to our watch histories.

[^1]: <https://github.com/jdepoix/youtube-transcript-api>
[^2]: <https://takeout.google.com/>
[^3]: <https://www.youtube.com/watch?v=uDl5vbbJ5Ac>

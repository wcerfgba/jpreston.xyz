---
layout: page
title: A Catalogue of Chords Example
date: '2021-02-04'
last_modified_at: '2021-08-14'
---

At the start of 2021 I spent some time writing some Clojure [[software]] to generate a catalogue of assorted [[music]]al chords. You can find the catalogue, with explanatory info and the script to generate it, on GitHub [^1].

In this [[essay]] I'll demonstrate using the catalogue to build a chord progression.

### Background

My primary musical passions are jazz and jazz-funk. A core component of jazz melody and harmony is tension and release: you start off relaxed, in familiar territory, and then more to somewhere that is less at rest or more dissonant, before returning to something more mellow and consonant. This ebb and flow of tension and release, or high and low energy, is part of how jazz composers keep their pieces engaging and tell a story.

The meat and potatoes of jazz harmony is the ii-V-I progression. In the key of C, this would be the chords Dmin7 G7 CMaj7. We start on the ii, which is quite consonant but not the 'home' of CMaj7. This sets us up to be ready to move further away. We reach G7 by moving A down to G and C down to B. This is an example of smooth voice leading: we don't need to move many notes very far to create a significant change in chord quality and root. The G7 is a dominant chord: the B and F are a tritone apart which is very dissonant, and our ears want this to 'resolve'. We resolve the G7 to CMaj7 by lowering D to C and F to E, which replaces the tritone with a perfect fifth. Additionally, the CMaj7 is very consonant (providing you don't voice it with a minor second between B and C) and the major quality, alongside the root movement through the previous chords, defines this as our home. The ii-V-I is the quintessential tension and release chord progression in jazz.

### Construction

I decide to start with a ii11 chord, Dm11, because I like the sound of this and it is a natural place to start given the prevalence of ii-V's in jazz. I want to build tension slowly at first, and progress by changing two notes, just like in the ii-V, so I take a look at the relevant section of the catalogue.

```
                                                      m    d    A
.min11.                                            .r   b3   11   b7.

[...]
 -1  -1   .   .              -bII  dimMaj7          r   b3   b5    7
 -1   .   .  -1              -bII  7#11             r    3  #11   b7
                              +IV  7#11           #11   b7    r    3
 -1   .  +1   .              -bII  Maj7             r    3    5    7
  .  -1   .  -1               +II  min7            b7    r   b3    5
                              +IV  Maj6             5    6    r    3
  .  -1  +1   .               +II  aug7            b7    r    3   #5
  .   .  +1  -1                 I  dim7             r   b3   b5  bb7
                            +bIII  dim7           bb7    r   b3   b5
                              +bV  dim7            b5  bb7    r   b3
                              +VI  dim7            b3   b5  bb7    r
  .   .  +1  +1                 I  dimMaj7          r   b3   b5    7
  .  +1   .  -1               +IV  Maj7             5    7    r    3
  .  +1  +1   .                 I  7#11             r    3  #11   b7
                              +bV  7#11           #11   b7    r    3
 +1   .   .  -1               +IV  aug7            #5   b7    r    3
 +1   .  +1   .             +bIII  min7            b7    r   b3    5
                              +bV  Maj6             5    6    r    3
[...]
```

I decide on the +bV Maj6 movement, for a couple of reasons. First, the movement by bV, or a tritone, is pretty spicy, but the chord quality of a Major 6th is very consonant, so I think this could be quite interesting. Second, a Major 6th can also be interpreted as a minor 7th, so there is a bit of ambiguity, which might add an ethereal quality to the progression. This movement results in an AbMaj6 chord.

From the AbMaj6, I want to really ratchet the tension up. I look up a suitable entry in the catalogue for Maj6 and decide where to go next. Again I want smooth voice leading with a reasonable amount of departure, so I look at two note movements once more.

```
                                                      M    m    d
.Maj6.                                             .r    3    5    6.

[...]
 -1  -1   .   .              -bII  aug7             r    3   #5   b7
 -1   .  -1   .              -bII  7sus4            r    4    5   b7
                              +bV  min11           11   b7    r   b3
 -1   .  +1   .              -bII  13sus4           r    4   13   b7
  .  -1  -1   .                 I  dim7             r   b3   b5  bb7
                            +bIII  dim7           bb7    r   b3   b5
                              +bV  dim7            b5  bb7    r   b3
                              +VI  dim7            b3   b5  bb7    r
  .  -1   .  -1              +bVI  Maj7             3    5    7    r
  .  -1   .  +1                 I  min7             r   b3    5   b7
                            +bIII  Maj6             6    r    3    5
  .  -1  +1   .               +VI  dimMaj7         b3   b5    7    r
  .   .  -1  -1              +bVI  aug7             3   #5   b7    r
  .   .  -1  +1                 I  7#11             r    3  #11   b7
                              +bV  7#11           #11   b7    r    3
  .   .  +1  +1                 I  aug7             r    3   #5   b7
  .  +1  -1   .               +bV  dimMaj7         b5    7    r   b3
  .  +1   .  -1                +V  7sus4b9          4   b7    r   b9
                             +bVI  Maj13            3   13    7    r
  .  +1   .  +1                 I  7sus4            r    4    5   b7
                               +V  min11           11   b7    r   b3
 +1  -1   .   .             +bIII  7#11            b7    r    3  #11
                              +VI  7#11             3  #11   b7    r
 +1   .  -1   .               +bV  min7             5   b7    r   b3
                              +VI  Maj6             3    5    6    r
 +1   .   .  +1              +bII  dim7             r   b3   b5  bb7
                             +III  dim7           bb7    r   b3   b5
                               +V  dim7            b5  bb7    r   b3
                            +bVII  dim7            b3   b5  bb7    r
 +1   .  +1   .               +VI  Maj7             3    5    7    r
 +1  +1   .   .               +VI  aug7             3   #5   b7    r
 [...]
```

The +bV 7#11 stands out to me because it takes us back to D in the root, but with a much spicier chord quality. I choose this movement and my next chord is a D7#11.

At this point I'm wondering if I can land back on another Ab chord and then move away from this D-Ab pairing and start to orbit another pair of roots. I also want to resolve some of the tension from this 7#11. I go back to the catalogue.

```
                                                      M    d    M
.7#11.                                             .r    3  #11   b7.

[...]
 -1  -1   .   .              -bII  Maj7             r    3    5    7
 -1   .   .  -1              -bII  7sus4            r    4    5   b7
                              +bV  min11           11   b7    r   b3
 -1   .   .  +1              -bII  sus4             r    4    5    r
                             +III  sus2             5    r    2    5
                              +bV  7sus4            4   b7    r    4
                             +VII  sus4             r    4    5    r
  .  -1  -1   .                 I  min11            r   b3   11   b7
                              +IV  7sus4            5   b7    r    4
  .  -1   .  -1                 I  dim7             r   b3   b5  bb7
                            +bIII  dim7           bb7    r   b3   b5
                              +bV  dim7            b5  bb7    r   b3
                              +VI  dim7            b3   b5  bb7    r
  .  -1   .  +1                 I  dimMaj7          r   b3   b5    7
  .  -1  +1   .                 I  min7             r   b3    5   b7
                            +bIII  Maj6             6    r    3    5
  .   .  -1  -1               +IV  Maj7             5    7    r    3
  .   .  +1  -1                 I  Maj6             r    3    5    6
                              +VI  min7            b3    5   b7    r
  .   .  +1  +1                 I  Maj7             r    3    5    7
  .  +1   .  -1               +bV  dimMaj7         b5    7    r   b3
  .  +1  +1   .                 I  7sus4            r    4    5   b7
                               +V  min11           11   b7    r   b3
 +1  -1   .   .             +bIII  min7            b7    r   b3    5
                              +bV  Maj6             5    6    r    3
 +1   .   .  -1               +bV  min7             5   b7    r   b3
                              +VI  Maj6             3    5    6    r
 +1   .   .  +1              +bII  min11            r   b3   11   b7
                              +bV  7sus4            5   b7    r    4
 +1   .  +1   .              +bII  dim7             r   b3   b5  bb7
                             +III  dim7           bb7    r   b3   b5
                               +V  dim7            b5  bb7    r   b3
                            +bVII  dim7            b3   b5  bb7    r
 +1  +1   .   .               +bV  Maj7             5    7    r    3
 [...]
```

The +bV to 7sus4 is appealing: we move back to Ab and the 7sus4 is much more consonant than the dominant 7. There is also some very interesting ambiguity: Ab7sus4 can be interpreted as Ebmin11, which has every note one semitone higher than our first chord Dmin11, an example of planing.

From Ab7sus4, I want to break out of Ab and D chords, but repeat the qualities of the current four chords, so I can create an interesting loop. I turn to the catalogue once more to determine where to go next.

This time I have to move more than one semitone, but I do find an entry to take me to another min11.

```
                                                      A    d    m
.7sus4.                                            .r    4    5   b7.

[...]
  .  -3   .  -1               +II  7sus4           b7    r    4    5
                              +VI  min11           b3   11   b7    r
[...]
```

The +IV lands me at Fmin11, and now I can repeat the same movements from before to get from Fmin11 to BMaj6 to F7#11 and finally to B7sus4.

From B7sus4, I can get back to Dmin11 through a +bIII, but there is no entry in the catalogue for this! That's because the catalogue doesn't include movements where more than half of the notes in the starting chord have changed. However we can work it out by hand to see if it is reasonable. B7sus4 can be spelled B E F# A, and Dmin11 can be spelled D F C G, if we drop the fifth and the ninth. Thus we can get from B7sus4 to Dmin11 by moving B to C, E to D, F# to F, and A to G.

The final 8 chord sequence is:

Dmin11 - AbMaj6 - D7#11 - Ab7sus4 \
Fmin11 - BMaj6 - F7#11 - B7sus4

I used JJazzLab [^2] to see what this sounds like, and here is an MP3 of the complete 8 chord sequence, one chord per bar, with a single repeat, giving 16 bars.

<audio controls="controls" src="/assets/audio/jjazzlab_catalogue_demo.mp3"></audio>

While I worked on this progression, I did not construct it completely analytically. Instead I added each chord in to the progression in JJazzLab as I went along, so I could hear what it sounded like to make sure I was on the right track.

### Analysis

I think the final progression sounds quite good, even though at first glance to my untrained eyes there is no obvious tonicity or functionality to the progression. The reason these chords work well together is the use of smooth voice leading: because each note only moves by a small distance between each chord, there is a sense of continuation and closeness between the chords as a whole. This is effectively counterpoint, and I am reminded of Hal Galper's comments on Bill Evans' use of counterpoint, from a 2002 interview by Jan Stevens [^3]:

> It was only then that I realized that I had been, at times using counterpoint but didn't know it. It was then that I realized that anyone investigating harmony on it's deepest level would naturally come to the counterpoint conclusion. That made me feel a lot better. I'm now being more "picky" about the way I move my voicings. The problem is that pianists usually start learning voicings by the process of "stacking" notes in thirds or fourths or whatever. This creates a static perception of harmony. What is remarkable about Bill's voicings is that each note can function separately as a independent melodic line. True counterpoint. It really hit me while listening to his "Practice Tape #1," where, after working on his voice leading for a while, he slips into Bach's "Art of the Fugue" then switches back to his voicing work. (What a great Bach interpreter he was!) You can really get the clearest idea of his use of counterpoint from his switching back and forth. It was Jack Reilly's paper on inversions that gave me the clue: you have to have a thorough and complete knowledge of inversions to use harmony as counterpoint.

After playing around with reinterpreting the chords, the most traditional 'tonic' interpretation I can get is when rewriting the original progression

Dmin11 - AbMaj6 - D7#11 - Ab7sus4 \
Fmin11 - BMaj6 - F7#11 - B7sus4

as

Dmin11 - Fmin7 - Ab7#11 - Ab7sus4 \
Fmin11 - Abmin7 - B7#11 - B7sus4

If we take the first 4 bars as in the key of D minor, and the second 4 bars as in the key of F minor, we can interpret this as

Dmin: i - iii - bV7 - bV7 \
Fmin: i - iii - bV7 - bV7

Here we must interpret the Fmin as the parallel minor, since the key of D minor has a Major III which should be F(Maj7). Given the parallel minor, the modulation from D minor to F minor and back is quite natural. However, this parallel minor creates a problem with the movement in to a V7: Fmin has Ab as its iii, whereas the key of D minor wants an A7 as its V7. Hence the seemingly 'spicy' use of the bV7.

We could try and raise the bV7 by a semitone to get a more diatonic progression, while preserving the parallel minor for the iii. This gives

Dmin11 - Fmin7 - A7#11 - A7sus4 \
Fmin11 - Abmin7 - C7#11 - C7sus4

Here is an MP3 of the V7 version.

<audio controls="controls" src="/assets/audio/jjazzlab_catalogue_demo_V7.mp3"></audio>

Comparing the two versions is quite interesting. I find the V7 version has a stronger tonic feel but the progression is more jarring.

Another option is to preserve the bV7 but eliminate the parallel minor iii's, which gives

Dmin11 - FMaj7 - Ab7#11 - Ab7sus4 \
Fmin11 - AbMaj7 - B7#11 - B7sus4

Here is an MP3 of the III version.

<audio controls="controls" src="/assets/audio/jjazzlab_catalogue_demo_III.mp3"></audio>

This feels much smoother than the V7 version, but the Major quality of the second and sixth bars is very different to the original version: I really preferred the i-iii progression.

Trying to interpret the progression in a typical diatonic way is interesting, but we can't always expect progressions that are constructed with this counterpoint-esque technique to be analysable in this way, and nor should we. For myself, thinking about harmony as counterpoint is easier, simpler, and more liberating than traditional theory. Chord qualities do a good job of summarizing the feel and tension of a chord, and provide a convenient shorthand, but I am not practised enough to be able to glance at a chord symbol and know all the notes in it, nor to glance at two chord symbols and understand how they connect and flow in to each other. The situation is made worse by the multiple interpretations any given set of notes can take. I feel like the original way of writing the original progression is more useful, and I never would have been able to write this progression if I was thinking solely within a diatonic paradigm.

### References

[^1]: <https://github.com/wcerfgba/catalogue_of_chords>
[^2]: <https://www.jjazzlab.com/>
[^3]: <https://billevanswebpages.com/galperintview.html>

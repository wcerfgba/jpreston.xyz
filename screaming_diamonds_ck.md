---
layout: page
title: 'screaming_diamonds.ck'
date: '2014-11-07'
last_modified_at: '2022-01-09'
---

**WARNING: This audio is loud and clips heavily, please turn down your volume before playing!**

Note: The file presented here is FLAC, not MP3, because I could not get an MP3 to accurately reproduce the clipped waveforms which are essential for this audio. You may need to install a FLAC codec or download this file in order to play it.

<audio controls="controls" src="/assets/audio/screaming_diamonds.ck.flac"></audio>

This [[music]]al experiment was generated in the ChucK programming language[^chuck], using runtime version 1.4.1.0, from the following code:

```
Math.pow(2.0, 1.0 / 12.0) => float semitone;
440.0 / 32 => float init_f;

SinOsc s => BiQuad f => JCRev j => LPF l => dac;

init_f => s.freq;
0.05 => s.gain;

1000.0 => l.freq;
0.8 => l.Q;

22.2 => f.a1;
22.2 => f.a2;
11.1 => f.b0;
22.2 => f.b1;
44.4 => f.b2;

440.0 => f.pfreq;
0.5 => f.prad;

now => time begin;

while (now - begin < 4.5::minute) {
  s.freq() * semitone => s.freq;
  333::ms => now;
}
```

The code generates a sine wave at 13.75 Hz and then raises this by one semitone three times per second, creating a 180 bpm beat. The sine wave oscillator feeds into a biquad filter which has been configured with coefficients which create asymptotes around certain frequencies. All of this then goes through a reverb and a low pass filter to draw out the sound. The resulting audio is quite complex given how simple the code is, and continues to generate audible frequencies even after the input sine oscillator has exceeded 450,000 Hz!

[^chuck]: <https://chuck.cs.princeton.edu/>

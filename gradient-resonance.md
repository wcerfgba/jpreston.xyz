---
layout: page
title: Gradient Resonance
date: '2019-03-24'
modified_at: '2020-10-25'
---

<link href="https://fonts.googleapis.com/css?family=Noto+Serif+TC|VT323" rel="stylesheet">

<style>
.gradient-resonance {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}

.inner {
  position: relative;
}

canvas {
  display: block;
}

.gr-overlay {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.point {
  position: absolute;
  font-size: 16px;
  padding-left: 4px;
  mix-blend-mode: difference;
  color: #fff;
}

.point::before {
  content: '';
  position: absolute;
  left: -2px;
  width: 4px;
  height: 4px;
  border-radius: 2px;
  margin-right: 2px;
  background: #fff;
}

.hues {
  font-family: 'VT323', sans-serif;
  position: absolute;
  font-size: 16px;
  padding-left: 4px;
  mix-blend-mode: difference;
  color: #fff;
  right: 0;
  bottom: 0;
}
</style>

<div class="gradient-resonance">
  <canvas></canvas>
  <div class="gr-overlay">
    <div class="point" style="left: 0%; top: 16.666%;"></div>
    <div class="point" style="left: 0%; top: 11.333%;"></div>
    <div class="point" style="left: 50%; top: 33.333%;"></div>
    <div class="point" style="left: 71.3%; top: 5.6%;"></div>
    <div class="point" style="left: 83.333%; top: 67.5%;"></div>
    <div class="point" style="left: 12.5%; top: 98.5%;"></div>
    <div class="point" style="left: 46.1%; top: 95.27%;"></div>
  </div>
</div>

<script src="/assets/js/GlslCanvas.min.js"></script>

<script>
const frag = `
#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;



// From https://github.com/Jam3/glsl-hsl2rgb

float hue2rgb(float f1, float f2, float hue) {
    if (hue < 0.0)
        hue += 1.0;
    else if (hue > 1.0)
        hue -= 1.0;
    float res;
    if ((6.0 * hue) < 1.0)
        res = f1 + (f2 - f1) * 6.0 * hue;
    else if ((2.0 * hue) < 1.0)
        res = f2;
    else if ((3.0 * hue) < 2.0)
        res = f1 + (f2 - f1) * ((2.0 / 3.0) - hue) * 6.0;
    else
        res = f1;
    return res;
}

vec3 hsl2rgb(vec3 hsl) {
    vec3 rgb;

    if (hsl.y == 0.0) {
        rgb = vec3(hsl.z); // Luminance
    } else {
        float f2;

        if (hsl.z < 0.5)
            f2 = hsl.z * (1.0 + hsl.y);
        else
            f2 = hsl.z + hsl.y - hsl.y * hsl.z;

        float f1 = 2.0 * hsl.z - f2;

        rgb.r = hue2rgb(f1, f2, hsl.x + (1.0/3.0));
        rgb.g = hue2rgb(f1, f2, hsl.x);
        rgb.b = hue2rgb(f1, f2, hsl.x - (1.0/3.0));
    }
    return rgb;
}

vec3 hsl2rgb(float h, float s, float l) {
    return hsl2rgb(vec3(h, s, l));
}


// Gradient Resonance

// The background is a simple gradient from top to bottom.
vec4 bg(vec2 st) {
    vec2 mouse_uv = u_mouse.xy / u_resolution.xy;
    float hue_top =  mod(mouse_uv.x, 1.);
    float hue_bottom = mod(mouse_uv.x + mouse_uv.y, 1.);
    vec3 color_bottom = hsl2rgb(vec3(hue_bottom, 1., 0.5));
    vec3 color_top = hsl2rgb(vec3(hue_top, 1., 0.5));

    vec3 color = st.y * color_top + (1. - st.y) * color_bottom;

    return vec4(color, 1.);
}

// We draw a grid of squares spaced by unit width. Each column is slightly
// offset along the vertical. Each square has the same gradient as the
// background.
vec4 square(vec2 st) {
    float scale = 0.15;
    float offset_x = 0.106;
    float column = (st.x + offset_x) / scale;
    float offset_y = offset_x + 0.09 * floor(column);
    float row = (st.y + offset_y) / scale;
    // TODO: recalc as inset squares over whole grid. experiment with spacing

    vec2 square_st = vec2(column - floor(column), row - floor(row));
    float a = floor((mod(floor(column), 2.) + mod(floor(row), 2.))  / 2.);

    return vec4(bg(square_st).xyz, a);
}

// The painting is a composition of the squares on top of the background.
void main() {
    vec2 st = gl_FragCoord.xy/u_resolution.y;
    if (u_resolution.x < u_resolution.y) {
        st = gl_FragCoord.xy/u_resolution.x;
    }

    vec4 bg = bg(st);
    vec4 square = square(st);

    vec3 color = (bg.xyz * (1. - square.a)) + (square.xyz * square.a);

    gl_FragColor = vec4(color, 1.);
}
`

const outer = document.querySelector('.gradient-resonance')
const canvas = document.querySelector('canvas')
const topHue = document.querySelector('.topHue')
const bottomHue = document.querySelector('.bottomHue')

function rescale() {
  const minParentDim = outer.parentElement.clientWidth
  outer.style.width = minParentDim + 'px'
  outer.style.height = minParentDim + 'px'
  canvas.width = minParentDim
  canvas.height = minParentDim
}

rescale()
window.addEventListener('resize', rescale)

var glslCanvas;

const mouseListener = (e) => {
  const mouse_xy = glslCanvas.uniforms.u_mouse.value
  const mouse_res = glslCanvas.uniforms.u_resolution.value
  const mouse_uv = [
    mouse_xy[0] / mouse_res[0],
    mouse_xy[1] / mouse_res[1],
  ]
}

glslCanvas = new GlslCanvas(canvas, {
  fragmentString: frag
})

glslCanvas.mouseListener = mouseListener
</script>

Inspired by Bridget Riley's op art and the wallpapers in the confessionals of recent seasons of RuPaul's Drag Race, _Gradient Resonance_ is an interactive op art piece. Move your cursor over or tap on the canvas to create a linear gradient from two full-saturation colours.

The gradient is re-imposed on top of itself in a pattern. As the gradient is translated with respect to itself, different segments of the squares blend in to the background. This creates an effect of squares fading in from the top and bottom of the piece. The prominence of the effect varies depending on the colours chosen for the gradient, and some interesting combinations have been highlighted.

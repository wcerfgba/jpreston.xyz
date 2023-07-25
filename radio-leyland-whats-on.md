---
layout: page
title: Radio Leyland What's On
date: '2019-08-01'
last_updated_at: '2023-07-25'
gallery_img: /radio-leyland-whats-on.png
code: true
---

[![](/radio-leyland-whats-on.png)](https://radioleyland.co.uk/whatson/)

I built this website for my town's radio station, to act as an event listing page for the town. I originally started a newsletter which I intended to distribute online and in print. I asked Radio Leyland if they wanted to be included in the first issue, and they said they were looking for something like this.

I designed layout for the listings based on how I wanted it for the print distribution, and then I designed the submission form to be as close in layout as possible to the listings, so that it's easy to see what goes where. The listings include positional, non-semantic content in the form of 'additional details' which can go on the left and right underneath the title, location, and date/time.

The frontend is built with [Vue.js](https://vuejs.org), and the backend is mostly driven by [Directus](https://directus.io/), which saved me loads of time building an admin interface. Submissions are created in draft state and then admins use Directus to edit the details and flip the switch to publish them. There's also a PHP script on a cron job to email users a confirmation when they submit something.

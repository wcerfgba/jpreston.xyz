---
layout: page
title: Custom Search Engine
date: '2021-08-29'
last_modified_at: '2021-08-29'
---

I've done a little hacking on the Searx metasearch engine [[software]] [1] to allow restricting searches to pre-configured lists of sites. This replicates the functionality of the now-defuct Rollyo service [2] or Bing Custom Search [3].

Sometimes I want to search the Web because I don't have a good knowledge resource for a particular topic, but over time I come to favour particular sources and I want to search those sources first. For example, if I wanted a burrito recipe, I could just search for "burrito recipe" on a standard search engine. Over the years I've discovered a few recipe websites which I really like, and so I prefer to search them first as my preferred sources, before searching the entire Web. Now I can use my fork of Searx to search for "burrito #recipe" and only get results from those websites I like.

If you'd like to experiment with this setup, all of the code is on GitHub [4], you just need to follow the regular Searx development documentation to get a local copy running, and you can tweak the list of sites to suit your own tastes.

[1] <https://searx.github.io/searx/> \
[2] <https://en.wikipedia.org/wiki/Rollyo> \
[3] <https://www.customsearch.ai/> \
[4] <https://github.com/wcerfgba/searx>

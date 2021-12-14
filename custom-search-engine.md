---
layout: page
title: Custom Search Engine
date: '2021-08-29'
last_modified_at: '2021-08-30'
---

An [[essay]] about some Web search [[software]] hacking I've undertaken this weekend.

There are (at least) two different modalities to Web search. Sometimes, we don't have any particular resources or websites we want to consult, and we want to search 'the whole Web' to see what people have written on a particular topic. Other times, we have our preferred sources and we wish to consult those websites first, because we appreciate the style or perspective of the creators who publish there. For example, if I want to find a recipe for quesedillas, I can search 'the whole Web' for inspiration, but if I want to make vegan quesedillas, I would prefer to restrict my search to 'my Web', the websites whose vegan recipes I've enjoyed in the past, since there a lot of approaches to making vegan cheese sauces, and I trust certain chefs and food bloggers more than others on such a topic.

Traditional search engines -- Google, Bing, DuckDuckGo, ... -- are designed with 'the whole Web' in mind, although many do include a `site:` parameter to allow restricting searches to a particular URL prefix. For example, I can search for `quesedillas site:https://naturallyella.com/` to search a single site of interest. Unfortunately the user experience here is not very scalable: if I have a list of my favourite recipe websites, I need to search for `quesedillas AND (site:X OR site:Y OR site:Z [...])` up to whatever limit my particular search engine imposes on the complexity of my queries, or search each site separately.

There are services which allow building this kind of "search 'my Web'" functionality, but they are all proprietary. Yahoo used to provide a service called Rollyo [^1], but it is now defunct. Other options are Bing Custom Search [^2] which is paid-for, and Google Programmable Search Engine [^3] which is ad-supported. As far as I am aware none of these services allow you to export or import your site list.

I've done a little hacking on the searx metasearch engine [^4] to allow restricting searches to pre-configured lists of sites. My fork [^5] allows you to specify a list of sites for a particular category, and then restrict a search to those websites by adding `#<category>` to the query. The sites are configured in the search settings YAML file, so you can commit these to version control. You can combine different categories to search a wider selection of sites: this is particularly useful because I am interested in a few bloggers who write about wide ranges of topics, so I can always see if they have anything useful by searching for `javascript #software #misc` to include my favourite software blogs and those 'misc bloggers' as well. Under the hood, the modified searx code creates a single `<query> site:<site>` query for each site in the set which is the union of the different categories. In order to prevent rate limiting by any target search engine, these requests are jittered and distributed over all engines for which this functionality is configured.

If you'd like to experiment with this setup, all of the code is on GitHub [^5], you just need to follow the regular searx development documentation to get a local copy running -- in my case I just needed to checkout and `make run` -- and you can tweak the list of sites to suit your own tastes.

[^1]: <https://en.wikipedia.org/wiki/Rollyo>
[^2]: <https://www.customsearch.ai/>
[^3]: <https://programmablesearchengine.google.com/about/>
[^4]: <https://searx.github.io/searx/>
[^5]: <https://github.com/wcerfgba/searx>

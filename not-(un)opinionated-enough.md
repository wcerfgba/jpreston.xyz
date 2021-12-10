---
layout: page
title: Not (Un)opinionated Enough
date: '2021-12-10'
last_modified_at: '2021-12-10'
published: false
---

intro, definitions

[![](/assets/img/product_value_opinionatedness.svg)](/assets/img/product_value_opinionatedness.svg)

The above chart shows how the potential value that can be delivered to a user of a product varies with how opinionated the product is. Product value, considered from the perspective of hypothetical ideal users, peaks at the extreme ends of the chart, where products are either unopinionated and flexible, or opinionated and inflexible. We segment the chart into three regions: an area of opinionated products with a high value ceiling; an area of unopinionated products with a high value ceiling; and an area in the middle where products are neither sufficiently opinionated nor unopinionated, and the value ceiling is much lower as a result.

Unopinionated products have a high value ceiling because they allow the user to tailor the product and their use of it to fit their exact needs. With unopinionated products, the peak value is determined by how much effort the user is able to expend on customising the product to work in the required way. This is itself determined by the user's knowledge of the product, and how much time they have to configure the product. Therefore, it's important that unopinionated products provide great documentation, which makes it easy for the user to learn the different ways they _can_ use the product, and allows new users to quickly become 'power users' who can wield the product masterfully to fit their specific use case.

Most programming languages and spreadsheet applications fall on the unopinionated side of this chart: these tools may offer guidance about the 'best' or 'recommended' way to do something, but there are usually many ways someone can work with one of these products to achieve a specific outcome. Additionally, there is ample room for variation in style, such as how code is formatted or how columns are ordered. Such considerations may not affect the end result, but the user has the freedom to choose and change these considerations for whatever reasons they see fit.

explain assumptions e.g. cells, what is definition of 'opinionated'?

Opinionated products have a high value ceiling because they are designed specifically for certain types of users and with certain use cases in mind. With opinionated products, the peak value is determined by how well the product fits the user's needs. Because the user can't customise the product very much, the key to building an effective opinionated product is to know who your target users are: you must understand their needs, and how those needs vary across different users, and work closely with your users to ensure you are building the right thing. In a sense, opinionated products are self-documenting, because they 'hold the user's hand' as they interact with the product, and the constraints built in to the product tell the user how the product _should_ be used.

example

In the middle of the chart is the valley of products which are not (un)opinionated enough. These are products which offer some flexibility in how they can be used, but not enough flexibility for a user to shape the product to fit their needs. Conversely, these products provide users with a great deal of flexibility in areas where they don't need or want that flexibility, and where they would prefer the product to be more opinionated and recommend or provide the 'correct' solution. In other words, products in the valley provide freedom where there should be restrictions, and restrictions where there should be freedom.

Recently my company has started to migrate our internal document system away from Notion [1] and towards Coda [2], and this transition feels like it has taken me in to the valley: compared to Notion, Coda is definitely not (un)opinionated enough, and this is most clear when comparing their document models.

Notion's document model is quite simple: you have a workspace which can contain one or more pages, and each of those pages can contain one or more sub-pages. All pages are the same 'type' of thing and all behave in the same way. You will probably create a single workspace for all of your personal notes, or for your organisation, and organise your information by building a hierarchy of pages.

Coda's document model is much more complex. You start with a workspace again, but instead of putting pages inside the workspace, you create docs, which are bundles of pages, more like Notion's workspaces. Inside a doc, you have one or more pages, and those pages can also contain sub-pages. You can also group docs into folders. It might seem like a trivial change, but it's actually introduced a lot of cognitive overhead for me as a user. In Notion, we used to have a top-level page for each department, and then departments could structure their area of Notion however they liked. In Coda, we now have three options for how we could organise everything:

* One doc for the whole company, with pages for each department, and all department information as sub-pages, just like we used to use Notion;
* One doc for each department, with all department information as pages and sub-pages in the department doc;
* One folder for each department, with department information living in a series of docs, which then contain pages and sub-pages as required.

We are only a small company, but as each department has started to move over to Coda this is already creating friction because they have all started to split up their docs slightly differently, and it's become difficult to keep track of the different docs being created and used by different departments.

Having a document model with more concepts isn't an inherently bad idea, and if Coda explained why they have chosen this model and how it should be used, they could make a very opinionated product with a high value ceiling... but I haven't been able to find any documentation about why Coda works like this! Coda's tutorial-style documentation takes the form of videos [3] [4], and the first video starts off inside a doc, so it just assumes I already understand why this distinction is here! Their knowledge base [5] also doesn't provide an explanation.

Coda's workspace-folder-doc-page document model also has some strange consequences for other parts of the product. In Notion, each page has it's own revision history, but in Coda only docs have history, which means if two people make edits to two different pages in a doc at the same time, their changes will get smooshed together in the doc history. It's also not clear from the history view on which page the edits have been made, and it's not possible to restore a single page of a doc from a given revision.


[1] <https://notion.so/> \
[2] <https://coda.io/> \
[3] <https://coda.io/learn/coda-essentials-2> \
[4] Side rant: I really dislike that the tutorials are videos, because I can't skim or search a video like I can with a page of text with some images on it, and I want to learn how to use the product as quickly as possible. \
[5] <https://help.coda.io/en/>

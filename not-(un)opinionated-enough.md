---
layout: page
title: Not (Un)opinionated Enough
date: '2021-12-10'
last_modified_at: '2022-07-24'
---

This is an [[essay]] on ([[software]]) product development that I started writing in December 2021 but never finished. I've tried to polish this off and publish it so that it's actually 'out there' in the world and able to inspire other people's thoughts, but if it's a bit clunky to read, now you know why! 😅

Products are vehicles for delivering value to customers. Most often products deliver value by being use-objects: they are things which customers can use to perform a task and achieve a goal. For example, a can opener allows me to open a can, and an electric can opener allows me to open a can with less manual effort than a manual can opener.

We might say that a 'good' product is one which is largely successful in aiding its users in achieving their goals, whereas a 'bad' product would be one which is difficult to use, and/or produces highly variable results even when used in a consistent manner.

Product designers necessarily embed their assumptions about users and their use-cases into their products, because product use is inherently contextual. There is no 'everything machine' which can do everything, but rather people try to carry out specific actions, with specific objects, at specific times of the day, in specific environments, etc. Considerations for the design of a manual can opener include the grip strength of the user, the handedness of the user, and the size of the user's hands; whereas considerations for the design of an automatic can opener include the dimensions of different cans, and the proximity of the device to an electrical outlet.

I use the term 'opinionated' or 'opinionatedness' to refer to the different assumptions which are embedded in a product through its design, and the degree to which these assumptions either enable or restrict particular uses of the product. Opinionatedness is not inherently good or bad in terms of the value that _can_ be delivered to users, but rather the opinions of the designers must align with the needs of the users to achieve peak value delivery.

[![](/assets/img/product_value_opinionatedness.svg)](/assets/img/product_value_opinionatedness.svg)

The above chart illustrates my theory of how the _potential_ value that can be delivered to a user of a product varies with how opinionated the product is. The maximum hypothetical product value, considered from the perspective of hypothetical ideal user-designer alignment, peaks at the extreme ends of the chart, where products are either unopinionated and flexible, or opinionated and inflexible. We segment the chart into three regions: an area of opinionated products with a high value ceiling; an area of unopinionated products with a high value ceiling; and an area in the middle where products are neither sufficiently opinionated nor unopinionated, and the value ceiling is much lower as a result.

Unopinionated products have a high value ceiling because they allow the user to tailor the product and their use of it to fit their exact needs. With unopinionated products, the peak value is determined by how much effort the user is able to expend on customising the product to work in the required way. This is itself determined by the user's knowledge of the product, and how much time they have to configure the product. Therefore, it's important that unopinionated products provide great documentation, which makes it easy for the user to learn the different ways they _can_ use the product, and allows new users to quickly become 'power users' who can wield the product masterfully to fit their specific use case.

Most programming languages and spreadsheet applications fall on the unopinionated side of this chart: these tools may offer guidance about the 'best' or 'recommended' way to do something, but there are usually many ways someone can work with one of these products to achieve a specific outcome. Additionally, there is ample room for variation in style, such as how code is formatted or how columns are ordered. Such considerations may not affect the end result, but the user has the freedom to choose and change these considerations for whatever reasons they see fit.

Opinionated products have a high value ceiling because they are designed specifically for certain types of users and with certain use cases in mind. With opinionated products, the peak value is determined by how well the product fits the user's needs. Because the user can't customise the product very much, the key to building an effective opinionated product is to know who your target users are: you must understand their needs, and how those needs vary across different users, and work closely with your users to ensure you are building the right thing. In a sense, opinionated products are self-documenting, because they 'hold the user's hand' as they interact with the product, and the constraints built in to the product tell the user how the product _should_ be used.

Hacker News[^hn] is an example of an effective opinionated product. It assumes that the visitors most likely want to see highly upvoted and recent content, so this is what is featured on the homepage. The developers understand that downvotes can be used in non-productive ways (e.g. silencing opinions that are controversial but not necessarily offensive or off-topic) and so users only 'unlock' the downvote feature once they have sufficient 'karma' (which is rewarded for sharing posts and comments which other users upvote). These design decisions restrict and shape the interaction of users with the goal of fostering engagement and constructive discussions.

In the middle of the chart is the valley of products which are not (un)opinionated enough. These are products which offer some flexibility in how they can be used, but not enough flexibility for a user to shape the product to fit their needs. Conversely, these products provide users with a great deal of flexibility in areas where they don't need or want that flexibility, and where they would prefer the product to be more opinionated and recommend or provide the 'correct' solution. In other words, products in the valley provide freedom where there should be restrictions, and restrictions where there should be freedom.

While working at a prior employer it was decided that we were to migrate our internal document system away from Notion[^1] and towards Coda[^2], and this transition felt like it took me into the valley: compared to Notion, Coda is definitely not (un)opinionated enough, and this is most clear when comparing their document models.

Notion's document model is quite simple: you have a workspace which can contain one or more pages, and each of those pages can contain one or more sub-pages. All pages are the same 'type' of thing and all behave in the same way. You will probably create a single workspace for all of your personal notes, or for your organisation, and organise your information by building a hierarchy of pages.

Coda's document model is much more complex. You start with a workspace again, but instead of putting pages inside the workspace, you create docs, which are bundles of pages, more like Notion's workspaces. Inside a doc, you have one or more pages, and those pages can also contain sub-pages. You can also group docs into folders. It might seem like a trivial change, but it actually introduced a lot of cognitive overhead for me as a user. In Notion, we used to have a top-level page for each department, and then departments could structure their area of Notion however they liked. In Coda, we now have three options for how we could organise everything:

* One doc for the whole company, with pages for each department, and all department information as sub-pages, just like we used to use Notion;
* One doc for each department, with all department information as pages and sub-pages in the department doc;
* One folder for each department, with department information living in a series of docs, which then contain pages and sub-pages as required.

We were only a small company, but as each department had started to move over to Coda this was already creating friction because they all started to split up their docs slightly differently, and it became difficult to keep track of the different docs being created and used by different departments.

Having a document model with more concepts isn't an inherently bad idea, and if Coda explained why they have chosen this model and how it should be used, they could make a very opinionated product with a high value ceiling... but I haven't been able to find any documentation about _why_ Coda works like this! Coda's tutorial-style documentation takes the form of videos[^3][^4], and the first video starts off inside a doc, so it just assumes I already understand why this distinction is here! Their knowledge base[^5] also doesn't provide an explanation.

Coda's workspace-folder-doc-page document model also has some strange consequences for other parts of the product. In Notion, each page has it's own revision history, but in Coda only docs have history, which means if two people make edits to two different pages in a doc at the same time, their changes will get smooshed together in the doc history. It's also not clear from the history view on which page the edits have been made, and it's not possible to restore a single page of a doc from a given revision.

When designing a product, try to be conscious of the different assumptions you are making about your users and how they will use your product. Challenge these assumptions, question them, and talk to your users about them.

[^1]: <https://notion.so/>
[^2]: <https://coda.io/>
[^3]: <https://coda.io/learn/coda-essentials-2>
[^4]: Side rant: I really dislike that the tutorials are videos, because I can't skim or search a video like I can with a page of text with some images on it, and I want to learn how to use the product as quickly as possible. This is also an accessibility issue. If you want to provide audio or video documentation for your product, provide the transcripts as well!
[^5]: <https://help.coda.io/en/>
[^hn]: <https://news.ycombinator.com/>

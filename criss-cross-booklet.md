---
layout: page
title: Criss-Cross Booklet
date: '2021-08-07'
last_modified_at: '2021-08-07'
---

An [[invention]] to improve the ergonomics of unbound booklets.

I enjoy printing out academic papers and book chapters for reading, as opposed to using my cheap eInk e-reader. After struggling to find native Linux software which allows printing a PDF in the traditional booklet layout [1], I settled for installing Adobe Acrobat DC [2], which allows me to print a section of a PDF in the traditional booklet layout.

[![](/assets/img/booklet_standard.svg)](/assets/img/booklet_standard.svg)

In the above diagram, we see booklet layouts for 4-, 8-, and 12-page documents. One sheet of A4 can be folded in half and oriented landscape to print 2 portrait A5 pages on each side, for 4 pages per sheet -- this is called a _folio_. The diagram shows the folios from the top down, with the page numbers. You can see that for the traditional booklet layout, the page numbers follow a counter-clockwise semicircle.

The traditional booklet is intuitive and can be opened up to view two pages at a time. However, unless it is bound along the spine -- using a stitch or staples -- is is very unwieldy, because as soon as you turn the first page, you split the booklet in to two disconnected grouping of folios -- these are called _signatures_.

[![](/assets/img/booklet_standard_reading.svg)](/assets/img/booklet_standard_reading.svg)

The above diagram shows the effect of turning through a traditional booklet to read pages 2 and 3, and pages 4 and 5. As we turn page 1 and open the booklet, the first folio is no longer interwoven with the others, and so it floats and slips around. As we turn page 3, the second folio wraps around the first folio, but unwraps from the third folio, and so we have two disconnected signatures until we are completed with the booklet.

To avoid this, we can arrange the folios in a zig-zag or criss-cross pattern, so that each folio locks together with the next one.

[![](/assets/img/booklet_crisscross.svg)](/assets/img/booklet_crisscross.svg)

Above we see the layout diagram for a 4-, 8-, and 12-page criss-cross booklet. The page numberings are much more complex and instead of following a nice loop, they seem to 'snake' up and down the signature.

Although more complex, the advantage of the criss-cross booklet is that as pages are folded over, the folios remain interwoven and lock together much better, making it easier to use in an unbound state.

[![](/assets/img/booklet_crisscross_reading_1.svg)](/assets/img/booklet_crisscross_reading_1.svg)

Above we see the result of folding over page 1 on a 12-page criss-cross booklet. As we fold page 1 back, folio 1 wraps around folio 3, while folio 2 closes over both folios 1 and 3, thus maintaining the integrity of the signature. The disadvantage is that only one page can be read at once.

[![](/assets/img/booklet_crisscross_reading_2.svg)](/assets/img/booklet_crisscross_reading_2.svg)

As we continue and fold over page 2, folio 2 moves to wrap around the back of folios 1 and 3, and the process repeats itself as we continue to read, with folios weaving in to each other like a zip. Notice that the direction in which a page is turned alternates as we read through the booklet.

I am currently working on an algorithm to calculate the page numbers for each folio of a criss-cross booklet. This page will be updated with more information in the future.

[1] There is a section of the GNOME help webpages for Evince, the GNOME PDF reader, which provide algorithms for calculating the page numbers [1.1] but there is no calculator widget and nobody has implemented this in Evince or GNOME print settings yet 🙃.

[1.1] <https://help.gnome.org/users/evince/stable/print-booklet.html.en>

[2] Installing Adobe Acrobat DC on Linux was a _painful_ experience: between the absurd throttling of Adobe's file servers (I averaged about 10-20 KiB/s) and random crashes in the installer due to Wine config, it took me _multiple hours_ to get it working. In the end I had to use a Snap package [2.1].

[2.1] <https://github.com/mmtrt/acrordrdc>

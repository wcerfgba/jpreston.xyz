---
layout: default
no_linked_pages: true
hide_index_link: true
---

Hi, I'm John 👋 Thanks for visiting my site.

If you have any feedback, please email me at <code>website-21487@jpreston.xyz</code>.

All pages except for categories have an index date and a modification date.

The index date is the creation date of the underlying work that the page documents. For example, the page <a href="/old-fractal-art.html">old-fractal-art</a> was only created on this website on 2022-04-24, but the original artworks were created around 2007-09-08, and so the 2007 date serves as the index date.

<p>The modification date is the date the page received it's last significant update, or the date it was created.</p>

{%- include variables.html -%}

{%- assign date_format = "%Y-%m-%d" -%}
{%- assign pages = site.pages | sort_natural: "title" -%}
{%- assign i = 0 -%}

<table class="page-table sortable">
  <thead>
    <tr>
      <th>Index date</th>
      <th>Title</th>
      <th>Modification date</th>
    </tr>
  </thead>
  <tbody>
    {%- for page in pages -%}
      {%- if page.layout == "page" and page.in_tree != false and page.title -%}
        {%- assign i = i | plus: 1 -%}
        {%- assign page_name = page.name | split: '.' | first -%}
        {%- assign links_where_exp = "links[0] == '" | append: page_name | append: "'" -%}
        {%- assign page_backlinks = backlinks | where_exp: "links", links_where_exp | first | last -%}
        {%- assign page_links = links | where_exp: "links", links_where_exp | first | last -%}
        <tr>
          <td class="page-meta white-space-nowrap">{{ page.date | date: date_format }}</td>
          <td>
            <input type="checkbox" class="page-table-tree-toggle" id="page-table-tree-toggle-{{i}}">
            <label for="page-table-tree-toggle-{{i}}"></label>
            <a class="page-link" href="{{ page.url | relative_url }}">
              {{ page.title | escape }}
            </a>
            <ul class="page-tree-links">
              {%- for link in page_links -%}
                {%- assign link_name = link | append: '.md' -%}
                {%- assign subpage = pages | where: "name", link_name | first -%}
                <li>
                  <a class="page-link" href="{{ subpage.url | relative_url }}">
                    {{ subpage.title | escape }}
                  </a>
                </li>
              {%- endfor -%}
            </ul>
            <ul class="page-tree-backlinks">
              {%- for link in page_backlinks -%}
                {%- assign link_name = link | append: '.md' -%}
                {%- assign subpage = pages | where: "name", link_name | first -%}
                <li>
                  <a class="page-link" href="{{ subpage.url | relative_url }}">
                    {{ subpage.title | escape }}
                  </a>
                </li>
              {%- endfor -%}
            </ul>
          </td>
          <td class="page-meta white-space-nowrap">{{ page.last_modified_at | date: date_format }}</td>
        </tr>
      {%- endif -%}
    {%- endfor -%}
  </tbody>
</table>

<script src="{{ "/assets/js/sortable.min.js" | relative_url }}"></script>

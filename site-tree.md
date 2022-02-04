---
layout: page
title: Site tree
in_tree: false
---

{%- include variables.html -%}

{%- assign pages = site.pages | sort: "title" -%}
{%- if pages.size > 0 -%}
  <ul class="page-tree">
    {%- for page in pages -%}
      {%- if page.layout == "page" and page.in_tree != false and page.title -%}
        {%- assign page_name = page.name | split: '.' | first -%}
        {%- assign links_where_exp = "links[0] == '" | append: page_name | append: "'" -%}
        {%- assign page_backlinks = backlinks | where_exp: "links", links_where_exp | first | last -%}
        {%- assign page_links = links | where_exp: "links", links_where_exp | first | last -%}
        <li>
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
        </li>
      {%- endif -%}
    {%- endfor -%}
  </ul>
{%- endif -%}
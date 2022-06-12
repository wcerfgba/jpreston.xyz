---
layout: page
title: Pages by index date
in_tree: false
---

<p>All pages except for categories have an 'index date' which is the creation date of the underlying work that the page documents. For example, the page [[old-fractal-art]] was only created on this website on 2022-04-24, but the original artworks were created around 2007-09-08, and so the 2007 date serves as the index date.</p>

{%- assign pages = site.pages | sort: "date" | reverse -%}
{%- if pages.size > 0 -%}
  <table class="page-list">
    {%- assign date_format = "%Y-%m-%d" -%}
    {%- for page in pages -%}
      {%- if page.date -%}
        <tr>
          <td class="page-meta white-space-nowrap">{{ page.date | date: date_format }}</td>
          <td>
            <a class="page-link" href="{{ page.url | relative_url }}">
              {{ page.title | escape }}
            </a>
          </td>
        </tr>
      {%- endif -%}
    {%- endfor -%}
  </table>
{%- endif -%}

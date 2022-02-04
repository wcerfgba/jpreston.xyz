---
layout: page
title: Recently created pages
in_tree: false
---

{%- assign pages = site.pages | sort: "date" | reverse -%}
{%- if pages.size > 0 -%}
  <table class="page-list">
    {%- assign date_format = "%Y-%m-%d" -%}
    {%- for page in pages -%}
      {%- if page.date -%}
        <tr>
          <td class="page-meta padding-right-0-5 white-space-nowrap">{{ page.date | date: date_format }}</td>
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

---
layout: page
title: Recently changed pages
in_tree: false
---

{%- assign pages = site.pages | sort: "last_modified_at" | reverse -%}
{%- if pages.size > 0 -%}
  <table class="page-list">
    {%- assign date_format = "%Y-%m-%d" -%}
    {%- for page in pages -%}
      {%- if page.last_modified_at -%}
        <tr>
          <td class="page-meta padding-right-0-5 white-space-nowrap">{{ page.last_modified_at | date: date_format }}</td>
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

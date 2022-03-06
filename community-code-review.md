---
layout: page
title:
date: ''
last_modified_at: ''
published: false
---

```
{
  search(query: "label:ready-to-merge is:pr state:open", type: ISSUE, first: 5) {
    nodes {
      ... on PullRequest {
        number,
        title,
        repository {
          owner {
            login
          },
          name
        }
      }
    }
  }
}
```

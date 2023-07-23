---
layout: page
title: A Pyramid of Concerns for Code Review
date: '2022-11-01'
last_modified_at: '2023-07-23'
note: true
code: true
excerpt: |
  I once interviewed a software engineer for a role at a company and this was how they explained their approach to code review.
---

I once interviewed a software engineer for a role at a company and this was how they explained their approach to code review.

Pyramid of concerns from abstract to concrete. Each layer builds on the previous one and acts as a check of it.

1. Big picture
   1. What is the motivation for this change? Why are we doing this?
   2. How does this fit into the wider product and codebase? Is this iterable?
   3. Is this a complete 'story' of work?
2. Solution architecture
   1. How does the problem decompose?
   2. Does the solution fit the problem?
   3. What are the trade-offs, compromises, and assumptions?
3. Testability
   1. Can I poke the fns and play with the code and see what it does?
   2. Might not have tests now, but does the code lend itself well to automated testing?
4. Comprehension
   1. Are vars and fns named appropriately?
   2. Can I read this and grok it?
   3. Is this idiomatic to the language and the codebase?

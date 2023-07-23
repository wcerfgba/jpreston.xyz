---
layout: page
title: One Representation to Rule Them All?
date: '2022-11-01'
last_modified_at: '2023-07-23'
note: true
code: true
excerpt: |
   Thinking after [property-graphs-vs-reified-graphset-graphs](/property-graphs-vs-reified-graphset-graphs), the reified graphset-graph is not sufficient to represent e.g. an AST, because we want to have two nodes with the same 'identity'.
---

Thinking after [[property-graphs-vs-reified-graphset-graphs]], the reified graphset-graph is not sufficient to represent e.g. an AST, because we want to have two nodes with the same 'identity'.

Consider a chart displaying a regression with data points and credible intervals. We could represent this as a table or a graph but it's not useful! The representation and rendering of information is an essential component of how humans can understand and apply it.

This entails accessibility issues: if someone has aphantasia or blindness, how do we best represent information/data?

Is there a single 'language' we can use to: unambiguously represent data/information; in a way that is intuitive to humans; and has semantics allowing computers to operate on it?

Need to deconstruct the semantics of various existing representations, find commonalities, and then construct a new language for both describing a representation, and specifying the semantics associated with each element of that representation.

Notations are (semi-)formal methods for reifying abstract concepts. Notational elements are the components of a notation and the rules for composing them. Concepts are 'stuff in your head'? Representations are instances of notations which bind notational elements to concepts, and provide a way for individuals to communicate ideas through an agreed relationship between concepts and notational elements.


| Representation          | Concept             | Notational element  | Notation    |
|-------------------------|---------------------|---------------------|-------------|
| Abstract syntax tree    | Expression          | Vertex              | Graph       |
|                         | Parameter           |                     |             |
|                         | Literal             |                     |             |
|                         | Order of parameters | Horizontal position |             |
|                         | Order of operations | Directed edge       |             |
|                         |                     | Hierarchy           |             |
| Flowchart               | Step                | Vertex              | Graph       |
|                         | Type of step        | Shape               |             |
|                         | Order of operations | Directed edge       |             |
| Bland-Altman plot       | Mean                | Axis                | Scatterplot |
|                         |                     | Horizontal position |             |
|                         | Difference          | Axis                |             |
|                         |                     | Vertical position   |             |
|                         | Observation         | Point               |             |
| Histogram               | Bin                 | Axis                | Bar chart   |
|                         |                     | Horizontal position |             |
|                         | Count               | Axis                |             |
|                         |                     | Bar height          |             |
|                         | Category            | Colour              |             |
|                         |                     | Pattern             |             |
| Restaurant menu         | Course              | Heading             | ???         |
|                         |                     | Grouping            |             |
|                         | Dish                | ???                 |             |
|                         | Ingredients         | ???                 |             |
|                         | Dietary suitability | Icon                |             |
|                         |                     | Colour              |             |
|                         |                     | Grouping            |             |
|                         | Price               | ???                 |             |
| IKEA instructions       | Inventory           | Drawing             | Diagram?    |
|                         | Order of steps      | Sequence            |             |
|                         |                     | Numbering           |             |
|                         | Assembly            | Arrow               |             |
| Construction blueprints | ???                 | ???                 | ???         |
| World map               | Latitude            | Axis                | Map         |
|                         | Longitude           | Axis                |             |
|                         | Country             | Outline             |             |
|                         |                     | Colour              |             |
|                         |                     | Label               |             |
|                         | River               | Line                |             |
|                         |                     | Colour              |             |
|                         |                     | Label               |             |

How does a musical score work? Is it a representation or a notation, or both?

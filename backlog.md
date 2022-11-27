---
layout: page
title: Backlog
date: '2022-11-01'
last_modified_at: '2022-11-27'
---

I have a lot of ideas and not enough time or motivation to get them all over the line. On this page I am publicising some of my [[notes]] of ideas/project/writings that I haven't got around to finishing (or starting 😛) yet. I hope that putting out these ideas into the world in their natal state can still provide some use.

* Table of Contents
{:toc}

### Critical Watch Parties

Inspired by bell hooks' _Reel to Real_, critical watch parties are when people get together to watch media and comment on it critically. Facilitators may wish to display the timecode in the corner of the screen and provide notepads so that participants can write down their thoughts and reference particular scenes in the media. The watching may be preceded by the reading of a critical essay beforehand in order to prime participants ahead of viewing. After the media is completed, the facilitator should invite reflections and thoughts from the participants and can move the video back to noted timecodes in order to contextualise participant observations. It may be pragmatic to record the discussion or have someone taking notes so the discussion can be captured.

### Democracy micro-grants

Democracy only thrives when there is wide participation and engagement in it. However, people are not incentivised to engage in processes which may be complicated and require emotional and mental labour. Further, the lack of monetary compensation creates structural barriers for many people, particularly minoritised people. An organisation should exist to which people can apply for individual funding to participate in democracy, be that travelling to sit in a council meeting, or submit evidence to a committee.

### Electric velcro

Build a panel with a grid of induction loops behind it, then cover it in velcro fabric. Electrical items like LED lights can have a corresponding induction loop covered in the complementary velcro fabric, and thus lights, switches, sockets, etc. can be freely repositioned on the panel and connect to the electrical network via induction. Theoretically a whole room could be made like this, allowing electrical devices to be 'stuck on' (vs 'plugged in') anywhere.

### Ethical imperativism

This is the metaethical stance that only actions can be good or bad, not actors or situations/universes. What consequences does this have for ethical discourse?

### Little Critters

This is an idea for a game inspired by simulation games and language. The player is able to move freely around a map populated by various 'critters', social animals who communicate with a randomly generated language. Gameplay consists of the player observing the critters going about their activities and trying to learn the syntax and vocabulary of the language so that they can communicate with the critters and achieve some objective.

### Numeric Domain Names as Personal Digital Identifiers

* Domain names are the root of our digital identity
  * Allow associating multiple resources together
    * Email
    * Various web identities can be auto-discovered by metadata
    * Or managed via subdomains
  * Email providers change but owning the domain preserves the address
  * Ability to use catch-all email
* Numerals have several advantages over letters and words for building identifiers
  * Ubiquitous: vast majority of languages have an associated numeral system and script
  * Easily communicable
  * Easily translatable
  * Generatable
  * No natural claims to ownership
  * Familiar: telephone numbers
* We need to promote ownership of digital identity
* Successful promotion of digital identity ownership requires:
  * Free
  * Easy
  * Useful
* Solution
  * A new .n sTLD
  * Anyone can request a free .n domain
  * Domains are randomly generated
  * 12 digits, to allow for at least one domain for everyone on Earth at 10 billion people, plus posterity
  * e.g. 249268778743.n
  * What about formatting for reading?

### One Representation to Rule Them All?

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

### Optimal latency for video calls

I was on the phone to my partner the other day while he was walking back from church and I realised that the latency on a mobile phone call is quite high -- maybe about a second -- but we have no problem with accidentally starting to talk over each other. I found this very strange because I've been on video calls with what I assume is much lower latency, and it seems quite common for people so start talking at the same time, particularly as a group.

This makes me wonder if the additional visual information included in a video call changes the timing behaviour of participants. I also wonder if there if 'simultaneous start-ups' have a non-linear response to latency: is there an optimal, non-zero amount of latency in a video call which reduces the rate of simultaneous start-ups?

I had a quick look for scholarly articles on this but so far the closest thing I've found is this article which discusses the issue, but I haven't found anyone trying to directly measure the effect of latency on this phenomenon.

> Malabarba, Taiane, Anna C. Oliveira Mendes, and Joseane de Souza. ‘Multimodal Resolution of Overlapping Talk in Video-Mediated L2 Instruction’. Languages 7, no. 2 (June 2022): 154. <https://doi.org/10.3390/languages7020154>.


### Pleodimensionalism

Meaning "the doctrine of more dimensions", pleodimensionalism is a call to always look beyond the current practice around data, numbers, and statistics, and to ask what additional information may be useful when communicating results. Too often research publications (be they scientific, governmental, or otherwise) rely on single numbers for effect size estimates and trend lines. However, all numbers are drawn from some distribution, and these distributions are rarely normal. As research communicators, we should seek to describe the full shape of the distributions which underpin our results.

### A Pyramid of Concerns for Code Review

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

### Save Azimuth Here

Often I am out walking and I see a good scene I would like to photograph, but I don't have my DSLR. I would like an app on my phone which will take a photo, and will use the geotag and datetime information to infer the solar azimuth and zenith angles and provide a calendar of other datetimes when the sun will be in the same or a similar position. This would allow me to schedule a time to go back and take the photograph I want with my DSLR.

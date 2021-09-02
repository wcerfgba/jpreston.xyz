---
layout: page
title: Notes on Organization Design
date: '2021-09-02'
last_modified_at: '2021-09-02'
---

Some [[notes]] on organization design. This is a living document and will be updated over time as I develop my "Grand Unified Theory of Organizations".

### What is organization design?

Organization design is the application of design thinking and design processes for the purpose of creating effective organizations, such as businesses. Design is a wide-reaching approach to solution development which involves:

* Understanding of a problem or desired outcome from multiple perspectives
* Finding inspiration, allowing our conscious and subconscious minds to bubble
* Generation of ideas and concepts
* Exploration of the solution space, and the trade-offs of different solutions
* Prototyping and rapid evaluation of potential solutions
* Formation of a plan to bring about a chosen solution
* Execution of that plan

Organizations are groups of individuals who share an objective, and seek to achieve that objective by coordinated action, which is managed by certain structures and processes.

### Models of the organization

These are useful for understanding the different factors which constitute an organization and how those factors influence each other.

#### Leavitt's Diamond

* Technology
* Tasks
* People
* Structure

#### Galbraith's Star

* Strategy
* Structure
* Process
* Rewards
* People

#### McKinsey's 7-S

![](/assets/img/McKinsey_7S_framework.svg)

#### Burke-Litwin

![](/assets/img/Burke-Litwin.jpg)

### Factor dependencies

Some factors are more 'primary' than others, in the sense that one factor cannot exist without another being defined first. In other words, some factors are dependencies of other factors.

### Objectives

Objectives are statements about the world that a person wants to be true. Examples include "retire before I am 50", "make $50 million annual recurring revenue", and "be the market leader in widget manufacturing". This definition is intentionally open and allows defining some questionable objectives, such as "brie is better than camembert", which is subjective (a matter of each person's taste), not easily measured (what is "better"?), and not well-scoped (does everyone have to think brie is better, or just myself?).

The most fundamental or primary factor are the organization's objectives. Without a set of goals to achieve, there is no reason for different people to come together, and there is no reason why any particular processes or structures should be used over others.

Objectives may form their own tree of dependencies, where some objectives are a necessary condition for achieving others. For example "win the lottery" is conditional on "hold a valid lottery ticket", which is conditional on "have enough money to buy a lottery ticket".

Individual members will have their own objectives, for example many employees of a firm have "receive a salary" as their primary (or only!) objective. They participate in the organization because that participation allows them to achieve their objectives. In order to fulfil the individual objectives of it's members, the organization must also have it's own objectives which obtain the requirements for fulfilling those objectives ("earn enough revenue to cover staffing costs") and which mirror those individual objectives ("maintain a body of staff" in order to achieve the other objectives, and "pay staff a competitive wage" in order to maintain that body of staff).

### Processes

A process is an algorithm. It defines a sequence of steps which must be carried out by one or more individuals, the inputs they require, and the outputs they produce. Examples of processes include "hire an engineer", "process payroll", "manufacture a widget", and "sell a widget".

Processes are dependent on objectives, because we need to know what we want before we can decide how we can get it.

Processes may define roles and deliverables, and may be recursive or initiate other processes. Consider the following set of processes:

* Hire an Engineer
  1. The Hiring Manager takes a set of job applications from the Engineering Job Applications inbox.
  2. The Hiring Manager reads each application to determine if we should interview the candidate.
     1. If the application meets all of the criteria in the Engineer Application Screening Checklist, the application moves to the next stage.
     2. Otherwise the application is discarded.
  3. The Hiring Manager assigns an Interviewer to each valid application.
  4. Each Interviewer confirms they are willing and able to interview the candidates they have been assigned.
     1. If an Interviewer cannot interview a particular candidate, that candidate returns to step 3 and the Hiring Manager must assign a different Interviewer.
     2. If after multiple assignments the Hiring Manager cannot find anyone to interview the candidate, the application is returned to the inbox or discarded, at the Hiring Manager's discretion.
  5. At this stage all sifted candidates have an assigned Interviewer, and each Interviewer has approved all of their candidates for interview.
  6. The Hiring Manager emails each candidate to connect them with their Interviewer, so they may arrange a time to conduct the interview between themselves.
  7. Each Interviewer interviews each candidate according to the "Interview an Engineering Candidate" process.
  8. Each Interviewer reports back to the Hiring Manager with their notes and recommendation.
  9. The Hiring Manager chooses a set of recommendations on which to make an offer, at their discretion.
     1.  The Hiring Manager cannot choose to hire a candidate who has received a "do not hire" recommendation from the relevant Interviewer.
  10. The Hiring Manager submits an offer or rejection letter to each candidate, subject to their decision.
  11. If a candidate accepts an offer, the Hiring Manager forwards on the acceptance email to HR, who begin the "Onboard an Engineer" process.
* Interview an Engineering Candidate
* Onboard an Engineer


### Structures

Organizations contain many structures, which are networks of relationships between members and resources.

Structures are dependent on processes, because a process defines the interactions betweens members and resources which constitute a structure.

### Bibliography

Daft, Richard L. Organization Theory and Design. Cengage Learning, 2012.

Irwin, Christine, and Patricia Cichocki. Organization Design: A Guide to Building Effective Organizations. Kogan Page Publishers, 2011.

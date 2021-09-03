---
layout: page
title: Notes on Organization Design
date: '2021-09-02'
last_modified_at: '2021-09-03'
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

The most fundamental or primary factor is the organization's objectives. Without a set of goals to achieve, there is no reason for different people to come together, and there is no reason why any particular processes or structures should be used over others. All other factors of an organization are influenced by the objectives, and an organization can be said to be 'well-designed' if the other factors allow the organization to successfully achieve its objectives.

Objectives may form their own tree of dependencies, where some objectives are a necessary condition for achieving others. For example "win the lottery" is conditional on "hold a valid lottery ticket", which is conditional on "have enough money to buy a lottery ticket".

Individual members will have their own objectives, for example many employees of a firm have "receive a salary" as their primary (or only!) objective. They participate in the organization because that participation allows them to achieve their objectives. In order to fulfil the individual objectives of its members, the organization must also have its own objectives which obtain the requirements for fulfilling those objectives ("earn enough revenue to cover staffing costs") and which mirror those individual objectives ("maintain a body of staff" in order to achieve the other objectives, and "pay staff a competitive wage" in order to maintain that body of staff).

#### Comparison with OKRs and KPIs

There are many tools and frameworks an organization can use for thinking about and setting its objectives and measuring how well the organization is meeting those objectives. OKRs and KPIs are two common tools.

In OKR thinking, an objective should be inspirational and may be qualitative, it does not have to be directly measurable, whereas a key result is a metric and has to be measurable. Key results are used to determine if the organization is on track to achieve its objectives.

KPIs may be qualitative or quantitative but they are inherently metrics, because each KPI has a value which may change over time. In this respect KPIs are essentially the same as OKR's key results, except with OKRs the 'true' objective is make explicit, whereas with a KPI there is an implicit assumption that the organization wants to achieve a certain value of that KPI because that is good, or an objective, in and of itself. Hence why many organizations prefer OKR thinking to KPI thinking: writing down the objective separately to the metrics reminds us of our 'true' goal and prevents us from over-optimizing the metrics without attention to how the metric and the goal can start to diverge. OKRs advance KPIs by incorporating Goodhart's law, as expressed by Marilyn Strathern: "when a measure becomes a target, it ceases to be a good measure".

Since a OKR-objective _can_ be measurable, and because larger organizations tend to have deeper structures, it is not uncommon for there to be multiple sets of OKRs which connect into a tree, where the key result of one department becomes an objective for a subdepartment, who may then choose their own key results. This can be an explicit part of the process for how OKRs are deployed in an organization, but it may also arise more as an artifact of well-aligned 'strategic' and 'tactical' OKRs, rather than as a step-by-step 'cascade' [1].

With KPIs there is an implicit and unstated assumption that a certain value for each KPI is good, but this can create problems. Firstly, if this is unstated, it is not obvious that everyone in the organization has the same idea of what the optimal value, or range of values is. Secondly, the optimal value for a KPI may change over time and in response to other KPIs. For example, if "manufactured widgets per day" is high then I want "widgets sold per day" to be high so I don't amass a big inventory of widgets, and likewise if sales are high I want manufacturing to keep up with demand. Conversely, if sales are low then I need to reduce production, and if production is low then it will put a limit on how much we can sell. This latter scenario is particularly interesting because it means a poor KPI in sales does not indicate a problem in the sales department, it may indicate a problem in another area of the organization which affects sales. OKR's key results can also suffer from this "unspecified optimum value" problem, but the objective part of the OKR framework seeks to offset this.

The definition I provide of an objective as "a statement someone wants to be true" subsumes OKR-objectives, key results, and KPIs. Objectives can nest and form a tree, and can developed in a top-down, bottom-up, or hybrid fashion. If an objective can be easily measured in a quantitative sense, like "widgets sold per day", this can be very useful, but it is not essential. However, objectives should be 'objective' in the sense that any member of the organization should be able to determine if the objective has been or is being met, even if there is effort involved in obtaining all relevant information. In other words, there should be no room for one person to say "the objective has been met" and another person to say "the objective has not been met": objectives serve to align all members of the organization on both the current state of the world, and the intended state that the organization wishes to arrive at.

### Processes

A process is an algorithm. It defines a sequence of steps which must be carried out by one or more individuals, the inputs they require, and the outputs they produce. Examples of processes include "hire an engineer", "process payroll", "manufacture a widget", and "sell a widget". Without processes, the world is static and unchanging: it is only because people and nature do 'things' over time that we have a concept of a past, present, and future which are different and not identical.

When considered from the meta-perspective of organization design, the development of objectives is a process. However, from the perspective of the organization itself and its day-to-day activity (since organizations do not typically change their objectives on a daily or weekly basis), processes are dependent on objectives, because we need to know what we want before we can decide how we can get it. If objectives describe how we should measure the current state of the world, and tell us what state we want the world to be in, processes are the tools which allow us to change the world and move us towards that ideal state.

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
     1. The Hiring Manager cannot choose to hire a candidate who has received a "do not hire" recommendation from the relevant Interviewer.
  10. The Hiring Manager submits an offer or rejection letter to each candidate, subject to their decision.
  11. If a candidate accepts an offer, the Hiring Manager forwards on the acceptance email to HR, who begin the "Onboard an Engineer" process.
* Interview an Engineering Candidate
  1. The Interviewer arranges a one-hour call with the candidate.
  2. Over the course of the interview, the Interviewer asks each question on the Engineering Interview Questions Checklist
  3. The Interviewer should take notes throughout the interview to help them with summarising their findings later.
  4. After the interview, the Interviewer must write up a recommendation.
     1. The recommendation is either "hire" or "don't hire".
     2. The recommendation should include a summary of the findings from each section of the Interview Questions Checklist, justifying the overall recommendation.
  5. The Interviewer submits the recommendation to the Hiring Manager who originally requested the interview.
* Onboard an Engineer
  1. The HR department receives an offer acceptance email.
  2. The Head of HR creates a task in Asana to perform the onboarding and assigns a member of the department, at their discretion.
  3. The assigned member completes their part of the Engineer Onboarding Checklist on the Asana task.
     1. This includes:
        1. Setting up an Asana account for the new Engineer.
        2. Assigning them to the task so they can complete their portion of the Checklist.
        3. Explaining what onboarding tasks the new Engineer has to complete.
  4. The assigned HR person notifies the Head of Engineering via an @-mention on the Asana task.
  5. The Head of Engineering completes their part of the Checklist.
     1. This includes:
        1. Arranging a call with the new Engineer to welcome them to the team.

<!-- TODO metaprocesses, bootstrapping and pyramid, subsumption of many functions from many models as 'processes', culture and implicit/unwritten processes, tedium and pedantry, the appropriate level of detail, policy as (external) constraints on processes -->

### Structures

Organizations contain many structures, which are networks of relationships between members and resources.

Structures are dependent on processes, because a process defines the interactions betweens members and resources which constitute a structure. We can describe many structures in an organization, such as a tree of departments and teams, or a tree of managers and their reports, or a RACI grid, but all of these structures exist as a 'shadow' of the processes which are operating within the organization on daily, weekly, and monthly bases. If a worker never has to communicate with their manager or vice versa, it is questionable if there should really be a line connecting them in the org chart, and if that manager-report structure and relationship really exists in that case.

### References

[1] <https://felipecastro.com/en/okr/okrs-not-cascade/>

### Bibliography

Atlassian. ‘What Is Agile?’ Atlassian. Accessed 3 September 2021. <https://www.atlassian.com/agile>.

Daft, Richard L. Organization Theory and Design. Cengage Learning, 2012.

Irwin, Christine, and Patricia Cichocki. Organization Design: A Guide to Building Effective Organizations. Kogan Page Publishers, 2011.

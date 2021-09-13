---
layout: page
title: Notes on Organization Design
date: '2021-09-02'
last_modified_at: '2021-09-13'
---

These [[notes]] are a living document as I move towards an essay documenting a new theory of the organization.

-----

This essay presents my thoughts on the nature of organizations: the factors that make up what an 'organization' is, how those factors interrelate, and what it means for these factors to be well-designed. I show how the factors I define in my 'WOPRS' model relate to factors and components in other theories of the organization, such as the McKinsey 7S model and the Burke-Litwin model. I discuss some of the meta-processes an organization may carry out, and provide a minimal blueprint for developing new and existing organizations.

* Table of Contents
{:toc}

<!-- TODO motivation, background, quick summary -->

### Basic definitions

Organizations are groups of individuals who share one or more objectives, and seek to achieve those objectives by coordinated action, which is managed by certain structures and processes.

Organization design is the application of design thinking and design processes for the purpose of creating effective organizations, such as businesses.

Design is a wide-reaching approach to solution development which involves:

* Understanding of a problem or desired outcome from multiple perspectives
* Finding inspiration, allowing our conscious and subconscious minds to bubble
* Generation of ideas and concepts
* Exploration of the solution space, and the trade-offs of different solutions
* Prototyping and rapid evaluation of potential solutions
* Formation of a plan to bring about a chosen solution
* Execution of that plan
* Liaising with other stakeholders throughout this process

### Existing theories of the organization

Many theories and models of the organization and organizational change break down the abstract concept of the organization into a set of interconnected factors. These factors influence each other in specific ways, which leads to the success or failure of the organization and any initiatives to redesign it.

The following models are quite common in the literature, and I define the different factors that constitute these models. Later on as I develop the WOPRS model I will reference these factors and show how WOPRS generalizes them.

#### Leavitt's Diamond

* People -- the individuals who constitute the membership of the organization
* Tasks -- the actions taken by members of the organization
* Technology -- the non-human resources which members use as part of carrying out their tasks, such as buildings, desks, computers, software, process inputs, etc.
* Structure -- the formal and informal relationships between people and technologies, such as information flows, departmental hierarchy, layers of management, etc.

#### Galbraith's Star

* Strategy -- the goals, objectives, values and missions of the organization
* Structure -- the placement of power and authority
* Process -- how information flows around the structure
* Rewards -- a system to incentivise and motivate members
* People -- human resource policies

#### McKinsey's 7S

* Style -- informal rules of conduct, culture, how members operate between the gaps of particular processes
* Skills -- the capabilities of the organization, its subgroups, and its members
* Systems -- processes, how work is done
* Structure -- authority relations
* Staff -- members, their intrinsic talents, diversity of membership
* Strategy -- main functions of the organization
* Shared values or superordinate goals -- what does the organization want to achieve, social missions

#### Burke-Litwin

* External environment -- the world the organization lives within: economic climate, wider cultural values, competition and market situation, etc.
* Mission and strategy -- purpose and goals
* Leadership -- the members responsible for determining and communicating the mission and strategy, and leading organizational change
* Culture -- norms, behaviours, and value systems
* Structure -- hierarchies, departments, lines of communication and decision making relationships
* Systems -- rules and regulations, policies, and procedures
* Management practice -- behaviour of managers towards strategy and change
* Working climate -- the attitude of members, how they feel about leadership, management and culture
* Tasks and skills -- actions required to be completed by members and their capacities for successful execution
* Individual values and needs -- principles and objectives of individual members
* Motivational level -- the level of commitment and alignment that individuals have to the organization's goals
* Individual and organizational performance -- successful completion of tasks by members and successful achievement of the mission by the organization

#### Purpose and criticism of existing models

The documented models primarily aim to assist organization designers with understanding the factors involved in creating change and how they interact. Some of the factor definitions are inherently vague or overlapping, because these models are not supposed to provide a rigorous definition of what an organization is, but instead are supposed to stimulate the mind of the organization designer throughout the ideation and evaluation processes, and to allow the designer to make sure they are considering all the different angles and perspectives, creating a 'complete picture' throughout the design process. In other words, they are 'tools for thought'.

For example, in McKinsey's 7S model, there is overlap between skills, systems, and strategy -- as I will demonstrate later in WOPRS, these can all be reduced to 'processes'. Likewise in Burke-Litwin, working climate, motivational level, and culture also overlap, whereas in WOPRS these factors are instead viewed as particular objectives and processes.

Despite these overlaps, when we ask "what is X in this organization/team/individual?" or "how will changing X affect this organization/team/individual?" or "how do X and Y interact?", we will come up with different ideas for different factors, and this is why these models are useful as design tools: they assist with thinking and exploration, rather than concrete definition.

This lack of concrete definition and hard separation between these factors can create problems later in the change process when we are trying to develop a particular design or transformation. Where do we start, and where do we end? What needs to be re-evaluated along the way, and what can remain the same? When we are dealing with the specifics of one particular organization, we want to be able to identify specific problems, and determine specific changes and their effects.

For example, imagine a software company that uses Asana for managing a Kanban-style product development workflow. The Sales department are finding it hard to understand how the roadmap is changing when a project has to be extended a few weeks due to unforeseen complexity, and the project managers in the Product team are struggling to reorganise the roadmap in response to these delays. Team members take some time to do some organization design thinking and evaluate the problems through the aforementioned models, and many perspectives are formed:

1. Asana doesn't provide the right kind of insight into the roadmap.
   1. It doesn't have a good timeline view for scheduling projects.
   2. It doesn't make it easy to update the wider company when the roadmap changes.
   3. It doesn't let us experiment with the roadmap, weigh all the factors, and determine what the roadmap should look like.
   4. It doesn't allow us to attach explanations to the roadmap, so Sales don't know why the roadmap is the way it is.
2. The Kanban process is not suitable for the kinds of projects we are working on right now.
   1. There is no timeboxing of projects or tickets, so some people get bogged down in complexity and are required to press ahead until they can move the ticket on, which creates a drain of available engineers.
   2. Projects get fragmented into smaller tickets which deliver technical slices of the solution (e.g. "update database tables", "implement API", "implement frontend") but which don't deliver tangible outcomes to our customers or the business.
   3. The PM spends a lot of time trying to prioritise work that has been pushed into the backlog, but the analysis on this work has started to go 'stale' and become out of date by the time the projects are prioritised.

Some solutions are proposed:

1. Switch from Asana to JIRA and Confluence
   1. It has a better timeline view.
   2. It can send people notifications when start dates are changed.
   3. It can associate the roadmap with an explanation document.
2. Kill the backlog.
   1. Instead the PM will meet with stakeholders each week to determine upcoming work as we move along the roadmap.
3. Projects in the Kanban will not be split up in to smaller tickets.
   1. Instead the engineers and designers on each project can organise their own workflow as they see fit, until the project is finally delivered.
4. Projects are given a grace period of one week beyond their deadline, to allow for unseen complexity.
   1. If the project can't be delivered in that time, it's removed from the board and development continues along the roadmap as if it had been successfully delivered.
   2. The PM must incorporate this grace period in to the roadmap as it is built out.
   3. The PM must notify Sales as soon as the grace period is entered and whenever a project is cancelled.

There are many other possible solutions, but even this small set of changes would affect style, systems, structure, leadership, culture, working climate, and motivation. I will avoid a SWOT analysis of these changes here as this is merely an illustrative example to demonstrate the complexity and specificity involved in organization design 'in the trenches'. The existing models do not address how these problems are identified, how solutions are developed and adopted, and how this adoption is communicated and monitored. WOPRS aims to codify these processes and enable organizations to successfully enact continuous and specific changes to address their specific needs and problems.

### The WOPRS model

WOPRS consists of five primary factors which interact in specific ways, depending on the perspective or 'mode' in which the theory is being applied. The primary factors are:

* World
* Objectives
* Processes
* Resources
* Structures

The first mode is the 'standard', or 'business as usual' mode. This is how the members of an organization understand the organization on a day-to-day basis as it operates and tries to achieve its objectives. In the standard mode, each factor builds on and is determined by the preceding factors in the order given in the model name: world, objectives, processes, resources, and finally structures.

The second mode is the 'meta', or 'change' or 'design' mode. This is how an organization designer sees the different factors as influencing each other in the context of trying to bring about an organizational transformation or change. From the meta perspective, there is no clear root factor or sequence in which the factors should be considered, because they push and pull on each other in mutual and symbiotic ways.

I will now define and discuss each factor in order according to the standard mode.

#### World

The world is the set of true statements about the objective reality which surrounds us. "The sky is blue", "goats cheese is made from milk from goats", "if I don't water my plants, they will die", and "UK law requires a company to file a tax return each year", are all true statements, and largely free of controversy, meaning most people will immediately agree that these statements are all true without argument (even if there are interesting philosophical rabbit-holes, such as what 'blue' is).

In the standard mode, the world is our most fundamental factor, because it defines the current state of affairs which inspire, motivate, and constrain our imagined way of how the world could be, and what is possible for us to achieve; the world is the 'is' to the 'ought' of our objectives.

In the meta mode, the world constrains our processes and resources, through external policy. Statements like "UK law requires a company to file a tax return each year" are an example of such an external policy: a limitation on a process, or an objective that must be met, to avoid an existential threat to the existence of the organization -- in this case, legal action from Revenue and Customs.

The organization can bring about changes in the world through its processes. When the world changes, it may be necessary to re-evaluate all other factors, particularly objectives and processes.

World corresponds to external environment in Burke-Litwin, and is notably missing from other models. World also serves to describe the current status of the organization, since the organization is situated inside the world. In this way, factors such as Burke-Litwin's culture, working climate, and motivational level appear in WOPRS as statements in both world and objectives: there is a current culture, climate, and motivation, and there is also an ideal culture, climate, and motivation.

Beliefs can also appear in the world factor as statements of the form "X believes Y", such as "our organization (i.e. all members) believe that brie is better than camembert". When documenting the world, you may need to take care to distinguish between 'facts' and beliefs. Philosophically we may argue that a 'fact' is just a belief in which we have a very high level of confidence, and pragmatically we may argue that we should be confident of any belief worth stating. Fundamentally, what world-statements are relevant for your organization and if a distinction between facts and beliefs is relevant depends on your objectives, and you must decide what world-statements need documenting and connecting to your objectives, if any.

#### Objectives

Objectives are statements about the world that a person _wants_ to be true. Examples include "retire before I am 50", "make $50 million annual recurring revenue", and "be the market leader in widget manufacturing". These examples are phrased as actions, but they can be trivially rewritten as statements whic hare either true (achieved) or false (unachieved). The given definition is intentionally open and allows defining some questionable objectives, such as "brie is better than camembert", which is subjective (a matter of each person's taste), not easily measured (what is "better"?), and not well-scoped (does everyone have to think brie is better, or just myself?).

In the standard mode, objectives follow directly from the world, because individuals have desires and wish the world to be in a different state, and it is when a group of people share a set of common objectives that they come together to form an organization in order to successfully achieve those objectives. Additionally, an organization must know what its objectives are before it can define processes and structures, because these other factors only exist to ensure that the objectives are secured. An organization can be said to be 'well-designed' if the other factors allow the organization to successfully achieve its objectives.

Objectives are constrained by the world because some objectives are unrealistic or unachievable ("make the sky green"), and others are already true ("this is a sentence"), in which case there is no need to try and achieve them.

In the meta mode, the construction of objectives is itself a process, where an organization designer attempts to list the different objectives, their priorities, and their relationships. Thus the objectives are influenced by the specifics of the "determine objectives" meta-process.

Objectives may form their own tree of dependencies, where some objectives are a necessary condition for achieving others. For example "win the lottery" is conditional on "hold a valid lottery ticket", which is conditional on "have enough money to buy a lottery ticket". Because of this, objectives can developed in a top-down, bottom-up, or hybrid fashion, as is common with OKRs.

If an objective can be easily measured in a quantitative sense, like "widgets sold per day", this can be very useful, but it is not essential. However, objectives should be 'objective' in the sense that any member of the organization should be able to determine if the objective has been or is being met, even if there is effort involved in obtaining all relevant information. In other words, there should be no room for one person to say "the objective has been met" and another person to say "the objective has not been met": objectives serve to align all members of the organization on both the current state of the world, and the intended state that the organization wishes to arrive at.

Individual members will have their own objectives, for example many employees of a firm have "receive a salary" as their primary (or only!) objective. They participate in the organization because that participation allows them to achieve their objectives. In order to fulfil the individual objectives of its members, the organization must also have its own objectives which obtain the requirements for fulfilling those objectives ("earn enough revenue to cover staffing costs") and which mirror those individual objectives ("maintain a body of staff" in order to achieve the other objectives, and "pay staff a competitive wage" in order to maintain that body of staff).

Galbraith's rewards constitute a nexus of particular objectives and processes, such as the previous salary example, or a yearly bonus. Members have an objective of "earn a bonus" and the organization has the objective "incentivise members", which is supported by the additional objective of "pay members a bonus if they help the organization to achieve certain objectives".

McKinsey's shared values and Burke-Litwin's mission and strategy map directly on to WOPRS' objectives.

##### Comparison with OKRs and KPIs

There are many tools and frameworks an organization can use for thinking about and setting its objectives and measuring how well the organization is meeting those objectives. OKRs and KPIs are two common tools.

In OKR thinking, an objective should be inspirational and may be qualitative and un-measurable, whereas a key result is a metric (it has to be measurable). Key results are used to determine if the organization is on track to achieve its objectives.

KPIs may be qualitative or quantitative but they are inherently metrics, because each KPI has a value which may change over time. In this respect KPIs are essentially the same as OKR's key results, except with OKRs the 'true' objective is make explicit, whereas with a KPI there is an implicit assumption that the organization wants to achieve a certain value of that KPI because that is good, or an objective, in and of itself. Hence why many organizations prefer OKR thinking to KPI thinking: writing down the objective separately to the metrics reminds us of our 'true' goal and prevents us from over-optimizing the metrics without attention to how the metric and the goal can start to diverge. OKRs advance KPIs by incorporating Goodhart's law, as expressed by Marilyn Strathern: "when a measure becomes a target, it ceases to be a good measure".

Since a OKR-objective _can_ be measurable, and because larger organizations tend to have deeper structures, it is not uncommon for there to be multiple sets of OKRs which connect into a tree, where the key result of one department becomes an objective for a subdepartment, who may then choose their own key results. This can be an explicit part of the process for how OKRs are deployed in an organization, but it may also arise more as an artifact of well-aligned 'strategic' and 'tactical' OKRs, rather than as a step-by-step 'cascade' (see Castro 2016).

With KPIs there is an implicit and unstated assumption that a certain value for each KPI is good, but this can create problems. Firstly, if this is unstated, it is not obvious that everyone in the organization has the same idea of what the optimal value, or range of values is. Secondly, the optimal value for a KPI may change over time and in response to other KPIs. For example, if "manufactured widgets per day" is high then I want "widgets sold per day" to be high so I don't amass a big inventory of widgets, and likewise if sales are high I want manufacturing to keep up with demand. Conversely, if sales are low then I need to reduce production, and if production is low then it will put a limit on how much I can sell. This latter scenario is particularly interesting because it means a poor KPI in sales does not indicate a problem in the sales department, it may indicate a problem in another area of the organization which affects sales. OKR's key results can also suffer from this "unspecified optimum value" problem, but the objective part of the OKR framework seeks to offset this. Additionally, key results can be phrased as "value of X should be above/below/equal to Y" to incorporate the optimum value explicitly.

The definition I provide of an objective as "a statement someone wants to be true" subsumes OKR's objectives and key results, and KPIs, when they are phrased to include the optimum value.

#### Processes

A process is an algorithm. It defines a sequence of steps which must be carried out by one or more individuals, the inputs they require, and the outputs they produce. Examples of processes include "hire an engineer", "process payroll", "manufacture a widget", and "sell a widget". Without processes, the world is static and unchanging: it is only because people and nature 'do' things over time that we have a concept of a past, present, and future which are different and not identical.

In the standard mode, processes are dependent on objectives, because we need to know what we want before we can decide how we can get it. If objectives describe how we should measure the current state of the world, and tell us what state we want the world to be in, processes are the tools which allow us to change the world and move us towards that ideal state.

In the meta mode, the development of an organization, its objectives and other factors are themselves processes. Even the action of writing a process is itself a process! These meta-processes are very commonly undocumented, and this presents a huge gap in the day-to-day life of organizations, and organization design thinking. How are processes developed? Who develops them? What's involved? How does a new process replace an old process? Who needs to be consulted? All these questions and more are addressed by defining your meta-processes (processes which operate on processes) and a key feature of the WOPRS model is to explicitly document these meta-processes, as we will see later.

Processes subsume Leavitt's tasks, McKinsey's systems, and various factors in Burke-Litwin including systems and tasks and skills.

##### Culture and style as unwritten processes

Culture and style constitute a set of unwritten beliefs (world) and processes which affect working climate and motivation. Behaviours like greeting your colleagues in the morning, going out for lunch together, advertising meetings publicly and allowing people to sit in and observe, encouraging engineers to talk directly with customers, regular 1:1 meetings between colleagues, and so many more practices, are often undocumented or implicit, arise organically and bottom-up, and have a strong emotional effect on members. These are the things which make up an organization's culture. Likewise, the unwritten parts of how members carry out their duties and execute processes, such as the tone in an email, or the way someone breaks down a task and the order they perform those sub-tasks in, constitute style.

It is possible to document these cultural and stylistic processes, and WOPRS encourages the organization designer to do so, although they do not have to be rigorously defined. In a sense, writing a process document about "how to greet your colleagues in the morning" is pedantic, and will actually harm the culture more than help it. However, it is good to be thorough and make note of these behaviours in your collection of processes, to acknowledge that it exists and indicate that it is desired. In particular, documenting different members' styles is an (auto)ethnographic process, and can bring great advantages to an organization by allowing different members to learn from each other's approaches, and even develop a deeper understanding of their own work and why they work in that way.

By documenting cultural and stylistic beliefs and processes, you are implying that they are important, which is a useful signal to existing and new members of your organization.

##### Examples of processes

Processes may define roles and deliverables, and may be recursive or initiate other processes. Here is an example set of processes:

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

The heart of a process description is this algorithmic sequence of steps, but the mentions of people, roles, checklists, inboxes, notifications and hand-overs, reveals that processes encode resources and structures, and in their respective sections we will see how these are extracted from processes.

Processes may be triggered on a schedule (e.g. filing taxes), in response to an incoming resource (e.g. onboarding a new member), or on demand (e.g. updating an existing process).

A well-written process document should explicitly list the required (input), produced (output) and intermediary resources involved, which includes roles and 'human resources', to make the process document easier to scan and connect with other process documents. Additionally, process documents should explain the objectives they help to achieve and how they contribute to any metrical objectives, so as to make reporting and performance monitoring easier. Finally, process documents should contain the design documentation for those processes, to explain why the process is that way and what alternatives have been considered, in order to assist future process development. A Markdown template is included later on demonstrating all of these sections.

##### Policies as constraints on or requirements of processes and objectives

Policies, both internal and external to the organization, are essentially constraints on processes and objectives, requiring that a certain step is taken or not taken, or even that a certain entire process exists or is enacted on a particular schedule. For example, health and safety regulations require welders to lower a face shield before they can begin a weld, and filing a tax return is its own sequence of steps which must be completed between certain dates (an objective).

#### Resources

Resources are objects which exist in the world. This includes people (including the organization's members), steel, widgets, computers, software, offices, and documents (including process documents).

In the normal mode, resources are dependent on processes because we only need certain resources in order to allow us to carry out the processes which we have determined are the best way of achieving our objectives. If I work at a software company, none of my processes require me to work with steel and so steel does not appear as a resource for my organization.

In the meta mode, resources push back on processes because we can only design processes for which the required resources are readily available, or can be secured by other processes. For example, if I decide I want to start manufacturing steel widgets, and I write a "manufacture a steel widget" process, I will also need to build an "obtain steel" process. In this way, the inputs and outputs of different processes connect together to form a structure of resource flows, where the terminal inputs and outputs come from and flow out of the organization. For a manufacturing company, these terminal resources include raw materials for production, customers, investment capital, and candidate staff as in-flows, and products, profits, and outgoing staff as out-flows.

Resources directly maps to Leavitt's technology and people, Galbraith's people, McKinsey's skills, and Burke-Litwin's leadership.

#### Structures

Organizations contain many structures, which are networks of relationships between members and resources.

In the normal mode, structures are dependent on processes, because a process defines the interactions between members and resources which constitute a structure. We can describe many structures in an organization, such as a tree of departments and teams, or a tree of managers and their reports, or a RACI grid, or the flows of inputs and outputs between different processes, but all of these structures exist as a 'shadow' of the processes which are operating within the organization on daily, weekly, and monthly bases. If a worker never has to communicate with their manager or vice versa, it is questionable if there should really be a line connecting them in the org chart, and if that manager-report structure and relationship really exists.

In the meta mode, structures are sometimes proscribed by conventional wisdom, a desire to maintain oversight, control, or authority, or because particular members want to hold particular roles. It is possible for structures to come before processes, but WOPRS argues that this is faulty, and instead structures should arise totally from the reality of the processes which exist in the organization. If a problem is detected, it is never a problem of structure, it is always a problem of process, and when that problem is fixed by changing the processes, then the change may be reflected by a change in some structures.

Structure occurs in all of the previously discussed models and WOPRS' definition of structure subsumes all of these other definitions. Where WOPRS structure differs is this insight that structures arise from processes, rather than existing by themselves.

### WOPRS in practice

To implement WOPRS, an organization must start with a minimal set of meta-processes, which allow organization designers to iteratively develop the objectives and processes of the organization. The organization should create a central repository of process documents, and populate this initially with the meta-processes. Each meta-process can then be invoked to further build out this suite of processes, and these processes in turn will build out the objectives, structures, and information resources of the organization. Thus I present the fundamental meta-process "Implement WOPRS" and the referenced suite of initial meta-processes.

#### The "Implement WOPRS" process

1. Choose a document repository for storing process documents and other WOPRS documentation.
   1. This should be readable by all members of the organization
      1. because members will need to consult these processes in order to carry out their tasks
      2. and because members will need to know the objectives of the organization to keep themselves aligned
      3. and because members need to know how the meta-processes work, so they can create change in the organization.
   2. Possible options include:
      1. A big folder on a desk somewhere.
      2. A digital documentation system such as Notion, Google Docs, or Dropbox.
      3. Text files in a version control system or file system, like Git or NFS.
2. Create a section in the WOPRS document repository labelled "Processes".
3. Create a document for each meta-process from the below documentation of "Initial meta-processes".
4. Begin the "Update objectives" process.

#### Initial meta-processes

##### Update objectives

1. In the root of the WOPRS document repository, create a document labelled "Objectives" if it does not already exist.
2. Edit the "Objectives" document with the new objectives.
   1. Organize objectives into a nested list, such that sub-items are necessary conditions of their super-item.
   2. Try to make objectives specific and measurable.
      1. It should be possible for any member of the organization with access to the necessary data to conclusively determine if the objective has been met or not.
3. Once the objectives have been updated, apply the "Evaluate process" process to each process in the repository, until all processes have been re-evaluated.
   1. This is to determine if processes are still relevant or require updating.

##### Evaluate process

1. Examine the process in the context of the organization's Objectives document.
   1. Will the process help us to achieve one or more of our objectives?
      1. If not, the process must be re-designed. Apply "Update or replace a process".
   2. Is there a different way we could achieve our objectives? Could this process be improved?
      1. If so, apply "Update or replace a process".
2. Determine if all resources required as inputs are still available.
   1. If not, determine the appropriate action depending on the particular resources that are missing.
      1. You may need to create a new process or amend an existing one.
3. Determine if any resources produced as outputs have changed or been removed.
   1. If so, apply "Evaluate process" to each process which requires these resources as inputs.
      1. This is to ensure that we have not created a resource violation somewhere else in the organization.
4. Determine if any structure documentation needs to be updated.
   1. This would include any documentation on resource flows, and may include documentation about roles and responsibilities (e.g. RACI charts) or org charts.
   2. If so, update each structure document according to its relevant process.

<!-- TODO who needs consulting? how is that documented? -->

##### Create a process

##### Update or replace a process

##### Remove a process

##### Update structure documentation

#### Process document Markdown template

This code block is a Markdown file you can use as an initial template for a WOPRS process document. Being Markdown, you can paste this in to Notion and some other web-based document systems.

```markdown
# <title of process>
_Give this process a unique title. The title should be actionable, like a command, e.g. "Onboard an Engineer"._

## Relevant objectives
_List any objectives which this process helps the organization to achieve when it is carried out, with the expected changes to metrics if possible._
_For example, "Onboard an Engineer" may affect "Have enough Engineers to deliver our roadmap", and "Have enough money to pay all our employees next month"._

*

## Input resources
_List any resources that this process requires or are touched during its execution. This includes specific members or roles if they are involved in the process or if they are required to initiate a follow-on process._
_For example, "Onboard an Engineer" may require "HR Manager", "New Engineer", "GSuite Admin panel", and "Engineer Onboarding Checklist"._

*

## Output resources
_List any resources that this process produces._
_For example, "Onboard an Engineer" may produce "copy of onboarding checklist" and "new GSuite account"._

*

## Steps
_A numbered list of steps to be taken when carrying out this process. Each step should be actionable, like the process title, and may contain sub-steps and additional explanation, context, or constraints, as required._
_For example, "Onboard an Engineer" may include a step "1. Create a new account in GSuite" with sub-items "1.1 Ensure a new email account will be created.", and "1.1.1 The email format should be <first name>.<last name>@org.org"._

1.

## Design notes
_Any documentation to explain how this process was developed or why it is the way it is. This may help people to understand the motivation for the process, why certain steps are necessary or omitted, and is particularly useful when re-evaulating or changing this process._
_For example, "Onboard an Engineer" might include a note that "Step 4.1 ('Find an existing Engineer to be a Buddy for the new Engineer') is included because in the past new joiners have struggled to build connections with their colleagues."._


```
{: .white-space-break-spaces}

... TODO ... <!-- ... TODO ... meta-processes, bootstrapping,  -->


### Summary

### References

Abbas, Tahir. ‘Burke Litwin Model of Change’. CMI (blog), 6 April 2020. <http://changemanagementinsight.com/burke-litwin-model-of-change/>.

Felipe Castro. ‘OKRs Do Not Cascade’, 2 April 2016. <https://felipecastro.com/en/okr/okrs-not-cascade/>.

Galbraith, Jay R. ‘The Star Model’. Accessed 4 September 2021. <https://www.jaygalbraith.com/images/pdfs/StarModel.pdf>.


McKinsey. ‘Enduring Ideas: The 7-S Framework’. Accessed 4 September 2021. <https://www.mckinsey.com/business-functions/strategy-and-corporate-finance/our-insights/enduring-ideas-the-7-s-framework>.

Tahir, Umar. ‘What Is Leavitt’s Diamond Model?’ CMI (blog), 10 January 2020. <http://changemanagementinsight.com/what-is-leavitts-diamond-model/>.


### Bibliography

Atlassian. ‘What Is Agile?’ Atlassian. Accessed 3 September 2021. <https://www.atlassian.com/agile>.

Daft, Richard L. Organization Theory and Design. Cengage Learning, 2012.

International Institute of Business Analysis. BABOK: A Guide to the Business Analysis Body of Knowledge. International Institute of Business Analysis, 2015.

Irwin, Christine, and Patricia Cichocki. Organization Design: A Guide to Building Effective Organizations. Kogan Page Publishers, 2011.

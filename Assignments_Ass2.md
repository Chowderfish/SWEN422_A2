# SWEN422 HCI
# Assignment 2 
## Large Group Project

Simon McCallum

Stuart Marshall

Due October 22, 2019

## Abstract
Assignment 2 is worth **45%** of the overall grade for the course, and
will involve your group designing and evaluating a Human Computer Interface to software in a team of 4-6 people. The grade is split into
a group mark worth 25% based on the submitted interactive system and
an individual mark worth 75% based on a submitted report and based on
contributions to the team. The total project should take approximately
50 hours to complete per individual.

Assignment 3 will be worth **5%** and will involve peer evaluation of
presentations undertaken by the teams in week 12.

## Mission
As with Assignment 1, your mission is to design, implement and evaluate a user
interface, but now we are looking at different interfaces applied to one of two tasks.

### Interface
The choices of interfaces are:
1. Screen, keyboard and mouse, where the focus is on the visual representations and interaction at the software level.
1. Virtual/Augmented Reality Interfaces - studying new ways of interacting with content away from traditional WIMP (Windows Icons Menus Pointer) Interfaces
1. Gesture Interfaces - This can include the leap motion or gesture interfaces on mobile devices.
1. Voice Interfaces - This is using Amazon Alexa, Google Voice, or open source tools to develop speech based interfaces
1. ?Suggested interface? - as suggested by students but requiring approval to fit with the course learning goals

### Task
The choice of tasks are:
1. Information Visualisation - Continue to work on the Info Vis project and deepen your skills and knowledge.
1. Mini-game - a playful interteraction which supports the [Self Determination Theory](https://en.wikipedia.org/wiki/Self-determination_theory) aspects of Agency, Competence and Relatedness

Thus you will pick an **interface** and a **task**.  If you want to continue with D3 and web-based interaction you would be I.1 and T.1.  You can make a game using the leap-motion which would be I.3 T.2.


You will need to evaluate your intreface on other students in the course (not just in your group). We have already received Human Ethics Committee permission for this testing — under application 25862.


## 1.Information Visualisation 
For the info vis task we will use the UN sustainable development goals as our data sourse. These can be found at: [UN Global Goals](https://unstats.un.org/sdgs/indicators/database/).

The team must construct personas, scenarios and goals to support the design of the user experience. In particular, these personas should inform the design of interface the visualisation in terms of what the visualisation does to support the intended
users to generate their own knowledge and insight. As well as that, these personas and scenarios should be used inform the type of study or experiment the team later performs to evaluate the User Interface.

If you choose to continue working on information visualisation you should support Ben Shneiderman’s
“Information Seeking Mantra” that an interface must support:
* Overview: gain an overview of the entire system.
* Zoom: Zoom in on items of interest.
* Filter: Filter out uninteresting items.
* Details on Demand: Select an item or a group and get details when needed.
* Relate: View relationships between items
* History: Keep a history of actions to support undo, replay and progressive
refinement.
* Extract: Allow extraction of sub-collections and of the query parameters.

Reference: “The Eyes Have It: A Task by Data Type Taxonomy for Information Visualizations” by Ben Shneiderman, IEEE Symposium on Visual
Languages, 1996. https://dl.acm.org/citation.cfm?id=834354

Note that for students implementing a non standard (not WIMP) interface you will be able to get a high grade while only meeting some of these requirements.  For students working on WIMP and analysing software interfaces it will be possible to get a ’B’ grade on the group mark without relate, history and extract and it will be possible to get a ’C’ grade on the group mark without details on demand, relate, history and extract.

As well as this, the information visualisation system must:
* support some form of animation (transitions are acceptable).
* involve at least two types of visualisation.
* for WIMP be developed in D3.

## 2.Mini-Game
For the mini-game we are looking for a test of the interaction with the interface that explores the features of the interface.  The game should provide the minimum features of a game experience and also support and discuss the aspects of Self Determination Theory that it supports.

The minimum requirements for the games in this course are:
1. The player must interact with the game
2. The player must see the consequences of their actions
3. There must be a competitive aspect such as a win condition or a highscore metric
4. The game must be easy to learn.

The group must also think about the motivation to engage with the game using self determination theory:
1. Agency - what choices does the player have
2. Competence - how is the player shown they are doing well
3. Relatedness - how is the interaction meaningful in their environment or their social group

The group should also analyse the type of player and type of skill required to play the game.  For player types the Brainhex or similar model can be used:  Brainhex or Bartles types devide players into player types.  This can be seen as persona archetypes which can be used as part of the design process to understand the motivation of the potential players for this game using a particular interface.

The type of skill tested in the game should be categorised that as:
1. Dexterity (twitch skill)- Twitch movement and reaction speed
2. Short term planning - look-ahead 1-4 seconds
3. Planning - puzzle games where multiple moves are required to solve a task

We do not expect you games to require long term planning of strategy or role playing games with skill trees etc.


## Evaluation
With respect to the evaluation/study:
* The study does not have to be run with a sufficient number of participants that any statistical results could be relied on. 
The purpose is to gain experience with running studies and interpreting results — 
it is not necessary that the results from this study be publishable, due to the time constraints involved.
* the study must be run on adults, and it is strongly encouraged to use
students from SWEN422, although other students from 400-level are also
acceptable.
* the study should be run as if it were a real study in an industry and/or research environment, 
including the provision of consent forms, information sheets and the collection and analysis of data.
* students participating in studies are asked — in as much as is practical
— to play the role of actual target end users.


## Submission
1. The codebase should be locked down by the end of Tuesday, **October 22th**
For the official record, one team member should submit the code base
(including the personas, scenarios and goals) as a link to the gitlab repo created for the group
in the online submission system.
2. Each individual student should submit a final report by the of Friday, **October 25th**
3. Your team deliver an oral presentation of your project’s progress and experimental design during week 11 of the course. This presentation will be
discussed in more detail in the Assignment 3 handout.
Late submissions will be penalised at a rate of one grade point per day.
Extensions must be requested prior to the deadline.
4. HCI System
The group mark will be based on the quality and scope of the
system. The course coordinator will review the GitLab repository and the code base 
to check that good software engineering practices were
maintained, and poor practices may lead to reductions in the mark.
Good practices include:
    * Commenting of code. (Professional comments which help skill programmers)
    * Issue tracking (Using the issues with assignment to individuals)
    * Use of version control (commit messages should like to issues using #)
    * Adequate testing practices (manual scripts agreed-to by the team are acceptable).
You may use external libraries if their licensing permits this, however this
is not required. Note however that you’ll be assessed on what you add to the
design and implementation. Unity3D, Unreal Engine, or similar can be used for 
game development. Standard D3 has sufficient features and functionality 
for the Visualisation task to score highly on this
project, with appropriate consideration for users and design.

5. Individual Report
The project report needs to include:
    * a description of your system.
    * a justification of your design,
    * a statement on the contributions made by yourself and your team mates,
    * a description of the evaluation/study that you ran,
    * an interpretation of the results of the evaluation/study,
    * a discussion of the limitations of the evaluation/study,
    * a discussion on proposed improvements (if any) to the system based on your own critique and the evaluation.
The report should be a minimum of three pages and a maximum of eight
pages long.

### Format
You can sumit the reports as **either** PDF following the ENGR401 approach of the 
default IEEE Transactions Journal. You may find LaTeX or Microsoft Word article
templates on the IEEE website. Those using ECS systems should find that
most LaTeX distributions include the IEEEtran class; **or** as Markdown in the 
gitlab repository.  The page limits are a guide to length and amount of content. 
If there are large numbers of images the length is flexible, we just do not want 
you to go overboard with content.

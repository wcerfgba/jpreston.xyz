---
layout: page
title: Moral Machine
date: '2022-02-21'
last_modified_at: '2022-02-21'
---

These are some [[notes]] about a video game idea originated by my friend [Elle Sullivan](http://thecreativeperiod.com/elle/index.html). I may never make this as game programming is not my area of expertise, and I imagine it could take a lot of time to create, and so I am documenting my notes here in the hopes that if I never get around to it, someone else may find these ideas inspiring and incorporate them into their own work. 😀

This game is an exploration of morality and the perceptions of morality. All characters in the game have an implant embedded in their arm which can glow green or red to signify the moral judgement of their actions. The implication of this are that there is an objective morality; actions can be evaluated against this in some way; a central organisation such as a government has engineered such a system; the morality implant is mandatory. There may be further consequences for which the implant is sufficient but not necessary, such as the effect that having the implant has on the capacity and desire for moral reasoning by persons within this universe. Morality implants may also have an amber status to indicate ambivalence; and/or a grey status to indicate unknown moral judgement, or perhaps that the character or people around them is not allowed to know the moral judgement at this time.

The game would be presented as a small sandbox style game, possibly taking place within a city, with different environments such as streets, parks, maybe some indoor environments. The player would explore the world looking for opportunities for interaction. Interaction opportunities would take the form of simple tasks that the player could choose to (not) perform, such as helping someone cross a road; putting some litter in a bin; slapping someone in the face; and preventing a mugging. After each (non-)interaction, the player character's morality implant would glow to indicate if their (lack of) action was good or bad.

Each possible interaction could have several variants, and some or all of these variants could be populated in the game world. Each variant would be associated with an underlying probability distribution of the moral judgement, which would then be used to determine the behaviour of the implant on (non-)action. For example, here are some possible interaction variants and their possible moral distributions.

| Interaction                | Variant                        | Good | Bad |
|:---------------------------|:-------------------------------|-----:|----:|
| Put can in bin             | General waste                  | 0.8  | 0.2 |
| Put can in bin             | Recycling                      | 0.9  | 0.1 |
| Help person across street  | Nice person, safe crossing     | 0.8  | 0.2 |
| Help person across street  | Nice person, gets run over     | 0.1  | 0.9 |
| Help person across street  | Murderer, safe crossing        | 0.1  | 0.9 |

It will not always be clear to the player what variant of the interaction they are experiencing. Combined with the probabilistic nature of the judgements, this opens the moral judgements from the implant up to interpretation and reflection. My interest as a creator is to discover how players perceive and interpret the different judgements made of their character, and how the series of judgements they have received affect their behaviour over time. Some possible interpretations players could make are that the implant judgements are completely random; or that the implant is accounting for potential future actions facilitated by a character's (in)action. Additionally the player may want to follow non-player characters around and observe the judgements they are given as they go about their lives and perform similar interactions with the world.

Lacking any story or more developed mechanic for ending the game, I would have the game end when the player character dies through some sort of fatal interaction, which may include being shot or run over by another character; or committing suicide through some mechanism. At this point a final moral judgement would be issued, and the player would be able to see a timeline of their gameplay showing their morality rating throughout. The player would be able to scrub over this timeline to watch a replay of different choices they had made.

Aesthetically, in my mind's eye I can see this game in a grey/white, textureless art style, making use of cel shading. Much of the assets would be devoid of finer geometric content. I would implement the main gameplay in a first person perspective, but switch to third person for the player death sequence and post-game morality timeline replays.

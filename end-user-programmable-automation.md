---
layout: page
title: End User Programmable Automation
date: '2021-08-28'
last_modified_at: '2021-08-28'
---

Some [[notes]] on [[software]] interop I've been occasionally mulling over for a while.

We have a lot of software in our lives but it all seems to exist in its own bubbles. Interop is an explicit feature which has to be built in by the programmer, often requiring specific data structures and support from both 'ends' of that interop. For example, if I want my calendar to update my presence in my chat client to 'Busy' when I'm in a meeting, I need to have a 'port' in the chat client to receive a "set presence to busy" command, and I have to change my calendar to send the correct message to the chat client. This is all assuming that this software is open to extension by myself, and that I'm able to comprehend the code, make the changes, and make my own build with this interop included.

If you know anything about electronic music equipment like synthesizers, you'll know that software is largely the opposite of a synth in regards to interop. By their nature, synths take in, manipulate, and produce signals, and the knobs and buttons which permit a human to control them operate by varying resistances and capacitances, which in turn affect the voltages and currents which define these signals. Synths typically expose these internal signals through 'CV/gate' or 'control voltage' ports, which allows a user to plug in a wire and feed in a singal from an external source. It's not uncommon for a synth to have many CV ports for controlling most of its parameters from external controls, another synth, or even its own output.

There is a fundamental difference and a fundamental similarity between software and synthesizers in regards to implement. The similarity is that any user controls -- the knobs and buttons -- are merely interfaces to the underlying 'signals' that make these things do their work. The difference is what those signals are. In a synthesizer, we have been constrained by the laws of the universe to always be operating with a electromagnetic signal whose primary dimensions are voltage, current and time: because all electronics operates on these physical properties, the capacity for interop is effectively guaranteed. In software, our 'signal' is data, or information, and this is inherently vague and highly dimensional, depending on what 'level' or 'layer' you are looking at the information.

For example, consider this article you are reading right now. In one sense it is a structured document, but that structure of paragraphs and sentences is represented at a lower level as a stream of characters. Those characters are represented at a still lower level of bytes, which in turn are represented as bits. At each layer there is an implicit knowledge or protocol for constructing the higher-layer interpretation of that data. Perhaps getting my calendar to change my presence isn't too complicated: I could plug the "event is happening" binary output from the calendar in to the "status is Busy" input in my chat client. But what if I wanted to make my calendar trigger a message in a chat room with the name of my current meeting? I don't just want to send binary information, I want to send a specific string of text from one application in to another. Suppose the channel the message should be posted in is also programmable, so that I can announce personal events in one channel and work events in another. Now I need to select a channel as well as specifying a message, so I need to send some structured data between the apps. This is where things become more complicated, and the goal of interop is lost: even if programmers did expose these ports to send and receive this data, there needs to be an agreement on the 'shape' of structured data so that apps can understand each other.

Assuming this level of interop were available, I believe it would open up new ways of interacting with computers by allowing users to program their own automations. Some examples of potential workflows:

* Play through media in different applications
  * "When I start a video on YouTube, pause my Spotify."
  * "When a video finishes on YouTube, unpause Spotify."
* Route media keys to active application
  * "When I am in Spotify and press the 'Pause' key, pause Spotify. When I am in YouTube and press the 'Pause' key, pause YouTube."
* Actions in response to notifications
  * "When I receive an email, play this sound."
  * "When I receive an incoming call on Slack, pause any current media apps."
* Synchronise statuses between different applications
  * "When I change my status in Zoom to 'Busy', change my status in Slack to 'Busy'".
* Update status when application gains/loses focus
  * "When I am typing in VSCode, change my Slack status to 'Coding'."
* Set status during calendar events
  * "When a calendar event starts, change my Slack status to 'In a meeting'. When a calendar event ends, clear my Slack status."
* Connecting communication apps
  * "When I get an email from Mary, post that email as a message in Slack channel #things-mary-says."
* Respond to my environment and circumstances
  * "When my battery is low, trigger a notification."
  * "When my battery is low, pause any media apps."
  * "When a weather warning is issued, post in Slack."

Some examples of potential ports:

* Media players: Spotify, VLC, Bandcamp webpages, ...
  * < Track begins
  * < Track ends
  * \> Play track
  * \> Pause track
  * \> Next track
* Chat applications
  * < Current presence/status
  * \> Set presence/status
  * \> Send message
  * < Message received
* Calendars
  * < Event started
  * < Event ended
  * \> Create event
* System status
  * < Battery/charge status changed
  * \> Shutdown/suspend

One way to achieve this level of interop is to decouple the ports from each other through a global event bus. Instead of connecting my calendar to Slack, my calendar would send a message to a bus, and then I can program that bus to send a message out to Slack in response.

Open questions:

1. Is a global bus to 'decouple' necessary? What if we remove the expectation of 'structured messages' and return more to the signal paradigm, with more granular ports?

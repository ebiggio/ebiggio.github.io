---
title: The Cynefin Framework
date: 2025-03-19 00:00:00 -03:00
categories: [Agile]
tags: [cynefin, framework, agile]
description: A brief introduction to the Cynefin Framework; a sense-making model that aims to answer the golden question of "What the hell should I do now?".
pin: true
---

More often than I'd like, I find myself in situations that prompt my inner voice to say something along the lines of, "Great, so what the hell should I do now?"
After reading the first chapters of [Essential Scrum](https://a.co/d/f4DESbv), I was introduced to the Cynefin framework,
which has since become the first tool my mind turns to whenever I encounter a new or unknown situation—whether it's a casual, day-to-day issue or something specifically related to software.

So, what exactly is the Cynefin framework? Developed by Dave Snowden for IBM in 1999, it's designed to help us make sense of unfamiliar situations and quickly "regain our footing."
It establishes five domains to guide decision-making: Clear (formerly Simple or Obvious), Complicated, Complex, Chaotic, and Disorder.
These domains are typically visualized graphically, resembling a cartesian plane, with a central area (where the "0,0" coordinates would be) representing the Disorder (or Confusion) domain.

![Cynefin framework](/assets/img/2025/03/cynefin-framework-diagram.png){: .shadow }
_Behold! A visual representation of the Cynefin framework made in 2 minutes on the mighty Draw.io platform._

> Just for giggles, I asked ChatGPT to create images for each of the Cynefin domains based on the descriptions I provided, in a comic style.
> The results were quite amusing but also surprisingly accurate. So I decided to include them here, unedited.
> I hope you enjoy them as much as I did.
{: .prompt-info }

## The Cynefin domains

### Clear domain

* _Sense - Categorize - Respond_ (or, "Just RTFM")

![Clear domain](/assets/img/2025/03/chatgpt-clear-domain.webp){: .right w="340" }

The situations that fall into this domain are those where the relationship between cause and effect is obvious to everyone.
We can look for rules, best practices, or standard operating procedures to guide our actions.
If we have a software problem in this domain, we can usually find a solution in the documentation, or in a closed Stack Overflow question marked as a "community effort/wiki."
This is why it's said that the Clear domain is the realm of "known knowns," where *we know what we know*, and **a correct answer exists**.
There are no surprises here; when we encounter a problem in this domain, we can apply a straightforward solution and expect a predictable outcome.
As such, the approach to problems in this domain is to _sense_ the situation, _categorize_ it, and _respond_ accordingly.
Therefore, this domain is not where one would expect to find creativity or innovation, but rather efficiency and optimization.

* **Everyday example**: Following a pancake recipe. If you use the correct ingredients and follow the steps, you reliably get pancakes.
* **Software example**: Adjusting the color of a button on a website using basic HTML and CSS. For that, one would usually inspect the element, find the CSS class, and change the color value.

### Complicated domain

* _Sense - Analyze - Respond_ (or, "Let's ask an expert")

![Complicated domain](/assets/img/2025/03/chatgpt-complicated-domain.webp){: .left w="340" }

In the Complicated domain, the relationship between cause and effect is not immediately apparent, but it can be determined by analysis or expertise.
Being here means that we're dealing with "known unknowns," where even with the correct knowledge or support from an expert, **there may be multiple correct answers**.
So if we have a software problem in this domain, we might need to consult with a more experienced developer, or dive in a plethora of Stack Overflow questions for a solution that fits our specific case.
The approach to problems in this domain is to _sense_ the situation, _analyze_ it, and _respond_ accordingly.
Good practices here are key, as they can guide us to the correct solution, but we must be aware that there may be multiple paths to take.

* **Everyday example**: Fixing a car that's making a weird noise. You probably need an expert mechanic to diagnose and resolve the issue.
* **Software example**: Optimizing a database query. There are multiple ways to do it, and you'll benefit from expert knowledge to find the most efficient one.

### Complex domain

* _Probe - Sense - Respond_ (or, "Let's try something and see what happens")

![Complex domain](/assets/img/2025/03/chatgpt-complex-domain.webp){: .right w="340" }

In the Complex domain, the relationship between cause and effect can only be understood in retrospect.
Here, we're present with "unknown unknowns," where **we don't know what we don't know**.
We need to be proactive: explore to learn more about the situation (_probe_), _sense_ the changes that occur, and _respond_ accordingly.
Here is where one would expect to find creativity and innovation, as we're encouraged to experiment and learn from the results to arrive at a solution.
For a software problem in this domain, we might need to build a prototype, run an experiment, or conduct a spike to understand the issue better.
There will probably be a lot of Stack Overflow questions with similar characteristics to our problem but with no accepted answer.

A key aspect of this domain is that we must be prepared to fail; there's no guarantee that our actions will lead to the desired outcome.
So it's important to, when possible, create a "safe-to-fail" environment, where the consequences of failure are minimal,
allowing us to learn from our mistakes and make adjustments to our approach accordingly.

> When working on this domain, take notes of what you're doing, why you're doing it, and the results you're getting.
> If you hit a dead-end and plan to restart your approach (especially after a while), you can go back to your notes and see what you've tried before to better orient yourself and save some time.
{: .prompt-tip }

* **Everyday example**: Organizing a surprise party. You can't predict exactly how everyone will react, but you can plan the event with various steps and adjust as needed. After the celebration, you will have a better understanding of what worked and what didn't.
* **Software example**: Developing a new feature for a product. User feedback and interaction patterns only become clear through iterative testing and feedback loops.

### Chaotic domain

* _Act - Sense - Respond_ (or, "Just do something!")

![Chaotic domain](/assets/img/2025/03/chatgpt-chaotic-domain.webp){: .left w="340" }

Chaotic situations are turbulent and unpredictable, where the relationship between cause and effect is unclear.
There's a sense of randomness and urgency, and the best course of action is to _act_ first, _sense_ the changes that occur, and _respond_ accordingly.
In this context, we act not necessarily to solve the problem, but to stabilize the situation, gain control and order (breathing room) to then try to move the situation to another domain.
Here, **"no one knows"**, so we aim for what works in the moment, instead of what's right.
This domain is where we find ourselves when we're in crisis mode, and we need to act quickly to prevent further damage. The patient is bleeding, and we need to stop the bleeding before we can diagnose the cause.
So, there's no time to look for Stack Overflow questions; that will come later once the situation is under control.

* **Everyday example**: A fire in your kitchen. You don't have time to analyze the cause; you need to act quickly to put out the fire and prevent it from spreading.
* **Software example**: Handling an unexpected system-wide outage. First, get the system back online quickly, even if it's a temporary fix. Then, you can analyze the root cause once stability is restored.

### Disorder domain

* "I don't know what the hell is going on."

![Disorder domain](/assets/img/2025/03/chatgpt-disorder-domain.webp){: .right w="340" }

The Disorder domain, by definition, is where we find ourselves when we don't know which of the other domains apply.
It's a state of confusion, where we're unable to make sense of the situation, and we don't know what approach to take.
This is not a domain where we want to stay for long, or where we want to make decisions. Instead, our goal should be to "get out" of this domain as quickly as possible and move the situation to one of the other domains.
Personally, I find that the sensation of being in this domain is one akin to searching on Google an obscure error message and getting no results, tempting you to go down several rabbit holes of Stack Overflow questions that _sound_ similar to your problem.
The recommended approach here is to break down the problem into smaller parts, so we can reduce the complexity somewhat and assign each part to the appropriate domain.

* **Everyday example**: Suddenly losing your wallet. At first, you panic and aren't sure of your next step. Only after calming down you can determine whether it's a Clear (you left it at home), Complicated (you left it at the store), or Chaotic (it was stolen) situation.
* **Software example**: Discovering a critical bug affecting various unknown parts of the system. Initially, it's unclear if the issue is minor, needs expert diagnosis, or represents a deeper problem. You need clarity before choosing the right approach. 

## A favorite domain?

![I actively thrive here](/assets/img/2025/03/cynefin-framework-sarah-scribbles.jpg){: .shadow w="450" h="501" }
_[Sarah's Scribbles](https://sarahcandersen.com/)_

After learning about the Cynefin framework, I realized that I find myself particularly comfortable in the Complex domain.
I enjoy the challenge of exploring new ideas, experimenting with different approaches, and learning from the results.
This is related to my style of learning; I prefer to "mess around" and see what happens, instead of following a strict set of instructions.
So if, for example, the new framework that I'm learning says in the tutorial that I should add X with Y, I'll probably try to add Z instead, just to see if something explodes.
However, I also recognize that being in the Complex domain can be overwhelming, especially if the environment doesn't allow for the required techniques to thrive in this domain.
This is particularly true on a company structure where your team or boss doesn't give you enough room to "test things out,"
and instead expects you to deliver results quickly and efficiently.
In the end, I think that a mix of all domains is necessary to be able to grow and keep learning. After all, AI is already taking care of the Clear domain, right?

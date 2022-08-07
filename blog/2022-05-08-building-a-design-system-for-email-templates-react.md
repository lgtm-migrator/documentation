---
slug: building-a-design-system-for-email-templates-react
title: Building a Design System for Email Templates (React)
authors:
  name: Arthur Tkachenko
  title: Core Team
  url: https://github.com/wgao19
  image_url: https://github.com/wgao19.png
tags: [hola, docusaurus]
---

From April 2021 I'm pushing forward a few repositories that are part of the LLazyEmail organization:

- https://github.com/LLazyEmail/react-email-letter-components
- https://github.com/LLazyEmail/react-email-typography-components
- https://github.com/LLazyEmail/react-email-miscellaneous-components
- https://github.com/LLazyEmail/react-plain-template-example
- https://github.com/LLazyEmail/react-email-table
- https://github.com/LLazyEmail/templates-battlefield
- https://github.com/LLazyEmail/react-email-template
  
As you see - a lot of links and repositories. Yes, it was necessary. Before it was located in one featured branch. And I realized that it's a rabbit hole that sucking a lot of energy. This is why at some point I start to split the core into pieces.
  
The main goal is simple: to create a set of components(right now it's React components, but I'm not married to it).
  
Components that will help other developers to generate email templates easily and didn't hit the wall, as we did.
  
Before picking react as the main framework I was thinking for a few weeks. React was the best choice. I reviewed the progress of other tools that can be used as Template Engine. Most of them suck and were not updated for the last 10 years.
  
I can't put everything into one thread - one article. So let's start with the basics and move forward from it later.
  
Let's explore a few email templates from the developer's perspective. they are different from a design standpoint, but still similar from the code perspective.

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/jv0i65as8yy524su0gcz.png)
 
![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/22lyf4gyqkl4rumdui80.png)
 
  ![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/mqtmvy6nyj7h3t7a5vrz.png)

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ucohtrirwos67aj4r22f.png)
 
 
This type of systematization helped me to understand how I want to organize layouts and components.
  
Plus I decided to test my components on different templates at the same time. while it's adding some chaos - I will be able to understand how to make these components useful for different cases. not to just one template. but it's draining my energy for sure.
  
At some point I stuck 🙂 and I decide to add even more templates.
but a much simple one. Email templates have old, boring, and fragile HTML4 structures with inline styles. And `<tables>` is a huge part of building layouts for email templates.
  
This is why I moved all components, related to the table into this repository: https://github.com/LLazyEmail/react-email-table

While we need only one `TableComponent` inside of it - I create a few child components from it.

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/79462mdrhtaizl79urg0.png)
 
  
All those components are tables with a different sets of attributes.

`Row`, `Rows`, and `Section` are components that can help to shape layouts for email templates.
  
And yeah, nothing hard inside. as we have an organization name LLazyEmail - everything should be very simple…
  
At the same time, by separating things we can create a system that might last for a few years.
  
There are few libraries on GitHub that were doing the same/similar things. But as their maintainer gets busy or less interested in his project - it's pretty hard to grab and use as I want it. So yes, I'm reinventing the wheel, but there is more behind it.
  
I hope to use these open-sourced modules as a gateway to the hearts of developers 🙂

Plus, by doing it this way - I can get some street cred from communities like IndieHackers, ProductHunt and for sure, Hackernoon.

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/tri83p9hsv4h93v9m2wt.png)
 
![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/7uzf3496obnns26mo1g0.png)
 ![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/6vgze18wgubj3k7aq90s.png)
 
  
I didn't finish my readme file, so I cant put more screenshots.
  One of the reasons for expanding TableComponent was changes in my coding workflow.
  
Each template that I shared before has at least 1000 lines of code. and as cases are different, it's hard to just sit down, code for X hours, and get done a few different email templates.
  
During my work, sometimes I imagine myself as a wave, I can move forward and I also can step back and take some time to think.
  
As I was stuck, trying to attack complex email templates, I decide to start converting a few more templates 🙂 I don't think it was a bad idea to try to bite a big piece in the beginning. It helped me to face different issues and it was a reason why I decided to cut components into pieces and make them independent as fuck.
  
So from an evolutionary standpoint - it was a great idea. But I don't have enough resources to perform it.
  
Yeah, bad for productivity, but who is judging, right?
  
So I go to Really Good Emails and find a few Billing emails aka invoices/order confirmations.
  
They are simple. they still have some important information inside. They are SIMPLE. and mostly built with Tables.

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/gqlh6eoobg1m440lyyk5.png)
 ![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/f6gqkk6x4q0ko704brl5.png)
 ![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/o84kcmp1innidbnd7p2v.png)
 

  
At this time I realized that our system and logic of how to organize components into folders is not ideal.
  
A new challenge to solve. mind mapping and writing on a real board helped a lot. I still have that schema - it helps to dig into it pretty quickly when I need a refresher.
  
Like we have a typography folder. and it collects things like `Links`, `Headings`(h1,h2,h3), `Paragraphs`, etc. and it's pretty isolated.
  
But how to separate blocks, related to the whole template, but still be able to re-use them? is not an easy thing, to be honest.
  
And it can be a separate article related to the organization of folders and components. I'm sure that my experience can help other frontend developers that trying to build a design system.
  
So I go to a drawing board again. let me present you with my results! 

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/8gr38gka8ulphlf6rme7.png)
 ![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/q66d1k6n3nes6bqz61nk.png)
 


Cool huh?
  
So it's a top-level abstraction.
  
Like `Template` will contain both `Header` and `Footer` inside.
`ContentLayout` will contain everything related to the content of these email templates.
  
Most of the small components-wrappers will be put into `InteriorComponents` folder.
  
I think it's enough for the first article...
but I can tease you about what is coming next.
 
Here is a schema that I build to explain react components to other teammates.

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/khpjx0uvxekoa1pd3o5b.png)
 


Here is a list of other articles that connected to this topic.
  
Email Marketing:

- https://hackernoon.com/email-marketing-and-how-to-curate-an-effective-business-newsletter
- https://hackernoon.com/5-reasons-why-newsletters-should-be-part-of-your-business-strategy.
  
Building Email Tool in Public:

- https://hackernoon.com/introducing-a-simple-npm-module-with-email-templates
- https://hackernoon.com/how-i-started-to-build-react-components-for-email-templates
- https://hackernoon.com/organizing-an-advanced-structure-for-html-email-template
- https://hackernoon.com/open-sourcing-regular-expressions-for-markdown-syntax-module


## [Linkedin page of LLazyEmail](https://www.linkedin.com/company/llazyemail/)

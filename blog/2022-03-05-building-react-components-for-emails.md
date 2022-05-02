---
slug: building-react-components-for-emails
title: Building React Components for Emails
authors:
  name: Arthur Tkachenko
  title: Core Team
  url: https://github.com/wgao19
  image_url: https://github.com/wgao19.png
tags: [hola, docusaurus]
---


Let me share a story about building React Components for emails and the email generator that I created.

Here you can find a lot of information about my obsession.

I want to focus on my findings about React, building email campaigns, and sharing things that most of the developers need.

I started the second branch of our repository; I created a basic clean Nextjs app, set of components and used this application as a preview of the emails tool.

Yeah, it was easy in the beginning. You will make tremendous progress; with this application, it is easy to produce reports, questions are easy to solve, etc.

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/6valqprc6se0x437iz6x.png)
 
It was a good milestone. I was angry and happy at the same time. You can't get a result without hitting blockers.

The next stage was a few months ago. I decided to jump into it. There are no bugs that I can't handle :)

As I was not the leading developer of this branch - I quickly realized that it was a rigid structure for me to follow. 

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/lg66itl8kx0a4fqb0flh.png)
 
I will move some components into a sub-module (I will see where this idea brings me.) 

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/js65g5dbnfqzkgfojv9x.png)
 
This shouldn't be hard. I did it before, with the help of Rollup. So I grabbed my own two years old rollup config that was working with simple react components. And tried to make it work.

I tried three times -> nothing worked as it should :)

Well, things changed - my old config didn't work well with the new version of Babel and React. 

It was time to dig into Rollup and solve this problem. 

[RollupJS](https://rollupjs.org/guide/en/) is a popular tool and good library that I adore.

But documentation was really outdated… The maintainer of this project has a lot of things to do, so docs have very low priority. 

That is is why capitalism is king, and open source is still slow, weak, and not bringing a lot of money into the system and can't support code contributors. 

This was one of the reasons for me thinking about doing a software specifications service. But there is a [Karl Huges](https://www.karllhughes.com/), with [WriterDev](http://www.writer.dev) website, where you can use his help if you need excellent software documentation.

And I am not blaming [Lukas Taegert-Atkinson](https://github.com/lukastaegert)(creator of RollupJS). But if he decides to expand the team that building it, things probably would be much easier.

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/snx6j3lcb8zmbyw4gk6m.gif)
 
I left the task for a few weeks and just explored the internet in a lazy way.

At one point, [I found a repository](https://github.com/jaebradley/example-rollup-react-component-npm-package) that sounds reasonable with a config that suits my needs. It even provides room for future growth.

I was looking for a Rollup setup with Babel and the ability to compile and publish my React components.

Yes, yes, yes. I'm aware of [Bit](https://bit.dev/) or other similar tools, but they are somehow against my understanding. Again, I'm scared of Webpack. I mentioned it a few times on my articles. 

But I'm still ready for something better. This is why I'm exploring the [Lit Library](https://lit.dev/) at the same time. It is still not in my arsenal but looks promising.

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/5frn4uieb6uiu0ayitml.png)
 
Separation functionality is one of the things that I've been praising for the last few years, probably because I read a lot of articles on Hackernoon on different languages, platforms, functions, etc. And when your code is tied up with just one project, with just one framework, used only once, it's boring, it is life, so I get on with it. 

But where can we find anarchy and punk rock? You can beat the system by benefiting from an open source at the same time.

[https://media.giphy.com/media/WsvLlmmjx9tnmeTPNc/giphy.gif](https://media.giphy.com/media/WsvLlmmjx9tnmeTPNc/giphy.gif)

Plus, hard-to-swallow code is usually wrong. Usually hard to cover with tests. Easy to spend a week, just by debugging, patching, and ready to break in the next six months. 

Well, it's just not for me. Bad code is too easy to build.

Hopefully, now you'll understand a bit my coding philosophy.

Again, I find [an excellent repository](https://github.com/jaebradley/example-rollup-react-component-npm-package) with the premade setup as my components have pretty low-level complexity.

But there is more:

- it has pre-made Github actions for publishing on npm

- storybook for playgrounds

- and tools that I need when I want a separate module of components that I can easily tweak, extend, publish and install in between projects, repositories.

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/itu81kmwbzy6kqppp1og.png)
 
I did a few iterations there, combined some components, and published them on npm.org.

But it still does not move forward quickly, as I imagine it in my head.

[https://media.giphy.com/media/eNGuf8kUCeGrvflJfo/giphy.gif](https://media.giphy.com/media/eNGuf8kUCeGrvflJfo/giphy.gif)

Let's take a break a little bit. There is a default question that my friend Denis asked me. 

_"But emails aren't a new problem. React isn't a new tool as well. There should probably be plenty of other repositories in GitHub. Did you look at them?"_


And I spent a few nights just exploring GitHub and got excited about it.

But there are always default issues related to using other modules. 

_This is why I like to have separated and independent modules_

Yes, there are old, popular repositories that can have similar tools inside. The reason is always simple - they didn't fit well to our current code. It is not their fault.

It's a widespread issue - you can't easily integrate something great and prebuild with the workflows you have. So instead of trying some of them right now, I'm just stacking links in my notes.

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/cdbb98rzjv941n6dh6qu.png)
 
Even while I have a lot of ideas - the main goal is to make the current project work. Later, when our modules will be mature - we will try to replace some functionality.

We did it before - a pretty incredible experience.

I talk about popular repositories to build emails with some algorithms, I mean JS stuff for building emails. It's [Maizzle](https://maizzle.com/), [MJML](https://www.mailjet.com/feature/mjml/), and others. So later, if things go smoothly - we'll add a port to those libraries. 

Our email generator is “syntax agnostic”. if you learn it, I can generate you HTML, React DOM, XML, or even AST-tree

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/gdj25b7j1ljxjtmc8krz.png)
 
One of my concerns is that the current library must be improved. A few great repositories are doing similar things, but they are aging poorly. For sure, it's not a problem, but I will make it differently.

From another side, I want to use their logic and be able to include some of their excellent findings into our core.

This is why I decided not to have one boring repository and started splitting it.

I also started a [new organization on Github](https://github.com/LLazyEmail) as a unique place for several repositories interconnected by email marketing topic and email template generation.

I split an old repository into a just react components place. And old components were mixed mostly on one template. Now, I want to get a universal version. And by separating inner with outer things, separating default components with Miscellaneous Elements helped to think more widely and make things work together and independently.

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/oif42hceyf5v3erj116p.png)
 

So if you decide to use our components for your emails, you can install [Table components](https://github.com/LLazyEmail/react-email-table) or [Basic Typography](https://github.com/LLazyEmail/react-email-typography-components) components and use them while not being overwhelmed with other available components (like bid design systems like [Bootstrap](https://getbootstrap.com/) or [Ant Design](https://ant.design/)). It was the main image in my head.

[NextJS](https://nextjs.org/) is used as a preview, repositories with separated  components. What is next? Well. I will jump into the next loophole that will distracted me for another few months. it will help me to optimize that code.

I am going to write more articles about that.

**Related Articles**
[https://dev.to/atherdon/how-i-created-a-simple-npm-package-with-basic-email-templates-1efo](https://dev.to/atherdon/how-i-created-a-simple-npm-package-with-basic-email-templates-1efo)

[https://dev.to/atherdon/created-a-module-for-markdown-regexes-3a1b](https://dev.to/atherdon/created-a-module-for-markdown-regexes-3a1b)

[https://dev.to/atherdon/creating-an-advanced-structure-for-html-email-template-1n28](https://dev.to/atherdon/creating-an-advanced-structure-for-html-email-template-1n28)

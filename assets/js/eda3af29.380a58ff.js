"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[620],{4003:function(e){e.exports=JSON.parse('{"blogPosts":[{"id":"how-i-created-a-simple-npm-package-with-basic-email-templates","metadata":{"permalink":"/documentation/blog/how-i-created-a-simple-npm-package-with-basic-email-templates","editUrl":"https://github.com/LLazyEmail/documentation/tree/main/blog/2022-04-09-how-i-created-a-simple-npm-package-with-basic-email-templates.md","source":"@site/blog/2022-04-09-how-i-created-a-simple-npm-package-with-basic-email-templates.md","title":"How I created a simple NPM package with basic email templates","description":"A story about the need for a default email template package.","date":"2022-04-09T00:00:00.000Z","formattedDate":"April 9, 2022","tags":[{"label":"hola","permalink":"/documentation/blog/tags/hola"},{"label":"docusaurus","permalink":"/documentation/blog/tags/docusaurus"}],"readingTime":4.13,"truncated":false,"authors":[{"name":"Arthur Tkachenko","title":"Core Team","url":"https://github.com/wgao19","image_url":"https://github.com/wgao19.png","imageURL":"https://github.com/wgao19.png"}],"frontMatter":{"slug":"how-i-created-a-simple-npm-package-with-basic-email-templates","title":"How I created a simple NPM package with basic email templates","authors":{"name":"Arthur Tkachenko","title":"Core Team","url":"https://github.com/wgao19","image_url":"https://github.com/wgao19.png","imageURL":"https://github.com/wgao19.png"},"tags":["hola","docusaurus"]},"nextItem":{"title":"How To Create a Curated Email Newsletter That Brings Results for Your Business","permalink":"/documentation/blog/how-to-create-a-curated-email-newsletter-that-brings-results-for-your-business"}},"content":"A story about the need for a [default email template package](https://github.com/LLazyEmail/default-email-template).\\nFrom novice developers to experienced ones, most are involved in sending emails programmatically. Sending emails is like building forms: most of the developers involved in building the web did it.\\n\\n- If you are learning nodeJS, then you probably used nodemailer.\\n- If you are building your product, I bet you are thinking about connecting your code with SendGrid or MailGun and sending some transactional emails.\\n- If you are trying to make that sign-up form work and send confirmation emails -> I hear you.\\n\\nWe have a lot of resources and simple tutorials online that might help you to do such basic things. It is cool that you can read some tutorials, install a few packages and go! \\n\\nEven starting with some SAAS boilerplate that removes the first configuration steps and gives you a great jumpstart for your ideas.\\n\\nNow you can send your empty email with \\"Hello world\\" from your server and be happy when it is delivered to your inbox. And this is where most developers feel that everything is great and stop doing more.\\n\\n![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/j75251dyexl69wltd3m0.png)\\n\\nAnd while my module is written in JS, I don\'t think that it is a hard task to convert it into other languages if someone wants to contribute -> feel free to jump abroad. I\u2019m always friendly to contributors\' pull requests.\\n\\n\\nOk, let\'s try to imagine that you are building your email-related functionality, related to emails from scratch -- you will try to organize email messages in a separate folder, maybe even make it translatable into multi-languages, testing your ability to render it with variables received from other sources...\\n\\n\\n![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/z0wyf5qjj04719a7svvq.png)\\n \\n\\nBut you will probably never try to send an email with a full template from the beginning.\\n\\n**But you should do it.** \\n\\n![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/a99g4067ltz8jqzao2ay.png)\\n\\n\\nThere are a lot of important questions that you have to ask yourself.\\n_Does your email template is good and render all necessary thoughts?_\\n_What about images? Do you have a folder with images that is available from outside?_\\n_Are all permissions set correctly? (Ie. not only your logo must be visible)_\\n_What about links?_\\n_What about supporting different email clients? (Yes there is not only your email app that you update frequently.)_\\n \\n![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/mhrexk9s1f5jsyk4o1dz.png)\\n \\n\\nSome people use Thunderbird and it disables image rendering by default (just to let you know). \\n\\nAll those things might crash your email. Plus, it\u2019s an old HTML4 code, so everything is so fragile.\\n\\n\\nI was trying to solve our inner coding problem a few months ago. We had an issue with making email templates to be precise --\x3e we split them into partials, but I still didn\'t like what my stomach was telling me about manipulating with markup emails.\\n\\nBut that is a story for another article. And it was time for me to be inspired by other developers.\\n\\nI reviewed a few repositories during one night. I found a few basic, but interesting solutions.\\n\\nWhile our render method was working well for our needs -> it didn\'t give you this feeling of quickly understanding what your code is doing.\\n\\nWe didn\'t have it.\\n\\nSo I saved links and copied a few methods into temporary files.\\n\\nIt was not enough, especially as our problem was not gone anyway. At that moment I realized that a lot of projects might have similar issues. Imagine this situation: you have your monolith application and you need to send a test email via your Email Transport provider.\\n\\nAnd sending a few blank emails with 2 lines is not enough either. We all need a quick and easy way to do it properly without additional knowledge. One of the best ways is to use a predefined working solution. So I decided to make it an open JS module and easy to use for everyone.\\n\\nAnd I created two repositories for that :)\\n\\nThe first repository contains 3 files. And it\'s easy to read. Just a long string aka literal with an email template inside.\\n\\nWhat\'s good about this repository is that you can install it via npm, use it a few times, while debugging your project, and then delete it.\\n\\nlike `yarn add javascript-email-templates` and just use one or a few templates imported.\\n\\nOr you can use a statement like,\\n\\n```\\nif(NODE_ENV == \'production\') {\\n\\t// send a test email to an admin\\n}\\n```\\n\\nand it will work for a lot of cases\\n\\nThe second repository can be more interesting.\\n\\nBasically, I copy-pasted a render method from other repositories. Yes, they has \\"free to use and modify\\" license.\\n\\nI want to extend and isolate that render method, so it can be an independent package, suit our project needs and be easy to customize, if necessary (there is always a need to customize things. you can\'t make it work from the first shot).\\n\\nShow some love if you want more articles like this one! any activity will be appreciated."},{"id":"how-to-create-a-curated-email-newsletter-that-brings-results-for-your-business","metadata":{"permalink":"/documentation/blog/how-to-create-a-curated-email-newsletter-that-brings-results-for-your-business","editUrl":"https://github.com/LLazyEmail/documentation/tree/main/blog/2022-03-30-curated-newsletter.md","source":"@site/blog/2022-03-30-curated-newsletter.md","title":"How To Create a Curated Email Newsletter That Brings Results for Your Business","description":"Email marketing is the most effective channel available to marketers today.","date":"2022-03-30T00:00:00.000Z","formattedDate":"March 30, 2022","tags":[{"label":"hola","permalink":"/documentation/blog/tags/hola"},{"label":"docusaurus","permalink":"/documentation/blog/tags/docusaurus"}],"readingTime":3.775,"truncated":false,"authors":[{"name":"Arthur Tkachenko","title":"Core Team","url":"https://github.com/wgao19","image_url":"https://github.com/wgao19.png","imageURL":"https://github.com/wgao19.png"}],"frontMatter":{"slug":"how-to-create-a-curated-email-newsletter-that-brings-results-for-your-business","title":"How To Create a Curated Email Newsletter That Brings Results for Your Business","authors":{"name":"Arthur Tkachenko","title":"Core Team","url":"https://github.com/wgao19","image_url":"https://github.com/wgao19.png","imageURL":"https://github.com/wgao19.png"},"tags":["hola","docusaurus"]},"prevItem":{"title":"How I created a simple NPM package with basic email templates","permalink":"/documentation/blog/how-i-created-a-simple-npm-package-with-basic-email-templates"},"nextItem":{"title":"Building React Components for Emails","permalink":"/documentation/blog/building-react-components-for-emails"}},"content":"Email marketing is the most effective channel available to marketers today.\\n\\n\\n![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/jqn1djzxaabkhlsqz9u5.png)\\n\\nIt can help you keep your business the center of attention, build thought leadership around your brand, and generate sales.\\n\\nHowever, it also requires content, and creating content can be time-consuming.\\n\\n\\n![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/u9h890g85nkj6flfh7q0.jpg)\\n\\nSo how can marketers like you send out engaging newsletters without spending hours creating content?\\n\\nThe answer is to create a curated newsletter.\\n\\n\\n\\nIn this post, we\'ll show you what a curated email newsletter is and walk you through the process of setting up a curated newsletter that brings results for your business. However, before we dive into curated newsletters, let\'s first touch on the basics of newsletters, in general.\\n\\n\\n![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/oq9pd64gj1e49s44yjxb.png)\\n\\n## How can I start an email newsletter for a company?\\n\\nBefore a company dives into creating curated newsletters, it needs to have a solid understanding of what an email newsletter is. \\n\\nAn email newsletter is an email communication that is sent to inform your subscribers about various topics, such as:\\n- Latest news\\n- Advice\\n- Product updates / launches\\n- Important appointments\\n\\nThese emails can cover general topics and user-generated topics that are sent on a predetermined schedule, such as weekly, monthly, quarterly, etc.\\n\\nStarting an email newsletter isn\'t all that difficult, especially if you\'ve already created a list of email users. \\n\\nFrom there, you\'ll simply have to send opt-in emails to your subscribers to make sure they want to receive your marketing materials, and once that\'s done you can start sending them according to your predetermined schedule.\\n\\nStarting an email newsletter isn\'t that difficult, especially if you\'ve already built a list of email users. \\n\\n\\n![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/5uwti3h7w9yobdziau9e.jpg)\\n\\n## How do you make a good newsletter?\\n\\nWhat makes a good newsletter really depends on the brand, industry, and target audience. The reason for this is that everyone wants something a little different which is why they choose specific activities to follow.\\n \\nHowever, there are several ways to help your email marketing team create a newsletter that works well.\\n\\n### 1. Don\'t try to sell \\n\\nMentioning a product is one thing, as you will do it during product launches / updates, but it has to be about the reader, not you selling them something.\\n\\n### 2. Be short and simple \\nIt must be informative, also encouraging readers to click to learn more.\\n\\n### 3. Again, you should aim for a click-through\\n\\nClick through rate (CTR) is the most common metric for measuring engagement within an email campaign. CTR is a metric that measures how many people click through an email in relation to how many emails were delivered. Essentially, the click rate is a percentage that tells you how many emails successfully achieved one click from a subscriber. This click tells you if your campaign was engaging enough to not only entice an open, but also an action from your audience.\\n\\n[Source](https://www.campaignmonitor.com/resources/knowledge-base/what-is-click-through-rate-how-can-ctr-be-calculated/) \\n\\n### 4. Simplify deactivation(unsubscribe link). \\n\\nIt is vital to make deactivation easy for those who wish to stop receiving communications.\\n\\n### 5. Make sure it\'s compelling. \\n\\n---\\n\\n## What is a curated newsletter?\\nFirst of all, it is essential to understand what it means to care: to put together, sift and select for presentation.\\n\\nTherefore, a curated newsletter is one that aggregates interesting and / or popular content on a specific topic. \\n\\nCurated newsletters find the best of the best material and then collect it in one place.\\n\\nOften, along with links to external content locations, the newsletter will also offer a brief commentary or summary on the pieces.\\n\\nHere is an example from Campaign Monitor client SitePoint:\\n\\n> The newsletter curates the best web design and development content from across the web and delivers it daily to subscribers in a simple and convenient format.\\n \\n\\n## Why create a curated newsletter?\\n\\nThere are many reasons why people take a curated newsletter approach. \\n\\nFor many, it helps build their businesses:\\n\\n- Stay on top with subscribers\\n- Build thought leadership around your brand\\n- Sharing interesting discoveries and resources\\n\\n> Curated newsletters are an opportunity to offer readers a wide range of material that you have personally selected for them.\\n\\nPlus, with so much content posted on the web, a curated newsletter has serious value.\\n\\n**Choose your topic**\\nThe first step in creating your curated email newsletter is choosing your topic.\\n\\nWill your curated newsletter contain email marketing tips and tricks? \\n\\nAlternatively, will you curate content on web design trends?\\n\\nChoosing your topic is one of the most critical parts of starting a curated email newsletter."},{"id":"building-react-components-for-emails","metadata":{"permalink":"/documentation/blog/building-react-components-for-emails","editUrl":"https://github.com/LLazyEmail/documentation/tree/main/blog/2022-03-05-building-react-components-for-emails.md","source":"@site/blog/2022-03-05-building-react-components-for-emails.md","title":"Building React Components for Emails","description":"Let me share a story about building React Components for emails and the email generator that I created.","date":"2022-03-05T00:00:00.000Z","formattedDate":"March 5, 2022","tags":[{"label":"hola","permalink":"/documentation/blog/tags/hola"},{"label":"docusaurus","permalink":"/documentation/blog/tags/docusaurus"}],"readingTime":6.295,"truncated":false,"authors":[{"name":"Arthur Tkachenko","title":"Core Team","url":"https://github.com/wgao19","image_url":"https://github.com/wgao19.png","imageURL":"https://github.com/wgao19.png"}],"frontMatter":{"slug":"building-react-components-for-emails","title":"Building React Components for Emails","authors":{"name":"Arthur Tkachenko","title":"Core Team","url":"https://github.com/wgao19","image_url":"https://github.com/wgao19.png","imageURL":"https://github.com/wgao19.png"},"tags":["hola","docusaurus"]},"prevItem":{"title":"How To Create a Curated Email Newsletter That Brings Results for Your Business","permalink":"/documentation/blog/how-to-create-a-curated-email-newsletter-that-brings-results-for-your-business"},"nextItem":{"title":"Reading List Email Marketing Basics","permalink":"/documentation/blog/reading-list-email-marketing-basics"}},"content":"Let me share a story about building React Components for emails and the email generator that I created.\\n\\nHere you can find a lot of information about my obsession.\\n\\nI want to focus on my findings about React, building email campaigns, and sharing things that most of the developers need.\\n\\nI started the second branch of our repository; I created a basic clean Nextjs app, set of components and used this application as a preview of the emails tool.\\n\\nYeah, it was easy in the beginning. You will make tremendous progress; with this application, it is easy to produce reports, questions are easy to solve, etc.\\n\\n![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/6valqprc6se0x437iz6x.png)\\n \\nIt was a good milestone. I was angry and happy at the same time. You can\'t get a result without hitting blockers.\\n\\nThe next stage was a few months ago. I decided to jump into it. There are no bugs that I can\'t handle :)\\n\\nAs I was not the leading developer of this branch - I quickly realized that it was a rigid structure for me to follow. \\n\\n![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/lg66itl8kx0a4fqb0flh.png)\\n \\nI will move some components into a sub-module (I will see where this idea brings me.) \\n\\n![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/js65g5dbnfqzkgfojv9x.png)\\n \\nThis shouldn\'t be hard. I did it before, with the help of Rollup. So I grabbed my own two years old rollup config that was working with simple react components. And tried to make it work.\\n\\nI tried three times -> nothing worked as it should :)\\n\\nWell, things changed - my old config didn\'t work well with the new version of Babel and React.\xa0\\n\\nIt was time to dig into Rollup and solve this problem.\xa0\\n\\n[RollupJS](https://rollupjs.org/guide/en/) is a popular tool and good library that I adore.\\n\\nBut documentation was really outdated\u2026 The maintainer of this project has a lot of things to do, so docs have very low priority. \\n\\nThat is is why capitalism is king, and open source is still slow, weak, and not bringing a lot of money into the system and can\'t support code contributors. \\n\\nThis was one of the reasons for me thinking about doing a software specifications service. But there is a [Karl Huges](https://www.karllhughes.com/), with [WriterDev](http://www.writer.dev) website, where you can use his help if you need excellent software documentation.\\n\\nAnd I am not blaming [Lukas Taegert-Atkinson](https://github.com/lukastaegert)(creator of RollupJS). But if he decides to expand the team that building it, things probably would be much easier.\\n\\n![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/snx6j3lcb8zmbyw4gk6m.gif)\\n \\nI left the task for a few weeks and just explored the internet in a lazy way.\\n\\nAt one point, [I found a repository](https://github.com/jaebradley/example-rollup-react-component-npm-package) that sounds reasonable with a config that suits my needs. It even provides room for future growth.\\n\\nI was looking for a Rollup setup with Babel and the ability to compile and publish my React components.\\n\\nYes, yes, yes. I\'m aware of [Bit](https://bit.dev/) or other similar tools, but they are somehow against my understanding. Again, I\'m scared of Webpack. I mentioned it a few times on my articles. \\n\\nBut I\'m still ready for something better. This is why I\'m exploring the [Lit Library](https://lit.dev/) at the same time. It is still not in my arsenal but looks promising.\\n\\n![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/5frn4uieb6uiu0ayitml.png)\\n \\nSeparation functionality is one of the things that I\'ve been praising for the last few years, probably because I read a lot of articles on Hackernoon on different languages, platforms, functions, etc. And when your code is tied up with just one project, with just one framework, used only once, it\'s boring, it is life, so I get on with it. \\n\\nBut where can we find anarchy and punk rock? You can beat the system by benefiting from an open source at the same time.\\n\\n[https://media.giphy.com/media/WsvLlmmjx9tnmeTPNc/giphy.gif](https://media.giphy.com/media/WsvLlmmjx9tnmeTPNc/giphy.gif)\\n\\nPlus, hard-to-swallow code is usually wrong. Usually hard to cover with tests. Easy to spend a week, just by debugging, patching, and ready to break in the next six months.\xa0\\n\\nWell, it\'s just not for me. Bad code is too easy to build.\\n\\nHopefully, now you\'ll understand a bit my coding philosophy.\\n\\nAgain, I find [an excellent repository](https://github.com/jaebradley/example-rollup-react-component-npm-package) with the premade setup as my components have pretty low-level complexity.\\n\\nBut there is more:\\n\\n- it has pre-made Github actions for publishing on npm\\n\\n- storybook for playgrounds\\n\\n- and tools that I need when I want a separate module of components that I can easily tweak, extend, publish and install in between projects, repositories.\\n\\n![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/itu81kmwbzy6kqppp1og.png)\\n \\nI did a few iterations there, combined some components, and published them on npm.org.\\n\\nBut it still does not move forward quickly, as I imagine it in my head.\\n\\n[https://media.giphy.com/media/eNGuf8kUCeGrvflJfo/giphy.gif](https://media.giphy.com/media/eNGuf8kUCeGrvflJfo/giphy.gif)\\n\\nLet\'s take a break a little bit. There is a default question that my friend Denis asked me.\xa0\\n\\n_\\"But emails aren\'t a new problem. React isn\'t a new tool as well. There should probably be plenty of other repositories in GitHub. Did you look at them?\\"_\\n\\n\\nAnd I spent a few nights just exploring GitHub and got excited about it.\\n\\nBut there are always default issues related to using other modules.\xa0\\n\\n_This is why I like to have separated and independent modules_\\n\\nYes, there are old, popular repositories that can have similar tools inside. The reason is always simple - they didn\'t fit well to our current code. It is not their fault.\\n\\nIt\'s a widespread issue - you can\'t easily integrate something great and prebuild with the workflows you have. So instead of trying some of them right now, I\'m just stacking links in my notes.\\n\\n![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/cdbb98rzjv941n6dh6qu.png)\\n \\nEven while I have a lot of ideas - the main goal is to make the current project work. Later, when our modules will be mature - we will try to replace some functionality.\\n\\nWe did it before - a pretty incredible experience.\\n\\nI talk about popular repositories to build emails with some algorithms, I mean JS stuff for building emails. It\'s [Maizzle](https://maizzle.com/), [MJML](https://www.mailjet.com/feature/mjml/), and others. So later, if things go smoothly - we\'ll add a port to those libraries. \\n\\nOur email generator is \u201csyntax agnostic\u201d. if you learn it, I can generate you HTML, React DOM, XML, or even AST-tree\\n\\n![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/gdj25b7j1ljxjtmc8krz.png)\\n \\nOne of my concerns is that the current library must be improved. A few great repositories are doing similar things, but they are aging poorly. For sure, it\'s not a problem, but I will make it differently.\\n\\nFrom another side, I want to use their logic and be able to include some of their excellent findings into our core.\\n\\nThis is why I decided not to have one boring repository and started splitting it.\\n\\nI also started a [new organization on Github](https://github.com/LLazyEmail) as a unique place for several repositories interconnected by email marketing topic and email template generation.\\n\\nI split an old repository into a just react components place. And old components were mixed mostly on one template. Now, I want to get a universal version. And by separating inner with outer things, separating default components with Miscellaneous Elements helped to think more widely and make things work together and independently.\\n\\n![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/oif42hceyf5v3erj116p.png)\\n \\n\\nSo if you decide to use our components for your emails, you can install [Table components](https://github.com/LLazyEmail/react-email-table) or [Basic Typography](https://github.com/LLazyEmail/react-email-typography-components) components and use them while not being overwhelmed with other available components (like bid design systems like [Bootstrap](https://getbootstrap.com/) or [Ant Design](https://ant.design/)). It was the main image in my head.\\n\\n[NextJS](https://nextjs.org/) is used as a preview, repositories with separated  components. What is next? Well. I will jump into the next loophole that will distracted me for another few months. it will help me to optimize that code.\\n\\nI am going to write more articles about that.\\n\\n**Related Articles**\\n[https://dev.to/atherdon/how-i-created-a-simple-npm-package-with-basic-email-templates-1efo](https://dev.to/atherdon/how-i-created-a-simple-npm-package-with-basic-email-templates-1efo)\\n\\n[https://dev.to/atherdon/created-a-module-for-markdown-regexes-3a1b](https://dev.to/atherdon/created-a-module-for-markdown-regexes-3a1b)\\n\\n[https://dev.to/atherdon/creating-an-advanced-structure-for-html-email-template-1n28](https://dev.to/atherdon/creating-an-advanced-structure-for-html-email-template-1n28)"},{"id":"reading-list-email-marketing-basics","metadata":{"permalink":"/documentation/blog/reading-list-email-marketing-basics","editUrl":"https://github.com/LLazyEmail/documentation/tree/main/blog/2022-02-21-reading-list-email-marketing-basics.md","source":"@site/blog/2022-02-21-reading-list-email-marketing-basics.md","title":"Reading List Email Marketing Basics","description":"Strategies","date":"2022-02-21T00:00:00.000Z","formattedDate":"February 21, 2022","tags":[{"label":"hola","permalink":"/documentation/blog/tags/hola"},{"label":"docusaurus","permalink":"/documentation/blog/tags/docusaurus"}],"readingTime":0.825,"truncated":false,"authors":[{"name":"Arthur Tkachenko","title":"Core Team","url":"https://github.com/wgao19","image_url":"https://github.com/wgao19.png","imageURL":"https://github.com/wgao19.png"}],"frontMatter":{"slug":"reading-list-email-marketing-basics","title":"Reading List Email Marketing Basics","authors":{"name":"Arthur Tkachenko","title":"Core Team","url":"https://github.com/wgao19","image_url":"https://github.com/wgao19.png","imageURL":"https://github.com/wgao19.png"},"tags":["hola","docusaurus"]},"prevItem":{"title":"Building React Components for Emails","permalink":"/documentation/blog/building-react-components-for-emails"},"nextItem":{"title":"Creating an advanced Structure for HTML Email Template","permalink":"/documentation/blog/creating-an-advanced-structure-for-html-email-template"}},"content":"### Strategies\\n\\n\\n\\n* [7 Effective Email Marketing Strategies to Generate More Sales](https://alite-international.com/7-effective-email-marketing-strategies-generat-sales/)\\n* [Email Marketing Strategy: A Data-Driven Guide to Email in 2021](https://www.superoffice.com/blog/email-marketing-strategy/)\\n* [Email Marketing: How to do it, Strategies, Tools, & Examples](https://neilpatel.com/blog/beginners-guide-email-marketing/)\\n* [Email Marketing Strategy and Tips for Successful Campaigns | Mailchimp](https://mailchimp.com/email-marketing/)\\n* [10 Tried-And-True Email Marketing Tactics That Actually Work](https://www.forbes.com/sites/theyec/2020/09/11/10-tried-and-true-email-marketing-tactics-that-actually-work/?sh=3f5f54007a33)\\n* [What is Email Marketing Strategy: Definition, Tips, Video](https://sendpulse.com/support/glossary/email-marketing-strategy)\\n* [8 Effective Email Marketing Strategies, Backed by Science](https://buffer.com/resources/8-effective-email-strategies-backed-by-research/)\\n* [Email Marketing: The #1 Ridiculously Easy Way To Grow Your Business - OptinMonster](https://optinmonster.com/beginners-guide-to-email-marketing/)\\n* [https://mailchimp.com/email-design-guide/](https://mailchimp.com/email-design-guide/)\\n\\n### Building Email List\\n\\n* [Email List Building: 13 Proven Methods to Grow Your Email List](https://popupsmart.com/blog/email-list-building-methods-beginners)\\n* [Email Marketing Beginner to Advanced Roadmap 2021 | Popupsmart](https://popupsmart.com/email-marketing/#how-to-build-an-email-list)\\n* [How to Build Your Email List in Less than an Hour | Mailchimp](https://mailchimp.com/resources/how-to-build-your-email-list/)\\n\\n### Basic questions\\n\\n* [How much can you earn from your newsletter? ](https://www.getrevue.co/profile/the_week_in_newsletters/issues/how-much-can-you-earn-from-your-newsletter-557696)\\n* [Options to start a paid newsletter ](https://www.getrevue.co/profile/the_week_in_newsletters/issues/options-to-start-a-paid-newsletter-292557)\\n* [How much is your newsletter worth?](https://www.getrevue.co/profile/the_week_in_newsletters/issues/how-much-is-your-newsletter-worth-285518)\\n* [Risks and rewards of a paid newsletter ](https://www.getrevue.co/profile/the_week_in_newsletters/issues/risks-and-rewards-of-a-paid-newsletter-280186)"},{"id":"creating-an-advanced-structure-for-html-email-template","metadata":{"permalink":"/documentation/blog/creating-an-advanced-structure-for-html-email-template","editUrl":"https://github.com/LLazyEmail/documentation/tree/main/blog/2022-02-11-creating-an-advanced-structure-for-html-email-template.md","source":"@site/blog/2022-02-11-creating-an-advanced-structure-for-html-email-template.md","title":"Creating an advanced Structure for HTML Email Template","description":"I was rebuilding a part of our markdown-to-email repository. I was not happy with how we handle templates in our generator.","date":"2022-02-11T00:00:00.000Z","formattedDate":"February 11, 2022","tags":[{"label":"hola","permalink":"/documentation/blog/tags/hola"},{"label":"docusaurus","permalink":"/documentation/blog/tags/docusaurus"}],"readingTime":2.49,"truncated":false,"authors":[{"name":"Arthur Tkachenko","title":"Core Team","url":"https://github.com/wgao19","image_url":"https://github.com/wgao19.png","imageURL":"https://github.com/wgao19.png"}],"frontMatter":{"slug":"creating-an-advanced-structure-for-html-email-template","title":"Creating an advanced Structure for HTML Email Template","authors":{"name":"Arthur Tkachenko","title":"Core Team","url":"https://github.com/wgao19","image_url":"https://github.com/wgao19.png","imageURL":"https://github.com/wgao19.png"},"tags":["hola","docusaurus"]},"prevItem":{"title":"Reading List Email Marketing Basics","permalink":"/documentation/blog/reading-list-email-marketing-basics"},"nextItem":{"title":"How I Created a module for markdown RegEx`es","permalink":"/documentation/blog/how-i-created-a-simple-npm-package-with-basic-email-templates"}},"content":"I was rebuilding a part of our [markdown-to-email](https://github.com/atherdon/markdown-to-email) repository. I was not happy with how we handle templates in our generator.\\n\\nWhile there are not many things that changed behind how it works, I still want to showcase them in my article.\\n\\nAll developers work with strings, generating chunks of HTML code. I spend days thinking about how to improve it for our benefit.\\n\\nWhile this version of the template will be obsolete when we upgrade our generator, there is still room to forget some knowledge and learn how to keep things simple and not be seduced by ideas to complete it quickly.\\n\\n\\nSo we have been working on rendering HTML for a while right now. \\n\\nOur HTML template contains an old HTML4 style markup that is very sensitive and requires careful work and attention to small details. I have been asking for help from different developers, but everybody struggles with it from the beginning. \\n\\nSo we are combining that HTML page from small parts, and for the last nine months, I moved those parts away into a small js module. \\n\\nWith the help of RollupJS, it\'s easy to work.\\n\\n ![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/62g0ie0unri1ad1aoy8k.png)\\n\\nI was able to extend it and even clone it. I decided to build a react-dom tree at some point instead of HTML. \\n\\nSo I copy-pasted everything and replaced my literals with react tags. It looks like \u201ccustom XML\u201d, which can be just another way of presenting the information.\\n\\nAfter that, this module didn\'t evolve a lot. Everything was working ok, but not ideally. I tried to expand it and polish our functionality, but things didn\'t move fast. \\n \\nThis module was located in folder \\"packages\\" with other modules that I have.\\n\\n![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/xqep0y6lxflgsireezp3.png)\\n\\nAt this point, I decided that there was a lot of coding, and I was sick of it. So I created a new repository and moved it there. While it was just a copy-paste - it helped me to think differently. I was able to focus only on those 25 files.\\n \\n\\nFrom the beginning, we think about our template in 2 only forms: \\"content only\\" and \\"full template\\". Most bugs was in the \\"content\\" part, while the main template was pretty stable. But it was hard to go from \\"content only\\" into \\"full template\\" sometimes - we don\'t have an easy way to preview it or debug.\\n\\nSo I separated our 25 files into two parts: literals related to \\"not content\\" was named \\"outer template.\\"\\n\\n![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/5ypf0uon3b80zl2230ff.png)\\n\\nAnd I decided to replace my literals with functions.\\n\\n![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ajg3lzb6mvl0uox2we0p.png)\\n\\nFunctions look similar to simple react components.\\n\\n\\n\\n![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/bt3qijnk6yyinrc3dww8.png)\\n\\nIt gives me the ability to debug my strings how I want it.\\n\\n![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/wnfogb6bsqqrvbslrqt0.png)\\n\\nI even created a folder with basic tests inside.\\n\\n ![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/jjpou6ut89kdvrc3ysnp.png)\\n\\nHope you like it!\\n\\n\\nMore articles about building markdown to email:\\n- [https://dev.to/atherdon/created-a-module-for-markdown-regexes-3a1b](https://dev.to/atherdon/created-a-module-for-markdown-regexes-3a1b)\\n- [https://dev.to/atherdon/how-i-created-a-simple-npm-package-with-basic-email-templates-1efo](https://dev.to/atherdon/how-i-created-a-simple-npm-package-with-basic-email-templates-1efo)\\n\\nUPD. I forget to add a link to a repository with a source code.\\n[Current code is here](https://github.com/LLazyEmail/_trying-lit), but I probably rename this repository later."},{"id":"how-i-created-a-simple-npm-package-with-basic-email-templates","metadata":{"permalink":"/documentation/blog/how-i-created-a-simple-npm-package-with-basic-email-templates","editUrl":"https://github.com/LLazyEmail/documentation/tree/main/blog/2022-02-01-how-i-created-a-simple-npm-package-with-basic-email-templates.md","source":"@site/blog/2022-02-01-how-i-created-a-simple-npm-package-with-basic-email-templates.md","title":"How I Created a module for markdown RegEx`es","description":"While working on https://github.com/atherdon/markdown-to-email repository, we created and adapted a few cool things that I want to share with others.","date":"2022-02-01T00:00:00.000Z","formattedDate":"February 1, 2022","tags":[{"label":"hola","permalink":"/documentation/blog/tags/hola"},{"label":"docusaurus","permalink":"/documentation/blog/tags/docusaurus"}],"readingTime":2.215,"truncated":false,"authors":[{"name":"Arthur Tkachenko","title":"Core Team","url":"https://github.com/wgao19","image_url":"https://github.com/wgao19.png","imageURL":"https://github.com/wgao19.png"}],"frontMatter":{"slug":"how-i-created-a-simple-npm-package-with-basic-email-templates","title":"How I Created a module for markdown RegEx`es","authors":{"name":"Arthur Tkachenko","title":"Core Team","url":"https://github.com/wgao19","image_url":"https://github.com/wgao19.png","imageURL":"https://github.com/wgao19.png"},"tags":["hola","docusaurus"]},"prevItem":{"title":"Creating an advanced Structure for HTML Email Template","permalink":"/documentation/blog/creating-an-advanced-structure-for-html-email-template"}},"content":"While working on [https://github.com/atherdon/markdown-to-email](https://github.com/atherdon/markdown-to-email ) repository, we created and adapted a few cool things that I want to share with others.\\n\\n_Intro: \\"I don\'t like a lot to start a new project from scratch.\\"_\\n\\nSo I\'m usually trying to use GitHub search and see what was done by more experienced and crazy developers.\\n\\nI find a number of repositories that were doing similar things(parsing markdown). But for different reasons, you can\'t just fork them and make that code work as necessary. So we \\"steal\\" some cool implementations and then rewrite them for our needs.\\n\\nWe have a lot of iterations, and at some point, I realize that every project that was doing a similar parsing for markdown syntax used regex\'es. But they(RegEx\'es) were always highly mixed in their code. long code. smelly code.\\n\\nI was like: \\"I don\'t want to keep it all in one place. It\'s just eating space in my brain. It\'s not easy to test, etc, etc\\"\\nand if you know about regular expressions, you probably aware about a lot of memes\\n\\n\\n![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/pcfa7nyu3bho4kvvpgc0.jpg)\\n\\n\\n![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/shrmjpkt0sgbhfbhk3sk.jpg)\\n\\n\\n![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/rrvpifvcr6vt6cmkluic.jpg)\\n\\n**Step Zero:** other developers were creating a list of constants and put them into their files. we did it too.\\n\\n\\n**Step One:** I move out a lot of constants that were representing RegEx strings into a separate file and just import it. fancy!\\n\\n\\n**Step Two:** move all constants into the package folder and try to create a separate npm package, using Rollup.\\n\\n\\nModule structure with Rollup config and a few js files is very simple. Another huge plus you can separate your tests, which is necessary for the future. and I like that it\'s very independent and doing only one thing. nothing more. you can see a structure below\\n\\n![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/tb44g6lepdntqc15an80.png)\\n\\n\\ninside \\"src\\" i have few files with regular expressions. one file was related to storing default markdown tags that can be used in other projects. another file was related to custom tags that we \\"invented\\" for our own needs.\\n\\n\\nI also have a separate file for lists only. lists in markdown syntax are pure madness. they should be covered with more tests.\\n\\n\\n![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/cpjli33loev5fh8z7jpi.gif)\\n\\n\\n**Step Three:** I realize that I want to contribute something to the world and moved default tags into a separated npm module and a separate GitHub repository. For sure, it\'s a small input, but nobody did it before.\\n\\nGitHub link is here: [https://github.com/atherdon/markdown-regex](https://github.com/atherdon/markdown-regex)\\n\\nand you can install it - `yarn add markdown-regex`\\n\\nand I\'m happy to see it on npm(while it\'s not indexed well, yet): [https://www.npmjs.com/package/markdown-regex](https://www.npmjs.com/package/markdown-regex)\\n\\n\\n\\n![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/y3jrbnqer3ht13iw0qcw.png)\\n\\nOops, looks like I didn\'t move tests into a new repository \ud83d\ude42 time to do the next release \ud83d\ude42"}]}')}}]);
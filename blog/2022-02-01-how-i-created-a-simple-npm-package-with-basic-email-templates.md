---
slug: how-i-created-a-simple-npm-package-with-basic-email-templates
title: How I Created a module for markdown RegEx`es
authors:
  name: Arthur Tkachenko
  title: Core Team
  url: https://github.com/wgao19
  image_url: https://github.com/wgao19.png
tags: [hola, docusaurus]
---

While working on [https://github.com/atherdon/markdown-to-email](https://github.com/atherdon/markdown-to-email ) repository, we created and adapted a few cool things that I want to share with others.

_Intro: "I don't like a lot to start a new project from scratch."_

So I'm usually trying to use GitHub search and see what was done by more experienced and crazy developers.

I find a number of repositories that were doing similar things(parsing markdown). But for different reasons, you can't just fork them and make that code work as necessary. So we "steal" some cool implementations and then rewrite them for our needs.

We have a lot of iterations, and at some point, I realize that every project that was doing a similar parsing for markdown syntax used regex'es. But they(RegEx'es) were always highly mixed in their code. long code. smelly code.

I was like: "I don't want to keep it all in one place. It's just eating space in my brain. It's not easy to test, etc, etc"
and if you know about regular expressions, you probably aware about a lot of memes


![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/pcfa7nyu3bho4kvvpgc0.jpg)


![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/shrmjpkt0sgbhfbhk3sk.jpg)


![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/rrvpifvcr6vt6cmkluic.jpg)

**Step Zero:** other developers were creating a list of constants and put them into their files. we did it too.


**Step One:** I move out a lot of constants that were representing RegEx strings into a separate file and just import it. fancy!


**Step Two:** move all constants into the package folder and try to create a separate npm package, using Rollup.


Module structure with Rollup config and a few js files is very simple. Another huge plus you can separate your tests, which is necessary for the future. and I like that it's very independent and doing only one thing. nothing more. you can see a structure below

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/tb44g6lepdntqc15an80.png)


inside "src" i have few files with regular expressions. one file was related to storing default markdown tags that can be used in other projects. another file was related to custom tags that we "invented" for our own needs.


I also have a separate file for lists only. lists in markdown syntax are pure madness. they should be covered with more tests.


![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/cpjli33loev5fh8z7jpi.gif)


**Step Three:** I realize that I want to contribute something to the world and moved default tags into a separated npm module and a separate GitHub repository. For sure, it's a small input, but nobody did it before.

GitHub link is here: [https://github.com/atherdon/markdown-regex](https://github.com/atherdon/markdown-regex)

and you can install it - `yarn add markdown-regex`

and I'm happy to see it on npm(while it's not indexed well, yet): [https://www.npmjs.com/package/markdown-regex](https://www.npmjs.com/package/markdown-regex)



![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/y3jrbnqer3ht13iw0qcw.png)

Oops, looks like I didn't move tests into a new repository 🙂 time to do the next release 🙂 




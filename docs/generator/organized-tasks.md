## Tasks related to repository `markdown-to-email`

### 1. PRs for the main repo Priority [Low]

- https://github.com/LLazyEmail/markdown-to-email/pull/1447

- https://github.com/LLazyEmail/markdown-to-email/pull/1444

- https://github.com/LLazyEmail/markdown-to-email/pull/1439

- https://github.com/LLazyEmail/markdown-to-email/pull/1437

- https://github.com/LLazyEmail/markdown-to-email/pull/1452


### 2. Main repo bug 

https://github.com/LLazyEmail/markdown-to-email/issues/1453


### 3. The task to check and probably close Priority [Low]

https://github.com/LLazyEmail/markdown-to-email/issues/1029
is it the same thing as https://github.com/LLazyEmail/markdown-to-email/issues/1125 ?

---

## Tasks related to repository `nomoretogo_email_template` Priority [Middle]


### 1. [Video about current state of nmtg template] Priority [High](https://github.com/LLazyEmail/nomoretogo_email_template/issues/237)


### 2. To review our current nmtg/typography package and receive your feedback

package name: `nmtg-template-mailerlite-typography`

Link: https://github.com/LLazyEmail/markdown-to-email/issues/1383

[link to code](https://github.com/LLazyEmail/nomoretogo_email_template/tree/main/sub-modules/typography/src/components)


![image](https://user-images.githubusercontent.com/1469198/183028007-3f041275-660d-4f6c-9447-565c4ec5a93a.png)





## different tasks

### 1. React Dom question about full template
I made a video, please take a look: https://github.com/LLazyEmail/react-plain-template-example/issues/48



### 2. question to think about - как назвать наши packages в организации?
https://github.com/LLazyEmail/_trying-lit/issues/133


---

### 3. To explore of what you want to have/see on our documentation website?

https://app.asana.com/0/1201360899207493/1202700551974378

> Мы со Светланой начали уже добавлять инфу на сайт документации. пока просто статьи добавляем, но я хочу организовать инфу чтобы было удобнее чтото обсуждать.
> 
> переношу туда список todo, переношу инфу по error-handle и improments.
> 
> скажи что бы ты хотел чтобы Светлана перенесла?







### [sub task] trying to parse custom markdown tags
https://github.com/LLazyEmail/markdown-to-email/issues/1384




# Сложные, "кастомные" блоки email темлпейта и сборные callbacks.


Пока мы не попробывали использовать mdx для наших темлпейтов, у нас будут возникать вопросы и проблемы с кастомными тегами для markdown.

**Проблема**: для каждого сложного блока прийдется:
1. "создавать свою" версию тега 
2. для этой версии писать кастомный regEx 
3. писать "сложный" callback, который будет обрабатывать параметры, которые regex "вырезает" из нашего контента.

В темлпейте для hackernoon у нас уже sponsorship, preview text, memes и т.д.

при этом, большинство кастомных блоков имеют внутри себя стандартные объекты из typography.
Например:
- sponsorship это image + link, heading + link внутри кастомного html блока.
- memes это image + link

**Предложение**: рассмотреть возможность создания сборных, вложенных реплейсеров.
Что я имею ввиду? 

Сделать какой то универсальный вариант, который внутрь [_sponshorship](https://github.com/LLazyEmail/markdown-to-email/blob/main/src/callbacks/html/methods/sponsor.js) бахнет _text, _link, _image, с их параметрами.


Я понимаю, что легче от этого не станет. Но мы сможем использовать эту логику в nmtg темплейте.

---


Как я пришел к этой проблеме?


в nmtg есть блок рецептов, посути это сборный блок в котором 4 переменные внутри:
- image
- link
- title
- subtitle


Я записал видео: https://github.com/LLazyEmail/nomoretogo_email_template/issues/192




https://github.com/LLazyEmail/awesome-email-marketing/blob/main/improvements.md



Миним идея посмотреть как работает markdown-it, но я думаю даже если начнем использовать его,  это просто будет промежуточный вариант и возможно нам нужно просто пропускать его и сразу идти в MDX. потому что вместе с mdx можно будет пойти в transition 
https://github.com/markdown-it/markdown-it#plugins-load


я придумал такой кастомный блок, который можно будет засунуть в source.md

```
:::
![Recipe One](https://raw.githubusercontent.com/LLazyEmail/nomoretogo_email_template/main/data/images/recipe1.jpeg)
[recipe](https://www.nomoretogo.com/weekly-meal-plan-menu-122214/)
## Grilled Salmon with Chipotle Cream Sauce
### over Potato Poblano Hash and Broccolini

:::
```

**REGEXP_IMAGE, REGEXP_LINK, REGEXP_H2, REGEXP_H3**


еще я бы ввел понятие section




https://user-images.githubusercontent.com/1469198/180642690-d6ca3af5-f9eb-4a55-a7c3-cc851c342a3a.mp4

```
_image
_link
_title
_subtitle
```

```
:::
![Recipe One](https://raw.githubusercontent.com/LLazyEmail/nomoretogo_email_template/main/data/images/recipe1.jpeg)
[recipe](https://www.nomoretogo.com/weekly-meal-plan-menu-122214/)
## Grilled Salmon with Chipotle Cream Sauce
### over Potato Poblano Hash and Broccolini

:::
```

**REGEXP_IMAGE, REGEXP_LINK, REGEXP_H2, REGEXP_H3**



### [complex callbacks](https://app.asana.com/0/1201360899207493/1202700806644230)
```
у меня есть вопрос/идея которую бы я хотел обсудить.
я записал видео в этом таске. 

Если кратко - я немного торможу окончание работу над nmtg/typography потому что мне лень просто добить этот модуль без каких то импрувментов.

и у меня есть вопрос насчет создание сложных кастомных элементов, которые мне непонятно как "правильно" сделать
```

Task with video: https://github.com/LLazyEmail/nomoretogo_email_template/issues/192

Sub-task: https://github.com/LLazyEmail/markdown-to-email/issues/1384




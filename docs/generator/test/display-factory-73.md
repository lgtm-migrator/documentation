---
id: display-factory
title: display-factory-73
sidebar_label: HN template, "ограничения" DisplayFactory
---

# [Sub task] updated Display Factory - HN template

trying-lit #1349

сейчас в trying-lit

контент передается статический. мне он нужен был чтобы провалидировать работу.

![1](https://user-images.githubusercontent.com/1469198/180264523-d1f36cec-66c5-41f8-8152-02da6905296b.png "1")

есть 2 варианта решения нашей проблемы

1. вместо этой функции мы просто передаем строку {content} и наш реплейсер это должен хавать.
т.е.

`let addon1 = {
  footer: FooterHTMLString,
  logoTop: logoTopComponent(),
  logoBottom: logoBottomComponent(),
  content: "{content}",
  // content: '[[THIS IS PLACE FOR A CONTENT INSIDE]',
  previewText: previewTextComponent('[AMA PREVIEW TEXT]'),
};`

сделает похожий темплейт как есть у нас сейчас.

2. вариант более сложный но правильный. нам нужно будет извне передать наш контент и собрать "display" у нас в генераторе. или например просто добавить функционала в trying_lit.
рано или поздно нам прийдется это сделать, чтобы извне пихать нужные нам переменные

Originally posted by @atherdon in [#1344 (comment)](https://github.com/LLazyEmail/markdown-to-email/issues/1344#issuecomment-1191695447)

[![Watch the video](https://user-images.githubusercontent.com/1469198/180372109-d0e10db9-0765-4d20-9b93-a2993776ff8a.png)](https://user-images.githubusercontent.com/1469198/180372109-d0e10db9-0765-4d20-9b93-a2993776ff8a.mp4)

LLazyEmail/nomoretogo_email_template#116

https://github.com/LLazyEmail/template-object

# "ограничения" DisplayFactory #116


"одним из плюсов factory design pattern в js является то что мы не создаем "новый instance" как обычно получается с классами. тоесть после создания объекта - мы не можем управлять данными. нельзя нормально сделать _get, _set и т.д.

возможно позже мы перепишем часть функционала на typescript и сможем использовать их типы данных, но сейчас есть как есть.

я изначально хотел бы добавить внутрь factory методы которые позволили бы менять settings & params.

из важных штук которые бы хотелось иметь:

1. массив с проверками на ошибки( checksArray ), чтобы немного централизовать их.
Например мы собираем темлпейт, при этом фейлим в футере и в хеаде. хочется чтобы при запуске сборки темлейта у нас выдавались ошибки из обоих displays и прерывалось создание темлпейта.

2. изменение сеттингов в уже готовом объекте

3. init(то что у нас сейчас делает `create`)

4. и лог метод чтобы каждый раз не писать console.log

что скажете.

я думал сделать это таким образом. создать отдельный класс в котором будут эти методы. а factory будет все собирать и возвращать уже объект со всеми settings которые мы передаем

я вынес все factory в https://github.com/LLazyEmail/template-object

пока только обсуждаем, возможно подключим Вадима и обсудим вместе next steps

sample: https://blog.sessionstack.com/how-javascript-works-the-factory-design-pattern-4-use-cases-7b9f0d22151d

Да, в этом таске кстати удобно было бы обсудить улучшения текущей версии этой Factory.
если что, я готов обсуждать"


**web4uartstudio**

Я вижу пока 2 варианта:

1. Общий factory а внутри разные class каждый под свой display
2. Попробовать реализовать универсальный class с итерациями и проверками

Какой вариант будем реализовывать ?


**Arthur Tkachenko**

Мы сейчас уже делаем display objects with factory design pattern.

А когда мы сделаем этот таск в нас будет factory + доп фишки, которые мне
нужны




**Arthur Tkachenko**



а в каждой рассылке будет свой title, subtitle, свое описание и другие рецепты.
поидее, когда вы начнете делать display для этого блока, вы должны столкнутся с тем, что у вас есть куча данных, которые нужно засунуть в `settings` и передать в `factory` - для того чтобы этот блок мог реально выводится

при этом, можно сделать вначале быстрый вариант. если у вас "контент" находится в одном файле/компоненты - мы можем сделать простой display для того, чтобы начать тестирование работы сборки целого теплейта.
но я сейчас пока еще не понял в каком состоянии унас находится - поэтому давайте вначале разберемся

я ж добавляю все ваши изменения. если какого то компонента нет - тут я скорее всего не виноват.
но т.к. в нашем репозитории есть история всех изменений - мы легко можем пройтись по ней и найти компонент который нам нужен


## [Linkedin page of LLazyEmail](https://www.linkedin.com/company/llazyemail/)

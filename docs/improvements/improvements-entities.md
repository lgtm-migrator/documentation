---
id: entitie
title: improvements-entities
sidebar_label: improvements
---

Наш проект занимается генерацией email-templates.
Код, который находится в нашем репозитории был отработан на 2х темлейтах, но сейчас мы пытаемся сделать так, чтобы в наш генератор лекго можно было подключать много темлпейтов. Хочется перестать застревать в includes и дебаге...
Поэтому нам нужна помощь.


Логика работы генератора простая - есть markdown файл с контентом и есть имейл темплейт в который наш генератор вставляет контент, оборачивая его в правильные блоки.

| Name   | About  | Title  | Labels  | Assignees  |
| :-----: | :-----: | :-----: | :-----: | :-----: |
|  |  | "" | "" | "" |

## Reason or Problem



## Proposal or Solution

A clear and concise description of what you want to happen.

### Design

UMLs or describe entities involved, their behaviors and relationships.

### Sample usage

Clear set of instructions

## Alternatives solutions

A clear and concise description of any alternative solutions or features you've considered.

## Stakeholders and Dependent software components

## Testing plan

## Acceptance scenarios

## Other Design tenets

### Performance

### Security

### Configuration

### Maintainability (extensibility points in the design)

### Logging

## Template

- отдельно мы передаем и init typography

- отдельно передаем модуль и вызываем "full template" из display factory


### Вызов методов типа FullTemplate

![carbon](https://user-images.githubusercontent.com/1469198/183511725-418a7b7a-34b0-4838-a1c3-705903cd94a8.png)

https://github.com/LLazyEmail/markdown-to-email/blob/fc31c66cc4dabd63e2a89f89dfb3f5af4b4dc8c1/src/domain/replace-class/pre-replace-object/index.js
![carbon (1)](https://user-images.githubusercontent.com/1469198/183511684-6432812f-7641-4089-8f92-b9b222ac3d62.png)


### Подключение подмодуля typography

![carbon (2)](https://user-images.githubusercontent.com/1469198/183511697-d1bb5be5-8262-46ce-bc0c-cec9aa09319b.png)

примеры методов, возвращающие обернутые в HTML блоки





![carbon (3)](https://user-images.githubusercontent.com/1469198/183511713-8032eda2-db0b-406d-abbb-200c4d5b2327.png)
Link: https://github.com/LLazyEmail/_trying-lit/blob/main/sub-modules/Typography/src/components/italic.js
![carbon (4)](https://user-images.githubusercontent.com/1469198/183511718-d1c66965-0903-46e1-acb6-f1426879398d.png)


---

- Темплейты могут быть разных типов.
- Нужна работа с ошибками. Чтобы их проще было ловить.

Нужно предусмотреть то, что части данных из этого класса мы будем вытаскивать для разных наших нужд.



Типы темплейта которые мы заметили(но их может быть больше/меньше)
- full (один темплейт подключается)
- content only 
- no ads


Типы теплейта - один должен быть обязательно. 
может быть несколько типов подключено, имена могут быть разные.



### Errors

```
Errors - сейчас неудобно, пока код не отлажен возникают проблемы, который можно ловить на уровне абстракции.
```


В одном месте сейчас у нас вытаскиваются методы, отвечающие за typography

```[example1 + link]```

```[example2 + link]```



Применить code, который в картинках и можно будет юзать в artcile.



В другом месте проекта мы юзаем `generateFullTemplate()`

это посути весь "внешний HTML", внутрь которого уже вставляется content





пример того, что генерируется в этом MainTemplate можно увидеть [тут]




### TypeScript

код хотим на typescript. сетап проекта можем сделать.

Это должно быть абстрактная штука, но легко дебажится.
может в typescript уже есть чтото такое.


дополнительная задача. Класс адаптер для темплейтов. Должен быть тоже отдельным, использовать Template obj котоырй мы тут сделаем и позволит подключать.
адаптер как отдельная штука. 

Вопросы:
- где мы будем хранить Class? в основном репозитории?
- как его подключать
- как дебажить? как мы проверим что код работает так как нам нужно? ts lint?


Возможно что уже ктото делал ранее похожий класс/интерфейс, это посмотреть в awesome-typescript

Например мы могли бы создать интерфейс, в котором при инициализации сразу работали необходимые нам методы. при инит нужно проходить проверку, в случае ошибки чтоб выводилась ошибка.



- https://github.com/sindresorhus/type-fest

- https://github.com/piotrwitek/utility-types


- Prevent easy human error (example using the key instead of the name)
- It's must be typo-resistant


Нужно уточнить, что со временем мы планируем перепиливать логику нашего генератора, но эти изменения не должны затронуть ваш класс, тоесть он должен быть "bulletproof" для таких изменеий.


---




Открыты к обсуждению, может мы предложите более удобный solution, который мы не пробывали.

Переделывать генератор мы планируем под nextjs + api calls и хотим менять логику реплейсера.



Список шагов:
- [ ] Сделать детальное описание, которое будет читаться легко.
- [ ] выходить на ФХ
- [ ] нужен красивый description
- [ ] самим нужно посмотреть на классы TS и сделать выбор, деву ненадо об этом думать.






<!-- 
![carbon (1)](https://user-images.githubusercontent.com/1469198/183511684-6432812f-7641-4089-8f92-b9b222ac3d62.png) -->
<!-- ![carbon (2)](https://user-images.githubusercontent.com/1469198/183511697-d1bb5be5-8262-46ce-bc0c-cec9aa09319b.png)
![carbon (3)](https://user-images.githubusercontent.com/1469198/183511713-8032eda2-db0b-406d-abbb-200c4d5b2327.png)
![carbon (4)](https://user-images.githubusercontent.com/1469198/183511718-d1c66965-0903-46e1-acb6-f1426879398d.png) -->
<!-- ![carbon](https://user-images.githubusercontent.com/1469198/183511725-418a7b7a-34b0-4838-a1c3-705903cd94a8.png) -->



Т.к у нас был негативный опыт работы с девами на этом проекте(проект даже не был запущен, а код отправлен как выполенный) - я буду играть bad guy. 
Задание описанно хорошо, если будут вопросы - задавайте их до начала работы. Код нужно будет submit на GitHub.
Если он работать не будет - мы просто отклоняем pull request и ставим работу как не выполненной.
Поэтому спокойно добавляйте надбавку "за вредность".


Состояния

### single template obj created
- typography connected without errors
- main display method connected
0 errors, "ready to work"

При запуске typography replacers могут генерировать ошибки.

предусмотреть типы работы prod & debug - в debug хочется детальный trace еслии чтото ломается.


### 
после этого мы добавляем content внутрь основного метода. Render можно его называть.


обычно ошибок там нет, но лучше перестраховаться.



Критерии проверки:

код должен быть читаем и легко понятен.
Собран из мелких, простых блоков/типов.

- Доступ к typography
- access to displaymain? render

легко видеть, если мы гдето ошибаемся.


централизованный space для массива ошибок и метод по выводу их в цикле.


ошибки когда передаем неправильный тип переменной.


возможно предусмотреть возможности для конфига???


TS

```
// Interface (abstraction)
interface Box {
  length: number;
  width: number;
}

const boxOne: Box = { length: 1, width: 2 }; // ✅ Valid! Has all props
const boxTwo: Box = { length: 1 };           // ❌ Not valid, missing prop
// Interface (abstraction)
interface Box {
  length: number;
  width: number;
}

// Concrete class implementing Box abstraction
class MobileBox implements Box { // ✅ Valid! Implements all necessary props
  public length: number;  
  public width: number;

  constructor (length: number, width: number) {
    this.length = length;
    this.width = width;
  }
}

let boxThree = new MobileBox(1, 2); 
```


```
export class CustomTypeError extends Error {
    constructor(type: string, value: any) {
        super(`invalid value ${JSON.stringify(value)} provided for type ${type}`);
    }
}
```

https://betterprogramming.pub/clean-node-js-architecture-with-nestjs-and-typescript-34b9398d790f


https://khalilstemmler.com/blogs/typescript/abstract-class/

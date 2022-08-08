
Наш проект занимается генерацией email-templates.
Код, который находится в нашем репозитории был отработан на 2х темлейтах, но сейчас мы пытаемся сделать так, чтобы в наш генератор можно было подключать много темлпейтов легко. Хочется перестать застревать в includes и дебаге...
Поэтому нам нужна помощь.


## Template

- отдельно мы передаем и init typography

- отдельно передаем модуль и "full template" из display factory


### Вызов методов типа FullTemplate

![carbon](https://user-images.githubusercontent.com/1469198/183511725-418a7b7a-34b0-4838-a1c3-705903cd94a8.png)


![carbon (1)](https://user-images.githubusercontent.com/1469198/183511684-6432812f-7641-4089-8f92-b9b222ac3d62.png)


### Подключение подмодуля typography

![carbon (2)](https://user-images.githubusercontent.com/1469198/183511697-d1bb5be5-8262-46ce-bc0c-cec9aa09319b.png)
![carbon (3)](https://user-images.githubusercontent.com/1469198/183511713-8032eda2-db0b-406d-abbb-200c4d5b2327.png)
![carbon (4)](https://user-images.githubusercontent.com/1469198/183511718-d1c66965-0903-46e1-acb6-f1426879398d.png)


---

- Темплейты могут быть разных типов.
- Нужна работа с ошибками. Чтобы их проще было ловить.

Нужно предусмотреть то, что части данных из этого класса мы будем вытаскивать для разных наших нужд.

Сделать детальное описание, которое будет читаться легко.

Типы темплейта которые мы заметили(но их может быть больше/меньше)
- full (один темплейт подключается)
- content only 
- no ads

показать как сейчас все работает.

Это должно быть абстрактная штука, но легко дебажится.
может в typescript уже есть чтото такое.

адаптер как отдельная штука. где мы будем хранить Class? в основном репозитории?



В одном месте сейчас у нас вытаскиваются методы, отвечающие за typography

<example1 + link>

<example2 + link>

Применить code, который в картинках и можно будет юзать в artcile.

В другом месте проекта мы юзаем generateFullTemplate()

это посути весь "внешний HTML", внутрь которого уже вставляется content

пример того, что генерируется в этом MainTemplate можно увидеть тут.


Нужно уточнить, что со временем мы планируем перепиливать логику нашего генератора, но эти изменения не должны затронуть ваш класс, тоесть он должен быть "bulletproof" для таких изменеий.

Открыты к обсуждению, может мы предложите более удобный solution, который мы не пробывали.

Переделывать генератор мы планируем под nextjs + api calls и хотим менять логику реплейсера.


код хотим на typescript. сетап проекта можем сделать.

Возможно что уже ктото делал ранее похожий класс/интерфейс, это посмотреть в awesome-typescript


Список шагов:
- выходить на ФХ
- нужен красивый description
- самим нужно посмотреть на классы TS и сделать выбор, деву ненадо об этом думать.


img - typography


img - main method


img - single typography method


Errors - сейчас неудобно, пока код не отлажен возникают проблемы, который можно ловить на уровне абстракции.


- https://github.com/sindresorhus/type-fest

- https://github.com/piotrwitek/utility-types


<!-- 
![carbon (1)](https://user-images.githubusercontent.com/1469198/183511684-6432812f-7641-4089-8f92-b9b222ac3d62.png) -->
![carbon (2)](https://user-images.githubusercontent.com/1469198/183511697-d1bb5be5-8262-46ce-bc0c-cec9aa09319b.png)
![carbon (3)](https://user-images.githubusercontent.com/1469198/183511713-8032eda2-db0b-406d-abbb-200c4d5b2327.png)
![carbon (4)](https://user-images.githubusercontent.com/1469198/183511718-d1c66965-0903-46e1-acb6-f1426879398d.png)
<!-- ![carbon](https://user-images.githubusercontent.com/1469198/183511725-418a7b7a-34b0-4838-a1c3-705903cd94a8.png) -->


https://github.com/LLazyEmail/markdown-to-email/blob/fc31c66cc4dabd63e2a89f89dfb3f5af4b4dc8c1/src/domain/replace-class/pre-replace-object/index.js

https://github.com/LLazyEmail/_trying-lit/blob/main/sub-modules/Typography/src/components/italic.js

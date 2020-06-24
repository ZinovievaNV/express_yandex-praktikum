# ***Mesto*** на Express.js

### *v0.0.3*

*Проект выполненный в рамках обучения по темам: "Разработка на Node.js", "Введение в Express"*.

#### Было реализовано:

- В ответ на запрос GET localhost:3000/users сервер возвращает всех пользователей из файла **user.json**.

- в ответ на запрос GET localhost:3000/cards сервер возвращает все карточки из файла **cards.json**.

- в ответ на запрос GET localhost:3000/users/:id, сервер возвращает конкретного пользователя (по id), если пользователя с запрошенным идентификатором нет, API вернет **404** статус ответа и ошибку.  

- При запросе на несуществующий адрес, API возвращать **404** статус ответа и JSON: { "message": "Запрашиваемый ресурс не найден" }.

##### Для запуска на сервере (localhost:3000) необходимо использовать команду "npm run start".Команда "npm run dev" запустит сервер с хот релоудом.

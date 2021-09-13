# Тестовое задание для crt.team

<details>
<summary>Задача</summary>
Данное задание рассчитано на применение фреймворка - react / vue / angular

Задание рассчитано примерно на 4 часа.

Задача:

Сверстать страницу с карточками квартир, визуальная часть по желанию. На карточку квартиры добавить значок Like. С возможностью отметить понравившуюся квартиру.

Верстка должна быть адаптивной. Данные корректно отображаться на всех разрешениях и устройствах.

Получение данных для отображения реализовать при помощи имитации получения данных по API.

Условно считается что получаемые данные имеют формат entities.json
</details>

## Краткое описание

В `/server` лежит Express.js application, который создает тестовые данные для фронтенда. Данные всегда разные, но одинаковые по структуре. Также сервер часто выдает ошибки. Это тоже реализовано специально для того, чтобы можно было потестировать различные состояния UI. Подробные комментарии внутри.

В `/client` лежит Vue.js 2 application, который получает и рендерит данные с тестового сервера. Комментарии внутри тоже, насколько возможно и уместно, подробные.

## Запустить в dev версии

Чтобы запустить и посмотреть нужно в каждой из папок установить пакеты и запустить в дев-режиме.

Например, вот так:

```
cd client
npm i
npm run serve
cd ../server
npm i 
npm run dev
```
---
sidebar_label: Как начать
title: Как начать
description: Ознакомьтесь с тем, как начать работу с DHTMLX RichText в документации по JavaScript-библиотеке DHTMLX RichText. Изучайте руководства для разработчиков и справочник по API, пробуйте примеры кода и живые демо, а также скачайте бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# Как начать

Здесь приведена простая инструкция по запуску RichText на странице.

import classic_mode from '@site/static/img/richtext/classic_mode.png';

<img
  src={classic_mode}
  alt="Classic mode"
  className="img_border"
/>

## Шаг 1. Подключение исходных файлов

Сначала создайте HTML-файл с именем *index.html*. Добавьте в этот файл исходные файлы RichText.

Вам понадобятся два файла:

- JS-файл RichText
- CSS-файл RichText

~~~html {5-6} title="index.html"
<!DOCTYPE html>
<html>
    <head>
        <title>How to Start with RichText</title>
        <script src="./codebase/richtext.js"></script>   
        <link href="./codebase/richtext.css" rel="stylesheet">
    </head>
    <body>
        <script>
        // ваш код будет здесь
        </script>
    </body>
</html>
~~~

### Установка RichText через npm или yarn

RichText можно добавить в ваш проект с помощью **yarn** или **npm**.

#### Установка пробной версии RichText через npm или yarn

:::info
Чтобы использовать пробную версию RichText, скачайте [**trial RichText package**](https://dhtmlx.com/docs/products/dhtmlxRichtext/download.shtml) и следуйте инструкциям в файле *README*. Обратите внимание, что пробная версия работает 30 дней.
:::

#### Установка PRO RichText через npm или yarn

:::info
Чтобы получить PRO-версию, перейдите в [Client's Area](https://dhtmlx.com/clients/) и сгенерируйте логин и пароль для приватного **npm** DHTMLX. Там же вы найдете подробное руководство по установке. Доступ к приватному **npm** предоставляется, пока действует ваша лицензия на RichText.
:::

## Шаг 2. Создание RichText

Теперь добавим RichText на страницу. Начните с создания контейнера `<div>` для RichText. Выполните следующие действия:

- Добавьте контейнер DIV в файл *index.html*
- Инициализируйте RichText с помощью конструктора `richtext.Richtext`

Конструктор принимает любой валидный CSS-селектор для HTML-контейнера, где будет отображаться RichText, а также любые необходимые объекты конфигурации.

~~~html {9,12-14} title="index.html"
<!DOCTYPE html>
<html>
    <head>
        <title>How to Start with RichText</title>
        <script src="./codebase/richtext.js"></script>   
        <link href="./codebase/richtext.css" rel="stylesheet">  
    </head>
    <body>
        <div id="root"></div>

        <script>
            const editor = new richtext.Richtext("#root", {
                // свойства конфигурации
            });
        </script>
    </body>
</html>
~~~

## Шаг 3. Настройка RichText

Теперь вы можете задать параметры конфигурации, которые будут использоваться RichText при запуске.

Для начала задайте исходные данные для редактора через свойство [`value`](api/config/value.md). Также можно включить [**menubar**](api/config/menubar.md), изменить [**toolbar**](api/config/toolbar.md), установить режимы [**fullscreen**](api/config/fullscreen-mode.md) и [**layout**](api/config/layout-mode.md), выбрать нужную [**locale**](api/config/locale.md) и применить [**default styles**](api/config/default-styles.md).

~~~jsx {2-12}
const editor = new richtext.Richtext("#root", {
    menubar: true,
    toolbar: false,
    fullscreenMode: true,
    layoutMode: "document",
    locale: richtext.locales.cn
    defaultStyles: {
        h4: {
            "font-family": "Roboto"
        },
        // другие настройки
    }
});
~~~

## Что дальше

Готово! После этих трех шагов RichText готов к редактированию контента. Вы можете сразу приступить к работе или изучить дополнительные возможности JavaScript RichText.

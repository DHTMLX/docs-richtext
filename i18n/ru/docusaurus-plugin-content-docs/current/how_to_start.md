---
sidebar_label: Начало работы
title: Начало работы
description: Узнайте, как начать работу с DHTMLX RichText — из документации библиотеки DHTMLX JavaScript RichText. Изучайте руководства разработчика и справочник АПИ, запускайте примеры кода и живые демо, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# Начало работы

Это понятное и подробное руководство проведёт вас через все шаги, необходимые для того, чтобы разместить полнофункциональный RichText на странице.

<div className="img_border">
![DHTMLX RichText Classic Mode](./assets/richtext/classic_mode.png)
</div>

## Шаг 1. Подключение исходных файлов

Начните с создания HTML-файла и назовите его *index.html*. Затем подключите в него исходные файлы RichText.

Необходимы два файла:

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

### Установка RichText через npm или yarn {#installing-richtext-via-npm-or-yarn}

Вы можете импортировать JavaScript RichText в свой проект с помощью менеджера пакетов **yarn** или **npm**.

#### Установка пробной версии RichText через npm или yarn

:::info
Если вы хотите использовать пробную версию RichText, скачайте [**пакет пробной версии RichText**](https://dhtmlx.com/docs/products/dhtmlxRichtext/download.shtml) и следуйте инструкциям из файла *README*. Обратите внимание, что пробная версия RichText доступна только 30 дней.
:::

#### Установка PRO-версии RichText через npm или yarn

:::info
Вы можете получить доступ к приватному **npm**-репозиторию DHTMLX напрямую в [Личном кабинете](https://dhtmlx.com/clients/), сгенерировав логин и пароль для **npm**. Подробное руководство по установке также доступно там. Обратите внимание, что доступ к приватному **npm** предоставляется только при наличии активной лицензии на RichText.
:::

## Шаг 2. Создание RichText

Теперь можно добавить RichText на страницу. Сначала создайте контейнер `<div>` для RichText. Для этого:

- укажите DIV-контейнер в файле *index.html*
- инициализируйте RichText с помощью конструктора `richtext.Richtext`

В качестве параметров конструктор принимает любой допустимый CSS-селектор HTML-контейнера, в который будет помещён RichText, а также соответствующие объекты конфигурации.

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

Далее вы можете задать свойства конфигурации, с которыми компонент RichText будет инициализирован.

Для начала работы с RichText необходимо передать начальные данные в редактор через свойство [`value`](api/config/value.md). Помимо этого, вы можете включить [**menubar**](api/config/menubar.md), настроить [**toolbar**](api/config/toolbar.md), задать режимы [**fullscreen**](api/config/fullscreen-mode.md) и [**layout**](api/config/layout-mode.md), применить новую [**локаль**](api/config/locale.md), а также [**стили по умолчанию**](api/config/default-styles.md).

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

Вот и всё. Всего три простых шага — и у вас есть удобный инструмент для редактирования контента. Теперь вы можете приступить к работе со своим контентом или продолжить изучение возможностей JavaScript RichText.

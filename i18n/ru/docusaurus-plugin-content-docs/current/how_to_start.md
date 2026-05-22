---
sidebar_label: Начало работы
title: Начало работы
description: В документации библиотеки DHTMLX JavaScript RichText вы найдёте всё необходимое для начала работы с DHTMLX RichText. Изучайте руководства разработчика и справочник АПИ, пробуйте примеры кода и живые демо, а также скачайте бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# Начало работы

Это понятное и подробное руководство проведёт вас через все шаги, необходимые для добавления полнофункционального RichText на страницу.

<div className="img_border">
![DHTMLX RichText Classic Mode](./assets/richtext/classic_mode.png)
</div>

## Шаг 1. Подключение исходных файлов

Начните с создания HTML-файла и назовите его *index.html*. Затем подключите исходные файлы RichText к созданному файлу.

Необходимо подключить два файла:

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
        // your code will be here
        </script>
    </body>
</html>
~~~

### Установка RichText через npm или yarn

Вы можете импортировать JavaScript RichText в свой проект с помощью пакетного менеджера **yarn** или **npm**.

#### Установка ознакомительной версии RichText через npm или yarn

:::info[Информация]
Если вы хотите использовать ознакомительную версию RichText, скачайте [**пакет ознакомительной версии RichText**](https://dhtmlx.com/docs/products/dhtmlxRichtext/download.shtml) и следуйте инструкциям в файле *README*. Обратите внимание, что ознакомительная версия RichText доступна только в течение 30 дней.
:::

#### Установка PRO-версии RichText через npm или yarn

:::info[Информация]
Вы можете получить доступ к приватному **npm** DHTMLX непосредственно в [Личном кабинете](https://dhtmlx.com/clients/), сгенерировав логин и пароль для **npm**. Там же доступно подробное руководство по установке. Обратите внимание, что доступ к приватному **npm** предоставляется только при наличии активной лицензии на RichText.
:::

## Шаг 2. Создание RichText

Теперь вы готовы добавить RichText на страницу. Сначала создайте контейнер `<div>` для RichText. Для этого выполните следующие действия:

- укажите DIV-контейнер в файле *index.html*
- инициализируйте RichText с помощью конструктора `richtext.Richtext`

В качестве параметров конструктор принимает любой валидный CSS-селектор HTML-контейнера, в который будет помещён RichText, а также соответствующие объекты конфигурации.

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
                // configuration properties
            });
        </script>
    </body>
</html>
~~~

## Шаг 3. Настройка RichText

Далее вы можете задать свойства конфигурации, которые будут применены к компоненту RichText при инициализации.

Для начала работы с RichText необходимо передать начальные данные в редактор через свойство [`value`](api/config/value.md). Кроме этого, вы можете включить [**menubar**](api/config/menubar.md), настроить [**toolbar**](api/config/toolbar.md), задать режимы [**fullscreen**](api/config/fullscreen-mode.md) и [**layout**](api/config/layout-mode.md), применить новую [**локаль**](api/config/locale.md), а также [**стили по умолчанию**](api/config/default-styles.md).

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
        // other settings
    }
});
~~~

## Что дальше

Вот и всё. Всего три простых шага — и у вас есть удобный инструмент для редактирования контента. Теперь вы можете приступить к работе с содержимым или продолжить изучение возможностей JavaScript RichText.

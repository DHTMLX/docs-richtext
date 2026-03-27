---
sidebar_label: Начало работы
title: Начало работы
description: В документации библиотеки DHTMLX JavaScript RichText вы найдёте руководство по началу работы с DHTMLX RichText. Изучайте руководства разработчика и справочник API, пробуйте примеры кода и живые демо, скачайте бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# Начало работы

Это понятное и подробное руководство проведёт вас через все шаги, необходимые для размещения полнофункционального RichText на странице.

<div className="img_border">
![DHTMLX RichText в классическом режиме](./assets/richtext/classic_mode.png)
</div>

## Шаг 1. Подключение файлов {#step-1-including-source-files}

Начните с создания HTML-файла с именем *index.html*, затем подключите в него исходные файлы RichText.

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
        // your code will be here
        </script>
    </body>
</html>
~~~

### Установка RichText через npm или yarn {#installing-richtext-via-npm-or-yarn}

Вы можете импортировать JavaScript RichText в свой проект с помощью менеджера пакетов **yarn** или **npm**.

#### Установка ознакомительной версии RichText через npm или yarn {#installing-trial-richtext-via-npm-or-yarn}

:::info[Информация]
Если вы хотите использовать ознакомительную версию RichText, скачайте [**пакет ознакомительной версии RichText**](https://dhtmlx.com/docs/products/dhtmlxRichtext/download.shtml) и следуйте инструкциям из файла *README*. Обратите внимание, что ознакомительная версия RichText доступна только 30 дней.
:::

#### Установка PRO-версии RichText через npm или yarn {#installing-pro-richtext-via-npm-or-yarn}

:::info[Информация]
Вы можете получить доступ к приватному **npm** DHTMLX непосредственно в [Личном кабинете](https://dhtmlx.com/clients/), сгенерировав логин и пароль для **npm**. Там же доступна подробная инструкция по установке. Обратите внимание, что доступ к приватному **npm** предоставляется только при наличии действующей лицензии на RichText.
:::

## Шаг 2. Создание RichText {#step-2-creating-richtext}

Теперь можно добавить RichText на страницу. Сначала создайте контейнер `<div>` для RichText, выполнив следующие шаги:

- укажите DIV-контейнер в файле *index.html*
- инициализируйте RichText с помощью конструктора `richtext.Richtext`

Конструктор принимает в качестве параметров любой валидный CSS-селектор HTML-контейнера, в который будет помещён RichText, а также соответствующие объекты конфигурации.

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

## Шаг 3. Настройка RichText {#step-3-configuring-richtext}

Далее можно задать свойства конфигурации, которые компонент RichText должен иметь при инициализации.

Чтобы начать работу с RichText, сначала необходимо передать начальные данные для редактора через свойство [`value`](api/config/value.md). Помимо этого, вы можете включить [**menubar**](api/config/menubar.md), настроить [**toolbar**](api/config/toolbar.md), задать режимы [**fullscreen**](api/config/fullscreen-mode.md) и [**layout**](api/config/layout-mode.md), применить новую [**локаль**](api/config/locale.md), а также [**стили по умолчанию**](api/config/default-styles.md).

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

## Что дальше {#whats-next}

Вот и всё. Всего три простых шага — и у вас есть удобный инструмент для редактирования содержимого. Теперь вы можете приступить к работе с контентом или продолжить изучение возможностей JavaScript RichText.

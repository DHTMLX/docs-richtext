---
sidebar_label: Инициализация
title: Инициализация
description: В документации библиотеки DHTMLX JavaScript RichText вы можете узнать об инициализации компонента. Изучайте руководства разработчика и справочник API, просматривайте примеры кода и живые демо, а также скачайте бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# Инициализация

В этом руководстве подробно описано, как разместить RichText на странице и добавить редактор в ваше приложение. Выполните следующие шаги, чтобы получить готовый к работе компонент:

1. [Подключите файлы RichText на страницу](#including-source-files).
2. [Создайте контейнер для RichText](#creating-container).
3. [Инициализируйте RichText с помощью конструктора объекта](#initializing-richtext).

## Подключение файлов {#including-source-files}

[Скачайте пакет](https://dhtmlx.com/docs/products/dhtmlxRichText/download.shtml) и распакуйте его в папку вашего проекта.

Для создания RichText необходимо подключить на страницу 2 файла:

- *richtext.js*
- *richtext.css*

Убедитесь, что указаны правильные относительные пути к файлам:

~~~html title="index.html"
<script type="text/javascript" src="./codebase/richtext.js"></script>
<link rel="stylesheet" href="./codebase/richtext.css">
~~~

## Создание контейнера {#creating-container}

Добавьте контейнер для RichText и задайте ему идентификатор, например *"root"*:

~~~jsx title="index.html"
<div id="root"></div>
~~~

## Инициализация RichText {#initializing-richtext}

Инициализируйте RichText с помощью конструктора `richtext.Richtext`. Конструктор принимает два параметра:

- HTML-контейнер (идентификатор HTML-контейнера)
- объект со свойствами конфигурации. [Полный список свойств приведён ниже](#configuration-properties)

~~~jsx title="index.html"
// создание RichText
const editor = new richtext.Richtext("#root", {
    // свойства конфигурации
});
~~~

### Свойства конфигурации {#configuration-properties}

:::note[Примечание]
Полный список свойств для настройки **RichText** можно найти [**здесь**](api/overview/properties_overview.md).
:::

## Пример {#example}

В этом примере показано, как инициализировать **RichText** с начальными данными:

<iframe src="https://snippet.dhtmlx.com/tjryzka7?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>

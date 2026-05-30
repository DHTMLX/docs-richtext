---
sidebar_label: Инициализация
title: Инициализация
description: В документации библиотеки DHTMLX JavaScript RichText вы можете узнать об инициализации редактора. Изучайте руководства разработчика и справочник АПИ, просматривайте примеры кода и живые демо, а также скачайте бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# Инициализация

В этом руководстве описано, как добавить RichText на страницу. Выполните следующие шаги, чтобы получить готовый к работе редактор:

1. [Подключите исходные файлы на страницу](#include-the-source-files).
2. [Создайте контейнер для RichText](#create-a-container).
3. [Инициализируйте RichText](#initialize-richtext).

## Подключение исходных файлов {#include-the-source-files}

Добавьте JavaScript и CSS файлы RichText в ваш проект. [Скачайте пакет](https://dhtmlx.com/docs/products/dhtmlxRichText/download.shtml) и распакуйте его содержимое в папку проекта.

Для создания RichText подключите два исходных файла на страницу:

- *richtext.js*
- *richtext.css*

Укажите ссылки на файлы в HTML. Скорректируйте относительные пути в соответствии со структурой вашей папки:

~~~html title="index.html"
<script type="text/javascript" src="./codebase/richtext.js"></script>  
<link rel="stylesheet" href="./codebase/richtext.css">
~~~

## Создание контейнера {#create-a-container}

Добавьте контейнер для RichText с идентификатором, например *"root"*:

~~~jsx title="index.html"
<div id="root"></div>
~~~

## Инициализация RichText {#initialize-richtext}

Инициализируйте RichText с помощью конструктора `richtext.Richtext`. Конструктор принимает два параметра:

- контейнер — CSS-селектор или DOM-элемент
- объект конфигурации со свойствами редактора. Смотрите [полный список свойств](#configuration-properties) ниже

Пример ниже инициализирует RichText в контейнере `#root`:

~~~jsx title="index.html"
const editor = new richtext.Richtext("#root", {
    // configuration properties  
});
~~~

### Свойства конфигурации {#configuration-properties}

Добавляйте параметры конфигурации в качестве ключей объекта конфигурации.

:::note
Полный список свойств конфигурации смотрите в разделе [Обзор свойств](api/overview/properties_overview.md).
:::

## Уничтожение экземпляра RichText

Вызовите метод [`destructor()`](api/methods/destructor.md), чтобы удалить HTML-разметку RichText и отвязать все связанные события:

~~~jsx
const editor = new richtext.Richtext("#root", {
    // configuration properties
});

editor.destructor();
~~~

## Пример

В примере ниже RichText инициализируется с включённой строкой меню:

<iframe src="https://snippet.dhtmlx.com/tjryzka7?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>

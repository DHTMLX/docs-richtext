---
sidebar_label: Инициализация
title: Инициализация
description: В документации библиотеки DHTMLX JavaScript RichText вы можете узнать об инициализации. Изучайте руководства разработчика и справочник АПИ, пробуйте примеры кода и живые демо, а также скачайте бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# Инициализация

В этом руководстве описывается, как добавить RichText на страницу. Выполните следующие шаги, чтобы получить готовый к работе редактор:

1. [Подключите исходные файлы на странице](#include-the-source-files).
2. [Создайте контейнер для RichText](#create-a-container).
3. [Инициализируйте RichText](#initialize-richtext).

## Подключение исходных файлов

Добавьте JavaScript и CSS файлы RichText в свой проект. [Скачайте пакет](https://dhtmlx.com/docs/products/dhtmlxRichText/download.shtml) и распакуйте содержимое в папку вашего проекта.

Для создания RichText подключите на страницу два исходных файла:

- *richtext.js*
- *richtext.css*

Укажите ссылки на файлы в HTML. Скорректируйте относительные пути в соответствии со структурой вашей папки:

~~~html title="index.html"
<script type="text/javascript" src="./codebase/richtext.js"></script>  
<link rel="stylesheet" href="./codebase/richtext.css">
~~~

## Создание контейнера

Добавьте контейнер для RichText с идентификатором, например *"root"*:

~~~jsx title="index.html"
<div id="root"></div>
~~~

## Инициализация RichText

Инициализируйте RichText с помощью конструктора `richtext.Richtext`. Конструктор принимает два параметра:

- контейнер — CSS-селектор или DOM-элемент
- объект конфигурации со свойствами редактора. Смотрите [полный список свойств](#configuration-properties) ниже

Пример ниже инициализирует RichText в контейнере `#root`:

~~~jsx title="index.html"
const editor = new richtext.Richtext("#root", {
    // configuration properties  
});
~~~

### Свойства конфигурации

Добавляйте параметры конфигурации в виде ключей объекта конфигурации.

:::note[Примечание]
Полный список свойств конфигурации смотрите в разделе [Обзор свойств](api/overview/properties_overview.md).
:::

## Уничтожение экземпляра RichText

Вызовите метод [`destructor()`](api/methods/destructor.md), чтобы удалить HTML RichText и отсоединить все связанные события:

~~~jsx
const editor = new richtext.Richtext("#root", {
    // configuration properties
});

editor.destructor();
~~~

## Пример

Пример ниже инициализирует RichText с включённой панелью меню:

<iframe src="https://snippet.dhtmlx.com/tjryzka7?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>

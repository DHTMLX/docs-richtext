---
sidebar_label: Обзор RichText
title: Обзор RichText
slug: /
description: В документации вы найдете обзор JavaScript-библиотеки DHTMLX RichText. Ознакомьтесь с руководствами для разработчиков и справочником по API, попробуйте примеры кода и живые демо, а также скачайте бесплатную 30-дневную версию DHTMLX RichText.
---

# Обзор RichText

**DHTMLX RichText** - это легковесный и гибкий WYSIWYG-редактор, созданный на JavaScript. Он разработан для удобного редактирования в современных веб-приложениях, имеет простой интерфейс, широкий набор инструментов форматирования и полный контроль над отображением контента. Будь то CMS, админ-панель или встроенный редактор документов, RichText легко интегрируется и настраивается под различные проекты.

**DHTMLX RichText** предлагает следующие возможности:

- Два [**режима отображения**](api/config/layout-mode.md)

- Сохранение контента как в виде обычного текста, так и в формате HTML

- [**Тулбар**](api/config/toolbar.md), который можно настраивать с помощью встроенных и пользовательских кнопок

- [**Меню**](api/config/menubar.md), которое статично и может быть показано или скрыто

- Поддержка загрузки изображений, расширенного форматирования, пользовательских стилей и полноэкранного режима

- [Полный доступ к API](api/overview/main_overview.md) для [обработки событий](api/overview/event_bus_methods_overview.md), [отслеживания изменений контента](api/overview/methods_overview.md) и [реактивного управления состоянием](api/overview/state_methods_overview.md)

RichText работает с любым фреймворком и может использоваться с [React](guides/integration_with_react.md), [Angular](guides/integration_with_angular.md), [Vue](guides/integration_with_vue.md) или [Svelte](guides/integration_with_svelte.md), поэтому он подходит для любых фронтенд-решений.

В этой документации описаны установка, настройка, использование и способы доработки. Приведены примеры для типовых задач, [полная документация по API](api/overview/main_overview.md) и рекомендации по интеграции RichText в различные приложения.

## Структура RichText

### Меню

Меню RichText обеспечивает быстрый доступ к действиям редактирования, таким как создание нового документа, печать, импорт или экспорт и другие. По умолчанию оно скрыто.

Свойство [`menubar`](api/config/menubar.md) определяет, будет ли меню отображаться. Вы можете включить или отключить меню, однако на данный момент его элементы изменить нельзя.

import menubar from '@site/static/img/richtext/menubar.png';

<img
  src={menubar}
  alt="Menubar"
  className="img_border"
/>

### Тулбар

Тулбар RichText позволяет быстро форматировать текст и управлять структурой документа. По умолчанию [тулбар](api/config/toolbar.md#конфигурация-по-умолчанию) включен и содержит набор стандартных инструментов - жирный, курсив, настройки шрифта, списки и другие.

Свойство [`toolbar`](api/config/toolbar.md) позволяет изменять состав и порядок элементов тулбара. Вы можете включить или отключить тулбар, изменить расположение стандартных кнопок или создать собственную конфигурацию с помощью встроенных и пользовательских кнопок.

import toolbar from '@site/static/img/richtext/toolbar.png';

<img
  src={toolbar}
  alt="Toolbar"
  className="img_border"
/>

### Редактор

Основная часть RichText - это редактор, где создается и форматируется весь контент. Внешний вид и поведение редактора можно настраивать с помощью опций [`value`](api/config/value.md), [`layoutMode`](api/config/layout-mode.md) и [`defaultStyles`](api/config/default-styles.md). RichText поддерживает пользовательские стили, вставку изображений и адаптивное отображение под различные экраны и задачи.

#### Два режима работы

DHTMLX RichText поддерживает два способа отображения контента: режимы "classic" и "document". Выберите тот, который удобнее для вашего стиля редактирования. Переключение между ними происходит через свойство [`layoutMode`](api/config/layout-mode.md).

- **"classic"**

import classic_mode from '@site/static/img/richtext/classic_mode.png';

<img
  src={classic_mode}
  alt="Classic mode"
  className="img_border"
/>

- **"document"**

import document_mode from '@site/static/img/richtext/document_mode.png';

<img
  src={document_mode}
  alt="Document mode"
  className="img_border"
/>

## Поддерживаемые форматы

RichText может [читать](api/methods/set-value.md) и [сохранять](api/methods/get-value.md) контент как в формате **HTML**, так и в виде обычного текста.

#### Формат HTML

import html_format from '@site/static/img/richtext/html_format.png';

<img
  src={html_format}
  alt="HTML format"
  className="img_border"
/>

#### Текстовый формат

import text_format from '@site/static/img/richtext/text_format.png';

<img
  src={text_format}
  alt="Text format"
  className="img_border"
/>

## Горячие клавиши

RichText поддерживает множество стандартных горячих клавиш для ускорения редактирования и форматирования. Комбинации соответствуют привычным для каждой платформы и работают как на **Windows/Linux** (`Ctrl`), так и на **macOS** (`⌘`).

### Форматирование текста

| Действие         | Windows/Linux   | macOS         |
|------------------|-----------------|---------------|
| Жирный*          | `Ctrl+B`        | `⌘B`          |
| Курсив           | `Ctrl+I`        | `⌘I`          |
| Подчеркнутый     | `Ctrl+U`        | `⌘U`          |
| Зачеркнутый      | `Ctrl+Shift+X`  | `⌘⇧X`         |

### Редактирование

| Действие   | Windows/Linux            | macOS         |
|------------|--------------------------|---------------|
| Отменить   | `Ctrl+Z`                 | `⌘Z`          |
| Повторить  | `Ctrl+Y` / `Ctrl+Shift+Z`| `⌘Y` / `⌘⇧Z`  |
| Вырезать   | `Ctrl+X`                 | `⌘X`          |
| Копировать | `Ctrl+C`                 | `⌘C`          |
| Вставить   | `Ctrl+V`                 | `⌘V`          |

### Специальные действия

| Действие      | Windows/Linux | macOS |
|---------------|---------------|-------|
| Вставить ссылку| `Ctrl+K`      | `⌘K`  |
| Печать         | `Ctrl+P`      | `⌘P`  |

:::info
В будущих обновлениях могут появиться дополнительные горячие клавиши.
:::

Для просмотра полного списка горячих клавиш RichText нажмите **Help** и выберите **Keyboard shortcuts**:

import shortcut_reference from '@site/static/img/richtext/shortcut_reference.png';

<img
  src={shortcut_reference}
  alt="Shortcut reference"
  className="img_border"
/>

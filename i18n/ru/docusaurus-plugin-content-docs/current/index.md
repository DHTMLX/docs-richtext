---
sidebar_label: Обзор RichText
title: Обзор RichText
slug: /
description: В документации вы найдёте обзор библиотеки DHTMLX JavaScript RichText. Изучайте руководства разработчика и справочник API, пробуйте примеры кода и живые демо, скачайте бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# Обзор RichText

**DHTMLX RichText** — гибкий и легковесный WYSIWYG-редактор, созданный на JavaScript. Разработанный для обеспечения удобного редактирования в современных веб-приложениях, RichText предлагает чистый интерфейс, широкие возможности форматирования и полный контроль над отображением содержимого. Будь то CMS, внутренний инструмент администрирования или встроенный редактор документов — RichText легко интегрируется и настраивается под ваши нужды.

Компонент **DHTMLX RichText** включает следующие возможности:

- Два [**режима отображения**](api/config/layout-mode.md)

- Сериализация содержимого в обычный текст и HTML

- Настраиваемый [**toolbar**](api/config/toolbar.md) со встроенными и пользовательскими кнопками

- Статический [**menubar**](api/config/menubar.md), который можно показать или скрыть

- Загрузка изображений, расширенное форматирование, пользовательские стили и полноэкранный режим

- [Полный доступ к API](api/overview/main_overview.md) для [обработки событий](api/overview/event_bus_methods_overview.md), [работы с содержимым](api/overview/methods_overview.md) и [реактивного управления состоянием](api/overview/state_methods_overview.md)

RichText не зависит от фреймворка и легко интегрируется с [React](guides/integration_with_react.md), [Angular](guides/integration_with_angular.md), [Vue](guides/integration_with_vue.md) и [Svelte](guides/integration_with_svelte.md), что делает его подходящим для широкого круга фронтенд-экосистем.

Данная документация содержит подробные инструкции по установке, настройке, использованию и кастомизации. Вы найдёте примеры для распространённых сценариев, [полный справочник API](api/overview/main_overview.md) и лучшие практики встраивания RichText в ваше приложение.

## Структура RichText {#richtext-structure}

### Menubar {#menubar}

Menubar RichText предоставляет доступ к действиям редактирования: создание нового документа, печать, импорт/экспорт содержимого и другие операции. По умолчанию он скрыт.

Используйте свойство [`menubar`](api/config/menubar.md) для переключения его видимости. Menubar можно включить или отключить, однако его содержимое в настоящее время не настраивается.

<div className="img_border">
![Menubar](./assets/richtext/menubar.png)
</div>

### Toolbar {#toolbar}

Toolbar RichText предоставляет быстрый доступ к форматированию текста и структурному редактированию. По умолчанию [toolbar](api/config/toolbar.md#default-config) включён и отображает предопределённый набор часто используемых элементов управления: жирный шрифт, курсив, настройки шрифта, форматирование списков и другие.

Свойство [`toolbar`](api/config/toolbar.md) позволяет полностью настроить содержимое и расположение элементов toolbar. Вы можете включать или отключать toolbar, переставлять элементы управления по умолчанию или задать полностью пользовательский toolbar с помощью массива идентификаторов встроенных кнопок и объектов пользовательских кнопок.

<div className="img_border">
![Toolbar](./assets/richtext/toolbar.png)
</div>

### Редактор {#editor}

Редактор RichText — это центральная область, где пользователи создают и форматируют содержимое. Вы можете управлять внешним видом и поведением редактора с помощью параметров конфигурации: [`value`](api/config/value.md), [`layoutMode`](api/config/layout-mode.md) и [`defaultStyles`](api/config/default-styles.md). RichText также поддерживает пользовательские стили, вставку изображений и адаптивные настройки макета в соответствии с потребностями вашего приложения.

#### Два режима работы {#two-working-modes}

DHTMLX RichText может работать с содержимым в режимах "classic" и "document". Вы можете выбрать наиболее удобный режим для редактирования текста. Используйте свойство [`layoutMode`](api/config/layout-mode.md) для программного переключения между режимами.

- **"classic"**

<div className="img_border">
![Классический режим](./assets/richtext/classic_mode.png)
</div>

- **"document"**

<div className="img_border">
![Документный режим](./assets/richtext/document_mode.png)
</div>

## Поддерживаемые форматы {#supported-formats}

Редактор RichText поддерживает [разбор](api/methods/set-value.md) и [сериализацию](api/methods/get-value.md) содержимого в форматах **HTML** и обычного текста.

#### Формат HTML {#html-format}

<div className="img_border">
![Формат HTML](./assets/richtext/html_format.png)
</div>

#### Текстовый формат {#text-format}

<div className="img_border">
![Текстовый формат](./assets/richtext/text_format.png)
</div>

## Сочетания клавиш {#keyboard-shortcuts}

Редактор RichText поддерживает набор стандартных сочетаний клавиш для быстрого форматирования и редактирования. Сочетания соответствуют платформенным соглашениям и доступны как на **Windows/Linux** (`Ctrl`), так и на **macOS** (`⌘`).

### Форматирование текста {#text-formatting}

| Действие        | Windows/Linux   | macOS         |
|-----------------|-----------------|---------------|
| Жирный*         | `Ctrl+B`        | `⌘B`          |
| Курсив          | `Ctrl+I`        | `⌘I`          |
| Подчёркивание   | `Ctrl+U`        | `⌘U`          |
| Зачёркивание    | `Ctrl+Shift+X`  | `⌘⇧X`         |

### Редактирование {#editing}

| Действие  | Windows/Linux            | macOS         |
|-----------|--------------------------|---------------|
| Отменить  | `Ctrl+Z`                 | `⌘Z`          |
| Повторить | `Ctrl+Y` / `Ctrl+Shift+Z`| `⌘Y` / `⌘⇧Z`  |
| Вырезать  | `Ctrl+X`                 | `⌘X`          |
| Копировать| `Ctrl+C`                 | `⌘C`          |
| Вставить  | `Ctrl+V`                 | `⌘V`          |

### Специальные действия {#special-actions}

| Действие        | Windows/Linux | macOS |
|-----------------|---------------|-------|
| Вставить ссылку | `Ctrl+K`      | `⌘K`  |
| Печать          | `Ctrl+P`      | `⌘P`  |

:::info[Информация]
В будущих обновлениях могут быть добавлены новые сочетания клавиш.
:::

Чтобы получить актуальный справочник по сочетаниям клавиш RichText, нажмите **Help** и выберите пункт **Keyboard shortcuts**:

<div className="img_border">
![Сочетания клавиш](./assets/richtext/shortcut_reference.png)
</div>

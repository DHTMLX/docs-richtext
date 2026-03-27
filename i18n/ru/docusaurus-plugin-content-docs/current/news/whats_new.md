---
sidebar_label: Что нового
title: Что нового
description: В документации библиотеки DHTMLX JavaScript UI вы можете ознакомиться с новыми возможностями DHTMLX RichText и историей релизов. Изучайте руководства разработчика и справочник API, пробуйте примеры кода и живые демо, скачайте бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

## Версия 2.0.5 {#version-205}

Выпущена 6 марта 2026 г.

### Исправления {#fixes}

- Некорректная обработка ввода IME
- Некорректная обработка ввода на основе композиции (например, китайский, японский, корейский на десктопе)
- Свойства `margin-left` и `line-height` игнорируются при разборе HTML
- Инлайн-элементы наследуют свойства блочных родительских элементов
- Невозможно скопировать текст между двумя экземплярами редактора
- Некорректная обработка выделения при наличии двух или более активных экземпляров редактора
- Неправильное позиционирование курсора, когда единственным содержимым абзаца является изображение
- Бесконечное оборачивание элементов subscript и superscript
- При вставке изображений они вставляются как инлайн вместо предварительной загрузки
- Пустые инлайн-блоки не удаляются в определённых позициях (первая или последняя строка)
- Редактор не прокручивается к курсору при вводе текста
- Некорректная обработка ввода на Android
- Некорректная обработка выделения для элементов HR
- Некорректное отображение при пустых начальных значениях
- Копирование содержимого может завершаться ошибкой, если оно содержит самозакрывающиеся блоки
- Chrome: невозможно вставить эмодзи из контекстного меню
- Firefox: выделить всё (CTRL+A) обрабатывается некорректно

## Версия 2.0.4 {#version-204}

Выпущена 15 октября 2025 г.

### Исправления {#fixes-1}

- Некорректное выделение диапазона для абзацев
- Всплывающие окна ссылок не отображаются рядом со связанными изображениями
- Начальные значения toolbar неточно отражают фактическое содержимое

## Версия 2.0.3 {#version-203}

Выпущена 27 августа 2025 г.

### Исправления {#fixes-2}

- Клик по горизонтальной линии вызывает ошибку скрипта
- Неверная высота строки по умолчанию
- Стили содержимого содержат дублирующиеся селекторы
- Блоки обычного текста игнорируют изменения стилей при разборе HTML
- Парсер игнорирует экранированные имена шрифтов в HTML
- Парсер игнорирует свойства `margin-left` и `line-height` в HTML

## Версия 2.0.2 {#version-202}

Выпущена 4 августа 2025 г.

### Исправления {#fixes-3}

- Обновлено содержимое пакета

## Версия 2.0.1 {#version-201}

Выпущена 30 июля 2025 г.

### Исправления {#fixes-4}

- Обновлены определения типов для свойства `defaultStyles`

## Версия 2.0 {#version-20}

Выпущена 30 июля 2025 г.

:::note[Примечание]
API версии v1.2 несовместим с v2.0. Дополнительные сведения см. в [**руководстве по миграции**](news/migration.md).
:::

### Новая функциональность {#new-functionality}

- **Новое поколение отображения текста**
  Более плавное, быстрое и точное отображение текста благодаря новому движку

- **Детальная настройка toolbar**
  Полный контроль над toolbar:
  - Задавайте [отдельные элементы управления toolbar](guides/configuration.md/#default-toolbar-controls) и их порядок
  - Добавляйте [пользовательские элементы управления](guides/configuration.md/#custom-toolbar-controls)

- **Необязательный [menubar](api/config/menubar.md)**
  Включите классический интерфейс меню в верхней части редактора

- **Улучшенный [документный режим](guides/configuration.md/#layout-modes)**
  Добавлена поддержка различных размеров документа

- **Поддержка изображений**
  - Вставка изображений с [возможностью загрузки](api/config/image-upload-url.md)
  - Интерактивное [изменение размера изображений](api/events/resize-image.md)

- **Улучшенная работа со ссылками**
  Переработанные [всплывающие взаимодействия](api/events/show-popup.md) для повышения удобства использования

- **Новые инструменты форматирования**
  - Выравнивание текста: **по ширине**
  - Вставка [горизонтальных линий](api/events/insert-line.md)
  - [Увеличение](api/events/indent.md) / [уменьшение](api/events/outdent.md) отступа
  - Установка [межстрочного интервала](api/events/set-line-height.md)
  - Применение [подстрочного](api/events/subscript.md) / [надстрочного](api/events/superscript.md) начертания

- **Управление списками**
  Удобная [вставка и управление списками](api/events/insert-list.md) в содержимом

- **Импорт/экспорт и печать**
  - [Импорт файлов DOCX](api/events/import.md)
  - [Экспорт](api/events/export.md) содержимого в DOCX или PDF
  - [Печать](api/events/print.md) документов непосредственно из редактора

- **Сочетания клавиш**
  Расширенная поддержка стандартных сочетаний клавиш для форматирования и редактирования

### Новый API {#new-api}

#### Новые свойства {#new-properties}

- [`fullscreenMode`](api/config/fullscreen-mode.md)
- [`imageUploadUrl`](api/config/image-upload-url.md)
- [`layoutMode`](api/config/layout-mode.md)
- [`locale`](api/config/locale.md)
- [`menubar`](api/config/menubar.md)
- [`toolbar`](api/config/toolbar.md)
- [`value`](api/config/value.md)

#### Новые методы {#new-methods}

- [`setConfig()`](api/methods/set-config.md) — Динамическое обновление конфигурации
- [`setLocale()`](api/methods/set-locale.md) — Смена локали на лету

#### Новые внутренние методы {#new-internal-methods}

- [`api.exec()`](api/internal/exec.md)
- [`api.intercept()`](api/internal/intercept.md)
- [`api.getReactiveState()`](api/internal/get-reactive-state.md)
- [`api.getState()`](api/internal/get-state.md)

#### Новые события {#new-events}

Полный список новых событий доступен [здесь](api/overview/events_overview.md)

### Обновлённый API {#updated-api}

#### Обновлённые свойства {#updated-properties}

- [`defaultStyles`](api/config/default-styles.md)

#### Обновлённые методы {#updated-methods}

- [`setValue()`](api/methods/set-value.md)
- [`getValue()`](api/methods/get-value.md)

#### Обновлённые внутренние методы {#updated-internal-methods}

- [`api.detach()`](api/internal/detach.md)
- [`api.on()`](api/internal/on.md)

## Удалённый API {#removed-api}

:::warning[Предупреждение]
Не используйте удалённый API в своих проектах! <br/> Обратитесь к разделу [Миграция](news/migration.md) для получения дополнительной информации.
:::

### [Удалённые свойства](news/migration.md#properties-migration) {#removed-properties}

- [`customStats`](news/migration.md#--customstats)
- [`mode`](news/migration.md#--mode--layoutmode)
- [`toolbarBlocks`](news/migration.md#--toolbarblocks--toolbar)

### [Удалённые методы](news/migration.md#methods-migration) {#removed-methods}

- `exitFullScreen()`
- `fullScreen()`
- `getEditorAPI()`
- `getStats()`
- `paint()`

### Удалённые внутренние методы {#removed-internal-methods}

- [`events.fire()`](news/migration.md#--fire--use-exec-and-intercept)

### Удалённые события {#removed-events}

- `Action`
- `Change`
- `selectionChange`
- `selectionRefresh`

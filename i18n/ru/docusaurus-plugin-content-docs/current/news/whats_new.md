---
sidebar_label: Что нового
title: Что нового
description: Ознакомьтесь с последними обновлениями DHTMLX RichText и просмотрите историю релизов прямо в документации по JavaScript UI библиотеке DHTMLX. Здесь вы найдете руководства, справочник API, примеры кода, живые демо и бесплатную 30-дневную пробную версию DHTMLX RichText.
---

## Версия 2.0.4

Выпущено 15 октября 2025

### Исправления

- Диапазон выделения абзацев работал не всегда корректно
- Всплывающие окна ссылок не отображались, если находились рядом с изображениями-ссылками
- Значения тулбара при запуске не всегда соответствовали фактическому содержимому

## Версия 2.0.3

Выпущено 27 августа 2025

### Исправления

- Клик по горизонтальной линии мог вызывать ошибку скрипта
- Значение высоты строки по умолчанию было задано некорректно
- Некоторые стили содержимого имели дублирующиеся селекторы
- Блоки обычного текста не применяли изменения стиля при разборе HTML
- Парсер пропускал экранированные имена шрифтов в HTML
- Парсер игнорировал `margin-left` и `line-height` в HTML

## Версия 2.0.2

Выпущено 4 августа 2025

### Исправления

- Обновлено содержимое пакета

## Версия 2.0.1

Выпущено 30 июля 2025

### Исправления

- Обновлены определения типов для свойства `defaultStyles`

## Версия 2.0

Выпущено 30 июля 2025

:::note
API версии v1.2 не совместим с v2.0. Подробнее см. [**руководство по миграции**](news/migration.md).
:::

### Новая функциональность

- **Новое поколение рендеринга текста**  
  Новый движок обеспечивает более плавное, быстрое и точное отображение текста

- **Гибкая настройка тулбара**  
  Теперь тулбар полностью настраивается: 
  - Выбирайте [отдельные элементы тулбара](guides/configuration.md#default-toolbar-controls) и задавайте их порядок  
  - Добавляйте свои [пользовательские элементы](guides/configuration.md#custom-toolbar-controls)

- **Опциональная [меню-строка](api/config/menubar.md)**  
  Можно добавить классический интерфейс меню в верхней части редактора

- **Улучшенный [режим документа](guides/configuration.md#layout-modes)**  
  Теперь поддерживаются различные размеры документа

- **Поддержка изображений**  
  - Вставка изображений с помощью [функций загрузки](api/config/image-upload-url.md)  
  - [Изменение размера изображений](api/events/resize-image.md) прямо в редакторе  

- **Улучшенная работа со ссылками**  
  Взаимодействие с [всплывающими окнами ссылок](api/events/show-popup.md) стало удобнее

- **Новые инструменты форматирования**  
  - Выравнивание текста: **по ширине**  
  - Вставка [горизонтальных линий](api/events/insert-line.md)  
  - [Увеличение отступа](api/events/indent.md) / [уменьшение отступа](api/events/outdent.md)  
  - Установка [высоты строки](api/events/set-line-height.md)  
  - Использование [подстрочного](api/events/subscript.md) / [надстрочного](api/events/superscript.md) текста

- **Управление списками**  
  Теперь легко [вставлять и управлять списками](api/events/insert-list.md)

- **Импорт/Экспорт и печать**  
  - [Импорт DOCX](api/events/import.md) файлов
  - [Экспорт](api/events/export.md) в DOCX или PDF
  - [Печать](api/events/print.md) прямо из редактора

- **Горячие клавиши**  
  Поддерживается больше стандартных сочетаний клавиш для форматирования и редактирования

### Новый API

#### Новые свойства

- [`fullscreenMode`](api/config/fullscreen-mode.md)  
- [`imageUploadUrl`](api/config/image-upload-url.md)  
- [`layoutMode`](api/config/layout-mode.md)  
- [`locale`](api/config/locale.md)  
- [`menubar`](api/config/menubar.md)  
- [`toolbar`](api/config/toolbar.md)  
- [`value`](api/config/value.md)

#### Новые методы

- [`setConfig()`](api/methods/set-config.md) - обновление конфигурации на лету  
- [`setLocale()`](api/methods/set-locale.md) - мгновенная смена локали

#### Новые внутренние методы

- [`api.exec()`](api/internal/exec.md)  
- [`api.intercept()`](api/internal/intercept.md)  
- [`api.getReactiveState()`](api/internal/get-reactive-state.md)  
- [`api.getState()`](api/internal/get-state.md)

#### Новые события

Полный список новых событий смотрите [здесь](api/overview/events_overview.md)

### Обновленный API

#### Обновленные свойства

- [`defaultStyles`](api/config/default-styles.md)

#### Обновленные методы

- [`setValue()`](api/methods/set-value.md)  
- [`getValue()`](api/methods/get-value.md)

#### Обновленные внутренние методы

- [`api.detach()`](api/internal/detach.md)  
- [`api.on()`](api/internal/on.md)

## Удаленный API

:::warning
Не используйте удаленный API в своих проектах! <br/> Подробнее смотрите в разделе [Миграция](news/migration.md).
:::

### [Удаленные свойства](news/migration.md#properties-migration)

- [`customStats`](news/migration.md#--customstats)  
- [`mode`](news/migration.md#--mode--layoutmode)  
- [`toolbarBlocks`](news/migration.md#--toolbarblocks--toolbar)

### [Удаленные методы](news/migration.md#methods-migration)

- `exitFullScreen()`  
- `fullScreen()`  
- `getEditorAPI()`  
- `getStats()`  
- `paint()`

### Удаленные внутренние методы

- [`events.fire()`](news/migration.md#--fire--use-exec-and-intercept)

### Удаленные события

- `Action`  
- `Change`  
- `selectionChange`  
- `selectionRefresh`

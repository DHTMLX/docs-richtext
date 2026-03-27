---
title: Стилизация
sidebar_label: Стилизация
description: В документации библиотеки DHTMLX JavaScript RichText вы можете узнать о стилизации. Изучайте руководства разработчика и справочник API, просматривайте примеры кода и живые демо, а также скачайте бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# Стилизация

Вы можете полностью настроить внешний вид DHTMLX RichText, переопределив CSS-переменные и применив собственные стили к отдельным частям виджета.

В этом руководстве показано, как применить **тёмную тему** и использовать доступные имена классов для стилизации menubar, toolbar, всплывающих окон и области контента редактора.

## Стандартная структура и имена классов {#default-structure-and-class-names}

RichText использует следующие основные классы для построения интерфейса:

| Имя класса             | Описание                                    |
|------------------------|---------------------------------------------|
| `.wx-richtext`         | Корневой контейнер виджета RichText         |
| `.wx-richtext-menubar` | Контейнер для menubar                       |
| `.wx-richtext-menu`    | Контейнер для выпадающего меню menubar      |
| `.wx-richtext-toolbar` | Контейнер для toolbar                       |
| `.wx-editor-area`      | Контейнер основной редактируемой области    |

Вы можете использовать эти классы в пользовательских CSS-селекторах для переопределения внешнего вида редактора RichText.

## Переопределение стилей по умолчанию {#overriding-default-styles}

Вы можете переопределить стили RichText по умолчанию, переопределив CSS-переменные на контейнере `#root` или отдельных дочерних элементах:

```html
<div id="root" style="width: 100%; height: 100%;"></div>

<style>
  #root,
  .wx-richtext-menu {
    --wx-background: #404151;
    --wx-background-alt: #212329;
    --wx-color-primary: #14B195;
    --wx-color-font: #FFFFFF;
    --wx-border: 1px solid #6B6C79;
    --wx-color-secondary-hover: rgba(20, 177, 149, 0.12);
    --wx-button-active: rgba(20, 177, 149, 0.22);
    --wx-icon-color: var(--wx-color-font);
    --wx-color-font-alt: #9FA1AE;
    --wx-color-font-disabled: #9FA1AE;
    --wx-popup-border: var(--wx-border);

    color-scheme: dark;
  }

  .wx-richtext-menu {
    border: var(--wx-border);
  }
</style>
```

:::note[Примечание]
Эти стили применяют тёмный фон, регулируют цвета кнопок и иконок и улучшают видимость для тёмных тем интерфейса.
:::

## Список поддерживаемых CSS-переменных {#list-of-supported-css-variables}

| Имя переменной               | Описание                                                        |
| ---------------------------- | --------------------------------------------------------------- |
| `--wx-background`            | Цвет фона редактора и всплывающих окон                          |
| `--wx-background-alt`        | Альтернативный цвет фона для menubar                            |
| `--wx-color-primary`         | Акцентный цвет для ссылок, цитат и границ при изменении размера изображений |
| `--wx-color-font`            | Основной цвет шрифта (для редактора, menubar и toolbar)         |
| `--wx-color-font-alt`        | Альтернативный цвет шрифта                                      |
| `--wx-color-font-disabled`   | Цвет отключённого текста (для элементов menubar и toolbar)      |
| `--wx-border`                | Стиль границы, применяемый по всему редактору                   |
| `--wx-color-secondary-hover` | Фон состояния наведения для кнопок menubar и toolbar            |
| `--wx-button-active`         | Фон активного состояния для кнопок menubar и toolbar            |
| `--wx-icon-color`            | Цвет стрелочных иконок toolbar для выпадающих элементов         |
| `--wx-popup-border`          | Граница для всплывающих элементов                               |

## Рекомендации {#best-practices}

* Используйте `color-scheme: dark` для улучшения стилизации нативных элементов ввода в тёмном режиме
* Не изменяйте свойства, связанные с макетом (например, `display`, `position`), без необходимости

## Живое демо {#live-demo}

В этом примере показано, как применить пользовательский стиль к RichText:

<iframe src="https://snippet.dhtmlx.com/q8j4qqq9?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

**Связанные статьи:** [Customization](guides/configuration.md)

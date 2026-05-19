---
sidebar_label: toolbar
title: toolbar Config
description: В документации по JavaScript-библиотеке DHTMLX RichText вы можете узнать о конфигурации toolbar. Изучайте руководства разработчика и справочник АПИ, пробуйте примеры кода и живые демо, скачивайте бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# toolbar

### Description

@short: Optional. Enables toolbar and allows users to specify/configure buttons displayed within toolbar

### Usage

~~~jsx {}
toolbar?: boolean | Array<string | { id: string, type: string, label?: string, tooltip?: string, css?: string, handler?: () => any }>;
~~~

#### Доступные кнопки панели инструментов

В панели инструментов RichText можно указать следующие кнопки:

| Кнопка              | Описание                                                                                  |
|---------------------|-------------------------------------------------------------------------------------------|
| `undo`              | Отменяет последнее действие пользователя.                                                 |
| `redo`              | Повторяет последнее отменённое действие.                                                  |
| `style`             | Позволяет выбрать стиль текста (например, заголовки, абзац и т.д.).                       |
| `font-family`       | Изменяет шрифт выделенного текста.                                                        |
| `font-size`         | Изменяет размер выделенного текста.                                                       |
| `bold`              | Применяет полужирное форматирование к выделенному тексту.                                 |
| `italic`            | Применяет курсивное форматирование к выделенному тексту.                                  |
| `underline`         | Подчёркивает выделенный текст.                                                            |
| `strike`            | Применяет зачёркивание.                                                                   |
| `subscript`         | Форматирует текст как подстрочный.                                                        |
| `superscript`       | Форматирует текст как надстрочный.                                                        |
| `text-color`        | Изменяет цвет текста.                                                                     |
| `background-color`  | Изменяет цвет фона (выделения) текста.                                                    |
| `align`             | Устанавливает выравнивание текста (по левому краю, по центру, по правому краю, по ширине).|
| `indent`            | Увеличивает отступ текстового блока.                                                      |
| `outdent`           | Уменьшает отступ абзаца.                                                                  |
| `line-height`       | Настраивает межстрочный интервал.                                                         |
| `quote`             | Форматирует текст как цитату.                                                             |
| `bulleted-list`     | Создаёт маркированный список.                                                             |
| `numbered-list`     | Создаёт нумерованный список.                                                              |
| `link`              | Вставляет гиперссылку.                                                                    |
| `image`             | Вставляет изображение.                                                                    |
| `line`              | Вставляет горизонтальную линию.                                                           |
| `clear`             | Удаляет всё форматирование с выделенного текста.                                          |
| `print`             | Открывает диалог печати.                                                                  |
| `fullscreen`        | Переключает полноэкранный режим.                                                          |
| `mode`              | Переключает [режимы макета](api/config/layout-mode.md) (classic/document)                 |
| `shortcuts`         | Отображает список доступных сочетаний клавиш.                                             |
| `separator`         | Добавляет визуальный разделитель между группами кнопок панели инструментов.               |

С помощью этих строк можно настроить кнопки панели инструментов следующим образом:

~~~jsx {2-7}
new richtext.Richtext("#root", {
    toolbar: [
        "bold",
        "italic",
        "separator",
        // other buttons
    ],
    // other configuration properties
});
~~~

#### Пользовательские кнопки панели инструментов

Пользовательские кнопки можно задавать в виде объектов со следующими параметрами:

- `type` — (обязательный) задаёт тип пользовательского элемента управления. Доступные типы: `"button"`, `"richselect"`, `"colorpicker"`
- `id` — (необязательный) идентификатор пользовательского элемента управления (не должен совпадать с существующим ID элемента)
- `label` — (необязательный) подпись кнопки (отображается вместе с иконкой)
- `tooltip` — (необязательный) всплывающая подсказка при наведении (если не указана, используется значение из `"label"`)
- `css` — (необязательный) CSS-класс, назначаемый элементу управления (поддерживаемые классы по умолчанию: wx-primary, wx-secondary)
- `handler` — (необязательный) функция-калбэк, выполняемая при нажатии кнопки

~~~jsx {6-32}
new richtext.Richtext("#root", {
    toolbar: [
        // buttons (strings represent buttons only)
        "bold",
        "italic",
        // predefined buttons (user cannot define any other options for these (no labels, tooltips, options, etc.), so only ({ type: "button", id: string })
        {
            type: "button",
            id: "fullscreen",
        },
        // user must specify the correct type if they want to use a predefined control (e.g. richselect/colorpicker)
        // non-matching types will be ignored (not added to the toolbar)
        {
            type: "richselect", // type: "button" - incorrect, will be ignored
            id: "mode",
        },
        // custom buttons (supported options are below)
        // user can only define custom buttons (no richselect/colorpicker support atm)
        {
            type: "button",
            id: "some",
            label: "Some",
            handler: () => {/* custom logic */}
        },
        {
            type: "button",
            id: "other",
            icon: "wxo-help",
            label: "Other",
            tooltip: "Some tooltip",
            handler: () => {/* custom logic */}
        }
    ],
    // other configuration properties
});
~~~

#### Скрытие панели инструментов

Чтобы скрыть панель инструментов, установите свойство `toolbar` в значение `false`:

~~~jsx {2}
new richtext.Richtext("#root", {
    toolbar: false
    // other configuration properties
});
~~~

### Default config

~~~jsx
const defaultToolbarButtons = {
    "undo",
    "redo",
    "separator",
    "style",
    "separator",
    "font-family",
    "font-size",
    "separator",
    "bold",
    "italic",
    "underline",
    "strike",
    "separator",
    "text-color",
    "background-color",
    "separator",
    "align",
    "line-height",
    "outdent",
    "indent",
    "separator",
    "bulleted-list",
    "numbered-list",
    "quote",
    "separator",
    "link",
    "image",
    "separator",
    "clear",
    "separator",
    "fullscreen",
    "mode"
};
~~~

:::tip[Совет]
Кнопки панели инструментов по умолчанию экспортируются виджетом RichText и доступны через `richtext.defaultToolbarButtons`.

```jsx{4}
// initialize RichText
new richtext.Richtext("#root", {
    toolbar: [
        ...richtext.defaultToolbarButtons,
        {
            type: "button",
            id: "btn1", // button id (cannot overlap with existing button ids if you want to apply custom logic)
            icon: "wxo-help", // button icon (combines with label)
            css: "rounded", // css class name assigned to the control (default supported classes: wx-primary, wx-secondary)
            label: "Custom button", // button label (combines with icon)
            tooltip: "Some tooltip", // tooltip displayed on hover (if not specified, uses the value from "label")
        }
    ]
    // other configuration properties
});
```
:::

### Example

~~~jsx {3-18}
// initialize RichText
new richtext.Richtext("#root", {
    toolbar: [
        "bold",
        "italic",
        "separator",
        // custom buttons (all supported options are used below)
        // user can only define custom buttons (no richselect/colorpicker support at the moment)
        {
            type: "button",
            id: "btn1", // button id (cannot overlap with existing button ids if you want to apply custom logic)
            icon: "wxo-help", // button icon (combines with label)
            css: "rounded", // css class name assigned to the control (default supported classes: wx-primary, wx-secondary)
            label: "Custom button", // button label (combines with icon)
            tooltip: "Some tooltip", // tooltip displayed on hover (if not specified, uses the value from "label")
            handler: () => ..., // custom logic attached to this button
        }
    ]
    // other configuration properties
});
~~~

**Change log:** The property was added in v2.0

**Related articles:** [Configuration](guides/configuration.md)

**Related sample:** [RichText. Custom control and simplified toolbar](https://snippet.dhtmlx.com/wda202ih?tag=richtext)

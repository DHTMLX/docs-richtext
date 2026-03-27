---
sidebar_label: Конфигурация
title: Конфигурация
description: В документации библиотеки DHTMLX JavaScript RichText вы можете узнать о конфигурации компонента. Изучайте руководства разработчика и справочник API, просматривайте примеры кода и живые демо, а также скачайте бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# Конфигурация

Внешний вид и поведение RichText настраиваются через соответствующий API. Доступные параметры позволяют:

- Показывать/скрывать **menubar** с помощью свойства [`menubar`](api/config/menubar.md)
- Настраивать **toolbar** с помощью свойства [`toolbar`](api/config/toolbar.md)
- Включать **полноэкранный режим** с помощью свойства [`fullscreenMode`](api/config/fullscreen-mode.md)
- Переключать **режим отображения** между «classic» и «document» с помощью свойства [`layoutMode`](api/config/layout-mode.md)
- Задавать **начальное значение** с помощью свойства [`value`](api/config/value.md)
- Задавать **начальную локаль** с помощью свойства [`locale`](api/config/locale.md)
- Применять **начальные стили** с помощью свойства [`defaultStyles`](api/config/default-styles.md)

## Режимы отображения {#layout-modes}

В редакторе RichText доступны два режима отображения — выберите наиболее удобный для работы с вашим контентом:

- **"classic"**

<div className="img_border">
![Классический режим](./../assets/richtext/classic_mode.png)
</div>

- **"document"**

<div className="img_border">
![Режим документа](./../assets/richtext/document_mode.png)
</div>

Чтобы указать нужный режим, задайте его в свойстве [`layoutMode`](api/config/layout-mode.md) объекта конфигурации RichText при инициализации компонента:

~~~jsx
const editor = new richtext.Richtext("#root", {
    layoutMode: "document"
});
~~~

## Toolbar {#toolbar}

Toolbar в RichText состоит из нескольких блоков элементов управления, которые можно изменять по своему усмотрению.

### Стандартные элементы toolbar {#default-toolbar-controls}

В toolbar RichText можно задать следующие кнопки и элементы управления:

| Кнопка              | Описание                                                                    |
|---------------------|-----------------------------------------------------------------------------|
| `undo`              | Отменяет последнее действие пользователя                                    |
| `redo`              | Повторяет отменённое действие                                               |
| `style`             | Позволяет выбрать стиль текста (заголовки, абзац и т.д.)                   |
| `font-family`       | Изменяет шрифт выделенного текста                                           |
| `font-size`         | Изменяет размер выделенного текста                                          |
| `bold`              | Применяет полужирное начертание к выделенному тексту                        |
| `italic`            | Применяет курсивное начертание к выделенному тексту                         |
| `underline`         | Подчёркивает выделенный текст                                               |
| `strike`            | Применяет зачёркивание                                                      |
| `subscript`         | Форматирует текст как нижний индекс                                         |
| `superscript`       | Форматирует текст как верхний индекс                                        |
| `text-color`        | Изменяет цвет текста                                                        |
| `background-color`  | Изменяет цвет фона (выделения) текста                                       |
| `align`             | Задаёт выравнивание текста (по левому краю, по центру, по правому краю, по ширине) |
| `indent`            | Увеличивает отступ абзаца                                                   |
| `outdent`           | Уменьшает отступ абзаца                                                     |
| `line-height`       | Регулирует межстрочный интервал                                             |
| `quote`             | Форматирует текст как цитату                                                |
| `bulleted-list`     | Создаёт маркированный список                                                |
| `numbered-list`     | Создаёт нумерованный список                                                 |
| `link`              | Вставляет или редактирует гиперссылку                                       |
| `image`             | Вставляет изображение                                                       |
| `line`              | Вставляет горизонтальную линию                                              |
| `clear`             | Удаляет всё форматирование выделенного текста                               |
| `print`             | Открывает диалог печати                                                     |
| `fullscreen`        | Переключает полноэкранный режим                                             |
| `mode`              | Переключает между двумя режимами отображения: Classic / Document            |
| `shortcuts`         | Показывает список доступных сочетаний клавиш                                |
| `separator`         | Добавляет визуальный разделитель между элементами управления                |

Структура toolbar задаётся с помощью свойства [`toolbar`](api/config/toolbar.md) — массива строк с именами элементов управления.

~~~jsx {2-36}
new richtext.Richtext("#root", {
    toolbar: [
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
        // другие кнопки
    ],
    // другие свойства конфигурации
});
~~~

**Связанный пример:** [RichText. Custom control and simplified toolbar](https://snippet.dhtmlx.com/wda202ih?tag=richtext)

### Пользовательские элементы toolbar {#custom-toolbar-controls}

В свойстве [`toolbar`](api/config/toolbar.md) также можно задать пользовательские элементы управления в виде объектов со следующими параметрами:

- `type` — (обязательный) тип пользовательского элемента управления. Доступные типы: `"button"`, `"richselect"`, `"colorpicker"`
- `id` — (необязательный) идентификатор пользовательского элемента управления (не должен совпадать с существующими идентификаторами)
- `label` — (необязательный) подпись кнопки (комбинируется с иконкой)
- `tooltip` — (необязательный) всплывающая подсказка при наведении (если не указана, используется значение из `label`)
- `css` — (необязательный) CSS-класс, назначаемый элементу управления (поддерживаемые классы по умолчанию: wx-primary, wx-secondary)
- `handler` — (необязательный) колбэк-функция, выполняемая при нажатии кнопки

~~~jsx {6-32}
new richtext.Richtext("#root", {
    toolbar: [
        // кнопки (строки представляют только кнопки)
        "bold",
        "italic",
        // предустановленные кнопки (пользователь не может задавать дополнительные опции (метки, подсказки и т.д.), только ({ type: "button", id: string })
        {
            type: "button",
            id: "fullscreen",
        },
        // пользователь должен указать правильный тип для предустановленного элемента управления (например richselect/colorpicker)
        // несовпадающие типы игнорируются (не добавляются в toolbar)
        {
            type: "richselect", // type: "button" - некорректно, будет проигнорировано
            id: "mode",
        },
        // пользовательские кнопки (поддерживаемые опции перечислены ниже)
        // пользователь может создавать только пользовательские кнопки (richselect/colorpicker пока не поддерживаются)
        {
            type: "button",
            id: "some",
            label: "Some",
            handler: () => {/* пользовательская логика */}
        },
        {
            type: "button",
            id: "other",
            icon: "wxo-help",
            label: "Other",
            tooltip: "Some tooltip",
            handler: () => {/* пользовательская логика */}
        }
    ],
    // другие свойства конфигурации
});
~~~

**Связанный пример:** [RichText. Custom control and simplified toolbar](https://snippet.dhtmlx.com/wda202ih?tag=richtext)

### Скрытие Toolbar {#hide-toolbar}

Чтобы скрыть toolbar, задайте свойству [`toolbar`](api/config/toolbar.md) значение `false`:

~~~jsx {2}
new richtext.Richtext("#root", {
    toolbar: false,
    // другие свойства конфигурации
});
~~~

## Стили по умолчанию {#default-styles}

С помощью свойства [`defaultStyles`](api/config/default-styles.md) можно задать значения стилей по умолчанию для определённых типов блоков в редакторе.

~~~jsx {}
defaultStyles?: boolean | {
    "*"?: { // применяется ко всем блокам, позволяя задать общие свойства для всех
        "font-family"?: string; // "Roboto"| "Arial" | "Georgia" | "Tahoma" | "Times New Roman" | "Verdana"
        "font-size"?: string; // "12px" | "14px" | "16px" | "18px" | "20px" | "24px" | "28px" | "32px" | "36px"
        color?: string;
        background?: string;
    },
    p?: {
        "font-family"?: string; // "Roboto"| "Arial" | "Georgia" | "Tahoma" | "Times New Roman" | "Verdana"
        "font-size"?: string; // "12px" | "14px" | "16px" | "18px" | "20px" | "24px" | "28px" | "32px" | "36px"
        color?: string;
        background?: string;
    },
    blockquote?: {
        "font-family"?: string; // "Roboto"| "Arial" | "Georgia" | "Tahoma" | "Times New Roman" | "Verdana"
        "font-size"?: string; // "12px" | "14px" | "16px" | "18px" | "20px" | "24px" | "28px" | "32px" | "36px"
        color?: string;
        background?: string;
    },
    h1?: {
        "font-family"?: string; // "Roboto"| "Arial" | "Georgia" | "Tahoma" | "Times New Roman" | "Verdana"
        "font-size"?: string; // "12px" | "14px" | "16px" | "18px" | "20px" | "24px" | "28px" | "32px" | "36px"
        color?: string;
        background?: string;
    },
    h2?: {
        "font-family"?: string; // "Roboto"| "Arial" | "Georgia" | "Tahoma" | "Times New Roman" | "Verdana"
        "font-size"?: string; // "12px" | "14px" | "16px" | "18px" | "20px" | "24px" | "28px" | "32px" | "36px"
        color?: string;
        background?: string;
    },
    h3?: {
        "font-family"?: string; // "Roboto"| "Arial" | "Georgia" | "Tahoma" | "Times New Roman" | "Verdana"
        "font-size"?: string; // "12px" | "14px" | "16px" | "18px" | "20px" | "24px" | "28px" | "32px" | "36px"
        color?: string;
        background?: string;
    },
    h4?: {
        "font-family"?: string; // "Roboto"| "Arial" | "Georgia" | "Tahoma" | "Times New Roman" | "Verdana"
        "font-size"?: string; // "12px" | "14px" | "16px" | "18px" | "20px" | "24px" | "28px" | "32px" | "36px"
        color?: string;
        background?: string;
    },
    h5?: {
        "font-family"?: string; // "Roboto"| "Arial" | "Georgia" | "Tahoma" | "Times New Roman" | "Verdana"
        "font-size"?: string; // "12px" | "14px" | "16px" | "18px" | "20px" | "24px" | "28px" | "32px" | "36px"
        color?: string;
        background?: string;
    },
    h6?: {
        "font-family"?: string; // "Roboto"| "Arial" | "Georgia" | "Tahoma" | "Times New Roman" | "Verdana"
        "font-size"?: string; // "12px" | "14px" | "16px" | "18px" | "20px" | "24px" | "28px" | "32px" | "36px"
        color?: string;
        background?: string;
    }
};
~~~

Свойство `defaultStyles` НЕ применяет CSS-стили к затронутым блокам напрямую. CSS-стили необходимо применять отдельно:

```html title="index.html"
<div id="root"></div>
```

```jsx {2-9} title="index.js"
const editor = new richtext.Richtext("#root", {
    defaultStyles: {
        h2: {
            "font-family": "Roboto",
            "font-size": "28px",
            color: "purple",
            background: "#FFC0CB"
        }
    }
});
```

```css title="index.css"
#root h2 {
    font-family: Roboto;
    font-size: 28px;
    color: purple;
    background: #FFC0CB;
}
```

В этом примере всем блокам `h2` назначается шрифт `"Roboto"` с размером 28px, а также изменяются цвет текста и фона. CSS-стили применяются к блокам `h2` отдельно.

**Связанный пример:** [RichText. Changing the default value for typography (font, font size, etc.)](https://snippet.dhtmlx.com/6u3ti01s?tag=richtext)

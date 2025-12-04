---
sidebar_label: Конфигурация
title: Конфигурация
description: Ознакомьтесь с документацией по настройке DHTMLX JavaScript RichText. Изучайте руководства для разработчиков и справочник API, пробуйте примеры кода и живые демо, скачайте бесплатную 30-дневную пробную версию DHTMLX RichText.
---

# Конфигурация

RichText можно настроить так, как вам нужно, с помощью его API. Доступные опции позволяют:

- Показать или скрыть **меню** с помощью свойства [`menubar`](api/config/menubar.md)
- Настроить **панель инструментов** с помощью свойства [`toolbar`](api/config/toolbar.md)
- Включить **режим на весь экран** с помощью свойства [`fullscreenMode`](api/config/fullscreen-mode.md)
- Переключить **режим отображения** между "classic" и "document" с помощью свойства [`layoutMode`](api/config/layout-mode.md)
- Установить **начальное значение** с помощью свойства [`value`](api/config/value.md)
- Задать **начальную локализацию** с помощью свойства [`locale`](api/config/locale.md)
- Применить **начальные стили** с помощью свойства [`defaultStyles`](api/config/default-styles.md)

## Режимы отображения

Редактор RichText поддерживает два режима отображения, чтобы вы могли работать в наиболее подходящей для вашего контента среде:

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

Чтобы выбрать режим, просто укажите свойство [`layoutMode`](api/config/layout-mode.md) в конфигурации RichText при инициализации компонента:

~~~jsx
const editor = new richtext.Richtext("#root", {
    layoutMode: "document"
});
~~~

## Панель инструментов

Панель инструментов RichText состоит из нескольких групп элементов управления, которые вы можете настраивать по своему усмотрению.

### Элементы управления панели инструментов по умолчанию

В панели инструментов RichText можно использовать следующие кнопки и элементы управления:

| Кнопка              | Описание                                                                      |
|---------------------|-------------------------------------------------------------------------------|
| `undo`              | Отменяет последнее действие пользователя                                      |
| `redo`              | Повторяет ранее отменённое действие                                           |
| `style`             | Позволяет выбрать стиль текста (например, заголовок, абзац и т.д.)            |
| `font-family`       | Изменяет шрифт выбранного текста                                              |
| `font-size`         | Изменяет размер выбранного текста                                              |
| `bold`              | Применяет полужирное начертание к выбранному тексту                           |
| `italic`            | Применяет курсив к выбранному тексту                                          |
| `underline`         | Подчеркивает выбранный текст                                                  |
| `strike`            | Применяет зачёркивание                                                        |
| `subscript`         | Форматирует текст как подстрочный                                             |
| `superscript`       | Форматирует текст как надстрочный                                             |
| `text-color`        | Изменяет цвет текста                                                          |
| `background-color`  | Изменяет цвет фона (выделения) текста                                         |
| `align`             | Устанавливает выравнивание текста (влево, по центру, вправо, по ширине)       |
| `indent`            | Увеличивает отступ абзаца                                                     |
| `outdent`           | Уменьшает отступ абзаца                                                       |
| `line-height`       | Изменяет межстрочный интервал                                                 |
| `quote`             | Форматирует текст как цитату                                                  |
| `bulleted-list`     | Создаёт маркированный список                                                  |
| `numbered-list`     | Создаёт нумерованный список                                                   |
| `link`              | Вставляет или редактирует гиперссылку                                         |
| `image`             | Вставляет изображение                                                         |
| `line`              | Вставляет горизонтальную линию                                                |
| `clear`             | Удаляет всё форматирование выбранного текста                                  |
| `print`             | Открывает диалог печати                                                       |
| `fullscreen`        | Переключает режим на весь экран                                               |
| `mode`              | Переключает между двумя режимами отображения: Classic/Document                |
| `shortcuts`         | Показывает список доступных горячих клавиш                                    |
| `separator`         | Добавляет визуальный разделитель между элементами управления                  |

Состав панели инструментов задаётся через свойство [`toolbar`](api/config/toolbar.md), которое представляет собой массив строк с названиями нужных вам элементов.

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
    // другие параметры конфигурации
});
~~~

**Связанный пример:** [RichText. Custom control and simplified toolbar](https://snippet.dhtmlx.com/wda202ih?tag=richtext)

### Пользовательские элементы панели инструментов

Если вы хотите добавить собственные элементы, вы можете включить объекты в свойство [`toolbar`](api/config/toolbar.md) со следующими опциями:

- `type` - (обязательно) определяет тип пользовательского элемента. Доступны: `"button"`, `"richselect"`, `"colorpicker"`
- `id` - (необязательно) идентификатор пользовательского элемента (не должен совпадать с ID встроенных элементов)
- `label` - (необязательно) подпись кнопки (может использоваться вместе с иконкой)
- `tooltip` - (необязательно) тултип при наведении (если не задан, используется значение "label")
- `css` - (необязательно) имя CSS-класса для элемента (по умолчанию поддерживаются: wx-primary, wx-secondary)
- `handler` - (необязательно) функция-обработчик, вызываемая при клике на кнопку

~~~jsx {6-32}
new richtext.Richtext("#root", {
    toolbar: [
        // кнопки (строки обозначают только кнопки)
        "bold",
        "italic",
        // предопределённые кнопки (пользователь не может задать для них другие опции, кроме ({ type: "button", id: string }))
        {
            type: "button",
            id: "fullscreen",
        },
        // пользователь должен указать корректный тип, если хочет использовать предопределённый элемент (например, richselect/colorpicker)
        // некорректные типы будут проигнорированы (не добавятся на панель)
        {
            type: "richselect", // type: "button" — некорректно, будет проигнорировано
            id: "mode",
        },
        // пользовательские кнопки (поддерживаются опции ниже)
        // пользователь может определять только пользовательские кнопки (richselect/colorpicker пока не поддерживаются)
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
    // другие параметры конфигурации
});
~~~

**Связанный пример:** [RichText. Custom control and simplified toolbar](https://snippet.dhtmlx.com/wda202ih?tag=richtext)

### Скрытие панели инструментов

Чтобы скрыть панель инструментов, просто установите свойство [`toolbar`](api/config/toolbar.md) в значение `false` следующим образом:

~~~jsx {2}
new richtext.Richtext("#root", {
    toolbar: false,
    // другие параметры конфигурации
});
~~~

## Стили по умолчанию

Значения стилей по умолчанию для определённых типов блоков в редакторе можно задать с помощью свойства [`defaultStyles`](api/config/default-styles.md).

~~~jsx {}
defaultStyles?: boolean | {
    "*"?: { // влияет на все блоки, позволяет задать общие свойства для всех этих блоков
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

Свойство `defaultStyles` не применяет CSS к блокам напрямую - оно только задаёт значения стилей. Для применения внешнего вида необходимо добавить CSS-стили отдельно:

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

В этом примере все блоки `h2` получают шрифт "Roboto", размер шрифта 28px, а также изменённые цвета текста и фона. CSS-правила применяются к блокам `h2`.

**Связанный пример:** [RichText. Changing the default value for typography (font, font size, etc.)](https://snippet.dhtmlx.com/6u3ti01s?tag=richtext)

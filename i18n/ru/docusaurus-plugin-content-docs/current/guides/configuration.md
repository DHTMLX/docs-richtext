---
sidebar_label: Конфигурация
title: Конфигурация
description: В документации библиотеки DHTMLX JavaScript RichText вы можете узнать о параметрах конфигурации. Изучайте руководства разработчика и справочник АПИ, пробуйте примеры кода и живые демо, загружайте бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# Конфигурация

Внешний вид и поведение RichText можно настроить с помощью следующих свойств:

- [`menubar`](api/config/menubar.md) — показать или скрыть верхнюю строку меню
- [`toolbar`](api/config/toolbar.md) — настроить видимость панели инструментов и её кнопки
- [`fullscreenMode`](api/config/fullscreen-mode.md) — открыть редактор в полноэкранном режиме
- [`layoutMode`](api/config/layout-mode.md) — переключиться между режимами `"classic"` и `"document"`
- [`value`](api/config/value.md) — задать исходное HTML-содержимое
- [`locale`](api/config/locale.md) — применить объект локализации при инициализации
- [`defaultStyles`](api/config/default-styles.md) — задать стили по умолчанию для конкретных типов блоков
- [`imageUploadUrl`](api/config/image-upload-url.md) — задать эндпоинт для загрузки изображений

## Режимы макета {#layout-modes}

RichText поддерживает два режима макета для области редактирования:

- **"classic"** — область редактирования занимает всю страницу

<div className="img_border">
![Classic mode](./../assets/richtext/classic_mode.png)
</div>

- **"document"** — область редактирования имитирует страницу документа

<div className="img_border">
![Document mode](./../assets/richtext/document_mode.png)
</div>

Задайте свойство [`layoutMode`](api/config/layout-mode.md) при инициализации, чтобы выбрать режим:

~~~jsx
const editor = new richtext.Richtext("#root", {
    layoutMode: "document"
});
~~~

## Панель инструментов

Панель инструментов RichText группирует элементы управления в несколько блоков, которые можно настраивать.

### Элементы управления панели инструментов по умолчанию {#default-toolbar-controls}

В панель инструментов RichText можно включить следующие кнопки и элементы управления:

| Кнопка              | Описание                                                                    |
|---------------------|-----------------------------------------------------------------------------|
| `undo`              | Отменяет последнее действие пользователя                                    |
| `redo`              | Повторяет отменённое действие                                               |
| `style`             | Выбирает стиль текста (например, заголовок, абзац, цитата)                  |
| `font-family`       | Изменяет шрифт выделенного текста                                           |
| `font-size`         | Изменяет размер выделенного текста                                          |
| `bold`              | Применяет жирное начертание к выделенному тексту                            |
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
| `quote`             | Форматирует текст как блочную цитату                                        |
| `bulleted-list`     | Создаёт маркированный список                                                |
| `numbered-list`     | Создаёт нумерованный список                                                 |
| `link`              | Вставляет или редактирует гиперссылку                                       |
| `image`             | Вставляет изображение                                                       |
| `line`              | Вставляет горизонтальную линию                                              |
| `clear`             | Удаляет всё форматирование выделенного текста                               |
| `print`             | Открывает диалог печати                                                     |
| `fullscreen`        | Переключает полноэкранный режим                                             |
| `mode`              | Переключает между двумя режимами макета: `classic` и `document`             |
| `shortcuts`         | Отображает список доступных сочетаний клавиш                                |
| `separator`         | Добавляет визуальный разделитель между элементами управления                |

Используйте свойство [`toolbar`](api/config/toolbar.md), чтобы определить панель инструментов в виде массива строк с именами элементов управления:

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

### Добавление пользовательских элементов управления {#add-custom-toolbar-controls}

Передайте объект в массив [`toolbar`](api/config/toolbar.md) с одним из следующих полей:

- `type: string` — обязательное. Тип элемента управления: `"button"`, `"richselect"` или `"colorpicker"`
- `id: string` — необязательное. Пользовательский идентификатор элемента управления; не должен совпадать с существующими идентификаторами
- `icon: string` — необязательное. Класс иконки; используется вместе с меткой
- `label: string` — необязательное. Метка кнопки; используется вместе с иконкой
- `tooltip: string` — необязательное. Подсказка при наведении; по умолчанию равна `label`, если не задана
- `css: string` — необязательное. CSS-класс элемента управления. Встроенные классы: `wx-primary`, `wx-secondary`
- `handler: () => void` — необязательное. Калбэк, вызываемый при нажатии

Пример ниже объединяет встроенные кнопки, предопределённый элемент управления типа `richselect` и две пользовательские кнопки:

~~~jsx {6-32}
new richtext.Richtext("#root", {
    toolbar: [
        // строки обозначают встроенные кнопки
        "bold",
        "italic",
        // предопределённые кнопки принимают только { type: "button", id: string }
        {
            type: "button",
            id: "fullscreen",
        },
        // для предопределённых элементов richselect/colorpicker задайте соответствующий тип
        // записи с несовпадающим типом игнорируются
        {
            type: "richselect", // type: "button" здесь будет проигнорирован
            id: "mode",
        },
        // пользовательские кнопки (richselect/colorpicker для пользовательских элементов не поддерживаются)
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

### Скрытие панели инструментов

Установите свойство [`toolbar`](api/config/toolbar.md) в значение `false`, чтобы скрыть панель инструментов:

~~~jsx {2}
new richtext.Richtext("#root", {
    toolbar: false,
    // другие свойства конфигурации
});
~~~

## Отображение строки меню

Включите свойство [`menubar`](api/config/menubar.md), чтобы отобразить верхнюю строку меню над панелью инструментов. Значение по умолчанию — `false`.

~~~jsx {2}
new richtext.Richtext("#root", {
    menubar: true
    // другие свойства конфигурации
});
~~~

## Задание исходного содержимого

Используйте свойство [`value`](api/config/value.md), чтобы передать исходное HTML-содержимое в редактор при инициализации:

~~~jsx {2}
new richtext.Richtext("#root", {
    value: "<h1>some value</h1>"
    // другие свойства конфигурации
});
~~~

Чтобы заменить содержимое после инициализации или загрузить его в формате, отличном от HTML, с пользовательским кодировщиком, вызовите метод [`setValue()`](api/methods/set-value.md).

## Задание исходной локали

Используйте свойство [`locale`](api/config/locale.md), чтобы применить объект локализации при инициализации:

~~~jsx {2}
new richtext.Richtext("#root", {
    locale: richtext.locales.cn
    // другие свойства конфигурации
});
~~~

Подробнее о динамическом переключении локали с помощью [`setLocale()`](api/methods/set-locale.md) см. в руководстве [Локализация](guides/localization.md).

## Запуск в полноэкранном режиме

Установите свойство [`fullscreenMode`](api/config/fullscreen-mode.md) в значение `true`, чтобы открыть редактор в полноэкранном режиме при инициализации. Значение по умолчанию — `false`.

~~~jsx {2}
new richtext.Richtext("#root", {
    fullscreenMode: true
    // другие свойства конфигурации
});
~~~

## Настройка URL для загрузки изображений

Передайте URL в свойство [`imageUploadUrl`](api/config/image-upload-url.md), чтобы задать серверный эндпоинт для загрузки изображений через панель инструментов:

~~~jsx {2}
new richtext.Richtext("#root", {
    imageUploadUrl: "https://example.com/upload"
    // другие свойства конфигурации
});
~~~

## Настройка стилей по умолчанию {#configure-default-styles}

Используйте свойство [`defaultStyles`](api/config/default-styles.md), чтобы задать стили по умолчанию для каждого типа блока.

Свойство [`defaultStyles`](api/config/default-styles.md) имеет следующую сигнатуру типа:

~~~jsx {}
defaultStyles?: boolean | {
    "*"?: { // применяется ко всем блокам; задаёт общие свойства для каждого блока
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

Свойство [`defaultStyles`](api/config/default-styles.md) не применяет CSS к затронутым блокам напрямую. Соответствующие CSS-стили необходимо применять отдельно:

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

В этом примере все блоки `h2` используют шрифт `"Roboto"` размером 28px с фиолетовым текстом на розовом фоне. Соответствующее CSS-правило применяет те же значения к отрендеренным элементам `h2`.

**Связанный пример:** [RichText. Changing the default value for typography (font, font size, etc.)](https://snippet.dhtmlx.com/6u3ti01s?tag=richtext)

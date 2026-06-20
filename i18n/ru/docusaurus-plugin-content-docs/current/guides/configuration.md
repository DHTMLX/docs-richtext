---
sidebar_label: Конфигурация
title: Конфигурация
description: В документации библиотеки DHTMLX JavaScript RichText вы можете узнать о конфигурации редактора. Изучайте руководства разработчика и справочник АПИ, просматривайте примеры кода и живые демо, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# Конфигурация {#configuration}

Вы можете настроить внешний вид и поведение RichText с помощью следующих свойств:

- [`menubar`](api/config/menubar.md) — показать или скрыть верхнюю строку меню
- [`toolbar`](api/config/toolbar.md) — настроить видимость панели инструментов и её кнопки
- [`fullscreenMode`](api/config/fullscreen-mode.md) — открыть редактор в полноэкранном режиме
- [`layoutMode`](api/config/layout-mode.md) — переключиться между макетами `"classic"` и `"document"`
- [`value`](api/config/value.md) — задать начальное HTML-содержимое
- [`locale`](api/config/locale.md) — применить объект локализации при инициализации
- [`defaultStyles`](api/config/default-styles.md) — задать стили по умолчанию для конкретных типов блоков
- [`imageUploadUrl`](api/config/image-upload-url.md) — задать конечную точку для загрузки изображений
- [`triggers`](api/config/triggers.md) — включить @упоминания, #теги и пользовательские триггеры выпадающих списков (см. руководство [Упоминания и теги](guides/mentions_and_tags.md))

## Режимы макета {#layout-modes}

RichText поддерживает два режима макета для области редактирования:

- `"classic"` — область редактирования занимает всю страницу

<div className="img_border">
![Редактор DHTMLX RichText в классическом режиме разметки](/img/richtext/classic_mode.png)
</div>

- `"document"` — область редактирования имитирует страницу документа

<div className="img_border">
![Редактор DHTMLX RichText в режиме документа](/img/richtext/document_mode.png)
</div>

Задайте свойство [`layoutMode`](api/config/layout-mode.md) при инициализации, чтобы выбрать режим:

~~~jsx
const editor = new richtext.Richtext("#root", {
    layoutMode: "document"
});
~~~

## Панель инструментов {#toolbar}

Панель инструментов RichText группирует элементы управления в несколько блоков, которые можно настраивать.

### Стандартные элементы управления панели инструментов {#default-toolbar-controls}

В панель инструментов RichText можно включить следующие кнопки и элементы управления:

| Кнопка              | Описание                                                                    |
|---------------------|-----------------------------------------------------------------------------|
| `undo`              | Отменяет последнее действие пользователя                                    |
| `redo`              | Повторяет ранее отменённое действие                                         |
| `style`             | Выбирает стиль текста (например, заголовок, абзац, цитата)                  |
| `font-family`       | Изменяет шрифт выделенного текста                                           |
| `font-size`         | Изменяет размер выделенного текста                                          |
| `bold`              | Применяет полужирное форматирование к выделенному тексту                    |
| `italic`            | Применяет курсивное форматирование к выделенному тексту                     |
| `underline`         | Подчёркивает выделенный текст                                               |
| `strike`            | Применяет зачёркивание                                                      |
| `subscript`         | Форматирует текст как подстрочный                                           |
| `superscript`       | Форматирует текст как надстрочный                                           |
| `text-color`        | Изменяет цвет текста                                                        |
| `background-color`  | Изменяет цвет фона (выделения) текста                                       |
| `align`             | Задаёт выравнивание текста (по левому краю, по центру, по правому краю, по ширине) |
| `indent`            | Увеличивает отступ абзаца                                                   |
| `outdent`           | Уменьшает отступ абзаца                                                     |
| `line-height`       | Изменяет межстрочный интервал                                               |
| `quote`             | Форматирует текст как цитату                                                |
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

Используйте свойство [`toolbar`](api/config/toolbar.md), чтобы задать панель инструментов в виде массива строк с именами элементов управления:

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

**Связанный пример:** [RichText. Пользовательский элемент управления и упрощённая панель инструментов](https://snippet.dhtmlx.com/wda202ih?tag=richtext)

### Добавление пользовательских элементов управления панели инструментов {#add-custom-toolbar-controls}

Передайте объект в массив [`toolbar`](api/config/toolbar.md) с одним из следующих полей:

- `type: string` — обязательное. Тип элемента управления: `"button"`, `"richselect"` или `"colorpicker"`
- `id: string` — необязательное. Идентификатор пользовательского элемента управления; не должен совпадать с существующими идентификаторами
- `icon: string` — необязательное. Имя CSS-класса иконки; используется совместно с меткой
- `label: string` — необязательное. Метка кнопки; используется совместно с иконкой
- `tooltip: string` — необязательное. Всплывающая подсказка при наведении; по умолчанию равна `label`, если не задана
- `css: string` — необязательное. CSS-класс для элемента управления. Встроенные классы: `wx-primary`, `wx-secondary`
- `handler: () => void` — необязательное. Калбэк, выполняемый при нажатии

В приведённом ниже примере сочетаются встроенные кнопки, предустановленный элемент управления типа `richselect` и две пользовательские кнопки:

~~~jsx {6-32}
new richtext.Richtext("#root", {
    toolbar: [
        // строковые записи соответствуют встроенным кнопкам
        "bold",
        "italic",
        // предустановленные кнопки принимают только { type: "button", id: string }
        {
            type: "button",
            id: "fullscreen",
        },
        // для предустановленных элементов richselect/colorpicker задайте соответствующий тип
        // записи с несовпадающим типом игнорируются
        {
            type: "richselect", // type: "button" здесь будет проигнорирован
            id: "mode",
        },
        // пользовательские кнопки (richselect/colorpicker не поддерживаются для пользовательских элементов)
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

**Связанный пример:** [RichText. Пользовательский элемент управления и упрощённая панель инструментов](https://snippet.dhtmlx.com/wda202ih?tag=richtext)

### Скрытие панели инструментов {#hide-the-toolbar}

Задайте свойству [`toolbar`](api/config/toolbar.md) значение `false`, чтобы скрыть панель инструментов:

~~~jsx {2}
new richtext.Richtext("#root", {
    toolbar: false,
    // другие свойства конфигурации
});
~~~

## Отображение строки меню {#show-the-menubar}

Включите свойство [`menubar`](api/config/menubar.md), чтобы отобразить верхнюю строку меню над панелью инструментов. Значение по умолчанию — `false`.

~~~jsx {2}
new richtext.Richtext("#root", {
    menubar: true
    // другие свойства конфигурации
});
~~~

## Задание начального содержимого {#set-the-initial-content}

Используйте свойство [`value`](api/config/value.md), чтобы передать начальное HTML-содержимое в редактор при инициализации:

~~~jsx {2}
new richtext.Richtext("#root", {
    value: "<h1>some value</h1>"
    // другие свойства конфигурации
});
~~~

Чтобы заменить содержимое после инициализации или загрузить его в формате, отличном от HTML, с использованием пользовательского энкодера, вызовите метод [`setValue()`](api/methods/set-value.md).

## Задание начальной локали {#set-the-initial-locale}

Используйте свойство [`locale`](api/config/locale.md), чтобы применить объект локализации при инициализации:

~~~jsx {2}
new richtext.Richtext("#root", {
    locale: richtext.locales.cn
    // другие свойства конфигурации
});
~~~

Подробности и динамическое переключение локали с помощью [`setLocale()`](api/methods/set-locale.md) см. в руководстве [Локализация](guides/localization.md).

## Запуск в полноэкранном режиме {#start-in-fullscreen-mode}

Задайте свойству [`fullscreenMode`](api/config/fullscreen-mode.md) значение `true`, чтобы редактор открывался в полноэкранном режиме при инициализации. Значение по умолчанию — `false`.

~~~jsx {2}
new richtext.Richtext("#root", {
    fullscreenMode: true
    // другие свойства конфигурации
});
~~~

## Настройка вставки изображений {#configure-image-insertion}

RichText поддерживает два режима вставки изображений через панель инструментов, строку меню, вставку из буфера или перетаскивание. Режим выбирается автоматически на основе свойства [`imageUploadUrl`](api/config/image-upload-url.md).

### Загрузка изображений на сервер {#upload-images-to-a-server}

Передайте URL в свойство [`imageUploadUrl`](api/config/image-upload-url.md), чтобы загружать каждое вставляемое изображение на ваш сервер. RichText отправляет файл в формате `multipart/form-data` (имя поля `upload`) и вставляет URL, возвращённый сервером:

~~~jsx {2}
new richtext.Richtext("#root", {
    imageUploadUrl: "https://example.com/upload"
    // другие свойства конфигурации
});
~~~

### Вставка изображений в строку как base64 {#insert-images-inline-as-base64}

Не задавайте [`imageUploadUrl`](api/config/image-upload-url.md) (или задайте ему пустую строку), чтобы встраивать изображения непосредственно в содержимое документа в виде data URL в формате base64. Сервер при этом не требуется:

~~~jsx {2}
new richtext.Richtext("#root", {
    // imageUploadUrl не задан, изображения вставляются в строку
    // другие свойства конфигурации
});
~~~

Встроенные изображения размером больше 1024×800 отображаются в уменьшенном виде (атрибуты `width`/`height` ограничены, чтобы вписаться в эти пределы), однако встроенные байты представляют собой исходный файл в полном разрешении — клиент не уменьшает и не перекодирует его.

:::note[Примечание]
Встроенные (base64) изображения не сохраняются при встроенном [экспорте](api/events/export.md) в форматы DOCX / PDF. Если вы используете экспорт, укажите `imageUploadUrl`, чтобы изображения ссылались на внешний ресурс.
:::

Полный контракт запроса/ответа, который должна реализовывать конечная точка загрузки, а также подробности резервного варианта со встроенными изображениями см. в разделе [Работа с сервером](guides/working_with_server.md).

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

Свойство [`defaultStyles`](api/config/default-styles.md) не применяет CSS к затронутым блокам. Применяйте соответствующие CSS-стили отдельно:

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

В этом примере все блоки `h2` используют семейство шрифтов `"Roboto"` размером 28px с фиолетовым текстом на розовом фоне. Соответствующее CSS-правило применяет те же значения к отображаемым элементам `h2`.

**Связанный пример:** [RichText. Изменение значения по умолчанию для типографики (шрифт, размер шрифта и т.д.)](https://snippet.dhtmlx.com/6u3ti01s?tag=richtext)

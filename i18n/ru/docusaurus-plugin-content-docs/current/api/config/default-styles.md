---
sidebar_label: defaultStyles
title: defaultStyles Config
description: В документации по JavaScript-библиотеке DHTMLX RichText вы найдёте информацию о конфиге defaultStyles. Изучайте руководства разработчика и справочник АПИ, запускайте примеры кода и живые демо, скачивайте бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# defaultStyles

### Описание

@short: Необязательный. Задаёт значения стилей по умолчанию для определённых типов блоков

### Использование

~~~jsx {}
defaultStyles?: {
    "*"?: { // affects all blocks, allowing you to set common properties for all of these blocks
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

:::important[Важно]
Свойство `defaultStyles` НЕ применяет CSS-стили к затронутым блокам напрямую. CSS-стили необходимо задавать отдельно:

```jsx title="index.js"
new richtext.Richtext("#root", {
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
<style>
    #root h2 {
        font-family: Roboto;
        font-size: 28px;
        color: purple;
        background: #FFC0CB;
    }
</style>
```

В этом примере всем блокам `h2` назначается шрифт `"Roboto"` с размером 28px, а также изменяются цвет текста и фона. CSS-стили также применяются к блокам `h2`.
:::

### Конфиг по умолчанию

~~~jsx
const defaultStyles = {
    "*": { "font-family": "Arial" },
    p: { "font-size": "14px" },
    blockquote: { "font-size": "14px" },
    h1: { "font-size": "32px" },
    h2: { "font-size": "24px" },
    h3: { "font-size": "18px" },
    h4: { "font-size": "16px" },
    h5: { "font-size": "14px" },
    h6: { "font-size": "12px" }
};
~~~

### Пример

~~~jsx {3-13}
// initialize RichText
new richtext.Richtext("#root", {
    defaultStyles: {
        h4: {
            "font-family": "Roboto"
        },
        h5: {
            "font-family": "Roboto"
        },
        h6: {
            "font-family": "Roboto"
        }
    },
    // other configuration properties
});
~~~

**Журнал изменений:** Свойство обновлено в v2.0

**Связанные статьи:** [Конфигурация](guides/configuration.md)

**Связанный пример:** [RichText. Changing the default value for typography (font, font size, etc.)](https://snippet.dhtmlx.com/6u3ti01s?tag=richtext)

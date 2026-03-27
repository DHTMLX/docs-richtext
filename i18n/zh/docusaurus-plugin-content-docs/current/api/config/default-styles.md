---
sidebar_label: defaultStyles
title: defaultStyles 配置项
description: 您可以在DHTMLX JavaScript RichText库的文档中了解defaultStyles配置项。浏览开发者指南和API参考，试用代码示例和在线演示，并下载DHTMLX RichText的免费30天评估版本。
---

# defaultStyles

### 描述 {#description}

@short: 可选。为特定块类型指定默认样式值

### 用法 {#usage}

~~~jsx {}
defaultStyles?: {
    "*"?: { // 影响所有块，允许为所有这些块设置通用属性
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

:::important[重要]
`defaultStyles` 属性**不会**将实际CSS应用到受影响的块上。CSS样式必须单独设置：

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

在此示例中，所有`h2`块都被指定为`"Roboto"`字体族，字号为28px，同时前景色和背景色也一并更改。CSS样式同样被应用到`h2`块上。
:::

### 默认配置 {#default-config}

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

### 示例 {#example}

~~~jsx {3-13}
// 初始化RichText
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
    // 其他配置属性
});
~~~

**更新日志：** 该属性在v2.0中进行了更新

**相关文章：** [配置](guides/configuration.md)

**相关示例：** [RichText. Changing the default value for typography (font, font size, etc.)](https://snippet.dhtmlx.com/6u3ti01s?tag=richtext)

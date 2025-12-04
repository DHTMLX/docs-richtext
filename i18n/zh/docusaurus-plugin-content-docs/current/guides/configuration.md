---
sidebar_label: 配置
title: 配置
description: 您可以在 DHTMLX JavaScript RichText 库的文档中了解配置方法。浏览开发者指南和 API 参考，尝试代码示例和在线演示，并下载 DHTMLX RichText 的 30 天免费评估版。
---

# 配置

RichText 可以通过其 API 按照您的需求进行外观和功能设置。可用的配置选项包括:

- 通过 [`menubar`](api/config/menubar.md) 属性显示或隐藏 **菜单栏**
- 使用 [`toolbar`](api/config/toolbar.md) 属性配置 **工具栏**
- 通过 [`fullscreenMode`](api/config/fullscreen-mode.md) 属性启用 **全屏模式**
- 使用 [`layoutMode`](api/config/layout-mode.md) 属性在 "classic"（经典）和 "document"（文档）模式间切换 **布局**
- 通过 [`value`](api/config/value.md) 属性设置 **初始值**
- 使用 [`locale`](api/config/locale.md) 属性选择 **初始语言**
- 通过 [`defaultStyles`](api/config/default-styles.md) 属性应用 **初始样式**

## 布局模式

RichText 编辑器提供了两种布局模式，您可以根据内容选择适合的工作环境:

- **"classic"（经典模式）**

import classic_mode from '@site/static/img/richtext/classic_mode.png';

<img
  src={classic_mode}
  alt="Classic mode"
  className="img_border"
/>

- **"document"（文档模式）**

import document_mode from '@site/static/img/richtext/document_mode.png';

<img
  src={document_mode}
  alt="Document mode"
  className="img_border"
/>

要选择模式，只需在初始化组件时在 RichText 配置中设置 [`layoutMode`](api/config/layout-mode.md) 属性:

~~~jsx
const editor = new richtext.Richtext("#root", {
    layoutMode: "document"
});
~~~

## 工具栏

RichText 的工具栏由多个控件组组成，您可以根据需求自定义这些控件。

### 默认工具栏控件

您可以在 RichText 工具栏中使用以下按钮和控件:

| 按钮                | 描述                                                                 |
|---------------------|----------------------------------------------------------------------|
| `undo`              | 撤销最近的用户操作                                                   |
| `redo`              | 重做已撤销的操作                                                     |
| `style`             | 选择文本样式（如标题、段落等）                                       |
| `font-family`       | 更改所选文本的字体                                                   |
| `font-size`         | 调整所选文本的字号                                                   |
| `bold`              | 加粗所选文本                                                         |
| `italic`            | 斜体所选文本                                                         |
| `underline`         | 给所选文本添加下划线                                                 |
| `strike`            | 添加删除线格式                                                       |
| `subscript`         | 将文本设置为下标                                                     |
| `superscript`       | 将文本设置为上标                                                     |
| `text-color`        | 更改文本颜色                                                         |
| `background-color`  | 更改文本的背景（高亮）颜色                                           |
| `align`             | 设置文本对齐方式（左、中、右、两端对齐）                             |
| `indent`            | 增加段落缩进                                                         |
| `outdent`           | 减少段落缩进                                                         |
| `line-height`       | 调整行间距                                                           |
| `quote`             | 将文本格式化为引用块                                                 |
| `bulleted-list`     | 创建无序列表                                                         |
| `numbered-list`     | 创建有序列表                                                         |
| `link`              | 插入或编辑超链接                                                     |
| `image`             | 插入图片                                                             |
| `line`              | 插入水平线                                                           |
| `clear`             | 清除所选文本的所有格式                                               |
| `print`             | 打开打印对话框                                                       |
| `fullscreen`        | 切换全屏模式                                                         |
| `mode`              | 在经典/文档两种视图模式间切换                                        |
| `shortcuts`         | 显示可用快捷键列表                                                   |
| `separator`         | 在控件之间添加视觉分隔符                                             |

工具栏的布局通过 [`toolbar`](api/config/toolbar.md) 属性设置，该属性是一个包含所需控件名称字符串的数组。

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
        // other buttons
    ],
    // other configuration properties
});
~~~

**相关示例:** [RichText. 自定义控件与简化工具栏](https://snippet.dhtmlx.com/wda202ih?tag=richtext)

### 自定义工具栏控件

如果您需要添加自定义控件，可以在 [`toolbar`](api/config/toolbar.md) 属性中包含带以下选项的对象:

- `type` - （必填）设置自定义控件类型。可用类型有:"button"、"richselect"、"colorpicker"
- `id` - （可选）自定义控件 ID（不应与内置控件 ID 冲突）
- `label` - （可选）按钮标签（可配合图标使用）
- `tooltip` - （可选）鼠标悬停时显示的提示（未设置时使用 "label" 的值）
- `css` - （可选）控件的 CSS 类名（默认支持:wx-primary, wx-secondary）
- `handler` - （可选）按钮点击时执行的回调函数

~~~jsx {6-32}
new richtext.Richtext("#root", {
    toolbar: [
        // 按钮（字符串仅表示按钮）
        "bold",
        "italic",
        // 预定义按钮（用户不能为这些按钮定义其他选项（如 label、tooltip、options 等），仅支持 { type: "button", id: string }）
        {
            type: "button",
            id: "fullscreen",
        },
        // 如果想使用预定义控件（如 richselect/colorpicker），用户必须指定正确的 type
        // 不匹配的 type 将被忽略（不会添加到工具栏）
        {
            type: "richselect", // type: "button" - 不正确，将被忽略
            id: "mode",
        },
        // 自定义按钮（支持的选项如下）
        // 目前仅支持自定义按钮（暂不支持自定义 richselect/colorpicker）
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

**相关示例:** [RichText. 自定义控件与简化工具栏](https://snippet.dhtmlx.com/wda202ih?tag=richtext)

### 隐藏工具栏

如需隐藏工具栏，只需将 [`toolbar`](api/config/toolbar.md) 属性设置为 `false`：

~~~jsx {2}
new richtext.Richtext("#root", {
    toolbar: false,
    // other configuration properties
});
~~~

## 默认样式

可以通过 [`defaultStyles`](api/config/default-styles.md) 属性为编辑器中的特定块类型设置默认样式值。

~~~jsx {}
defaultStyles?: boolean | {
    "*"?: { // 影响所有块，可为所有这些块设置通用属性
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

`defaultStyles` 属性实际上并不会为块应用 CSS--它只是设置样式值。您仍需单独添加 CSS 样式:

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

在此示例中，所有 `h2` 块都将获得 "Roboto" 字体、28px 字号，以及指定的前景色和背景色。CSS 规则会应用到 `h2` 块上。

**相关示例:** [RichText. 更改排版（字体、字号等）的默认值](https://snippet.dhtmlx.com/6u3ti01s?tag=richtext)

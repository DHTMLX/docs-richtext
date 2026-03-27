---
sidebar_label: 配置
title: 配置
description: 您可以在DHTMLX JavaScript RichText库的文档中了解配置相关内容。浏览开发指南和API参考，查看代码示例和在线演示，并下载DHTMLX RichText的免费30天评估版本。
---

# 配置 {#configuration}

您可以通过相应的API配置RichText的外观和功能。可用的参数允许您：

- 使用[`menubar`](api/config/menubar.md)属性显示/隐藏**menubar**
- 使用[`toolbar`](api/config/toolbar.md)属性配置**toolbar**
- 使用[`fullscreenMode`](api/config/fullscreen-mode.md)属性启用**全屏模式**
- 使用[`layoutMode`](api/config/layout-mode.md)属性在"classic"和"document"模式之间切换**布局**
- 使用[`value`](api/config/value.md)属性指定**初始值**
- 使用[`locale`](api/config/locale.md)属性指定**初始语言环境**
- 使用[`defaultStyles`](api/config/default-styles.md)属性应用**初始样式**

## 布局模式 {#layout-modes}

RichText编辑器有两种布局模式，您可以选择最适合创作内容的工作界面：

- **"classic"**

<div className="img_border">
![经典模式](./../assets/richtext/classic_mode.png)
</div>

- **"document"**

<div className="img_border">
![文档模式](./../assets/richtext/document_mode.png)
</div>

要指定所需模式，需要在组件初始化时在RichText配置对象的[`layoutMode`](api/config/layout-mode.md)属性中进行定义：

~~~jsx
const editor = new richtext.Richtext("#root", {
    layoutMode: "document"
});
~~~

## Toolbar {#toolbar}

RichText的toolbar由若干控件块组成，可根据您的需求进行调整。

### 默认toolbar控件 {#default-toolbar-controls}

您可以在RichText的toolbar中指定以下按钮和控件：

| 按钮                | 描述                                                                        |
|---------------------|-----------------------------------------------------------------------------|
| `undo`              | 撤销最近的用户操作                                                          |
| `redo`              | 重新应用之前撤销的操作                                                      |
| `style`             | 允许选择文本样式（如标题、段落等）                                          |
| `font-family`       | 更改所选文本的字体                                                          |
| `font-size`         | 调整所选文本的大小                                                          |
| `bold`              | 对所选文本应用粗体格式                                                      |
| `italic`            | 对所选文本应用斜体格式                                                      |
| `underline`         | 为所选文本添加下划线                                                        |
| `strike`            | 应用删除线格式                                                              |
| `subscript`         | 将文本格式化为下标                                                          |
| `superscript`       | 将文本格式化为上标                                                          |
| `text-color`        | 更改文本颜色                                                                |
| `background-color`  | 更改文本的背景（高亮）颜色                                                  |
| `align`             | 设置文本对齐方式（左对齐、居中、右对齐、两端对齐）                          |
| `indent`            | 增加段落缩进                                                                |
| `outdent`           | 减少段落缩进                                                                |
| `line-height`       | 调整行间距（行高）                                                          |
| `quote`             | 将文本格式化为块引用                                                        |
| `bulleted-list`     | 创建无序列表                                                                |
| `numbered-list`     | 创建有序列表                                                                |
| `link`              | 插入或编辑超链接                                                            |
| `image`             | 插入图片                                                                    |
| `line`              | 插入水平线                                                                  |
| `clear`             | 清除所选文本的所有格式                                                      |
| `print`             | 打开打印对话框                                                              |
| `fullscreen`        | 切换全屏模式                                                                |
| `mode`              | 在两种视图模式之间切换：经典/文档                                           |
| `shortcuts`         | 显示可用键盘快捷键列表                                                      |
| `separator`         | 在控件之间添加视觉分隔符                                                    |

toolbar结构通过[`toolbar`](api/config/toolbar.md)属性定义，该属性是一个包含控件名称字符串的数组。

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
        // 其他按钮
    ],
    // 其他配置属性
});
~~~

**相关示例：** [RichText. Custom control and simplified toolbar](https://snippet.dhtmlx.com/wda202ih?tag=richtext)

### 自定义toolbar控件 {#custom-toolbar-controls}

您也可以在[`toolbar`](api/config/toolbar.md)属性中以对象形式指定自定义控件，支持以下参数：

- `type` -（必填）指定自定义控件类型。可用类型：`"button"`、`"richselect"`、`"colorpicker"`
- `id` -（可选）自定义控件ID（不能与现有控件ID重复）
- `label` -（可选）按钮标签（与图标组合使用）
- `tooltip` -（可选）鼠标悬停时显示的提示（如未指定，则使用"label"的值）
- `css` -（可选）分配给控件的CSS类名（默认支持的类：wx-primary、wx-secondary）
- `handler` -（可选）点击按钮时执行的回调函数

~~~jsx {6-32}
new richtext.Richtext("#root", {
    toolbar: [
        // 按钮（字符串仅代表按钮）
        "bold",
        "italic",
        // 预定义按钮（用户无法为这些按钮定义其他选项（无标签、提示、选项等），只能使用 ({ type: "button", id: string })）
        {
            type: "button",
            id: "fullscreen",
        },
        // 若要使用预定义控件，用户必须指定正确的类型（如 richselect/colorpicker）
        // 类型不匹配将被忽略（不会添加到toolbar）
        {
            type: "richselect", // type: "button" - 不正确，将被忽略
            id: "mode",
        },
        // 自定义按钮（支持的选项如下）
        // 用户只能定义自定义按钮（目前不支持 richselect/colorpicker）
        {
            type: "button",
            id: "some",
            label: "Some",
            handler: () => {/* 自定义逻辑 */}
        },
        {
            type: "button",
            id: "other",
            icon: "wxo-help",
            label: "Other",
            tooltip: "Some tooltip",
            handler: () => {/* 自定义逻辑 */}
        }
    ],
    // 其他配置属性
});
~~~

**相关示例：** [RichText. Custom control and simplified toolbar](https://snippet.dhtmlx.com/wda202ih?tag=richtext)

### 隐藏Toolbar {#hide-toolbar}

如果需要隐藏toolbar，将[`toolbar`](api/config/toolbar.md)属性设置为`false`：

~~~jsx {2}
new richtext.Richtext("#root", {
    toolbar: false,
    // 其他配置属性
});
~~~

## 默认样式 {#default-styles}

您可以使用[`defaultStyles`](api/config/default-styles.md)属性为编辑器中的特定块类型应用默认样式值。

~~~jsx {}
defaultStyles?: boolean | {
    "*"?: { // 影响所有块，允许为所有块设置公共属性
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

`defaultStyles`属性**不会**直接为受影响的块设置实际的CSS样式。CSS样式需要单独应用：

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

在此示例中，所有`h2`块均使用`"Roboto"`字体族，字体大小为28px，前景色和背景色均已更改。CSS样式同样应用于`h2`块。

**相关示例：** [RichText. Changing the default value for typography (font, font size, etc.)](https://snippet.dhtmlx.com/6u3ti01s?tag=richtext)

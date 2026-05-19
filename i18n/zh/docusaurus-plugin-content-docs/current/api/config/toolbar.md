---
sidebar_label: toolbar
title: toolbar Config
description: 您可以在 DHTMLX JavaScript RichText 库的文档中了解 toolbar 配置项。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX RichText 的免费 30 天评估版本。
---

# toolbar

### Description

@short: Optional. Enables toolbar and allows users to specify/configure buttons displayed within toolbar

### Usage

~~~jsx {}
toolbar?: boolean | Array<string | { id: string, type: string, label?: string, tooltip?: string, css?: string, handler?: () => any }>;
~~~

#### 工具栏中的可用按钮

您可以在 RichText 工具栏中指定以下按钮：

| 按钮                | 描述                                                                        |
|---------------------|-----------------------------------------------------------------------------|
| `undo`              | 撤销最近一次用户操作。                                                      |
| `redo`              | 重新应用之前撤销的操作。                                                    |
| `style`             | 允许选择文本样式（例如：标题、段落等）。                                    |
| `font-family`       | 更改所选文本的字体。                                                        |
| `font-size`         | 调整所选文本的字号。                                                        |
| `bold`              | 对所选文本应用粗体格式。                                                    |
| `italic`            | 对所选文本应用斜体格式。                                                    |
| `underline`         | 为所选文本添加下划线。                                                      |
| `strike`            | 对文本应用删除线格式。                                                      |
| `subscript`         | 将文本格式化为下标。                                                        |
| `superscript`       | 将文本格式化为上标。                                                        |
| `text-color`        | 更改文本颜色。                                                              |
| `background-color`  | 更改文本的背景（高亮）颜色。                                                |
| `align`             | 设置文本对齐方式（左对齐、居中、右对齐、两端对齐）。                        |
| `indent`            | 增加文本块缩进。                                                            |
| `outdent`           | 减少段落缩进。                                                              |
| `line-height`       | 调整行间距（行高）。                                                        |
| `quote`             | 将文本格式化为块引用。                                                      |
| `bulleted-list`     | 创建无序列表。                                                              |
| `numbered-list`     | 创建有序列表。                                                              |
| `link`              | 插入超链接。                                                                |
| `image`             | 插入图片。                                                                  |
| `line`              | 插入水平分隔线。                                                            |
| `clear`             | 移除所选文本的所有格式。                                                    |
| `print`             | 打开打印对话框。                                                            |
| `fullscreen`        | 切换全屏模式。                                                              |
| `mode`              | 在[布局模式](api/config/layout-mode.md)之间切换（classic/document）        |
| `shortcuts`         | 显示可用键盘快捷键列表。                                                    |
| `separator`         | 在工具栏分组之间添加视觉分隔符。                                            |

您可以使用这些字符串按如下方式配置工具栏按钮：

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

#### 工具栏中的自定义按钮

您可以将自定义按钮指定为包含以下参数的对象：

- `type` - （必填）指定自定义控件类型。可用类型：`"button"`、`"richselect"`、`"colorpicker"`
- `id` - （可选）自定义控件 ID（不能与现有控件 ID 重复）
- `label` - （可选）按钮标签（与图标组合显示）
- `tooltip` - （可选）悬停时显示的提示文字（未指定时使用 "label" 的值）
- `css` - （可选）分配给控件的 CSS 类名（默认支持的类：wx-primary、wx-secondary）
- `handler` - （可选）点击按钮时执行的回调函数

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

#### 隐藏工具栏

如需隐藏工具栏，请将 `toolbar` 属性设置为 `false`，如下所示：

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

:::tip
默认工具栏控件由 RichText 组件导出，可通过 `richtext.defaultToolbarButtons` 访问。

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

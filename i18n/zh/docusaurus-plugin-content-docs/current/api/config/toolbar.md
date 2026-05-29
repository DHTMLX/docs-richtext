---
sidebar_label: toolbar
title: toolbar Config
description: 您可以在 DHTMLX JavaScript RichText 库的文档中了解 toolbar 配置项。浏览开发指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX RichText 的免费 30 天评估版本。
---

# toolbar

### 描述

@short: 可选。启用工具栏，并允许用户指定/配置工具栏中显示的按钮

### 用法

~~~jsx {}
toolbar?: boolean | Array<string | { id: string, type: string, label?: string, tooltip?: string, css?: string, handler?: () => any }>;
~~~

#### 工具栏中的可用按钮

您可以在 RichText 工具栏中指定以下按钮：

| 按钮                | 描述                                                                        |
|---------------------|-----------------------------------------------------------------------------|
| `undo`              | 撤销最近的用户操作。                                                        |
| `redo`              | 重新应用之前撤销的操作。                                                    |
| `style`             | 允许选择文本样式（例如标题、段落等）。                                      |
| `font-family`       | 更改所选文本的字体。                                                        |
| `font-size`         | 调整所选文本的大小。                                                        |
| `bold`              | 对所选文本应用粗体格式。                                                    |
| `italic`            | 对所选文本应用斜体格式。                                                    |
| `underline`         | 为所选文本添加下划线。                                                      |
| `strike`            | 应用删除线格式。                                                            |
| `subscript`         | 将文本格式设置为下标。                                                      |
| `superscript`       | 将文本格式设置为上标。                                                      |
| `text-color`        | 更改文本颜色。                                                              |
| `background-color`  | 更改文本的背景（高亮）颜色。                                                |
| `align`             | 设置文本对齐方式（左对齐、居中、右对齐、两端对齐）。                        |
| `indent`            | 增加文本块缩进。                                                            |
| `outdent`           | 减少段落缩进。                                                              |
| `line-height`       | 调整行间距（行高）。                                                        |
| `quote`             | 将文本格式设置为块引用。                                                    |
| `bulleted-list`     | 创建项目符号列表。                                                          |
| `numbered-list`     | 创建编号列表。                                                              |
| `link`              | 插入超链接。                                                                |
| `image`             | 插入图像。                                                                  |
| `line`              | 插入水平线。                                                                |
| `clear`             | 移除所选文本的所有格式。                                                    |
| `print`             | 打开打印对话框。                                                            |
| `fullscreen`        | 切换全屏模式。                                                              |
| `mode`              | 在[布局模式](api/config/layout-mode.md)之间切换（经典/文档）                |
| `shortcuts`         | 显示可用键盘快捷键列表。                                                    |
| `separator`         | 在工具栏组之间添加视觉分隔符。                                              |

您可以使用这些字符串按如下方式配置工具栏按钮：

~~~jsx {2-7}
new richtext.Richtext("#root", {
    toolbar: [
        "bold",
        "italic",
        "separator",
        // 其他按钮
    ],
    // 其他配置属性
});
~~~

#### 工具栏中的自定义按钮

您可以将自定义按钮指定为具有以下参数的对象：

- `type` - （必填）指定自定义控件类型。可用的类型有：`"button"`、`"richselect"`、`"colorpicker"`
- `id` - （可选）自定义控件 ID（不能与现有控件 ID 重复）
- `label` - （可选）按钮标签（与图标组合使用）
- `tooltip` - （可选）悬停时显示的提示信息（若未指定，则使用 "label" 的值）
- `css` - （可选）分配给控件的 CSS 类名（默认支持的类：wx-primary、wx-secondary）
- `handler` - （可选）点击按钮时执行的回调函数

~~~jsx {6-32}
new richtext.Richtext("#root", {
    toolbar: [
        // 按钮（字符串仅表示按钮）
        "bold",
        "italic",
        // 预定义按钮（用户无法为这些按钮定义其他选项（无标签、提示信息、选项等），因此只能使用 ({ type: "button", id: string })）
        {
            type: "button",
            id: "fullscreen",
        },
        // 如果用户想使用预定义控件（例如 richselect/colorpicker），必须指定正确的类型
        // 类型不匹配将被忽略（不添加到工具栏）
        {
            type: "richselect", // type: "button" - 错误，将被忽略
            id: "mode",
        },
        // 自定义按钮（支持的选项如下）
        // 用户只能定义自定义按钮（目前不支持 richselect/colorpicker）
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
    // 其他配置属性
});
~~~

#### 隐藏工具栏

如果需要隐藏工具栏，请将 `toolbar` 属性设置为 `false`，如下所示：

~~~jsx {2}
new richtext.Richtext("#root", {
    toolbar: false
    // 其他配置属性
});
~~~

### 默认配置

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
默认工具栏控件由 RichText widget 导出，可通过 `richtext.defaultToolbarButtons` 访问。

```jsx{4}
// 初始化 RichText
new richtext.Richtext("#root", {
    toolbar: [
        ...richtext.defaultToolbarButtons,
        {
            type: "button",
            id: "btn1", // 按钮 ID（若要应用自定义逻辑，不能与现有按钮 ID 重复）
            icon: "wxo-help", // 按钮图标（与标签组合使用）
            css: "rounded", // 分配给控件的 CSS 类名（默认支持的类：wx-primary、wx-secondary）
            label: "Custom button", // 按钮标签（与图标组合使用）
            tooltip: "Some tooltip", // 悬停时显示的提示信息（若未指定，则使用 "label" 的值）
        }
    ]
    // 其他配置属性
});
```
:::

### 示例

~~~jsx {3-18}
// 初始化 RichText
new richtext.Richtext("#root", {
    toolbar: [
        "bold",
        "italic",
        "separator",
        // 自定义按钮（以下使用了所有支持的选项）
        // 用户只能定义自定义按钮（目前不支持 richselect/colorpicker）
        {
            type: "button",
            id: "btn1", // 按钮 ID（若要应用自定义逻辑，不能与现有按钮 ID 重复）
            icon: "wxo-help", // 按钮图标（与标签组合使用）
            css: "rounded", // 分配给控件的 CSS 类名（默认支持的类：wx-primary、wx-secondary）
            label: "Custom button", // 按钮标签（与图标组合使用）
            tooltip: "Some tooltip", // 悬停时显示的提示信息（若未指定，则使用 "label" 的值）
            handler: () => ..., // 附加到此按钮的自定义逻辑
        }
    ]
    // 其他配置属性
});
~~~

**更新日志：** 该属性在 v2.0 中添加

**相关文章：** [配置](guides/configuration.md)

**相关示例：** [RichText. Custom control and simplified toolbar](https://snippet.dhtmlx.com/wda202ih?tag=richtext)

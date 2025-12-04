---
sidebar_label: toolbar
title: toolbar 配置
description: 探索 DHTMLX JavaScript RichText 库文档中的 toolbar 配置。查看开发者指南、API 参考，尝试代码示例和实时演示，并获取 DHTMLX RichText 免费 30 天试用。
---

# toolbar

### 描述

@short: 可选。启用工具栏，让用户选择并设置显示的按钮。

### 用法

~~~jsx {}
toolbar?: boolean | Array<string | { id: string, type: string, label?: string, tooltip?: string, css?: string, handler?: () => any }>;
~~~

#### 工具栏中可用的按钮

以下是可以添加到 RichText 工具栏的按钮:

| 按钮                | 描述                                                                      |
|---------------------|---------------------------------------------------------------------------|
| `undo`              | 撤销最后一次用户操作。                                                     |
| `redo`              | 重做之前撤销的操作。                                                       |
| `style`             | 选择文本样式，如标题或段落。                                               |
| `font-family`       | 更改选中文本的字体。                                                       |
| `font-size`         | 更改选中文本的字号。                                                       |
| `bold`              | 使选中文本加粗。                                                           |
| `italic`            | 使选中文本倾斜。                                                           |
| `underline`         | 给选中文本添加下划线。                                                     |
| `strike`            | 添加删除线效果。                                                           |
| `subscript`         | 格式化文本为下标。                                                         |
| `superscript`       | 格式化文本为上标。                                                         |
| `text-color`        | 更改文本颜色。                                                             |
| `background-color`  | 更改文本的背景高亮颜色。                                                   |
| `align`             | 设置文本对齐方式:左对齐、居中、右对齐或两端对齐。                        |
| `indent`            | 增加文本块缩进。                                                           |
| `outdent`           | 减少段落缩进。                                                             |
| `line-height`       | 调整行间距。                                                               |
| `quote`             | 格式化文本为引用块。                                                       |
| `bulleted-list`     | 创建无序列表。                                                             |
| `numbered-list`     | 创建有序列表。                                                             |
| `link`              | 插入超链接。                                                               |
| `image`             | 插入图片。                                                                 |
| `line`              | 插入水平线。                                                               |
| `clear`             | 清除选中文本的所有格式。                                                   |
| `print`             | 打开打印对话框。                                                           |
| `fullscreen`        | 切换全屏模式。                                                             |
| `mode`              | 切换 [布局模式](api/config/layout-mode.md)（经典/文档）。                  |
| `shortcuts`         | 显示键盘快捷键列表。                                                       |
| `separator`         | 在工具栏组之间添加视觉分隔符。                                             |

你可以用这些字符串来配置工具栏按钮，例如:

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

自定义按钮可以作为对象设置，包含以下选项:

- `type` - （必需）定义控件类型。选项有 `"button"`、`"richselect"`、`"colorpicker"`。
- `id` - （可选）唯一控件 ID（不应与已有 ID 冲突）。
- `label` - （可选）按钮的文本标签（显示在图标旁）。
- `tooltip` - （可选）鼠标悬停时显示的文本（若未设置，默认为 label）。
- `css` - （可选）控件的 CSS 类（默认类包括 wx-primary、wx-secondary）。
- `handler` - （可选）按钮点击时触发的函数。

~~~jsx {6-32}
new richtext.Richtext("#root", {
    toolbar: [
        // 按钮（字符串仅表示按钮）
        "bold",
        "italic",
        // 预定义按钮（用户不能为这些按钮添加额外选项如标签或提示，只能使用 { type: "button", id: string }）
        {
            type: "button",
            id: "fullscreen",
        },
        // 用户必须为预定义控件指定正确的类型（例如 richselect/colorpicker）
        // 类型错误的控件将不会被添加
        {
            type: "richselect", // 如果写成 type: "button" - 会被忽略
            id: "mode",
        },
        // 自定义按钮（仅支持这些选项）
        // 目前只允许自定义按钮（不支持 richselect/colorpicker）
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

#### 隐藏工具栏

要隐藏工具栏，只需将 `toolbar` 属性设置为 `false`，如下所示:

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
默认的工具栏控件随 RichText 组件提供，可以通过 `richtext.defaultToolbarButtons` 访问。

```jsx{4}
// 初始化 RichText
new richtext.Richtext("#root", {
    toolbar: [
        ...richtext.defaultToolbarButtons,
        {
            type: "button",
            id: "btn1", // 自定义逻辑的唯一按钮 ID
            icon: "wxo-help", // 图标，显示在标签旁
            css: "rounded", // 用于样式的 CSS 类（默认支持类：wx-primary, wx-secondary）
            label: "Custom button", // 图标旁的按钮标签
            tooltip: "Some tooltip", // 悬停提示（缺省时为标签）
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
        // 自定义按钮（此处展示所有支持的选项）
        // 目前只支持自定义按钮（不支持 richselect/colorpicker）
        {
            type: "button",
            id: "btn1", // 自定义逻辑的唯一按钮 ID
            icon: "wxo-help", // 图标，显示在标签旁
            css: "rounded", // 用于样式的 CSS 类（默认支持类：wx-primary, wx-secondary）
            label: "Custom button", // 图标旁的按钮标签
            tooltip: "Some tooltip", // 悬停提示（缺省时为标签）
            handler: () => ..., // 该按钮的自定义逻辑
        }
    ]
    // 其他配置属性
});
~~~

**变更日志:** 此属性在 v2.0 版本引入

**相关文档:** [配置](guides/configuration.md)

**相关示例:** [RichText. 自定义控件和简化工具栏](https://snippet.dhtmlx.com/wda202ih?tag=richtext)

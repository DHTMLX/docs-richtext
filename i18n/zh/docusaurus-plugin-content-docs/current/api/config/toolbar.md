---
sidebar_label: toolbar
title: toolbar 配置项
description: 您可以在DHTMLX JavaScript RichText库的文档中了解toolbar配置项。浏览开发者指南和API参考，试用代码示例和在线演示，并下载DHTMLX RichText的免费30天评估版本。
---

# toolbar

### 描述 {#description}

@short: 可选。启用toolbar并允许用户指定/配置toolbar中显示的按钮

### 用法 {#usage}

~~~jsx {}
toolbar?: boolean | Array<string | { id: string, type: string, label?: string, tooltip?: string, css?: string, handler?: () => any }>;
~~~

#### toolbar中的可用按钮 {#available-buttons-within-toolbar}

您可以在RichText的toolbar中指定以下按钮：

| 按钮                | 描述                                                                        |
|---------------------|-----------------------------------------------------------------------------|
| `undo`              | 撤销最近的用户操作。                                                         |
| `redo`              | 重做之前撤销的操作。                                                         |
| `style`             | 允许选择文本样式（例如标题、段落等）。                                        |
| `font-family`       | 更改所选文本的字体。                                                         |
| `font-size`         | 调整所选文本的大小。                                                         |
| `bold`              | 对所选文本应用粗体格式。                                                     |
| `italic`            | 对所选文本应用斜体格式。                                                     |
| `underline`         | 为所选文本添加下划线。                                                       |
| `strike`            | 应用删除线格式。                                                             |
| `subscript`         | 将文本格式化为下标。                                                         |
| `superscript`       | 将文本格式化为上标。                                                         |
| `text-color`        | 更改文本颜色。                                                               |
| `background-color`  | 更改文本的背景（高亮）颜色。                                                  |
| `align`             | 设置文本对齐方式（左对齐、居中、右对齐、两端对齐）。                           |
| `indent`            | 增加文本块缩进。                                                             |
| `outdent`           | 减少段落缩进。                                                               |
| `line-height`       | 调整行间距（行高）。                                                         |
| `quote`             | 将文本格式化为引用块。                                                       |
| `bulleted-list`     | 创建项目符号列表。                                                           |
| `numbered-list`     | 创建编号列表。                                                               |
| `link`              | 插入超链接。                                                                 |
| `image`             | 插入图片。                                                                   |
| `line`              | 插入水平分割线。                                                             |
| `clear`             | 移除所选文本的所有格式。                                                     |
| `print`             | 打开打印对话框。                                                             |
| `fullscreen`        | 切换全屏模式。                                                               |
| `mode`              | 在[布局模式](api/config/layout-mode.md)之间切换（classic/document）          |
| `shortcuts`         | 显示可用键盘快捷键列表。                                                     |
| `separator`         | 在toolbar分组之间添加视觉分隔符。                                            |

您可以使用这些字符串按如下方式配置toolbar按钮：

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

#### toolbar中的自定义按钮 {#custom-buttons-within-toolbar}

您可以将自定义按钮指定为具有以下参数的对象：

- `type` -（必填）指定自定义控件类型。可用类型如下：`"button"`、`"richselect"`、`"colorpicker"`
- `id` -（可选）自定义控件ID（不能与现有控件ID重复）
- `label` -（可选）按钮标签（与图标组合使用）
- `tooltip` -（可选）悬停时显示的工具提示（如未指定，则使用"label"的值）
- `css` -（可选）分配给控件的CSS类名（默认支持的类：wx-primary、wx-secondary）
- `handler` -（可选）按钮被点击时执行的回调函数

~~~jsx {6-32}
new richtext.Richtext("#root", {
    toolbar: [
        // 按钮（字符串仅代表按钮）
        "bold",
        "italic",
        // 预定义按钮（用户无法为这些按钮定义其他选项，如标签、工具提示、选项等，因此只能使用 ({ type: "button", id: string })）
        {
            type: "button",
            id: "fullscreen",
        },
        // 如果用户想使用预定义控件（如richselect/colorpicker），必须指定正确的类型
        // 类型不匹配将被忽略（不会添加到toolbar中）
        {
            type: "richselect", // type: "button" - 不正确，将被忽略
            id: "mode",
        },
        // 自定义按钮（支持的选项见下方）
        // 用户只能定义自定义按钮（目前不支持richselect/colorpicker）
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

#### 隐藏toolbar {#hide-toolbar}

如果需要隐藏toolbar，请将`toolbar`属性设置为`false`，如下所示：

~~~jsx {2}
new richtext.Richtext("#root", {
    toolbar: false
    // 其他配置属性
});
~~~

### 默认配置 {#default-config}

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

:::tip[提示]
默认toolbar控件由RichText组件导出，可通过`richtext.defaultToolbarButtons`访问。

```jsx{4}
// 初始化RichText
new richtext.Richtext("#root", {
    toolbar: [
        ...richtext.defaultToolbarButtons,
        {
            type: "button",
            id: "btn1", // 按钮ID（如需应用自定义逻辑，不能与现有按钮ID重复）
            icon: "wxo-help", // 按钮图标（与标签组合使用）
            css: "rounded", // 分配给控件的CSS类名（默认支持的类：wx-primary、wx-secondary）
            label: "Custom button", // 按钮标签（与图标组合使用）
            tooltip: "Some tooltip", // 悬停时显示的工具提示（如未指定，则使用"label"的值）
        }
    ]
    // 其他配置属性
});
```
:::

### 示例 {#example}

~~~jsx {3-18}
// 初始化RichText
new richtext.Richtext("#root", {
    toolbar: [
        "bold",
        "italic",
        "separator",
        // 自定义按钮（以下使用了所有支持的选项）
        // 用户只能定义自定义按钮（目前不支持richselect/colorpicker）
        {
            type: "button",
            id: "btn1", // 按钮ID（如需应用自定义逻辑，不能与现有按钮ID重复）
            icon: "wxo-help", // 按钮图标（与标签组合使用）
            css: "rounded", // 分配给控件的CSS类名（默认支持的类：wx-primary、wx-secondary）
            label: "Custom button", // 按钮标签（与图标组合使用）
            tooltip: "Some tooltip", // 悬停时显示的工具提示（如未指定，则使用"label"的值）
            handler: () => ..., // 绑定到此按钮的自定义逻辑
        }
    ]
    // 其他配置属性
});
~~~

**更新日志：** 该属性在v2.0中新增

**相关文章：** [配置](guides/configuration.md)

**相关示例：** [RichText. Custom control and simplified toolbar](https://snippet.dhtmlx.com/wda202ih?tag=richtext)

---
sidebar_label: setValue()
title: setValue 方法
description: 您可以在 DHTMLX JavaScript RichText 库的文档中了解 setValue 方法。浏览开发指南和 API 参考，尝试代码示例和在线演示，并下载 DHTMLX RichText 的免费 30 天评估版本。
---

# setValue()

### 描述 {#description}

@short: 向 RichText 应用新值

### 用法 {#usage}

~~~jsx {}
setValue: (value: string, encoder?: any): void;
~~~

### 参数 {#parameters}

- `value` - （必填）要插入到 RichText 中的值
- `encoder` - （可选）用于将值从自定义格式解码的自定义解析器。支持以下格式：`html`（默认）、`text` 和 `markdown`

您可以通过以下方式获取所需的 encoder：

```jsx
const fromTextEncoder = richtext.text.fromText;             // 文本 encoder
const fromHTMLEncoder = richtext.html.fromHTML;             // html encoder
const fromMarkdownEncoder = richtext.markdown.fromMarkdown; // markdown encoder
```

### 示例 {#example}

~~~jsx {7-8}
const editor = new richtext.Richtext("#root", {
    // 配置属性
});

const editor_value = "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos."

const fromTextEncoder = richtext.text.fromText;
editor.setValue(editor_value, fromTextEncoder);
~~~

**变更日志：** 该方法在 v2.0 中进行了更新。`mode` 参数已被移除，新增了 `encoder` 参数

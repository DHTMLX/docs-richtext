---
sidebar_label: insertValue()
title: insertValue 方法
description: 您可以在 DHTMLX JavaScript RichText 库的文档中了解 insertValue 方法。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX RichText 的免费 30 天评估版本。
---

# insertValue()

### 描述 {#description}

@short: 在当前光标位置插入文本、Markdown 或 HTML 内容，或替换选中的文本

### 用法 {#usage}

~~~jsx {}
insertValue: (value: string, encoder?: any): void;
~~~

### 参数 {#parameters}

- `value` - （必填）要插入到 RichText 当前光标位置的值。如果存在选区，则选区内容将被新值替换
- `encoder` - （可选）用于解码插入值的解析器。支持以下格式：`html`（默认）、`text` 和 `markdown`

可通过以下方式获取所需的 encoder：

```jsx
const fromTextEncoder = richtext.text.fromText;             // 文本编码器
const fromHTMLEncoder = richtext.html.fromHTML;             // html 编码器
const fromMarkdownEncoder = richtext.markdown.fromMarkdown; // markdown 编码器
```

### 示例 {#example}

~~~jsx {6}
const editor = new richtext.Richtext("#root", {
    // 配置属性
});

// 在光标位置插入带有自定义属性的 HTML 链接
editor.insertValue("<a href=\"https://example.com\" title=\"Example\">link</a>");
~~~

插入的内容作为单条历史记录添加，可通过一次**撤销**操作还原。

**变更日志：** 该方法于 v2.1 版本中新增

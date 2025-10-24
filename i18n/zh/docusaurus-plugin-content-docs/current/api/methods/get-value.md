---
sidebar_label: getValue()
title: getValue 方法
description: 您可以在 DHTMLX JavaScript RichText 库的文档中了解 getValue 方法。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载免费 30 天评估版本的 DHTMLX RichText。
---

# getValue()

### 描述

@short: 获取 RichText 编辑器当前的值

### 用法

~~~jsx {}
getValue(encoder?: any): string;
~~~

### 参数

- `encoder` - （可选）用于将 RichText 内容转换为特定格式的解析器。可用选项包括 `html`（默认）和 `text`

要获取所需的编码器，请使用以下代码:

```jsx
const toTextEncoder = richtext.text.toText; // 文本编码器
const toHTMLEncoder = richtext.html.toHTML; // HTML 编码器
```

### 示例

~~~jsx {6-8}
const editor = new richtext.Richtext("#root", {
    value: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos." // 设置默认值（HTML 格式）
    // 其他配置属性
});

const toTextEncoder = richtext.text.toText;
const editor_value = editor.getValue(toTextEncoder);
console.log(editor_value);
~~~

**更新日志:** 此方法在 v2.0 版本中进行了更新。移除了 `mode` 参数，新增了 `encoder` 参数

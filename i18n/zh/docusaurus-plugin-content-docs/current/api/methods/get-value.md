---
sidebar_label: getValue()
title: getValue 方法
description: 您可以在 DHTMLX JavaScript RichText 库的文档中了解 getValue 方法。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX RichText 的免费 30 天评估版本。
---

# getValue()

### 描述

@short: 返回 RichText 的值

### 用法

~~~jsx {}
getValue(encoder?: any): string;
~~~

### 参数

- `encoder` - （可选）用于将 RichText 内容编码为自定义格式的解析器。支持以下格式：`html`（默认）和 `text`

您可以通过以下方式获取所需的编码器：

```jsx
const toTextEncoder = richtext.text.toText; // text 编码器
const toHTMLEncoder = richtext.html.toHTML; // html 编码器
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

**更新日志：** 该方法在 v2.0 中进行了更新。`mode` 参数已移除，新增了 `encoder` 参数

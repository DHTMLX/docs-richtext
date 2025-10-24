---
sidebar_label: setValue()
title: setValue 方法
description: 您可以在 DHTMLX JavaScript RichText 库的文档中了解 setValue 方法。浏览开发者指南和 API 参考，尝试代码示例和在线演示，并下载 DHTMLX RichText 的免费 30 天试用版。
---

# setValue()

### 描述

@short: 使用新值更新 RichText 内容

### 用法

~~~jsx {}
setValue: (value: string, encoder?: any): void;
~~~

### 参数

- `value` - （必填）要插入到 RichText 中的内容
- `encoder` - （可选）用于将 RichText 内容编码为特定格式的自定义解析器。可用格式包括:`html`（默认）和 `text`

您可以通过以下方式获取所需的编码器:

```jsx
const fromTextEncoder = richtext.text.fromText; // text 编码器
const fromHTMLEncoder = richtext.html.fromHTML; // html 编码器
```

### 示例

~~~jsx {7-8}
const editor = new richtext.Richtext("#root", {
    // 配置属性
});

const editor_value = "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos."

const fromTextEncoder = richtext.text.fromText;
editor.setValue(editor_value, fromTextEncoder);
~~~

**更新日志:** 该方法在 v2.0 版本中进行了更新。移除了 `mode` 参数，新增了 `encoder` 参数。

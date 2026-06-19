---
sidebar_label: layoutMode
title: layoutMode 配置项
description: 您可以在 DHTMLX JavaScript RichText 库的文档中了解 layoutMode 配置项。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX RichText 的免费 30 天评估版本。
---

# layoutMode

### 描述 {#description}

@short: 可选。指定主编辑区域的布局模式

### 用法 {#usage}

~~~jsx {}
layoutMode: "classic" | "document";
~~~

`"classic"` 模式将填充整个编辑区域。`"document"` 模式将编辑区域显示为文档页面。

### 默认配置 {#default-config}

~~~jsx
layoutMode: "classic";
~~~

### 示例 {#example}

~~~jsx {3}
// 初始化 RichText
new richtext.Richtext("#root", {
    layoutMode: "document"  // 默认使用 "document" 模式初始化 RichText
    // 其他配置属性
});
~~~

**变更日志：** 该属性在 v2.0 中新增，用于替代已移除的 `mode` 属性

**相关文章：** [配置](guides/configuration.md)

**相关示例：** [RichText. 初始化](https://snippet.dhtmlx.com/t55alxiy?tag=richtext)

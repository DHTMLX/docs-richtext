---
sidebar_label: layoutMode
title: layoutMode Config
description: 您可以在 DHTMLX JavaScript RichText 库的文档中了解 layoutMode 配置项。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX RichText 的免费 30 天评估版本。
---

# layoutMode

### Description

@short: 可选。指定主编辑区域的布局模式

### Usage

~~~jsx {}
layoutMode: "classic" | "document";
~~~

`"classic"` 模式将填满整个编辑区域。`"document"` 模式将编辑区域显示为文档页面。

### Default config

~~~jsx
layoutMode: "classic";
~~~

### Example

~~~jsx {3}
// initialize RichText
new richtext.Richtext("#root", {
    layoutMode: "document"  // initializes RichText with "document" mode by default
    // other configuration properties
});
~~~

**Change log:** 该属性在 v2.0 中新增，替代了已移除的 `mode` 属性

**Related articles:** [Configuration](guides/configuration.md)

**Related sample:** [RichText. Initialization](https://snippet.dhtmlx.com/t55alxiy?tag=richtext)

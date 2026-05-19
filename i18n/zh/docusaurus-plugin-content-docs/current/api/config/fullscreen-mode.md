---
sidebar_label: fullscreenMode
title: fullscreenMode Config
description: 您可以在 DHTMLX JavaScript RichText 库的文档中了解 fullscreenMode 配置项。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX RichText 的免费 30 天评估版本。
---

# fullscreenMode

### Description

@short: 可选。启用 RichText 全屏模式

### Usage

~~~jsx {}
fullscreenMode?: boolean; 
~~~

### Default config

~~~jsx
fullscreenMode: false;
~~~

### Example

~~~jsx {3}
// initialize RichText
new richtext.Richtext("#root", {
    fullscreenMode: true
    // other configuration properties
});
~~~

**Change log:** 该属性在 v2.0 中添加

**Related articles:** [Configuration](guides/configuration.md)

**Related sample:** [RichText. Full toolbar](https://snippet.dhtmlx.com/ziynafp7?tag=richtext)

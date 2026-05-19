---
sidebar_label: value
title: value Config
description: 您可以在 DHTMLX JavaScript RichText 库的文档中了解 value 配置项。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX RichText 免费 30 天评估版本。
---

# value

### Description

@short: 可选。指定在 RichText 编辑区域中显示的初始值（内容）

:::tip
如果您想使用自定义格式设置值（内容），请使用内置的 [`setValue()`](api/methods/set-value.md) 方法。
:::

### Usage

~~~jsx {}
value?: string; 
~~~

### Example

~~~jsx {2}
new richtext.Richtext("#root", {
    value: "<h1>some value</h1>" // sets the default value (HTML format)
    // other configuration properties
});
~~~

**Change log:** The property was added in v2.0

**Related articles:** [Configuration](guides/configuration.md)

**Related sample:** [RichText. Initialization](https://snippet.dhtmlx.com/t55alxiy?tag=richtext)

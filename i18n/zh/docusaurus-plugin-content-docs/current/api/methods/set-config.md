---
sidebar_label: setConfig()
title: setConfig 方法
description: 您可以在 DHTMLX JavaScript RichText 库的文档中了解 setConfig 方法。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX RichText 的免费 30 天评估版本。
---

# setConfig()

### 描述

@short: 将新的配置参数应用于 RichText

### 用法

~~~jsx {}
setConfig(config: { [key:any]: any }): void;
~~~

### 参数

- `config` - （必填）RichText 配置参数对象。查看完整属性列表，请参阅[此处](api/overview/properties_overview.md)

:::note
`setConfig()` 方法会保留所有之前设置的参数，这些参数不会因未在 `setConfig()` 方法调用中显式提供而被清除。
:::

### 示例

~~~jsx {6-8}
const editor = new richtext.Richtext("#root", {
    value: "<h1>Some text</h1>",
    // other configuration properties
});

editor.setConfig({
    layoutMode: "document"
});
~~~

**变更日志：** 该方法在 v2.0 中新增

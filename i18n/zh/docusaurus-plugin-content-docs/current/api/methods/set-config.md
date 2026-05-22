---
sidebar_label: setConfig()
title: setConfig 方法
description: 您可以在 DHTMLX JavaScript RichText 库的文档中了解 setConfig 方法。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX RichText 的 30 天免费评估版本。
---

# setConfig()

### 描述

@short: 将新的配置参数应用于 RichText

### 用法

~~~jsx {}
setConfig(config: { [key:any]: any }): void;
~~~

### 参数

- `config` - （必填）RichText 配置参数对象。完整属性列表请参见[此处](api/overview/properties_overview.md)

:::note
`setConfig()` 方法会保留所有之前设置的参数，未在 `setConfig()` 方法调用中明确提供的参数不会被覆盖。
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

**更新日志：** 该方法在 v2.0 版本中新增

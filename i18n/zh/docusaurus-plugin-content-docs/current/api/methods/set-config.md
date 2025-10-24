---
sidebar_label: setConfig()
title: setConfig 方法
description: 您可以在 DHTMLX JavaScript RichText 库的文档中了解 setConfig 方法。浏览开发者指南和 API 参考，尝试代码示例和实时演示，并下载 DHTMLX RichText 的免费 30 天评估版本。
---

# setConfig()

### 描述

@short: 使用新的配置设置更新 RichText 编辑器。

### 用法

~~~jsx {}
setConfig(config: { [key:any]: any }): void;
~~~

### 参数

- `config` - （必需）包含 RichText 配置选项的对象。完整属性列表请查看 [这里](api/overview/properties_overview.md)

:::note
使用 `setConfig()` 方法时，任何之前设置但未包含在此次调用中的参数将保持不变。
:::

### 示例

~~~jsx {6-8}
const editor = new richtext.Richtext("#root", {
    value: "<h1>Some text</h1>",
    // 其他配置属性
});

editor.setConfig({
    layoutMode: "document"
});
~~~

**更新日志:** 此方法在 v2.0 中引入

---
sidebar_label: value
title: value 配置项
description: 您可以在 DHTMLX JavaScript RichText 库的文档中了解 value 配置项。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX RichText 的 30 天免费评估版本。
---

# value

### 描述

@short: 可选。指定在 RichText 编辑器区域中显示的初始值（内容）

:::tip
如果您希望使用自定义格式设置值（内容），请使用内置的 [`setValue()`](api/methods/set-value.md) 方法。
:::

### 用法

~~~jsx {}
value?: string; 
~~~

### 示例

~~~jsx {2}
new richtext.Richtext("#root", {
    value: "<h1>some value</h1>" // 设置默认值（HTML 格式）
    // 其他配置属性
});
~~~

**变更日志：** 该属性在 v2.0 中添加

**相关文章：** [配置](guides/configuration.md)

**相关示例：** [RichText. Initialization](https://snippet.dhtmlx.com/t55alxiy?tag=richtext)

---
sidebar_label: value
title: value 配置项
description: 您可以在DHTMLX JavaScript RichText库的文档中了解value配置项。浏览开发者指南和API参考，试用代码示例和在线演示，并下载DHTMLX RichText的免费30天评估版本。
---

# value

### 描述 {#description}

@short: 可选。指定在RichText编辑区域中显示的初始值（内容）

:::tip[提示]
如果您想使用自定义格式设置值（内容），请使用内置的[`setValue()`](api/methods/set-value.md)方法。
:::

### 用法 {#usage}

~~~jsx {}
value?: string;
~~~

### 示例 {#example}

~~~jsx {2}
new richtext.Richtext("#root", {
    value: "<h1>some value</h1>" // 设置默认值（HTML格式）
    // 其他配置属性
});
~~~

**更新日志：** 该属性在v2.0中新增

**相关文章：** [配置](guides/configuration.md)

**相关示例：** [RichText. Initialization](https://snippet.dhtmlx.com/t55alxiy?tag=richtext)

---
sidebar_label: layoutMode
title: layoutMode 配置项
description: 您可以在DHTMLX JavaScript RichText库的文档中了解layoutMode配置项。浏览开发者指南和API参考，试用代码示例和在线演示，并下载DHTMLX RichText的免费30天评估版本。
---

# layoutMode

### 描述 {#description}

@short: 可选。指定主编辑区域的布局模式

### 用法 {#usage}

~~~jsx {}
layoutMode: "classic" | "document";
~~~

`"classic"`模式表示编辑区域铺满整个页面。`"document"`模式则更贴近真实文档的尺寸（支持的尺寸：A4、A5、A6、A7）。

### 默认配置 {#default-config}

~~~jsx
layoutMode: "classic";
~~~

### 示例 {#example}

~~~jsx {3}
// 初始化RichText
new richtext.Richtext("#root", {
    layoutMode: "document"  // 默认以"document"模式初始化RichText
    // 其他配置属性
});
~~~

**更新日志：** 该属性在v2.0中新增，替代了已移除的`mode`属性

**相关文章：** [配置](guides/configuration.md)

**相关示例：** [RichText. Initialization](https://snippet.dhtmlx.com/t55alxiy?tag=richtext)

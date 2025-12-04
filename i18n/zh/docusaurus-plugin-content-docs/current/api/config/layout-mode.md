---
sidebar_label: layoutMode
title: layoutMode 配置
description: 探索 DHTMLX JavaScript RichText 库文档中的 layoutMode 配置。查看开发者指南、API 参考、代码示例、在线演示，并免费下载 DHTMLX RichText 30 天试用版。
---

# layoutMode

### 描述

@short: 可选。定义主编辑区域的布局样式。

### 用法

~~~jsx {}
layoutMode: "classic" | "document";
~~~

`"classic"` 模式使编辑区域占满整个页面。`"document"` 模式模拟实际文档尺寸，支持 A4、A5、A6 和 A7 等格式。

### 默认配置

~~~jsx
layoutMode: "classic";
~~~

### 示例

~~~jsx {3}
// 初始化 RichText
new richtext.Richtext("#root", {
    layoutMode: "document"  // 默认将 RichText 设置为 "document" 模式
    // 其他配置属性
});
~~~

**更新日志:** 该属性自 v2.0 版本引入，替代了旧的 `mode` 属性。

**相关文档:** [Configuration](guides/configuration.md)

**相关示例:** [RichText. Initialization](https://snippet.dhtmlx.com/t55alxiy?tag=richtext)

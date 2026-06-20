---
sidebar_label: fullscreenMode
title: fullscreenMode 配置项
description: 您可以在 DHTMLX JavaScript RichText 库的文档中了解 fullscreenMode 配置项。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX RichText 的免费 30 天评估版本。
---

# fullscreenMode

### 描述 {#description}

@short: 可选。启用 RichText 全屏模式

### 用法 {#usage}

~~~jsx {}
fullscreenMode?: boolean; 
~~~

### 默认配置 {#default-config}

~~~jsx
fullscreenMode: false;
~~~

### 示例 {#example}

~~~jsx {3}
// 初始化 RichText
new richtext.Richtext("#root", {
    fullscreenMode: true
    // 其他配置属性
});
~~~

**更新日志：** 该属性在 v2.0 中新增

**相关文章：** [配置](guides/configuration.md)

**相关示例：** [RichText. 完整工具栏](https://snippet.dhtmlx.com/ziynafp7?tag=richtext)

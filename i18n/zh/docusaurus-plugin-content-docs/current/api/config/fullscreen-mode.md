---
sidebar_label: fullscreenMode
title: fullscreenMode 配置
description: 探索 DHTMLX JavaScript RichText 库文档中的 fullscreenMode 配置。查看开发者指南、API 参考，尝试代码示例和在线演示，并免费下载 DHTMLX RichText 30 天试用版。
---

# fullscreenMode

### 描述

@short: 可选。启用 RichText 全屏模式。

### 用法

~~~jsx {}
fullscreenMode?: boolean; 
~~~

### 默认配置

~~~jsx
fullscreenMode: false;
~~~

### 示例

~~~jsx {3}
// 初始化 RichText
new richtext.Richtext("#root", {
    fullscreenMode: true
    // 其他配置属性
});
~~~

**更新日志:** 此属性自 v2.0 版本引入。

**相关文档:** [配置](guides/configuration.md)

**相关示例:** [RichText. 全工具栏](https://snippet.dhtmlx.com/ziynafp7?tag=richtext)

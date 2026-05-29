---
sidebar_label: menubar
title: menubar 配置
description: 您可以在 DHTMLX JavaScript RichText 库的文档中了解 menubar 配置项。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX RichText 的免费 30 天评估版本。
---

# menubar

### 描述

@short: 可选。启用 RichText 顶部菜单栏

### 用法

~~~jsx {}
menubar?: boolean; 
~~~

### 示例

~~~jsx {3}
// 初始化 RichText
new richtext.Richtext("#root", {
    menubar: true
    // 其他配置属性
});
~~~

**变更日志：** 该属性在 v2.0 中添加

**相关文章：** [配置](guides/configuration.md)

**相关示例：** [RichText. Initialization with menubar](https://snippet.dhtmlx.com/tjryzka7?tag=richtext)

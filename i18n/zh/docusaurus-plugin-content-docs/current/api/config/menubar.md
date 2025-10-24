---
sidebar_label: menubar
title: menubar 配置
description: 您可以在 DHTMLX JavaScript RichText 库的文档中了解 menubar 配置。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX RichText 的免费 30 天评估版本。
---

# menubar

### 描述

@short: 可选。启用 RichText 顶部的菜单栏。

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

**更新日志:** 此属性自 v2.0 版本引入

**相关文档:** [配置](guides/configuration.md)

**相关示例:** [RichText. 带菜单栏的初始化](https://snippet.dhtmlx.com/tjryzka7?tag=richtext)

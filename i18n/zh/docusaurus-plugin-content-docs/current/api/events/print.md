---
sidebar_label: print
title: print 事件
description: 探索 DHTMLX JavaScript RichText 库中的 print 事件文档。查看开发者指南、API 参考，尝试代码示例和在线演示，并获取 DHTMLX RichText 的免费 30 天试用。
---

# print

### 描述

@short: 当文档开始打印时触发

### 用法

~~~jsx {}
"print": () => boolean | void;
~~~

:::info
如需管理内部事件，请参阅 [**Event Bus methods**](api/overview/event_bus_methods_overview.md)
:::

### 示例

~~~jsx {5-8}
// 初始化 RichText
const editor = new richtext.Richtext("#root", {
// 配置属性
});
// 监听 "print" 事件
editor.api.on("print", () => {
    console.log("文档正在打印");
});
~~~

**更新日志:** 此事件自 v2.0 版本引入

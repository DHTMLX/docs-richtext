---
sidebar_label: print
title: print 事件
description: 您可以在 DHTMLX JavaScript RichText 库的文档中了解 print 事件。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX RichText 的免费 30 天评估版本。
---

# print

### 描述

@short: 打印文档时触发

### 用法

~~~jsx {}
"print": () => boolean | void;
~~~

:::info
如需处理内部事件，可使用 [**Event Bus methods**](api/overview/event_bus_methods_overview.md)
:::

### 示例

~~~jsx {5-8}
// initialize RichText
const editor = new richtext.Richtext("#root", {
// configuration properties
});
// subscribe to the "print" event
editor.api.on("print", () => {
    console.log("The document is printing");
});
~~~

**更新日志：** 该事件于 v2.0 中新增

---
sidebar_label: subscript
title: subscript 事件
description: 您可以在 DHTMLX JavaScript RichText 库的文档中了解 subscript 事件。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX RichText 的 30 天免费评估版本。
---

# subscript

### 描述

@short: 当在菜单栏/工具栏中按下"Subscript"按钮或通过 Event Bus 方法触发时触发

### 用法

~~~jsx {}
"subscript": () => boolean | void;
~~~

:::info
如需处理内部事件，可以使用 [**Event Bus 方法**](api/overview/event_bus_methods_overview.md)
:::

### 示例

~~~jsx {5-10}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// subscribe to the "subscript" event
editor.api.on("subscript", () => {
    console.log("Subscript was applied");
});
// trigger the "subscript" event
editor.api.exec("subscript", {});
~~~

**更新日志：** 该事件在 v2.0 中新增

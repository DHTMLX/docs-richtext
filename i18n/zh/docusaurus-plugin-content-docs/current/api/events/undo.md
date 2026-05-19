---
sidebar_label: undo
title: undo 事件
description: 您可以在 DHTMLX JavaScript RichText 库的文档中了解 undo 事件。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX RichText 的免费 30 天评估版本。
---

# undo

### 描述

@short: 当点击菜单栏/工具栏中的"撤销"按钮或通过 Event Bus 方法触发时触发

### 用法

~~~jsx {}
"undo": () => boolean | void;
~~~

:::info
如需处理内部事件，可以使用 [**Event Bus 方法**](api/overview/event_bus_methods_overview.md)
:::

### 示例

~~~jsx {5-8}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// subscribe to the "undo" event
editor.api.on("undo", () => {
    console.log("Undo operation was performed");
});
~~~

**变更日志：** 该事件在 v2.0 中新增

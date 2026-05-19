---
sidebar_label: clear-text-format
title: clear-text-format 事件
description: 您可以在 DHTMLX JavaScript RichText 库的文档中了解 clear-text-format 事件。浏览开发指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX RichText 的 30 天免费评估版本。
---

# clear-text-format

### 描述

@short: 当通过菜单栏/工具栏或 Event Bus 方法清除文本格式时触发

### 用法

~~~jsx {}
"clear-text-format": () => boolean | void;
~~~

:::info
如需处理内部事件，可以使用 [**Event Bus methods**](api/overview/event_bus_methods_overview.md)
:::

### 示例

~~~jsx {5-10}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// subscribe to the "clear-text-format" event
editor.api.on("clear-text-format", () => {
    console.log("Text format was cleared");
});
// clear text format
editor.api.exec("clear-text-format", {});
~~~

**变更日志：** 该事件在 v2.0 中新增

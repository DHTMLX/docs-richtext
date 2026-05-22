---
sidebar_label: cut
title: cut Event
description: 您可以在 DHTMLX JavaScript RichText 库的文档中了解 cut 事件。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX RichText 的免费 30 天评估版本。
---

# cut

### Description

@short: 当剪切所选文本时触发

### Usage

~~~jsx {}
"cut": () => boolean | void;
~~~

:::info
如需处理内部事件，您可以使用 [**Event Bus methods**](api/overview/event_bus_methods_overview.md)
:::

### Example

~~~jsx {5-8}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// subscribe to the "cut" event
editor.api.on("cut", () => {
    console.log("Selected text was cut");
});
~~~

**Change log:** 该事件已在 v2.0 中添加

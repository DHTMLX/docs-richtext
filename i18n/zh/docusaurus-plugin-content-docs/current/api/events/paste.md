---
sidebar_label: paste
title: paste 事件
description: 您可以在 DHTMLX JavaScript RichText 库的文档中了解 paste 事件。浏览开发指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX RichText 的免费 30 天评估版本。
---

# paste

### Description

@short: Fires when pasting content

### Usage

~~~jsx {}
"paste": () => boolean | void;
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
// subscribe to the "paste" event
editor.api.on("paste", () => {
    console.log("Content was pasted");
});
~~~

**Change log:** The event was added in v2.0

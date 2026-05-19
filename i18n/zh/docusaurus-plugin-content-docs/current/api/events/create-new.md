---
sidebar_label: create-new
title: create-new Event
description: 您可以在 DHTMLX JavaScript RichText 库的文档中了解 create-new 事件。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX RichText 的免费 30 天评估版本。
---

# create-new

### Description

@short: 当在菜单栏中按下"New"选项或通过 Event Bus 方法触发时触发

### Usage

~~~jsx {}
"create-new": ({ reset?: boolean }) => boolean | void;
~~~

### Parameters

**create-new** 事件的 callback 可接受一个包含以下参数的对象：

- `reset` - 创建新文件时重置历史记录

:::info
如需处理内部事件，可使用 [**Event Bus methods**](api/overview/event_bus_methods_overview.md)
:::

### Example

~~~jsx {5-10}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// subscribe to the "create-new" event
editor.api.on("create-new", ({ reset }) => {
    console.log(`Document has been cleared. History has ${reset ? "" : "not"} been reset.`);
});
// create new file and reset the history
editor.api.exec("create-new", { reset: true });
~~~

**Change log:** The event was added in v2.0

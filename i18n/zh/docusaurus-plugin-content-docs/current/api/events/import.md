---
sidebar_label: import
title: import Event
description: 您可以在 DHTMLX JavaScript RichText 库的文档中了解 import 事件。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX RichText 的免费 30 天评估版本。
---

# import

### Description

@short: 在菜单栏中按下"Import"选项或通过 Event Bus 方法触发后触发

### Usage

~~~jsx {}
"import": ({ html?: string }) => boolean | void;
~~~

### Parameters

**import** 事件的 callback 可接受一个包含以下参数的对象：

- `html` - html 格式的文本值

:::info
如需处理内部事件，可使用 [**Event Bus methods**](api/overview/event_bus_methods_overview.md)
:::

### Example

~~~jsx {5-13}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// subscribe to the "import" event
editor.api.on("import", (obj) => {
    console.log(obj.html);
    console.log("The new value was imported");
});
// import new value
editor.api.exec("import", {
    html: "<h2>some value</h2>" // simply calls setValue
});
~~~

**Change log:** 该事件已在 v2.0 中添加

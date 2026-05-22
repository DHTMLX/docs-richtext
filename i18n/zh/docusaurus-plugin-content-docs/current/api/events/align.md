---
sidebar_label: align
title: align 事件
description: 您可以在 DHTMLX JavaScript RichText 库的文档中了解 align 事件。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX RichText 的免费 30 天评估版本。
---

# align

### 描述

@short: 当通过菜单栏/工具栏或 Event Bus 方法更改文本对齐方式时触发

### 用法

~~~jsx {}
"align": ({ 
    align: "left" | "center" | "right" | "justify"
}) => boolean | void;
~~~

### 参数

**align** 事件的 callback 可接收一个包含以下参数的对象：

- `align` - 文本对齐方式。可指定以下值之一：`"left" | "center" | "right" | "justify"`

:::info
如需处理内部事件，可使用 [**Event Bus 方法**](api/overview/event_bus_methods_overview.md)
:::

### 示例

~~~jsx {5-12}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// subscribe to the "align" event
editor.api.on("align", (obj) => {
    console.log(`Align to: ${obj.align}`);
});
// align the text to the left
editor.api.exec("align", {
    align: "left"
}); 
~~~

**变更日志：** 该事件已在 v2.0 中添加

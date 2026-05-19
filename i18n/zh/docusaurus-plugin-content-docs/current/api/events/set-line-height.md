---
sidebar_label: set-line-height
title: set-line-height 事件
description: 您可以在 DHTMLX JavaScript RichText 库的文档中了解 set-line-height 事件。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX RichText 的免费 30 天评估版本。
---

# set-line-height

### 描述

@short: 设置行高时触发

### 用法

~~~jsx {}
"set-line-height": ({ lineHeight: string }) => boolean | void;
~~~

### 参数

**set-line-height** 事件的回调函数可接收包含以下参数的对象：

- `lineHeight` - 行高值

:::info
如需处理内部事件，可以使用 [**Event Bus 方法**](api/overview/event_bus_methods_overview.md)
:::

### 示例

~~~jsx {5-13}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// subscribe to the "set-line-height" event
editor.api.on("set-line-height", (obj) => {
    console.log(obj);
    console.log("The line height was changed");
});
// apply a new line height
editor.api.exec("set-line-height", {
   lineHeight: "15px"
});
~~~

**更新日志：** 该事件在 v2.0 中新增

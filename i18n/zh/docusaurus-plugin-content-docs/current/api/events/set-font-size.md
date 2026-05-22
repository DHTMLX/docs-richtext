---
sidebar_label: set-font-size
title: set-font-size 事件
description: 您可以在 DHTMLX JavaScript RichText 库的文档中了解 set-font-size 事件。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX RichText 的免费 30 天评估版本。
---

# set-font-size

### 描述

@short: 设置字体大小时触发

### 用法

~~~jsx {}
"set-font-size": ({ fontSize: string }) => boolean | void;
~~~

### 参数

**set-font-size** 事件的回调函数可接收一个包含以下参数的对象：

- `fontSize` - 要应用的字体大小

:::info
处理内部事件可使用 [**Event Bus 方法**](api/overview/event_bus_methods_overview.md)
:::

### 示例

~~~jsx {5-13}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// subscribe to the "set-font-size" event
editor.api.on("set-font-size", (obj) => {
    console.log(obj.fontSize);
    console.log("The font size was changed");
});
// apply new font size
editor.api.exec("set-font-size", {
    fontSize: "11px"
});
~~~

**更新日志：** 该事件于 v2.0 版本中新增

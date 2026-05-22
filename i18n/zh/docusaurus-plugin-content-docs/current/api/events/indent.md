---
sidebar_label: indent
title: indent 事件
description: 您可以在 DHTMLX JavaScript RichText 库的文档中了解 indent 事件。浏览开发者指南和 API 参考，尝试代码示例和在线演示，并下载 DHTMLX RichText 的免费 30 天评估版本。
---

# indent

### 描述

@short: 增加块缩进时触发

### 用法

~~~jsx {}
"indent": ({ step: number }) => boolean | void;
~~~

### 参数

**indent** 事件的 callback 可以接收一个包含以下参数的对象：

- `step` - 缩进增加的步长

:::info
如需处理内部事件，可以使用 [**Event Bus methods**](api/overview/event_bus_methods_overview.md)
:::

### 示例

~~~jsx {5-9}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// subscribe to the "indent" event
editor.api.on("indent", (obj) => {
    console.log(obj);
    console.log("The indention was increased");
});
~~~

**更新日志：** 该事件在 v2.0 中新增

---
sidebar_label: set-text-style
title: set-text-style 事件
description: 您可以在 DHTMLX JavaScript RichText 库的文档中了解 set-text-style 事件。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX RichText 的免费 30 天评估版本。
---

# set-text-style

### 描述

@short: 设置文本样式时触发

### 用法

~~~jsx {}
"set-text-style": ({ tag: TBlockType }) => boolean | void;

type TBlockType = "p" | "blockquote" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
~~~

### 参数

**set-text-style** 事件的 callback 可以接收包含以下参数的对象：

- `tag` - 文本样式

:::info
如需处理内部事件，可以使用 [**Event Bus 方法**](api/overview/event_bus_methods_overview.md)
:::

### 示例

~~~jsx {5-13}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// subscribe to the "set-text-style" event
editor.api.on("set-text-style", (obj) => {
    console.log(obj.tag);
    console.log("The text style was changed");
});
// apply new text style
editor.api.exec("set-text-style", {
    tag: "blockquote"
});
~~~

**更新日志：** 该事件于 v2.0 版本中新增

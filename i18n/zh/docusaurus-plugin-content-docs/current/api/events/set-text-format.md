---
sidebar_label: set-text-format
title: set-text-format 事件
description: 您可以在 DHTMLX JavaScript RichText 库的文档中了解 set-text-format 事件。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX RichText 的免费 30 天评估版本。
---

# set-text-format

### 描述

@short: 设置文本格式时触发

### 用法

~~~jsx {}
"set-text-format": (ITextFormat) => boolean | void;

interface ITextFormat {
    bold?: boolean;
    italic?: boolean;
    strike?: boolean;
    underline?: boolean;
}
~~~

:::info
如需处理内部事件，可以使用 [**Event Bus 方法**](api/overview/event_bus_methods_overview.md)
:::

### 参数

**set-text-format** 事件的 callback 可接收一个包含以下参数的对象：

- `bold` - 粗体文本格式
- `italic` - 斜体文本格式
- `strike` - 删除线文本格式
- `underline` - 下划线文本格式

### 示例

~~~jsx {5-14}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// subscribe to the "set-text-format" event
editor.api.on("set-text-format", (obj) => {
    console.log(obj);
    console.log("The text format was changed");
});
// apply the "italic" and bold text format
editor.api.exec("set-text-format", {
    italic: true, 
    bold: true
});
~~~

**变更日志：** 该事件在 v2.0 版本中新增

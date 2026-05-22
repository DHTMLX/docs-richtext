---
sidebar_label: api.on()
title: on 方法
description: 您可以在 DHTMLX JavaScript RichText 库的文档中了解 on 方法。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX RichText 的免费 30 天评估版本。
---

# api.on()

### 描述

@short: 允许为内部事件绑定处理函数

### 用法

~~~jsx {}
api.on(
    event: string,
    handler: function
): void;
~~~

### 参数

- `event` - （必填）要触发的事件
- `handler` - （必填）要绑定的处理函数（处理函数的参数取决于所触发的事件）

### 事件

:::info
RichText 内部事件的完整列表可在[**此处**](api/overview/events_overview.md)查看
:::

### 示例

~~~jsx {5-8}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// subscribe to the "set-font-size" event
editor.api.on("set-font-size", (obj) => {
    console.log(obj.fontSize);
});
~~~

**更新日志：** 该方法在 v2.0 中进行了更新，移除了 `context` 参数

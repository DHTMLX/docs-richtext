---
sidebar_label: insert-link
title: insert-link 事件
description: 您可以在 DHTMLX JavaScript RichText 库的文档中了解 insert-link 事件。浏览开发指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX RichText 的 30 天免费评估版本。
---

# insert-link

### 描述

@short: 插入链接时触发

### 用法

~~~jsx {}
"insert-link": ({ url: string }) => boolean | void;
~~~

### 参数

**update-link** 事件的 callback 可接收一个包含以下参数的对象：

- `url` - 要插入的 url

:::info
如需处理内部事件，可以使用 [**Event Bus 方法**](api/overview/event_bus_methods_overview.md)
:::

### 示例

~~~jsx {5-9}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// subscribe to the "insert-link" event
editor.api.on("insert-link", (obj) => {
    console.log(obj)
    console.log("The following link was inserted: " + obj.url);
});
~~~

**更新日志：** 该事件在 v2.0 中新增

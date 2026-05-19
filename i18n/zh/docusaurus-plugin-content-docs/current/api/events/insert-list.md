---
sidebar_label: insert-list
title: insert-list 事件
description: 您可以在 DHTMLX JavaScript RichText 库的文档中了解 insert-list 事件。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX RichText 的 30 天免费评估版本。
---

# insert-list

### 描述

@short: 插入列表时触发

### 用法

~~~jsx {}
"insert-list": ({ type: TListType }) => boolean | void;

type TListType = "bulleted" | "numbered";
~~~

### 参数

**insert-list** 事件的 callback 可接收一个包含以下参数的对象：

- `type` - 插入列表的类型，可指定以下值：
    - `"bulleted"` - 无序列表
    - `"numbered"` - 有序列表

:::info
处理内部事件时，可使用 [**Event Bus methods**](api/overview/event_bus_methods_overview.md)
:::

### 示例

~~~jsx {5-9}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// subscribe to the "insert-list" event
editor.api.on("insert-list", (obj) => {
    console.log(obj.type);
    console.log("The list was inserted");
});
~~~

**更新日志：** 该事件在 v2.0 中新增

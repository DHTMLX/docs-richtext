---
sidebar_label: insert-list
title: insert-list 事件
description: 探索 DHTMLX JavaScript RichText 库文档中的 insert-list 事件。查看开发者指南、API 参考，尝试代码示例和在线演示，并获得 DHTMLX RichText 的免费 30 天试用。
---

# insert-list

### 描述

@short: 当插入列表时触发

### 用法

~~~jsx {}
"insert-list": ({ type: TListType }) => boolean | void;

type TListType = "bulleted" | "numbered";
~~~

### 参数

**insert-list** 事件的回调函数接收一个包含以下参数的对象:

- `type` - 指示插入的列表类型。可能的值为:
    - `"bulleted"` - 项目符号列表
    - `"numbered"` - 编号列表

:::info
要管理内部事件，可以参考 [**Event Bus methods**](api/overview/event_bus_methods_overview.md)
:::

### 示例

~~~jsx {5-9}
// 初始化 RichText
const editor = new richtext.Richtext("#root", {
    // 配置属性
});
// 监听 "insert-list" 事件
editor.api.on("insert-list", (obj) => {
    console.log(obj.type);
    console.log("列表已插入");
});
~~~

**更新日志:** 此事件自版本 2.0 引入

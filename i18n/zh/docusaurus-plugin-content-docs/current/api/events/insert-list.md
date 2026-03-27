---
sidebar_label: insert-list
title: insert-list 事件
description: 您可以在DHTMLX JavaScript RichText库的文档中了解insert-list事件。浏览开发者指南和API参考，查看代码示例和在线演示，并下载DHTMLX RichText的免费30天试用版本。
---

# insert-list

### 描述 {#description}

@short: 当插入列表时触发

### 用法 {#usage}

~~~jsx {}
"insert-list": ({ type: TListType }) => boolean | void;

type TListType = "bulleted" | "numbered";
~~~

### 参数 {#parameters}

**insert-list** 事件的回调函数可以接收一个包含以下参数的对象：

- `type` - 插入列表的类型。可以指定以下值：
    - `"bulleted"` - 无序列表
    - `"numbered"` - 有序列表

:::info[信息]
如需处理内部事件，您可以使用[**Event Bus 方法**](api/overview/event_bus_methods_overview.md)
:::

### 示例 {#example}

~~~jsx {5-9}
// 初始化 RichText
const editor = new richtext.Richtext("#root", {
    // 配置属性
});
// 订阅 "insert-list" 事件
editor.api.on("insert-list", (obj) => {
    console.log(obj.type);
    console.log("The list was inserted");
});
~~~

**更新日志：** 该事件在v2.0版本中新增

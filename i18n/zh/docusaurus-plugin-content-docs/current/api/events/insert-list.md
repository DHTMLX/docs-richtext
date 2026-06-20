---
sidebar_label: insert-list
title: insert-list 事件
description: 您可以在 DHTMLX JavaScript RichText 库的文档中了解 insert-list 事件。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX RichText 的免费 30 天评估版本。
---

# insert-list

### 描述 {#description}

@short: 在插入列表时触发

### 用法 {#usage}

~~~jsx {}
"insert-list": ({ type: TListType }) => boolean | void;

type TListType = "bulleted" | "numbered";
~~~

### 参数 {#parameters}

`insert-list` 事件的回调函数可接收一个包含以下参数的对象：

- `type` - 插入列表的类型。可指定以下值：
    - `"bulleted"` - 无序列表
    - `"numbered"` - 有序列表

:::info[信息]
如需处理内部事件，可使用 [**事件总线方法**](api/overview/event_bus_methods_overview.md)
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

**变更日志：** 该事件在 v2.0 中新增

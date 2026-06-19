---
sidebar_label: insert-link
title: insert-link 事件
description: 您可以在 DHTMLX JavaScript RichText 库的文档中了解 insert-link 事件。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX RichText 的免费 30 天评估版本。
---

# insert-link

### 描述 {#description}

@short: 在插入链接时触发

### 用法 {#usage}

~~~jsx {}
"insert-link": ({ url: string }) => boolean | void;
~~~

### 参数 {#parameters}

**update-link** 事件的回调函数可以接收一个包含以下参数的对象：

- `url` - 要插入的 URL

:::info[信息]
如需处理内部事件，可以使用 [**Event Bus 方法**](api/overview/event_bus_methods_overview.md)
:::

### 示例 {#example}

~~~jsx {5-9}
// 初始化 RichText
const editor = new richtext.Richtext("#root", {
    // 配置属性
});
// 订阅 "insert-link" 事件
editor.api.on("insert-link", (obj) => {
    console.log(obj)
    console.log("The following link was inserted: " + obj.url);
});
~~~

**变更日志：** 该事件在 v2.0 中新增

---
sidebar_label: insert-link
title: insert-link 事件
description: 探索 DHTMLX JavaScript RichText 库文档中的 insert-link 事件。查看开发者指南、API 参考，尝试示例代码和在线演示，并免费下载 30 天试用版的 DHTMLX RichText。
---

# insert-link

### 描述

@short: 当插入链接时触发

### 用法

~~~jsx {}
"insert-link": ({ url: string }) => boolean | void;
~~~

### 参数

**update-link** 事件的回调函数接收一个包含以下参数的对象:

- `url` - 被插入的链接地址

:::info
要管理内部事件，您可以使用 [**Event Bus methods**](api/overview/event_bus_methods_overview.md)
:::

### 示例

~~~jsx {5-9}
// 初始化 RichText
const editor = new richtext.Richtext("#root", {
    // 配置属性
});
// 监听 "insert-link" 事件
editor.api.on("insert-link", (obj) => {
    console.log(obj)
    console.log("插入的链接为: " + obj.url);
});
~~~

**更新日志:** 此事件自 v2.0 版本引入

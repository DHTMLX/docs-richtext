---
sidebar_label: insert-line
title: insert-line 事件
description: 查找有关 DHTMLX JavaScript RichText 库中 insert-line 事件的详细信息。浏览开发者指南、API 参考，试用示例和在线演示，并免费下载 DHTMLX RichText 30 天试用版。
---

# insert-line

### 描述

@short: 当插入水平线时触发

### 用法

~~~jsx {}
"insert-line": () => boolean | void;
~~~

:::info
要使用内部事件，可以使用[**Event Bus 方法**](api/overview/event_bus_methods_overview.md)
:::

### 示例

~~~jsx {5-8}
// 初始化 RichText
const editor = new richtext.Richtext("#root", {
    // 配置属性
});
// 监听 "insert-line" 事件
editor.api.on("insert-line", () => {
    console.log("已插入水平线");
});
~~~

**更新日志:** 此事件自 v2.0 版本引入

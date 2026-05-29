---
sidebar_label: update-link
title: update-link 事件
description: 您可以在 DHTMLX JavaScript RichText 库的文档中了解 update-link 事件。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX RichText 的免费 30 天评估版本。
---

# update-link

### 描述

@short: 更新链接时触发

### 用法

~~~jsx {}
"update-link": ({ id: number, url: string }) => boolean | void;
~~~

### 参数

**update-link** 事件的回调函数可接收一个包含以下参数的对象：

- `id` - 链接 ID
- `url` - 修改后的 url

:::info
处理内部事件可使用 [**Event Bus 方法**](api/overview/event_bus_methods_overview.md)
:::

### 示例

~~~jsx {5-9}
// 初始化 RichText
const editor = new richtext.Richtext("#root", {
    // 配置属性
});
// 订阅 "update-link" 事件
editor.api.on("update-link", (obj) => {
    console.log(obj);
    console.log("The following link was updated:" + obj.url);
});
~~~

**Change log:** 该事件于 v2.0 中新增

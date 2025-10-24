---
sidebar_label: update-link
title: update-link 事件
description: 您可以在 DHTMLX JavaScript RichText 库的文档中了解 update-link 事件。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX RichText 的免费 30 天评估版。
---

# update-link

### 描述

@short: 当链接被更新时触发

### 用法

~~~jsx {}
"update-link": ({ id: number, url: string }) => boolean | void;
~~~

### 参数

**update-link** 事件的回调函数接收一个包含以下属性的对象:

- `id` - 链接的标识符
- `url` - 更新后的链接地址

:::info
要管理内部事件，您可以参考[**事件总线方法**](api/overview/event_bus_methods_overview.md)
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
    console.log("以下链接已被更新:" + obj.url);
});
~~~

**更新日志:** 此事件自 v2.0 版本引入

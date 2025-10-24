---
sidebar_label: api.on()
title: on 方法
description: 您可以在 DHTMLX JavaScript RichText 库的文档中了解 on 方法。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX RichText 的免费 30 天试用版。
---

# api.on()

### 描述

@short: 允许您为内部事件附加处理程序

### 用法

~~~jsx {}
api.on(
    event: string,
    handler: function
): void;
~~~

### 参数

- `event` - （必填）触发处理程序的事件名称
- `handler` - （必填）事件触发时调用的函数（参数取决于具体事件）

### 事件

:::info
您可以在[**这里**](api/overview/events_overview.md)找到完整的 RichText 内部事件列表
:::

### 示例

~~~jsx {5-8}
// 初始化 RichText
const editor = new richtext.Richtext("#root", {
    // 配置属性
});
// 监听 "set-font-size" 事件
editor.api.on("set-font-size", (obj) => {
    console.log(obj.fontSize);
});
~~~

**更新日志:** 此方法在 v2.0 版本中进行了更新，移除了 `context` 参数

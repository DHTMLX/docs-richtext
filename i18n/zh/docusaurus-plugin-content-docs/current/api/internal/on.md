---
sidebar_label: api.on()
title: on 方法
description: 您可以在 DHTMLX JavaScript RichText 库的文档中了解 on 方法。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX RichText 的免费 30 天评估版本。
---

# api.on()

### 描述 {#description}

@short: 允许为内部事件附加处理程序

### 用法 {#usage}

~~~jsx {}
api.on(
    event: string,
    handler: function
): void;
~~~

### 参数 {#parameters}

- `event` - （必填）要触发的事件
- `handler` - （必填）要附加的处理程序（处理程序参数取决于要触发的事件）

### 事件 {#events}

:::info[信息]
RichText 内部事件的完整列表可在[**此处**](api/overview/events_overview.md)查看
:::

### 示例 {#example}

~~~jsx {5-8}
// 初始化 RichText
const editor = new richtext.Richtext("#root", {
    // 配置属性
});
// 订阅 "set-font-size" 事件
editor.api.on("set-font-size", (obj) => {
    console.log(obj.fontSize);
});
~~~

**更新日志：** 该方法在 v2.0 中进行了更新，移除了 `context` 参数

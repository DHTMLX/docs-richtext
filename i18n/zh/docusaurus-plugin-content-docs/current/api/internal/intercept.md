---
sidebar_label: api.intercept()
title: intercept 方法
description: 您可以在 DHTMLX JavaScript RichText 库的文档中了解 intercept 方法。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX RichText 的 30 天免费评估版本。
---

# api.intercept()

### 描述 {#description}

@short: 允许拦截并阻止内部事件

### 用法 {#usage}

~~~jsx {}
api.intercept(
    event: string,
    callback: function
): void;
~~~

### 参数 {#parameters}

- `event` - （必填）要触发的事件
- `callback` - （必填）要执行的回调函数（回调参数取决于所触发的事件）

### 事件 {#events}

:::info[信息]
RichText 内部事件的完整列表可在[**此处**](api/overview/events_overview.md)查看
:::

### 示例 {#example}

~~~jsx {5-10}
// 创建 RichText
const editor = new richtext.Richtext("#root", {
    // 配置属性
});
// 禁止更改字体大小
editor.api.intercept("set-font-size", (obj) => {
    if(obj.fontSize !== "36px" ){
        return false;
    }
});
~~~

**变更日志：** 该方法在 v2.0 中新增

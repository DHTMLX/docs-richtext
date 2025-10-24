---
sidebar_label: api.intercept()
title: intercept 方法
description: 您可以在 DHTMLX JavaScript RichText 库的文档中了解 intercept 方法。浏览开发者指南和 API 参考，尝试代码示例和在线演示，并下载 DHTMLX RichText 的免费 30 天试用版。
---

# api.intercept()

### 描述

@short: 提供一种方式来捕获并阻止内部事件在继续执行之前发生。

### 用法

~~~jsx {}
api.intercept(
    event: string,
    callback: function
): void;
~~~

### 参数

- `event` - （必需）要拦截的事件名称
- `callback` - （必需）事件发生时执行的函数（参数根据具体事件而定）

### 事件

:::info
您可以在[**这里**](api/overview/events_overview.md)找到 RichText 内部事件的完整列表
:::

### 示例

~~~jsx {5-10}
// 创建 RichText
const editor = new richtext.Richtext("#root", {
    // 配置属性
});
// 除了设置为 "36px" 外，阻止更改字体大小
editor.api.intercept("set-font-size", (obj) => {
    if(obj.fontSize !== "36px" ){
        return false;
    }
});
~~~

**更新日志:** 此方法自 v2.0 版本起添加

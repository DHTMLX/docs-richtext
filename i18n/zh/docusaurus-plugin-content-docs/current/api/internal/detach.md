---
sidebar_label: api.detach()
title: on Method
description: 您可以在 DHTMLX JavaScript RichText 库的文档中了解 on 方法。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX RichText 的免费 30 天评估版本。
---

# api.detach()

### 描述

@short: 用于移除/解绑事件处理程序

### 用法

~~~jsx {}
api.detach( tag: string ): void;
~~~

### 参数

- `tag` - （必填）操作标签的名称

### 事件

:::info
RichText 内部事件的完整列表可在[**此处**](api/overview/events_overview.md)查看
:::

### 示例

~~~jsx {6-8,10}
// 初始化 RichText
const editor = new richtext.Richtext("#root", {
    // 配置属性
});

editor.api.on("set-font-size", (obj) => {
    console.log(obj.fontSize);
}, { tag: "track" });

editor.api.detach("track");
~~~

**更新日志：** 该方法在 v2.0 中已更新。`name` 和 `context` 参数已被移除

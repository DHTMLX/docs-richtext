---
sidebar_label: api.detach()
title: on Method
description: 您可以在 DHTMLX JavaScript RichText 库的文档中了解 on 方法。浏览开发者指南和 API 参考，尝试代码示例和在线演示，并下载 DHTMLX RichText 的免费 30 天评估版本。
---

# api.detach()

### Description

@short: 用于移除/取消绑定事件处理程序

### Usage

~~~jsx {}
api.detach( tag: string ): void;
~~~

### Parameters

- `tag` - （必填）操作标签的名称

### Events

:::info
RichText 内部事件的完整列表可在[**此处**](api/overview/events_overview.md)查看
:::

### Example

~~~jsx {6-8,10}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});

editor.api.on("set-font-size", (obj) => {
    console.log(obj.fontSize);
}, { tag: "track" });

editor.api.detach("track");
~~~

**Change log:** 该方法已在 v2.0 中更新，`name` 和 `context` 参数已被移除

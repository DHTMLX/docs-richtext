---
sidebar_label: api.detach()
title: on 方法
description: 您可以在 DHTMLX JavaScript RichText 库的文档中了解 on 方法。浏览开发者指南和 API 参考，尝试代码示例和在线演示，并下载免费的 30 天评估版 DHTMLX RichText。
---

# api.detach()

### 描述

@short: 允许移除或分离事件处理程序

### 用法

~~~jsx {}
api.detach( tag: string ): void;
~~~

### 参数

- `tag` - （必需）指定操作标签的名称

### 事件

:::info
RichText 内部事件的完整列表请参见 [**这里**](api/overview/events_overview.md)
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

**更新日志:** 该方法在 v2.0 中进行了更新，移除了 `name` 和 `context` 参数

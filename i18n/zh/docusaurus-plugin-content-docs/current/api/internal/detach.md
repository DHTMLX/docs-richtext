---
sidebar_label: api.detach()
title: detach 方法
description: 您可以在 DHTMLX JavaScript RichText 库的文档中了解 detach 方法。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX RichText 的免费 30 天评估版本。
---

# api.detach()

### 描述 {#description}

@short: 允许移除/解除事件处理程序

### 用法 {#usage}

~~~jsx {}
api.detach( tag: string ): void;
~~~

### 参数 {#parameters}

- `tag` - （必填）动作标签的名称

### 事件 {#events}

:::info[信息]
RichText 内部事件的完整列表可在[**此处**](api/overview/events_overview.md)查看
:::

### 示例 {#example}

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

**更新日志：** 该方法在 v2.0 中进行了更新，移除了 `name` 和 `context` 参数

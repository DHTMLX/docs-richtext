---
sidebar_label: paste
title: paste 事件
description: 您可以在 DHTMLX JavaScript RichText 库的文档中了解 paste 事件。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX RichText 的免费 30 天评估版本。
---

# paste

### 描述

@short: 在粘贴内容时触发

### 用法

~~~jsx {}
"paste": () => boolean | void;
~~~

:::info
如需处理内部事件，可以使用 [**Event Bus 方法**](api/overview/event_bus_methods_overview.md)
:::

### 示例

~~~jsx {5-8}
// 初始化 RichText
const editor = new richtext.Richtext("#root", {
    // 配置属性
});
// 订阅 "paste" 事件
editor.api.on("paste", () => {
    console.log("Content was pasted");
});
~~~

**变更日志：** 该事件在 v2.0 中添加

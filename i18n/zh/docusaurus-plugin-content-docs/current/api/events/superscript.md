---
sidebar_label: superscript
title: superscript Event
description: 您可以在 DHTMLX JavaScript RichText 库的文档中了解 superscript 事件。浏览开发指南和 API 参考，查看代码示例和在线演示，并下载免费 30 天评估版 DHTMLX RichText。
---

# superscript

### 描述

@short: 当在菜单栏/工具栏中按下"Superscript"按钮或通过 Event Bus 方法触发时触发

### 用法

~~~jsx {}
"superscript": () => boolean | void;
~~~

:::info
如需处理内部事件，您可以使用 [**Event Bus methods**](api/overview/event_bus_methods_overview.md)
:::

### 示例

~~~jsx {5-9}
// 初始化 RichText
const editor = new richtext.Richtext("#root", {
    // 配置属性
});
// 订阅 "superscript" 事件
editor.api.on("superscript", () => {
    console.log("Superscript was applied");
});
// 触发 "superscript" 事件
editor.api.exec("superscript", {});
~~~

**变更日志：** 该事件在 v2.0 中新增

---
sidebar_label: subscript
title: subscript 事件
description: 您可以在 DHTMLX JavaScript RichText 库的文档中了解 subscript 事件。浏览开发者指南和 API 参考，尝试代码示例和在线演示，并下载 DHTMLX RichText 的免费 30 天评估版本。
---

# subscript

### 描述 {#description}

@short: 当在菜单栏/工具栏中按下"下标"按钮或通过 Event Bus 方法触发时触发

### 用法 {#usage}

~~~jsx {}
"subscript": () => boolean | void;
~~~

:::info[信息]
如需处理内部事件，可以使用 [**Event Bus 方法**](api/overview/event_bus_methods_overview.md)
:::

### 示例 {#example}

~~~jsx {5-10}
// 初始化 RichText
const editor = new richtext.Richtext("#root", {
    // 配置属性
});
// 订阅 "subscript" 事件
editor.api.on("subscript", () => {
    console.log("Subscript was applied");
});
// 触发 "subscript" 事件
editor.api.exec("subscript", {});
~~~

**更新日志：** 该事件在 v2.0 中添加

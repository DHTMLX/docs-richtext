---
sidebar_label: superscript
title: superscript 事件
description: 您可以在 DHTMLX JavaScript RichText 库的文档中了解 superscript 事件。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载免费的 30 天评估版本。
---

# superscript

### 描述 {#description}

@short: 当通过菜单栏/工具栏中的"上标"按钮或 Event Bus 方法触发时触发

### 用法 {#usage}

~~~jsx {}
"superscript": () => boolean | void;
~~~

:::info[信息]
处理内部事件时，您可以使用 [**Event Bus 方法**](api/overview/event_bus_methods_overview.md)
:::

### 示例 {#example}

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

**变更日志：** 该事件于 v2.0 版本中添加

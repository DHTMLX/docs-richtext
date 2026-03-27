---
sidebar_label: redo
title: redo 事件
description: 您可以在 DHTMLX JavaScript RichText 库的文档中了解 redo 事件。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX RichText 的免费 30 天评估版本。
---

# redo

### 描述 {#description}

@short: 当在 menubar/toolbar 中按下"Redo"按钮或通过 Event Bus 方法调用时触发

### 用法 {#usage}

~~~jsx {}
"redo": () => boolean | void;
~~~

:::info[信息]
如需处理内部事件，您可以使用 [**Event Bus 方法**](api/overview/event_bus_methods_overview.md)
:::

### 示例 {#example}

~~~jsx {5-8}
// 初始化 RichText
const editor = new richtext.Richtext("#root", {
    // 配置属性
});
// 订阅 "redo" 事件
editor.api.on("redo", () => {
    console.log("Redo operation was performed");
});
~~~

**更新日志：** 该事件在 v2.0 中添加

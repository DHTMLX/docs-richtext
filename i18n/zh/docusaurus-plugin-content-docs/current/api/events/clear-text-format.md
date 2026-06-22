---
sidebar_label: clear-text-format
title: clear-text-format 事件
description: 您可以在 DHTMLX JavaScript RichText 库的文档中了解 clear-text-format 事件。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX RichText 的免费 30 天评估版本。
---

# clear-text-format

### 描述 {#description}

@short: 当通过菜单栏/工具栏或 Event Bus 方法清除文本格式时触发

### 用法 {#usage}

~~~jsx {}
"clear-text-format": () => boolean | void;
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
// 订阅 "clear-text-format" 事件
editor.api.on("clear-text-format", () => {
    console.log("Text format was cleared");
});
// 清除文本格式
editor.api.exec("clear-text-format", {});
~~~

**变更日志：** 该事件在 v2.0 中添加

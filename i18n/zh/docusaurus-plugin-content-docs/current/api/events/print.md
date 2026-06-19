---
sidebar_label: print
title: print 事件
description: 您可以在 DHTMLX JavaScript RichText 库的文档中了解 print 事件。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX RichText 的 30 天免费评估版本。
---

# print

### 描述 {#description}

@short: 在打印文档时触发

### 用法 {#usage}

~~~jsx {}
"print": () => boolean | void;
~~~

:::info[信息]
如需处理内部事件，可以使用 [**Event Bus 方法**](api/overview/event_bus_methods_overview.md)
:::

### 示例 {#example}

~~~jsx {5-8}
// 初始化 RichText
const editor = new richtext.Richtext("#root", {
// 配置属性
});
// 订阅 "print" 事件
editor.api.on("print", () => {
    console.log("The document is printing");
});
~~~

**更新日志：** 该事件在 v2.0 中新增

---
sidebar_label: paste
title: paste 事件
description: 您可以在DHTMLX JavaScript RichText库的文档中了解paste事件。浏览开发者指南和API参考，查看代码示例和在线演示，并下载DHTMLX RichText的免费30天试用版本。
---

# paste

### 描述 {#description}

@short: 当粘贴内容时触发

### 用法 {#usage}

~~~jsx {}
"paste": () => boolean | void;
~~~

:::info[信息]
如需处理内部事件，您可以使用[**Event Bus 方法**](api/overview/event_bus_methods_overview.md)
:::

### 示例 {#example}

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

**更新日志：** 该事件在v2.0版本中新增

---
sidebar_label: 重做
title: redo 事件
description: 探索 DHTMLX JavaScript RichText 库文档中的 redo 事件。查看开发者指南、API 参考、代码示例、在线演示，并免费下载 DHTMLX RichText 30 天试用版。
---

# redo

### 描述

@short: 当在菜单栏/工具栏中点击"重做"按钮或通过 Event Bus 方法激活时触发。

### 用法

~~~jsx {}
"redo": () => boolean | void;
~~~

:::info
要管理内部事件，您可以使用 [**Event Bus 方法**](api/overview/event_bus_methods_overview.md)
:::

### 示例

~~~jsx {5-8}
// 初始化 RichText
const editor = new richtext.Richtext("#root", {
    // 配置属性
});
// 订阅 "redo" 事件
editor.api.on("redo", () => {
    console.log("执行了重做操作");
});
~~~

**更新日志:** 此事件在版本 2.0 中引入

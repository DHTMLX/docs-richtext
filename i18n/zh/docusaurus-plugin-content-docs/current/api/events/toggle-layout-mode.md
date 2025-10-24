---
sidebar_label: toggle-layout-mode
title: toggle-layout-mode 事件
description: 您可以在 DHTMLX JavaScript RichText 库的文档中了解 toggle-layout-mode 事件。浏览开发者指南和 API 参考，尝试代码示例和在线演示，并下载 DHTMLX RichText 的免费 30 天试用版。
---

# toggle-layout-mode

### 描述

@short: 每当布局模式切换时触发

### 用法

~~~jsx {}
"toggle-layout-mode": ({ mode?: "classic" | "document" }) => boolean | void;
~~~

### 参数

**toggle-layout-mode** 事件的回调函数接收一个包含以下参数的对象:

- `mode` - 指示布局模式。可用选项为:`"classic" | "document"`

:::info
要处理内部事件，您可以使用 [**Event Bus 方法**](api/overview/event_bus_methods_overview.md)
:::

### 示例

~~~jsx {5-11}
// 初始化 RichText
const editor = new richtext.Richtext("#root", {
    // 配置属性
});
// 订阅 "toggle-layout-mode" 事件
editor.api.on("toggle-layout-mode", (obj) => {
    console.log(obj);
    console.log("布局模式已更改");
});
// 设置为 "document" 布局模式
editor.api.exec("toggle-layout-mode", { mode: "document" });
~~~

**更新日志:** 该事件自 v2.0 版本引入

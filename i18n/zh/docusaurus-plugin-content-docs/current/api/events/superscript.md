---
sidebar_label: 上标
title: superscript 事件
description: 探索 DHTMLX JavaScript RichText 库中的 superscript 事件文档。查看开发者指南、API 参考，尝试代码示例和在线演示，并下载 DHTMLX RichText 的免费30天试用版。
---

# superscript

### 描述

@short: 当菜单栏或工具栏中的"上标"按钮被点击，或通过事件总线方法激活时，会触发此事件。

### 用法

~~~jsx {}
"superscript": () => boolean | void;
~~~

:::info
有关管理内部事件的信息，请参阅 [**Event Bus methods**](api/overview/event_bus_methods_overview.md)。
:::

### 示例

~~~jsx {5-9}
// 初始化 RichText
const editor = new richtext.Richtext("#root", {
    // 配置属性
});
// 订阅 "superscript" 事件
editor.api.on("superscript", () => {
    console.log("已应用上标");
});
// 触发 "superscript" 事件
editor.api.exec("superscript", {});
~~~

**更新日志:** 此事件自 v2.0 版本引入

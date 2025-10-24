---
sidebar_label: 下标
title: subscript 事件
description: 探索 DHTMLX JavaScript RichText 库中的 subscript 事件。查看开发者指南、API 参考，尝试代码示例和在线演示，并下载 DHTMLX RichText 的免费 30 天试用版。
---

# subscript

### 描述

@short: 当在菜单栏/工具栏中点击"下标"按钮或通过事件总线方法调用时触发

### 用法

~~~jsx {}
"subscript": () => boolean | void;
~~~

:::info
要处理内部事件，可以使用 [**事件总线方法**](api/overview/event_bus_methods_overview.md)
:::

### 示例

~~~jsx {5-10}
// 初始化 RichText
const editor = new richtext.Richtext("#root", {
    // 配置属性
});
// 监听 "subscript" 事件
editor.api.on("subscript", () => {
    console.log("已应用下标");
});
// 执行 "subscript" 事件
editor.api.exec("subscript", {});
~~~

**更新日志:** 此事件在 v2.0 中引入

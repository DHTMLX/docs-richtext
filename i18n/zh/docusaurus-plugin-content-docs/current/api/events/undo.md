---
sidebar_label: undo
title: undo 事件
description: 探索 DHTMLX JavaScript RichText 库中的 undo 事件。查看开发者指南、API 参考，尝试代码示例和在线演示，并免费下载 30 天试用版的 DHTMLX RichText。
---

# undo

### 描述

@short: 当在菜单栏/工具栏中点击"撤销"按钮或通过 Event Bus 方法激活时触发。

### 用法

~~~jsx {}
"undo": () => boolean | void;
~~~

:::info
内部事件可以使用 [**Event Bus 方法**](api/overview/event_bus_methods_overview.md) 进行管理
:::

### 示例

~~~jsx {5-8}
// 初始化 RichText
const editor = new richtext.Richtext("#root", {
    // 配置属性
});
// 监听 "undo" 事件
editor.api.on("undo", () => {
    console.log("执行了撤销操作");
});
~~~

**更新日志:** 此事件自 v2.0 版本引入

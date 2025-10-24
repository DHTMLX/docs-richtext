---
sidebar_label: cut
title: cut 事件
description: 探索 DHTMLX JavaScript RichText 库中的 cut 事件文档。查看开发者指南、API 参考，尝试代码示例和实时演示，并免费下载 DHTMLX RichText 的 30 天试用版。
---

# cut

### 描述

@short: 当选中文本被剪切时触发

### 用法

~~~jsx {}
"cut": () => boolean | void;
~~~

:::info
要管理内部事件，可以使用 [**Event Bus 方法**](api/overview/event_bus_methods_overview.md)。
:::

### 示例

~~~jsx {5-8}
// 初始化 RichText
const editor = new richtext.Richtext("#root", {
    // 配置属性
});
// 订阅 "cut" 事件
editor.api.on("cut", () => {
    console.log("选中文本已被剪切");
});
~~~

**更新日志:** 该事件自 v2.0 版本引入

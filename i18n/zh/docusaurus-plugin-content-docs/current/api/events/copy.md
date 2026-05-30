---
sidebar_label: copy
title: copy 事件
description: 您可以在 DHTMLX JavaScript RichText 库的文档中了解 copy 事件。浏览开发指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX RichText 的免费 30 天评估版本。
---

# copy

### 描述

@short: 复制选定文本时触发

### 用法

~~~jsx {}
"copy": () => boolean | void;
~~~

:::info
如需处理内部事件，可以使用 [**Event Bus 方法**](api/overview/event_bus_methods_overview.md)
:::

### 示例

~~~jsx {5-8}
// 初始化 RichText
const editor = new richtext.Richtext("#root", {
    // 配置属性
});
// 订阅 "copy" 事件
editor.api.on("copy", () => {
    console.log("Selected text was copied");
});
~~~

**更新日志：** 该事件在 v2.0 中添加

---
sidebar_label: indent
title: indent 事件
description: 您可以在 DHTMLX JavaScript RichText 库的文档中了解 indent 事件。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX RichText 的免费 30 天评估版本。
---

# indent

### 描述

@short: 增加块缩进时触发

### 用法

~~~jsx {}
"indent": ({ step: number }) => boolean | void;
~~~

### 参数

**indent** 事件的回调函数可接收一个包含以下参数的对象：

- `step` - 缩进增加的步长

:::info
如需处理内部事件，可使用 [**Event Bus methods**](api/overview/event_bus_methods_overview.md)
:::

### 示例

~~~jsx {5-9}
// 初始化 RichText
const editor = new richtext.Richtext("#root", {
    // 配置属性
});
// 订阅 "indent" 事件
editor.api.on("indent", (obj) => {
    console.log(obj);
    console.log("The indention was increased");
});
~~~

**变更日志：** 该事件在 v2.0 中新增

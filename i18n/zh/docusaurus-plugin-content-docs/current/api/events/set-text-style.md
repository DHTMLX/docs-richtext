---
sidebar_label: set-text-style
title: set-text-style 事件
description: 您可以在 DHTMLX JavaScript RichText 库的文档中了解 set-text-style 事件。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX RichText 的免费 30 天评估版本。
---

# set-text-style

### 描述

@short: 在设置文本样式时触发

### 用法

~~~jsx {}
"set-text-style": ({ tag: TBlockType }) => boolean | void;

type TBlockType = "p" | "blockquote" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
~~~

### 参数

**set-text-style** 事件的回调函数可以接收一个包含以下参数的对象：

- `tag` - 文本样式

:::info
如需处理内部事件，可以使用 [**Event Bus 方法**](api/overview/event_bus_methods_overview.md)
:::

### 示例

~~~jsx {5-13}
// 初始化 RichText
const editor = new richtext.Richtext("#root", {
    // 配置属性
});
// 订阅 "set-text-style" 事件
editor.api.on("set-text-style", (obj) => {
    console.log(obj.tag);
    console.log("The text style was changed");
});
// 应用新的文本样式
editor.api.exec("set-text-style", {
    tag: "blockquote"
});
~~~

**变更日志：** 该事件在 v2.0 中新增

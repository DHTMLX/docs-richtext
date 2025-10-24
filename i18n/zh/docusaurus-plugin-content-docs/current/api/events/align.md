---
sidebar_label: align
title: align 事件
description: 探索 DHTMLX JavaScript RichText 库文档中的 align 事件。查看开发者指南、API 参考，尝试代码示例和在线演示，并免费下载 DHTMLX RichText 30 天试用版。
---

# align

### 描述

@short: 当通过菜单栏/工具栏或事件总线方法更新文本对齐时触发。

### 用法

~~~jsx {}
"align": ({ 
    align: "left" | "center" | "right" | "justify"
}) => boolean | void;
~~~

### 参数

**align** 事件的回调函数接收一个包含以下属性的对象:

- `align` - 指定文本对齐方式，可选值为 `"left" | "center" | "right" | "justify"`

:::info
内部事件可以通过 [**Event Bus methods**](api/overview/event_bus_methods_overview.md) 进行处理
:::

### 示例

~~~jsx {5-12}
// 初始化 RichText
const editor = new richtext.Richtext("#root", {
    // 配置属性
});
// 监听 "align" 事件
editor.api.on("align", (obj) => {
    console.log(`Align to: ${obj.align}`);
});
// 设置文本对齐为左对齐
editor.api.exec("align", {
    align: "left"
}); 
~~~

**更新日志:** 此事件在版本 2.0 中引入

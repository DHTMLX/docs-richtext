---
sidebar_label: align
title: align 事件
description: 您可以在 DHTMLX JavaScript RichText 库的文档中了解 align 事件。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX RichText 的 30 天免费评估版本。
---

# align

### 描述 {#description}

@short: 当通过菜单栏/工具栏或 Event Bus 方法更改文本对齐方式时触发

### 用法 {#usage}

~~~jsx {}
"align": ({ 
    align: "left" | "center" | "right" | "justify"
}) => boolean | void;
~~~

### 参数 {#parameters}

`align` 事件的回调函数可接收一个包含以下参数的对象：

- `align` - 文本对齐方式。可指定以下值之一：`"left" | "center" | "right" | "justify"`

:::info[信息]
如需处理内部事件，可使用 [**Event Bus 方法**](api/overview/event_bus_methods_overview.md)
:::

### 示例 {#example}

~~~jsx {5-12}
// 初始化 RichText
const editor = new richtext.Richtext("#root", {
    // 配置属性
});
// 订阅 "align" 事件
editor.api.on("align", (obj) => {
    console.log(`Align to: ${obj.align}`);
});
// 将文本左对齐
editor.api.exec("align", {
    align: "left"
}); 
~~~

**变更日志：** 该事件在 v2.0 中添加

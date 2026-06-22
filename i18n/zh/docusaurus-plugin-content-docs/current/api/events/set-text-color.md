---
sidebar_label: set-text-color
title: set-text-color 事件
description: 您可以在 DHTMLX JavaScript RichText 库的文档中了解 set-text-color 事件。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX RichText 的免费 30 天评估版本。
---

# set-text-color

### 描述 {#description}

@short: 设置文本颜色和/或文本背景颜色时触发

### 用法 {#usage}

~~~jsx {}
"set-text-color": (ITextColor) => boolean | void;

interface ITextColor {
    color?: string;
    background?: string;
}
~~~

### 参数 {#parameters}

`set-text-color` 事件的回调函数可接收一个包含以下参数的对象：

- `color` - 文本颜色
- `background` - 文本背景颜色

:::info[信息]
如需处理内部事件，可使用 [**Event Bus 方法**](api/overview/event_bus_methods_overview.md)
:::

### 示例 {#example}

~~~jsx {5-14}
// 初始化 RichText
const editor = new richtext.Richtext("#root", {
    // 配置属性
});
// 订阅 "set-text-color" 事件
editor.api.on("set-text-color", (obj) => {
    console.log(obj);
    console.log("The text color and/or background text color were changed");
});
// 应用文本颜色和背景色
editor.api.exec("set-text-color", {
   color: "red",
   background: "blue"
});
~~~

**变更日志：** 该事件在 v2.0 中新增

---
sidebar_label: set-text-color
title: set-text-color 事件
description: 探索 DHTMLX JavaScript RichText 库文档中的 set-text-color 事件。查找开发者指南、API 参考、代码示例、在线演示，并获取 DHTMLX RichText 的免费 30 天试用。
---

# set-text-color

### 描述

@short: 当应用文本颜色和/或背景颜色时触发

### 用法

~~~jsx {}
"set-text-color": (ITextColor) => boolean | void;

interface ITextColor {
    color?: string;
    background?: string;
}
~~~

### 参数

**set-text-color** 事件的回调函数接收一个包含以下属性的对象:

- `color` - 文本颜色
- `background` - 文本背景颜色

:::info
要管理内部事件，可以参考 [**Event Bus methods**](api/overview/event_bus_methods_overview.md)
:::

### 示例

~~~jsx {5-14}
// 初始化 RichText
const editor = new richtext.Richtext("#root", {
    // 配置属性
});
// 监听 "set-text-color" 事件
editor.api.on("set-text-color", (obj) => {
    console.log(obj);
    console.log("文本颜色和/或背景颜色已更新");
});
// 设置文本颜色和背景
editor.api.exec("set-text-color", {
   color: "red",
   background: "blue"
});
~~~

**更新日志:** 本事件自 v2.0 版本引入

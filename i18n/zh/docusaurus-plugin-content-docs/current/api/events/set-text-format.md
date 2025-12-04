---
sidebar_label: set-text-format
title: set-text-format 事件
description: 您可以在 DHTMLX JavaScript RichText 库的文档中了解 set-text-format 事件。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX RichText 的免费 30 天评估版本。
---

# set-text-format

### 描述

@short: 当应用文本格式时触发

### 用法

~~~jsx {}
"set-text-format": (ITextFormat) => boolean | void;

interface ITextFormat {
    bold?: boolean;
    italic?: boolean;
    strike?: boolean;
    underline?: boolean;
}
~~~

:::info
要管理内部事件，您可以参考 [**Event Bus methods**](api/overview/event_bus_methods_overview.md)
:::

### 参数

**set-text-format** 事件的回调函数接收一个包含以下可选属性的对象:

- `bold` - 表示加粗文本格式
- `italic` - 表示斜体文本格式
- `strike` - 表示删除线文本格式
- `underline` - 表示下划线文本格式

### 示例

~~~jsx {5-14}
// 初始化 RichText
const editor = new richtext.Richtext("#root", {
    // 配置属性
});
// 监听 "set-text-format" 事件
editor.api.on("set-text-format", (obj) => {
    console.log(obj);
    console.log("文本格式已更改");
});
// 应用斜体和加粗格式
editor.api.exec("set-text-format", {
    italic: true, 
    bold: true
});
~~~

**更新日志:** 此事件自版本 2.0 引入

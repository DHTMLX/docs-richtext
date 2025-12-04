---
sidebar_label: set-line-height
title: set-line-height 事件
description: 您可以在 DHTMLX JavaScript RichText 库的文档中了解 set-line-height 事件。浏览开发者指南和 API 参考，尝试代码示例和在线演示，并下载 DHTMLX RichText 的免费 30 天试用版。
---

# set-line-height

### 描述

@short: 每当设置行高时触发

### 用法

~~~jsx {}
"set-line-height": ({ lineHeight: string }) => boolean | void;
~~~

### 参数

**set-line-height** 事件的回调函数接收一个包含以下参数的对象:

- `lineHeight` - 当前设置的行高值

:::info
要管理内部事件，您可以参考[**事件总线方法**](api/overview/event_bus_methods_overview.md)
:::

### 示例

~~~jsx {5-13}
// 初始化 RichText
const editor = new richtext.Richtext("#root", {
    // 配置属性
});
// 监听 "set-line-height" 事件
editor.api.on("set-line-height", (obj) => {
    console.log(obj);
    console.log("行高已更改");
});
// 设置新的行高
editor.api.exec("set-line-height", {
   lineHeight: "15px"
});
~~~

**更新日志:** 该事件在 v2.0 版本中引入

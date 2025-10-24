---
sidebar_label: 设置字体大小
title: set-font-size 事件
description: 探索 DHTMLX JavaScript RichText 库文档中的 set-font-size 事件。查看开发者指南、API 参考，试用演示，并免费下载 DHTMLX RichText 30 天免费试用版。
---

# set-font-size

### 描述

@short: 当设置字体大小时触发

### 用法

~~~jsx {}
"set-font-size": ({ fontSize: string }) => boolean | void;
~~~

### 参数

**set-font-size** 事件的回调函数接收一个包含以下参数的对象:

- `fontSize` - 要应用的字体大小

:::info
要管理内部事件，可以参考 [**Event Bus 方法**](api/overview/event_bus_methods_overview.md)
:::

### 示例

~~~jsx {5-13}
// 初始化 RichText
const editor = new richtext.Richtext("#root", {
    // 配置属性
});
// 监听 "set-font-size" 事件
editor.api.on("set-font-size", (obj) => {
    console.log(obj.fontSize);
    console.log("字体大小已更改");
});
// 设置新的字体大小
editor.api.exec("set-font-size", {
    fontSize: "11px"
});
~~~

**更新日志:** 此事件自 v2.0 版本引入

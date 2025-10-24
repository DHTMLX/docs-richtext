---
sidebar_label: set-text-style
title: set-text-style 事件
description: 探索 DHTMLX JavaScript RichText 库中的 set-text-style 事件文档。查看开发者指南、API 参考，试用代码示例和在线演示，并免费下载 DHTMLX RichText 30 天试用版。
---

# set-text-style

### 描述

@short: 当应用文本样式时触发

### 用法

~~~jsx {}
"set-text-style": ({ tag: TBlockType }) => boolean | void;

type TBlockType = "p" | "blockquote" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
~~~

### 参数

**set-text-style** 事件的回调函数接收一个包含以下属性的对象:

- `tag` - 指定正在应用的文本样式

:::info
要管理内部事件，您可以参考 [**Event Bus methods**](api/overview/event_bus_methods_overview.md)
:::

### 示例

~~~jsx {5-13}
// 初始化 RichText
const editor = new richtext.Richtext("#root", {
    // 配置属性
});
// 监听 "set-text-style" 事件
editor.api.on("set-text-style", (obj) => {
    console.log(obj.tag);
    console.log("文本样式已更新");
});
// 更改文本样式
editor.api.exec("set-text-style", {
    tag: "blockquote"
});
~~~

**更新日志:** 此事件自 v2.0 版本引入

---
sidebar_label: 缩进
title: indent 事件
description: 探索 DHTMLX JavaScript RichText 库文档中的 indent 事件。查看开发者指南、API 参考、代码示例、实时演示，并免费下载 30 天试用版的 DHTMLX RichText。
---

# indent

### 描述

@short: 当块缩进增加时触发

### 用法

~~~jsx {}
"indent": ({ step: number }) => boolean | void;
~~~

### 参数

**indent** 事件的回调函数接收一个包含以下属性的对象:

- `step` - 缩进增加的数量

:::info
要管理内部事件，可以参考 [**Event Bus methods**](api/overview/event_bus_methods_overview.md)
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
    console.log("缩进已增加");
});
~~~

**更新日志:** 此事件在版本 2.0 中引入

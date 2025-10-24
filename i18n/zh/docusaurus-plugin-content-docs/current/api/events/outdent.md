---
sidebar_label: 减少缩进
title: outdent 事件
description: 探索 DHTMLX JavaScript RichText 库中的 outdent 事件文档。查看开发者指南、API 参考、代码示例、在线演示，并免费下载 DHTMLX RichText 30 天试用版。
---

# outdent

### 描述

@short: 当块级缩进减少时触发

### 用法

~~~jsx {}
"outdent": ({ step: number }) => boolean | void;
~~~

### 参数

**outdent** 事件的回调函数接收一个包含以下内容的对象:

- `step` - 缩进减少的数量

:::info
要使用内部事件，可以参考 [**Event Bus methods**](api/overview/event_bus_methods_overview.md)
:::

### 示例

~~~jsx {5-9}
// 初始化 RichText
const editor = new richtext.Richtext("#root", {
    // 配置属性
});
// 监听 "outdent" 事件
editor.api.on("outdent", (obj) => {
    console.log(obj);
    console.log("缩进已减少");
});
~~~

**更新日志:** 该事件自 v2.0 版本引入

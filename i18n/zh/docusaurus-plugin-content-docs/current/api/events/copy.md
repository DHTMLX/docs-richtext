---
sidebar_label: 复制
title: copy 事件
description: 探索 DHTMLX JavaScript RichText 库中的 copy 事件文档。访问开发者指南、API 参考，试用在线演示和代码示例，并免费下载 DHTMLX RichText 的 30 天试用版。
---

# copy

### 描述

@short: 当选中文本被复制时触发

### 用法

~~~jsx {}
"copy": () => boolean | void;
~~~

:::info
要处理内部事件，可以使用 [**Event Bus 方法**](api/overview/event_bus_methods_overview.md)
:::

### 示例

~~~jsx {5-8}
// 初始化 RichText
const editor = new richtext.Richtext("#root", {
    // 配置属性
});
// 监听 "copy" 事件
editor.api.on("copy", () => {
    console.log("选中的文本已被复制");
});
~~~

**更新日志:** 此事件自 v2.0 版本引入

---
sidebar_label: clear-text-format
title: clear-text-format 事件
description: 您可以在 DHTMLX JavaScript RichText 库的文档中了解 clear-text-format 事件。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载免费的 30 天评估版 DHTMLX RichText。
---

# clear-text-format

### 描述

@short: 当通过菜单栏、工具栏或事件总线方法移除文本格式时触发。

### 用法

~~~jsx {}
"clear-text-format": () => boolean | void;
~~~

:::info
要管理内部事件，您可以使用 [**事件总线方法**](api/overview/event_bus_methods_overview.md)
:::

### 示例

~~~jsx {5-10}
// 初始化 RichText
const editor = new richtext.Richtext("#root", {
    // 配置属性
});
// 订阅 "clear-text-format" 事件
editor.api.on("clear-text-format", () => {
    console.log("文本格式已被清除");
});
// 清除文本格式
editor.api.exec("clear-text-format", {});
~~~

**更新日志:** 此事件在 v2.0 版本中引入

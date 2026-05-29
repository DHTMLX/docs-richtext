---
sidebar_label: create-new
title: create-new 事件
description: 您可以在 DHTMLX JavaScript RichText 库的文档中了解 create-new 事件。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX RichText 的 30 天免费评估版本。
---

# create-new

### 描述

@short: 在菜单栏中点击"New"选项或通过 Event Bus 方法触发时触发

### 用法

~~~jsx {}
"create-new": ({ reset?: boolean }) => boolean | void;
~~~

### 参数

**create-new** 事件的回调函数可接收一个包含以下参数的对象：

- `reset` - 创建新文件时重置历史记录

:::info
如需处理内部事件，可使用 [**Event Bus 方法**](api/overview/event_bus_methods_overview.md)
:::

### 示例

~~~jsx {5-10}
// 初始化 RichText
const editor = new richtext.Richtext("#root", {
    // 配置属性
});
// 订阅 "create-new" 事件
editor.api.on("create-new", ({ reset }) => {
    console.log(`Document has been cleared. History has ${reset ? "" : "not"} been reset.`);
});
// 创建新文件并重置历史记录
editor.api.exec("create-new", { reset: true });
~~~

**更新日志：** 该事件在 v2.0 中添加

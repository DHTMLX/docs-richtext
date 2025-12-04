---
sidebar_label: create-new
title: create-new 事件
description: 了解 DHTMLX JavaScript RichText 库中 create-new 事件的工作原理。探索开发者指南、API 参考，试用代码示例和在线演示，并获取 DHTMLX RichText 的免费 30 天试用。
---

# create-new

### 描述

@short: 当从菜单栏选择"新建"选项或通过事件总线方法触发时，会触发此事件。

### 用法

~~~jsx {}
"create-new": ({ reset?: boolean }) => boolean | void;
~~~

### 参数

**create-new** 事件的回调函数接受一个包含以下属性的对象:

- `reset` - 指示在创建新文件时是否应重置历史记录。

:::info
要管理内部事件，您可以使用 [**事件总线方法**](api/overview/event_bus_methods_overview.md)。
:::

### 示例

~~~jsx {5-10}
// 初始化 RichText
const editor = new richtext.Richtext("#root", {
    // 配置属性
});
// 订阅 "create-new" 事件
editor.api.on("create-new", ({ reset }) => {
    console.log(`文档已清空。历史记录已${reset ? "" : "未"}重置。`);
});
// 创建新文件并重置历史记录
editor.api.exec("create-new", { reset: true });
~~~

**更新日志:** 此事件在 v2.0 版本中引入

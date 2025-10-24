---
sidebar_label: toggle-shortcut-info
title: toggle-shortcut-info 事件
description: 您可以在 DHTMLX JavaScript RichText 库的文档中了解 toggle-shortcut-info 事件。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX RichText 的免费 30 天评估版本。
---

# toggle-shortcut-info

### 描述

@short: 当快捷键信息切换时触发

### 用法

~~~jsx {}
"toggle-shortcut-info": ({ mode?: boolean }) => boolean | void;
~~~

### 参数

**toggle-shortcut-info** 事件的回调函数接收一个包含以下属性的对象:

- `mode` - 控制快捷键信息的显示；`true` 显示快捷键信息弹窗，`false` 隐藏它

:::info
要管理内部事件，您可以参考 [**事件总线方法**](api/overview/event_bus_methods_overview.md)
:::

### 示例

~~~jsx {5-9}
// 初始化 RichText
const editor = new richtext.Richtext("#root", {
    // 配置属性
});
// 订阅 "toggle-shortcut-info" 事件
editor.api.on("toggle-shortcut-info", (obj) => {
    console.log(obj);
    console.log("快捷键信息已显示");
});
// 启用快捷键信息
editor.api.exec("toggle-shortcut-info", { mode: true });
~~~

**更新日志:** 该事件自 v2.0 版本引入

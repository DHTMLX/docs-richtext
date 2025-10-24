---
sidebar_label: toggle-fullscreen-mode
title: toggle-fullscreen-mode 事件
description: 您可以在 DHTMLX JavaScript RichText 库的文档中了解 toggle-fullscreen-mode 事件。浏览开发者指南和 API 参考，试用代码示例和在线演示，并免费下载 DHTMLX RichText 的 30 天评估版本。
---

# toggle-fullscreen-mode

### 描述

@short: 当切换全屏模式开关时触发

### 用法

~~~jsx {}
"toggle-fullscreen-mode": ({ mode?: boolean }) => boolean | void;
~~~

### 参数

**toggle-fullscreen-mode** 事件的回调函数接受一个包含以下属性的对象:

- `mode` - 指示是否启用了全屏模式

:::info
要管理内部事件，您可以使用 [**Event Bus 方法**](api/overview/event_bus_methods_overview.md)
:::

### 示例

~~~jsx {5-9}
// 初始化 RichText
const editor = new richtext.Richtext("#root", {
    // 配置属性
});
// 订阅 "toggle-fullscreen-mode" 事件
editor.api.on("toggle-fullscreen-mode", (obj) => {
    console.log(obj);
    console.log("全屏模式已更改");
});
// 启用全屏模式
editor.api.exec("toggle-fullscreen-mode", { mode: true });
~~~

**更新日志:** 该事件在 v2.0 版本中引入

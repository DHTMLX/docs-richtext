---
sidebar_label: toggle-shortcut-info
title: toggle-shortcut-info 事件
description: 您可以在 DHTMLX JavaScript RichText 库的文档中了解 toggle-shortcut-info 事件。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX RichText 的免费 30 天评估版本。
---

# toggle-shortcut-info

### 描述

@short: 切换快捷键信息时触发

### 用法

~~~jsx {}
"toggle-shortcut-info": ({ mode?: boolean }) => boolean | void;
~~~

### 参数

**toggle-shortcut-info** 事件的回调函数可接受一个包含以下参数的对象：

- `mode` - 启用快捷键信息；`true` 表示显示快捷键信息弹窗，`false` 表示隐藏快捷键信息弹窗

:::info
如需处理内部事件，可使用 [**Event Bus 方法**](api/overview/event_bus_methods_overview.md)
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
    console.log("The shortcut info was shown");
});
// 启用快捷键信息
editor.api.exec("toggle-shortcut-info", { mode: true });
~~~

**更新日志：** 该事件在 v2.0 版本中新增

---
sidebar_label: toggle-layout-mode
title: toggle-layout-mode 事件
description: 您可以在 DHTMLX JavaScript RichText 库的文档中了解 toggle-layout-mode 事件。浏览开发指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX RichText 的免费 30 天评估版本。
---

# toggle-layout-mode

### 描述 {#description}

@short: 切换布局模式时触发

### 用法 {#usage}

~~~jsx {}
"toggle-layout-mode": ({ mode?: "classic" | "document" }) => boolean | void;
~~~

### 参数 {#parameters}

**toggle-layout-mode** 事件的回调函数可以接受一个包含以下参数的对象：

- `mode` - 布局模式。可用的模式如下：`"classic" | "document"`

:::info[信息]
如需处理内部事件，您可以使用 [**Event Bus 方法**](api/overview/event_bus_methods_overview.md)
:::

### 示例 {#example}

~~~jsx {5-11}
// 初始化 RichText
const editor = new richtext.Richtext("#root", {
    // 配置属性
});
// 订阅 "toggle-layout-mode" 事件
editor.api.on("toggle-layout-mode", (obj) => {
    console.log(obj);
    console.log("The layout mode was changed");
});
// 设置 "document" 布局模式
editor.api.exec("toggle-layout-mode", { mode: "document" });
~~~

**更新日志：** 该事件在 v2.0 中新增

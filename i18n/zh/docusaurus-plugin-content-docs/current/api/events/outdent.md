---
sidebar_label: outdent
title: outdent 事件
description: 您可以在 DHTMLX JavaScript RichText 库的文档中了解 outdent 事件。浏览开发指南和 API 参考，尝试代码示例和在线演示，并下载 DHTMLX RichText 的免费 30 天评估版本。
---

# outdent

### 描述 {#description}

@short: 当减少块缩进时触发

### 用法 {#usage}

~~~jsx {}
"outdent": ({ step: number }) => boolean | void;
~~~

### 参数 {#parameters}

`outdent` 事件的回调函数可接收一个包含以下参数的对象：

- `step` - 缩进减少的步长

:::info[信息]
如需处理内部事件，可以使用 [**Event Bus 方法**](api/overview/event_bus_methods_overview.md)
:::

### 示例 {#example}

~~~jsx {5-9}
// 初始化 RichText
const editor = new richtext.Richtext("#root", {
    // 配置属性
});
// 订阅 "outdent" 事件
editor.api.on("outdent", (obj) => {
    console.log(obj);
    console.log("The indention was decreased");
});
~~~

**变更日志：** 该事件在 v2.0 中新增

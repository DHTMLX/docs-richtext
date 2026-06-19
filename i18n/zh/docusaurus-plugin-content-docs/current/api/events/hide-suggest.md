---
sidebar_label: hide-suggest
title: hide-suggest 事件
description: 您可以在 DHTMLX JavaScript RichText 库的文档中了解 hide-suggest 事件。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX RichText 的 30 天免费评估版本。
---

# hide-suggest

### 描述 {#description}

@short: 在建议下拉列表关闭时触发

当发生以下任意情况时，该事件会触发：

- 用户从下拉列表中选择了一个条目
- 用户按下 `Escape`
- 光标离开了触发上下文（例如，在触发字符之前按下 `Backspace`）
- 当前查询未返回任何匹配项

### 用法 {#usage}

~~~jsx {}
"hide-suggest": () => boolean | void;
~~~

### 参数 {#parameters}

`hide-suggest` 事件的回调函数不接收任何参数。

:::info[信息]
要处理内部事件，请使用 [**Event Bus 方法**](api/overview/event_bus_methods_overview.md)。
:::

### 示例 {#example}

~~~jsx {5-7}
// 初始化 RichText
const editor = new richtext.Richtext("#root", {
    // 配置属性
});
// 订阅 "hide-suggest" 事件
editor.api.on("hide-suggest", () => {
    console.log("Suggestion dropdown closed");
});
~~~

**变更日志：** 该事件已在 v2.1 中新增

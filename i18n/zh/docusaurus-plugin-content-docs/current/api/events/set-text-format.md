---
sidebar_label: set-text-format
title: set-text-format 事件
description: 您可以在 DHTMLX JavaScript RichText 库的文档中了解 set-text-format 事件。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX RichText 的免费 30 天评估版本。
---

# set-text-format

### 描述 {#description}

@short: 在设置文本格式时触发

### 用法 {#usage}

~~~jsx {}
"set-text-format": (ITextFormat) => boolean | void;

interface ITextFormat {
    bold?: boolean;
    italic?: boolean;
    strike?: boolean;
    underline?: boolean;
}
~~~

:::info[信息]
处理内部事件可使用 [**Event Bus 方法**](api/overview/event_bus_methods_overview.md)
:::

### 参数 {#parameters}

**set-text-format** 事件的回调函数可接收一个包含以下参数的对象：

- `bold` - 粗体文本格式
- `italic` - 斜体文本格式
- `strike` - 删除线文本格式
- `underline` - 下划线文本格式

### 示例 {#example}

~~~jsx {5-14}
// 初始化 RichText
const editor = new richtext.Richtext("#root", {
    // 配置属性
});
// 订阅 "set-text-format" 事件
editor.api.on("set-text-format", (obj) => {
    console.log(obj);
    console.log("The text format was changed");
});
// 应用 "italic" 和 bold 文本格式
editor.api.exec("set-text-format", {
    italic: true, 
    bold: true
});
~~~

**变更日志：** 该事件在 v2.0 中新增

---
sidebar_label: set-font-family
title: set-font-family 事件
description: 您可以在 DHTMLX JavaScript RichText 库的文档中了解 set-font-family 事件。浏览开发指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX RichText 的免费 30 天评估版本。
---

# set-font-family

### 描述 {#description}

@short: 在设置字体系列时触发

### 用法 {#usage}

~~~jsx {}
"set-font-family": ({ fontFamily: string }) => boolean | void;
~~~

### 参数 {#parameters}

**set-font-family** 事件的回调函数可接收一个包含以下参数的对象：

- `fontFamily` - 要应用的字体系列。可用字体如下：`"Roboto" | "Arial" | "Georgia" | "Tahoma" | "Times New Roman" | "Verdana"`

:::info[信息]
如需处理内部事件，您可以使用 [**Event Bus 方法**](api/overview/event_bus_methods_overview.md)
:::

### 示例 {#example}

~~~jsx {5-13}
// 初始化 RichText
const editor = new richtext.Richtext("#root", {
    // 配置属性
});
// 订阅 "set-font-family" 事件
editor.api.on("set-font-family", (obj) => {
    console.log(obj.fontFamily);
    console.log("The font family was changed");
});
// 应用新的字体系列
editor.api.exec("set-font-family", {
    fontFamily: "Roboto"
}); 
~~~

**变更日志：** 该事件在 v2.0 中新增

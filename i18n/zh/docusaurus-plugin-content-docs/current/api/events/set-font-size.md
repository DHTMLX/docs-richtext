---
sidebar_label: set-font-size
title: set-font-size 事件
description: 您可以在 DHTMLX JavaScript RichText 库的文档中了解 set-font-size 事件。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX RichText 的免费 30 天评估版本。
---

# set-font-size

### 描述 {#description}

@short: 在设置字体大小时触发

### 用法 {#usage}

~~~jsx {}
"set-font-size": ({ fontSize: string }) => boolean | void;
~~~

### 参数 {#parameters}

**set-font-size** 事件的回调函数可以接受一个包含以下参数的对象：

- `fontSize` - 要应用的字体大小

:::info[信息]
要处理内部事件，您可以使用 [**Event Bus 方法**](api/overview/event_bus_methods_overview.md)
:::

### 示例 {#example}

~~~jsx {5-13}
// 初始化 RichText
const editor = new richtext.Richtext("#root", {
    // 配置属性
});
// 订阅 "set-font-size" 事件
editor.api.on("set-font-size", (obj) => {
    console.log(obj.fontSize);
    console.log("The font size was changed");
});
// 应用新的字体大小
editor.api.exec("set-font-size", {
    fontSize: "11px"
});
~~~

**更新日志：** 该事件已在 v2.0 中添加

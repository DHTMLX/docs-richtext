---
sidebar_label: show-popup
title: show-popup Event
description: 您可以在 DHTMLX JavaScript RichText 库的文档中了解 show-popup 事件。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX RichText 的免费 30 天评估版本。
---

# show-popup

### Description

@short: 当弹出框显示/隐藏时触发

### Usage

~~~jsx {}
"show-popup": (IPopupConfig) => boolean | void;

interface IPopupConfig {
    type: "link" | null;
    image?: boolean;
}
~~~

### Parameters

**show-popup** 事件的 callback 可接收一个包含以下参数的对象：

- `type` - 弹出框的类型
- `image` - 提供对附加上下文的访问（当前光标是否指向图像）

:::info
如需处理内部事件，可使用 [**Event Bus methods**](api/overview/event_bus_methods_overview.md)
:::

### Example

~~~jsx {5-13}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// subscribe to the "show-popup" event
editor.api.on("show-popup", (obj) => {
    console.log(obj);
    console.log("The popup was shown/hidden");
});
// show-popup the text to the left
editor.api.exec("show-popup", {
    type: "link"
}); 
~~~

**Change log:** 该事件在 v2.0 中新增

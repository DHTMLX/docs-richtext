---
sidebar_label: show-popup
title: show-popup 事件
description: 探索 DHTMLX JavaScript RichText 库文档中的 show-popup 事件。查看开发者指南、API 参考，尝试代码示例、实时演示，并免费下载 DHTMLX RichText 的 30 天试用版。
---

# show-popup

### 描述

@short: 当弹出窗口显示或隐藏时触发

### 用法

~~~jsx {}
"show-popup": (IPopupConfig) => boolean | void;

interface IPopupConfig {
    type: "link" | null;
    image?: boolean;
}
~~~

### 参数

**show-popup** 事件的回调函数接收一个包含以下属性的对象:

- `type` - 指定弹出窗口的类型
- `image` - 表示当前光标是否位于图片上方

:::info
要管理内部事件，可以使用 [**Event Bus 方法**](api/overview/event_bus_methods_overview.md)
:::

### 示例

~~~jsx {5-13}
// 初始化 RichText
const editor = new richtext.Richtext("#root", {
    // 配置属性
});
// 订阅 "show-popup" 事件
editor.api.on("show-popup", (obj) => {
    console.log(obj);
    console.log("弹出窗口已显示/隐藏");
});
// 在左侧显示链接类型的弹出窗口
editor.api.exec("show-popup", {
    type: "link"
}); 
~~~

**更新日志:** 此事件自 v2.0 版本引入

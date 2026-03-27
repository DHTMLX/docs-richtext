---
sidebar_label: show-popup
title: show-popup 事件
description: 您可以在 DHTMLX JavaScript RichText 库的文档中了解 show-popup 事件。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX RichText 的免费 30 天评估版本。
---

# show-popup

### 描述 {#description}

@short: 当弹出窗口显示/隐藏时触发

### 用法 {#usage}

~~~jsx {}
"show-popup": (IPopupConfig) => boolean | void;

interface IPopupConfig {
    type: "link" | null;
    image?: boolean;
}
~~~

### 参数 {#parameters}

**show-popup** 事件的回调函数可以接收一个包含以下参数的对象：

- `type` - 弹出窗口的类型
- `image` - 提供对附加上下文的访问（当前光标是否指向图片）

:::info[信息]
如需处理内部事件，您可以使用 [**Event Bus 方法**](api/overview/event_bus_methods_overview.md)
:::

### 示例 {#example}

~~~jsx {5-13}
// 初始化 RichText
const editor = new richtext.Richtext("#root", {
    // 配置属性
});
// 订阅 "show-popup" 事件
editor.api.on("show-popup", (obj) => {
    console.log(obj);
    console.log("The popup was shown/hidden");
});
// 显示链接弹出窗口
editor.api.exec("show-popup", {
    type: "link"
});
~~~

**更新日志：** 该事件在 v2.0 中添加

---
sidebar_label: insert-image
title: insert-image Event
description: 您可以在 DHTMLX JavaScript RichText 库的文档中了解 insert-image 事件。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载免费的 30 天评估版 DHTMLX RichText。
---

# insert-image

### 描述

@short: 在插入图片时触发

### 用法

~~~jsx {}
"insert-image": (IImageContext) => boolean | void;

interface IImageContext {
    id: TID;
    value: string;
    width: number;
    height: number;
    // 来自上传器上下文的额外属性，实际操作不需要
    name?: string;
    file?: File;
    status?: string;
    selected: (ctx: IImageContext) => void;
    uploaded: (ctx: IImageContext) => void;
}
~~~

:::info
处理内部事件可以使用 [**Event Bus 方法**](api/overview/event_bus_methods_overview.md)
:::

### 示例

~~~jsx {5-9}
// 初始化 RichText
const editor = new richtext.Richtext("#root", {
    // 配置属性
});
// 订阅 "insert-image" 事件
editor.api.on("insert-image", (obj) => {
    console.log(obj);
    console.log("The image was inserted");
});
~~~

**变更日志：** 该事件在 v2.0 中添加

---
sidebar_label: insert-image
title: insert-image 事件
description: 探索 DHTMLX JavaScript RichText 库文档中的 insert-image 事件。查看开发者指南、API 参考，尝试代码示例和在线演示，并免费下载 30 天试用版 DHTMLX RichText。
---

# insert-image

### 描述

@short: 当插入图片时触发

### 用法

~~~jsx {}
"insert-image": (IImageContext) => boolean | void;

interface IImageContext {
    id: TID;
    value: string;
    width: number;
    height: number;
    // 来自上传器上下文的额外属性，实际操作不必需
    name?: string;
    file?: File;
    status?: string;
    selected: (ctx: IImageContext) => void;
    uploaded: (ctx: IImageContext) => void;
}
~~~

:::info
要管理内部事件，可以参考 [**Event Bus methods**](api/overview/event_bus_methods_overview.md)
:::

### 示例

~~~jsx {5-9}
// 初始化 RichText
const editor = new richtext.Richtext("#root", {
    // 配置属性
});
// 监听 "insert-image" 事件
editor.api.on("insert-image", (obj) => {
    console.log(obj);
    console.log("图片已插入");
});
~~~

**更新日志:** 此事件自 v2.0 版本引入

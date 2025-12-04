---
sidebar_label: resize-image
title: resize-image 事件
description: 您可以在 DHTMLX JavaScript RichText 库的文档中了解 resize-image 事件。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX RichText 的免费 30 天评估版本。
---

# resize-image

### 描述

@short: 当图像被调整大小时触发

### 用法

~~~jsx {}
"resize-image": ({ id: number, width: number, height: number }) => boolean | void;
~~~

### 参数

**resize-image** 事件的回调函数接收一个包含以下属性的对象:

- `id` - 图像的唯一标识符
- `width` - 图像的新宽度
- `height` - 图像的新高度

:::info
要处理内部事件，您可以使用 [**Event Bus 方法**](api/overview/event_bus_methods_overview.md)
:::

### 示例

~~~jsx {5-9}
// 初始化 RichText
const editor = new richtext.Richtext("#root", {
// 配置属性
});
// 监听 "resize-image" 事件
editor.api.on("resize-image", (obj) => {
    console.log(obj);
    console.log("图像已被调整大小")
});
~~~

**更新日志:** 此事件在 v2.0 版本中引入

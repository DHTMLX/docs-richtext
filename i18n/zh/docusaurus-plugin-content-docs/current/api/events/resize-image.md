---
sidebar_label: resize-image
title: resize-image 事件
description: 您可以在 DHTMLX JavaScript RichText 库的文档中了解 resize-image 事件。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX RichText 的 30 天免费评估版本。
---

# resize-image

### 描述

@short: 调整图片大小时触发

### 用法

~~~jsx {}
"resize-image": ({ id: number, width: number, height: number }) => boolean | void;
~~~

### 参数

**resize-image** 事件的 callback 可接受包含以下参数的对象：

- `id` - 图片 ID
- `width` - 图片宽度
- `height` - 图片高度

:::info
处理内部事件可使用 [**Event Bus 方法**](api/overview/event_bus_methods_overview.md)
:::

### 示例

~~~jsx {5-9}
// initialize RichText
const editor = new richtext.Richtext("#root", {
// configuration properties
});
// subscribe to the "resize-image" event
editor.api.on("resize-image", (obj) => {
    console.log(obj);
    console.log("The image was resized")
});
~~~

**更新日志：** 该事件在 v2.0 中新增

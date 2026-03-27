---
sidebar_label: resize-image
title: resize-image 事件
description: 您可以在 DHTMLX JavaScript RichText 库的文档中了解 resize-image 事件。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX RichText 的免费 30 天评估版本。
---

# resize-image

### 描述 {#description}

@short: 当调整图片大小时触发

### 用法 {#usage}

~~~jsx {}
"resize-image": ({ id: number, width: number, height: number }) => boolean | void;
~~~

### 参数 {#parameters}

**resize-image** 事件的回调函数可以接收一个包含以下参数的对象：

- `id` - 图片 ID
- `width` - 图片宽度
- `height` - 图片高度

:::info[信息]
如需处理内部事件，您可以使用 [**Event Bus 方法**](api/overview/event_bus_methods_overview.md)
:::

### 示例 {#example}

~~~jsx {5-9}
// 初始化 RichText
const editor = new richtext.Richtext("#root", {
// 配置属性
});
// 订阅 "resize-image" 事件
editor.api.on("resize-image", (obj) => {
    console.log(obj);
    console.log("The image was resized")
});
~~~

**更新日志：** 该事件在 v2.0 中添加

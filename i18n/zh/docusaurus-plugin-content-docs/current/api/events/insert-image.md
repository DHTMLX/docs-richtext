---
sidebar_label: insert-image
title: insert-image 事件
description: 您可以在 DHTMLX JavaScript RichText 库的文档中了解 insert-image 事件。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX RichText 的 30 天免费评估版本。
---

# insert-image

### 描述 {#description}

@short: 在插入图片时触发（通过工具栏、菜单栏、剪贴板粘贴或拖放操作）

### 用法 {#usage}

~~~jsx {}
"insert-image": (IImageContext) => boolean | void;

interface IImageContext {
    id: TID;
    value: string;  // 图片来源：当设置了 imageUploadUrl 时为服务器 URL，当图片内联时为 base64 数据 URL
    width: number;
    height: number;
    // 来自上传器上下文的额外属性，实际操作中不是必需的
    name?: string;
    file?: File;
    status?: string;
    selected: (ctx: IImageContext) => void;
    uploaded: (ctx: IImageContext) => void;
}
~~~

:::note[注意]
`value` 字段保存的是外部 URL（当配置了 [`imageUploadUrl`](api/config/image-upload-url.md) 且上传成功时）或 base64 数据 URL（当省略 `imageUploadUrl` 且图片在客户端内联时）。处理图片来源的 handler（例如，用于重写 URL 或验证主机）必须同时兼容这两种格式。
:::

:::info[信息]
如需处理内部事件，您可以使用 [**Event Bus 方法**](api/overview/event_bus_methods_overview.md)
:::

### 示例 {#example}

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

**变更日志：** 该事件在 v2.0 中新增

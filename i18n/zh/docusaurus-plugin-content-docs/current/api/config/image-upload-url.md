---
sidebar_label: imageUploadUrl
title: imageUploadUrl 配置项
description: 您可以在 DHTMLX JavaScript RichText 库的文档中了解 imageUploadUrl 配置项。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX RichText 的免费 30 天评估版本。
---

# imageUploadUrl

### 描述 {#description}

@short: 可选。指定用于图片上传（来自工具栏、菜单栏、剪贴板粘贴或拖放操作）的 URL

当该属性被设置时，RichText 会将每张插入的图片上传到指定端点，并插入服务器返回的 URL。

当该属性被省略或设置为假值（`""`、`null`、`undefined`）时，RichText 切换到**内联模式**：图片文件在客户端读取，并以 base64 数据 URL 的形式直接嵌入到内容中——无需服务器。大于 1024×800 的内联图片将按比例缩小以适应此限制。

:::note[注意]
内联（base64）图片无法通过内置的 DOCX / PDF [导出](api/events/export.md)功能保留。如果您依赖导出功能，请提供 `imageUploadUrl`，使图片引用外部地址。
:::

:::caution[谨慎]
Base64 编码会使编码后的数据量相比原始文件增加约三分之一。包含多张大型内联图片的文档体积会相应增长，这将影响 [`getValue()`](api/methods/get-value.md) 返回值的大小、编辑器的内存占用，以及持久化或传输内容的开销。对于包含大量或大尺寸图片的文档，建议使用服务器端 `imageUploadUrl`。
:::

### 用法 {#usage}

~~~jsx {}
imageUploadUrl?: string;
~~~

### 示例 {#example}

将图片上传到服务器端点：

~~~jsx {3}
// 初始化 RichText
new richtext.Richtext("#root", {
    imageUploadUrl: "https://example.com/upload"
    // 其他配置属性
});
~~~

以 base64 方式内联插入图片（无需服务器）——省略该属性或传入空字符串：

~~~jsx {2}
new richtext.Richtext("#root", {
    // imageUploadUrl 未设置，图片将以 base64 数据 URL 的形式插入
    // 其他配置属性
});
~~~

**更新日志：** 该属性在 v2.0 中新增。自 v2.1 起，该属性为可选：省略时，图片将以 base64 数据 URL 的形式内联插入。

**相关文章：** [配置](guides/configuration.md)，[与服务器配合使用](guides/working_with_server.md)

**相关示例：** [RichText. 初始化](https://snippet.dhtmlx.com/t55alxiy?tag=richtext)

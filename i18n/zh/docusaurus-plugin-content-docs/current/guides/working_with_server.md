---
sidebar_label: 与服务器协作
title: 与服务器协作
description: 了解 RichText 如何与后端进行图片上传通信，包括请求/响应协议以及如何接入自定义服务器。浏览开发者指南和 API 参考，体验代码示例和在线演示，并下载免费 30 天评估版 DHTMLX RichText。
---

# 与服务器协作 {#working-with-the-server}

RichText 完全在浏览器中运行，无需后端即可进行内容编辑或保存。您的应用可以自由选择持久化编辑器内容的方式。唯一需要服务器的功能是**图片上传**：当用户在文档中插入图片时，RichText 可以将文件以内联方式嵌入内容，或将其发送到 HTTP 端点并存储其链接。

本指南说明：

- 未配置上传服务器时的默认行为
- 服务器需要实现的 HTTP 协议规范
- RichText 如何使用服务器返回的 URL
- 如何使用演示后端测试该功能

## 默认行为：内联图片 {#default-behavior-inline-images}

如果未设置 [`imageUploadUrl`](api/config/image-upload-url.md) 属性，RichText 将回退到内联图片模式。当用户插入图片时，RichText 在浏览器中读取文件，将原始文件编码为 `data:image/...;base64,...` URL，并将其直接写入编辑器内容，作为 `<img>` 元素的 `src`。RichText 通过 `width`/`height` 属性将显示尺寸限制在 1024×800 的范围内，但嵌入的字节仍是原始的全分辨率文件——客户端不会对其进行缩放或重新编码。

此方式无需任何后端，适合快速演示，但存在明显的局限性：

- 编码后的字节存储在文档内部，因此每插入一张图片，保存的 HTML 文件就会增大
- 同一张图片在两份文档中各存储一份，没有共享资源可供去重
- 由于字节不是独立资源，服务器无法通过 CDN 提供服务，也无法对其进行后处理（缩放、重新编码、扫描）
- 内联图片不会被内置的 DOCX / PDF [导出](api/events/export.md) 功能保留——如果依赖导出功能，请配置上传服务器，使图片引用外部 URL

## 编写自己的服务器 {#write-your-own-server}

在生产应用中，通过 [`imageUploadUrl`](api/config/image-upload-url.md) 将 RichText 指向服务器：

~~~jsx {2}
new richtext.Richtext("#root", {
    imageUploadUrl: "https://example.com/upload"
    // 其他配置属性
});
~~~

一个最简上传端点需要：

1. 接受包含名为 `upload` 的文件字段的 `multipart/form-data` POST 请求。
2. 验证文件（允许的类型、最大尺寸）。
3. 将文件存储在用户浏览器可访问的位置（本地磁盘通过 HTTP 提供服务、S3、CDN 等）。
4. 可选：对图片进行缩放或其他处理。
5. 响应一个 JSON 对象，包含 `status: "server"`、设置为存储文件公开 URL 的 `value`，以及图片的像素 `width` 和 `height`。

### 客户端发送的内容 {#what-the-client-sends}

当设置了 [`imageUploadUrl`](api/config/image-upload-url.md) 时，RichText 将所选文件直接 POST 到该 URL（不会附加 `/images` 或其他路径），因此您传入的 URL 就是完整的 POST 目标地址。

请求使用标准 HTML 表单上传方式：

- **Method：** `POST`
- **Content-Type：** `multipart/form-data`
- **Body：** 一个名为 `upload` 的文件字段

### 客户端期望的响应 {#what-the-client-expects-back}

服务器必须返回一个 JSON 对象。RichText 读取以下字段：

| 字段     | 类型    | 说明                                                                 |
| -------- | ------- | -------------------------------------------------------------------- |
| `status` | string  | 成功标识——上传成功时返回 `"server"`。上传器通过该字段区分上传成功与失败；任何其他值（例如 `"error"`）均表示上传失败。插入的图片本身由 `value`、`width` 和 `height` 构建。 |
| `value`  | string  | 已存储图片的 URL。RichText 将该字符串原样写入文档，作为插入的 `<img>` 的 `src`。 |
| `width`  | integer | 插入图片的显示宽度，单位为像素。                                     |
| `height` | integer | 插入图片的显示高度，单位为像素。                                     |

#### 成功响应 {#successful-response}

上传成功后，返回已存储图片的 URL 及其尺寸：

~~~json
{
    "status": "server",
    "value": "https://cdn.example.com/uploads/abc123.png",
    "width": 320,
    "height": 207
}
~~~

#### 上传失败 {#failed-upload}

上传失败时，返回任何非 `"server"` 的状态值：

~~~json
{
    "status": "error"
}
~~~

### 提供已上传图片的访问 {#serve-the-uploaded-image}

`value` URL 是上传与文档后续每次读取之间的唯一链接。RichText 将该 URL 直接写入文档，因此任何打开已保存内容的客户端（编辑器本身、导出文件、已发布页面）都会通过普通 `GET` 请求从该 URL 获取图片。

这意味着：

- 该 URL 必须可从用户浏览器访问，通常需要是**绝对路径**
- 该 URL 的域名可以与上传端点不同（例如，您可以在自己的服务器上接受上传，并返回 CDN 或对象存储的 URL）
- 如果图片域名与页面域名不同，请确保图片域名允许页面加载图片（通过 CORS 或直接开放公共读取权限）
- 只要文档引用该 URL，服务器就必须保持其可访问性；RichText 不会缓存或复制图片字节

URL 的具体格式**不在**协议规范之内。只要浏览器能够通过 `GET` 请求访问该 URL 并获取图片字节，路径、查询字符串乃至协议方案完全由后端决定。

### 使用演示服务器进行测试 {#try-it-against-the-demo-server}

可以使用以下实现了该协议的工作后端来测试此功能：

~~~jsx
new richtext.Richtext("#root", {
    imageUploadUrl: "https://docs.dhtmlx.com/richtext-backend/images"
    // 其他配置属性
});
~~~

演示服务器会对大图片进行缩放，将其存储到磁盘，并返回由其自身提供服务的 URL。该服务器仅用于评估和演示，请勿将生产环境中的编辑器指向它。

**相关文章：**

- [配置](guides/configuration.md)
- [`imageUploadUrl`](api/config/image-upload-url.md)

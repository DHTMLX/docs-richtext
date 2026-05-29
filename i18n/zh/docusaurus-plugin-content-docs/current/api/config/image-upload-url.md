---
sidebar_label: imageUploadUrl
title: imageUploadUrl Config
description: 您可以在 DHTMLX JavaScript RichText 库的文档中了解 imageUploadUrl 配置项。浏览开发指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX RichText 的 30 天免费评估版本。
---

# imageUploadUrl

### 描述

@short: 可选。指定用于上传图片的 URL

### 用法

~~~jsx {}
imageUploadUrl?: string;
~~~

### 示例

~~~jsx {3}
// 初始化 RichText
new richtext.Richtext("#root", {
    imageUploadUrl: "some URL"
    // 其他配置属性
});
~~~

**变更日志：** 该属性在 v2.0 中添加

**相关文章：** [配置](guides/configuration.md)

**相关示例：** [RichText. Initialization](https://snippet.dhtmlx.com/t55alxiy?tag=richtext)

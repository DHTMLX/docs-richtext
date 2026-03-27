---
sidebar_label: imageUploadUrl
title: imageUploadUrl 配置项
description: 您可以在DHTMLX JavaScript RichText库的文档中了解imageUploadUrl配置项。浏览开发者指南和API参考，试用代码示例和在线演示，并下载DHTMLX RichText的免费30天评估版本。
---

# imageUploadUrl

### 描述 {#description}

@short: 可选。指定用于图片上传的URL

### 用法 {#usage}

~~~jsx {}
imageUploadUrl?: string;
~~~

### 示例 {#example}

~~~jsx {3}
// 初始化RichText
new richtext.Richtext("#root", {
    imageUploadUrl: "some URL"
    // 其他配置属性
});
~~~

**更新日志：** 该属性在v2.0中新增

**相关文章：** [配置](guides/configuration.md)

**相关示例：** [RichText. Initialization](https://snippet.dhtmlx.com/t55alxiy?tag=richtext)

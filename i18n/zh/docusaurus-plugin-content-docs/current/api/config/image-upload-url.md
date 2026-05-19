---
sidebar_label: imageUploadUrl
title: imageUploadUrl Config
description: 您可以在 DHTMLX JavaScript RichText 库的文档中了解 imageUploadUrl 配置项。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX RichText 的免费 30 天评估版本。
---

# imageUploadUrl

### Description

@short: 可选。指定用于图片上传的 URL

### Usage

~~~jsx {}
imageUploadUrl?: string;
~~~

### Example

~~~jsx {3}
// initialize RichText
new richtext.Richtext("#root", {
    imageUploadUrl: "some URL"
    // other configuration properties
});
~~~

**Change log:** 该属性在 v2.0 中添加

**Related articles:** [Configuration](guides/configuration.md)

**Related sample:** [RichText. Initialization](https://snippet.dhtmlx.com/t55alxiy?tag=richtext)

---
sidebar_label: imageUploadUrl
title: imageUploadUrl 配置
description: 您可以在 DHTMLX JavaScript RichText 库的文档中了解 imageUploadUrl 配置。浏览开发者指南和 API 参考，尝试代码示例和在线演示，并下载免费的 30 天试用版 DHTMLX RichText。
---

# imageUploadUrl

### 描述

@short: 可选。定义用于上传图片的 URL 地址

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

**更新日志:** 此属性在版本 2.0 中引入

**相关文章:** [配置](guides/configuration.md)

**相关示例:** [RichText. 初始化](https://snippet.dhtmlx.com/t55alxiy?tag=richtext)

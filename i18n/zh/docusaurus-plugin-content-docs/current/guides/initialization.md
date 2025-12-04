---
sidebar_label: 初始化
title: 初始化
description: 您可以在 DHTMLX JavaScript RichText 库的文档中了解初始化相关内容。浏览开发者指南和 API 参考，尝试代码示例和在线演示，并免费下载 DHTMLX RichText 的 30 天评估版。
---

# 初始化

以下是一个简单的操作指南，帮助您在页面上设置 RichText，从而在您的应用中开始使用 RichText 编辑器。只需按照以下步骤即可完成设置:

1. [在页面中引入 RichText 源文件](#引入源文件)。
2. [创建 RichText 的容器](#创建容器)。
3. [使用对象构造函数初始化 RichText](#初始化-richtext)。

## 引入源文件

首先，[下载软件包](https://dhtmlx.com/docs/products/dhtmlxRichText/download.shtml)并将其解压到项目文件夹中的某个位置。

要使用 RichText，请将以下两个文件添加到您的页面中:

- *richtext.js*
- *richtext.css*

请确保使用您存放这些文件的正确路径:

~~~html title="index.html"
<script type="text/javascript" src="./codebase/richtext.js"></script>  
<link rel="stylesheet" href="./codebase/richtext.css">
~~~

## 创建容器

接下来，为 RichText 设置一个容器。为其指定一个 ID，例如 *"root"*:

~~~jsx title="index.html"
<div id="root"></div>
~~~

## 初始化 RichText

现在，使用 `richtext.Richtext` 构造函数来创建 RichText。此构造函数需要两个参数:

- HTML 容器（使用您设置的 ID）
- 配置选项对象。[在此处查看完整配置列表](#配置属性)

~~~jsx title="index.html"
// 创建 RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties  
});
~~~

### 配置属性

:::note
您可以在 [**这里**](api/overview/properties_overview.md) 查看 **RichText** 所有可用属性。
:::

## 示例

下面是一个快速示例，展示如何使用一些初始数据来设置 **RichText**:

<iframe src="https://snippet.dhtmlx.com/tjryzka7?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>

---
sidebar_label: 初始化
title: 初始化
description: 您可以在DHTMLX JavaScript RichText库的文档中了解初始化相关内容。浏览开发指南和API参考，查看代码示例和在线演示，并下载DHTMLX RichText的免费30天评估版本。
---

# 初始化 {#initialization}

本指南将详细介绍如何在页面上创建RichText，以便为您的应用程序添加RichText编辑器的功能。请按照以下步骤获取可用的组件：

1. [在页面上引入RichText源文件](#including-source-files)。
2. [为RichText创建容器](#creating-container)。
3. [使用对象构造函数初始化RichText](#initializing-richtext)。

## 引入源文件 {#including-source-files}

[下载包](https://dhtmlx.com/docs/products/dhtmlxRichText/download.shtml)并将其解压到项目文件夹中。

要创建RichText，您需要在页面上引入2个源文件：

- *richtext.js*
- *richtext.css*

请确保设置正确的源文件相对路径：

~~~html title="index.html"
<script type="text/javascript" src="./codebase/richtext.js"></script>
<link rel="stylesheet" href="./codebase/richtext.css">
~~~

## 创建容器 {#creating-container}

为RichText添加一个容器并为其指定ID，例如*"root"*：

~~~jsx title="index.html"
<div id="root"></div>
~~~

## 初始化RichText {#initializing-richtext}

使用`richtext.Richtext`构造函数初始化RichText。该构造函数接受两个参数：

- HTML容器（HTML容器的ID）
- 包含配置属性的对象。[查看完整列表](#configuration-properties)

~~~jsx title="index.html"
// 创建RichText
const editor = new richtext.Richtext("#root", {
    // 配置属性
});
~~~

### 配置属性 {#configuration-properties}

:::note[注意]
配置**RichText**的完整属性列表可在[**此处**](api/overview/properties_overview.md)找到。
:::

## 示例 {#example}

在此代码片段中，您可以查看如何使用初始数据初始化**RichText**：

<iframe src="https://snippet.dhtmlx.com/tjryzka7?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>

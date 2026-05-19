---
sidebar_label: 初始化
title: 初始化
description: 您可以在 DHTMLX JavaScript RichText 库的文档中了解初始化相关内容。浏览开发者指南和 API 参考，尝试代码示例和在线演示，并下载 DHTMLX RichText 的免费 30 天评估版本。
---

# 初始化

本指南介绍如何将 RichText 添加到页面中。按照以下步骤即可获得一个可用的编辑器：

1. [在页面中引入源文件](#include-the-source-files)。
2. [为 RichText 创建容器](#create-a-container)。
3. [初始化 RichText](#initialize-richtext)。

## 引入源文件

将 RichText 的 JavaScript 和 CSS 文件添加到您的项目中。[下载安装包](https://dhtmlx.com/docs/products/dhtmlxRichText/download.shtml)并将内容解压到项目文件夹中。

创建 RichText 需要在页面中引入以下两个源文件：

- *richtext.js*
- *richtext.css*

在 HTML 中引用这些文件。请根据您的文件夹结构调整相对路径：

~~~html title="index.html"
<script type="text/javascript" src="./codebase/richtext.js"></script>  
<link rel="stylesheet" href="./codebase/richtext.css">
~~~

## 创建容器

为 RichText 添加一个带有 ID（如 *"root"*）的容器：

~~~jsx title="index.html"
<div id="root"></div>
~~~

## 初始化 RichText

使用 `richtext.Richtext` 构造函数初始化 RichText。构造函数接受两个参数：

- 容器 — CSS 选择器或 DOM 元素
- 包含编辑器属性的配置对象。请参阅下方的[完整属性列表](#configuration-properties)

以下示例在 `#root` 容器中初始化 RichText：

~~~jsx title="index.html"
const editor = new richtext.Richtext("#root", {
    // configuration properties  
});
~~~

### 配置属性

将配置选项作为配置对象的键进行添加。

:::note
有关配置属性的完整列表，请参阅 [Properties overview](api/overview/properties_overview.md)。
:::

## 销毁 RichText 实例

调用 [`destructor()`](api/methods/destructor.md) 方法可移除 RichText 的 HTML 并解除所有相关事件：

~~~jsx
const editor = new richtext.Richtext("#root", {
    // configuration properties
});

editor.destructor();
~~~

## 示例

以下示例在启用菜单栏的情况下初始化 RichText：

<iframe src="https://snippet.dhtmlx.com/tjryzka7?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>

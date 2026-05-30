---
sidebar_label: 初始化
title: 初始化
description: 您可以在 DHTMLX JavaScript RichText 库的文档中了解初始化的相关内容。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载免费的 30 天评估版 DHTMLX RichText。
---

# 初始化

本指南介绍如何将 RichText 添加到页面。请按照以下步骤获取可用的编辑器：

1. [在页面中引入源文件](#include-the-source-files)。
2. [为 RichText 创建容器](#create-a-container)。
3. [初始化 RichText](#initialize-richtext)。

## 引入源文件

将 RichText 的 JavaScript 和 CSS 文件添加到您的项目中。[下载安装包](https://dhtmlx.com/docs/products/dhtmlxRichText/download.shtml)并将内容解压到您的项目文件夹中。

创建 RichText 需要在页面中引入以下两个源文件：

- *richtext.js*
- *richtext.css*

在 HTML 中引用这些文件。请根据实际的文件夹结构调整相对路径：

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

使用 `richtext.Richtext` 构造函数初始化 RichText。该构造函数接受两个参数：

- 容器 — CSS 选择器或 DOM 元素
- 包含编辑器属性的配置对象。请参阅下方的[完整属性列表](#configuration-properties)

以下示例在 `#root` 容器中初始化 RichText：

~~~jsx title="index.html"
const editor = new richtext.Richtext("#root", {
    // 配置属性  
});
~~~

### 配置属性

将配置选项作为配置对象的键值对添加。

:::note
有关完整的配置属性列表，请参阅 [属性概览](api/overview/properties_overview.md)。
:::

## 销毁 RichText 实例

调用 [`destructor()`](api/methods/destructor.md) 方法以移除 RichText 的 HTML 并解绑所有相关事件：

~~~jsx
const editor = new richtext.Richtext("#root", {
    // 配置属性
});

editor.destructor();
~~~

## 示例

以下示例在启用菜单栏的情况下初始化 RichText：

<iframe src="https://snippet.dhtmlx.com/tjryzka7?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>

---
title: 样式定制
sidebar_label: 样式定制
description: 您可以在DHTMLX JavaScript RichText库的文档中了解样式定制相关内容。浏览开发指南和API参考，查看代码示例和在线演示，并下载DHTMLX RichText的免费30天评估版本。
---

# 样式定制 {#styling}

您可以通过覆盖CSS变量并为widget的特定部分应用自定义样式，来完全自定义DHTMLX RichText的外观。

本指南介绍如何应用**深色主题**，以及如何使用可用的类名为编辑器的menubar、toolbar、弹出层和内容区域设置样式。

## 默认结构与类名 {#default-structure-and-class-names}

RichText使用以下核心类来构建其UI结构：

| 类名                   | 描述                                        |
|------------------------|---------------------------------------------|
| `.wx-richtext`         | RichText widget的根容器                     |
| `.wx-richtext-menubar` | menubar的容器                               |
| `.wx-richtext-menu`    | menubar下拉菜单的容器                       |
| `.wx-richtext-toolbar` | toolbar的容器                               |
| `.wx-editor-area`      | 主要可编辑内容区域的容器                    |

您可以在自定义CSS选择器中使用这些类来覆盖RichText编辑器的外观。

## 覆盖默认样式 {#overriding-default-styles}

您可以通过在`#root`容器或特定子元素上重新定义CSS变量来覆盖RichText的默认样式：

```html
<div id="root" style="width: 100%; height: 100%;"></div>

<style>
  #root,
  .wx-richtext-menu {
    --wx-background: #404151;
    --wx-background-alt: #212329;
    --wx-color-primary: #14B195;
    --wx-color-font: #FFFFFF;
    --wx-border: 1px solid #6B6C79;
    --wx-color-secondary-hover: rgba(20, 177, 149, 0.12);
    --wx-button-active: rgba(20, 177, 149, 0.22);
    --wx-icon-color: var(--wx-color-font);
    --wx-color-font-alt: #9FA1AE;
    --wx-color-font-disabled: #9FA1AE;
    --wx-popup-border: var(--wx-border);

    color-scheme: dark;
  }

  .wx-richtext-menu {
    border: var(--wx-border);
  }
</style>
```

:::note[注意]
这些样式将应用深色背景，调整按钮和图标颜色，并提高深色UI主题下的可见性。
:::

## 支持的CSS变量列表 {#list-of-supported-css-variables}

| 变量名                       | 描述                                        |
| ---------------------------- | ------------------------------------------- |
| `--wx-background`            | 编辑器和弹出层的背景颜色                    |
| `--wx-background-alt`        | menubar的备用背景颜色                       |
| `--wx-color-primary`         | 链接、块引用及图片调整大小边框的强调色      |
| `--wx-color-font`            | 主字体颜色（用于编辑器、menubar和toolbar）  |
| `--wx-color-font-alt`        | 备用字体颜色                                |
| `--wx-color-font-disabled`   | 禁用文本颜色（用于menubar和toolbar元素）    |
| `--wx-border`                | 编辑器中使用的边框样式                      |
| `--wx-color-secondary-hover` | menubar和toolbar中按钮的悬停状态背景        |
| `--wx-button-active`         | menubar和toolbar中按钮的激活状态背景        |
| `--wx-icon-color`            | toolbar下拉箭头图标的颜色                   |
| `--wx-popup-border`          | 弹出层元素的边框                            |

## 最佳实践 {#best-practices}

* 使用`color-scheme: dark`改善深色模式下原生输入框的样式
* 除非必要，避免更改与布局相关的属性（如`display`、`position`）

## 在线演示 {#live-demo}

在此代码片段中，您可以查看如何为RichText应用自定义样式：

<iframe src="https://snippet.dhtmlx.com/q8j4qqq9?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

**相关文章：** [自定义配置](guides/configuration.md)

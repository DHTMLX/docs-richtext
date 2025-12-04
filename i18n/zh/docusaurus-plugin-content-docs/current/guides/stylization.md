---
title: 样式
sidebar_label: 样式
description: 您可以在 DHTMLX JavaScript RichText 库的文档中了解样式相关内容。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX RichText 的 30 天免费评估版本。
---

# 样式

DHTMLX RichText 支持通过 CSS 变量或自定义样式针对特定部件进行样式调整，以适配各种外观需求。

下面将简要介绍如何设置**深色主题**，以及如何通过类名为编辑器的不同部分（如菜单栏、工具栏、弹出菜单和内容区域）自定义样式。

## 默认结构与类名

RichText 的 UI 布局主要依赖以下类名:

| 类名                      | 描述                           |
|---------------------------|--------------------------------|
| `.wx-richtext`            | RichText 组件的根容器          |
| `.wx-richtext-menubar`    | 菜单栏的容器                   |
| `.wx-richtext-menu`       | 菜单栏下拉菜单的容器           |
| `.wx-richtext-toolbar`    | 工具栏的容器                   |
| `.wx-editor-area`         | 主可编辑内容区域的容器         |

您可以在 CSS 中使用这些类名来调整 RichText 编辑器的外观。

## 覆盖默认样式

要为 RichText 应用自定义样式，只需在 `#root` 容器或指定的子元素上更新 CSS 变量即可:

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

:::note
此设置为编辑器提供了深色背景，更新了按钮和图标颜色，使界面在暗色 UI 下更易于辨识。
:::

## 支持的 CSS 变量列表

| 变量名                      | 描述                                       |
|-----------------------------|--------------------------------------------|
| `--wx-background`           | 编辑器和弹出菜单的背景色                   |
| `--wx-background-alt`       | 菜单栏的备用背景色                         |
| `--wx-color-primary`        | 链接、引用块以及图片缩放边框的强调色        |
| `--wx-color-font`           | 主要字体颜色（适用于编辑器、菜单栏和工具栏）|
| `--wx-color-font-alt`       | 备用字体颜色                               |
| `--wx-color-font-disabled`  | 禁用文本颜色（适用于菜单栏和工具栏元素）    |
| `--wx-border`               | 编辑器内通用的边框样式                     |
| `--wx-color-secondary-hover`| 菜单栏和工具栏内按钮的悬停背景色           |
| `--wx-button-active`        | 菜单栏和工具栏内按钮的激活背景色           |
| `--wx-icon-color`           | 工具栏下拉箭头图标的颜色                   |
| `--wx-popup-border`         | 弹出元素的边框样式                         |

## 最佳实践

* 使用 `color-scheme: dark` 属性可以让原生输入框在暗色模式下显示更合适
* 除非有特殊需求，建议不要随意修改布局相关的 CSS 属性（如 `display` 或 `position`）

## 在线演示

下面是一个为 RichText 添加自定义样式的简单示例:

<iframe src="https://snippet.dhtmlx.com/q8j4qqq9?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

**相关文档:** [Customization](guides/configuration.md)

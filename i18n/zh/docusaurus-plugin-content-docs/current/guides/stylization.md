---
title: 样式定制
sidebar_label: 样式定制
description: 您可以在 DHTMLX JavaScript RichText 库的文档中了解样式定制相关内容。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX RichText 的免费 30 天评估版本。
---

# 样式定制

通过在编辑器容器及其子元素上覆盖 CSS 变量，自定义 DHTMLX RichText 的外观。

本指南介绍如何应用**深色主题**，并使用 CSS 类选择器定位菜单栏、工具栏、弹出层和内容区域。

## 默认结构与类名

RichText 使用以下核心类来构建 UI 结构：

| 类名                   | 描述                                        |
|------------------------|---------------------------------------------|
| `.wx-richtext`         | RichText 组件的根容器                       |
| `.wx-richtext-menubar` | 菜单栏容器                                  |
| `.wx-richtext-menu`    | 菜单栏下拉菜单容器                          |
| `.wx-richtext-toolbar` | 工具栏容器                                  |
| `.wx-editor-area`      | 主可编辑内容区域容器                        |

在自定义 CSS 选择器中使用这些类名来覆盖编辑器的外观。

## 覆盖默认样式

要覆盖默认样式，请在 `#root` 容器或特定子元素上重新定义 CSS 变量：

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
这些样式应用了深色背景，调整了按钮和图标颜色，并改善了深色 UI 主题下的可见性。
:::

## 支持的 CSS 变量

| 变量名                       | 描述                                         |
| ---------------------------- | -------------------------------------------- |
| `--wx-background`            | 编辑器和弹出层的背景色                       |
| `--wx-background-alt`        | 菜单栏的替代背景色                           |
| `--wx-color-primary`         | 链接、块引用和图片缩放手柄的强调色           |
| `--wx-color-font`            | 主字体颜色（用于编辑器、菜单栏和工具栏）     |
| `--wx-color-font-alt`        | 替代字体颜色                                 |
| `--wx-color-font-disabled`   | 禁用文本颜色（用于菜单栏和工具栏元素）       |
| `--wx-border`                | 编辑器全局使用的边框样式                     |
| `--wx-color-secondary-hover` | 菜单栏和工具栏按钮的悬停状态背景色           |
| `--wx-button-active`         | 菜单栏和工具栏按钮的激活状态背景色           |
| `--wx-icon-color`            | 工具栏下拉箭头图标的颜色                     |
| `--wx-popup-border`          | 弹出层元素的边框                             |

## 最佳实践

* 使用 `color-scheme: dark` 以改善深色模式下原生输入框的样式效果
* 避免在没有充分理由的情况下更改布局相关属性（如 `display`、`position`）

:::tip
如需对各标签进行排版设置（字体族、字号、颜色、`h1`、`p`、`blockquote` 及其他块级标签的背景色），请使用 [`defaultStyles`](api/config/default-styles.md) 配置属性，并配合相应的 CSS 规则。完整用法请参见[配置指南](guides/configuration.md#configure-default-styles)。
:::

## 在线演示

以下示例为 RichText 应用了自定义样式：

<iframe src="https://snippet.dhtmlx.com/q8j4qqq9?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

**相关文章：** [配置](guides/configuration.md)

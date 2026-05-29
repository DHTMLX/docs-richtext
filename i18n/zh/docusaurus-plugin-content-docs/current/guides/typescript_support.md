---
sidebar_label: TypeScript 支持
title: TypeScript 支持
description: 您可以在文档中了解如何将 TypeScript 与 DHTMLX JavaScript RichText 库结合使用。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX RichText 的免费 30 天评估版本。
---

# TypeScript 支持

自 v2.0 起，DHTMLX RichText 内置了 TypeScript 类型定义，无需额外配置。

:::note
在 <a href="https://snippet.dhtmlx.com/ziynafp7?tag=richtext" target="_blank">Snippet Tool</a> 中体验编辑器。
:::

## TypeScript 的优势

将 TypeScript 与 DHTMLX RichText 结合使用，您将获得：

- 类型安全 — 编译器在构建时捕获配置属性和方法参数的错误用法
- 自动补全 — IDE 在输入时提示有效的属性名、方法签名和值类型
- 自文档化 API — 配置对象和方法上的类型注解同时作为内联文档使用

## 在 TypeScript 中初始化 RichText

以下示例演示如何在 TypeScript 中初始化 RichText，并借助内置类型定义获得自动补全支持：

~~~ts
import { Richtext } from "@dhx/richtext";

const editor = new Richtext("#root", {
    menubar: true,
    layoutMode: "document"
});
~~~

## 引用 API 类型

有关每个配置属性的 TypeScript 签名，请参阅 [属性概览](api/overview/properties_overview.md)。有关方法签名，请参阅 [方法概览](api/overview/methods_overview.md)。

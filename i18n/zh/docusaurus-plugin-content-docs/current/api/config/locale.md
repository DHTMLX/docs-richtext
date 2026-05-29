---
sidebar_label: locale
title: locale 配置项
description: 您可以在 DHTMLX JavaScript RichText 库的文档中了解 locale 配置项。浏览开发指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX RichText 的免费 30 天评估版本。
---

# locale

### 描述

@short: 可选。包含 RichText 本地化标签的对象

:::info
**locale** 对象需要包含 RichText 的所有标签及其对应的翻译内容。
:::

### 用法

~~~jsx {}
locale?: object;
~~~

### 默认配置

默认情况下，RichText 使用**英语**语言环境。您也可以将其设置为自定义语言环境。

:::tip
要动态更改当前语言环境，可以使用 RichText 的 [**setLocale()**](api/methods/set-locale.md) 方法
:::

### 示例

~~~jsx {3}
// 初始化 RichText
const editor = new richtext.RichText("#root", {
    locale: richtext.locales.cn // 初始设置为中文语言环境
    // locale: richtext.locales.en // 初始设置为英语语言环境
    // locale: richtext.locales.de // 初始设置为德语语言环境
    // 其他配置属性
});
~~~

**变更日志：** 该属性在 v2.0 中新增

**相关文章：** [本地化](guides/localization.md)

**相关示例：** [RichText. 本地化](https://snippet.dhtmlx.com/zxjrin3i?tag=richtext)

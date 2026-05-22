---
sidebar_label: locale
title: locale Config
description: 您可以在 DHTMLX JavaScript RichText 库的文档中了解 locale 配置项。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX RichText 免费 30 天评估版本。
---

# locale

### Description

@short: 可选。包含 RichText 本地化标签的对象

:::info
**locale** 对象需要包含 RichText 的所有标签及其对应的翻译内容。
:::

### Usage

~~~jsx {}
locale?: object;
~~~

### Default config

默认情况下，RichText 使用**英语**语言包。您也可以将其设置为自定义语言包。

:::tip
如需动态切换当前语言包，可以使用 RichText 的 [**setLocale()**](api/methods/set-locale.md) 方法
:::

### Example

~~~jsx {3}
// initialize RichText
const editor = new richtext.RichText("#root", {
    locale: richtext.locales.cn // the Chineese locale will be set initially
    // locale: richtext.locales.en // the English locale will be set initially
    // locale: richtext.locales.de // the Germany locale will be set initially
    // other configuration properties
});
~~~

**Change log:** The property was added in v2.0

**Related articles:** [Localization](guides/localization.md)

**Related sample:** [RichText. Localization](https://snippet.dhtmlx.com/zxjrin3i?tag=richtext)

---
sidebar_label: locale
title: locale Config
description: You can learn about the locale config in the documentation of the DHTMLX JavaScript RichText library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX RichText.
---

# locale

### Description

@short: Optional. An object that includes localization labels of RichText

:::info
The **locale** object needs to include all labels of RichText with the corresponding translations.
:::

### Usage

~~~jsx {}
locale?: object;
~~~

### Default config

By default, RichText uses the **English** locale. You can set it to the custom locale as well.

:::tip
To change the current locale dynamically, you can use the [**setLocale()**](methods/set-locale.md) method of RichText
:::

### Example

~~~jsx {3}
// initialize RichText
const editor = new richtext.RichText("#root", {
    locale: richtext.locale.cn // the Chineese locale will be set initially
    // locale: richtext.locale.en // the English locale will be set initially
    // locale: richtext.locale.de // the Germany locale will be set initially
    // other configuration properties
});
~~~

**Related articles:** [Localization](guides/localization.md)

**Related sample:** [RichText. Localization](https://snippet.dhtmlx.com/zxjrin3i)

---
sidebar_label: locale
title: locale Config
description: Explore the locale config in the DHTMLX JavaScript RichText library documentation. Check out developer guides, API references, try code samples and live demos, and download a free 30-day trial of DHTMLX RichText.
---

# locale

### Description

@short: Optional. An object containing localization labels for RichText

:::info
The **locale** object should have all the RichText labels along with their respective translations.
:::

### Usage

~~~jsx {}
locale?: object;
~~~

### Default config

By default, RichText comes with the **English** locale. You also have the option to set a custom locale.

:::tip
To switch the locale on the fly, use the [**setLocale()**](api/methods/set-locale.md) method of RichText
:::

### Example

~~~jsx {3}
// initialize RichText
const editor = new richtext.RichText("#root", {
    locale: richtext.locales.cn // the Chinese locale is set initially
    // locale: richtext.locales.en // the English locale is set initially
    // locale: richtext.locales.de // the German locale is set initially
    // other configuration properties
});
~~~

**Change log:** This property was introduced in v2.0

**Related articles:** [Localization](guides/localization.md)

**Related sample:** [RichText. Localization](https://snippet.dhtmlx.com/zxjrin3i?tag=richtext)
---
sidebar_label: setLocale()
title: setLocale Method
description: You can learn about the setLocale method in the documentation of the DHTMLX JavaScript RichText library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX RichText.
---

# setLocale()

### Description

@short: Applies a new locale to RichText

### Usage

~~~jsx {}
setLocale(null | locale?: object): void;
~~~

### Parameters

- `null` - (optional) resets to the default locale (*English*)
- `locale` - (optional) the object of data of the new locale to be applied

:::info
Use the `setLocale()` method to apply a new locale to RichText. To reset RichText to the default locale, call the `setLocale()` method without arguments (or with a *null* value).
:::

### Example

~~~jsx {5-6}
const editor = new richtext.Richtext("#root", {
    // configuration properties
});

// apply the "de" locale to RichText
editor.setLocale(de);
~~~

**Related articles:** [Localization](guides/localization.md)

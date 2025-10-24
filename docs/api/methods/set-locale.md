---
sidebar_label: setLocale()
title: setLocale Method
description: You can learn about the setLocale method in the documentation of the DHTMLX JavaScript RichText library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX RichText.
---

# setLocale()

### Description

@short: Updates the locale settings for RichText

### Usage

~~~jsx {}
setLocale(null | locale?: object): void;
~~~

### Parameters

- `null` - (optional) switches back to the default locale (*English*)
- `locale` - (optional) an object containing the new locale data to apply

:::info
The `setLocale()` method updates the locale used by RichText. Calling it without any arguments (or passing *null*) will revert the locale to the default setting.
:::

### Example

~~~jsx {5-6}
const editor = new richtext.Richtext("#root", {
    // configuration properties
});

// set the locale of RichText to "de"
editor.setLocale(de);
~~~

**Change log:** The method was introduced in v2.0

**Related articles:** [Localization](guides/localization.md)

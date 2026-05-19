---
sidebar_label: setLocale()
title: setLocale 方法
description: 您可以在 DHTMLX JavaScript RichText 库的文档中了解 setLocale 方法。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX RichText 的免费 30 天评估版本。
---

# setLocale()

### 描述

@short: 为 RichText 应用新的语言区域设置

### 用法

~~~jsx {}
setLocale(null | locale?: object): void;
~~~

### 参数

- `null` - （可选）重置为默认语言区域（*English*）
- `locale` - （可选）要应用的新语言区域的数据对象

:::info
使用 `setLocale()` 方法为 RichText 应用新的语言区域设置。若要将 RichText 重置为默认语言区域，请不带参数（或传入 *null* 值）调用 `setLocale()` 方法。
:::

### 示例

~~~jsx {5-6}
const editor = new richtext.Richtext("#root", {
    // configuration properties
});

// apply the "de" locale to RichText
editor.setLocale(de);
~~~

**更新日志：** 该方法在 v2.0 中新增

**相关文章：** [本地化](guides/localization.md)

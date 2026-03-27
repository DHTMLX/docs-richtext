---
sidebar_label: locale
title: locale 配置项
description: 您可以在DHTMLX JavaScript RichText库的文档中了解locale配置项。浏览开发者指南和API参考，试用代码示例和在线演示，并下载DHTMLX RichText的免费30天评估版本。
---

# locale

### 描述 {#description}

@short: 可选。包含RichText本地化标签的对象

:::info[信息]
**locale**对象需要包含RichText的所有标签及其对应的翻译。
:::

### 用法 {#usage}

~~~jsx {}
locale?: object;
~~~

### 默认配置 {#default-config}

默认情况下，RichText使用**英语**语言环境。您也可以将其设置为自定义语言环境。

:::tip[提示]
如需动态切换当前语言环境，可以使用RichText的[**setLocale()**](api/methods/set-locale.md)方法
:::

### 示例 {#example}

~~~jsx {3}
// 初始化RichText
const editor = new richtext.RichText("#root", {
    locale: richtext.locales.cn // 初始时将设置中文语言环境
    // locale: richtext.locales.en // 初始时将设置英语语言环境
    // locale: richtext.locales.de // 初始时将设置德语语言环境
    // 其他配置属性
});
~~~

**更新日志：** 该属性在v2.0中新增

**相关文章：** [本地化](guides/localization.md)

**相关示例：** [RichText. Localization](https://snippet.dhtmlx.com/zxjrin3i?tag=richtext)

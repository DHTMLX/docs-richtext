---
sidebar_label: locale
title: locale 配置项
description: 您可以在 DHTMLX JavaScript RichText 库的文档中了解 locale 配置项。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX RichText 的免费 30 天评估版本。
---

# locale

### 描述 {#description}

@short: 可选。一个包含 RichText 本地化标签的对象

:::info[信息]
`locale` 对象需要包含 RichText 的所有标签及对应的翻译内容。
:::

### 用法 {#usage}

~~~jsx {}
locale?: object;
~~~

### 默认配置 {#default-config}

默认情况下，RichText 使用**英语**语言包。您也可以将其设置为自定义语言包。

:::tip[提示]
如需动态切换当前语言包，可以使用 RichText 的 [`setLocale()`](api/methods/set-locale.md) 方法
:::

### 示例 {#example}

~~~jsx {3}
// 初始化 RichText
const editor = new richtext.RichText("#root", {
    locale: richtext.locales.cn // 初始将设置为中文语言包
    // locale: richtext.locales.en // 初始将设置为英语语言包
    // locale: richtext.locales.de // 初始将设置为德语语言包
    // 其他配置属性
});
~~~

**变更日志：** 该属性在 v2.0 版本中新增

**相关文章：** [本地化](guides/localization.md)

**相关示例：** [RichText. 本地化](https://snippet.dhtmlx.com/zxjrin3i?tag=richtext)

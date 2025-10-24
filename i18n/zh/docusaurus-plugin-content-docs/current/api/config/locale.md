---
sidebar_label: locale
title: locale 配置
description: 探索 DHTMLX JavaScript RichText 库文档中的 locale 配置。查看开发者指南、API 参考，尝试代码示例和在线演示，并免费下载 DHTMLX RichText 30 天试用版。
---

# locale

### 描述

@short: 可选。一个包含 RichText 本地化标签的对象

:::info
**locale** 对象应包含所有 RichText 标签及其对应的翻译内容。
:::

### 用法

~~~jsx {}
locale?: object;
~~~

### 默认配置

默认情况下，RichText 使用 **英语** locale。您也可以选择设置自定义的 locale。

:::tip
要动态切换 locale，请使用 RichText 的 [**setLocale()**](api/methods/set-locale.md) 方法
:::

### 示例

~~~jsx {3}
// 初始化 RichText
const editor = new richtext.RichText("#root", {
    locale: richtext.locales.cn // 初始设置为中文 locale
    // locale: richtext.locales.en // 初始设置为英文 locale
    // locale: richtext.locales.de // 初始设置为德文 locale
    // 其他配置属性
});
~~~

**更新日志:** 该属性自 v2.0 版本引入

**相关文档:** [本地化](guides/localization.md)

**相关示例:** [RichText. 本地化](https://snippet.dhtmlx.com/zxjrin3i?tag=richtext)

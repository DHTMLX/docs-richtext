---
sidebar_label: setLocale()
title: setLocale 方法
description: 您可以在 DHTMLX JavaScript RichText 库的文档中了解 setLocale 方法。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX RichText 的免费 30 天评估版本。
---

# setLocale()

### 描述 {#description}

@short: 将新的语言环境应用到 RichText

### 用法 {#usage}

~~~jsx {}
setLocale(null | locale?: object): void;
~~~

### 参数 {#parameters}

- `null` - （可选）重置为默认语言环境（*英语*）
- `locale` - （可选）要应用的新语言环境数据对象

:::info[信息]
使用 `setLocale()` 方法可将新的语言环境应用到 RichText。若要将 RichText 重置为默认语言环境，请不带参数（或传入 *null* 值）调用 `setLocale()` 方法。
:::

### 示例 {#example}

~~~jsx {5-6}
const editor = new richtext.Richtext("#root", {
    // 配置属性
});

// 将 "de" 语言环境应用到 RichText
editor.setLocale(de);
~~~

**更新日志：** 该方法在 v2.0 中新增

**相关文章：** [本地化](guides/localization.md)

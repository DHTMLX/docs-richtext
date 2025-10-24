---
sidebar_label: setLocale()
title: setLocale 方法
description: 您可以在 DHTMLX JavaScript RichText 库的文档中了解 setLocale 方法。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX RichText 免费的 30 天评估版本。
---

# setLocale()

### 描述

@short: 更新 RichText 的本地化设置

### 用法

~~~jsx {}
setLocale(null | locale?: object): void;
~~~

### 参数

- `null` - （可选）切换回默认语言环境（*英语*）
- `locale` - （可选）包含要应用的新语言环境数据的对象

:::info
`setLocale()` 方法用于更新 RichText 使用的语言环境。调用该方法时不传入任何参数（或传入 *null*）将会恢复为默认设置。
:::

### 示例

~~~jsx {5-6}
const editor = new richtext.Richtext("#root", {
    // 配置属性
});

// 将 RichText 的语言环境设置为 "de"
editor.setLocale(de);
~~~

**更新日志:** 该方法自 v2.0 版本引入

**相关文档:** [Localization](guides/localization.md)

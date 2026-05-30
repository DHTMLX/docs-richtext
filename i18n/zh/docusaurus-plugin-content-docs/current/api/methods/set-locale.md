---
sidebar_label: setLocale()
title: setLocale 方法
description: 您可以在 DHTMLX JavaScript RichText 库的文档中了解 setLocale 方法。浏览开发指南和 API 参考，尝试代码示例和在线演示，并下载免费的 30 天评估版 DHTMLX RichText。
---

# setLocale()

### 描述

@short: 为 RichText 应用新的语言环境

### 用法

~~~jsx {}
setLocale(null | locale?: object): void;
~~~

### 参数

- `null` - （可选）重置为默认语言环境（*英语*）
- `locale` - （可选）要应用的新语言环境的数据对象

:::info
使用 `setLocale()` 方法为 RichText 应用新的语言环境。若要将 RichText 重置为默认语言环境，请不带参数（或传入 *null* 值）调用 `setLocale()` 方法。
:::

### 示例

~~~jsx {5-6}
const editor = new richtext.Richtext("#root", {
    // 配置属性
});

// 为 RichText 应用 "de" 语言环境
editor.setLocale(de);
~~~

**更新日志：** 该方法在 v2.0 中添加

**相关文章：** [本地化](guides/localization.md)

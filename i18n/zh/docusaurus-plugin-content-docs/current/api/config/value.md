---
sidebar_label: value
title: value 配置
description: 浏览 DHTMLX JavaScript RichText 库文档中的 value 配置。查看开发者指南、API 参考，尝试代码示例和在线演示，并免费下载 DHTMLX RichText 30 天试用版。
---

# value

### 描述

@short: 可选。定义 RichText 编辑器区域内显示的初始内容。

:::tip
如需使用自定义格式设置内容，请使用内置的 [`setValue()`](api/methods/set-value.md) 方法。
:::

### 用法

~~~jsx {}
value?: string; 
~~~

### 示例

~~~jsx {2}
new richtext.Richtext("#root", {
    value: "<h1>some value</h1>" // 设置默认值（HTML 格式）
    // 其他配置属性
});
~~~

**更新日志:** 此属性从版本 2.0 开始引入

**相关文档:** [配置](guides/configuration.md)

**相关示例:** [RichText. 初始化](https://snippet.dhtmlx.com/t55alxiy?tag=richtext)

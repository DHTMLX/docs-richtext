---
sidebar_label: api.exec()
title: exec 方法
description: 您可以在 DHTMLX JavaScript RichText 库的文档中了解 exec 方法。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX RichText 的免费 30 天试用版。
---

# api.exec()

### 描述

@short: 此方法用于触发编辑器内部事件。

### 用法

~~~jsx {}
api.exec(
    event: string,
    config: object
): void;
~~~

### 参数

- `event` - （必需）要触发的事件名称
- `config` - （必需）包含触发事件参数的对象

### 事件

:::info
您可以在[**这里**](api/overview/events_overview.md)找到完整的 RichText 内部事件列表
:::

### 示例

~~~jsx {5-8}
// 初始化 RichText
const editor = new richtext.Richtext("#root", {
    // 配置属性
});
// 应用字体大小到文本
editor.api.exec("set-font-size", {
    fontSize: "16px"
}); 
~~~

**更新日志:** 此方法首次引入于 v2.0

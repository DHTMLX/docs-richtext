---
sidebar_label: api.exec()
title: exec 方法
description: 您可以在 DHTMLX JavaScript RichText 库的文档中了解 exec 方法。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX RichText 的免费 30 天评估版本。
---

# api.exec()

### 描述 {#description}

@short: 允许触发内部事件

### 用法 {#usage}

~~~jsx {}
api.exec(
    event: string,
    config: object
): void;
~~~

### 参数 {#parameters}

- `event` - （必填）要触发的事件
- `config` - （必填）包含参数的配置对象（参见要触发的事件）

### 事件 {#events}

:::info[信息]
RichText 内部事件的完整列表可在[**此处**](api/overview/events_overview.md)查看
:::

### 示例 {#example}

~~~jsx {5-8}
// 初始化 RichText
const editor = new richtext.Richtext("#root", {
    // 配置属性
});
// 设置文本字体大小
editor.api.exec("set-font-size", {
    fontSize: "16px"
});
~~~

**更新日志：** 该方法在 v2.0 中新增

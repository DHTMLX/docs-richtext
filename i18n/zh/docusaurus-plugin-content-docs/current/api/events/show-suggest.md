---
sidebar_label: show-suggest
title: show-suggest 事件
description: 您可以在 DHTMLX JavaScript RichText 库的文档中了解 show-suggest 事件。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX RichText 的免费 30 天评估版本。
---

# show-suggest

### 描述 {#description}

@short: 当为已配置的触发器打开建议下拉列表时触发

`show-suggest` 事件在 RichText 为当前触发器解析出非空列表后、下拉列表打开之前触发。可拦截该事件以调整列表项、移动下拉位置或取消显示。

### 用法 {#usage}

~~~jsx {}
"show-suggest": ({
    trigger: string,
    query: string,
    items: Array<{
        id?: string | number,
        label?: string,
        url?: string,
        // ...任何来自触发器数据源的自定义字段
    }>,
    pos: DOMRect
}) => boolean | void;
~~~

### 参数 {#parameters}

`show-suggest` 事件的回调接收一个包含以下字段的对象：

- `trigger` - 触发下拉列表的触发字符
- `query` - 在触发字符之后输入的文本（用于过滤 `items`）
- `items` - 已解析（且已过滤）的建议项列表。每个条目遵循[建议项结构](api/config/triggers.md#suggestion-item-fields)：可选的 `id`、`label` 和 `url`，以及 [`triggerTemplate`](api/config/trigger-template.md) 所使用的任意自定义字段（如 `image` 或 `name`）
- `pos` - 描述光标位置的 `DOMRect`，用于在屏幕上定位下拉列表

:::info[信息]
要处理内部事件，请使用 [**Event Bus 方法**](api/overview/event_bus_methods_overview.md)。
:::

### 示例 {#example}

~~~jsx {6-11}
// 初始化 RichText
const editor = new richtext.Richtext("#root", {
    triggers: [{ trigger: "@", data: people }]
    // 其他配置属性
});
// 在下拉列表打开之前覆盖建议列表
editor.api.intercept("show-suggest", (state) => {
    if (state.trigger === "@" && state.query === "") {
        return { ...state, items: state.items.slice(0, 5) };
    }
});
~~~

**变更日志：** 该事件在 v2.1 中新增

**相关示例：** [RichText. 提及、标签与异步查询](https://snippet.dhtmlx.com/nfvvfize?tag=richtext)

**相关文章：** [提及与标签](guides/mentions_and_tags.md)

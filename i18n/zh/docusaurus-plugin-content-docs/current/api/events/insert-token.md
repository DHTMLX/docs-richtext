---
sidebar_label: insert-token
title: insert-token 事件
description: 您可以在 DHTMLX JavaScript RichText 库的文档中了解 insert-token 事件。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX RichText 的免费 30 天评估版本。
---

# insert-token

### 描述 {#description}

@short: 在用户选取建议项且 RichText 将其作为 token 插入后触发

`insert-token` 事件在用户从触发器下拉列表（提及、标签或通过 [`triggers`](api/config/triggers.md) 属性设置的任何自定义触发器）中选取项目后触发。

### 用法 {#usage}

~~~jsx {}
"insert-token": ({
    data: {
        id?: string | number,
        label?: string,
        url?: string,
        // ...来自触发器数据源的任意自定义字段
    },
    trigger: string,
    showTrigger?: boolean,
    action?: (item) => void
}) => boolean | void;
~~~

### 参数 {#parameters}

`insert-token` 事件的回调接收一个包含以下字段的对象：

- `data` - 已选取的建议项。包含该项的 `id`、`label` 和 `url`，以及您添加到触发器 `data` 数据源中的任意自定义字段
- `trigger` - 打开下拉列表的触发字符（例如 `"@"` 或 `"#"`）
- `showTrigger` - 当值为 `false` 时，RichText 仅插入 `label`；否则组件还会显示触发字符（默认行为）
- `action` - 为匹配的 [触发器](api/config/triggers.md) 定义的自定义动作。设置后，该参数优先于 token 插入：RichText 会删除已输入的文本（触发字符和查询内容），并调用 `action(data)` 而非插入 token。在此情况下，`showTrigger` 参数无效

:::info[信息]
要处理内部事件，请使用 [**Event Bus 方法**](api/overview/event_bus_methods_overview.md)。
:::

### 示例 {#example}

~~~jsx {5-8}
// 初始化 RichText
const editor = new richtext.Richtext("#root", {
    // 配置属性
});
// 订阅 "insert-token" 事件
editor.api.on("insert-token", ({ data, trigger, showTrigger }) => {
    console.log(`Inserted ${trigger}${data.label} (id: ${data.id})`);
});
~~~

**变更日志：** 该事件在 v2.1 中添加

**相关示例：** [RichText. 提及、标签与异步查询](https://snippet.dhtmlx.com/nfvvfize?tag=richtext)

**相关文章：** [提及与标签](guides/mentions_and_tags.md)

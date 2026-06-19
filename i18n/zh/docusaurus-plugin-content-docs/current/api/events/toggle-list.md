---
sidebar_label: toggle-list
title: toggle-list 事件
description: 您可以在 DHTMLX JavaScript RichText 库的文档中了解 toggle-list 事件。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX RichText 的免费 30 天评估版本。
---

# toggle-list

### 描述 {#description}

@short: 当用户在所选块上切换列表时触发

`toggle-list` 事件为上下文感知的项目符号/编号列表按钮提供支持。该事件不会插入新列表，而是检查当前选区并自动选择以下四种行为之一：

| 模式 | 触发条件 | 结果 |
| ----------- | --------------------------------------------------------------- | ------------------------------------------------------------------- |
| **包装** | 选区仅包含段落 | 每个段落成为一个新列表容器中的列表项 |
| **解包** | 所有选中项目均属于所点击类型的列表 | 这些项目还原为段落，列表容器被移除 |
| **转换** | 所有选中项目均在列表中，但至少有一个列表属于另一种类型 | 列表类型就地切换（项目符号 ↔ 编号） |
| **混合** | 选区同时包含段落和列表项 | 段落转为列表项，所有内容合并为该类型的一个列表 |

### 用法 {#usage}

~~~jsx {}
"toggle-list": ({ type: TListType }) => boolean | void;

type TListType = "bulleted" | "numbered";
~~~

### 参数 {#parameters}

`toggle-list` 事件的回调函数可接受一个包含以下参数的对象：

- `type` - 要切换的列表类型。可指定以下值：
    - `"bulleted"` - 项目符号（无序）列表
    - `"numbered"` - 编号（有序）列表

:::info[信息]
要处理内部事件，请使用 [**Event Bus 方法**](api/overview/event_bus_methods_overview.md)
:::

### 示例 {#example}

~~~jsx {5-9}
// 初始化 RichText
const editor = new richtext.Richtext("#root", {
    // 配置属性
});
// 订阅 "toggle-list" 事件
editor.api.on("toggle-list", (obj) => {
    console.log(obj.type);
    console.log("The list was toggled");
});
~~~

**变更日志：** 该事件在 v2.0.6 中新增

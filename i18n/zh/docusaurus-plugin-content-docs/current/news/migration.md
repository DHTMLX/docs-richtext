---
sidebar_label: 迁移到新版本
title: 迁移到新版本
description: 您可以在 DHTMLX JavaScript RichText 库的文档中了解迁移到新版本的相关内容。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载免费 30 天评估版本的 DHTMLX RichText。
---

# 迁移到新版本

## 1.2 -> 2.0

### 属性迁移

| 旧版属性        | 替代项                    | 说明                                     |
| --------------- | ------------------------- | ---------------------------------------- |
| `customStats`   | *(已移除)*                | 新版本 2.0 中不再可用                    |
| `toolbarBlocks` | `toolbar`                 | 现在支持更详细的工具栏结构               |
| `defaultStyles` | `defaultStyles`（已更新） | 结构现在基于块和 CSS                     |
| `mode`          | `layoutMode`              | 替换为更严格的枚举值设置                 |

### - `customStats`

`customStats` 属性已被移除。当前版本的 RichText 不再支持显示用户自定义的统计信息（如字符数、单词数、句子数）。

如果仍需计算文本指标，可以通过访问编辑器内容并手动处理来实现：

```jsx
const content = editor.getValue();
const wordCount = content.split(/\s+/).length;
```

### - `toolbarBlocks` → [`toolbar`](api/config/toolbar.md)

在 **2.0** 之前，用户只能指定包含控件的块
```jsx{2} title="Before 2.0"
new dhx.RichText("#root", {
  toolbarBlocks: ["undo", "style", "decoration", "colors", "align", "link"]
});
```

从 **2.0** 开始，用户可以指定单独的控件
```jsx{2-4} title="From 2.0"
new richtext.Richtext("#root", {
    toolbar: [
        "undo", "style", "bold", "italic", "underline", "text-color",
        "align", "link"
    ]
});
```

### - [`defaultStyles`](api/config/default-styles.md)

在 **2.0** 之前，用户可以为工具栏选择控件定义默认值
```jsx title="Before 2.0"
defaultStyles: {
    "font-family": "Tahoma",
    "font-size": "14px"
}
```

从 **2.0** 开始，用户可以为特定块类型指定默认样式值
```jsx title="From 2.0"
defaultStyles: {
  "*": {
    "font-family": "Tahoma",
    "font-size": "14px"
  },
  h1: {
    "font-size": "32px",
    "color": "#333"
  }
}
```

:::note
使用 `*` 为所有块定义基础默认值，然后针对特定元素（p、h1、blockquote 等）进行覆盖。
:::

### - `mode` → [`layoutMode`](api/config/layout-mode.md)

```jsx{2} title="Before 2.0"
new dhx.RichText("#root", {
    mode: "document"
});
```

```jsx{2} title="From 2.0"
new Richtext("#root", {
    layoutMode: "document" // or "classic"
});
```

新的 [`layoutMode`](api/config/layout-mode.md) 严格支持 `"classic"` 和 `"document"` 两个值。

### 方法迁移

| 旧版方法                | 新等效方法                           | 说明                                                       |
| ----------------------- | ------------------------------------ | ---------------------------------------------------------- |
| `getValue(mode)`        | `getValue(encoder)`                  | 编码器取代字符串模式；编码器需单独导入                     |
| `setValue(value, mode)` | `setValue(value, encoder)`           | 编码器取代字符串模式；编码器需单独导入                     |
| `getStats()`            | *已移除*                             | 无替代方案；需手动实现相关逻辑                             |
| `getEditorAPI()`        | *已移除*                             | 内部方法；请使用公共 API                                   |
| `fire()`                | *已移除*                             | 由 `exec()` 和 `intercept()` 替代                          |
| `on()`、`detach()`      | ✅ 保留（`api.on`、`api.detach`）    | 现通过 `richtext.api` 访问                                 |
| `fullScreen()`          | *已移除*                             | 使用 `fullscreenMode` 配置属性                             |
| `exitFullScreen()`      | *已移除*                             | 使用 `fullscreenMode` 配置属性                             |
| `paint()`               | *已移除*                             | 不再需要                                                   |
| `destructor()`          | ✅ 仍可用                            | 未变更                                                     |
| `setConfig()`           | ✅ 新增                              | 支持实时更新配置                                           |
| `setLocale()`           | ✅ 新增                              | 支持动态切换语言                                           |
| `getReactiveState()`    | ✅ 新增                              | 支持响应式状态追踪                                         |
| `getState()`            | ✅ 新增                              | 提供当前静态配置状态                                       |
| `intercept()`           | ✅ 新增                              | 拦截内部操作                                               |
| `exec()`                | ✅ 新增                              | 执行内部操作                                               |

### - [`setValue()`](api/methods/set-value.md) / [`getValue()`](api/methods/get-value.md)

```jsx title="Before 2.0"
...
editor.setValue("<p>Hello</p>", "html");
editor.getValue("text");
```

```jsx title="From 2.0"
const fromTextEncoder = richtext.text.fromText; 
const fromHTMLEncoder = richtext.html.fromHTML; 

const toTextEncoder = richtext.text.toText; 
const toHTMLEncoder = richtext.html.toHTML; 
...
editor.setValue("<p>Hello</p>", fromHTMLEncoder);
editor.getValue(toTextEncoder);
```

:::note
您仍可以不传入编码器直接调用 `getValue()` 和 `setValue()` — 默认使用 HTML 格式
:::

### - [`on`](api/internal/on.md) / [`detach`](api/internal/detach.md)

```jsx title="Before 2.0"
editor.events.on("Change", function(action, canUndo, canRedo){
  // your code here
});
 
editor.events.detach("Change");
```

```jsx title="From 2.0"
editor.api.on("set-font-size", (obj) => {
    console.log(obj.fontSize);
}, { tag: "track" });

editor.api.detach("track");
```

### - `fire()` → 使用 [`exec()`](api/internal/exec.md) 和 [`intercept()`](api/internal/intercept.md)

```jsx title="Before 2.0"
editor.events.fire("some-event", [data]);
```

```jsx title="From 2.0"
editor.api.exec("some-event", obj);

// Preventing execution
editor.api.intercept("some-event", (obj) => false);
```

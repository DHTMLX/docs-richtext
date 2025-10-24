---
sidebar_label: 迁移到新版本
title: 迁移到新版本
description: 您可以在 DHTMLX JavaScript RichTExt 库的文档中了解如何迁移到新版本。浏览开发者指南和 API 参考，尝试代码示例和在线演示，并免费下载 DHTMLX RichTExt 30 天评估版。
---

# 迁移到新版本

## 1.2 -> 2.0

### 属性迁移

| 旧属性           | 替换为                      | 说明                                         |
| ---------------- | --------------------------- | -------------------------------------------- |
| `customStats`    | *(已移除)*                  | 在新版本 2.0 中不可用                        |
| `toolbarBlocks`  | `toolbar`                   | 现在支持更详细的工具栏结构                   |
| `defaultStyles`  | `defaultStyles`（已更新）   | 结构现在基于每个块并且基于 CSS               |
| `mode`           | `layoutMode`                | 替换为更严格的枚举类型设置                   |

### - `customStats`

`customStats` 属性已不包含在最新的 RichText 版本中。这意味着内置的自定义统计（如字符数、单词数或句子数）已不再支持。

要处理文本统计，请自行获取编辑器内容并按需处理:

```jsx
const content = editor.getValue();
const wordCount = content.split(/\s+/).length;
```

### - `toolbarBlocks` → [`toolbar`](api/config/toolbar.md)

在 **2.0** 之前，只能设置控件块：
```jsx{2} title="Before 2.0"
new dhx.RichText("#root", {
  toolbarBlocks: ["undo", "style", "decoration", "colors", "align", "link"]
});
```

从 **2.0** 开始，可以按需列出单个控件:
```jsx{2-4} title="From 2.0"
new richtext.Richtext("#root", {
    toolbar: [
        "undo", "style", "bold", "italic", "underline", "text-color",
        "align", "link"
    ]
});
```

### - [`defaultStyles`](api/config/default-styles.md)

在 **2.0** 之前，工具栏选择控件的默认值如下：
```jsx title="Before 2.0"
defaultStyles: {
    "font-family": "Tahoma",
    "font-size": "14px"
}
```

从 **2.0** 开始，可以为特定块类型设置默认样式值:
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
`*` 键为所有内容设置基础默认值，任何特定元素（如 p、h1 或 blockquote）都可以在其基础上进行自定义。
:::

### - `mode` → [`layoutMode`](api/config/layout-mode.md)

```jsx{2} title="Before 2.0"
new dhx.RichText("#root", {
    mode: "document"
});
```

```jsx{2} title="From 2.0"
new Richtext("#root", {
    layoutMode: "document" // 或 "classic"
});
```

现在，[`layoutMode`](api/config/layout-mode.md) 只接受 `"classic"` 或 `"document"`。

### 方法迁移

| 旧方法                   | 新方法                               | 说明                                              |
| ------------------------ | ------------------------------------ | ------------------------------------------------- |
| `getValue(mode)`         | `getValue(encoder)`                  | 编码器替代字符串模式；编码器需单独导入             |
| `setValue(value, mode)`  | `setValue(value, encoder)`           | 编码器替代字符串模式；编码器需单独导入             |
| `getStats()`             | *已移除*                             | 无替代方案；需手动实现                            |
| `getEditorAPI()`         | *已移除*                             | 内部方法；请使用公开 API                          |
| `fire()`                 | *已移除*                             | 替换为 `exec()` 和 `intercept()`                  |
| `on()`, `detach()`       | ✅ 保留（`api.on`, `api.detach`）     | 现在通过 `richtext.api` 访问                      |
| `fullScreen()`           | *已移除*                             | 使用 `fullscreenMode` 配置属性                    |
| `exitFullScreen()`       | *已移除*                             | 使用 `fullscreenMode` 配置属性                    |
| `paint()`                | *已移除*                             | 不再需要                                          |
| `destructor()`           | ✅ 仍可用                             | 未更改                                            |
| `setConfig()`            | ✅ 新增                               | 支持动态配置更新                                  |
| `setLocale()`            | ✅ 新增                               | 支持动态切换语言环境                              |
| `getReactiveState()`     | ✅ 新增                               | 支持响应式状态跟踪                                |
| `getState()`             | ✅ 新增                               | 提供当前静态配置状态                              |
| `intercept()`            | ✅ 新增                               | 拦截内部动作                                      |
| `exec()`                 | ✅ 新增                               | 执行内部动作                                      |

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
调用 `getValue()` 和 `setValue()` 时不传递编码器也是可以的，默认会使用 HTML。
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

// 阻止执行
editor.api.intercept("some-event", (obj) => false);
```

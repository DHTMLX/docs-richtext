---
sidebar_label: 迁移至新版本
title: 迁移至新版本
description: 您可以在 DHTMLX JavaScript RichText 库的文档中了解迁移至新版本的相关信息。浏览开发指南和 API 参考，尝试代码示例和在线演示，并下载 DHTMLX RichText 的 30 天免费评估版本。
---

# 迁移至新版本 {#migration-to-newer-versions}

## 1.2 -> 2.0 {#12---20}

### 属性迁移 {#properties-migration}

| 旧版属性        | 替代方案                  | 说明                                     |
| --------------- | ------------------------- | ----------------------------------------- |
| `customStats`   | *(已移除)*               | 新版本 2.0 中不再可用      |
| `toolbarBlocks` | `toolbar`                 | 现支持详细的工具栏结构   |
| `defaultStyles` | `defaultStyles`（已更新） | 结构现为按块和基于 CSS  |
| `mode`          | `layoutMode`              | 已替换为更严格的枚举设置 |

### - `customStats` {#--customstats}

`customStats` 属性已被移除。当前版本的 RichText 不再支持显示用户自定义的统计信息（例如字符数、单词数、句子数）。

如果您仍需计算文本指标，可以通过访问编辑器内容并手动处理来在外部实现：

```jsx
const content = editor.getValue();
const wordCount = content.split(/\s+/).length;
```

### - `toolbarBlocks` → [`toolbar`](api/config/toolbar.md) {#--toolbarblocks--toolbar}

**2.0** 之前，用户只能指定包含控件的块
```jsx{2} title="Before 2.0"
new dhx.RichText("#root", {
  toolbarBlocks: ["undo", "style", "decoration", "colors", "align", "link"]
});
```

从 **2.0** 起，用户可以指定单独的控件
```jsx{2-4} title="From 2.0"
new richtext.Richtext("#root", {
    toolbar: [
        "undo", "style", "bold", "italic", "underline", "text-color",
        "align", "link"
    ]
});
```

### - [`defaultStyles`](api/config/default-styles.md) {#--defaultstyles}

**2.0** 之前，用户可以为工具栏选择控件定义默认值
```jsx title="Before 2.0"
defaultStyles: {
    "font-family": "Tahoma",
    "font-size": "14px"
}
```

从 **2.0** 起，用户可以为特定块类型指定默认样式值
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

:::note[注意]
使用 `*` 为所有块定义基础默认值，然后为特定元素（p、h1、blockquote 等）进行覆盖。
:::

### - `mode` → [`layoutMode`](api/config/layout-mode.md) {#--mode--layoutmode}

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

新的 [`layoutMode`](api/config/layout-mode.md) 严格支持 `"classic"` 和 `"document"` 两个值。

### 方法迁移 {#methods-migration}

| 旧版方法                | 新版等效方法                         | 说明                                                 |
| ----------------------- | ------------------------------------ | ----------------------------------------------------- |
| `getValue(mode)`        | `getValue(encoder)`                  | 编码器替代字符串模式；编码器需单独导入 |
| `setValue(value, mode)` | `setValue(value, encoder)`           | 编码器替代字符串模式；编码器需单独导入 |
| `getStats()`            | *已移除*                            | 无替代方案；需手动实现逻辑                 |
| `getEditorAPI()`        | *已移除*                            | 内部接口；请使用公共 API                      |
| `fire()`                | *已移除*                            | 已由 `exec()` 和 `intercept()` 替代                |
| `on()`、`detach()`      | ✅ 已保留（`api.on`、`api.detach`）| 现通过 `richtext.api` 访问                       |
| `fullScreen()`          | *已移除*                            | 使用 `fullscreenMode` 配置属性                  |
| `exitFullScreen()`      | *已移除*                            | 使用 `fullscreenMode` 配置属性                  |
| `paint()`               | *已移除*                            | 不再需要                                      |
| `destructor()`          | ✅ 仍可用                   | 无变化                                             |
| `setConfig()`           | ✅ 新增                               | 支持实时配置更新                           |
| `setLocale()`           | ✅ 新增                               | 支持动态切换语言                          |
| `getReactiveState()`    | ✅ 新增                               | 支持响应式状态追踪                          |
| `getState()`            | ✅ 新增                               | 提供当前静态配置状态                  |
| `intercept()`           | ✅ 新增                               | 拦截内部操作                              |
| `exec()`                | ✅ 新增                               | 执行内部操作                              |

### - [`setValue()`](api/methods/set-value.md) / [`getValue()`](api/methods/get-value.md) {#--setvalue--getvalue}

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

:::note[注意]
您仍然可以不带编码器调用 `getValue()` 和 `setValue()`——默认使用 HTML 格式
:::

### - [`on`](api/internal/on.md) / [`detach`](api/internal/detach.md) {#--on--detach}

```jsx title="Before 2.0"
editor.events.on("Change", function(action, canUndo, canRedo){
  // 你的代码
});
 
editor.events.detach("Change");
```

```jsx title="From 2.0"
editor.api.on("set-font-size", (obj) => {
    console.log(obj.fontSize);
}, { tag: "track" });

editor.api.detach("track");
```

### - `fire()` → 使用 [`exec()`](api/internal/exec.md) 和 [`intercept()`](api/internal/intercept.md) {#--fire--use-exec-and-intercept}

```jsx title="Before 2.0"
editor.events.fire("some-event", [data]);
```

```jsx title="From 2.0"
editor.api.exec("some-event", obj);

// 阻止执行
editor.api.intercept("some-event", (obj) => false);
```

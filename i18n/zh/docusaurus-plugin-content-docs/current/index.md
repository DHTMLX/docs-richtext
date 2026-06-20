---
sidebar_label: RichText 概述
title: RichText 概述
slug: /
description: 您可以在本文档中了解 DHTMLX JavaScript RichText 库的概述。浏览开发者指南和 API 参考，体验代码示例和在线演示，并下载 DHTMLX RichText 免费 30 天评估版本。
---

# RichText 概述 {#richtext-overview}

**DHTMLX RichText** 是一款基于 JavaScript 构建的灵活轻量级所见即所得编辑器。它专为在现代 Web 应用中提供流畅的编辑体验而设计，具备简洁的 UI、丰富的格式化能力以及对内容渲染的全面控制。无论您是在构建 CMS、内部管理工具还是嵌入式文档编辑器，RichText 均可轻松集成并按需定制。

**DHTMLX RichText** 组件包含以下功能：

- 两种 [**布局模式**](api/config/layout-mode.md)

- 将内容序列化为 HTML、纯文本和 Markdown

- 可配置的 [`toolbar`](api/config/toolbar.md)，支持内置按钮和自定义按钮

- 静态 [`menubar`](api/config/menubar.md)，可显示或隐藏

- 图片上传功能，支持可选的服务器 [上传](api/config/image-upload-url.md) 或内联 base64 嵌入，以及丰富的格式化、自定义样式和全屏模式

- [完整的 API 访问](api/overview/main_overview.md)，用于 [事件处理](api/overview/event_bus_methods_overview.md)、[内容操作](api/overview/methods_overview.md) 和 [响应式状态管理](api/overview/state_methods_overview.md)

RichText 与框架无关，可轻松与 [React](guides/integration_with_react.md)、[Angular](guides/integration_with_angular.md)、[Vue](guides/integration_with_vue.md) 和 [Svelte](guides/integration_with_svelte.md) 框架集成，适用于广泛的前端生态系统。

本文档提供了关于安装、配置、使用和定制的详细指导。您将找到常见场景的示例、[完整的 API 参考](api/overview/main_overview.md)以及将 RichText 嵌入应用程序的最佳实践。

## RichText 结构 {#richtext-structure}

### 菜单栏 {#menubar}

RichText 菜单栏提供对编辑操作的访问，例如新建文档、打印、导入/导出内容等。默认情况下它处于隐藏状态。

使用 [`menubar`](api/config/menubar.md) 属性可切换其可见性。菜单栏可以启用或禁用，但其内容目前不支持配置。

<div className="img_border">
![菜单栏](/img/richtext/menubar.png)
</div>

### 工具栏 {#toolbar}

RichText 工具栏提供对文本格式化和结构化编辑功能的快速访问。默认情况下，[工具栏](api/config/toolbar.md#default-config) 处于启用状态，并显示一组预定义的常用控件，例如加粗、斜体、字体设置、列表格式化等。

[`toolbar`](api/config/toolbar.md) 属性允许您完全自定义工具栏的内容和布局。您可以启用或禁用工具栏、重新排列默认控件，或使用预定义按钮标识符数组和自定义按钮对象来定义完全自定义的工具栏。

<div className="img_border">
![工具栏](/img/richtext/toolbar.png)
</div>

### 编辑器 {#editor}

RichText 编辑器是用户创建和格式化内容的核心区域。您可以通过配置选项（如 [`value`](api/config/value.md)、[`layoutMode`](api/config/layout-mode.md) 和 [`defaultStyles`](api/config/default-styles.md)）来控制编辑器的外观和行为。RichText 还支持自定义样式、图片嵌入以及响应式布局调整，以满足应用程序的需求。

#### 两种工作模式 {#two-working-modes}

DHTMLX RichText 可以在"classic"和"document"模式下处理内容。您可以选择最适合的模式，以便在编辑文本时获得舒适的体验。使用 [`layoutMode`](api/config/layout-mode.md) 属性可以通过编程方式切换模式。

- `"classic"`

<div className="img_border">
![经典模式](/img/richtext/classic_mode.png)
</div>

- `"document"`

<div className="img_border">
![文档模式](/img/richtext/document_mode.png)
</div>

## 支持的格式 {#supported-formats}

RichText 编辑器支持 **HTML**、**纯文本** 和 **Markdown** 格式的 [解析](api/methods/set-value.md) 和 [序列化](api/methods/get-value.md)。

#### HTML 格式 {#html-format}

<div className="img_border">
![HTML 格式](/img/richtext/html_format.png)
</div>

#### 文本格式 {#text-format}

<div className="img_border">
![文本格式](/img/richtext/text_format.png)
</div>

#### Markdown 格式 {#markdown-format}

将内置的 `markdown` 编码器传递给 [`setValue()`](api/methods/set-value.md) / [`getValue()`](api/methods/get-value.md)，以 Markdown 格式加载或序列化内容：

~~~jsx
const editor = new richtext.Richtext("#root", {
    value: "Hello world"
    // other configuration properties
});

// load Markdown into the editor
editor.setValue("# Title\n\nParagraph", richtext.markdown.fromMarkdown);

// read editor content as Markdown
const md = editor.getValue(richtext.markdown.toMarkdown);
~~~

:::note[注意]
Markdown 支持涵盖有限的语法子集——包括标题、段落、换行、强调、块引用、列表和链接等常见块级和内联元素。在序列化时，没有对应 Markdown 语法的格式（字体系列、字体大小、颜色、对齐方式、行高）将被丢弃。

不支持嵌套内联结构，唯一的例外是 **斜体中的加粗**。加粗内嵌链接、列表项中的斜体或多级（嵌套）列表等组合将无法正确渲染。
:::

## 复制与粘贴 {#copy-and-paste}

RichText 编辑器通过标准系统快捷键支持剪贴板操作（Windows/Linux 上的 `Ctrl+C` / `Ctrl+X` / `Ctrl+V`，macOS 上的 `⌘+C` / `⌘+X` / `⌘+V`），以及相应的 [工具栏](api/config/toolbar.md) 按钮和 [菜单栏](api/config/menubar.md) 条目。

复制或剪切内容时，RichText 会将两种表示形式写入系统剪贴板：

- **纯文本** 版本，用于与简单目标（终端、代码编辑器、纯文本输入框）的兼容
- **HTML** 版本，携带所有内联和块级格式（加粗、斜体、下划线、删除线、字体系列、字体大小、文字和背景颜色、标题、块引用、列表、对齐方式、缩进、行高、链接和图片）

粘贴行为取决于剪贴板内容的来源：

- 在两个 RichText 实例之间粘贴（在同一文档或不同页面中）将使用 HTML 表示形式并保留原始格式。
- 从任何外部来源粘贴——包括浏览器、文字处理器和其他编辑器——将作为纯文本处理。插入的内容将以不带外部格式的文本形式添加。

:::note[注意]
工具栏的 **粘贴** 按钮使用异步 Clipboard API，该 API 仅公开纯文本。若要粘贴从另一个 RichText 复制的内容并保留其格式，请使用 `Ctrl+V` / `⌘+V` 快捷键，该快捷键可直接从浏览器的剪贴板事件中接收完整的 HTML 内容。
:::

## 键盘快捷键 {#keyboard-shortcuts}

RichText 编辑器支持一组常用键盘快捷键，以加快格式化和编辑速度。这些快捷键遵循平台惯例，在 **Windows/Linux**（`Ctrl`）和 **macOS**（`⌘`）上均可使用。

### 文本格式化 {#text-formatting}

| 操作            | Windows/Linux   | macOS         |
|-----------------|-----------------|---------------|
| 加粗*           | `Ctrl+B`        | `⌘B`          |
| 斜体            | `Ctrl+I`        | `⌘I`          |
| 下划线          | `Ctrl+U`        | `⌘U`          |
| 删除线          | `Ctrl+Shift+X`  | `⌘⇧X`         |

### 编辑 {#editing}

| 操作      | Windows/Linux            | macOS         |
|-----------|--------------------------|---------------|
| 撤销      | `Ctrl+Z`                 | `⌘Z`          |
| 重做      | `Ctrl+Y` / `Ctrl+Shift+Z`| `⌘Y` / `⌘⇧Z`  |
| 剪切      | `Ctrl+X`                 | `⌘X`          |
| 复制      | `Ctrl+C`                 | `⌘C`          |
| 粘贴      | `Ctrl+V`                 | `⌘V`          |
| 删除单词  | `Ctrl+Backspace` / `Ctrl+Delete` | `⌥⌫` / `⌥⌦` |
| 删除行    | —                     | `⌘⌫` / `⌘⌦`   |

### 缩进 {#indentation}

| 操作                  | Windows/Linux | macOS |
|-----------------------|---------------|-------|
| 增加缩进 / 嵌套列表   | `Tab`         | `⇥`   |
| 减少缩进 / 提升列表   | `Shift+Tab`   | `⇧⇥`  |

### 特殊操作 {#special-actions}

| 操作       | Windows/Linux | macOS |
|------------|---------------|-------|
| 插入链接   | `Ctrl+K`      | `⌘K`  |
| 打印       | `Ctrl+P`      | `⌘P`  |

:::info[信息]
更多快捷键可能会在未来的更新中引入。
:::

若要获取与 RichText 键盘快捷键相关的实际参考，请按 **帮助** 并选择 **键盘快捷键** 选项：

<div className="img_border">
![键盘快捷键](/img/richtext/shortcut_reference.png)
</div>

---
sidebar_label: DHTMLX MCP 服务器
title: 用于编辑和内容格式的 DHTMLX RichText MCP 集成
description: MCP 服务器为 AI 助手提供关于 DHTMLX RichText 样式默认值、编码器和触发器配置的经过验证的最新文档。
---

# DHTMLX RichText MCP 服务器：格式、工具栏与触发器 {#dhtmlx-richtext-mcp-server-formats-toolbar-and-triggers}

DHTMLX RichText 是一款配置选项丰富的轻量级 WYSIWYG 编辑器。您可以在 [HTML、纯文本和 Markdown](/#supported-formats) 之间转换内容，通过 [样式默认值](guides/configuration.md#configure-default-styles) 为每种块类型设置排版样式，并构建完全可自定义的 [工具栏](guides/configuration.md#toolbar)，使其适应应用程序所需的任意控件。要充分发挥这些功能的价值，需要将每个部分与当前配置相匹配：为样式默认值匹配当前的 CSS，为特定格式匹配正确的编码器，为自定义工具栏按钮匹配有效的控件类型——而不是凭记忆猜测。

DHTMLX MCP 服务器让 AI 助手始终掌握所有这些内容的最新情况。[Mentions 与触发器设置](guides/mentions_and_tags.md)、[图片上传契约](guides/working_with_server.md) 以及 [DOCX/PDF 导出流程](api/events/export.md) 均来自最新文档，因此生成的代码与编辑器当前的实际行为保持一致。

### MCP 端点 {#mcp-endpoint}

~~~jsx
https://docs.dhtmlx.com/mcp
~~~

:::note[备注]
DHTMLX MCP 服务器涵盖所有主要的 DHTMLX 产品，而不仅仅是 DHTMLX RichText。无论您使用哪个 DHTMLX 组件进行开发，相同的端点和配置说明都同样适用。
:::

## MCP 服务器中的 RichText 覆盖范围 {#richtext-coverage-in-the-mcp-server}

从工具栏按钮到触发器回调，MCP 服务器的索引覆盖了 DHTMLX RichText 的全部功能范围。常见查询包括：

- 查询 [方法](api/overview/methods_overview.md)、[事件](api/overview/events_overview.md) 和 [属性](api/overview/properties_overview.md) 的当前 API，包括 [Event Bus](api/overview/event_bus_methods_overview.md) 和 [state](api/overview/state_methods_overview.md) 方法。
- 为特定编辑器生成包含容器、[`toolbar`](api/config/toolbar.md) 和 [`menubar`](api/config/menubar.md) 的即用型 [初始化](guides/initialization.md) 代码。
- 使用 [`layoutMode`](api/config/layout-mode.md) 在 [经典布局模式与文档布局模式](guides/configuration.md#layout-modes) 之间切换，并通过内置按钮或 `button`/`richselect`/`colorpicker` 控件对象构建自定义 [工具栏](guides/configuration.md#toolbar)。
- 通过 [`setValue()`](api/methods/set-value.md)、[`getValue()`](api/methods/get-value.md) 和 [`insertValue()`](api/methods/insert-value.md) 结合匹配的编码器，以 HTML、纯文本或 Markdown 格式读取或写入内容。
- 为每种块类型设置 [默认样式](guides/configuration.md#configure-default-styles)，并搭配匹配的 CSS 规则。
- 将 [图片上传端点](guides/working_with_server.md) 对接到 RichText 所期望的精确请求/响应契约，或依赖内联 base64 回退方式。
- 通过 `triggers` 属性配置 [@mentions、#tags 和斜杠命令](guides/mentions_and_tags.md)，包括静态、同步和异步数据源。
- 处理 DOCX/PDF 输出的 [`export`](api/events/export.md) 和 [`import`](api/events/import.md)，并通过 `--wx-color-primary` 等 CSS 变量 [本地化](guides/localization.md) 界面或对其进行 [样式设置](guides/stylization.md)。
- 将 RichText 与 [React](guides/integration_with_react.md)、[Vue](guides/integration_with_vue.md)、[Angular](guides/integration_with_angular.md) 和 [Svelte](guides/integration_with_svelte.md) 集成。

## MCP 服务器如何处理 RichText 提示 {#how-the-mcp-server-handles-a-richtext-prompt}

发送到 DHTMLX MCP 服务器的 RichText 请求会先经过基于模型上下文协议（Model Context Protocol，MCP）的检索增强生成（Retrieval-Augmented Generation，RAG）流水线，然后进入两种工作流之一：*Search*（返回匹配的参考页面）或 *Inference*（读取这些页面并直接给出答案）。对助手而言，一个 RichText 请求通常包含两个方面：一个需要最新文档支持，另一个则是它无需帮助即可处理的内容。在任何内容到达 MCP 之前，助手会先拆分出前者。

以提示 *“如何设置 DHTMLX RichText，使图片在插入文档之前先上传到我公司的资源服务器？”* 为例，追踪其处理过程：

1. 助手提取出请求中需要文档支持的部分：RichText 对图片上传端点所期望的请求/响应契约。
2. 服务器将其与「与服务器配合使用」文档关联起来。
3. 该请求需要可运行的代码，因此由 *Search* 处理（而像 `insertValue()` 是替换所选内容还是在光标处插入这样范围更窄的问题，则会交给 *Inference* 处理）。
4. *Search* 从基于当前 RichText 文档构建的向量索引中检索匹配的页面。
5. 这些页面作为上下文返回给助手。
6. 助手据此契约编写上传处理程序，然后根据自身知识填写发往公司资源服务器的实际请求。

正是通过这一流程，RichText 的格式和工具栏相关建议才能与编辑器当前的实际行为保持一致。

## 将您的 AI 工具接入 MCP 服务器 {#attaching-your-ai-tool-to-the-mcp-server}

注册 MCP 端点对每个工具只需完成一次，无论是通过 CLI 命令还是 JSON 配置项，它们最终都指向同一个地址：

~~~jsx
https://docs.dhtmlx.com/mcp
~~~

以下逐一介绍常用工具的设置步骤。

### Claude Code {#claude-code}

:::info[信息]
Claude Code 的所有 MCP 设置细节都可以在其 [官方文档](https://code.claude.com/docs/en/mcp) 中找到。
:::

要通过命令行注册该服务器，请运行：

~~~jsx
claude mcp add --transport http dhtmlx-mcp https://docs.dhtmlx.com/mcp
~~~

想自己手动配置？将以下内容添加到您的 `.mcp.json` 中：

~~~jsx
{
  "mcpServers": {
    "dhtmlx-mcp": {
      "type": "http",
      "url": "https://docs.dhtmlx.com/mcp"
    }
  }
}
~~~

### Cursor {#cursor}

:::info[信息]
Cursor 的 [官方文档](https://cursor.com/en-US/docs/mcp) 提供了完整的 MCP 配置演练。
:::

添加服务器的步骤：

1. 打开设置（Mac 上按 `Cmd+Shift+J`，Windows/Linux 上按 `Ctrl+Shift+J`）
2. 进入 **Tools & MCP**
3. 点击 **Add Custom MCP**
4. 粘贴以下配置：

~~~jsx
{
  "mcpServers": {
    "dhtmlx-mcp": {
      "url": "https://docs.dhtmlx.com/mcp"
    }
  }
}
~~~

### Google Antigravity {#google-antigravity}

#### Antigravity 2.0 {#antigravity-20}

:::info[信息]
查看 [官方文档](https://antigravity.google/docs/mcp) 以获取 Antigravity 中完整的 MCP 集成步骤。
:::

连接 DHTMLX MCP 服务器与 Google Antigravity 需要完成以下步骤：

1. 打开命令面板
2. 输入 “mcp add”
3. 选择 “HTTP”
4. 提供以下值：
- 名称：
~~~jsx
dhtmlx-mcp
~~~
- URL：
~~~jsx
https://docs.dhtmlx.com/mcp
~~~

#### Antigravity CLI {#antigravity-cli}

:::info[信息]
[相关指南](https://antigravity.google/docs/gcli-migration#mcp-config-formatting-changes) 详细说明了从 Gemini CLI 迁移到 Antigravity CLI 时发生变化的所有内容。
:::

要将 DHTMLX MCP 服务器连接到 Antigravity CLI，请在以下位置之一创建 `mcp_config.json`：

- 全局：`~/.gemini/config/mcp_config.json`
- 工作区：`.agents/mcp_config.json`

添加以下配置：

~~~jsx
{
  "mcpServers": {
    "dhtmlx-mcp": {
      "serverUrl": "https://docs.dhtmlx.com/mcp"
    }
  }
}
~~~

然后在终端中运行 `agy`。

### ChatGPT {#chatgpt}

:::info[信息]
ChatGPT MCP 连接器设置的每一步都在 [官方文档](https://help.openai.com/en/articles/12584461-developer-mode-and-mcp-apps-in-chatgpt) 中有详细说明。
:::

配置连接器的步骤：

1. 进入 **Settings** → **Apps & Connectors**
2. 点击 **Advanced settings**
3. 启用 **Developer mode**
4. 返回 **Apps & Connectors** 并点击 “Create”
5. 填写连接器详细信息：
- 名称：
~~~jsx
dhtmlx-mcp
~~~
- URL：
~~~jsx
https://docs.dhtmlx.com/mcp
~~~
- 身份验证：`No authentication`
6. 点击 **Create**

创建连接器后，ChatGPT 会在对话过程中从 MCP 服务器获取文档。

:::info[信息]
对于高强度的编码工作流，其他支持 MCP 的工具可能更为合适。
:::

### Other tools {#other-tools}

在其他任何 AI 编程工具的设置中查找类似 “Model Context Protocol” 或 “Context Sources” 的标签，然后在其中将 `https://docs.dhtmlx.com/mcp` 添加为自定义来源。

## MCP 服务器隐私基础 {#mcp-server-privacy-basics}

MCP 服务器仅在远程运行：不进行本地执行，不访问本地文件，也不存储任何个人信息。

记录的查询仅用于一个目的：调试和改进服务。

对于有更严格隐私要求的场景，DHTMLX 提供关闭查询日志记录的商业部署方案。请通过 `info@dhtmlx.com` 与我们联系。

## 使用 RichText 构建的提示词创意 {#prompt-ideas-for-building-with-richtext}

RichText 相关的提示词大致可归为四个方面：布局、内容格式、图片处理，以及 Mentions 与触发器。下面的分组即按此方式组织；您可以选择其中一个并根据自己的配置进行调整。

**布局和工具栏**

~~~
How do I switch DHTMLX RichText from full-width editing to a document-style layout? Use the docs.
~~~
~~~
How do I build a custom toolbar with only bold, italic, and one custom button?
~~~
~~~
How do I make the built-in layout mode switcher show up as a dropdown instead of a plain button?
~~~

**内容和格式**

~~~
How do I load Markdown content into DHTMLX RichText?
~~~
~~~
How do I read DHTMLX RichText's content out as plain text instead of HTML?
~~~
~~~
How do I insert an HTML link at the current cursor position without replacing the rest of the content?
~~~

**图片和服务器同步**

~~~
How do I make DHTMLX RichText upload images to my own server instead of embedding them inline?
~~~
~~~
What JSON response does DHTMLX RichText expect from an image upload endpoint?
~~~

**Mentions、Tags 与触发器**

~~~
How do I set up an @ mention trigger that looks up users from a server? Use the docs.
~~~
~~~
How do I make a slash command insert just the item text, without the leading slash showing up?
~~~

## 是什么让 RichText 提示词行之有效 {#what-makes-a-richtext-prompt-work}

- **明确指定具体方法。** `setValue()` 会替换整个文档，`insertValue()` 会在光标处插入或替换所选内容，`getValue()` 用于读取内容。请明确说明您指的是哪一个方法，而不要笼统地说“更新内容”。
- **说明您使用的格式。** `setValue()`、`getValue()` 和 `insertValue()` 默认使用 HTML，但也接受 `richtext.text.fromText` 和 `richtext.markdown.fromMarkdown` 编码器。请指明格式，以便助手传入正确的编码器，而不是默认假定为 HTML。
- **区分工具栏控件类型。** `richselect` 和 `colorpicker` 仅适用于特定的预定义控件 ID；自定义按钮仅支持 `type: "button"`。请说明您要添加的类型，以免助手将某个类型与一个会忽略它的 ID 搭配使用。
- **添加“Use the docs”。** 适用于图片上传响应结构或 `defaultStyles`/CSS 搭配这类场景。两者都有具体的契约（精确的 JSON 字段、手动 CSS 规则），很容易凭记忆出错。

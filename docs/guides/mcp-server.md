---
sidebar_label: DHTMLX MCP server
title: DHTMLX RichText MCP server to skip the guesswork
description: The MCP server provides AI assistants with verified, current documentation on DHTMLX RichText's style defaults, encoders, and trigger configuration.
---

# DHTMLX RichText MCP server: flexible editing, configured right

DHTMLX RichText packs serious flexibility into a lightweight WYSIWYG editor: content moves fluidly between [HTML, plain text, and Markdown](index.md#supported-formats), [style defaults](guides/configuration.md#configure-default-styles) let you set typography per block type, and a fully customizable [toolbar](guides/configuration.md#toolbar) adapts to whatever controls an application needs. An AI assistant gets the most out of all that flexibility when it pairs each piece with its matching setup: current CSS for style defaults, the right encoder for a given format, and valid control types for custom toolbar buttons, instead of working from a memorized guess.

The DHTMLX MCP server keeps an AI assistant fluent in all of it: the [mentions and trigger setup](guides/mentions_and_tags.md), the [image upload contract](guides/working_with_server.md), and the [DOCX/PDF export flow](api/events/export.md) all come back from current documentation, so generated code matches the editor as it actually behaves today.

**MCP endpoint**

~~~jsx
https://docs.dhtmlx.com/mcp
~~~

:::note
The DHTMLX MCP server covers all major DHTMLX products, not only DHTMLX RichText. The same endpoint and configuration instructions work regardless of which DHTMLX component you are building with.
:::

## Everything the MCP server covers for RichText

From toolbar buttons to trigger callbacks, the MCP server's index covers the whole DHTMLX RichText surface. Common lookups:

- Looking up the current API for [methods](api/overview/methods_overview.md), [events](api/overview/events_overview.md), and [properties](api/overview/properties_overview.md), including the [Event Bus](api/overview/event_bus_methods_overview.md) and [state](api/overview/state_methods_overview.md) methods.
- Generating ready-to-run [initialization](guides/initialization.md) code with the container, [`toolbar`](api/config/toolbar.md), and [`menubar`](api/config/menubar.md) a specific editor needs.
- Switching between the [classic and document layout modes](guides/configuration.md#layout-modes) with [`layoutMode`](api/config/layout-mode.md), and building a custom [toolbar](guides/configuration.md#toolbar) from built-in buttons or `button`/`richselect`/`colorpicker` control objects.
- Reading or writing content as HTML, plain text, or Markdown through [`setValue()`](api/methods/set-value.md), [`getValue()`](api/methods/get-value.md), and [`insertValue()`](api/methods/insert-value.md) with the matching encoder.
- Setting [default styles](guides/configuration.md#configure-default-styles) per block type alongside the matching CSS rules.
- Wiring an [image upload endpoint](guides/working_with_server.md) to the exact request and response contract RichText expects, or relying on the inline base64 fallback.
- Configuring [@mentions, #tags, and slash commands](guides/mentions_and_tags.md) through the `triggers` property, including static, sync, and async data sources.
- Handling [`export`](api/events/export.md) and [`import`](api/events/import.md) for DOCX/PDF output, and [localizing](guides/localization.md) the interface or [styling](guides/stylization.md) it with `--wx-color-primary` and other CSS variables.
- Integrating RichText with [React](guides/integration_with_react.md), [Vue](guides/integration_with_vue.md), [Angular](guides/integration_with_angular.md), and [Svelte](guides/integration_with_svelte.md).

## One RichText prompt, two MCP routes

One prompt walks into the DHTMLX MCP server and comes out one of two ways: as a stack of reference pages from the *Search* workflow, or as a finished answer from *Inference*, the other workflow. One Model Context Protocol (MCP) endpoint runs both workflows off a single Retrieval-Augmented Generation (RAG) index of the RichText documentation.

Take *"Set up defaultStyles so all h2 blocks use a custom font and color, with the CSS to match"*: the request needs working code, so it goes to *Search*, which retrieves the configuration and styling documentation and lets the assistant write both the config object and the CSS rule it depends on. Ask instead *"Does insertValue() replace a selection, or does it just insert at the cursor?"* and the request goes to *Inference*, which reads the same reference pages and confirms directly that `insertValue()` replaces an active selection, skipping the trip through the method reference entirely.

## Attaching your AI tool to the MCP server

Registering the MCP endpoint takes under a minute in any of these tools, whether that means a CLI command or a JSON config entry, and every one of them is aimed at the same address:

~~~jsx
https://docs.dhtmlx.com/mcp
~~~

Setup steps for popular tools are covered one by one below.

### Claude Code

:::info
Every MCP setup detail for Claude Code sits in its [official documentation](https://code.claude.com/docs/en/mcp).
:::

To register the server from the command line, run:

~~~jsx
claude mcp add --transport http dhtmlx-mcp https://docs.dhtmlx.com/mcp
~~~

Rather wire it up yourself? Drop this into your `.mcp.json`:

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

### Cursor

:::info
Cursor's [official documentation](https://cursor.com/en-US/docs/mcp) has the complete MCP configuration walkthrough.
:::

Steps to add the server:

1. Open Settings (`Cmd+Shift+J` on Mac, `Ctrl+Shift+J` on Windows/Linux)
2. Go to **Tools & MCP**
3. Click **Add Custom MCP**
4. Paste the following config:

~~~jsx
{
  "mcpServers": {
    "dhtmlx-mcp": {
      "url": "https://docs.dhtmlx.com/mcp"
    }
  }
}
~~~

### Google Antigravity

#### Antigravity 2.0

:::info
Check the [official documentation](https://antigravity.google/docs/mcp) for the complete MCP integration steps in Antigravity.
:::

These are the steps to complete for connecting DHTMLX MCP server with Google Antigravity:

1. Open the command palette
2. Type "mcp add"
3. Select "HTTP"
4. Provide the following values:
- Name:
~~~jsx
dhtmlx-mcp
~~~
- URL:
~~~jsx
https://docs.dhtmlx.com/mcp
~~~

#### Antigravity CLI

:::info
The [related guide](https://antigravity.google/docs/gcli-migration#mcp-config-formatting-changes) walks through everything that changes when migrating off Gemini CLI to Antigravity CLI.
:::

To connect the DHTMLX MCP server to Antigravity CLI, create `mcp_config.json` in one of these locations:

- Global: `~/.gemini/config/mcp_config.json`
- Workspace: `.agents/mcp_config.json`

Add the following configuration:

~~~jsx
{
  "mcpServers": {
    "dhtmlx-mcp": {
      "serverUrl": "https://docs.dhtmlx.com/mcp"
    }
  }
}
~~~

Then run `agy` in the terminal.

### ChatGPT

:::info
Every step of the ChatGPT MCP connector setup is spelled out in the [official documentation](https://help.openai.com/en/articles/12584461-developer-mode-and-mcp-apps-in-chatgpt).
:::

Steps to configure the connector:

1. Go to **Settings** → **Apps & Connectors**
2. Click **Advanced settings**
3. Enable **Developer mode**
4. Return to **Apps & Connectors** and click "Create"
5. Fill in the connector details:
- Name:
~~~jsx
dhtmlx-mcp
~~~
- URL:
~~~jsx
https://docs.dhtmlx.com/mcp
~~~
- Authentication: `No authentication`
6. Click **Create**

After you create the connector, ChatGPT pulls documentation from the MCP server during conversations.

:::info
For intensive coding workflows, other MCP-aware tools may be a better fit.
:::

### Other tools

Check any other AI coding tool's settings for a label like "Model Context Protocol" or "Context Sources," then add `https://docs.dhtmlx.com/mcp` there as a custom source.

## MCP server privacy basics

The MCP server runs remotely and only remotely: no local execution, no local file access, no stored personal information.

Logged queries serve one purpose: debugging and improving the service.

DHTMLX offers a commercial deployment with query logging turned off for stricter privacy needs. Get in touch at `info@dhtmlx.com`.

## Prompt ideas for building with RichText

**Layout and toolbar**

~~~
How do I switch DHTMLX RichText from full-width editing to a document-style layout? Use the docs.
~~~
~~~
How do I build a custom toolbar with only bold, italic, and one custom button?
~~~
~~~
How do I make the built-in layout mode switcher show up as a dropdown instead of a plain button?
~~~

**Content and formats**

~~~
How do I load Markdown content into DHTMLX RichText?
~~~
~~~
How do I read DHTMLX RichText's content out as plain text instead of HTML?
~~~
~~~
How do I insert an HTML link at the current cursor position without replacing the rest of the content?
~~~

**Images and server sync**

~~~
How do I make DHTMLX RichText upload images to my own server instead of embedding them inline?
~~~
~~~
What JSON response does DHTMLX RichText expect from an image upload endpoint?
~~~

**Mentions, tags, and triggers**

~~~
How do I set up an @ mention trigger that looks up users from a server? Use the docs.
~~~
~~~
How do I make a slash command insert just the item text, without the leading slash showing up?
~~~

## What makes a RichText prompt work

- **Name the exact method.** `setValue()` replaces the whole document, `insertValue()` inserts at the cursor or replaces a selection, and `getValue()` reads content out. State which one you mean instead of "update the content."
- **Say which format you're working with.** `setValue()`, `getValue()`, and `insertValue()` default to HTML but accept `richtext.text.fromText` and `richtext.markdown.fromMarkdown` encoders. Name the format so the assistant passes the right encoder instead of assuming HTML.
- **Distinguish toolbar control types.** `richselect` and `colorpicker` only work on specific predefined control IDs; custom buttons only support `type: "button"`. Say which type you're adding so the assistant doesn't pair a type with an ID that ignores it.
- **Add "Use the docs"** for the image upload response shape or the `defaultStyles`/CSS pairing. Both have a specific contract (exact JSON fields, manual CSS rules) that's easy to misremember.

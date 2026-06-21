---
sidebar_label: What's new
title: What's new
description: You can explore what's new in DHTMLX RichText and its release history in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX RichText.
---

## Version 2.1

Released on June X, 2026

### New functionality

- The [`imageUploadUrl`](api/config/image-upload-url.md) is optional: when omitted, images are inserted inline as base64 data URLs with no server required
- Drag-and-drop image insertion: drop an image file directly into the editor area
- Markdown support: parse and serialize editor content as Markdown via the `markdown` encoder in [`setValue()`](api/methods/set-value.md), [`getValue()`](api/methods/get-value.md), and [`insertValue()`](api/methods/insert-value.md) methods (see the [RichText. Working with different formats (Markdown, HTML, text)](https://snippet.dhtmlx.com/cne4kujn?tag=richtext) sample)
- Mentions, tags, and custom dropdown triggers via the [`triggers`](api/config/triggers.md) property: type a character such as `@`, `#`, `/`, or `:` to open a suggestion dropdown and insert the selected item as a non-editable token (see the [Mentions and tags](guides/mentions_and_tags.md) guide and the [RichText. Mentions, tags, and async lookup](https://snippet.dhtmlx.com/nfvvfize?tag=richtext) sample)
- Custom rendering for suggestion items through the [`triggerTemplate`](api/config/trigger-template.md) property (for example, an avatar with a name and an email) (see the [RichText. Custom dropdown template per trigger](https://snippet.dhtmlx.com/0p3bbnhz?tag=richtext) sample)
- Custom action when a user selects a trigger: run your own code (insert an emoji, trigger a slash-style command, and more) instead of inserting a token (see the [RichText. Emoji autocomplete](https://snippet.dhtmlx.com/g5z1d868?tag=richtext) and [RichText. Slash commands](https://snippet.dhtmlx.com/e0mrmyam?tag=richtext) samples)
- Clipboard support (copy, cut, and paste) that preserves formatting between RichText instances and inserts external content as plain text
- Word- and line-scope deletion shortcuts: delete the previous/next word with `Ctrl+Backspace` / `Ctrl+Delete` (Windows/Linux) or `Opt+Backspace` / `Opt+Delete` (macOS); delete the previous/next visual line with `Cmd+Backspace` / `Cmd+Delete` (macOS only)

###  New API

#### New properties

- [`triggers`](api/config/triggers.md) — Defines dropdown triggers for inserting mentions, tags, and other tokens
- [`triggerTemplate`](api/config/trigger-template.md) — Customizes how RichText renders items in the suggestion dropdown

#### New methods

- [`insertValue()`](api/methods/insert-value.md) — Inserts text, Markdown, or HTML content at the cursor position or replaces the selected text (see the [RichText. Insert content at cursor](https://snippet.dhtmlx.com/pew2g1ku?tag=richtext) sample)

#### New events

- [`show-suggest`](api/events/show-suggest.md) — Fires when the suggestion dropdown opens for a configured trigger
- [`insert-token`](api/events/insert-token.md) — Fires after the user picks a suggestion item in the dropdown and RichText inserts it as a token
- [`hide-suggest`](api/events/hide-suggest.md) — Fires when the suggestion dropdown closes

### Fixes

- Issues with pasting inline content (including content placed inside or near inline elements such as mentions and images)
- Dropping an image onto itself throws an error

## Version 2.0.6

Released on May 28, 2026

### New functionality

- Context-aware OL/UL toolbar buttons that toggle or convert lists based on the selection
- Changing list nesting level with the **Indent** and **Outdent** buttons
- Exiting a list or reducing its nesting by pressing Enter in an empty list item
- Distinct color for visited links

###  New API

#### New events

- [`toggle-list`](api/events/toggle-list.md) — Fires when a user toggles a list on the selected blocks

### Fixes

- Incorrect horizontal alignment of list markers
- Inconsistent padding between numbered and bulleted lists
- Clear formatting does not clear block-level properties
- Incorrect styling of headings and blockquotes inside list items
- Stray input element visible inside horizontal lines
- Editor freezes when inserting a horizontal line in the middle or at the end of a list

## Version 2.0.5

Released on March 6, 2026

### Fixes

- IME input is not processed correctly
- Composition-based input (e.g., Chinese, Japanese, Korean on desktop) is not processed correctly
- `margin-left` and `line-height` properties are ignored when parsing HTML
- Inline elements inherit properties from block-level parents
- Unable to copy text between two editor instances
- Selection is incorrectly handled with two (or more) editor instances active
- Cursor is incorrectly positioned when only content in paragraph is an image
- Indefinite wrapping of subscript and superscript elements
- Pasting images inlines them instead of uploading them first
- Empty inline blocks cannot be removed at specific positions (first or last line)
- Editor does not scroll to cursor when typing
- Input on Android is not processed correctly
- Incorrect selection handling for HR elements
- Incorrect render with empty initial values
- Copying content may fail if it contains self-closing blocks
- Chrome: cannot insert emojis from context menu
- Firefox: select all (CTRL+A) is not handled correctly

## Version 2.0.4

Released on October 15, 2025

### Fixes

- Incorrect range selection for paragraphs
- Link popups are not displayed when adjacent to linked images
- Initial toolbar values are not accurate relative to actual content

## Version 2.0.3

Released on August 27, 2025

### Fixes

- Clicking on a horizontal line causes a script error
- The default line height is incorrect
- Content styles include duplicate selectors
- Plain text blocks ignore style changes when parsing HTML
- The parser ignores escaped font names in HTML
- The parser ignores `margin-left` and `line-height` properties in HTML

## Version 2.0.2

Released on August 4, 2025

### Fixes

- Updated package content

## Version 2.0.1

Released on July 30, 2025

### Fixes

- Update type definitions for the `defaultStyles` property

## Version 2.0

Released on July 30, 2025

:::note
API of v1.2 is not compatible with v2.0. Refer to the [**migration guide**](news/migration.md) for additional information.
:::

### New Functionality

- **Next-gen text rendering**  
  Experience smoother, faster, and more accurate text rendering with our new engine

- **Granular toolbar configuration**  
  Take full control of the toolbar:  
  - Define [individual toolbar controls](guides/configuration.md/#default-toolbar-controls) and their order
  - Add [custom controls](guides/configuration.md/#add-custom-toolbar-controls)

- **Optional [menubar](api/config/menubar.md)**  
  Enable a classic menu-style interface on the top of the editor

- **Enhanced [document mode](guides/configuration.md/#layout-modes)**  
  Added support for different document sizes

- **Image support**  
  - Insert images with [upload capabilities](api/config/image-upload-url.md).  
  - [Resize images](api/events/resize-image.md) interactively  

- **Improved link experience**  
  Redesigned [popup interactions](api/events/show-popup.md) for better usability

- **New formatting tools**  
  - Text alignment: **justify**  
  - Insert [horizontal lines](api/events/insert-line.md)  
  - [Indent](api/events/indent.md) / [Outdent](api/events/outdent.md)  
  - Set [line height](api/events/set-line-height.md)  
  - Apply [subscript](api/events/subscript.md) / [superscript](api/events/superscript.md)

- **List management**  
  Easily [insert and manage lists](api/events/insert-list.md) in your content

- **Import/Export & Print**  
  - [Import DOCX](api/events/import.md) files
  - [Export](api/events/export.md) content to DOCX or PDF
  - [Print](api/events/print.md) documents directly from the editor

- **Keyboard shortcuts**  
  Expanded support for common formatting and editing shortcuts

###  New API

#### New properties

- [`fullscreenMode`](api/config/fullscreen-mode.md)  
- [`imageUploadUrl`](api/config/image-upload-url.md)  
- [`layoutMode`](api/config/layout-mode.md)  
- [`locale`](api/config/locale.md)  
- [`menubar`](api/config/menubar.md)  
- [`toolbar`](api/config/toolbar.md)  
- [`value`](api/config/value.md)

####  New methods

- [`setConfig()`](api/methods/set-config.md) — Dynamically update configuration  
- [`setLocale()`](api/methods/set-locale.md) — Change locale on the fly

#### New internal methods

- [`api.exec()`](api/internal/exec.md)  
- [`api.intercept()`](api/internal/intercept.md)  
- [`api.getReactiveState()`](api/internal/get-reactive-state.md)  
- [`api.getState()`](api/internal/get-state.md)

#### New events

A full list of new events is available [here](api/overview/events_overview.md)

### Updated API

#### Updated properties

- [`defaultStyles`](api/config/default-styles.md)

#### Updated methods

- [`setValue()`](api/methods/set-value.md)  
- [`getValue()`](api/methods/get-value.md)

#### Updated internal methods

- [`api.detach()`](api/internal/detach.md)  
- [`api.on()`](api/internal/on.md)

## Removed API

:::warning
Do not use the removed API in your projects! <br/> Refer to the [Migration](news/migration.md) topic for more information.
:::

### [Removed properties](news/migration.md#properties-migration)

- [`customStats`](news/migration.md#--customstats)  
- [`mode`](news/migration.md#--mode--layoutmode)  
- [`toolbarBlocks`](news/migration.md#--toolbarblocks--toolbar)

### [Removed methods](news/migration.md#methods-migration)

- `exitFullScreen()`  
- `fullScreen()`  
- `getEditorAPI()`  
- `getStats()`  
- `paint()`

### Removed internal methods

- [`events.fire()`](news/migration.md#--fire--use-exec-and-intercept)

### Removed events

- `Action`  
- `Change`  
- `selectionChange`  
- `selectionRefresh`

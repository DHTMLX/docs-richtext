---
sidebar_label: What's new
title: What's new
description: Check out the latest updates in DHTMLX RichText and see the release history right here in the documentation for the DHTMLX JavaScript UI library. You'll find guides, API references, code examples, live demos, and a free 30-day trial download for DHTMLX RichText.
---

## Version 2.0.4

Released on October 15, 2025

### Fixes

- Paragraph range selection didn't always work right
- Link popups wouldn't show up if they were next to linked images
- Toolbar values at startup didn't always match the actual content

## Version 2.0.3

Released on August 27, 2025

### Fixes

- Clicking a horizontal line could throw a script error
- The default line height wasn't set correctly
- Some content styles had duplicate selectors
- Plain text blocks didn't pick up style changes when parsing HTML
- The parser skipped escaped font names in HTML
- The parser ignored `margin-left` and `line-height` in HTML

## Version 2.0.2

Released on August 4, 2025

### Fixes

- Package content got updated

## Version 2.0.1

Released on July 30, 2025

### Fixes

- Type definitions for the `defaultStyles` property were updated

## Version 2.0

Released on July 30, 2025

:::note
The v1.2 API doesn't work with v2.0. For details, see the [**migration guide**](news/migration.md).
:::

### New Functionality

- **Next-gen text rendering**  
  The new engine brings smoother, faster, and more accurate text rendering

- **Granular toolbar configuration**  
  The toolbar is fully customizable now: 
  - Choose [individual toolbar controls](guides/configuration.md/#default-toolbar-controls) and set their order
  - Add your own [custom controls](guides/configuration.md/#custom-toolbar-controls)

- **Optional [menubar](api/config/menubar.md)**  
  You can add a classic menu-style interface at the top of the editor

- **Enhanced [document mode](guides/configuration.md/#layout-modes)**  
  Now supports different document sizes

- **Image support**  
  - Insert images with [upload features](api/config/image-upload-url.md)  
  - [Resize images](api/events/resize-image.md) right in the editor  

- **Improved link experience**  
  Link [popup interactions](api/events/show-popup.md) have been redesigned for easier use

- **New formatting tools**  
  - Text alignment: **justify**  
  - Insert [horizontal lines](api/events/insert-line.md)  
  - [Indent](api/events/indent.md) / [Outdent](api/events/outdent.md)  
  - Set [line height](api/events/set-line-height.md)  
  - Use [subscript](api/events/subscript.md) / [superscript](api/events/superscript.md)

- **List management**  
  It's easy to [insert and manage lists](api/events/insert-list.md) now

- **Import/Export & Print**  
  - [Import DOCX](api/events/import.md) files
  - [Export](api/events/export.md) to DOCX or PDF
  - [Print](api/events/print.md) right from the editor

- **Keyboard shortcuts**  
  More common formatting and editing shortcuts are supported

### New API

#### New properties

- [`fullscreenMode`](api/config/fullscreen-mode.md)  
- [`imageUploadUrl`](api/config/image-upload-url.md)  
- [`layoutMode`](api/config/layout-mode.md)  
- [`locale`](api/config/locale.md)  
- [`menubar`](api/config/menubar.md)  
- [`toolbar`](api/config/toolbar.md)  
- [`value`](api/config/value.md)

#### New methods

- [`setConfig()`](api/methods/set-config.md) - Update the configuration on the fly  
- [`setLocale()`](api/methods/set-locale.md) - Change the locale instantly

#### New internal methods

- [`api.exec()`](api/internal/exec.md)  
- [`api.intercept()`](api/internal/intercept.md)  
- [`api.getReactiveState()`](api/internal/get-reactive-state.md)  
- [`api.getState()`](api/internal/get-state.md)

#### New events

You'll find a full list of new events [here](api/overview/events_overview.md)

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
Don't use the removed API in your projects! <br/> For more details, check out the [Migration](news/migration.md) topic.
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

---
sidebar_label: What's new
title: What's new
description: You can explore what's new in DHTMLX RichText and its release history in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX RichText.
---

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
  - Add [custom controls](guides/configuration.md/#custom-toolbar-controls)

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

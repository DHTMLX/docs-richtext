---
sidebar_label: What's new
title: What's new
description: You can explore what's new in DHTMLX RichText and its release history in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX RichText.
---

## Version 2.0

Released on July 28, 2025

:::note
API of v1.2 is not compatible with v2.0. Refer to the [**migration guide**](news/migration.md) for additional information.
:::

### New functionality

### New functionality

- New and improved text rendering engine
- Granular toolbar configuration
    - ability to define [individual toolbar controls](guides/configuration/#default-toolbar-controls) and their order
    - ability to define [custom buttons](guides/configuration/#custom-toolbar-controls)
- Ability to show an optional [menubar](api/config/menubar.md)
- Improved [document mode](guides/configuration/#layout-modes), added support for different document sizes
- Ability to insert images; [image upload](api/config/image-upload-url.md)
- Ability to [resize images](api/events/resize-image.md)
- Improved link [popup functionality](api/events/show-popup.md)
- New alignment option: justify
- Ability to insert [horizontal lines](api/events/insert-line.md)
- Ability to [increase](api/events/indent.md) and [decrease](api/events/outdent.md) block indentation
- Ability to set [line height](api/events/set-line-height.md) for content
- Ability to [subscript](api/events/subscript.md) and [superscript](api/events/superscript.md) text
- Ability to [insert lists](api/events/insert-list.md), work with lists
- Ability to [import](api/events/import.md) DOCX files
- Ability to [print](api/events/print.md) editor content
- Ability to [export](api/events/export.md) editor content to DOCX/PDF
- Added/improved support for common formatting/editing keyboard shortcuts

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

- [`setConfig()`](api/methods/set-config.md)
- [`setLocale()`](api/methods/set-locale.md)

#### New internal methods

- [`api.exec()`](api/internal/exec.md)
- [`api.intercept()`](api/internal/intercept.md)
- [`api.getReactiveState()`](api/internal/get-reactive-state.md)
- [`api.getState()`](api/internal/get-state.md)

#### New events

The full list of new events you can find [here](/category/richtext-events/)

### Updated API

#### Updated properties

- [`defaultStyles`](api/config/default-styles.md)

#### Updated methods

- [`setValue()`](api/methods/set-value.md)
- [`getValue()`](api/methods/get-value.md)

#### Updated internal methods

- [`api.detach()`](api/internal/detach.md)
- [`api.on()`](api/internal/on.md)

### Deprecated API

#### Deprecated properties

- `customStats`
- `mode`
- `toolbarBlocks`

#### Deprecated methods

- `exitFullScreen()`
- `fullScreen()`
- `getEditorAPI()`
- `getStats()`
- `paint()`

#### Deprecated internal methods

- `events.fire()`

#### Deprecated events

- `Action`
- `Change`
- `selectionChange`
- `selectionRefresh`

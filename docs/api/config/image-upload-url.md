---
sidebar_label: imageUploadUrl
title: imageUploadUrl Config
description: You can learn about the imageUploadUrl config in the documentation of the DHTMLX JavaScript RichText library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX RichText.
---

# imageUploadUrl

### Description

@short: Optional. Specifies the URL which will be used for image upload (from the toolbar, menubar, clipboard paste, or drag-and-drop)

When the property is set, RichText uploads each inserted image to the given endpoint and inserts the URL returned by the server.

When the property is omitted or set to a falsy value (`""`, `null`, `undefined`), RichText switches to **inline mode**: the image file is read on the client and embedded directly into the content as a base64 data URL — no server is required. Inline images larger than 1024×800 are proportionally downscaled to fit within these limits.

:::note
Inline (base64) images are not preserved by the built-in DOCX / PDF [export](api/events/export.md). If you rely on export, supply an `imageUploadUrl` so that images reference an external location.
:::

:::caution
Base64 encoding increases the encoded payload by roughly one third relative to the original file. A document with several large inline images grows accordingly, which affects the size of the value returned by [`getValue()`](api/methods/get-value.md), the memory footprint of the editor, and the cost of persisting or transferring the content. Prefer a server `imageUploadUrl` for documents that contain many or large images.
:::

### Usage

~~~jsx {}
imageUploadUrl?: string;
~~~

### Example

Upload images to a server endpoint:

~~~jsx {3}
// initialize RichText
new richtext.Richtext("#root", {
    imageUploadUrl: "https://example.com/upload"
    // other configuration properties
});
~~~

Insert images inline as base64 (no server required) — omit the property or pass an empty string:

~~~jsx {2}
new richtext.Richtext("#root", {
    // imageUploadUrl is not set, images are inserted as base64 data URLs
    // other configuration properties
});
~~~

**Change log:** The property was added in v2.0. Starting with v2.1, the property is optional: when omitted, images are inserted inline as base64 data URLs.

**Related articles:** [Configuration](guides/configuration.md)

**Related sample:** [RichText. Initialization](https://snippet.dhtmlx.com/t55alxiy?tag=richtext)

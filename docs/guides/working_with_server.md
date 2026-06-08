---
sidebar_label: Working with the server
title: Working with the server
description: Learn how RichText communicates with a backend for image uploads, including the request/response contract and how to plug in your own server. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX RichText.
---

# Working with the server

RichText runs entirely in the browser and does not need a backend for editing or saving content. Your application is free to persist the content of the editor wherever it wants. The one feature that benefits from a server is **image upload**: when a user inserts an image into the document, RichText can either embed the file inline in the content or post it to an HTTP endpoint and store a link to it.

This guide explains:

- what happens by default when no upload server is configured
- the exact HTTP contract the server has to implement
- how RichText uses the URL returned by the server
- how to try the feature against the demo backend

## Default behavior: inline images

If you do not set the [`imageUploadUrl`](api/config/image-upload-url.md) property, RichText falls back to inline images. When the user inserts an image, RichText reads the file in the browser, encodes the original file as a `data:image/...;base64,...` URL, and writes it directly into the editor content as the `src` of the `<img>` element. The displayed size is constrained to fit within a 1024×800 box through the `width`/`height` attributes, but the embedded bytes are the original, full-resolution file — the client does not downscale or re-encode it.

This works without any backend and is handy for quick demos, but it has clear limitations:

- the encoded image bytes live inside the document, so the saved HTML grows with every image
- the same image used in two documents is stored twice
- the image bytes live inside the document HTML rather than as a separate resource, so they can't be served from a CDN, deduplicated across documents, or post-processed (resized, re-encoded, scanned) on the server

## Write your own server

In production apps, point RichText at a server with [`imageUploadUrl`](api/config/image-upload-url.md):

~~~jsx {2}
new richtext.Richtext("#root", {
    imageUploadUrl: "https://example.com/upload"
    // other configuration properties
});
~~~

A minimal upload endpoint needs to:

1. Accept a `multipart/form-data` POST with a file field named `upload`.
2. Validate the file (allowed types, maximum size).
3. Store the file somewhere the user's browser can fetch (a local disk served over HTTP, S3, a CDN, etc).
4. Optionally resize or otherwise process the image.
5. Respond with a JSON object that contains `status: "server"`, `value` set to the public URL of the stored file, and the image's `width` and `height` in pixels.

### What the client sends

When [`imageUploadUrl`](api/config/image-upload-url.md) is set, RichText posts the selected file directly to that URL (it does not append `/images` or any other path), so the URL you pass is the full POST target.

The request uses standard HTML form upload:

- **Method:** `POST`
- **Content-Type:** `multipart/form-data`
- **Body:** one file field named `upload`

### What the client expects back

The server must reply with a JSON object. RichText reads the following fields:

| Field    | Type    | Meaning                                                                 |
| -------- | ------- | ----------------------------------------------------------------------- |
| `status` | string  | Result marker. A successful upload must return `"server"`; the success contract relies on this value. Any other value (for example `"error"`) signals a failed upload on the server side. |
| `value`  | string  | URL of the stored image. RichText writes this string verbatim into the document as the `src` of the inserted `<img>`. |
| `width`  | integer | Width used to size the inserted image, in pixels.                       |
| `height` | integer | Height used to size the inserted image, in pixels.                      |

#### Successful response

A successful upload returns the stored image URL and its dimensions:

~~~json
{
    "status": "server",
    "value": "https://cdn.example.com/uploads/abc123.png",
    "width": 320,
    "height": 207
}
~~~

#### Failed upload

A failed upload returns any status other than `"server"`:

~~~json
{
    "status": "error"
}
~~~

### Serve the uploaded image

The `value` URL is the only thing that connects the upload step to everything that happens later. RichText puts the URL straight into the document, so any client that later opens the saved content (the editor itself, an export, a published page) fetches the image from that URL with a plain `GET`.

That means:

- the URL must be reachable from the user's browser, which usually means it has to be **absolute**
- the host can be different from the upload endpoint (for example, you can accept uploads on your own server and return a CDN or object-storage URL)
- if the image host is on a different origin, make sure it allows the page to load the image (CORS or simply public read access)
- the server must keep that URL working for as long as documents reference it; RichText does not cache or copy the bytes

The URL layout itself is **not** part of the contract. As long as the browser can `GET` the URL and receive image bytes, the path, the query string, and even the scheme are entirely up to the backend.

### Try it against the demo server

A working backend that implements this contract is available to test the feature:

~~~jsx
new richtext.Richtext("#root", {
    imageUploadUrl: "https://docs.dhtmlx.com/richtext-backend/images"
    // other configuration properties
});
~~~

The demo server resizes large images, stores them on disk, and returns URLs it serves itself. It is intended for evaluation and demos only. Do not point production editors at it.

**Related articles:**

- [Configuration](guides/configuration.md)
- [`imageUploadUrl`](api/config/image-upload-url.md)

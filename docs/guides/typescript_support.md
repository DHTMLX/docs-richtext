---
sidebar_label: TypeScript support
title: TypeScript support
description: You can learn about using typescript with the DHTMLX JavaScript RichText library in the documentation. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX RichText.
---

# TypeScript support

Starting from v2.0, the library of DHTMLX RichText provides an ability to use TypeScript definitions. The built-in support of TypeScript works out of the box.

:::note
You can try out the functionality right in our <a href="https://snippet.dhtmlx.com/ziynafp7?tag=richtext"  target="_blank">Snippet Tool</a>.
:::

## Advantages of using TypeScript

Why do you need to use DHTMLX RichText with TypeScript?

The main benefit of TypeScript is that it allows you to significantly increase the efficiency of the development process.

The way of building an application becomes more robust as checking the types together with autocompletion allow you to avoid potential mistakes. Besides, TypeScript provides you with information about types of data you should use while working with the API of the DHTMLX RichText library.

## Initializing with TypeScript

Import the `Richtext` class and the required types from the package:

~~~jsx
import { Richtext } from '@dhx/richtext';
import type { IRichtextConfig } from '@dhx/richtext';

const config: IRichtextConfig = {
    value: "<p>Hello world</p>",
    toolbar: true,
    menubar: false,
    layoutMode: "document"
};

const editor = new Richtext("#root", config);
~~~

## Available types

The following TypeScript types and interfaces are exported from the package:

| Type | Description |
|------|-------------|
| `IRichtextConfig` | Configuration object passed to the constructor or `setConfig()` |
| `IImageContext` | Image object used in the `insert-image` event and `api.exec("insert-image", ...)` |
| `IExportOptions` | Options object for `api.exec("export", { options: IExportOptions })` |
| `TBlockType` | Union of block tag names: `"p"` \| `"h1"` \| `"h2"` \| `"h3"` \| `"h4"` \| `"h5"` \| `"h6"` \| `"blockquote"` |

---
sidebar_label: TypeScript support
title: TypeScript support
description: You can learn about using typescript with the DHTMLX JavaScript RichText library in the documentation. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX RichText.
---

# TypeScript support

Since v2.0, DHTMLX RichText ships with built-in TypeScript definitions. The definitions work out of the box and require no extra setup.

:::note
Try out the editor in the <a href="https://snippet.dhtmlx.com/ziynafp7?tag=richtext" target="_blank">Snippet Tool</a>.
:::

## Advantages of TypeScript

TypeScript with DHTMLX RichText gives you:

- type safety — the compiler catches misuse of configuration properties and method arguments at build time
- autocompletion — your IDE suggests valid property names, method signatures, and value types as you type
- self-documenting API — type annotations on the configuration object and methods double as inline documentation

## Initialize RichText in TypeScript

The example below initializes RichText in a TypeScript file. With the bundled type definitions, the compiler offers autocompletion for the constructor arguments and configuration options:

~~~ts
import { Richtext } from "@dhx/richtext";

const editor = new Richtext("#root", {
    menubar: true,
    layoutMode: "document"
});
~~~

## Reference API types

The configuration object follows the type annotations documented on each property page in the [Properties overview](api/overview/properties_overview.md). Method signatures appear on the corresponding pages in the [Methods overview](api/overview/methods_overview.md).

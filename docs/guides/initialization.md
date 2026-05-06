---
sidebar_label: Initialization
title: Initialization
description: You can learn about the initialization in the documentation of the DHTMLX JavaScript RichText library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX RichText.
---

# Initialization

To add the RichText editor to a page, follow these steps:

1. [Include the RichText source files on a page](#including-source-files).
2. [Create a container for RichText](#creating-container).
3. [Initialize RichText with the object constructor](#initializing-richtext).

## Including source files

[Download the package](https://dhtmlx.com/docs/products/dhtmlxRichText/download.shtml) and unpack it into a folder of your project.

To create RichText, include two source files on your page:

- *richtext.js*
- *richtext.css*

Use correct relative paths to the source files:

~~~html title="index.html"
<script type="text/javascript" src="./codebase/richtext.js"></script>  
<link rel="stylesheet" href="./codebase/richtext.css">
~~~

## Creating container

Add a container for RichText and give it an ID, for example *"root"*:

~~~jsx title="index.html"
<div id="root"></div>
~~~

## Initializing RichText

Initialize RichText with the `richtext.Richtext` constructor. The constructor takes two parameters:

- an HTML container (the ID of the HTML container)
- an object with configuration properties. [See the full list here](#configuration-properties)

~~~jsx title="index.html"
// create RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties  
});
~~~

### Configuration properties

:::note
See the [full list of **RichText** properties](api/overview/properties_overview.md).
:::

## Example

The snippet below shows how to initialize **RichText** with initial data:

<iframe src="https://snippet.dhtmlx.com/tjryzka7?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>

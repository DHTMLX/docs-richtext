---
sidebar_label: Initialization
title: Initialization
description: You can learn about the initialization in the documentation of the DHTMLX JavaScript RichText library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX RichText.
---

# Initialization

Here's a simple walkthrough for setting up RichText on your page, so you can start using the RichText editor in your app. Just follow these steps to get things running:

1. [Include the RichText source files on a page](#including-source-files).
2. [Create a container for RichText](#creating-container).
3. [Initialize RichText with the object constructor](#initializing-richtext).

## Including source files

First, [download the package](https://dhtmlx.com/docs/products/dhtmlxRichText/download.shtml) and unpack it somewhere in your project folder.

To use RichText, add these two files to your page:

- *richtext.js*
- *richtext.css*

Be sure to use the correct paths to where you placed these files:

~~~html title="index.html"
<script type="text/javascript" src="./codebase/richtext.js"></script>  
<link rel="stylesheet" href="./codebase/richtext.css">
~~~

## Creating container

Next, set up a container for RichText. Give it an ID, like *"root"*:

~~~jsx title="index.html"
<div id="root"></div>
~~~

## Initializing RichText

Now, use the `richtext.Richtext` constructor to create RichText. This constructor needs two things:

- the HTML container (use the ID you set)
- an object with configuration options. [Check out the full list here](#configuration-properties)

~~~jsx title="index.html"
// create RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties  
});
~~~

### Configuration properties

:::note
You can see all the available properties for **RichText** [**here**](api/overview/properties_overview.md).
:::

## Example

Here's a quick example showing how to set up **RichText** with some initial data:

<iframe src="https://snippet.dhtmlx.com/tjryzka7?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>

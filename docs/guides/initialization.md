---
sidebar_label: Initialization
title: Initialization
description: You can learn about the initialization in the documentation of the DHTMLX JavaScript RichText library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX RichText.
---

# Initialization

Follow these steps to add RichText to your page:

1. [Include the RichText source files on a page](#include-source-files).
2. [Create a container for RichText](#create-a-container).
3. [Initialize RichText with the object constructor](#initialize-richtext).

## Include source files

[Download the package](https://dhtmlx.com/docs/products/dhtmlxRichText/download.shtml) and unpack it into a folder of your project.

Include two source files on your page:

- *richtext.js*
- *richtext.css*

Set correct relative paths to the source files:

~~~html title="index.html"
<script type="text/javascript" src="./codebase/richtext.js"></script>  
<link rel="stylesheet" href="./codebase/richtext.css">
~~~

## Create a container

Add a container element with an ID, for example *"root"*:

~~~jsx title="index.html"
<div id="root"></div>
~~~

## Initialize RichText

Use the `richtext.Richtext` constructor to initialize RichText. The constructor takes two parameters:

- an HTML container (the ID of the HTML container)
- an object with configuration properties. [See the full list here](#configuration-properties)

The following code snippet initializes RichText in the *"root"* container:

~~~jsx title="index.js"
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties  
});
~~~

### Configuration properties

:::note
The full list of properties to configure RichText can be found [here](api/overview/properties_overview.md).
:::

## Example

The snippet below initializes RichText with initial data:

<iframe src="https://snippet.dhtmlx.com/tjryzka7?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>

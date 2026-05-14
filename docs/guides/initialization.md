---
sidebar_label: Initialization
title: Initialization
description: You can learn about the initialization in the documentation of the DHTMLX JavaScript RichText library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX RichText.
---

# Initialization

This guide explains how to add RichText to a page. Follow these steps to get a ready-to-use editor:

1. [Include the source files on a page](#include-the-source-files).
2. [Create a container for RichText](#create-a-container).
3. [Initialize RichText](#initialize-richtext).

## Include the source files

Add the RichText JavaScript and CSS files to your project. [Download the package](https://dhtmlx.com/docs/products/dhtmlxRichText/download.shtml) and unpack the contents into your project folder.

To create RichText, include two source files on your page:

- *richtext.js*
- *richtext.css*

Reference the files in your HTML. Adjust the relative paths to match your folder layout:

~~~html title="index.html"
<script type="text/javascript" src="./codebase/richtext.js"></script>  
<link rel="stylesheet" href="./codebase/richtext.css">
~~~

## Create a container

Add a container for RichText with an ID such as *"root"*:

~~~jsx title="index.html"
<div id="root"></div>
~~~

## Initialize RichText

Initialize RichText with the `richtext.Richtext` constructor. The constructor takes two parameters:

- a container — a CSS selector or a DOM element
- a configuration object with the editor properties. See the [full list of properties](#configuration-properties) below

The example below initializes RichText in the `#root` container:

~~~jsx title="index.html"
const editor = new richtext.Richtext("#root", {
    // configuration properties  
});
~~~

### Configuration properties

Add configuration options as keys of the configuration object.

:::note
For the full list of configuration properties, see the [Properties overview](api/overview/properties_overview.md).
:::

## Destroy the RichText instance

Call the [`destructor()`](api/methods/destructor.md) method to remove the RichText HTML and detach all related events:

~~~jsx
const editor = new richtext.Richtext("#root", {
    // configuration properties
});

editor.destructor();
~~~

## Example

The example below initializes RichText with the menubar enabled:

<iframe src="https://snippet.dhtmlx.com/tjryzka7?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>

---
sidebar_label: Initialization
title: Initialization
description: You can learn about the initialization in the documentation of the DHTMLX JavaScript RichText library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX RichText.
---

# Initialization

This guide covers how to create RichText and add it to your application. Follow these steps to get a working component:

1. [Include the source files](#include-the-source-files).
2. [Create a container](#create-a-container).
3. [Initialize RichText](#initialize-richtext).

## Include the source files

[Download the package](https://dhtmlx.com/docs/products/dhtmlxRichText/download.shtml) and unpack it into a folder of your project.

Include 2 source files on your page:

- *richtext.js*
- *richtext.css*

Set the correct relative paths to the source files in your HTML page:

~~~html title="index.html"
<script type="text/javascript" src="./codebase/richtext.js"></script>  
<link rel="stylesheet" href="./codebase/richtext.css">
~~~

## Create a container

Add a container for RichText and give it an ID, for example `"root"`:

~~~jsx title="index.html"
<div id="root"></div>
~~~

## Initialize RichText

Initialize RichText with the `richtext.Richtext` constructor. The constructor takes two parameters:

- an HTML container (the ID of the HTML container)
- an object with configuration properties. [See the full list here](#configuration-properties)

~~~jsx title="index.html"
// create RichText
const editor = new richtext.Richtext("#root", {
    // other configuration properties
});
~~~

### Configuration properties

See the full list of available properties in the [Properties overview](api/overview/properties_overview.md).

## View the example

The example below demonstrates RichText initialization:

<iframe src="https://snippet.dhtmlx.com/tjryzka7?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>

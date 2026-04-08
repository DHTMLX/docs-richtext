---
sidebar_label: How to start
title: How to start
description: You can explore how to start working with DHTMLX RichText in the documentation of the DHTMLX JavaScript RichText library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX RichText.
---

# How to start

This tutorial walks you through the steps to get a fully functional RichText on a page.

<div className="img_border">
![DHTMLX RichText Classic Mode](./assets/richtext/classic_mode.png)
</div>

## Step 1. Include the source files

Create an HTML file named `index.html` and include the RichText source files.

There are two necessary files:

- `richtext.js`
- `richtext.css`

Add both files to the `<head>` of your HTML page:

~~~html {5-6} title="index.html"
<!DOCTYPE html>
<html>
    <head>
        <title>How to Start with RichText</title>
        <script src="./codebase/richtext.js"></script>   
        <link href="./codebase/richtext.css" rel="stylesheet">
    </head>
    <body>
        <script>
        // your code will be here
        </script>
    </body>
</html>
~~~

### Install RichText via npm or yarn

Import RichText into your project using `yarn` or `npm`.

#### Install trial RichText via npm or yarn

:::info
If you want to use trial version of RichText, download the [**trial RichText package**](https://dhtmlx.com/docs/products/dhtmlxRichtext/download.shtml) and follow steps mentioned in the *README* file. Note that trial RichText is available 30 days only.
:::

#### Install PRO RichText via npm or yarn

:::info
You can access the DHTMLX private **npm** directly in the [Client's Area](https://dhtmlx.com/clients/) by generating your login and password for **npm**. A detailed installation guide is also available there. Please note that access to the private **npm** is available only while your proprietary RichText license is active.
:::

## Step 2. Create RichText

Add RichText to the page by creating a `<div>` container and initializing the editor:

- specify a `<div>` container in `index.html`
- initialize RichText with the `richtext.Richtext` constructor

The constructor takes any valid CSS selector for the HTML container and a configuration object.

The following example shows the full page structure with the RichText container and constructor:

~~~html {9,12-14} title="index.html"
<!DOCTYPE html>
<html>
    <head>
        <title>How to Start with RichText</title>
        <script src="./codebase/richtext.js"></script>   
        <link href="./codebase/richtext.css" rel="stylesheet">  
    </head>
    <body>
        <div id="root"></div>

        <script>
            const editor = new richtext.Richtext("#root", {
                // configuration properties
            });
        </script>
    </body>
</html>
~~~

## Step 3. Configure RichText

Specify configuration properties in the constructor to customize the editor.

Set the initial content with the [`value`](api/config/value.md) property. You can also configure the following properties:

- [`menubar`](api/config/menubar.md) — show or hide the top menubar
- [`toolbar`](api/config/toolbar.md) — configure the toolbar controls
- [`fullscreenMode`](api/config/fullscreen-mode.md) — enable fullscreen mode
- [`layoutMode`](api/config/layout-mode.md) — set the layout to `"classic"` or `"document"` mode
- [`locale`](api/config/locale.md) — set the initial locale
- [`defaultStyles`](api/config/default-styles.md) — apply default styles to specific block types

The following code snippet initializes RichText with several configuration properties:

~~~jsx {2-12}
const editor = new richtext.Richtext("#root", {
    menubar: true,
    toolbar: false,
    fullscreenMode: true,
    layoutMode: "document",
    locale: richtext.locales.cn,
    defaultStyles: {
        h4: {
            "font-family": "Roboto"
        },
        // other configuration properties
    }
});
~~~

## What's next

With these three steps, RichText is ready to use. You can now edit content or explore the JavaScript RichText documentation.

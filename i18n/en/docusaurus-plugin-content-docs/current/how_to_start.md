---
sidebar_label: How to start
title: How to start
description: You can explore how to start working with DHTMLX RichText in the documentation of the DHTMLX JavaScript RichText library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX RichText.
---

# How to start

Here’s a simple walkthrough for getting RichText up and running on a page.

import classic_mode from '@site/static/img/richtext/classic_mode.png';

<img
    src={classic_mode}
    alt="Classic mode"
    className="img_border"
/>

## Step 1. Including source files

First, create an HTML file named *index.html*. Add the RichText source files to this file.

You’ll need two files:

- the JS file for RichText
- the CSS file for RichText

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

### Installing RichText via npm or yarn

RichText can be added to your project using **yarn** or **npm**.

#### Installing trial RichText via npm or yarn

:::info
To use the trial version of RichText, grab the [**trial RichText package**](https://dhtmlx.com/docs/products/dhtmlxRichtext/download.shtml) and check out the steps in the *README* file. Just a heads up, the trial runs for 30 days.
:::

#### Installing PRO RichText via npm or yarn

:::info
To get the PRO version, head to the [Client's Area](https://dhtmlx.com/clients/) and generate your login and password for the DHTMLX private **npm**. There’s a detailed installation guide there too. Access to the private **npm** is available as long as your proprietary RichText license is active.
:::

## Step 2. Creating RichText

Now it’s time to add RichText to the page. Start by creating a `<div>` container for RichText. Here’s what to do:

- Add a DIV container in the *index.html* file
- Initialize RichText using the `richtext.Richtext` constructor

The constructor takes any valid CSS selector for the HTML container where RichText will appear, plus any configuration objects you want to include.

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

## Step 3. Configuring RichText

Now you can set up the configuration options you’d like RichText to use when it starts.

To get going, set the initial data for the editor with the [`value`](api/config/value.md) property. You can also turn on the [**menubar**](api/config/menubar.md), tweak the [**toolbar**](api/config/toolbar.md), set [**fullscreen**](api/config/fullscreen-mode.md) and [**layout**](api/config/layout-mode.md) modes, pick a new [**locale**](api/config/locale.md), and apply [**default styles**](api/config/default-styles.md).

~~~jsx {2-12}
const editor = new richtext.Richtext("#root", {
    menubar: true,
    toolbar: false,
    fullscreenMode: true,
    layoutMode: "document",
    locale: richtext.locales.cn
    defaultStyles: {
        h4: {
            "font-family": "Roboto"
        },
        // other settings
    }
});
~~~

## What's next

That’s it! With these three steps, RichText is ready for editing content. Feel free to start working or look around to see what else JavaScript RichText can do.
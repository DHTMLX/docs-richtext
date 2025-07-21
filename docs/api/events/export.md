---
sidebar_label: export
title: export Event
description: You can learn about the export event in the documentation of the DHTMLX JavaScript RichText library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX RichText.
---

# export

### Description

@short: Fires after pressing the "Export" option in the menubar or via Event Bus methods

### Usage

~~~jsx {}
"export": ({ options: IExportOptions; result?: any }) => boolean | void;

interface IExportOptions {
    format?: "docx" | "pdf";
    url?: string;
    download?: boolean;
    fileName?: string;
}
~~~

### Parameters

The callback of **export** event can take an object with the following parameters:

- `format` - a text format
- `url` - a path to the place the file to be exported
- `download` - an ability to download a file
- `fileName` - a file name to be exported

:::info
For handling inner events you can use [**Event Bus methods**](/category/event-bus-methods/)
:::

### Example

~~~jsx {5-15}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration parameters
});
// subscribe on the "export" event
editor.api.on("export", (obj) => {
    console.log(obj);
    console.log("The file was exported");
});
// export value as pdf file
editor.api.exec("export", {
    format: "pdf",
    download: false,
    fileName: "some file"
});
~~~

**Change log:** The event was added in v2.0

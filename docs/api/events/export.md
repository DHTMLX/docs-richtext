---
sidebar_label: export
title: export Event
description: This section covers the export event in the DHTMLX JavaScript RichText library. It includes developer guides, API references, code examples, live demos, and a free 30-day trial of DHTMLX RichText.
---

# export

### Description

@short: Triggered after selecting the "Export" option from the menubar or through Event Bus methods.

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

The callback for the **export** event receives an object with these properties:

- `format` - specifies the file format
- `url` - the base URL used for exporting the file
- `download` - indicates whether the file should be downloaded automatically after the server response. If set to "false", the file won't download automatically, but the blob data can be accessed via the `result` property in the event object
- `fileName` - the name assigned to the exported file

:::info
Inner events can be managed using [**Event Bus methods**](api/overview/event_bus_methods_overview.md)
:::

### Example

~~~jsx {5-15}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// listen for the "export" event
editor.api.on("export", (obj) => {
    console.log(obj);
    console.log("The file was exported");
});
// export content as a pdf file
editor.api.exec("export", {
    format: "pdf",
    download: false,
    fileName: "some file"
});
~~~

**Change log:** This event was introduced in v2.0

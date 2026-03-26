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

- `options` - an object with export options:
  - `format` - (optional) a file format: `"docx"` or `"pdf"`
  - `url` - (optional) a base URL for file export
  - `download` - (optional) allows a user to specify if he wants to download the file after receiving the response back from the server. If the property is set to `false`, the file will not download, but the user will instead be able to get blob data from the event object (see the `result` parameter)
  - `fileName` - (optional) a file name to be exported
- `result` - (optional) the blob data returned from the server when `download` is set to `false`

:::info
For handling inner events you can use [**Event Bus methods**](api/overview/event_bus_methods_overview.md)
:::

### Example

~~~jsx {5-15}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// subscribe to the "export" event
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

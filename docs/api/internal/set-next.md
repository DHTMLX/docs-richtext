---
sidebar_label: api.setNext()
title: setNext Method
description: You can learn about the setNext method in the documentation of the DHTMLX JavaScript RichText library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX RichText.
---

# api.setNext()

### Description

@short: This method lets you add an action into the Event Bus sequence.

### Usage

~~~jsx {}
api.setNext(next: any): void;
~~~

### Parameters

- `next` - (required) the action to be added into the **Event Bus** sequence  

### Example

~~~jsx {10-11}
const server = "https://some-backend-url";
// Assume that you have a custom server service class named someServerService
const someServerService = new ServerDataService(server);

fetch(server + "/data").then((res) => res.json()).then((data) => {
    const editor = new richtext.Richtext("#root", {
        value: data
    });

    // Add someServerService into the Event Bus sequence of the widget
    editor.api.setNext(someServerService);
});
~~~

**Change log:** The method was added in v2.0

---
sidebar_label: api.setNext()
title: setNext Method
description: You can learn about the setNext method in the documentation of the DHTMLX JavaScript RichText library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX RichText.
---

# api.setNext()

### Description

@short: Allows adding some action into the Event Bus order

### Usage

~~~jsx {}
api.setNext(next: any): void;
~~~

### Parameters

- `next` - (required) the action to be included into the **Event Bus** order  

### Example

~~~jsx {15}
const url = "https://some_backend_url";
const restProvider = new richtext.RestDataProvider(url);

Promise.all([
    ...
]).then(([value]) => {
    const editor = new richtext.Richtext("#root", {
        ...
    });
    editor.api.setNext(restProvider);
});
~~~

:::info
You need to include **RestDataProvider** into the **Event Bus** order to perform operations with data (**adding**, **deleting** etc) and send the corresponding requests to the server
:::

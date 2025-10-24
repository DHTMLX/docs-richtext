---
sidebar_label: getValue()
title: getValue Method
description: You can learn about the getValue method in the documentation of the DHTMLX JavaScript RichText library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX RichText.
---

# getValue()

### Description

@short: Retrieves the current value of the RichText editor

### Usage

~~~jsx {}
getValue(encoder?: any): string;
~~~

### Parameters

- `encoder` - (optional) a parser that converts the RichText content into a specific format. Available options include `html` (default) and `text`

To obtain the desired encoder, use the following:

```jsx
const toTextEncoder = richtext.text.toText; // text encoder
const toHTMLEncoder = richtext.html.toHTML; // html encoder
```

### Example

~~~jsx {6-8}
const editor = new richtext.Richtext("#root", {
    value: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos." // sets the default value (HTML format)
    // other configuration properties
});

const toTextEncoder = richtext.text.toText;
const editor_value = editor.getValue(toTextEncoder);
console.log(editor_value);
~~~

**Change log:** The method was updated in v2.0. The `mode` parameter was removed. The `encoder` parameter was added
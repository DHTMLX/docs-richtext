---
sidebar_label: setValue()
title: setValue Method
description: You can learn about the setValue method in the documentation of the DHTMLX JavaScript RichText library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX RichText.
---

# setValue()

### Description

@short: Sets the editor value

### Usage

~~~jsx {}
setValue: (value: string, encoder?: any): void;
~~~

### Parameters

- `value` - (required) a value to be inserted into the editor
- `encoder` - (optional) a custom parser used to encode the editor's content into a custom format. The following formats are available: `html` (default) and `text`

You can get the required encoder in the following way:

```jsx
const TextEncoder = richtext.text.fromText; // text encoder
const HTMLEncoder = richtext.text.fromHTML; // html encoder
```

### Example

~~~jsx {7-8}
const editor = new richtext.Richtext("#root", {
    // configuration parameters
});

const editor_value = "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos."

const TextEncoder = richtext.text.fromText;
editor.setValue(editor_value, TextEncoder);
~~~

**Change log:** The method was updated in v2.0. The `mode` parameter was deprecated. The `encoder` parameter was added

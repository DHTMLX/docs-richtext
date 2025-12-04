---
sidebar_label: setValue()
title: setValue Method
description: You can learn about the setValue method in the documentation of the DHTMLX JavaScript RichText library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX RichText.
---

# setValue()

### Description

@short: Updates the RichText content with a new value

### Usage

~~~jsx {}
setValue: (value: string, encoder?: any): void;
~~~

### Parameters

- `value` - (required) the content to be inserted into the RichText
- `encoder` - (optional) a custom parser to encode the RichText content into a specific format. Available formats include: `html` (default) and `text`

You can obtain the desired encoder as follows:

```jsx
const fromTextEncoder = richtext.text.fromText; // text encoder
const fromHTMLEncoder = richtext.html.fromHTML; // html encoder
```

### Example

~~~jsx {7-8}
const editor = new richtext.Richtext("#root", {
    // configuration properties
});

const editor_value = "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos."

const fromTextEncoder = richtext.text.fromText;
editor.setValue(editor_value, fromTextEncoder);
~~~

**Change log:** The method was updated in v2.0. The `mode` parameter was removed. The `encoder` parameter was added

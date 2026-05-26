---
sidebar_label: insertValue()
title: insertValue Method
description: You can learn about the insertValue method in the documentation of the DHTMLX JavaScript RichText library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX RichText.
---

# insertValue()

### Description

@short: Inserts text, Markdown, or HTML content at the current cursor position or replaces the selected text

### Usage

~~~jsx {}
insertValue: (value: string, encoder?: any): void;
~~~

### Parameters

- `value` - (required) a value to be inserted into the RichText at the current cursor position. If a selection is active, the selection is replaced with the new value
- `encoder` - (optional) a parser used to decode the inserted value. The following formats are available: `html` (default), `text`, and `markdown`

You can get the required encoder in the following way:

```jsx
const fromTextEncoder = richtext.text.fromText;             // text encoder
const fromHTMLEncoder = richtext.html.fromHTML;             // html encoder
const fromMarkdownEncoder = richtext.markdown.fromMarkdown; // markdown encoder
```

### Example

~~~jsx {6}
const editor = new richtext.Richtext("#root", {
    // configuration properties
});

// inserts an HTML link with custom attributes at the cursor position
editor.insertValue("<a href=\"https://example.com\" title=\"Example\">link</a>");
~~~

The inserted content is added as a single history entry and can be reverted with one **Undo** step.

**Change log:** The method was added in v2.1

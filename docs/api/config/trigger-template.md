---
sidebar_label: triggerTemplate
title: triggerTemplate Config
description: You can learn about the triggerTemplate config in the documentation of the DHTMLX JavaScript RichText library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX RichText.
---

# triggerTemplate

### Description

@short: Optional. Customizes how RichText renders items in the suggestion dropdown opened by a [`triggers`](api/config/triggers.md) entry

By default, the dropdown shows each item's `label` as plain text. Use `triggerTemplate` to render richer rows — for example, an avatar plus a name and an email.

### Usage

~~~jsx {}
function triggerTemplate({ data, trigger }) {
    return "HTML template of the suggestion item";
};
~~~

### Parameters

The callback function takes an object with the following parameters:

- `data` - the current suggestion item (`{ id, label, url }`, plus any custom fields you add to the trigger's `data` source)
- `trigger` - the trigger character that opened the dropdown (`"@"`, `"#"`, etc.)

:::tip
The dropdown anchor has a fixed default width of `160px`. To make room for a wider template, override the width from a parent stylesheet (`!important` is needed because the widget sets the default via its own scoped CSS):

~~~css {}
.wx-suggest-anchor {
    width: 220px !important;
}
~~~
:::

### Example

~~~jsx {1,4-9}
const { template } = richtext;

new richtext.Richtext("#root", {
    triggers: [{ trigger: "@", data: people }],
    triggerTemplate: template(obj => {
        if (obj.trigger === "@") {
            return `<div class="user">
                <img class="user-avatar" src="${obj.data.image}">
                <div class="user-nickname">${obj.data.label}</div>
                <div class="user-name">${obj.data.name}</div>
            </div>`;
        }
        return obj.data.label;
    })
});
~~~

**Change log:** The property was added in v2.1

**Related articles:** [Mentions and tags](guides/mentions_and_tags.md)

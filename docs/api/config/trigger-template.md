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
The dropdown default width is `160px`. If you need more space for your template, add the `.wx-editor` parent in front of the selector:

~~~css {}
.wx-editor .wx-suggest-anchor {
    width: 220px;
}
~~~
:::

### Example

The following code snippet configures two triggers: `@` for mentions and `#` for tags. Use `triggerTemplate` to expand the `trigger` value to render each dropdown differently. For the `@` dropdown the template returns a custom HTML row with an avatar (`data.image`), a nickname (`data.label`), and a full name (`data.name`). For the `#` trigger the template use the `label`:

~~~jsx {5-6,8-15}
const { template, Richtext } = richtext;

new Richtext("#root", {
    triggers: [
        { trigger: "@", data: people },
        { trigger: "#", data: tags }
    ],
    triggerTemplate: template(obj => {
        if (obj.trigger === "@") {
            return `<div class="user">
                <img class="user-avatar" src="${obj.data.image}">
                <div class="user-nickname">${obj.data.label}</div>
                <div class="user-name">${obj.data.name}</div>
            </div>`;
        }
        // other triggers (for example, "#") use the plain label
        return obj.data.label;
    })
});
~~~

**Change log:** The property was added in v2.1

**Related articles:** [Mentions and tags](guides/mentions_and_tags.md)

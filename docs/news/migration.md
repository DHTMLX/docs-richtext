---
sidebar_label: Migration to newer versions
title: Migration to Newer Versions
description: You can learn about the Migration to Newer Versions in the documentation of the DHTMLX JavaScript RichTExt library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX RichTExt.
---

# Migration to newer versions

## 1.2 -> 2.0

### Properties migration

| Legacy property | Replaced by               | Notes                                     |
| --------------- | ------------------------- | ----------------------------------------- |
| `customStats`   | *(Removed)*               | Not available in the new version 2.0      |
| `toolbarBlocks` | `toolbar`                 | Now supports detailed toolbar structure   |
| `defaultStyles` | `defaultStyles` (updated) | Structure is now per-block and CSS-based  |
| `mode`          | `layoutMode`              | Replaced with stricter enum-based setting |

### - `customStats`

The `customStats` property isn't part of the latest RichText version. This means built-in support for custom statistics like character, word, or sentence counts isn't available anymore.

To handle text metrics, just grab the editor content and process it however you want:

```jsx
const content = editor.getValue();
const wordCount = content.split(/\s+/).length;
```

### - `toolbarBlocks` → [`toolbar`](api/config/toolbar.md)

Before **2.0**, only blocks of controls could be set:
```jsx{2} title="Before 2.0"
new dhx.RichText("#root", {
  toolbarBlocks: ["undo", "style", "decoration", "colors", "align", "link"]
});
```

With **2.0** and later, individual controls can be listed as needed:
```jsx{2-4} title="From 2.0"
new richtext.Richtext("#root", {
    toolbar: [
        "undo", "style", "bold", "italic", "underline", "text-color",
        "align", "link"
    ]
});
```

### - [`defaultStyles`](api/config/default-styles.md)

Before **2.0**, default values for toolbar selection controls looked like this:
```jsx title="Before 2.0"
defaultStyles: {
    "font-family": "Tahoma",
    "font-size": "14px"
}
```

From **2.0** on, default style values can be set up for specific block types:
```jsx title="From 2.0"
defaultStyles: {
  "*": {
    "font-family": "Tahoma",
    "font-size": "14px"
  },
  h1: {
    "font-size": "32px",
    "color": "#333"
  }
}
```

:::note
The `*` key sets base defaults for everything, and any specific element (like p, h1, or blockquote) can be customized on top.
:::

### - `mode` → [`layoutMode`](api/config/layout-mode.md)

```jsx{2} title="Before 2.0"
new dhx.RichText("#root", {
    mode: "document"
});
```

```jsx{2} title="From 2.0"
new Richtext("#root", {
    layoutMode: "document" // or "classic"
});
```

Now, [`layoutMode`](api/config/layout-mode.md) only accepts `"classic"` or `"document"`.

### Methods migration

| Legacy method           | New equivalent                       | Notes                                                 |
| ----------------------- | ------------------------------------ | ----------------------------------------------------- |
| `getValue(mode)`        | `getValue(encoder)`                  | Encoders replace string modes; separate import needed for encoders |
| `setValue(value, mode)` | `setValue(value, encoder)`           | Encoders replace string modes; separate import needed for encoders |
| `getStats()`            | *Removed*                            | No replacement; manual logic required                 |
| `getEditorAPI()`        | *Removed*                            | Internal; use public API instead                      |
| `fire()`                | *Removed*                            | Replaced by `exec()` and `intercept()`                |
| `on()`, `detach()`      | ✅ Preserved (`api.on`, `api.detach`)| Now accessed via `richtext.api`                       |
| `fullScreen()`          | *Removed*                            | Use `fullscreenMode` config property                  |
| `exitFullScreen()`      | *Removed*                            | Use `fullscreenMode` config property                  |
| `paint()`               | *Removed*                            | No longer needed                                      |
| `destructor()`          | ✅ Still available                   | Unchanged                                             |
| `setConfig()`           | ✅ New                               | Enables live config updates                           |
| `setLocale()`           | ✅ New                               | Allows dynamic locale switching                       |
| `getReactiveState()`    | ✅ New                               | Enables reactive state tracking                       |
| `getState()`            | ✅ New                               | Provides current static config state                  |
| `intercept()`           | ✅ New                               | Intercept internal actions                            |
| `exec()`                | ✅ New                               | Execute internal actions                              |

### - [`setValue()`](api/methods/set-value.md) / [`getValue()`](api/methods/get-value.md)

```jsx title="Before 2.0"
...
editor.setValue("<p>Hello</p>", "html");
editor.getValue("text");
```

```jsx title="From 2.0"
const fromTextEncoder = richtext.text.fromText; 
const fromHTMLEncoder = richtext.html.fromHTML; 

const toTextEncoder = richtext.text.toText; 
const toHTMLEncoder = richtext.html.toHTML; 
...
editor.setValue("<p>Hello</p>", fromHTMLEncoder);
editor.getValue(toTextEncoder);
```

:::note
It's fine to call `getValue()` and `setValue()` without passing an encoder; HTML will be used by default.
:::

### - [`on`](api/internal/on.md) / [`detach`](api/internal/detach.md)

```jsx title="Before 2.0"
editor.events.on("Change", function(action, canUndo, canRedo){
  // your code here
});
 
editor.events.detach("Change");
```

```jsx title="From 2.0"
editor.api.on("set-font-size", (obj) => {
    console.log(obj.fontSize);
}, { tag: "track" });

editor.api.detach("track");
```

### - `fire()` → Use [`exec()`](api/internal/exec.md) and [`intercept()`](api/internal/intercept.md)

```jsx title="Before 2.0"
editor.events.fire("some-event", [data]);
```

```jsx title="From 2.0"
editor.api.exec("some-event", obj);

// Preventing execution
editor.api.intercept("some-event", (obj) => false);
```

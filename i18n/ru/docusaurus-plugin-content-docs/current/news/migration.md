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

The `customStats` property has been removed. The current version of RichText no longer supports displaying user-defined statistics (e.g., character count, word count, sentence count).

If you still need to calculate text metrics, you can do so externally by accessing the editor content and processing it manually:

```jsx
const content = editor.getValue();
const wordCount = content.split(/\s+/).length;
```

### - `toolbarBlocks` → [`toolbar`](api/config/toolbar.md)

Before **2.0**, users were able to specify only blocks with controls
```jsx{2} title="Before 2.0"
new dhx.RichText("#root", {
  toolbarBlocks: ["undo", "style", "decoration", "colors", "align", "link"]
});
```

Starting from **2.0**, users can spefify separate controls
```jsx{2-4} title="From 2.0"
new richtext.Richtext("#root", {
    toolbar: [
        "undo", "style", "bold", "italic", "underline", "text-color",
        "align", "link"
    ]
});
```

### - [`defaultStyles`](api/config/default-styles.md)

Before **2.0**, users were able to define default values for toolbar selection controls
```jsx title="Before 2.0"
defaultStyles: {
    "font-family": "Tahoma",
    "font-size": "14px"
}
```

Starting from **2.0**, users can specifies default style values for specific block types
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
Use `*` to define base defaults for all blocks, then override specific elements (p, h1, blockquote, etc.).
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

The new [`layoutMode`](api/config/layout-mode.md) strictly supports `"classic"` and `"document"` values.

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
You can still call `getValue()` and `setValue()` without an encoder — HTML is used by default
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

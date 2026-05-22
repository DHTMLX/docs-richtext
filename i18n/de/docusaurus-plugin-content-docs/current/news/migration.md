---
sidebar_label: Migration zu neueren Versionen
title: Migration zu neueren Versionen
description: Hier erfahren Sie alles über die Migration zu neueren Versionen in der Dokumentation der DHTMLX JavaScript RichText-Bibliothek. Entwicklerhandbücher und API-Referenz, Code-Beispiele und Live-Demos sowie eine kostenlose 30-Tage-Testversion von DHTMLX RichText.
---

# Migration zu neueren Versionen

## 1.2 -> 2.0

### Migration der Properties

| Veraltete Property | Ersetzt durch             | Hinweise                                              |
| ------------------ | ------------------------- | ----------------------------------------------------- |
| `customStats`      | *(Entfernt)*              | In der neuen Version 2.0 nicht mehr verfügbar         |
| `toolbarBlocks`    | `toolbar`                 | Unterstützt jetzt eine detaillierte Toolbar-Struktur  |
| `defaultStyles`    | `defaultStyles` (updated) | Struktur ist jetzt block-spezifisch und CSS-basiert   |
| `mode`             | `layoutMode`              | Ersetzt durch eine strikte Enum-basierte Einstellung  |

### - `customStats`

Die Property `customStats` wurde entfernt. Die aktuelle Version von RichText unterstützt keine Anzeige benutzerdefinierter Statistiken mehr (z. B. Zeichenanzahl, Wortanzahl, Satzanzahl).

Falls Sie weiterhin Textmetriken berechnen müssen, können Sie dies extern tun, indem Sie auf den Editor-Inhalt zugreifen und ihn manuell verarbeiten:

```jsx
const content = editor.getValue();
const wordCount = content.split(/\s+/).length;
```

### - `toolbarBlocks` → [`toolbar`](api/config/toolbar.md)

Vor **2.0** konnten Benutzer nur Blöcke mit Steuerelementen angeben:
```jsx{2} title="Before 2.0"
new dhx.RichText("#root", {
  toolbarBlocks: ["undo", "style", "decoration", "colors", "align", "link"]
});
```

Ab **2.0** können Benutzer einzelne Steuerelemente angeben:
```jsx{2-4} title="From 2.0"
new richtext.Richtext("#root", {
    toolbar: [
        "undo", "style", "bold", "italic", "underline", "text-color",
        "align", "link"
    ]
});
```

### - [`defaultStyles`](api/config/default-styles.md)

Vor **2.0** konnten Benutzer Standardwerte für die Auswahlsteuerelemente der Toolbar festlegen:
```jsx title="Before 2.0"
defaultStyles: {
    "font-family": "Tahoma",
    "font-size": "14px"
}
```

Ab **2.0** können Benutzer Standard-Stilwerte für bestimmte Blocktypen festlegen:
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
Verwenden Sie `*`, um Standardwerte für alle Blöcke festzulegen, und überschreiben Sie dann spezifische Elemente (p, h1, blockquote usw.).
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

Die neue Property [`layoutMode`](api/config/layout-mode.md) unterstützt ausschließlich die Werte `"classic"` und `"document"`.

### Migration der Methoden

| Veraltete Methode       | Neues Äquivalent                     | Hinweise                                                                                |
| ----------------------- | ------------------------------------ | --------------------------------------------------------------------------------------- |
| `getValue(mode)`        | `getValue(encoder)`                  | Encoder ersetzen String-Modi; separater Import für Encoder erforderlich                 |
| `setValue(value, mode)` | `setValue(value, encoder)`           | Encoder ersetzen String-Modi; separater Import für Encoder erforderlich                 |
| `getStats()`            | *Entfernt*                           | Kein Ersatz; manuelle Logik erforderlich                                                |
| `getEditorAPI()`        | *Entfernt*                           | Intern; stattdessen die öffentliche API verwenden                                       |
| `fire()`                | *Entfernt*                           | Ersetzt durch `exec()` und `intercept()`                                                |
| `on()`, `detach()`      | ✅ Erhalten (`api.on`, `api.detach`) | Jetzt über `richtext.api` zugänglich                                                    |
| `fullScreen()`          | *Entfernt*                           | Die Config-Property `fullscreenMode` verwenden                                          |
| `exitFullScreen()`      | *Entfernt*                           | Die Config-Property `fullscreenMode` verwenden                                          |
| `paint()`               | *Entfernt*                           | Nicht mehr erforderlich                                                                 |
| `destructor()`          | ✅ Weiterhin verfügbar               | Unverändert                                                                             |
| `setConfig()`           | ✅ Neu                               | Ermöglicht Live-Aktualisierungen der Konfiguration                                      |
| `setLocale()`           | ✅ Neu                               | Ermöglicht dynamisches Wechseln der Sprache                                             |
| `getReactiveState()`    | ✅ Neu                               | Ermöglicht reaktives State-Tracking                                                     |
| `getState()`            | ✅ Neu                               | Liefert den aktuellen statischen Konfigurations-State                                   |
| `intercept()`           | ✅ Neu                               | Interne Aktionen abfangen                                                               |
| `exec()`                | ✅ Neu                               | Interne Aktionen ausführen                                                              |

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
`getValue()` und `setValue()` können weiterhin ohne Encoder aufgerufen werden — standardmäßig wird HTML verwendet.
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

### - `fire()` → [`exec()`](api/internal/exec.md) und [`intercept()`](api/internal/intercept.md) verwenden

```jsx title="Before 2.0"
editor.events.fire("some-event", [data]);
```

```jsx title="From 2.0"
editor.api.exec("some-event", obj);

// Preventing execution
editor.api.intercept("some-event", (obj) => false);
```

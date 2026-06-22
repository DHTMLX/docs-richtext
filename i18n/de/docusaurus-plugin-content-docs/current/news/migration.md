---
sidebar_label: Migration auf neuere Versionen
title: Migration auf neuere Versionen
description: Sie können sich in der Dokumentation der DHTMLX JavaScript RichText-Bibliothek über die Migration auf neuere Versionen informieren. Durchsuchen Sie Entwicklerleitfäden und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus, und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText herunter.
---

# Migration auf neuere Versionen {#migration-to-newer-versions}

## 1.2 -> 2.0 {#12---20}

### Migration der Eigenschaften {#properties-migration}

| Veraltete Eigenschaft | Ersetzt durch             | Hinweise                                              |
| --------------------- | ------------------------- | ----------------------------------------------------- |
| `customStats`         | *(Entfernt)*              | Nicht verfügbar in der neuen Version 2.0              |
| `toolbarBlocks`       | `toolbar`                 | Unterstützt jetzt eine detaillierte Toolbar-Struktur  |
| `defaultStyles`       | `defaultStyles` (aktualisiert) | Struktur ist jetzt block- und CSS-basiert        |
| `mode`                | `layoutMode`              | Ersetzt durch eine striktere Enum-basierte Einstellung |

### - `customStats` {#--customstats}

Die Eigenschaft `customStats` wurde entfernt. Die aktuelle Version von RichText unterstützt die Anzeige benutzerdefinierter Statistiken (z. B. Zeichenanzahl, Wortanzahl, Satzanzahl) nicht mehr.

Wenn Sie Textmetriken weiterhin berechnen müssen, können Sie dies extern tun, indem Sie auf den Editor-Inhalt zugreifen und ihn manuell verarbeiten:

```jsx
const content = editor.getValue();
const wordCount = content.split(/\s+/).length;
```

### - `toolbarBlocks` → [`toolbar`](api/config/toolbar.md) {#--toolbarblocks--toolbar}

Vor **2.0** konnten Benutzer nur Blöcke mit Steuerelementen angeben
```jsx{2} title="Before 2.0"
new dhx.RichText("#root", {
  toolbarBlocks: ["undo", "style", "decoration", "colors", "align", "link"]
});
```

Ab **2.0** können Benutzer einzelne Steuerelemente angeben
```jsx{2-4} title="From 2.0"
new richtext.Richtext("#root", {
    toolbar: [
        "undo", "style", "bold", "italic", "underline", "text-color",
        "align", "link"
    ]
});
```

### - [`defaultStyles`](api/config/default-styles.md) {#--defaultstyles}

Vor **2.0** konnten Benutzer Standardwerte für Toolbar-Auswahlsteuerelemente definieren
```jsx title="Before 2.0"
defaultStyles: {
    "font-family": "Tahoma",
    "font-size": "14px"
}
```

Ab **2.0** können Benutzer Standard-Style-Werte für bestimmte Blocktypen angeben
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

:::note[Hinweis]
Verwenden Sie `*`, um Basis-Standardwerte für alle Blöcke zu definieren, und überschreiben Sie dann bestimmte Elemente (p, h1, blockquote usw.).
:::

### - `mode` → [`layoutMode`](api/config/layout-mode.md) {#--mode--layoutmode}

```jsx{2} title="Before 2.0"
new dhx.RichText("#root", {
    mode: "document"
});
```

```jsx{2} title="From 2.0"
new Richtext("#root", {
    layoutMode: "document" // oder "classic"
});
```

Der neue [`layoutMode`](api/config/layout-mode.md) unterstützt ausschließlich die Werte `"classic"` und `"document"`.

### Migration der Methoden {#methods-migration}

| Veraltete Methode       | Neues Äquivalent                     | Hinweise                                                              |
| ----------------------- | ------------------------------------ | --------------------------------------------------------------------- |
| `getValue(mode)`        | `getValue(encoder)`                  | Encoder ersetzen String-Modi; separater Import für Encoder erforderlich |
| `setValue(value, mode)` | `setValue(value, encoder)`           | Encoder ersetzen String-Modi; separater Import für Encoder erforderlich |
| `getStats()`            | *Entfernt*                           | Kein Ersatz; manuelle Logik erforderlich                              |
| `getEditorAPI()`        | *Entfernt*                           | Intern; stattdessen die öffentliche API verwenden                     |
| `fire()`                | *Entfernt*                           | Ersetzt durch `exec()` und `intercept()`                              |
| `on()`, `detach()`      | ✅ Beibehalten (`api.on`, `api.detach`) | Jetzt über `richtext.api` zugänglich                               |
| `fullScreen()`          | *Entfernt*                           | Konfig-Eigenschaft `fullscreenMode` verwenden                         |
| `exitFullScreen()`      | *Entfernt*                           | Konfig-Eigenschaft `fullscreenMode` verwenden                         |
| `paint()`               | *Entfernt*                           | Nicht mehr benötigt                                                   |
| `destructor()`          | ✅ Weiterhin verfügbar               | Unverändert                                                           |
| `setConfig()`           | ✅ Neu                               | Ermöglicht Live-Konfigurations-Updates                                |
| `setLocale()`           | ✅ Neu                               | Ermöglicht dynamisches Wechseln der Locale                            |
| `getReactiveState()`    | ✅ Neu                               | Ermöglicht reaktives Zustandstracking                                 |
| `getState()`            | ✅ Neu                               | Liefert den aktuellen statischen Konfigurationszustand                |
| `intercept()`           | ✅ Neu                               | Interne Aktionen abfangen                                             |
| `exec()`                | ✅ Neu                               | Interne Aktionen ausführen                                            |

### - [`setValue()`](api/methods/set-value.md) / [`getValue()`](api/methods/get-value.md) {#--setvalue--getvalue}

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

:::note[Hinweis]
Sie können `getValue()` und `setValue()` weiterhin ohne Encoder aufrufen — HTML wird standardmäßig verwendet
:::

### - [`on`](api/internal/on.md) / [`detach`](api/internal/detach.md) {#--on--detach}

```jsx title="Before 2.0"
editor.events.on("Change", function(action, canUndo, canRedo){
  // Ihr Code hier
});
 
editor.events.detach("Change");
```

```jsx title="From 2.0"
editor.api.on("set-font-size", (obj) => {
    console.log(obj.fontSize);
}, { tag: "track" });

editor.api.detach("track");
```

### - `fire()` → [`exec()`](api/internal/exec.md) und [`intercept()`](api/internal/intercept.md) verwenden {#--fire--use-exec-and-intercept}

```jsx title="Before 2.0"
editor.events.fire("some-event", [data]);
```

```jsx title="From 2.0"
editor.api.exec("some-event", obj);

// Ausführung verhindern
editor.api.intercept("some-event", (obj) => false);
```

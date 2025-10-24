---
sidebar_label: Migration zu neueren Versionen
title: Migration zu neueren Versionen
description: Informationen zur Migration zu neueren Versionen finden Sie in der Dokumentation der DHTMLX JavaScript RichTExt Bibliothek. Durchstöbern Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-tägige Testversion von DHTMLX RichTExt herunter.
---

# Migration zu neueren Versionen

## 1.2 -> 2.0

### Migration der Eigenschaften

| Veraltete Eigenschaft | Ersetzt durch                | Hinweise                                      |
| --------------------- | ---------------------------- | --------------------------------------------- |
| `customStats`         | *(Entfernt)*                 | In Version 2.0 nicht mehr verfügbar           |
| `toolbarBlocks`       | `toolbar`                    | Unterstützt jetzt detaillierte Toolbar-Struktur |
| `defaultStyles`       | `defaultStyles` (aktualisiert) | Struktur jetzt blockbasiert und CSS-basiert  |
| `mode`                | `layoutMode`                 | Ersetzt durch strengere Enum-basierte Einstellung |

### - `customStats`

Die Eigenschaft `customStats` ist in der neuesten RichText-Version nicht mehr enthalten. Das bedeutet, dass die integrierte Unterstützung für benutzerdefinierte Statistiken wie Zeichen-, Wort- oder Satzanzahl nicht mehr verfügbar ist.

Um Textmetriken zu verarbeiten, holen Sie sich einfach den Editor-Inhalt und verarbeiten ihn nach Bedarf:

```jsx
const content = editor.getValue();
const wordCount = content.split(/\s+/).length;
```

### - `toolbarBlocks` → [`toolbar`](api/config/toolbar.md)

Vor **2.0** konnten nur Blöcke von Steuerelementen festgelegt werden:
```jsx{2} title="Vor 2.0"
new dhx.RichText("#root", {
  toolbarBlocks: ["undo", "style", "decoration", "colors", "align", "link"]
});
```

Ab **2.0** und höher können einzelne Steuerelemente nach Bedarf aufgelistet werden:
```jsx{2-4} title="Ab 2.0"
new richtext.Richtext("#root", {
    toolbar: [
        "undo", "style", "bold", "italic", "underline", "text-color",
        "align", "link"
    ]
});
```

### - [`defaultStyles`](api/config/default-styles.md)

Vor **2.0** sahen die Standardwerte für die Auswahlsteuerelemente der Toolbar so aus:
```jsx title="Vor 2.0"
defaultStyles: {
    "font-family": "Tahoma",
    "font-size": "14px"
}
```

Ab **2.0** können Standardstilwerte für bestimmte Blocktypen festgelegt werden:
```jsx title="Ab 2.0"
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
Der Schlüssel `*` legt die Basis-Standards für alles fest, und jedes spezifische Element (wie p, h1 oder blockquote) kann zusätzlich angepasst werden.
:::

### - `mode` → [`layoutMode`](api/config/layout-mode.md)

```jsx{2} title="Vor 2.0"
new dhx.RichText("#root", {
    mode: "document"
});
```

```jsx{2} title="Ab 2.0"
new Richtext("#root", {
    layoutMode: "document" // oder "classic"
});
```

Jetzt akzeptiert [`layoutMode`](api/config/layout-mode.md) nur noch `"classic"` oder `"document"`.

### Migration der Methoden

| Veraltete Methode         | Neues Äquivalent                        | Hinweise                                                      |
| ------------------------- | --------------------------------------- | ------------------------------------------------------------- |
| `getValue(mode)`          | `getValue(encoder)`                     | Encoder ersetzen String-Modi; separater Import für Encoder nötig |
| `setValue(value, mode)`   | `setValue(value, encoder)`              | Encoder ersetzen String-Modi; separater Import für Encoder nötig |
| `getStats()`              | *Entfernt*                              | Kein Ersatz; manuelle Logik erforderlich                      |
| `getEditorAPI()`          | *Entfernt*                              | Intern; stattdessen öffentliche API verwenden                 |
| `fire()`                  | *Entfernt*                              | Ersetzt durch `exec()` und `intercept()`                      |
| `on()`, `detach()`        | ✅ Erhalten (`api.on`, `api.detach`)    | Jetzt über `richtext.api` zugänglich                         |
| `fullScreen()`            | *Entfernt*                              | Verwenden Sie die Eigenschaft `fullscreenMode`                |
| `exitFullScreen()`        | *Entfernt*                              | Verwenden Sie die Eigenschaft `fullscreenMode`                |
| `paint()`                 | *Entfernt*                              | Nicht mehr benötigt                                           |
| `destructor()`            | ✅ Weiterhin verfügbar                  | Unverändert                                                  |
| `setConfig()`             | ✅ Neu                                  | Ermöglicht Live-Konfigurationsaktualisierungen                |
| `setLocale()`             | ✅ Neu                                  | Erlaubt dynamisches Umschalten der Sprache                    |
| `getReactiveState()`      | ✅ Neu                                  | Ermöglicht reaktives Status-Tracking                          |
| `getState()`              | ✅ Neu                                  | Gibt aktuellen statischen Konfigurationsstatus zurück         |
| `intercept()`             | ✅ Neu                                  | Interne Aktionen abfangen                                     |
| `exec()`                  | ✅ Neu                                  | Interne Aktionen ausführen                                    |

### - [`setValue()`](api/methods/set-value.md) / [`getValue()`](api/methods/get-value.md)

```jsx title="Vor 2.0"
...
editor.setValue("<p>Hello</p>", "html");
editor.getValue("text");
```

```jsx title="Ab 2.0"
const fromTextEncoder = richtext.text.fromText; 
const fromHTMLEncoder = richtext.html.fromHTML; 

const toTextEncoder = richtext.text.toText; 
const toHTMLEncoder = richtext.html.toHTML; 
...
editor.setValue("<p>Hello</p>", fromHTMLEncoder);
editor.getValue(toTextEncoder);
```

:::note
Es ist auch möglich, `getValue()` und `setValue()` ohne Encoder aufzurufen; standardmäßig wird dann HTML verwendet.
:::

### - [`on`](api/internal/on.md) / [`detach`](api/internal/detach.md)

```jsx title="Vor 2.0"
editor.events.on("Change", function(action, canUndo, canRedo){
  // Ihr Code hier
});
 
editor.events.detach("Change");
```

```jsx title="Ab 2.0"
editor.api.on("set-font-size", (obj) => {
    console.log(obj.fontSize);
}, { tag: "track" });

editor.api.detach("track");
```

### - `fire()` → Nutzung von [`exec()`](api/internal/exec.md) und [`intercept()`](api/internal/intercept.md)

```jsx title="Vor 2.0"
editor.events.fire("some-event", [data]);
```

```jsx title="Ab 2.0"
editor.api.exec("some-event", obj);

// Ausführung verhindern
editor.api.intercept("some-event", (obj) => false);
```

---
sidebar_label: Konfiguration
title: Konfiguration
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie alles über die Konfiguration. Lesen Sie Entwicklerhandbücher und die API-Referenz, probieren Sie Code-Beispiele und Live-Demos aus, und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText herunter.
---

# Konfiguration

Das Erscheinungsbild und Verhalten von RichText lässt sich mit folgenden Eigenschaften konfigurieren:

- [`menubar`](api/config/menubar.md) — Menüleiste oben ein- oder ausblenden
- [`toolbar`](api/config/toolbar.md) — Sichtbarkeit und Schaltflächen der Toolbar konfigurieren
- [`fullscreenMode`](api/config/fullscreen-mode.md) — Editor im Vollbildmodus starten
- [`layoutMode`](api/config/layout-mode.md) — zwischen dem `"classic"`- und dem `"document"`-Layout wechseln
- [`value`](api/config/value.md) — initialen HTML-Inhalt festlegen
- [`locale`](api/config/locale.md) — ein Lokalisierungsobjekt bei der Initialisierung anwenden
- [`defaultStyles`](api/config/default-styles.md) — Standardstile für bestimmte Blocktypen festlegen
- [`imageUploadUrl`](api/config/image-upload-url.md) — Endpunkt für Bild-Uploads festlegen

## Layout-Modi {#layout-modes}

RichText unterstützt zwei Layout-Modi für den Bearbeitungsbereich:

- **"classic"** — der Bearbeitungsbereich füllt die gesamte Seite

<div className="img_border">
![Classic mode](./../assets/richtext/classic_mode.png)
</div>

- **"document"** — der Bearbeitungsbereich ahmt eine Dokumentseite nach

<div className="img_border">
![Document mode](./../assets/richtext/document_mode.png)
</div>

Legen Sie die Eigenschaft [`layoutMode`](api/config/layout-mode.md) bei der Initialisierung fest, um den Modus zu wählen:

~~~jsx
const editor = new richtext.Richtext("#root", {
    layoutMode: "document"
});
~~~

## Toolbar

Die RichText-Toolbar gruppiert Steuerelemente in mehrere Blöcke, die Sie anpassen können.

### Standardmäßige Toolbar-Steuerelemente {#default-toolbar-controls}

Sie können folgende Schaltflächen und Steuerelemente in die RichText-Toolbar aufnehmen:

| Schaltfläche        | Beschreibung                                                                |
|---------------------|-----------------------------------------------------------------------------|
| `undo`              | Macht die letzte Benutzeraktion rückgängig                                  |
| `redo`              | Stellt die zuletzt rückgängig gemachte Aktion wieder her                    |
| `style`             | Wählt einen Textstil aus (z. B. Überschrift, Absatz, Blockzitat)            |
| `font-family`       | Ändert die Schriftart des ausgewählten Textes                               |
| `font-size`         | Passt die Größe des ausgewählten Textes an                                  |
| `bold`              | Wendet Fettformatierung auf den ausgewählten Text an                        |
| `italic`            | Wendet Kursivformatierung auf den ausgewählten Text an                      |
| `underline`         | Unterstreicht den ausgewählten Text                                         |
| `strike`            | Wendet Durchstreichformatierung an                                          |
| `subscript`         | Formatiert den Text als tiefgestellt                                        |
| `superscript`       | Formatiert den Text als hochgestellt                                        |
| `text-color`        | Ändert die Textfarbe                                                        |
| `background-color`  | Ändert die Hintergrund-(Hervorhebungs-)farbe des Textes                     |
| `align`             | Legt die Textausrichtung fest (links, zentriert, rechts, Blocksatz)         |
| `indent`            | Erhöht den Absatzeinzug                                                     |
| `outdent`           | Verringert den Absatzeinzug                                                 |
| `line-height`       | Passt den Zeilenabstand (Zeilenhöhe) an                                     |
| `quote`             | Formatiert den Text als Blockzitat                                          |
| `bulleted-list`     | Erstellt eine ungeordnete Liste                                             |
| `numbered-list`     | Erstellt eine nummerierte Liste                                             |
| `link`              | Fügt einen Hyperlink ein oder bearbeitet ihn                                |
| `image`             | Fügt ein Bild ein                                                           |
| `line`              | Fügt eine horizontale Linie ein                                             |
| `clear`             | Entfernt alle Formatierungen vom ausgewählten Text                          |
| `print`             | Öffnet den Druckdialog                                                      |
| `fullscreen`        | Schaltet den Vollbildmodus ein oder aus                                     |
| `mode`              | Wechselt zwischen zwei Layout-Modi: `classic` und `document`                |
| `shortcuts`         | Zeigt eine Liste der verfügbaren Tastatürkürzel an                          |
| `separator`         | Fügt einen visuellen Trenner zwischen Steuerelementen ein                   |

Verwenden Sie die Eigenschaft [`toolbar`](api/config/toolbar.md), um die Toolbar als Array von Steuerelement-Namen (Strings) zu definieren:

~~~jsx {2-36}
new richtext.Richtext("#root", {
    toolbar: [
        "undo",
        "redo",
        "separator",
        "style",
        "separator",
        "font-family",
        "font-size",
        "separator",
        "bold",
        "italic",
        "underline",
        "strike",
        "separator",
        "text-color",
        "background-color",
        "separator",
        "align",
        "line-height",
        "outdent",
        "indent",
        "separator",
        "bulleted-list",
        "numbered-list",
        "quote",
        "separator",
        "link",
        "image",
        "separator",
        "clear",
        "separator",
        "fullscreen",
        "mode"
        // weitere Schaltflächen
    ],
    // weitere Konfigurationseigenschaften
});
~~~

**Verwandtes Beispiel:** [RichText. Custom control and simplified toolbar](https://snippet.dhtmlx.com/wda202ih?tag=richtext)

### Benutzerdefinierte Toolbar-Steuerelemente hinzufügen {#add-custom-toolbar-controls}

Übergeben Sie dem Array [`toolbar`](api/config/toolbar.md) ein Objekt mit einem der folgenden Felder:

- `type: string` — erforderlich. Steuerelementtyp: `"button"`, `"richselect"` oder `"colorpicker"`
- `id: string` — optional. Benutzerdefinierte Steuerelement-ID; darf sich nicht mit vorhandenen IDs überschneiden
- `icon: string` — optional. Icon-Klassenname; wird mit dem Label kombiniert
- `label: string` — optional. Schaltflächen-Label; wird mit dem Icon kombiniert
- `tooltip: string` — optional. Tooltip, der beim Hover erscheint; standardmäßig wird `label` verwendet, wenn nicht gesetzt
- `css: string` — optional. CSS-Klasse für das Steuerelement. Integrierte Klassen: `wx-primary`, `wx-secondary`
- `handler: () => void` — optional. Callback, der beim Klick ausgeführt wird

Das folgende Beispiel kombiniert integrierte Schaltflächen, ein vordefiniertes Steuerelement vom Typ `richselect` und zwei benutzerdefinierte Schaltflächen:

~~~jsx {6-32}
new richtext.Richtext("#root", {
    toolbar: [
        // String-Einträge repräsentieren integrierte Schaltflächen
        "bold",
        "italic",
        // vordefinierte Schaltflächen akzeptieren nur { type: "button", id: string }
        {
            type: "button",
            id: "fullscreen",
        },
        // für vordefinierte richselect/colorpicker-Steuerelemente den passenden Typ setzen
        // Einträge mit nicht passendem Typ werden ignoriert
        {
            type: "richselect", // type: "button" würde hier ignoriert werden
            id: "mode",
        },
        // benutzerdefinierte Schaltflächen (richselect/colorpicker werden für benutzerdefinierte Steuerelemente nicht unterstützt)
        {
            type: "button",
            id: "some",
            label: "Some",
            handler: () => {/* benutzerdefinierte Logik */}
        },
        {
            type: "button",
            id: "other",
            icon: "wxo-help",
            label: "Other",
            tooltip: "Some tooltip",
            handler: () => {/* benutzerdefinierte Logik */}
        }
    ],
    // weitere Konfigurationseigenschaften
});
~~~

**Verwandtes Beispiel:** [RichText. Custom control and simplified toolbar](https://snippet.dhtmlx.com/wda202ih?tag=richtext)

### Toolbar ausblenden

Setzen Sie die Eigenschaft [`toolbar`](api/config/toolbar.md) auf `false`, um die Toolbar auszublenden:

~~~jsx {2}
new richtext.Richtext("#root", {
    toolbar: false,
    // weitere Konfigurationseigenschaften
});
~~~

## Menüleiste anzeigen

Aktivieren Sie die Eigenschaft [`menubar`](api/config/menubar.md), um die Menüleiste oberhalb der Toolbar anzuzeigen. Der Standardwert ist `false`.

~~~jsx {2}
new richtext.Richtext("#root", {
    menubar: true
    // weitere Konfigurationseigenschaften
});
~~~

## Initialen Inhalt festlegen

Verwenden Sie die Eigenschaft [`value`](api/config/value.md), um bei der Initialisierung initialen HTML-Inhalt in den Editor zu übergeben:

~~~jsx {2}
new richtext.Richtext("#root", {
    value: "<h1>some value</h1>"
    // weitere Konfigurationseigenschaften
});
~~~

Um den Inhalt nach der Initialisierung zu ersetzen oder ihn in einem Nicht-HTML-Format mit einem benutzerdefinierten Encoder zu laden, rufen Sie die Methode [`setValue()`](api/methods/set-value.md) auf.

## Initiale Sprache festlegen

Verwenden Sie die Eigenschaft [`locale`](api/config/locale.md), um bei der Initialisierung ein Lokalisierungsobjekt anzuwenden:

~~~jsx {2}
new richtext.Richtext("#root", {
    locale: richtext.locales.cn
    // weitere Konfigurationseigenschaften
});
~~~

Weitere Informationen und dynamisches Umschalten der Sprache mit [`setLocale()`](api/methods/set-locale.md) finden Sie im Handbuch [Lokalisierung](guides/localization.md).

## Im Vollbildmodus starten

Setzen Sie die Eigenschaft [`fullscreenMode`](api/config/fullscreen-mode.md) auf `true`, um den Editor bei der Initialisierung im Vollbildmodus zu öffnen. Der Standardwert ist `false`.

~~~jsx {2}
new richtext.Richtext("#root", {
    fullscreenMode: true
    // weitere Konfigurationseigenschaften
});
~~~

## Bild-Upload-URL konfigurieren

Übergeben Sie der Eigenschaft [`imageUploadUrl`](api/config/image-upload-url.md) eine URL, um den Server-Endpunkt für Bild-Uploads über die Toolbar festzulegen:

~~~jsx {2}
new richtext.Richtext("#root", {
    imageUploadUrl: "https://example.com/upload"
    // weitere Konfigurationseigenschaften
});
~~~

## Standardstile konfigurieren {#configure-default-styles}

Verwenden Sie die Eigenschaft [`defaultStyles`](api/config/default-styles.md), um Standardstile pro Blocktyp festzulegen.

Die Eigenschaft [`defaultStyles`](api/config/default-styles.md) hat folgende Typsignatur:

~~~jsx {}
defaultStyles?: boolean | {
    "*"?: { // gilt für alle Blöcke; legt gemeinsame Eigenschaften für jeden Block fest
        "font-family"?: string; // "Roboto"| "Arial" | "Georgia" | "Tahoma" | "Times New Roman" | "Verdana"
        "font-size"?: string; // "12px" | "14px" | "16px" | "18px" | "20px" | "24px" | "28px" | "32px" | "36px"
        color?: string;
        background?: string;
    },
    p?: {
        "font-family"?: string; // "Roboto"| "Arial" | "Georgia" | "Tahoma" | "Times New Roman" | "Verdana"
        "font-size"?: string; // "12px" | "14px" | "16px" | "18px" | "20px" | "24px" | "28px" | "32px" | "36px"
        color?: string;
        background?: string;
    },
    blockquote?: {
        "font-family"?: string; // "Roboto"| "Arial" | "Georgia" | "Tahoma" | "Times New Roman" | "Verdana"
        "font-size"?: string; // "12px" | "14px" | "16px" | "18px" | "20px" | "24px" | "28px" | "32px" | "36px"
        color?: string;
        background?: string;
    },
    h1?: {
        "font-family"?: string; // "Roboto"| "Arial" | "Georgia" | "Tahoma" | "Times New Roman" | "Verdana"
        "font-size"?: string; // "12px" | "14px" | "16px" | "18px" | "20px" | "24px" | "28px" | "32px" | "36px"
        color?: string;
        background?: string;
    },
    h2?: {
        "font-family"?: string; // "Roboto"| "Arial" | "Georgia" | "Tahoma" | "Times New Roman" | "Verdana"
        "font-size"?: string; // "12px" | "14px" | "16px" | "18px" | "20px" | "24px" | "28px" | "32px" | "36px"
        color?: string;
        background?: string;
    },
    h3?: {
        "font-family"?: string; // "Roboto"| "Arial" | "Georgia" | "Tahoma" | "Times New Roman" | "Verdana"
        "font-size"?: string; // "12px" | "14px" | "16px" | "18px" | "20px" | "24px" | "28px" | "32px" | "36px"
        color?: string;
        background?: string;
    },
    h4?: {
        "font-family"?: string; // "Roboto"| "Arial" | "Georgia" | "Tahoma" | "Times New Roman" | "Verdana"
        "font-size"?: string; // "12px" | "14px" | "16px" | "18px" | "20px" | "24px" | "28px" | "32px" | "36px"
        color?: string;
        background?: string;
    },
    h5?: {
        "font-family"?: string; // "Roboto"| "Arial" | "Georgia" | "Tahoma" | "Times New Roman" | "Verdana"
        "font-size"?: string; // "12px" | "14px" | "16px" | "18px" | "20px" | "24px" | "28px" | "32px" | "36px"
        color?: string;
        background?: string;
    },
    h6?: {
        "font-family"?: string; // "Roboto"| "Arial" | "Georgia" | "Tahoma" | "Times New Roman" | "Verdana"
        "font-size"?: string; // "12px" | "14px" | "16px" | "18px" | "20px" | "24px" | "28px" | "32px" | "36px"
        color?: string;
        background?: string;
    }
};
~~~

Die Eigenschaft [`defaultStyles`](api/config/default-styles.md) wendet kein CSS auf die betroffenen Blöcke an. Passende CSS-Stile müssen separat angewendet werden:

```html title="index.html"
<div id="root"></div>
```

```jsx {2-9} title="index.js"
const editor = new richtext.Richtext("#root", {
    defaultStyles: {
        h2: { 
            "font-family": "Roboto",
            "font-size": "28px",
            color: "purple",
            background: "#FFC0CB"
        }
    }
});
```

```css title="index.css"
#root h2 {
    font-family: Roboto;
    font-size: 28px;
    color: purple;
    background: #FFC0CB;
}
```

In diesem Beispiel verwenden alle `h2`-Blöcke die Schriftfamilie `"Roboto"` mit 28px, lila Text auf rosa Hintergrund. Die passende CSS-Regel wendet dieselben Werte auf die gerenderten `h2`-Elemente an.

**Verwandtes Beispiel:** [RichText. Changing the default value for typography (font, font size, etc.)](https://snippet.dhtmlx.com/6u3ti01s?tag=richtext)

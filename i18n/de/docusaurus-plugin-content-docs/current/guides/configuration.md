---
sidebar_label: Konfiguration
title: Konfiguration
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie alles über die Konfiguration. Lesen Sie Entwicklerhandbücher und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus, und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText herunter.
---

# Konfiguration {#configuration}

Sie können das Erscheinungsbild und das Verhalten von RichText mit den folgenden Eigenschaften konfigurieren:

- [`menubar`](api/config/menubar.md) — Menüleiste oben ein- oder ausblenden
- [`toolbar`](api/config/toolbar.md) — Sichtbarkeit der Symbolleiste und Schaltflächen konfigurieren
- [`fullscreenMode`](api/config/fullscreen-mode.md) — Editor im Vollbildmodus starten
- [`layoutMode`](api/config/layout-mode.md) — zwischen dem Layout `"classic"` und `"document"` wechseln
- [`value`](api/config/value.md) — anfänglichen HTML-Inhalt festlegen
- [`locale`](api/config/locale.md) — ein Lokalisierungsobjekt bei der Initialisierung anwenden
- [`defaultStyles`](api/config/default-styles.md) — Standardstile für bestimmte Blocktypen festlegen
- [`imageUploadUrl`](api/config/image-upload-url.md) — Endpunkt für Bild-Uploads festlegen
- [`triggers`](api/config/triggers.md) — @Erwähnungen, #Tags und benutzerdefinierte Dropdown-Trigger aktivieren (siehe Handbuch [Erwähnungen und Tags](guides/mentions_and_tags.md))

## Layout-Modi {#layout-modes}

RichText unterstützt zwei Layout-Modi für den Bearbeitungsbereich:

- `"classic"` — der Bearbeitungsbereich füllt die gesamte Seite aus

<div className="img_border">
![DHTMLX RichText-Editor im klassischen Layout-Modus](/img/richtext/classic_mode.png)
</div>

- `"document"` — der Bearbeitungsbereich imitiert eine Dokumentseite

<div className="img_border">
![DHTMLX RichText-Editor im Dokumentmodus](/img/richtext/document_mode.png)
</div>

Legen Sie die Eigenschaft [`layoutMode`](api/config/layout-mode.md) bei der Initialisierung fest, um den Modus auszuwählen:

~~~jsx
const editor = new richtext.Richtext("#root", {
    layoutMode: "document"
});
~~~

## Symbolleiste {#toolbar}

Die RichText-Symbolleiste gruppiert Steuerelemente in mehrere Blöcke, die Sie anpassen können.

### Standardmäßige Symbolleistensteuerelemente {#default-toolbar-controls}

Sie können die folgenden Schaltflächen und Steuerelemente in die RichText-Symbolleiste aufnehmen:

| Schaltfläche        | Beschreibung                                                                |
|---------------------|-----------------------------------------------------------------------------|
| `undo`              | Macht die letzte Benutzeraktion rückgängig                                  |
| `redo`              | Stellt die zuvor rückgängig gemachte Aktion wieder her                      |
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
| `background-color`  | Ändert die Hintergrundfarbe (Hervorhebung) des Textes                       |
| `align`             | Legt die Textausrichtung fest (links, zentriert, rechts, Blocksatz)         |
| `indent`            | Erhöht den Absatzeinzug                                                     |
| `outdent`           | Verringert den Absatzeinzug                                                 |
| `line-height`       | Passt den Zeilenabstand (Zeilenhöhe) an                                     |
| `quote`             | Formatiert den Text als Blockzitat                                          |
| `bulleted-list`     | Erstellt eine Liste mit Aufzählungszeichen                                  |
| `numbered-list`     | Erstellt eine nummerierte Liste                                             |
| `link`              | Fügt einen Hyperlink ein oder bearbeitet ihn                                |
| `image`             | Fügt ein Bild ein                                                           |
| `line`              | Fügt eine horizontale Linie ein                                             |
| `clear`             | Entfernt alle Formatierungen aus dem ausgewählten Text                      |
| `print`             | Öffnet den Druckdialog                                                      |
| `fullscreen`        | Schaltet den Vollbildmodus um                                               |
| `mode`              | Wechselt zwischen den beiden Layout-Modi: `classic` und `document`          |
| `shortcuts`         | Zeigt eine Liste der verfügbaren Tastenkombinationen an                     |
| `separator`         | Fügt einen visuellen Trenner zwischen Steuerelementen ein                   |

Verwenden Sie die Eigenschaft [`toolbar`](api/config/toolbar.md), um die Symbolleiste als Array von Steuerelement-Namensstrings zu definieren:

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
        // andere Schaltflächen
    ],
    // andere Konfigurationseigenschaften
});
~~~

**Verwandtes Beispiel:** [RichText. Benutzerdefiniertes Steuerelement und vereinfachte Symbolleiste](https://snippet.dhtmlx.com/wda202ih?tag=richtext)

### Benutzerdefinierte Symbolleistensteuerelemente hinzufügen {#add-custom-toolbar-controls}

Übergeben Sie ein Objekt an das [`toolbar`](api/config/toolbar.md)-Array mit einem der folgenden Felder:

- `type: string` — erforderlich. Steuerelementtyp: `"button"`, `"richselect"` oder `"colorpicker"`
- `id: string` — optional. Benutzerdefinierte Steuerelement-ID; darf nicht mit bestehenden Steuerelement-IDs übereinstimmen
- `icon: string` — optional. Symbol-Klassenname; wird mit dem Label kombiniert
- `label: string` — optional. Schaltflächenbeschriftung; wird mit dem Symbol kombiniert
- `tooltip: string` — optional. Tooltip, der beim Hover erscheint; standardmäßig wird `label` verwendet, wenn nicht festgelegt
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
        // Einträge mit einem nicht passenden Typ werden ignoriert
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
    // andere Konfigurationseigenschaften
});
~~~

**Verwandtes Beispiel:** [RichText. Benutzerdefiniertes Steuerelement und vereinfachte Symbolleiste](https://snippet.dhtmlx.com/wda202ih?tag=richtext)

### Symbolleiste ausblenden {#hide-the-toolbar}

Setzen Sie die Eigenschaft [`toolbar`](api/config/toolbar.md) auf `false`, um die Symbolleiste auszublenden:

~~~jsx {2}
new richtext.Richtext("#root", {
    toolbar: false,
    // andere Konfigurationseigenschaften
});
~~~

## Menüleiste anzeigen {#show-the-menubar}

Aktivieren Sie die Eigenschaft [`menubar`](api/config/menubar.md), um die obere Menüleiste über der Symbolleiste anzuzeigen. Der Standardwert ist `false`.

~~~jsx {2}
new richtext.Richtext("#root", {
    menubar: true
    // andere Konfigurationseigenschaften
});
~~~

## Anfänglichen Inhalt festlegen {#set-the-initial-content}

Verwenden Sie die Eigenschaft [`value`](api/config/value.md), um bei der Initialisierung anfänglichen HTML-Inhalt in den Editor zu übergeben:

~~~jsx {2}
new richtext.Richtext("#root", {
    value: "<h1>some value</h1>"
    // andere Konfigurationseigenschaften
});
~~~

Um den Inhalt nach der Initialisierung zu ersetzen oder ihn in einem Nicht-HTML-Format mit einem benutzerdefinierten Encoder zu laden, rufen Sie die Methode [`setValue()`](api/methods/set-value.md) auf.

## Anfängliche Sprache festlegen {#set-the-initial-locale}

Verwenden Sie die Eigenschaft [`locale`](api/config/locale.md), um bei der Initialisierung ein Lokalisierungsobjekt anzuwenden:

~~~jsx {2}
new richtext.Richtext("#root", {
    locale: richtext.locales.cn
    // andere Konfigurationseigenschaften
});
~~~

Weitere Informationen und dynamisches Umschalten der Sprache mit [`setLocale()`](api/methods/set-locale.md) finden Sie im Handbuch [Lokalisierung](guides/localization.md).

## Im Vollbildmodus starten {#start-in-fullscreen-mode}

Setzen Sie die Eigenschaft [`fullscreenMode`](api/config/fullscreen-mode.md) auf `true`, um den Editor bei der Initialisierung im Vollbildmodus zu öffnen. Der Standardwert ist `false`.

~~~jsx {2}
new richtext.Richtext("#root", {
    fullscreenMode: true
    // andere Konfigurationseigenschaften
});
~~~

## Bildeinfügung konfigurieren {#configure-image-insertion}

RichText unterstützt zwei Modi zum Einfügen von Bildern über die Symbolleiste, die Menüleiste, Einfügen oder Drag-and-Drop. Der Modus wird automatisch anhand der Eigenschaft [`imageUploadUrl`](api/config/image-upload-url.md) ausgewählt.

### Bilder auf einen Server hochladen {#upload-images-to-a-server}

Übergeben Sie eine URL an die Eigenschaft [`imageUploadUrl`](api/config/image-upload-url.md), um jedes eingefügte Bild an Ihren Endpunkt hochzuladen. RichText sendet die Datei als `multipart/form-data` (Feldname `upload`) und fügt die vom Server zurückgegebene URL ein:

~~~jsx {2}
new richtext.Richtext("#root", {
    imageUploadUrl: "https://example.com/upload"
    // andere Konfigurationseigenschaften
});
~~~

### Bilder inline als Base64 einfügen {#insert-images-inline-as-base64}

Lassen Sie [`imageUploadUrl`](api/config/image-upload-url.md) weg (oder setzen Sie es auf einen leeren String), um Bilder direkt als Base64-Daten-URLs in den Dokumentinhalt einzubetten. Es ist kein Server erforderlich:

~~~jsx {2}
new richtext.Richtext("#root", {
    // imageUploadUrl ist nicht gesetzt, Bilder werden inline eingefügt
    // andere Konfigurationseigenschaften
});
~~~

Inline-Bilder, die größer als 1024×800 sind, werden in reduzierter Größe angezeigt (die Attribute `width`/`height` werden auf diese Grenzen begrenzt), aber die eingebetteten Bytes sind die ursprüngliche Datei in voller Auflösung — der Client skaliert sie nicht herunter oder kodiert sie neu.

:::note[Hinweis]
Inline-Bilder (Base64) bleiben beim integrierten DOCX-/PDF-[Export](api/events/export.md) nicht erhalten. Wenn Sie auf den Export angewiesen sind, geben Sie eine `imageUploadUrl` an, damit Bilder auf einen externen Speicherort verweisen.
:::

Unter [Arbeiten mit dem Server](guides/working_with_server.md) finden Sie den vollständigen Request/Response-Vertrag, den der Upload-Endpunkt implementieren muss, sowie eine ausführlichere Beschreibung des Inline-Bild-Fallbacks.

## Standardstile konfigurieren {#configure-default-styles}

Verwenden Sie die Eigenschaft [`defaultStyles`](api/config/default-styles.md), um Standardstile pro Blocktyp festzulegen.

Die Eigenschaft [`defaultStyles`](api/config/default-styles.md) hat die folgende Typsignatur:

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

Die Eigenschaft [`defaultStyles`](api/config/default-styles.md) wendet kein CSS auf die betroffenen Blöcke an. Wenden Sie passende CSS-Stile separat an:

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

In diesem Beispiel verwenden alle `h2`-Blöcke die Schriftfamilie `"Roboto"` mit 28px, lila Text und rosa Hintergrund. Die passende CSS-Regel wendet dieselben Werte auf die gerenderten `h2`-Elemente an.

**Verwandtes Beispiel:** [RichText. Standardwert für Typografie ändern (Schriftart, Schriftgröße usw.)](https://snippet.dhtmlx.com/6u3ti01s?tag=richtext)

---
sidebar_label: Konfiguration
title: Konfiguration
description: In der Dokumentation der DHTMLX JavaScript RichText Bibliothek erfahren Sie mehr über die Konfiguration. Durchstöbern Sie Entwicklerhandbücher und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX RichText herunter.
---

# Konfiguration

RichText kann über seine API so eingerichtet werden, dass Aussehen und Verhalten Ihren Anforderungen entsprechen. Die verfügbaren Optionen ermöglichen es Ihnen:

- Die **Menüleiste** mit der [`menubar`](api/config/menubar.md) Eigenschaft anzuzeigen oder auszublenden
- Die **Toolbar** über die [`toolbar`](api/config/toolbar.md) Eigenschaft einzurichten
- Den **Vollbildmodus** mit der [`fullscreenMode`](api/config/fullscreen-mode.md) Eigenschaft zu aktivieren
- Das **Layout** zwischen „classic" und „document" Modus mit der [`layoutMode`](api/config/layout-mode.md) Eigenschaft umzuschalten
- Einen **Anfangswert** mit der [`value`](api/config/value.md) Eigenschaft festzulegen
- Eine **anfängliche Sprache** mit der [`locale`](api/config/locale.md) Eigenschaft auszuwählen
- **Anfangsstile** mit der [`defaultStyles`](api/config/default-styles.md) Eigenschaft anzuwenden

## Layout-Modi

Der RichText-Editor bietet zwei Layout-Modi, aus denen Sie wählen können, um in einer für Ihre Inhalte passenden Umgebung zu arbeiten:

- **"classic"**

import classic_mode from '@site/static/img/richtext/classic_mode.png';

<img
  src={classic_mode}
  alt="Klassischer Modus"
  className="img_border"
/>

- **"document"**

import document_mode from '@site/static/img/richtext/document_mode.png';

<img
  src={document_mode}
  alt="Dokumentenmodus"
  className="img_border"
/>

Um einen Modus auszuwählen, setzen Sie einfach die [`layoutMode`](api/config/layout-mode.md) Eigenschaft in der RichText-Konfiguration, wenn Sie die Komponente initialisieren:

~~~jsx
const editor = new richtext.Richtext("#root", {
    layoutMode: "document"
});
~~~

## Toolbar

Die RichText-Toolbar besteht aus mehreren Gruppen von Steuerelementen, die Sie nach Ihren Anforderungen anpassen können.

### Standardmäßige Toolbar-Steuerelemente

Sie können folgende Buttons und Steuerelemente in der RichText-Toolbar verwenden:

| Button              | Beschreibung                                                                 |
|---------------------|------------------------------------------------------------------------------|
| `undo`              | Macht die letzte Benutzeraktion rückgängig                                   |
| `redo`              | Stellt die zuvor rückgängig gemachte Aktion wieder her                       |
| `style`             | Auswahl von Textstilen (z.B. Überschriften, Absatz usw.)                     |
| `font-family`       | Ändert die Schriftart des markierten Textes                                  |
| `font-size`         | Passt die Schriftgröße des markierten Textes an                              |
| `bold`              | Setzt den markierten Text fett                                               |
| `italic`            | Setzt den markierten Text kursiv                                             |
| `underline`         | Unterstreicht den markierten Text                                            |
| `strike`            | Durchstreicht den markierten Text                                            |
| `subscript`         | Formatiert den Text als Tiefgestellt                                         |
| `superscript`       | Formatiert den Text als Hochgestellt                                         |
| `text-color`        | Ändert die Textfarbe                                                         |
| `background-color`  | Ändert die Hintergrundfarbe (Markierung) des Textes                          |
| `align`             | Setzt die Textausrichtung (links, zentriert, rechts, Blocksatz)              |
| `indent`            | Erhöht die Einrückung des Absatzes                                           |
| `outdent`           | Verringert die Einrückung des Absatzes                                       |
| `line-height`       | Passt den Zeilenabstand an                                                   |
| `quote`             | Formatiert den Text als Blockzitat                                           |
| `bulleted-list`     | Erstellt eine Aufzählung                                                     |
| `numbered-list`     | Erstellt eine nummerierte Liste                                              |
| `link`              | Fügt einen Hyperlink ein oder bearbeitet ihn                                 |
| `image`             | Fügt ein Bild ein                                                            |
| `line`              | Fügt eine horizontale Linie ein                                              |
| `clear`             | Entfernt alle Formatierungen vom markierten Text                             |
| `print`             | Öffnet den Druckdialog                                                       |
| `fullscreen`        | Schaltet den Vollbildmodus um                                                |
| `mode`              | Wechselt zwischen 2 Ansichtsmodi: Classic/Document                           |
| `shortcuts`         | Zeigt eine Liste der verfügbaren Tastenkombinationen an                      |
| `separator`         | Fügt einen visuellen Trenner zwischen Steuerelementen ein                    |

Das Layout der Toolbar wird mit der [`toolbar`](api/config/toolbar.md) Eigenschaft festgelegt, die ein Array von Strings ist, das die gewünschten Steuerelemente benennt.

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
        // weitere Buttons
    ],
    // weitere Konfigurationseigenschaften
});
~~~

**Beispiel:** [RichText. Benutzerdefiniertes Steuerelement und vereinfachte Toolbar](https://snippet.dhtmlx.com/wda202ih?tag=richtext)

### Benutzerdefinierte Toolbar-Steuerelemente

Wenn Sie eigene Steuerelemente hinzufügen möchten, können Sie Objekte in der [`toolbar`](api/config/toolbar.md) Eigenschaft mit folgenden Optionen verwenden:

- `type` - (erforderlich) legt den Typ des benutzerdefinierten Steuerelements fest. Mögliche Werte: `"button"`, `"richselect"`, `"colorpicker"`
- `id` - (optional) eine ID für das benutzerdefinierte Steuerelement (sollte nicht mit integrierten IDs kollidieren)
- `label` - (optional) ein Button-Label (kann mit einem Icon kombiniert werden)
- `tooltip` - (optional) ein Tooltip beim Überfahren mit der Maus (falls nicht gesetzt, wird der Wert von "label" verwendet)
- `css` - (optional) ein CSS-Klassenname für das Steuerelement (Standard: wx-primary, wx-secondary)
- `handler` - (optional) eine Callback-Funktion, die beim Klick auf den Button ausgeführt wird

~~~jsx {6-32}
new richtext.Richtext("#root", {
    toolbar: [
        // Buttons (Strings stehen nur für Buttons)
        "bold",
        "italic",
        // Vorgefertigte Buttons (für diese können keine weiteren Optionen definiert werden, z.B. keine Labels, Tooltips, Optionen usw.), daher nur ({ type: "button", id: string })
        {
            type: "button",
            id: "fullscreen",
        },
        // Der Nutzer muss den korrekten Typ angeben, wenn er ein vordefiniertes Steuerelement nutzen möchte (z.B. richselect/colorpicker)
        // Nicht passende Typen werden ignoriert (nicht zur Toolbar hinzugefügt)
        {
            type: "richselect", // type: "button" - falsch, wird ignoriert
            id: "mode",
        },
        // Benutzerdefinierte Buttons (unterstützte Optionen siehe unten)
        // Es können aktuell nur benutzerdefinierte Buttons definiert werden (kein Support für richselect/colorpicker)
        {
            type: "button",
            id: "some",
            label: "Some",
            handler: () => {/* eigene Logik */}
        },
        {
            type: "button",
            id: "other",
            icon: "wxo-help",
            label: "Other",
            tooltip: "Some tooltip",
            handler: () => {/* eigene Logik */}
        }
    ],
    // weitere Konfigurationseigenschaften
});
~~~

**Beispiel:** [RichText. Benutzerdefiniertes Steuerelement und vereinfachte Toolbar](https://snippet.dhtmlx.com/wda202ih?tag=richtext)

### Toolbar ausblenden

Um die Toolbar auszublenden, setzen Sie die [`toolbar`](api/config/toolbar.md) Eigenschaft einfach auf `false`:

~~~jsx {2}
new richtext.Richtext("#root", {
    toolbar: false,
    // weitere Konfigurationseigenschaften
});
~~~

## Standardstile

Standardwerte für bestimmte Blocktypen im Editor können mit der [`defaultStyles`](api/config/default-styles.md) Eigenschaft festgelegt werden.

~~~jsx {}
defaultStyles?: boolean | {
    "*"?: { // wirkt sich auf alle Blöcke aus, gemeinsame Eigenschaften für alle diese Blöcke können gesetzt werden
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

Die `defaultStyles`-Eigenschaft wendet tatsächlich kein CSS auf die Blöcke an - sie legt nur die Stilwerte fest. Sie müssen die CSS-Stile separat hinzufügen:

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

Hier erhalten alle `h2`-Blöcke die Schriftfamilie "Roboto", eine Schriftgröße von 28px, und auch die Vorder- und Hintergrundfarben werden entsprechend gesetzt. Die CSS-Regeln werden auf die `h2`-Blöcke angewendet.

**Beispiel:** [RichText. Änderung des Standardwerts für Typografie (Schrift, Schriftgröße usw.)](https://snippet.dhtmlx.com/6u3ti01s?tag=richtext)

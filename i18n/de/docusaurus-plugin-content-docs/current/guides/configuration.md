---
sidebar_label: Konfiguration
title: Konfiguration
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie alles über die Konfiguration. Lesen Sie Entwickleranleitungen und API-Referenz, sehen Sie sich Code-Beispiele und Live-Demos an und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX RichText herunter.
---

# Konfiguration

Sie können das Erscheinungsbild und die Funktionalität von RichText über die entsprechende API konfigurieren. Die verfügbaren Parameter ermöglichen Ihnen:

- Die **Menüleiste** ein- oder auszublenden – über die Eigenschaft [`menubar`](api/config/menubar.md)
- Die **Toolbar** zu konfigurieren – über die Eigenschaft [`toolbar`](api/config/toolbar.md)
- Den **Vollbildmodus** zu aktivieren – über die Eigenschaft [`fullscreenMode`](api/config/fullscreen-mode.md)
- Das **Layout** zwischen den Modi „classic" und „document" umzuschalten – über die Eigenschaft [`layoutMode`](api/config/layout-mode.md)
- Einen **Anfangswert** festzulegen – über die Eigenschaft [`value`](api/config/value.md)
- Eine **Ausgangssprache** festzulegen – über die Eigenschaft [`locale`](api/config/locale.md)
- **Standardstile** anzuwenden – über die Eigenschaft [`defaultStyles`](api/config/default-styles.md)

## Layout-Modi {#layout-modes}

Es gibt zwei Layout-Modi des RichText-Editors, zwischen denen Sie wählen können, um den besten Arbeitsbereich für die Erstellung Ihrer Inhalte zu finden:

- **"classic"**

<div className="img_border">
![Klassischer Modus](./../assets/richtext/classic_mode.png)
</div>

- **"document"**

<div className="img_border">
![Dokumentenmodus](./../assets/richtext/document_mode.png)
</div>

Um den gewünschten Modus festzulegen, müssen Sie ihn in der Eigenschaft [`layoutMode`](api/config/layout-mode.md) des RichText-Konfigurationsobjekts bei der Initialisierung der Komponente definieren:

~~~jsx
const editor = new richtext.Richtext("#root", {
    layoutMode: "document"
});
~~~

## Toolbar {#toolbar}

Die RichText-Toolbar besteht aus mehreren Steuerungsblöcken, die Sie Ihren Anforderungen entsprechend anpassen können.

### Standard-Toolbar-Steuerelemente {#default-toolbar-controls}

Sie können die folgenden Schaltflächen und Steuerelemente in der RichText-Toolbar angeben:

| Schaltfläche        | Beschreibung                                                                        |
|---------------------|-------------------------------------------------------------------------------------|
| `undo`              | Macht die zuletzt ausgeführte Benutzeraktion rückgängig                             |
| `redo`              | Stellt die zuletzt rückgängig gemachte Aktion wieder her                            |
| `style`             | Ermöglicht die Auswahl von Textstilen (z. B. Überschriften, Absatz usw.)            |
| `font-family`       | Ändert die Schriftart des markierten Textes                                         |
| `font-size`         | Passt die Größe des markierten Textes an                                            |
| `bold`              | Wendet Fettformatierung auf den markierten Text an                                  |
| `italic`            | Wendet Kursivformatierung auf den markierten Text an                                |
| `underline`         | Unterstreicht den markierten Text                                                   |
| `strike`            | Wendet Durchstreichformatierung an                                                  |
| `subscript`         | Formatiert den Text als tiefgestellt                                                |
| `superscript`       | Formatiert den Text als hochgestellt                                                |
| `text-color`        | Ändert die Textfarbe                                                                |
| `background-color`  | Ändert die Hintergrundfarbe (Hervorhebung) des Textes                               |
| `align`             | Legt die Textausrichtung fest (links, zentriert, rechts, Blocksatz)                 |
| `indent`            | Erhöht den Absatzeinzug                                                             |
| `outdent`           | Verringert den Absatzeinzug                                                         |
| `line-height`       | Passt den Zeilenabstand (Zeilenhöhe) an                                             |
| `quote`             | Formatiert den Text als Blockzitat                                                  |
| `bulleted-list`     | Erstellt eine Aufzählungsliste                                                      |
| `numbered-list`     | Erstellt eine nummerierte Liste                                                     |
| `link`              | Fügt einen Hyperlink ein oder bearbeitet ihn                                        |
| `image`             | Fügt ein Bild ein                                                                   |
| `line`              | Fügt eine horizontale Linie ein                                                     |
| `clear`             | Entfernt alle Formatierungen des markierten Textes                                  |
| `print`             | Öffnet den Druckdialog                                                              |
| `fullscreen`        | Schaltet den Vollbildmodus ein oder aus                                             |
| `mode`              | Wechselt zwischen 2 Anzeigemodi: Classic / Document                                 |
| `shortcuts`         | Zeigt eine Liste der verfügbaren Tastenkombinationen an                             |
| `separator`         | Fügt einen visuellen Trenner zwischen Steuerelementen ein                           |

Die Toolbar-Struktur wird über die Eigenschaft [`toolbar`](api/config/toolbar.md) definiert, die ein Array mit Zeichenketten enthält, welche die Namen der Steuerelemente darstellen.

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

### Benutzerdefinierte Toolbar-Steuerelemente {#custom-toolbar-controls}

Sie können in der Eigenschaft [`toolbar`](api/config/toolbar.md) auch benutzerdefinierte Steuerelemente als Objekte mit folgenden Parametern angeben:

- `type` – (erforderlich) gibt den Typ des benutzerdefinierten Steuerelements an. Folgende Typen sind verfügbar: `"button"`, `"richselect"`, `"colorpicker"`
- `id` – (optional) eine benutzerdefinierte Steuerelement-ID (darf nicht mit einer vorhandenen ID übereinstimmen)
- `label` – (optional) eine Schaltflächenbeschriftung (wird zusammen mit einem Symbol angezeigt)
- `tooltip` – (optional) ein Tooltip, der beim Darüberfahren angezeigt wird (wenn nicht angegeben, wird der Wert aus „label" verwendet)
- `css` – (optional) ein CSS-Klassenname, der dem Steuerelement zugewiesen wird (unterstützte Standardklassen: wx-primary, wx-secondary)
- `handler` – (optional) eine Callback-Funktion, die beim Klicken auf die Schaltfläche ausgeführt wird

~~~jsx {6-32}
new richtext.Richtext("#root", {
    toolbar: [
        // Schaltflächen (Zeichenketten repräsentieren nur Schaltflächen)
        "bold",
        "italic",
        // vordefinierte Schaltflächen (Benutzer kann keine weiteren Optionen definieren (keine Beschriftungen, Tooltips, Optionen usw.), daher nur ({ type: "button", id: string })
        {
            type: "button",
            id: "fullscreen",
        },
        // Benutzer muss den richtigen Typ angeben, wenn er ein vordefiniertes Steuerelement verwenden möchte (z. B. richselect/colorpicker)
        // nicht übereinstimmende Typen werden ignoriert (nicht zur Toolbar hinzugefügt)
        {
            type: "richselect", // type: "button" - falsch, wird ignoriert
            id: "mode",
        },
        // benutzerdefinierte Schaltflächen (unterstützte Optionen siehe unten)
        // Benutzer kann nur benutzerdefinierte Schaltflächen definieren (kein richselect/colorpicker-Support derzeit)
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

### Toolbar ausblenden {#hide-toolbar}

Wenn Sie die Toolbar ausblenden möchten, setzen Sie die Eigenschaft [`toolbar`](api/config/toolbar.md) wie folgt auf `false`:

~~~jsx {2}
new richtext.Richtext("#root", {
    toolbar: false,
    // weitere Konfigurationseigenschaften
});
~~~

## Standardstile {#default-styles}

Sie können mithilfe der Eigenschaft [`defaultStyles`](api/config/default-styles.md) Standardstilwerte für bestimmte Blocktypen im Editor festlegen.

~~~jsx {}
defaultStyles?: boolean | {
    "*"?: { // betrifft alle Blöcke und ermöglicht das Festlegen gemeinsamer Eigenschaften für alle diese Blöcke
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

Die Eigenschaft `defaultStyles` setzt KEIN tatsächliches CSS auf die betroffenen Blöcke. CSS-Stile müssen separat angewendet werden:

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

In diesem Beispiel werden alle `h2`-Blöcke der Schriftfamilie `"Roboto"` mit einer Schriftgröße von 28px zugewiesen, wobei sowohl die Vordergrund- als auch die Hintergrundfarbe geändert werden. CSS-Stile werden den `h2`-Blöcken ebenfalls zugewiesen.

**Verwandtes Beispiel:** [RichText. Changing the default value for typography (font, font size, etc.)](https://snippet.dhtmlx.com/6u3ti01s?tag=richtext)

---
sidebar_label: toolbar
title: toolbar Config
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie mehr über die toolbar-Konfiguration. Lesen Sie Entwicklerhandbücher und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText herunter.
---

# toolbar

### Beschreibung

@short: Optional. Aktiviert die Toolbar und ermöglicht es Benutzern, die darin angezeigten Schaltflächen festzulegen und zu konfigurieren

### Verwendung

~~~jsx {}
toolbar?: boolean | Array<string | { id: string, type: string, label?: string, tooltip?: string, css?: string, handler?: () => any }>;
~~~

#### Verfügbare Schaltflächen in der Toolbar

In der RichText-Toolbar können folgende Schaltflächen angegeben werden:

| Schaltfläche        | Beschreibung                                                                 |
|---------------------|-----------------------------------------------------------------------------|
| `undo`              | Macht die letzte Benutzeraktion rückgängig.                                 |
| `redo`              | Stellt die zuletzt rückgängig gemachte Aktion wieder her.                   |
| `style`             | Ermöglicht die Auswahl von Textstilen (z. B. Überschriften, Absatz usw.).   |
| `font-family`       | Ändert die Schriftart des markierten Textes.                                |
| `font-size`         | Passt die Schriftgröße des markierten Textes an.                            |
| `bold`              | Wendet Fettformatierung auf den markierten Text an.                         |
| `italic`            | Wendet Kursivformatierung auf den markierten Text an.                       |
| `underline`         | Unterstreicht den markierten Text.                                          |
| `strike`            | Wendet Durchstreichformatierung an.                                         |
| `subscript`         | Formatiert den Text als tiefgestellten Text.                                |
| `superscript`       | Formatiert den Text als hochgestellten Text.                                |
| `text-color`        | Ändert die Textfarbe.                                                       |
| `background-color`  | Ändert die Hintergrundfarbe (Hervorhebung) des Textes.                      |
| `align`             | Legt die Textausrichtung fest (links, zentriert, rechts, Blocksatz).        |
| `indent`            | Erhöht den Einzug des Textblocks.                                           |
| `outdent`           | Verringert den Einzug des Absatzes.                                         |
| `line-height`       | Passt den Zeilenabstand (Zeilenhöhe) an.                                    |
| `quote`             | Formatiert den Text als Blockzitat.                                         |
| `bulleted-list`     | Erstellt eine Aufzählungsliste.                                             |
| `numbered-list`     | Erstellt eine nummerierte Liste.                                            |
| `link`              | Fügt einen Hyperlink ein.                                                   |
| `image`             | Fügt ein Bild ein.                                                          |
| `line`              | Fügt eine horizontale Linie ein.                                            |
| `clear`             | Entfernt alle Formatierungen aus dem markierten Text.                       |
| `print`             | Öffnet den Druckdialog.                                                     |
| `fullscreen`        | Schaltet den Vollbildmodus um.                                              |
| `mode`              | Wechselt zwischen [Layout-Modi](api/config/layout-mode.md) (classic/document)|
| `shortcuts`         | Zeigt eine Liste der verfügbaren Tastenkombinationen an.                    |
| `separator`         | Fügt ein visuelles Trennzeichen zwischen Toolbar-Gruppen ein.               |

Mit diesen Zeichenfolgen können Sie die Toolbar-Schaltflächen wie folgt konfigurieren:

~~~jsx {2-7}
new richtext.Richtext("#root", {
    toolbar: [
        "bold",
        "italic",
        "separator",
        // other buttons
    ],
    // other configuration properties
});
~~~

#### Benutzerdefinierte Schaltflächen in der Toolbar

Benutzerdefinierte Schaltflächen können als Objekte mit folgenden Parametern angegeben werden:

- `type` - (erforderlich) gibt einen benutzerdefinierten Steuerelementtyp an. Folgende Typen sind verfügbar: `"button"`, `"richselect"`, `"colorpicker"`
- `id` - (optional) eine benutzerdefinierte Steuerelement-ID (darf nicht mit einer vorhandenen Steuerelement-ID übereinstimmen)
- `label` - (optional) eine Schaltflächenbeschriftung (wird mit dem Symbol kombiniert)
- `tooltip` - (optional) ein Tooltip, der beim Darüberfahren angezeigt wird (falls nicht angegeben, wird der Wert aus "label" verwendet)
- `css` - (optional) ein CSS-Klassenname, der dem Steuerelement zugewiesen wird (standardmäßig unterstützte Klassen: wx-primary, wx-secondary)
- `handler` - (optional) eine callback-Funktion, die beim Klicken auf die Schaltfläche ausgeführt wird

~~~jsx {6-32}
new richtext.Richtext("#root", {
    toolbar: [
        // buttons (strings represent buttons only)
        "bold",
        "italic",
        // predefined buttons (user cannot define any other options for these (no labels, tooltips, options, etc.), so only ({ type: "button", id: string })
        {
            type: "button",
            id: "fullscreen",
        },
        // user must specify the correct type if they want to use a predefined control (e.g. richselect/colorpicker)
        // non-matching types will be ignored (not added to the toolbar)
        {
            type: "richselect", // type: "button" - incorrect, will be ignored
            id: "mode",
        },
        // custom buttons (supported options are below)
        // user can only define custom buttons (no richselect/colorpicker support atm)
        {
            type: "button",
            id: "some",
            label: "Some",
            handler: () => {/* custom logic */}
        },
        {
            type: "button",
            id: "other",
            icon: "wxo-help",
            label: "Other",
            tooltip: "Some tooltip",
            handler: () => {/* custom logic */}
        }
    ],
    // other configuration properties
});
~~~

#### Toolbar ausblenden

Um die Toolbar auszublenden, setzen Sie die Eigenschaft `toolbar` wie folgt auf `false`:

~~~jsx {2}
new richtext.Richtext("#root", {
    toolbar: false
    // other configuration properties
});
~~~

### Standardkonfiguration

~~~jsx
const defaultToolbarButtons = {
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
};
~~~

:::tip[Hinweis]
Die Standard-Toolbar-Steuerelemente werden vom RichText-Widget exportiert und sind über `richtext.defaultToolbarButtons` zugänglich.

```jsx{4}
// initialize RichText
new richtext.Richtext("#root", {
    toolbar: [
        ...richtext.defaultToolbarButtons,
        {
            type: "button",
            id: "btn1", // button id (cannot overlap with existing button ids if you want to apply custom logic)
            icon: "wxo-help", // button icon (combines with label)
            css: "rounded", // css class name assigned to the control (default supported classes: wx-primary, wx-secondary)
            label: "Custom button", // button label (combines with icon)
            tooltip: "Some tooltip", // tooltip displayed on hover (if not specified, uses the value from "label")
        }
    ]
    // other configuration properties
});
```
:::

### Beispiel

~~~jsx {3-18}
// initialize RichText
new richtext.Richtext("#root", {
    toolbar: [
        "bold",
        "italic",
        "separator",
        // custom buttons (all supported options are used below)
        // user can only define custom buttons (no richselect/colorpicker support at the moment)
        {
            type: "button",
            id: "btn1", // button id (cannot overlap with existing button ids if you want to apply custom logic)
            icon: "wxo-help", // button icon (combines with label)
            css: "rounded", // css class name assigned to the control (default supported classes: wx-primary, wx-secondary)
            label: "Custom button", // button label (combines with icon)
            tooltip: "Some tooltip", // tooltip displayed on hover (if not specified, uses the value from "label")
            handler: () => ..., // custom logic attached to this button
        }
    ]
    // other configuration properties
});
~~~

**Change log:** The property was added in v2.0

**Related articles:** [Configuration](guides/configuration.md)

**Related sample:** [RichText. Custom control and simplified toolbar](https://snippet.dhtmlx.com/wda202ih?tag=richtext)

---
sidebar_label: toolbar
title: toolbar Konfiguration
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie mehr über die toolbar-Konfiguration. Lesen Sie Entwickleranleitungen und die API-Referenz, probieren Sie Code-Beispiele und Live-Demos aus, und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX RichText herunter.
---

# toolbar

### Beschreibung {#description}

@short: Optional. Aktiviert die Toolbar und erlaubt es, die darin angezeigten Schaltflächen anzugeben und zu konfigurieren

### Verwendung {#usage}

~~~jsx {}
toolbar?: boolean | Array<string | { id: string, type: string, label?: string, tooltip?: string, css?: string, handler?: () => any }>;
~~~

#### Verfügbare Schaltflächen in der Toolbar {#available-buttons-within-toolbar}

Sie können die folgenden Schaltflächen in der RichText-Toolbar angeben:

| Schaltfläche        | Beschreibung                                                                |
|---------------------|-----------------------------------------------------------------------------|
| `undo`              | Macht die zuletzt ausgeführte Benutzeraktion rückgängig.                   |
| `redo`              | Stellt die zuvor rückgängig gemachte Aktion wieder her.                    |
| `style`             | Ermöglicht die Auswahl von Textstilen (z. B. Überschriften, Absatz usw.). |
| `font-family`       | Ändert die Schriftart des ausgewählten Texts.                              |
| `font-size`         | Passt die Größe des ausgewählten Texts an.                                 |
| `bold`              | Wendet fette Formatierung auf den ausgewählten Text an.                    |
| `italic`            | Wendet kursive Formatierung auf den ausgewählten Text an.                  |
| `underline`         | Unterstreicht den ausgewählten Text.                                       |
| `strike`            | Wendet eine Durchstreichung an.                                            |
| `subscript`         | Formatiert den Text als tiefgestellten Text.                               |
| `superscript`       | Formatiert den Text als hochgestellten Text.                               |
| `text-color`        | Ändert die Textfarbe.                                                      |
| `background-color`  | Ändert die Hintergrundfarbe (Hervorhebungsfarbe) des Texts.               |
| `align`             | Legt die Textausrichtung fest (links, zentriert, rechts, Blocksatz).      |
| `indent`            | Erhöht den Einzug des Textblocks.                                          |
| `outdent`           | Verringert den Absatzeinzug.                                               |
| `line-height`       | Passt den Zeilenabstand an.                                                |
| `quote`             | Formatiert den Text als Blockzitat.                                        |
| `bulleted-list`     | Schaltet die Aufzählungsliste ein/aus                                      |
| `numbered-list`     | Schaltet die nummerierte Liste ein/aus                                     |
| `link`              | Fügt einen Hyperlink ein.                                                  |
| `image`             | Fügt ein Bild ein.                                                         |
| `line`              | Fügt eine horizontale Linie ein.                                           |
| `clear`             | Entfernt alle Formatierungen des ausgewählten Texts.                       |
| `print`             | Öffnet den Druckdialog.                                                    |
| `fullscreen`        | Schaltet den Vollbildmodus um.                                             |
| `mode`              | Wechselt zwischen [Layout-Modi](api/config/layout-mode.md) (klassisch/Dokument)|
| `shortcuts`         | Zeigt eine Liste der verfügbaren Tastaturkürzel an.                       |
| `separator`         | Fügt einen visuellen Trenner zwischen Toolbar-Gruppen ein.                 |

Sie können diese Zeichenketten wie folgt zur Konfiguration der Toolbar-Schaltflächen verwenden:

~~~jsx {2-7}
new richtext.Richtext("#root", {
    toolbar: [
        "bold",
        "italic",
        "separator",
        // weitere Schaltflächen
    ],
    // weitere Konfigurationseigenschaften
});
~~~

#### Benutzerdefinierte Schaltflächen in der Toolbar {#custom-buttons-within-toolbar}

Sie können benutzerdefinierte Schaltflächen als Objekte mit folgenden Parametern angeben:

- `type` - (erforderlich) gibt den benutzerdefinierten Steuerelementtyp an. Folgende Typen sind verfügbar: `"button"`, `"richselect"`, `"colorpicker"`
- `id` - (optional) eine benutzerdefinierte Steuerelement-ID (darf nicht mit einer vorhandenen Steuerelement-ID übereinstimmen)
- `label` - (optional) eine Schaltflächenbeschriftung (wird mit einem Symbol kombiniert)
- `tooltip` - (optional) ein Tooltip, der beim Hover angezeigt wird (falls nicht angegeben, wird der Wert aus „label" verwendet)
- `css` - (optional) ein CSS-Klassenname, der dem Steuerelement zugewiesen wird (unterstützte Standardklassen: wx-primary, wx-secondary)
- `handler` - (optional) eine Callback-Funktion, die beim Klicken auf die Schaltfläche ausgeführt wird

~~~jsx {6-32}
new richtext.Richtext("#root", {
    toolbar: [
        // Schaltflächen (Zeichenketten repräsentieren nur Schaltflächen)
        "bold",
        "italic",
        // vordefinierte Schaltflächen (der Benutzer kann keine weiteren Optionen für diese festlegen (keine Beschriftungen, Tooltips, Optionen usw.), daher nur ({ type: "button", id: string })
        {
            type: "button",
            id: "fullscreen",
        },
        // der Benutzer muss den richtigen Typ angeben, wenn er ein vordefiniertes Steuerelement verwenden möchte (z. B. richselect/colorpicker)
        // nicht übereinstimmende Typen werden ignoriert (nicht zur Toolbar hinzugefügt)
        {
            type: "richselect", // type: "button" - falsch, wird ignoriert
            id: "mode",
        },
        // benutzerdefinierte Schaltflächen (unterstützte Optionen sind unten aufgeführt)
        // der Benutzer kann nur benutzerdefinierte Schaltflächen definieren (derzeit keine Unterstützung für richselect/colorpicker)
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

#### Toolbar ausblenden {#hide-toolbar}

Wenn Sie die Toolbar ausblenden möchten, setzen Sie die Eigenschaft `toolbar` wie folgt auf `false`:

~~~jsx {2}
new richtext.Richtext("#root", {
    toolbar: false
    // weitere Konfigurationseigenschaften
});
~~~

### Standardkonfiguration {#default-config}

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

:::tip[Tipp]
Die Standard-Toolbar-Steuerelemente werden vom RichText-Widget exportiert und sind über `richtext.defaultToolbarButtons` zugänglich.

```jsx{4}
// RichText initialisieren
new richtext.Richtext("#root", {
    toolbar: [
        ...richtext.defaultToolbarButtons,
        {
            type: "button",
            id: "btn1", // Schaltflächen-ID (darf nicht mit vorhandenen Schaltflächen-IDs übereinstimmen, wenn Sie benutzerdefinierte Logik anwenden möchten)
            icon: "wxo-help", // Schaltflächensymbol (wird mit der Beschriftung kombiniert)
            css: "rounded", // CSS-Klassenname, der dem Steuerelement zugewiesen wird (unterstützte Standardklassen: wx-primary, wx-secondary)
            label: "Custom button", // Schaltflächenbeschriftung (wird mit dem Symbol kombiniert)
            tooltip: "Some tooltip", // Tooltip, der beim Hover angezeigt wird (falls nicht angegeben, wird der Wert aus „label" verwendet)
        }
    ]
    // weitere Konfigurationseigenschaften
});
```
:::

### Beispiel {#example}

~~~jsx {3-18}
// RichText initialisieren
new richtext.Richtext("#root", {
    toolbar: [
        "bold",
        "italic",
        "separator",
        // benutzerdefinierte Schaltflächen (alle unterstützten Optionen werden unten verwendet)
        // der Benutzer kann nur benutzerdefinierte Schaltflächen definieren (derzeit keine Unterstützung für richselect/colorpicker)
        {
            type: "button",
            id: "btn1", // Schaltflächen-ID (darf nicht mit vorhandenen Schaltflächen-IDs übereinstimmen, wenn Sie benutzerdefinierte Logik anwenden möchten)
            icon: "wxo-help", // Schaltflächensymbol (wird mit der Beschriftung kombiniert)
            css: "rounded", // CSS-Klassenname, der dem Steuerelement zugewiesen wird (unterstützte Standardklassen: wx-primary, wx-secondary)
            label: "Custom button", // Schaltflächenbeschriftung (wird mit dem Symbol kombiniert)
            tooltip: "Some tooltip", // Tooltip, der beim Hover angezeigt wird (falls nicht angegeben, wird der Wert aus „label" verwendet)
            handler: () => ..., // benutzerdefinierte Logik für diese Schaltfläche
        }
    ]
    // weitere Konfigurationseigenschaften
});
~~~

**Änderungsprotokoll:** Die Eigenschaft wurde in v2.0 hinzugefügt

**Verwandte Artikel:** [Konfiguration](guides/configuration.md)

**Verwandtes Beispiel:** [RichText. Benutzerdefiniertes Steuerelement und vereinfachte Toolbar](https://snippet.dhtmlx.com/wda202ih?tag=richtext)

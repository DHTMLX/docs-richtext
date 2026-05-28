---
sidebar_label: toolbar
title: toolbar Config
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie mehr über die toolbar-Konfiguration. Entwicklerhandbücher und API-Referenz, Code-Beispiele und Live-Demos sowie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText.
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
|---------------------|------------------------------------------------------------------------------|
| `undo`              | Macht die letzte Benutzeraktion rückgängig.                                  |
| `redo`              | Stellt die zuletzt rückgängig gemachte Aktion wieder her.                    |
| `style`             | Ermöglicht die Auswahl von Textstilen (z. B. Überschriften, Absatz usw.).    |
| `font-family`       | Ändert die Schriftart des ausgewählten Textes.                               |
| `font-size`         | Passt die Schriftgröße des ausgewählten Textes an.                           |
| `bold`              | Wendet Fettformatierung auf den ausgewählten Text an.                        |
| `italic`            | Wendet Kursivformatierung auf den ausgewählten Text an.                      |
| `underline`         | Unterstreicht den ausgewählten Text.                                         |
| `strike`            | Wendet Durchstreichformatierung an.                                          |
| `subscript`         | Formatiert den Text als tiefgestellten Text.                                 |
| `superscript`       | Formatiert den Text als hochgestellten Text.                                 |
| `text-color`        | Ändert die Textfarbe.                                                        |
| `background-color`  | Ändert die Hintergrundfarbe (Hervorhebung) des Textes.                       |
| `align`             | Legt die Textausrichtung fest (links, zentriert, rechts, Blocksatz).         |
| `indent`            | Erhöht den Einzug des Textblocks.                                            |
| `outdent`           | Verringert den Absatzeinzug.                                                 |
| `line-height`       | Passt den Zeilenabstand (Zeilenhöhe) an.                                     |
| `quote`             | Formatiert den Text als Blockzitat.                                          |
| `bulleted-list`     | Erstellt eine Aufzählungsliste.                                              |
| `numbered-list`     | Erstellt eine nummerierte Liste.                                             |
| `link`              | Fügt einen Hyperlink ein.                                                    |
| `image`             | Fügt ein Bild ein.                                                           |
| `line`              | Fügt eine horizontale Linie ein.                                             |
| `clear`             | Entfernt alle Formatierungen vom ausgewählten Text.                          |
| `print`             | Öffnet den Druckdialog.                                                      |
| `fullscreen`        | Schaltet den Vollbildmodus um.                                               |
| `mode`              | Wechselt zwischen [Layout-Modi](api/config/layout-mode.md) (klassisch/Dokument)|
| `shortcuts`         | Zeigt eine Liste der verfügbaren Tastaturkürzel an.                          |
| `separator`         | Fügt einen visuellen Trenner zwischen Toolbar-Gruppen ein.                   |

Mit diesen Zeichenketten können die Toolbar-Schaltflächen wie folgt konfiguriert werden:

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

#### Benutzerdefinierte Schaltflächen in der Toolbar

Benutzerdefinierte Schaltflächen können als Objekte mit folgenden Parametern angegeben werden:

- `type` - (erforderlich) gibt den Typ des benutzerdefinierten Steuerelements an. Folgende Typen sind verfügbar: `"button"`, `"richselect"`, `"colorpicker"`
- `id` - (optional) eine benutzerdefinierte Steuerelement-ID (darf nicht mit vorhandenen Steuerelement-IDs übereinstimmen)
- `label` - (optional) eine Schaltflächenbeschriftung (wird mit einem Symbol kombiniert)
- `tooltip` - (optional) ein Tooltip, der beim Hover angezeigt wird (falls nicht angegeben, wird der Wert von "label" verwendet)
- `css` - (optional) ein CSS-Klassenname, der dem Steuerelement zugewiesen wird (standardmäßig unterstützte Klassen: wx-primary, wx-secondary)
- `handler` - (optional) eine Callback-Funktion, die beim Klicken auf die Schaltfläche ausgeführt wird

~~~jsx {6-32}
new richtext.Richtext("#root", {
    toolbar: [
        // Schaltflächen (Zeichenketten repräsentieren nur Schaltflächen)
        "bold",
        "italic",
        // vordefinierte Schaltflächen (Benutzer kann keine weiteren Optionen festlegen (keine Labels, Tooltips, Optionen usw.), daher nur ({ type: "button", id: string })
        {
            type: "button",
            id: "fullscreen",
        },
        // Benutzer muss den korrekten Typ angeben, wenn er ein vordefiniertes Steuerelement verwenden möchte (z. B. richselect/colorpicker)
        // nicht übereinstimmende Typen werden ignoriert (nicht zur Toolbar hinzugefügt)
        {
            type: "richselect", // type: "button" - falsch, wird ignoriert
            id: "mode",
        },
        // benutzerdefinierte Schaltflächen (unterstützte Optionen siehe unten)
        // Benutzer kann nur benutzerdefinierte Schaltflächen definieren (noch keine Unterstützung für richselect/colorpicker)
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

#### Toolbar ausblenden

Um die Toolbar auszublenden, setzen Sie die Eigenschaft `toolbar` wie folgt auf `false`:

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

:::tip[Hinweis]
Die Standard-Toolbar-Steuerelemente werden vom RichText-Widget exportiert und sind über `richtext.defaultToolbarButtons` zugänglich.

```jsx{4}
// RichText initialisieren
new richtext.Richtext("#root", {
    toolbar: [
        ...richtext.defaultToolbarButtons,
        {
            type: "button",
            id: "btn1", // Schaltflächen-ID (darf nicht mit vorhandenen Schaltflächen-IDs übereinstimmen, wenn benutzerdefinierte Logik angewendet werden soll)
            icon: "wxo-help", // Schaltflächensymbol (wird mit der Beschriftung kombiniert)
            css: "rounded", // CSS-Klassenname, der dem Steuerelement zugewiesen wird (standardmäßig unterstützte Klassen: wx-primary, wx-secondary)
            label: "Custom button", // Schaltflächenbeschriftung (wird mit dem Symbol kombiniert)
            tooltip: "Some tooltip", // Tooltip, der beim Hover angezeigt wird (falls nicht angegeben, wird der Wert von "label" verwendet)
        }
    ]
    // weitere Konfigurationseigenschaften
});
```
:::

### Beispiel

~~~jsx {3-18}
// RichText initialisieren
new richtext.Richtext("#root", {
    toolbar: [
        "bold",
        "italic",
        "separator",
        // benutzerdefinierte Schaltflächen (alle unterstützten Optionen werden unten verwendet)
        // Benutzer kann nur benutzerdefinierte Schaltflächen definieren (noch keine Unterstützung für richselect/colorpicker)
        {
            type: "button",
            id: "btn1", // Schaltflächen-ID (darf nicht mit vorhandenen Schaltflächen-IDs übereinstimmen, wenn benutzerdefinierte Logik angewendet werden soll)
            icon: "wxo-help", // Schaltflächensymbol (wird mit der Beschriftung kombiniert)
            css: "rounded", // CSS-Klassenname, der dem Steuerelement zugewiesen wird (standardmäßig unterstützte Klassen: wx-primary, wx-secondary)
            label: "Custom button", // Schaltflächenbeschriftung (wird mit dem Symbol kombiniert)
            tooltip: "Some tooltip", // Tooltip, der beim Hover angezeigt wird (falls nicht angegeben, wird der Wert von "label" verwendet)
            handler: () => ..., // benutzerdefinierte Logik, die dieser Schaltfläche zugeordnet ist
        }
    ]
    // weitere Konfigurationseigenschaften
});
~~~

**Änderungsprotokoll:** Die Eigenschaft wurde in v2.0 hinzugefügt

**Verwandte Artikel:** [Konfiguration](guides/configuration.md)

**Verwandtes Beispiel:** [RichText. Custom control and simplified toolbar](https://snippet.dhtmlx.com/wda202ih?tag=richtext)

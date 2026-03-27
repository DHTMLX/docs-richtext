---
sidebar_label: toolbar
title: toolbar Config
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie mehr über die toolbar-Konfiguration. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText herunter.
---

# toolbar

### Beschreibung {#description}

@short: Optional. Aktiviert die toolbar und ermöglicht das Festlegen/Konfigurieren der darin angezeigten Schaltflächen

### Verwendung {#usage}

~~~jsx {}
toolbar?: boolean | Array<string | { id: string, type: string, label?: string, tooltip?: string, css?: string, handler?: () => any }>;
~~~

#### Verfügbare Schaltflächen in der Toolbar {#available-buttons-within-toolbar}

Sie können die folgenden Schaltflächen in der RichText-toolbar angeben:

| Schaltfläche        | Beschreibung                                                                              |
|---------------------|-------------------------------------------------------------------------------------------|
| `undo`              | Macht die letzte Benutzeraktion rückgängig.                                               |
| `redo`              | Stellt die zuvor rückgängig gemachte Aktion wieder her.                                   |
| `style`             | Ermöglicht die Auswahl von Textstilen (z. B. Überschriften, Absatz usw.).                 |
| `font-family`       | Ändert die Schriftart des markierten Textes.                                              |
| `font-size`         | Passt die Größe des markierten Textes an.                                                 |
| `bold`              | Wendet Fettformatierung auf den markierten Text an.                                       |
| `italic`            | Wendet Kursivformatierung auf den markierten Text an.                                     |
| `underline`         | Unterstreicht den markierten Text.                                                        |
| `strike`            | Wendet Durchstreichformatierung an.                                                       |
| `subscript`         | Formatiert den Text als tiefgestellten Text.                                              |
| `superscript`       | Formatiert den Text als hochgestellten Text.                                              |
| `text-color`        | Ändert die Textfarbe.                                                                     |
| `background-color`  | Ändert die Hintergrundfarbe (Hervorhebung) des Textes.                                   |
| `align`             | Legt die Textausrichtung fest (links, zentriert, rechts, Blocksatz).                     |
| `indent`            | Erhöht den Einzug des Textblocks.                                                        |
| `outdent`           | Verringert den Absatzeinzug.                                                              |
| `line-height`       | Passt den Zeilenabstand (Zeilenhöhe) an.                                                 |
| `quote`             | Formatiert den Text als Blockzitat.                                                       |
| `bulleted-list`     | Erstellt eine Aufzählungsliste.                                                           |
| `numbered-list`     | Erstellt eine nummerierte Liste.                                                          |
| `link`              | Fügt einen Hyperlink ein.                                                                 |
| `image`             | Fügt ein Bild ein.                                                                        |
| `line`              | Fügt eine horizontale Linie ein.                                                          |
| `clear`             | Entfernt alle Formatierungen vom markierten Text.                                         |
| `print`             | Öffnet den Druckdialog.                                                                   |
| `fullscreen`        | Schaltet den Vollbildmodus um.                                                            |
| `mode`              | Wechselt zwischen [Layout-Modi](api/config/layout-mode.md) (classic/document)            |
| `shortcuts`         | Zeigt eine Liste der verfügbaren Tastaturkürzel an.                                      |
| `separator`         | Fügt einen visuellen Trenner zwischen toolbar-Gruppen ein.                               |

Sie können diese Zeichenketten verwenden, um toolbar-Schaltflächen wie folgt zu konfigurieren:

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

Sie können benutzerdefinierte Schaltflächen als Objekte mit den folgenden Parametern angeben:

- `type` - (erforderlich) gibt einen benutzerdefinierten Steuerelementtyp an. Folgende Typen sind verfügbar: `"button"`, `"richselect"`, `"colorpicker"`
- `id` - (optional) eine benutzerdefinierte Steuerelement-ID (darf nicht mit einer vorhandenen Steuerelement-ID übereinstimmen)
- `label` - (optional) eine Schaltflächenbeschriftung (wird mit dem Symbol kombiniert)
- `tooltip` - (optional) ein Tooltip, der beim Hovern angezeigt wird (wenn nicht angegeben, wird der Wert von "label" verwendet)
- `css` - (optional) ein CSS-Klassenname, der dem Steuerelement zugewiesen wird (standardmäßig unterstützte Klassen: wx-primary, wx-secondary)
- `handler` - (optional) eine Callback-Funktion, die beim Klicken auf die Schaltfläche ausgeführt wird

~~~jsx {6-32}
new richtext.Richtext("#root", {
    toolbar: [
        // Schaltflächen (Zeichenketten repräsentieren nur Schaltflächen)
        "bold",
        "italic",
        // vordefinierte Schaltflächen (Benutzer können keine weiteren Optionen für diese definieren (keine Beschriftungen, Tooltips, Optionen usw.), daher nur ({ type: "button", id: string })
        {
            type: "button",
            id: "fullscreen",
        },
        // Benutzer müssen den richtigen Typ angeben, wenn sie ein vordefiniertes Steuerelement verwenden möchten (z. B. richselect/colorpicker)
        // nicht übereinstimmende Typen werden ignoriert (nicht zur toolbar hinzugefügt)
        {
            type: "richselect", // type: "button" - falsch, wird ignoriert
            id: "mode",
        },
        // benutzerdefinierte Schaltflächen (unterstützte Optionen sind unten aufgeführt)
        // Benutzer können nur benutzerdefinierte Schaltflächen definieren (derzeit keine richselect/colorpicker-Unterstützung)
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

Wenn Sie die toolbar ausblenden möchten, setzen Sie die Eigenschaft `toolbar` wie folgt auf `false`:

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
Die Standard-toolbar-Steuerelemente werden vom RichText-Widget exportiert und sind über `richtext.defaultToolbarButtons` zugänglich.

```jsx{4}
// RichText initialisieren
new richtext.Richtext("#root", {
    toolbar: [
        ...richtext.defaultToolbarButtons,
        {
            type: "button",
            id: "btn1", // Schaltflächen-ID (darf nicht mit vorhandenen Schaltflächen-IDs übereinstimmen, wenn Sie benutzerdefinierte Logik anwenden möchten)
            icon: "wxo-help", // Schaltflächensymbol (wird mit der Beschriftung kombiniert)
            css: "rounded", // CSS-Klassenname, der dem Steuerelement zugewiesen wird (standardmäßig unterstützte Klassen: wx-primary, wx-secondary)
            label: "Custom button", // Schaltflächenbeschriftung (wird mit dem Symbol kombiniert)
            tooltip: "Some tooltip", // Tooltip, der beim Hovern angezeigt wird (wenn nicht angegeben, wird der Wert von "label" verwendet)
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
        // Benutzer können nur benutzerdefinierte Schaltflächen definieren (derzeit keine richselect/colorpicker-Unterstützung)
        {
            type: "button",
            id: "btn1", // Schaltflächen-ID (darf nicht mit vorhandenen Schaltflächen-IDs übereinstimmen, wenn Sie benutzerdefinierte Logik anwenden möchten)
            icon: "wxo-help", // Schaltflächensymbol (wird mit der Beschriftung kombiniert)
            css: "rounded", // CSS-Klassenname, der dem Steuerelement zugewiesen wird (standardmäßig unterstützte Klassen: wx-primary, wx-secondary)
            label: "Custom button", // Schaltflächenbeschriftung (wird mit dem Symbol kombiniert)
            tooltip: "Some tooltip", // Tooltip, der beim Hovern angezeigt wird (wenn nicht angegeben, wird der Wert von "label" verwendet)
            handler: () => ..., // benutzerdefinierte Logik, die dieser Schaltfläche zugeordnet ist
        }
    ]
    // weitere Konfigurationseigenschaften
});
~~~

**Änderungsprotokoll:** Die Eigenschaft wurde in v2.0 hinzugefügt

**Verwandte Artikel:** [Konfiguration](guides/configuration.md)

**Verwandtes Beispiel:** [RichText. Benutzerdefiniertes Steuerelement und vereinfachte Toolbar](https://snippet.dhtmlx.com/wda202ih?tag=richtext)

---
sidebar_label: toolbar
title: toolbar Konfiguration
description: Entdecken Sie die Toolbar-Konfiguration in der DHTMLX JavaScript RichText Bibliotheksdokumentation. Sehen Sie sich Entwickleranleitungen, API-Referenzen an, probieren Sie Codebeispiele und Live-Demos aus und erhalten Sie eine kostenlose 30-Tage-Testversion von DHTMLX RichText.
---

# toolbar

### Beschreibung

@short: Optional. Aktiviert die Toolbar und ermöglicht es Benutzern, die angezeigten Schaltflächen auszuwählen und einzurichten.

### Verwendung

~~~jsx {}
toolbar?: boolean | Array<string | { id: string, type: string, label?: string, tooltip?: string, css?: string, handler?: () => any }>;
~~~

#### Verfügbare Schaltflächen in der Toolbar

Hier sind die Schaltflächen, die Sie der RichText Toolbar hinzufügen können:

| Schaltfläche        | Beschreibung                                                                |
|---------------------|-----------------------------------------------------------------------------|
| `undo`              | Macht die letzte Benutzeraktion rückgängig.                                |
| `redo`              | Führt die zuvor rückgängig gemachte Aktion erneut aus.                     |
| `style`             | Ermöglicht die Auswahl von Textstilen wie Überschriften oder Absätzen.      |
| `font-family`       | Ändert die Schriftart des ausgewählten Textes.                             |
| `font-size`         | Ändert die Schriftgröße des ausgewählten Textes.                           |
| `bold`              | Macht den ausgewählten Text fett.                                          |
| `italic`            | Kursiviert den ausgewählten Text.                                          |
| `underline`         | Unterstreicht den ausgewählten Text.                                       |
| `strike`            | Fügt einen Durchstreich-Effekt hinzu.                                      |
| `subscript`         | Formatiert Text als Tiefgestellt.                                          |
| `superscript`       | Formatiert Text als Hochgestellt.                                          |
| `text-color`        | Ändert die Textfarbe.                                                       |
| `background-color`  | Ändert die Hintergrundfarbe des Textes.                                    |
| `align`             | Legt die Textausrichtung fest: links, zentriert, rechts oder Blocksatz.   |
| `indent`            | Erhöht die Einrückung von Textblöcken.                                    |
| `outdent`           | Verringert die Absatz-Einrückung.                                          |
| `line-height`       | Passt den Zeilenabstand an.                                                |
| `quote`             | Formatiert Text als Blockzitat.                                            |
| `bulleted-list`     | Erstellt eine Aufzählungsliste.                                            |
| `numbered-list`     | Erstellt eine nummerierte Liste.                                           |
| `link`              | Fügt einen Hyperlink ein.                                                  |
| `image`             | Fügt ein Bild ein.                                                         |
| `line`              | Fügt eine horizontale Linie ein.                                          |
| `clear`             | Entfernt alle Formatierungen vom ausgewählten Text.                        |
| `print`             | Öffnet den Druckdialog.                                                    |
| `fullscreen`        | Schaltet den Vollbildmodus ein oder aus.                                  |
| `mode`              | Wechselt zwischen [Layout-Modi](api/config/layout-mode.md) (klassisch/Dokument). |
| `shortcuts`         | Zeigt eine Liste der Tastenkombinationen an.                              |
| `separator`         | Fügt einen visuellen Trenner zwischen Toolbar-Gruppen hinzu.              |

Sie können diese Strings verwenden, um Toolbar-Schaltflächen wie folgt einzurichten:

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

Benutzerdefinierte Schaltflächen können als Objekte mit folgenden Optionen eingerichtet werden:

- `type` - (erforderlich) definiert den Steuerelementtyp. Optionen sind `"button"`, `"richselect"`, `"colorpicker"`.
- `id` - (optional) eine eindeutige Steuer-ID (sollte nicht mit bestehenden IDs kollidieren).
- `label` - (optional) Textbeschriftung für die Schaltfläche (erscheint neben dem Symbol).
- `tooltip` - (optional) Text, der beim Überfahren mit der Maus angezeigt wird (standardmäßig das Label, falls nicht gesetzt).
- `css` - (optional) CSS-Klasse für das Steuerelement (Standardklassen beinhalten wx-primary, wx-secondary).
- `handler` - (optional) Funktion, die beim Klicken auf die Schaltfläche ausgeführt wird.

~~~jsx {6-32}
new richtext.Richtext("#root", {
    toolbar: [
        // Schaltflächen (Strings repräsentieren nur Schaltflächen)
        "bold",
        "italic",
        // vordefinierte Schaltflächen (Benutzer können hier keine zusätzlichen Optionen wie Label oder Tooltips hinzufügen, nur ({ type: "button", id: string })
        {
            type: "button",
            id: "fullscreen",
        },
        // Benutzer müssen den richtigen Typ für vordefinierte Steuerelemente angeben (z.B. richselect/colorpicker)
        // Steuerelemente mit falschem Typ werden nicht hinzugefügt
        {
            type: "richselect", // type: "button" - würde ignoriert werden
            id: "mode",
        },
        // benutzerdefinierte Schaltflächen (nur diese Optionen werden unterstützt)
        // derzeit sind nur benutzerdefinierte Schaltflächen erlaubt (kein richselect/colorpicker Support)
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

Um die Toolbar auszublenden, setzen Sie einfach die Eigenschaft `toolbar` auf `false` wie folgt:

~~~jsx {2}
new richtext.Richtext("#root", {
    toolbar: false
    // weitere Konfigurationseigenschaften
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

:::tip
Die standardmäßigen Toolbar-Steuerelemente sind im RichText-Widget enthalten und können über `richtext.defaultToolbarButtons` abgerufen werden.

```jsx{4}
// RichText initialisieren
new richtext.Richtext("#root", {
    toolbar: [
        ...richtext.defaultToolbarButtons,
        {
            type: "button",
            id: "btn1", // eindeutige Schaltflächen-ID für benutzerdefinierte Logik
            icon: "wxo-help", // Symbol, das mit dem Label angezeigt wird
            css: "rounded", // CSS-Klasse für Styling (standardmäßig unterstützte Klassen: wx-primary, wx-secondary)
            label: "Custom button", // Schaltflächenbeschriftung neben dem Symbol
            tooltip: "Some tooltip", // Tooltip beim Überfahren mit der Maus (standardmäßig das Label, falls nicht vorhanden)
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
        // benutzerdefinierte Schaltflächen (alle unterstützten Optionen hier gezeigt)
        // derzeit werden nur benutzerdefinierte Schaltflächen unterstützt (kein richselect/colorpicker)
        {
            type: "button",
            id: "btn1", // eindeutige Schaltflächen-ID für benutzerdefinierte Logik
            icon: "wxo-help", // Symbol, das mit dem Label angezeigt wird
            css: "rounded", // CSS-Klasse für Styling (standardmäßig unterstützte Klassen: wx-primary, wx-secondary)
            label: "Custom button", // Schaltflächenbeschriftung neben dem Symbol
            tooltip: "Some tooltip", // Tooltip beim Überfahren mit der Maus (standardmäßig das Label, falls nicht vorhanden)
            handler: () => ..., // benutzerdefinierte Logik für diese Schaltfläche
        }
    ]
    // weitere Konfigurationseigenschaften
});
~~~

**Änderungsprotokoll:** Diese Eigenschaft wurde in Version v2.0 eingeführt.

**Verwandte Artikel:** [Konfiguration](guides/configuration.md)

**Verwandtes Beispiel:** [RichText. Benutzerdefinierte Steuerung und vereinfachte Toolbar](https://snippet.dhtmlx.com/wda202ih?tag=richtext)

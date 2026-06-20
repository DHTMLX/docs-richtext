---
sidebar_label: RichText-Übersicht
title: RichText-Übersicht
slug: /
description: Hier finden Sie eine Übersicht der DHTMLX JavaScript RichText-Bibliothek. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, probieren Sie Code-Beispiele und Live-Demos aus und laden Sie eine kostenlose 30-tägige Testversion von DHTMLX RichText herunter.
---

# RichText-Übersicht {#richtext-overview}

**DHTMLX RichText** ist ein flexibler und schlanker WYSIWYG-Editor, der mit JavaScript entwickelt wurde. RichText wurde entwickelt, um ein nahtloses Bearbeitungserlebnis in modernen Webanwendungen zu bieten, und zeichnet sich durch eine übersichtliche Benutzeroberfläche, umfangreiche Formatierungsmöglichkeiten und vollständige Kontrolle über das Inhalts-Rendering aus. Ob Sie ein CMS, ein internes Administrationswerkzeug oder einen eingebetteten Dokumenten-Editor erstellen – RichText lässt sich problemlos integrieren und an Ihre Anforderungen anpassen.

Die **DHTMLX RichText**-Komponente bietet folgende Funktionen:

- Zwei [**Layout-Modi**](api/config/layout-mode.md)

- Inhaltsserialisierung in HTML, Klartext und Markdown

- Konfigurierbare [`toolbar`](api/config/toolbar.md) mit integrierten und benutzerdefinierten Schaltflächen

- Statische [`menubar`](api/config/menubar.md), die ein- oder ausgeblendet werden kann

- Bild-Upload mit optionalem Server-[Upload](api/config/image-upload-url.md) oder eingebetteter Base64-Kodierung, umfangreiche Formatierung, benutzerdefinierte Gestaltung und Vollbildmodus

- [Vollständiger API-Zugriff](api/overview/main_overview.md) für [Event-Handling](api/overview/event_bus_methods_overview.md), [Inhaltsbearbeitung](api/overview/methods_overview.md) und [reaktives Zustandsmanagement](api/overview/state_methods_overview.md)

RichText ist Framework-unabhängig und lässt sich problemlos in die Frameworks [React](guides/integration_with_react.md), [Angular](guides/integration_with_angular.md), [Vue](guides/integration_with_vue.md) und [Svelte](guides/integration_with_svelte.md) integrieren, was es für ein breites Spektrum von Front-End-Ökosystemen geeignet macht.

Diese Dokumentation bietet detaillierte Anleitungen zu Installation, Konfiguration, Verwendung und Anpassung. Sie finden Beispiele für gängige Szenarien, [vollständige API-Referenzen](api/overview/main_overview.md) und Best Practices für die Einbettung von RichText in Ihre Anwendung.

## RichText-Struktur {#richtext-structure}

### Menüleiste {#menubar}

Die RichText-Menüleiste bietet Zugriff auf Bearbeitungsaktionen wie das Erstellen eines neuen Dokuments, Drucken, Importieren/Exportieren von Inhalten und mehr. Sie ist standardmäßig ausgeblendet.

Verwenden Sie die Eigenschaft [`menubar`](api/config/menubar.md), um die Sichtbarkeit umzuschalten. Die Menüleiste kann zwar aktiviert oder deaktiviert werden, ihr Inhalt ist jedoch derzeit nicht konfigurierbar.

<div className="img_border">
![Menüleiste](/img/richtext/menubar.png)
</div>

### Toolbar {#toolbar}

Die RichText-Toolbar bietet schnellen Zugriff auf Textformatierungs- und Strukturbearbeitungsfunktionen. Standardmäßig ist die [Toolbar](api/config/toolbar.md#default-config) aktiviert und zeigt einen vordefinierten Satz häufig verwendeter Steuerelemente an, wie Fett, Kursiv, Schriftarteinstellungen, Listenformatierung und mehr.

Die Eigenschaft [`toolbar`](api/config/toolbar.md) ermöglicht es Ihnen, den Inhalt und das Layout der Toolbar vollständig anzupassen. Sie können die Toolbar aktivieren oder deaktivieren, Standard-Steuerelemente neu anordnen oder eine vollständig benutzerdefinierte Toolbar mit einem Array aus vordefinierten Schaltflächen-IDs und benutzerdefinierten Schaltflächen-Objekten definieren.

<div className="img_border">
![Toolbar](/img/richtext/toolbar.png)
</div>

### Editor {#editor}

Der RichText-Editor ist der zentrale Bereich, in dem Benutzer Inhalte erstellen und formatieren. Sie können das Erscheinungsbild und das Verhalten des Editors über Konfigurationsoptionen wie [`value`](api/config/value.md), [`layoutMode`](api/config/layout-mode.md) und [`defaultStyles`](api/config/default-styles.md) steuern. RichText unterstützt außerdem benutzerdefinierte Gestaltung, Bild-Einbettung und responsive Layout-Anpassungen, um den Anforderungen Ihrer Anwendung gerecht zu werden.

#### Zwei Arbeitsmodi {#two-working-modes}

DHTMLX RichText kann mit Inhalten im „Klassisch"- und „Dokument"-Modus arbeiten. Sie können den am besten geeigneten Modus wählen, um beim Bearbeiten von Text komfortabel zu arbeiten. Verwenden Sie die Eigenschaft [`layoutMode`](api/config/layout-mode.md), um den Modus programmatisch zu wechseln.

- **„classic"**

<div className="img_border">
![Klassischer Modus](/img/richtext/classic_mode.png)
</div>

- **„document"**

<div className="img_border">
![Dokumentmodus](/img/richtext/document_mode.png)
</div>

## Unterstützte Formate {#supported-formats}

Der RichText-Editor unterstützt das [Einlesen](api/methods/set-value.md) und die [Serialisierung](api/methods/get-value.md) von Inhalten in den Formaten **HTML**, **Klartext** und **Markdown**.

#### HTML-Format {#html-format}

<div className="img_border">
![HTML-Format](/img/richtext/html_format.png)
</div>

#### Textformat {#text-format}

<div className="img_border">
![Textformat](/img/richtext/text_format.png)
</div>

#### Markdown-Format {#markdown-format}

Übergeben Sie die integrierten `markdown`-Encoder an [`setValue()`](api/methods/set-value.md) / [`getValue()`](api/methods/get-value.md), um Inhalte als Markdown zu laden oder zu serialisieren:

~~~jsx
const editor = new richtext.Richtext("#root", {
    value: "Hello world"
    // weitere Konfigurationseigenschaften
});

// Markdown in den Editor laden
editor.setValue("# Title\n\nParagraph", richtext.markdown.fromMarkdown);

// Editor-Inhalt als Markdown lesen
const md = editor.getValue(richtext.markdown.toMarkdown);
~~~

:::note[Hinweis]
Die Markdown-Unterstützung deckt eine begrenzte Teilmenge der Syntax ab – gängige Block- und Inline-Elemente wie Überschriften, Absätze, Zeilenumbrüche, Betonung, Blockzitate, Listen und Links. Formatierungen ohne Markdown-Entsprechung (Schriftfamilie, Schriftgröße, Farben, Ausrichtung, Zeilenhöhe) gehen bei der Serialisierung verloren.

Verschachtelte Inline-Strukturen werden nicht unterstützt, mit der einzigen Ausnahme von **Fett innerhalb von Kursiv**. Kombinationen wie Fett innerhalb eines Links, Kursiv innerhalb eines Listenelements oder mehrstufige (verschachtelte) Listen werden nicht korrekt dargestellt.
:::

## Kopieren und Einfügen {#copy-and-paste}

Der RichText-Editor unterstützt Zwischenablage-Operationen über Standard-Systemkürzel (`Ctrl+C` / `Ctrl+X` / `Ctrl+V` unter Windows/Linux, `⌘+C` / `⌘+X` / `⌘+V` unter macOS), die entsprechenden [Toolbar](api/config/toolbar.md)-Schaltflächen und die Einträge der [Menüleiste](api/config/menubar.md).

Wenn Inhalt kopiert oder ausgeschnitten wird, schreibt RichText zwei Darstellungen in die Systemzwischenablage:

- eine **Klartext**-Version für die Kompatibilität mit einfachen Zielen (Terminals, Code-Editoren, einfache Eingabefelder)
- eine **HTML**-Version, die alle Inline- und Block-Formatierungen enthält (Fett, Kursiv, Unterstrichen, Durchgestrichen, Schriftfamilie, Schriftgröße, Text- und Hintergrundfarbe, Überschriften, Blockzitate, Listen, Ausrichtung, Einrückung, Zeilenhöhe, Links und Bilder)

Das Einfügeverhalten hängt von der Quelle des Zwischenablage-Inhalts ab:

- Beim Einfügen zwischen zwei RichText-Instanzen (im selben Dokument oder auf verschiedenen Seiten) wird die HTML-Darstellung verwendet und die ursprüngliche Formatierung beibehalten.
- Beim Einfügen aus einer externen Quelle – einschließlich Browsern, Textverarbeitungsprogrammen und anderen Editoren – wird der Inhalt als Klartext verarbeitet. Der eingefügte Inhalt wird ohne externe Formatierung als Text hinzugefügt.

:::note[Hinweis]
Die **Einfügen**-Schaltfläche in der Toolbar verwendet die asynchrone Clipboard API, die nur Klartext bereitstellt. Um Inhalte, die aus einem anderen RichText kopiert wurden, mit erhaltener Formatierung einzufügen, verwenden Sie das Tastaturkürzel `Ctrl+V` / `⌘+V`, das die vollständige HTML-Nutzlast direkt vom Clipboard-Event des Browsers empfängt.
:::

## Tastaturkürzel {#keyboard-shortcuts}

Der RichText-Editor unterstützt eine Reihe gängiger Tastaturkürzel für schnellere Formatierung und Bearbeitung. Die Kürzel folgen Plattformkonventionen und sind sowohl unter **Windows/Linux** (`Ctrl`) als auch unter **macOS** (`⌘`) verfügbar.

### Textformatierung {#text-formatting}

| Aktion          | Windows/Linux   | macOS         |
|-----------------|-----------------|---------------|
| Fett*           | `Ctrl+B`        | `⌘B`          |
| Kursiv          | `Ctrl+I`        | `⌘I`          |
| Unterstrichen   | `Ctrl+U`        | `⌘U`          |
| Durchgestrichen | `Ctrl+Shift+X`  | `⌘⇧X`         |

### Bearbeitung {#editing}

| Aktion      | Windows/Linux            | macOS         |
|-------------|--------------------------|---------------|
| Rückgängig  | `Ctrl+Z`                 | `⌘Z`          |
| Wiederholen | `Ctrl+Y` / `Ctrl+Shift+Z`| `⌘Y` / `⌘⇧Z`  |
| Ausschneiden | `Ctrl+X`                | `⌘X`          |
| Kopieren    | `Ctrl+C`                 | `⌘C`          |
| Einfügen    | `Ctrl+V`                 | `⌘V`          |
| Wort löschen | `Ctrl+Backspace` / `Ctrl+Delete` | `⌥⌫` / `⌥⌦` |
| Zeile löschen | —                      | `⌘⌫` / `⌘⌦`   |

### Einrückung {#indentation}

| Aktion                        | Windows/Linux | macOS |
|-------------------------------|---------------|-------|
| Einrücken / Liste verschachteln | `Tab`       | `⇥`   |
| Ausrücken / Liste anheben     | `Shift+Tab`   | `⇧⇥`  |

### Sonderaktionen {#special-actions}

| Aktion        | Windows/Linux | macOS |
|---------------|---------------|-------|
| Link einfügen | `Ctrl+K`      | `⌘K`  |
| Drucken       | `Ctrl+P`      | `⌘P`  |

:::info[Info]
In zukünftigen Updates können weitere Tastaturkürzel hinzugefügt werden.
:::

Um die aktuelle Referenz zu den RichText-Tastaturkürzeln zu erhalten, drücken Sie **Hilfe** und wählen Sie die Option **Tastaturkürzel**:

<div className="img_border">
![Tastaturkürzel](/img/richtext/shortcut_reference.png)
</div>

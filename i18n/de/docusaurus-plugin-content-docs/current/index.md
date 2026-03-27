---
sidebar_label: RichText-Übersicht
title: RichText-Übersicht
slug: /
description: Eine Übersicht der DHTMLX JavaScript-Bibliothek RichText finden Sie in der Dokumentation. Durchsuchen Sie Entwicklerleitfäden und API-Referenz, probieren Sie Codebeispiele und Live-Demos aus, und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText herunter.
---

# RichText-Übersicht

**DHTMLX RichText** ist ein flexibler und leichtgewichtiger WYSIWYG-Editor, der in JavaScript entwickelt wurde. RichText wurde für eine nahtlose Bearbeitungserfahrung in modernen Webanwendungen konzipiert und bietet eine übersichtliche Benutzeroberfläche, umfangreiche Formatierungsmöglichkeiten sowie vollständige Kontrolle über das Content-Rendering. Ob Sie ein CMS, ein internes Admin-Tool oder einen eingebetteten Dokumenteneditor entwickeln – RichText lässt sich problemlos integrieren und an Ihre Anforderungen anpassen.

Die **DHTMLX RichText**-Komponente umfasst folgende Funktionen:

- Zwei [**Layout-Modi**](api/config/layout-mode.md)

- Serialisierung von Inhalten in reinen Text und HTML

- Konfigurierbare [**Toolbar**](api/config/toolbar.md) mit integrierten und benutzerdefinierten Schaltflächen

- Statische [**Menüleiste**](api/config/menubar.md), die ein- oder ausgeblendet werden kann

- Bild-Upload, umfangreiche Formatierung, benutzerdefinierte Styles und Vollbildmodus

- [Vollständiger API-Zugriff](api/overview/main_overview.md) für [Ereignisbehandlung](api/overview/event_bus_methods_overview.md), [Inhaltsbearbeitung](api/overview/methods_overview.md) und [reaktives Zustandsmanagement](api/overview/state_methods_overview.md)

RichText ist framework-unabhängig und lässt sich problemlos mit [React](guides/integration_with_react.md), [Angular](guides/integration_with_angular.md), [Vue](guides/integration_with_vue.md) und [Svelte](guides/integration_with_svelte.md) integrieren, was es für ein breites Spektrum von Frontend-Umgebungen geeignet macht.

Diese Dokumentation bietet detaillierte Anleitungen zu Installation, Konfiguration, Verwendung und Anpassung. Sie finden Beispiele für gängige Szenarien, [vollständige API-Referenzen](api/overview/main_overview.md) und Best Practices für die Einbindung von RichText in Ihre Anwendung.

## RichText-Struktur {#richtext-structure}

### Menüleiste {#menubar}

Die RichText-Menüleiste bietet Zugriff auf Bearbeitungsaktionen wie das Erstellen eines neuen Dokuments, Drucken, Importieren/Exportieren von Inhalten und mehr. Sie ist standardmäßig ausgeblendet.

Verwenden Sie die Eigenschaft [`menubar`](api/config/menubar.md), um ihre Sichtbarkeit zu steuern. Die Menüleiste kann zwar aktiviert oder deaktiviert werden, ihr Inhalt ist jedoch derzeit nicht konfigurierbar.

<div className="img_border">
![Menüleiste](./assets/richtext/menubar.png)
</div>

### Toolbar {#toolbar}

Die RichText-Toolbar bietet schnellen Zugriff auf Textformatierungs- und Strukturbearbeitungsfunktionen. Standardmäßig ist die [Toolbar](api/config/toolbar.md#default-config) aktiviert und zeigt eine vordefinierte Auswahl häufig verwendeter Steuerelemente wie Fett, Kursiv, Schriftarteinstellungen, Listenformatierung und mehr an.

Die Eigenschaft [`toolbar`](api/config/toolbar.md) ermöglicht es Ihnen, Inhalt und Layout der Toolbar vollständig anzupassen. Sie können die Toolbar aktivieren oder deaktivieren, Standardsteuerelemente neu anordnen oder eine vollständig benutzerdefinierte Toolbar mithilfe eines Arrays aus vordefinierten Schaltflächenbezeichnern und benutzerdefinierten Schaltflächenobjekten definieren.

<div className="img_border">
![Toolbar](./assets/richtext/toolbar.png)
</div>

### Editor {#editor}

Der RichText-Editor ist der zentrale Bereich, in dem Benutzer Inhalte erstellen und formatieren. Sie können Erscheinungsbild und Verhalten des Editors über Konfigurationsoptionen wie [`value`](api/config/value.md), [`layoutMode`](api/config/layout-mode.md) und [`defaultStyles`](api/config/default-styles.md) steuern. RichText unterstützt außerdem benutzerdefinierte Styles, Bildeinbettung und responsive Layout-Anpassungen, um den Anforderungen Ihrer Anwendung gerecht zu werden.

#### Zwei Arbeitsmodi {#two-working-modes}

DHTMLX RichText kann Inhalte im „classic"- und im „document"-Modus verarbeiten. Sie können den am besten geeigneten Modus wählen, um beim Bearbeiten von Text komfortabel zu arbeiten. Verwenden Sie die Eigenschaft [`layoutMode`](api/config/layout-mode.md), um den Modus programmgesteuert zu wechseln.

- **„classic"**

<div className="img_border">
![Classic-Modus](./assets/richtext/classic_mode.png)
</div>

- **„document"**

<div className="img_border">
![Document-Modus](./assets/richtext/document_mode.png)
</div>

## Unterstützte Formate {#supported-formats}

Der RichText-Editor unterstützt das [Einlesen](api/methods/set-value.md) und die [Serialisierung](api/methods/get-value.md) von Inhalten im **HTML**- und Nur-Text-Format.

#### HTML-Format {#html-format}

<div className="img_border">
![HTML-Format](./assets/richtext/html_format.png)
</div>

#### Textformat {#text-format}

<div className="img_border">
![Textformat](./assets/richtext/text_format.png)
</div>

## Tastaturkürzel {#keyboard-shortcuts}

Der RichText-Editor unterstützt eine Reihe gängiger Tastaturkürzel für schnellere Formatierung und Bearbeitung. Die Kürzel folgen plattformspezifischen Konventionen und stehen sowohl unter **Windows/Linux** (`Ctrl`) als auch unter **macOS** (`⌘`) zur Verfügung.

### Textformatierung {#text-formatting}

| Aktion          | Windows/Linux   | macOS         |
|-----------------|-----------------|---------------|
| Fett*           | `Ctrl+B`        | `⌘B`          |
| Kursiv          | `Ctrl+I`        | `⌘I`          |
| Unterstrichen   | `Ctrl+U`        | `⌘U`          |
| Durchgestrichen | `Ctrl+Shift+X`  | `⌘⇧X`         |

### Bearbeitung {#editing}

| Aktion       | Windows/Linux            | macOS         |
|--------------|--------------------------|---------------|
| Rückgängig   | `Ctrl+Z`                 | `⌘Z`          |
| Wiederholen  | `Ctrl+Y` / `Ctrl+Shift+Z`| `⌘Y` / `⌘⇧Z`  |
| Ausschneiden | `Ctrl+X`                 | `⌘X`          |
| Kopieren     | `Ctrl+C`                 | `⌘C`          |
| Einfügen     | `Ctrl+V`                 | `⌘V`          |

### Sonderaktionen {#special-actions}

| Aktion        | Windows/Linux | macOS |
|---------------|---------------|-------|
| Link einfügen | `Ctrl+K`      | `⌘K`  |
| Drucken       | `Ctrl+P`      | `⌘P`  |

:::info[Info]
Weitere Tastaturkürzel können in zukünftigen Updates hinzukommen.
:::

Um die aktuelle Referenz zu den RichText-Tastaturkürzeln aufzurufen, drücken Sie **Hilfe** und wählen Sie die Option **Tastaturkürzel**:

<div className="img_border">
![Tastaturkürzel](./assets/richtext/shortcut_reference.png)
</div>

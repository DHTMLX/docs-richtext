---
sidebar_label: RichText-Übersicht
title: RichText-Übersicht
slug: /
description: Hier finden Sie eine Übersicht der DHTMLX JavaScript RichText-Bibliothek. Lesen Sie Entwicklerleitfäden und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText herunter.
---

# RichText-Übersicht

**DHTMLX RichText** ist ein flexibler und leichtgewichtiger WYSIWYG-Editor, der mit JavaScript entwickelt wurde. Er bietet eine nahtlose Bearbeitungserfahrung in modernen Webanwendungen, eine übersichtliche Benutzeroberfläche, umfangreiche Formatierungsmöglichkeiten und vollständige Kontrolle über das Content-Rendering. Ob Sie ein CMS, ein internes Admin-Tool oder einen eingebetteten Dokumenteneditor entwickeln – RichText lässt sich problemlos integrieren und an Ihre Anforderungen anpassen.

Die **DHTMLX RichText**-Komponente bietet folgende Features:

- Zwei [**Layout-Modi**](api/config/layout-mode.md)

- Serialisierung von Inhalten in Klartext und HTML

- Konfigurierbare [**Toolbar**](api/config/toolbar.md) mit integrierten und benutzerdefinierten Schaltflächen

- Statische [**Menüleiste**](api/config/menubar.md), die ein- oder ausgeblendet werden kann

- Bild-Upload, umfangreiche Formatierung, benutzerdefiniertes Styling und Vollbildmodus

- [Vollständiger API-Zugriff](api/overview/main_overview.md) für [Event-Handling](api/overview/event_bus_methods_overview.md), [Inhaltsmanipulation](api/overview/methods_overview.md) und [reaktives State-Management](api/overview/state_methods_overview.md)

RichText ist framework-unabhängig und lässt sich problemlos mit den Frameworks [React](guides/integration_with_react.md), [Angular](guides/integration_with_angular.md), [Vue](guides/integration_with_vue.md) und [Svelte](guides/integration_with_svelte.md) integrieren, wodurch er für ein breites Spektrum an Front-End-Ökosystemen geeignet ist.

Diese Dokumentation bietet detaillierte Anleitungen zu Installation, Konfiguration, Verwendung und Anpassung. Sie finden Beispiele für häufige Anwendungsfälle, [vollständige API-Referenzen](api/overview/main_overview.md) und Best Practices zur Einbindung von RichText in Ihre Anwendung.

## RichText-Struktur

### Menüleiste

Die RichText-Menüleiste bietet Zugriff auf Bearbeitungsaktionen wie das Erstellen eines neuen Dokuments, Drucken, Importieren/Exportieren von Inhalten und mehr. Sie ist standardmäßig ausgeblendet.

Mit der Eigenschaft [`menubar`](api/config/menubar.md) können Sie die Sichtbarkeit umschalten. Die Menüleiste kann zwar aktiviert oder deaktiviert werden, ihr Inhalt ist jedoch derzeit nicht konfigurierbar.

<div className="img_border">
![Menubar](./assets/richtext/menubar.png)
</div>

### Toolbar

Die RichText-Toolbar bietet schnellen Zugriff auf Textformatierungs- und Strukturbearbeitungsfunktionen. Standardmäßig ist die [Toolbar](api/config/toolbar.md#default-config) aktiviert und zeigt eine vordefinierte Auswahl häufig verwendeter Steuerelemente wie Fett, Kursiv, Schriftarteinstellungen, Listenformatierung und mehr an.

Mit der Eigenschaft [`toolbar`](api/config/toolbar.md) können Sie den Inhalt und das Layout der Toolbar vollständig anpassen. Sie können die Toolbar aktivieren oder deaktivieren, Standardsteuerelemente neu anordnen oder eine vollständig benutzerdefinierte Toolbar mithilfe eines Arrays vordefinierter Schaltflächen-Bezeichner und benutzerdefinierter Schaltflächenobjekte definieren.

<div className="img_border">
![Toolbar](./assets/richtext/toolbar.png)
</div>

### Editor

Der RichText-Editor ist der zentrale Bereich, in dem Benutzer Inhalte erstellen und formatieren. Sie können das Erscheinungsbild und das Verhalten des Editors über Konfigurationsoptionen wie [`value`](api/config/value.md), [`layoutMode`](api/config/layout-mode.md) und [`defaultStyles`](api/config/default-styles.md) steuern. RichText unterstützt außerdem benutzerdefiniertes Styling, Bild-Einbettung und responsive Layout-Anpassungen, um den Anforderungen Ihrer Anwendung gerecht zu werden.

#### Zwei Arbeitsmodi

DHTMLX RichText kann Inhalte im Modus „classic" und „document" verarbeiten. Sie können den am besten geeigneten Modus wählen, um beim Bearbeiten von Text komfortabel zu arbeiten. Verwenden Sie die Eigenschaft [`layoutMode`](api/config/layout-mode.md), um den Modus programmatisch zu wechseln.

- **„classic"**

<div className="img_border">
![Classic mode](./assets/richtext/classic_mode.png)
</div>

- **„document"**

<div className="img_border">
![Document mode](./assets/richtext/document_mode.png)
</div>

## Unterstützte Formate

Der RichText-Editor unterstützt das [Parsen](api/methods/set-value.md) und die [Serialisierung](api/methods/get-value.md) von Inhalten in den Formaten **HTML** und Klartext.

#### HTML-Format

<div className="img_border">
![HTML format](./assets/richtext/html_format.png)
</div>

#### Textformat

<div className="img_border">
![Text format](./assets/richtext/text_format.png)
</div>

## Tastaturkürzel

Der RichText-Editor unterstützt eine Reihe gängiger Tastaturkürzel für schnellere Formatierung und Bearbeitung. Die Kürzel folgen den Plattformkonventionen und sind sowohl unter **Windows/Linux** (`Ctrl`) als auch unter **macOS** (`⌘`) verfügbar.

### Textformatierung

| Aktion          | Windows/Linux   | macOS         |
|-----------------|-----------------|---------------|
| Fett*           | `Ctrl+B`        | `⌘B`          |
| Kursiv          | `Ctrl+I`        | `⌘I`          |
| Unterstrichen   | `Ctrl+U`        | `⌘U`          |
| Durchgestrichen | `Ctrl+Shift+X`  | `⌘⇧X`         |

### Bearbeitung

| Aktion     | Windows/Linux            | macOS         |
|------------|--------------------------|---------------|
| Rückgängig | `Ctrl+Z`                 | `⌘Z`          |
| Wiederholen| `Ctrl+Y` / `Ctrl+Shift+Z`| `⌘Y` / `⌘⇧Z`  |
| Ausschneiden| `Ctrl+X`                | `⌘X`          |
| Kopieren   | `Ctrl+C`                 | `⌘C`          |
| Einfügen   | `Ctrl+V`                 | `⌘V`          |

### Sonderaktionen

| Aktion         | Windows/Linux | macOS |
|----------------|---------------|-------|
| Link einfügen  | `Ctrl+K`      | `⌘K`  |
| Drucken        | `Ctrl+P`      | `⌘P`  |

:::info
Weitere Kürzel können in zukünftigen Updates hinzugefügt werden.
:::

Um die aktuelle Referenz zu RichText-Tastaturkürzeln aufzurufen, klicken Sie auf **Help** und wählen Sie die Option **Keyboard shortcuts**:

<div className="img_border">
![Keyboard shortcuts](./assets/richtext/shortcut_reference.png)
</div>

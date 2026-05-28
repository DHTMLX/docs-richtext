---
sidebar_label: RichText-Übersicht
title: RichText-Übersicht
slug: /
description: Eine Übersicht der DHTMLX JavaScript RichText-Bibliothek finden Sie in der Dokumentation. Entdecken Sie Entwickleranleitungen und die API-Referenz, probieren Sie Code-Beispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX RichText herunter.
---

# RichText-Übersicht

**DHTMLX RichText** ist ein flexibler und schlanker WYSIWYG-Editor, der mit JavaScript entwickelt wurde. RichText bietet eine reibungslose Bearbeitungserfahrung in modernen Webanwendungen, eine übersichtliche Benutzeroberfläche, umfangreiche Formatierungsmöglichkeiten und vollständige Kontrolle über die Inhaltsdarstellung. Ob Sie ein CMS, ein internes Verwaltungswerkzeug oder einen eingebetteten Dokumenteneditor entwickeln – RichText lässt sich einfach integrieren und an Ihre Anforderungen anpassen.

Die **DHTMLX RichText**-Komponente umfasst die folgenden Funktionen:

- Zwei [**Layout-Modi**](api/config/layout-mode.md)

- Inhaltsserialisierung in Nur-Text und HTML

- Konfigurierbares [**Toolbar**](api/config/toolbar.md) mit integrierten und benutzerdefinierten Schaltflächen

- Statische [**Menüleiste**](api/config/menubar.md), die ein- oder ausgeblendet werden kann

- Bild-Upload, umfangreiche Formatierung, benutzerdefiniertes Styling und Vollbildmodus

- [Vollständiger API-Zugriff](api/overview/main_overview.md) für [Ereignisbehandlung](api/overview/event_bus_methods_overview.md), [Inhaltsmanipulation](api/overview/methods_overview.md) und [reaktives Zustandsmanagement](api/overview/state_methods_overview.md)

RichText ist framework-unabhängig und lässt sich problemlos mit [React](guides/integration_with_react.md), [Angular](guides/integration_with_angular.md), [Vue](guides/integration_with_vue.md) und [Svelte](guides/integration_with_svelte.md) integrieren, was es für eine Vielzahl von Frontend-Ökosystemen geeignet macht.

Diese Dokumentation bietet detaillierte Anleitungen zu Installation, Konfiguration, Verwendung und Anpassung. Sie finden Beispiele für häufige Anwendungsfälle, [vollständige API-Referenzen](api/overview/main_overview.md) und Best Practices für die Integration von RichText in Ihre Anwendung.

## RichText-Struktur

### Menüleiste

Die RichText-Menüleiste bietet Zugriff auf Bearbeitungsaktionen wie das Erstellen eines neuen Dokuments, Drucken, Importieren/Exportieren von Inhalten und mehr. Sie ist standardmäßig ausgeblendet.

Verwenden Sie die Eigenschaft [`menubar`](api/config/menubar.md), um die Sichtbarkeit umzuschalten. Die Menüleiste kann aktiviert oder deaktiviert werden, ihr Inhalt ist jedoch derzeit nicht konfigurierbar.

<div className="img_border">
![Menüleiste](./assets/richtext/menubar.png)
</div>

### Toolbar

Die RichText-Toolbar bietet schnellen Zugriff auf Textformatierung und strukturelle Bearbeitungsfunktionen. Standardmäßig ist die [Toolbar](api/config/toolbar.md#default-config) aktiviert und zeigt eine vordefinierte Auswahl häufig verwendeter Steuerelemente wie Fett, Kursiv, Schrifteinstellungen, Listenformatierung und mehr an.

Die Eigenschaft [`toolbar`](api/config/toolbar.md) ermöglicht die vollständige Anpassung von Inhalt und Layout der Toolbar. Sie können die Toolbar aktivieren oder deaktivieren, Standardsteuerelemente neu anordnen oder eine vollständig benutzerdefinierte Toolbar mit einem Array aus vordefinierten Schaltflächen-IDs und benutzerdefinierten Schaltflächenobjekten definieren.

<div className="img_border">
![Toolbar](./assets/richtext/toolbar.png)
</div>

### Editor

Der RichText-Editor ist der zentrale Bereich, in dem Benutzer Inhalte erstellen und formatieren. Sie können das Erscheinungsbild und das Verhalten des Editors über Konfigurationsoptionen wie [`value`](api/config/value.md), [`layoutMode`](api/config/layout-mode.md) und [`defaultStyles`](api/config/default-styles.md) steuern. RichText unterstützt außerdem benutzerdefiniertes Styling, das Einbetten von Bildern und responsive Layout-Anpassungen, um den Anforderungen Ihrer Anwendung gerecht zu werden.

#### Zwei Arbeitsmodi

DHTMLX RichText kann Inhalte im „classic"- und „document"-Modus verarbeiten. Sie können den für Sie am besten geeigneten Modus wählen, um komfortabel Text zu bearbeiten. Verwenden Sie die Eigenschaft [`layoutMode`](api/config/layout-mode.md), um den Modus programmgesteuert zu wechseln.

- **„classic"**

<div className="img_border">
![Classic-Modus](./assets/richtext/classic_mode.png)
</div>

- **„document"**

<div className="img_border">
![Document-Modus](./assets/richtext/document_mode.png)
</div>

## Unterstützte Formate

Der RichText-Editor unterstützt das [Parsen](api/methods/set-value.md) und die [Serialisierung](api/methods/get-value.md) von Inhalten in den Formaten **HTML** und Nur-Text.

#### HTML-Format

<div className="img_border">
![HTML-Format](./assets/richtext/html_format.png)
</div>

#### Textformat

<div className="img_border">
![Textformat](./assets/richtext/text_format.png)
</div>

## Tastaturkürzel

Der RichText-Editor unterstützt eine Reihe gängiger Tastaturkürzel für schnelleres Formatieren und Bearbeiten. Die Kürzel folgen plattformspezifischen Konventionen und sind sowohl unter **Windows/Linux** (`Ctrl`) als auch unter **macOS** (`⌘`) verfügbar.

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
Weitere Tastaturkürzel können in zukünftigen Updates hinzugefügt werden.
:::

Um die aktuelle Referenz zu den RichText-Tastaturkürzeln aufzurufen, drücken Sie **Help** und wählen Sie die Option **Keyboard shortcuts**:

<div className="img_border">
![Tastaturkürzel](./assets/richtext/shortcut_reference.png)
</div>

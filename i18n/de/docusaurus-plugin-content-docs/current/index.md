---
sidebar_label: RichText Übersicht
title: RichText Übersicht
slug: /
description: In der Dokumentation erhalten Sie einen Überblick über die DHTMLX JavaScript RichText-Bibliothek. Durchstöbern Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX RichText herunter.
---

# RichText Übersicht

**DHTMLX RichText** ist ein leichtgewichtiger und flexibler WYSIWYG-Editor auf JavaScript-Basis. Er wurde entwickelt, um das Bearbeiten in modernen Webanwendungen einfach zu machen - mit einer übersichtlichen Oberfläche, zahlreichen Formatierungswerkzeugen und vollständiger Kontrolle über die Anzeige der Inhalte. Ob für ein CMS, ein Admin-Dashboard oder einen eingebetteten Dokumenteneditor: RichText lässt sich in verschiedenste Projekte integrieren und anpassen.

**DHTMLX RichText** bietet folgende Funktionen:

- Zwei [**Layout-Modi**](api/config/layout-mode.md)

- Inhalte können als Klartext oder HTML gespeichert werden

- Eine [**Toolbar**](api/config/toolbar.md), die sich mit integrierten und eigenen Buttons konfigurieren lässt

- Eine [**Menüleiste**](api/config/menubar.md), die statisch ist und ein- oder ausgeblendet werden kann

- Unterstützung für das Hochladen von Bildern, umfangreiche Formatierungen, eigene Styles und Bearbeitung im Vollbildmodus

- [Voller API-Zugriff](api/overview/main_overview.md) für [Event-Handling](api/overview/event_bus_methods_overview.md), [Inhaltsänderungen](api/overview/methods_overview.md) und [reaktives State-Management](api/overview/state_methods_overview.md)

RichText funktioniert mit jedem Framework und kann mit [React](guides/integration_with_react.md), [Angular](guides/integration_with_angular.md), [Vue](guides/integration_with_vue.md) oder [Svelte](guides/integration_with_svelte.md) verwendet werden. Damit passt es in alle gängigen Frontend-Setups.

Diese Dokumentation behandelt Installation, Einrichtung, Verwendung und Anpassungsmöglichkeiten. Es gibt Beispiele für typische Aufgaben, [vollständige API-Dokumentation](api/overview/main_overview.md) und Tipps zur Integration von RichText in verschiedene Anwendungen.

## RichText Aufbau

### Menüleiste

Die RichText-Menüleiste bietet schnellen Zugriff auf Bearbeitungsaktionen wie das Erstellen eines neuen Dokuments, Drucken, Importieren oder Exportieren und mehr. Standardmäßig ist sie ausgeblendet.

Mit der Eigenschaft [`menubar`](api/config/menubar.md) wird gesteuert, ob die Menüleiste sichtbar ist oder nicht. Sie können die Menüleiste ein- oder ausschalten; die einzelnen Elemente können derzeit jedoch nicht geändert werden.

import menubar from '@site/static/img/richtext/menubar.png';

<img
  src={menubar}
  alt="Menüleiste"
  className="img_border"
/>

### Toolbar

Mit der RichText-Toolbar können Nutzer Text schnell formatieren und die Struktur bearbeiten. Standardmäßig ist die [Toolbar](api/config/toolbar.md#standardkonfiguration) aktiviert und zeigt eine Auswahl gängiger Steuerelemente wie Fett, Kursiv, Schriftarteinstellungen, Listen und mehr.

Über die Eigenschaft [`toolbar`](api/config/toolbar.md) können Sie festlegen, welche Steuerelemente angezeigt werden und wie sie angeordnet sind. Sie können die Toolbar ein- oder ausschalten, die Standardbuttons umsortieren oder ein eigenes Set aus integrierten und benutzerdefinierten Buttons zusammenstellen.

import toolbar from '@site/static/img/richtext/toolbar.png';

<img
  src={toolbar}
  alt="Toolbar"
  className="img_border"
/>

### Editor

Das Herzstück von RichText ist der Editor, in dem alle Inhalte erstellt und formatiert werden. Aussehen und Verhalten des Editors können Sie mit Optionen wie [`value`](api/config/value.md), [`layoutMode`](api/config/layout-mode.md) und [`defaultStyles`](api/config/default-styles.md) anpassen. RichText ermöglicht eigene Styles, das Einfügen von Bildern und eine flexible Anpassung des Layouts an verschiedene Bildschirme und Anforderungen.

#### Zwei Arbeitsmodi

DHTMLX RichText bietet zwei Darstellungsarten für Inhalte: "Klassisch" und "Dokument"-Modus. Wählen Sie die Variante, die am besten zu Ihrem Bearbeitungsstil passt. Umgeschaltet wird über die Eigenschaft [`layoutMode`](api/config/layout-mode.md).

- **"klassisch"**

import classic_mode from '@site/static/img/richtext/classic_mode.png';

<img
  src={classic_mode}
  alt="Klassischer Modus"
  className="img_border"
/>

- **"dokument"**

import document_mode from '@site/static/img/richtext/document_mode.png';

<img
  src={document_mode}
  alt="Dokumentenmodus"
  className="img_border"
/>

## Unterstützte Formate

RichText kann Inhalte sowohl als **HTML** als auch als Klartext [einlesen](api/methods/set-value.md) und [speichern](api/methods/get-value.md).

#### HTML-Format

import html_format from '@site/static/img/richtext/html_format.png';

<img
  src={html_format}
  alt="HTML-Format"
  className="img_border"
/>

#### Textformat

import text_format from '@site/static/img/richtext/text_format.png';

<img
  src={text_format}
  alt="Textformat"
  className="img_border"
/>

## Tastenkombinationen

RichText unterstützt zahlreiche Standard-Tastenkombinationen für schnelleres Bearbeiten und Formatieren. Die Shortcuts entsprechen den gängigen Konventionen der jeweiligen Plattform und funktionieren sowohl unter **Windows/Linux** (`Ctrl`) als auch unter **macOS** (`⌘`).

### Textformatierung

| Aktion         | Windows/Linux   | macOS         |
|----------------|----------------|---------------|
| Fett*          | `Ctrl+B`        | `⌘B`          |
| Kursiv         | `Ctrl+I`        | `⌘I`          |
| Unterstrichen  | `Ctrl+U`        | `⌘U`          |
| Durchgestrichen| `Ctrl+Shift+X`  | `⌘⇧X`         |

### Bearbeitung

| Aktion   | Windows/Linux            | macOS         |
|----------|--------------------------|---------------|
| Rückgängig| `Ctrl+Z`                 | `⌘Z`          |
| Wiederholen| `Ctrl+Y` / `Ctrl+Shift+Z`| `⌘Y` / `⌘⇧Z`  |
| Ausschneiden| `Ctrl+X`               | `⌘X`          |
| Kopieren   | `Ctrl+C`                | `⌘C`          |
| Einfügen   | `Ctrl+V`                | `⌘V`          |

### Spezielle Aktionen

| Aktion        | Windows/Linux | macOS |
|---------------|---------------|-------|
| Link einfügen | `Ctrl+K`      | `⌘K`  |
| Drucken       | `Ctrl+P`      | `⌘P`  |

:::info
Weitere Tastenkombinationen könnten in zukünftigen Updates hinzukommen.
:::

Für eine vollständige Liste der RichText-Tastenkombinationen klicken Sie einfach auf **Hilfe** und wählen **Tastenkombinationen**:

import shortcut_reference from '@site/static/img/richtext/shortcut_reference.png';

<img
  src={shortcut_reference}
  alt="Shortcut-Referenz"
  className="img_border"
/>

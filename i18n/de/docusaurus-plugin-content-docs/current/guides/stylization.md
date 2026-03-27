---
title: Gestaltung
sidebar_label: Gestaltung
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie alles über die Gestaltung. Lesen Sie Entwickleranleitungen und API-Referenz, sehen Sie sich Code-Beispiele und Live-Demos an und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX RichText herunter.
---

# Gestaltung

Sie können das Erscheinungsbild von DHTMLX RichText vollständig anpassen, indem Sie CSS-Variablen überschreiben und benutzerdefinierte Stile auf bestimmte Teile des Widgets anwenden.

Diese Anleitung zeigt, wie Sie ein **dunkles Theme** anwenden und verfügbare Klassennamen verwenden, um die Menüleiste, Toolbar, Popups und den Inhaltsbereich des Editors zu gestalten.

## Standardstruktur und Klassennamen {#default-structure-and-class-names}

RichText verwendet die folgenden Kernklassen zur Strukturierung seiner Benutzeroberfläche:

| Klassenname            | Beschreibung                                        |
|------------------------|-----------------------------------------------------|
| `.wx-richtext`         | Root-Container des RichText-Widgets                 |
| `.wx-richtext-menubar` | Container für die Menüleiste                        |
| `.wx-richtext-menu`    | Container für das Dropdown-Menü der Menüleiste      |
| `.wx-richtext-toolbar` | Container für die Toolbar                           |
| `.wx-editor-area`      | Container für den Haupt-Bearbeitungsbereich         |

Sie können diese Klassen in Ihren benutzerdefinierten CSS-Selektoren verwenden, um das Erscheinungsbild des RichText-Editors zu überschreiben.

## Standardstile überschreiben {#overriding-default-styles}

Sie können die Standardstile von RichText überschreiben, indem Sie CSS-Variablen am `#root`-Container oder an bestimmten Unterelementen neu definieren:

```html
<div id="root" style="width: 100%; height: 100%;"></div>

<style>
  #root,
  .wx-richtext-menu {
    --wx-background: #404151;
    --wx-background-alt: #212329;
    --wx-color-primary: #14B195;
    --wx-color-font: #FFFFFF;
    --wx-border: 1px solid #6B6C79;
    --wx-color-secondary-hover: rgba(20, 177, 149, 0.12);
    --wx-button-active: rgba(20, 177, 149, 0.22);
    --wx-icon-color: var(--wx-color-font);
    --wx-color-font-alt: #9FA1AE;
    --wx-color-font-disabled: #9FA1AE;
    --wx-popup-border: var(--wx-border);

    color-scheme: dark;
  }

  .wx-richtext-menu {
    border: var(--wx-border);
  }
</style>
```

:::note[Hinweis]
Diese Stile wenden einen dunklen Hintergrund an, passen die Schaltflächen- und Symbolfarben an und verbessern die Sichtbarkeit für dunkle UI-Themes.
:::

## Liste der unterstützten CSS-Variablen {#list-of-supported-css-variables}

| Variablenname                | Beschreibung                                                                                |
| ---------------------------- | --------------------------------------------------------------------------------------------|
| `--wx-background`            | Hintergrundfarbe des Editors und der Popups                                                 |
| `--wx-background-alt`        | Alternativer Hintergrund für die Menüleiste                                                 |
| `--wx-color-primary`         | Akzentfarbe für Links, Blockzitate und Rahmen beim Skalieren von Bildern                    |
| `--wx-color-font`            | Hauptschriftfarbe (für Editor, Menüleiste und Toolbar)                                      |
| `--wx-color-font-alt`        | Alternative Schriftfarbe                                                                    |
| `--wx-color-font-disabled`   | Schriftfarbe für deaktivierte Elemente (für Menüleisten- und Toolbar-Elemente)              |
| `--wx-border`                | Rahmenstil für den gesamten Editor                                                          |
| `--wx-color-secondary-hover` | Hover-Zustand-Hintergrund für Schaltflächen in Menüleiste und Toolbar                      |
| `--wx-button-active`         | Aktiver-Zustand-Hintergrund für Schaltflächen in Menüleiste und Toolbar                    |
| `--wx-icon-color`            | Farbe für Toolbar-Pfeilsymbole bei Dropdown-Elementen                                      |
| `--wx-popup-border`          | Rahmen für Popup-Elemente                                                                   |

## Empfehlungen {#best-practices}

* Verwenden Sie `color-scheme: dark`, um die native Eingabegestaltung im Dunkelmodus zu verbessern
* Vermeiden Sie das Ändern von Layout-bezogenen Eigenschaften (wie `display`, `position`), sofern nicht erforderlich

## Live-Demo {#live-demo}

In diesem Snippet sehen Sie, wie Sie einen benutzerdefinierten Stil auf RichText anwenden:

<iframe src="https://snippet.dhtmlx.com/q8j4qqq9?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

**Verwandte Artikel:** [Konfiguration](guides/configuration.md)

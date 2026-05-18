---
title: Gestaltung
sidebar_label: Gestaltung
description: Hier erfahren Sie mehr über die Gestaltungsmöglichkeiten in der Dokumentation der DHTMLX JavaScript RichText-Bibliothek. Durchsuchen Sie Entwicklerleitfäden und API-Referenz, probieren Sie Codebeispiele und Live-Demos aus, und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText herunter.
---

# Gestaltung

Passen Sie das Erscheinungsbild von DHTMLX RichText an, indem Sie CSS-Variablen am Container des Editors und seinen Unterelementen überschreiben.

Diese Anleitung zeigt, wie ein **dunkles Theme** angewendet und die Menüleiste, Toolbar, Popup und der Inhaltsbereich mit CSS-Klassen-Selektoren gezielt angesprochen werden.

## Standardstruktur und Klassennamen

RichText verwendet die folgenden Kernklassen zur Strukturierung der Benutzeroberfläche:

| Klassenname            | Beschreibung                                      |
|------------------------|---------------------------------------------------|
| `.wx-richtext`         | Wurzel-Container des RichText-Widgets             |
| `.wx-richtext-menubar` | Container für die Menüleiste                      |
| `.wx-richtext-menu`    | Container für das Dropdown-Menü der Menüleiste    |
| `.wx-richtext-toolbar` | Container für die Toolbar                         |
| `.wx-editor-area`      | Container für den Hauptbereich des editierbaren Inhalts |

Verwenden Sie diese Klassen in benutzerdefinierten CSS-Selektoren, um das Erscheinungsbild des Editors zu überschreiben.

## Standardstile überschreiben

Um die Standardstile zu überschreiben, definieren Sie CSS-Variablen am `#root`-Container oder an bestimmten Unterelementen neu:

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

:::note
Diese Stile wenden einen dunklen Hintergrund an, passen die Farben von Schaltflächen und Icons an und verbessern die Lesbarkeit für dunkle UI-Themes.
:::

## Unterstützte CSS-Variablen

| Variablenname                | Beschreibung                                                                  |
| ---------------------------- | ----------------------------------------------------------------------------- |
| `--wx-background`            | Hintergrundfarbe des Editors und des Popups                                   |
| `--wx-background-alt`        | Alternativer Hintergrund für die Menüleiste                                   |
| `--wx-color-primary`         | Akzentfarbe für Links, Blockzitate und Ziehpunkte zur Bildgrößenänderung      |
| `--wx-color-font`            | Hauptschriftfarbe (für Editor, Menüleiste und Toolbar)                        |
| `--wx-color-font-alt`        | Alternative Schriftfarbe                                                      |
| `--wx-color-font-disabled`   | Schriftfarbe für deaktivierte Elemente (in Menüleiste und Toolbar)            |
| `--wx-border`                | Rahmenstil für den gesamten Editor                                            |
| `--wx-color-secondary-hover` | Hintergrundfarbe beim Hover-Zustand für Schaltflächen in Menüleiste und Toolbar |
| `--wx-button-active`         | Hintergrundfarbe im aktiven Zustand für Schaltflächen in Menüleiste und Toolbar |
| `--wx-icon-color`            | Farbe der Dropdown-Pfeil-Icons in der Toolbar                                 |
| `--wx-popup-border`          | Rahmen für Popup-Elemente                                                     |

## Empfehlungen

* Verwenden Sie `color-scheme: dark`, um die native Darstellung von Eingabefeldern im dunklen Modus zu verbessern
* Vermeiden Sie es, layout-bezogene Eigenschaften (wie `display`, `position`) ohne triftigen Grund zu ändern

:::tip[Tipp]
Für typografische Stile pro Tag (Schriftfamilie, Schriftgröße, Farbe, Hintergrund für `h1`, `p`, `blockquote` und andere Block-Tags) verwenden Sie die Konfigurationseigenschaft [`defaultStyles`](api/config/default-styles.md) mit passenden CSS-Regeln. Das vollständige Muster finden Sie im [Konfigurationsleitfaden](guides/configuration.md#configure-default-styles).
:::

## Live-Demo

Das folgende Beispiel wendet einen benutzerdefinierten Stil auf RichText an:

<iframe src="https://snippet.dhtmlx.com/q8j4qqq9?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

**Verwandte Artikel:** [Konfiguration](guides/configuration.md)

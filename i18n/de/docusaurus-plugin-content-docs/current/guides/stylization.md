---
title: Gestaltung
sidebar_label: Gestaltung
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie alles über die Gestaltungsmöglichkeiten. Durchsuchen Sie Entwicklerhandbücher und API-Referenz, probieren Sie Code-Beispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText herunter.
---

# Gestaltung {#styling}

Passen Sie das Erscheinungsbild von DHTMLX RichText an, indem Sie CSS-Variablen am Container des Editors und seinen Unterelementen überschreiben.

Dieses Handbuch zeigt, wie Sie ein **dunkles Theme** anwenden und die Menüleiste, Symbolleiste, Popups und den Inhaltsbereich mit CSS-Klassenselektoren ansprechen.

## Standardstruktur und Klassennamen {#default-structure-and-class-names}

RichText verwendet die folgenden Kernklassen zur Strukturierung der Benutzeroberfläche:

| Klassenname            | Beschreibung                                      |
|------------------------|---------------------------------------------------|
| `.wx-richtext`         | Root-Container des RichText-Widgets               |
| `.wx-richtext-menubar` | Container für die Menüleiste                      |
| `.wx-richtext-menu`    | Container für das Dropdown-Menü der Menüleiste    |
| `.wx-richtext-toolbar` | Container für die Symbolleiste                    |
| `.wx-editor-area`      | Container für den Hauptbereich zum Bearbeiten von Inhalten |

Verwenden Sie diese Klassen in benutzerdefinierten CSS-Selektoren, um das Erscheinungsbild des Editors zu überschreiben.

## Standardstile überschreiben {#override-default-styles}

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

:::note[Hinweis]
Diese Stile setzen einen dunklen Hintergrund, passen Button- und Icon-Farben an und verbessern die Lesbarkeit für dunkle UI-Themes.
:::

## Unterstützte CSS-Variablen {#supported-css-variables}

| Variablenname                | Beschreibung                                       |
| ---------------------------- | -------------------------------------------------- |
| `--wx-background`            | Hintergrundfarbe des Editors und der Popups        |
| `--wx-background-alt`        | Alternativer Hintergrund für die Menüleiste        |
| `--wx-color-primary`         | Akzentfarbe für Links, Blockzitate und Bildgrößen-Handles |
| `--wx-color-font`            | Hauptschriftfarbe (für Editor, Menüleiste und Symbolleiste) |
| `--wx-color-font-alt`        | Alternative Schriftfarbe                           |
| `--wx-color-font-disabled`   | Farbe für deaktivierten Text (für Elemente der Menü- und Symbolleiste) |
| `--wx-border`                | Rahmenstil, der im gesamten Editor verwendet wird  |
| `--wx-color-secondary-hover` | Hover-Hintergrund für Buttons in Menü- und Symbolleiste |
| `--wx-button-active`         | Aktiver Hintergrund für Buttons in Menü- und Symbolleiste |
| `--wx-icon-color`            | Farbe der Dropdown-Pfeil-Icons in der Symbolleiste |
| `--wx-popup-border`          | Rahmen für Popup-Elemente                          |

## Best Practices {#best-practices}

* Verwenden Sie `color-scheme: dark`, um die native Eingabe-Gestaltung im Dunkelmodus zu verbessern
* Vermeiden Sie es, layout-bezogene Eigenschaften (wie `display`, `position`) ohne triftigen Grund zu ändern

:::tip[Tipp]
Für typografische Einstellungen je Tag (Schriftfamilie, Schriftgröße, Farbe, Hintergrund bei `h1`, `p`, `blockquote` und anderen Block-Tags) verwenden Sie die Konfigurationseigenschaft [`defaultStyles`](api/config/default-styles.md) mit passenden CSS-Regeln. Das vollständige Muster finden Sie im [Konfigurationshandbuch](guides/configuration.md#configure-default-styles).
:::

## Live-Demo {#live-demo}

Das folgende Beispiel wendet einen benutzerdefinierten Stil auf RichText an:

<iframe src="https://snippet.dhtmlx.com/q8j4qqq9?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

**Verwandte Artikel:** [Konfiguration](guides/configuration.md)

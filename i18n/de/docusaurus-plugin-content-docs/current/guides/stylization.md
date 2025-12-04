---
title: Styling
sidebar_label: Styling
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie mehr über das Styling. Durchstöbern Sie Entwicklerhandbücher und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX RichText herunter.
---

# Styling

DHTMLX RichText kann mithilfe von CSS-Variablen oder durch gezieltes Ansprechen bestimmter Widget-Bereiche mit eigenen Styles individuell gestaltet werden.

Hier finden Sie eine kurze Anleitung, wie Sie ein **Dark Theme** einrichten und Klassennamen nutzen, um verschiedene Bereiche des Editors wie Menüleiste, Toolbar, Popup und Inhaltsbereich zu stylen.

## Standardstruktur und Klassennamen

RichText verwendet folgende Hauptklassen für das UI-Layout:

| Klassenname               | Beschreibung                                   |
|--------------------------|------------------------------------------------|
| `.wx-richtext`           | Wurzelcontainer des RichText-Widgets           |
| `.wx-richtext-menubar`   | Container für die Menüleiste                   |
| `.wx-richtext-menu`      | Container für das Dropdown-Menü der Menüleiste |
| `.wx-richtext-toolbar`   | Container für die Toolbar                      |
| `.wx-editor-area`        | Container für den Haupt-Inhaltsbereich         |

Diese Klassen können in Ihrem CSS verwendet werden, um das Erscheinungsbild des RichText-Editors anzupassen.

## Standard-Styles überschreiben

Um RichText ein individuelles Aussehen zu geben, aktualisieren Sie einfach die CSS-Variablen am `#root`-Container oder an bestimmten Unterelementen:

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
Diese Konfiguration sorgt für einen dunklen Hintergrund, aktualisiert Button- und Icon-Farben und verbessert die Lesbarkeit im Dark-UI.
:::

## Liste der unterstützten CSS-Variablen

| Variablenname                | Beschreibung                                 |
|----------------------------- |----------------------------------------------|
| `--wx-background`            | Hintergrundfarbe des Editors und Popups      |
| `--wx-background-alt`        | Alternative Hintergrundfarbe für die Menüleiste|
| `--wx-color-primary`         | Akzentfarbe für Links, Blockzitate und Rahmen von skalierbaren Bildern |
| `--wx-color-font`            | Hauptschriftfarbe (für Editor, Menüleiste und Toolbar)|
| `--wx-color-font-alt`        | Alternative Schriftfarbe                     |
| `--wx-color-font-disabled`   | Deaktivierte Schriftfarbe (für Menüleisten- und Toolbarelemente)|
| `--wx-border`                | Rahmenstil im gesamten Editor                |
| `--wx-color-secondary-hover` | Hintergrundfarbe im Hover-Zustand für Buttons in Menüleiste und Toolbar|
| `--wx-button-active`         | Hintergrundfarbe im aktiven Zustand für Buttons in Menüleiste und Toolbar|
| `--wx-icon-color`            | Farbe für Toolbar-Pfeilicons in Dropdowns    |
| `--wx-popup-border`          | Rahmen für Popup-Elemente                    |

## Best Practices

* Die Eigenschaft `color-scheme: dark` sorgt dafür, dass native Eingabefelder im Dark Mode korrekt dargestellt werden
* Sie sollten layoutbezogene CSS-Eigenschaften (wie `display` oder `position`) nur ändern, wenn es wirklich notwendig ist

## Live-Demo

Hier ein kurzes Beispiel, wie eigene Styles für RichText hinzugefügt werden können:

<iframe src="https://snippet.dhtmlx.com/q8j4qqq9?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

**Verwandte Artikel:** [Customization](guides/configuration.md)

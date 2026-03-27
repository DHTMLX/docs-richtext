---
sidebar_label: Was ist neu
title: Was ist neu
description: In der Dokumentation der DHTMLX JavaScript-UI-Bibliothek erfahren Sie, was in DHTMLX RichText neu ist und können die Versionshistorie einsehen. Durchsuchen Sie Entwicklerleitfäden und API-Referenz, probieren Sie Codebeispiele und Live-Demos aus, und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText herunter.
---

## Version 2.0.5 {#version-205}

Veröffentlicht am 6. März 2026

### Fehlerbehebungen {#fixes}

- IME-Eingabe wird nicht korrekt verarbeitet
- Kompositionsbasierte Eingabe (z. B. Chinesisch, Japanisch, Koreanisch auf dem Desktop) wird nicht korrekt verarbeitet
- Die Eigenschaften `margin-left` und `line-height` werden beim HTML-Parsing ignoriert
- Inline-Elemente erben Eigenschaften von übergeordneten Block-Elementen
- Text kann nicht zwischen zwei Editor-Instanzen kopiert werden
- Die Auswahl wird bei zwei (oder mehr) aktiven Editor-Instanzen nicht korrekt behandelt
- Der Cursor wird falsch positioniert, wenn der einzige Inhalt eines Absatzes ein Bild ist
- Unbegrenzte Verschachtelung von Subscript- und Superscript-Elementen
- Beim Einfügen von Bildern werden diese inline eingefügt, anstatt sie zunächst hochzuladen
- Leere Inline-Blöcke können an bestimmten Positionen (erste oder letzte Zeile) nicht entfernt werden
- Der Editor scrollt beim Tippen nicht zum Cursor
- Eingabe auf Android wird nicht korrekt verarbeitet
- Fehlerhafte Auswahlbehandlung für HR-Elemente
- Fehlerhafte Darstellung bei leeren Anfangswerten
- Das Kopieren von Inhalten kann fehlschlagen, wenn diese selbstschließende Blöcke enthalten
- Chrome: Emojis können nicht über das Kontextmenü eingefügt werden
- Firefox: Alles auswählen (CTRL+A) wird nicht korrekt behandelt

## Version 2.0.4 {#version-204}

Veröffentlicht am 15. Oktober 2025

### Fehlerbehebungen {#fixes-1}

- Fehlerhafte Bereichsauswahl für Absätze
- Link-Popups werden nicht angezeigt, wenn sie an verlinkte Bilder angrenzen
- Anfängliche Toolbar-Werte stimmen nicht mit dem tatsächlichen Inhalt überein

## Version 2.0.3 {#version-203}

Veröffentlicht am 27. August 2025

### Fehlerbehebungen {#fixes-2}

- Ein Klick auf eine horizontale Linie verursacht einen Skriptfehler
- Der Standard-Zeilenabstand ist falsch
- Content-Styles enthalten doppelte Selektoren
- Nur-Text-Blöcke ignorieren Style-Änderungen beim HTML-Parsing
- Der Parser ignoriert maskierte Schriftartnamen in HTML
- Der Parser ignoriert die Eigenschaften `margin-left` und `line-height` in HTML

## Version 2.0.2 {#version-202}

Veröffentlicht am 4. August 2025

### Fehlerbehebungen {#fixes-3}

- Paketinhalt aktualisiert

## Version 2.0.1 {#version-201}

Veröffentlicht am 30. Juli 2025

### Fehlerbehebungen {#fixes-4}

- Typdefinitionen für die Eigenschaft `defaultStyles` aktualisiert

## Version 2.0 {#version-20}

Veröffentlicht am 30. Juli 2025

:::note[Hinweis]
Das API von v1.2 ist nicht kompatibel mit v2.0. Weitere Informationen finden Sie in der [**Migrationsanleitung**](news/migration.md).
:::

### Neue Funktionen {#new-functionality}

- **Neuartige Text-Darstellung**
  Erleben Sie eine flüssigere, schnellere und präzisere Textdarstellung mit unserer neuen Engine

- **Detaillierte Toolbar-Konfiguration**
  Übernehmen Sie die vollständige Kontrolle über die Toolbar:
  - [Einzelne Toolbar-Steuerelemente](guides/configuration.md/#default-toolbar-controls) und deren Reihenfolge festlegen
  - [Benutzerdefinierte Steuerelemente](guides/configuration.md/#custom-toolbar-controls) hinzufügen

- **Optionale [Menüleiste](api/config/menubar.md)**
  Aktivieren Sie eine klassische Menüoberfläche am oberen Rand des Editors

- **Erweiterter [Dokumentenmodus](guides/configuration.md/#layout-modes)**
  Unterstützung für verschiedene Dokumentgrößen hinzugefügt

- **Bildunterstützung**
  - Bilder mit [Upload-Funktionen](api/config/image-upload-url.md) einfügen
  - [Bildgröße](api/events/resize-image.md) interaktiv ändern

- **Verbesserte Link-Erfahrung**
  Neu gestaltete [Popup-Interaktionen](api/events/show-popup.md) für bessere Benutzerfreundlichkeit

- **Neue Formatierungswerkzeuge**
  - Textausrichtung: **Blocksatz**
  - [Horizontale Linien](api/events/insert-line.md) einfügen
  - [Einzug](api/events/indent.md) / [Ausrücken](api/events/outdent.md)
  - [Zeilenabstand](api/events/set-line-height.md) festlegen
  - [Subscript](api/events/subscript.md) / [Superscript](api/events/superscript.md) anwenden

- **Listenverwaltung**
  [Listen einfügen und verwalten](api/events/insert-list.md) Sie problemlos in Ihren Inhalten

- **Import/Export & Drucken**
  - [DOCX](api/events/import.md)-Dateien importieren
  - Inhalte als DOCX oder PDF [exportieren](api/events/export.md)
  - Dokumente direkt aus dem Editor [drucken](api/events/print.md)

- **Tastaturkürzel**
  Erweiterter Support für gängige Formatierungs- und Bearbeitungskürzel

### Neues API {#new-api}

#### Neue Eigenschaften {#new-properties}

- [`fullscreenMode`](api/config/fullscreen-mode.md)
- [`imageUploadUrl`](api/config/image-upload-url.md)
- [`layoutMode`](api/config/layout-mode.md)
- [`locale`](api/config/locale.md)
- [`menubar`](api/config/menubar.md)
- [`toolbar`](api/config/toolbar.md)
- [`value`](api/config/value.md)

#### Neue Methoden {#new-methods}

- [`setConfig()`](api/methods/set-config.md) — Konfiguration dynamisch aktualisieren
- [`setLocale()`](api/methods/set-locale.md) — Locale zur Laufzeit ändern

#### Neue interne Methoden {#new-internal-methods}

- [`api.exec()`](api/internal/exec.md)
- [`api.intercept()`](api/internal/intercept.md)
- [`api.getReactiveState()`](api/internal/get-reactive-state.md)
- [`api.getState()`](api/internal/get-state.md)

#### Neue Ereignisse {#new-events}

Eine vollständige Liste der neuen Ereignisse finden Sie [hier](api/overview/events_overview.md)

### Aktualisiertes API {#updated-api}

#### Aktualisierte Eigenschaften {#updated-properties}

- [`defaultStyles`](api/config/default-styles.md)

#### Aktualisierte Methoden {#updated-methods}

- [`setValue()`](api/methods/set-value.md)
- [`getValue()`](api/methods/get-value.md)

#### Aktualisierte interne Methoden {#updated-internal-methods}

- [`api.detach()`](api/internal/detach.md)
- [`api.on()`](api/internal/on.md)

## Entferntes API {#removed-api}

:::warning[Warnung]
Verwenden Sie das entfernte API nicht in Ihren Projekten! <br/> Weitere Informationen finden Sie im Thema [Migration](news/migration.md).
:::

### [Entfernte Eigenschaften](news/migration.md#properties-migration) {#removed-properties}

- [`customStats`](news/migration.md#--customstats)
- [`mode`](news/migration.md#--mode--layoutmode)
- [`toolbarBlocks`](news/migration.md#--toolbarblocks--toolbar)

### [Entfernte Methoden](news/migration.md#methods-migration) {#removed-methods}

- `exitFullScreen()`
- `fullScreen()`
- `getEditorAPI()`
- `getStats()`
- `paint()`

### Entfernte interne Methoden {#removed-internal-methods}

- [`events.fire()`](news/migration.md#--fire--use-exec-and-intercept)

### Entfernte Ereignisse {#removed-events}

- `Action`
- `Change`
- `selectionChange`
- `selectionRefresh`

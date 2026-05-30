---
sidebar_label: Was ist neu
title: Was ist neu
description: Entdecken Sie die Neuerungen in DHTMLX RichText und den Versionsverlauf in der Dokumentation der DHTMLX JavaScript UI-Bibliothek. Lesen Sie Entwicklerleitfäden und API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText herunter.
---

## Version 2.0.5 

Veröffentlicht am 6. März 2026

### Fehlerbehebungen

- IME-Eingabe wird nicht korrekt verarbeitet
- Kompositionsbasierte Eingabe (z. B. Chinesisch, Japanisch, Koreanisch auf dem Desktop) wird nicht korrekt verarbeitet
- Die Eigenschaften `margin-left` und `line-height` werden beim Parsen von HTML ignoriert
- Inline-Elemente erben Eigenschaften von übergeordneten Block-Elementen
- Text zwischen zwei Editor-Instanzen kann nicht kopiert werden
- Die Auswahl wird bei zwei (oder mehr) aktiven Editor-Instanzen nicht korrekt behandelt
- Der Cursor wird falsch positioniert, wenn der einzige Inhalt im Absatz ein Bild ist
- Unbegrenzte Umbrüche bei Tiefgestellt- und Hochgestellt-Elementen
- Beim Einfügen von Bildern werden diese direkt eingebettet, anstatt sie zunächst hochzuladen
- Leere Inline-Blöcke können an bestimmten Positionen (erste oder letzte Zeile) nicht entfernt werden
- Der Editor scrollt beim Tippen nicht zum Cursor
- Eingabe auf Android wird nicht korrekt verarbeitet
- Fehlerhafte Auswahlbehandlung für HR-Elemente
- Fehlerhafte Darstellung bei leeren Anfangswerten
- Das Kopieren von Inhalten kann fehlschlagen, wenn diese selbstschließende Blöcke enthalten
- Chrome: Emojis können nicht über das Kontextmenü eingefügt werden
- Firefox: „Alles auswählen" (STRG+A) wird nicht korrekt behandelt

## Version 2.0.4

Veröffentlicht am 15. Oktober 2025

### Fehlerbehebungen

- Fehlerhafte Bereichsauswahl für Absätze
- Link-Popups werden nicht angezeigt, wenn sie sich neben verknüpften Bildern befinden
- Anfängliche Toolbar-Werte stimmen nicht mit dem tatsächlichen Inhalt überein

## Version 2.0.3

Veröffentlicht am 27. August 2025

### Fehlerbehebungen

- Ein Klick auf eine horizontale Linie verursacht einen Skriptfehler
- Die standardmäßige Zeilenhöhe ist falsch
- Inhaltsstile enthalten doppelte Selektoren
- Nur-Text-Blöcke ignorieren Stiländerungen beim Parsen von HTML
- Der Parser ignoriert Schriftartennamen mit Escapezeichen in HTML
- Der Parser ignoriert die Eigenschaften `margin-left` und `line-height` in HTML

## Version 2.0.2

Veröffentlicht am 4. August 2025

### Fehlerbehebungen

- Paketinhalt aktualisiert

## Version 2.0.1

Veröffentlicht am 30. Juli 2025

### Fehlerbehebungen

- Typdefinitionen für die Eigenschaft `defaultStyles` aktualisiert

## Version 2.0

Veröffentlicht am 30. Juli 2025

:::note
Die API von v1.2 ist nicht mit v2.0 kompatibel. Weitere Informationen finden Sie im [**Migrationsleitfaden**](news/migration.md).
:::

### Neue Funktionen

- **Textwiedergabe der nächsten Generation**  
  Erleben Sie eine flüssigere, schnellere und präzisere Textwiedergabe mit unserer neuen Engine

- **Granulare Toolbar-Konfiguration**  
  Übernehmen Sie die volle Kontrolle über die Toolbar:  
  - Definieren Sie [einzelne Toolbar-Steuerelemente](guides/configuration.md#default-toolbar-controls) und deren Reihenfolge
  - Fügen Sie [benutzerdefinierte Steuerelemente](guides/configuration.md#add-custom-toolbar-controls) hinzu

- **Optionale [Menüleiste](api/config/menubar.md)**  
  Aktivieren Sie eine klassische menübasierte Oberfläche am oberen Rand des Editors

- **Verbesserter [Dokumentmodus](guides/configuration.md#layout-modes)**  
  Unterstützung für verschiedene Dokumentgrößen hinzugefügt

- **Bildunterstützung**  
  - Bilder mit [Upload-Funktion](api/config/image-upload-url.md) einfügen  
  - [Bilder interaktiv skalieren](api/events/resize-image.md)  

- **Verbesserte Link-Erfahrung**  
  Neu gestaltete [Popup-Interaktionen](api/events/show-popup.md) für bessere Benutzerfreundlichkeit

- **Neue Formatierungswerkzeuge**  
  - Textausrichtung: **Blocksatz**  
  - [Horizontale Linien](api/events/insert-line.md) einfügen  
  - [Einzug vergrößern](api/events/indent.md) / [Einzug verkleinern](api/events/outdent.md)  
  - [Zeilenhöhe](api/events/set-line-height.md) festlegen  
  - [Tiefgestellt](api/events/subscript.md) / [Hochgestellt](api/events/superscript.md) anwenden

- **Listenverwaltung**  
  [Listen einfügen und verwalten](api/events/insert-list.md) leicht gemacht

- **Import/Export & Drucken**  
  - [DOCX-Dateien importieren](api/events/import.md)
  - Inhalte als DOCX oder PDF [exportieren](api/events/export.md)
  - Dokumente direkt aus dem Editor [drucken](api/events/print.md)

- **Tastaturkürzel**  
  Erweiterte Unterstützung für gängige Formatierungs- und Bearbeitungsverknüpfungen

###  Neue API

#### Neue Eigenschaften

- [`fullscreenMode`](api/config/fullscreen-mode.md)  
- [`imageUploadUrl`](api/config/image-upload-url.md)  
- [`layoutMode`](api/config/layout-mode.md)  
- [`locale`](api/config/locale.md)  
- [`menubar`](api/config/menubar.md)  
- [`toolbar`](api/config/toolbar.md)  
- [`value`](api/config/value.md)

####  Neue Methoden

- [`setConfig()`](api/methods/set-config.md) — Konfiguration dynamisch aktualisieren  
- [`setLocale()`](api/methods/set-locale.md) — Locale zur Laufzeit ändern

#### Neue interne Methoden

- [`api.exec()`](api/internal/exec.md)  
- [`api.intercept()`](api/internal/intercept.md)  
- [`api.getReactiveState()`](api/internal/get-reactive-state.md)  
- [`api.getState()`](api/internal/get-state.md)

#### Neue Events

Eine vollständige Liste der neuen Events ist [hier](api/overview/events_overview.md) verfügbar

### Aktualisierte API

#### Aktualisierte Eigenschaften

- [`defaultStyles`](api/config/default-styles.md)

#### Aktualisierte Methoden

- [`setValue()`](api/methods/set-value.md)  
- [`getValue()`](api/methods/get-value.md)

#### Aktualisierte interne Methoden

- [`api.detach()`](api/internal/detach.md)  
- [`api.on()`](api/internal/on.md)

## Entfernte API

:::warning
Verwenden Sie die entfernte API nicht in Ihren Projekten! <br/> Weitere Informationen finden Sie im Thema [Migration](news/migration.md).
:::

### [Entfernte Eigenschaften](news/migration.md#properties-migration)

- [`customStats`](news/migration.md#--customstats)  
- [`mode`](news/migration.md#--mode--layoutmode)  
- [`toolbarBlocks`](news/migration.md#--toolbarblocks--toolbar)

### [Entfernte Methoden](news/migration.md#methods-migration)

- `exitFullScreen()`  
- `fullScreen()`  
- `getEditorAPI()`  
- `getStats()`  
- `paint()`

### Entfernte interne Methoden

- [`events.fire()`](news/migration.md#--fire--use-exec-and-intercept)

### Entfernte Events

- `Action`  
- `Change`  
- `selectionChange`  
- `selectionRefresh`

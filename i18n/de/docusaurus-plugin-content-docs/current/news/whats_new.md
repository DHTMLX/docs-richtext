---
sidebar_label: Was ist neu
title: Was ist neu
description: Hier erfahren Sie, was neu in DHTMLX RichText ist, und können die Versionshistorie in der Dokumentation der DHTMLX JavaScript UI-Bibliothek einsehen. Lesen Sie Entwicklerhandbücher und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus, und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText herunter.
---

## Version 2.0.5 

Veröffentlicht am 6. März 2026

### Fehlerbehebungen

- IME-Eingabe wird nicht korrekt verarbeitet
- Kompositionsbasierte Eingabe (z. B. Chinesisch, Japanisch, Koreanisch auf dem Desktop) wird nicht korrekt verarbeitet
- Die Eigenschaften `margin-left` und `line-height` werden beim HTML-Parsen ignoriert
- Inline-Elemente erben Eigenschaften von übergeordneten Block-Elementen
- Text kann nicht zwischen zwei Editor-Instanzen kopiert werden
- Die Auswahl wird bei zwei (oder mehr) aktiven Editor-Instanzen nicht korrekt verarbeitet
- Der Cursor wird falsch positioniert, wenn der einzige Inhalt eines Absatzes ein Bild ist
- Unbegrenzte Verschachtelung von Tiefgestellt- und Hochgestellt-Elementen
- Beim Einfügen von Bildern werden diese inline eingefügt, anstatt sie zuerst hochzuladen
- Leere Inline-Blöcke können an bestimmten Positionen (erste oder letzte Zeile) nicht entfernt werden
- Der Editor scrollt beim Tippen nicht zum Cursor
- Eingaben auf Android werden nicht korrekt verarbeitet
- Falsche Auswahlbehandlung für HR-Elemente
- Falsche Darstellung bei leeren Anfangswerten
- Das Kopieren von Inhalten kann fehlschlagen, wenn diese selbstschließende Blöcke enthalten
- Chrome: Emojis können nicht über das Kontextmenü eingefügt werden
- Firefox: „Alles auswählen" (CTRL+A) wird nicht korrekt verarbeitet

## Version 2.0.4

Veröffentlicht am 15. Oktober 2025

### Fehlerbehebungen

- Falsche Bereichsauswahl für Absätze
- Link-Popups werden neben verknüpften Bildern nicht angezeigt
- Die anfänglichen Symbolleistenwerte stimmen nicht mit dem tatsächlichen Inhalt überein

## Version 2.0.3

Veröffentlicht am 27. August 2025

### Fehlerbehebungen

- Ein Klick auf eine horizontale Linie verursacht einen Skriptfehler
- Die Standard-Zeilenhöhe ist falsch
- Inhaltsstile enthalten doppelte Selektoren
- Nur-Text-Blöcke ignorieren Stiländerungen beim HTML-Parsen
- Der Parser ignoriert maskierte Schriftartnamen in HTML
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
Die API von v1.2 ist nicht mit v2.0 kompatibel. Weitere Informationen finden Sie im [**Migrationshandbuch**](news/migration.md).
:::

### Neue Funktionen

- **Neue Generation der Textdarstellung**  
  Profitieren Sie von einer flüssigeren, schnelleren und präziseren Textdarstellung dank unserer neuen Engine

- **Granulare Symbolleistenkonfiguration**  
  Volle Kontrolle über die Symbolleiste:  
  - Definieren Sie [einzelne Symbolleisten-Steuerelemente](guides/configuration.md/#default-toolbar-controls) und deren Reihenfolge
  - Fügen Sie [benutzerdefinierte Steuerelemente](guides/configuration.md/#custom-toolbar-controls) hinzu

- **Optionale [Menüleiste](api/config/menubar.md)**  
  Aktivieren Sie eine klassische Menüoberfläche am oberen Rand des Editors

- **Erweiterter [Dokumentmodus](guides/configuration.md/#layout-modes)**  
  Unterstützung für verschiedene Dokumentgrößen hinzugefügt

- **Bildunterstützung**  
  - Fügen Sie Bilder mit [Upload-Funktionalität](api/config/image-upload-url.md) ein.  
  - [Skalieren Sie Bilder](api/events/resize-image.md) interaktiv  

- **Verbesserte Link-Erfahrung**  
  Neu gestaltete [Popup-Interaktionen](api/events/show-popup.md) für bessere Benutzerfreundlichkeit

- **Neue Formatierungswerkzeuge**  
  - Textausrichtung: **Blocksatz**  
  - [Horizontale Linien](api/events/insert-line.md) einfügen  
  - [Einzug](api/events/indent.md) / [Ausrücken](api/events/outdent.md)  
  - [Zeilenhöhe](api/events/set-line-height.md) festlegen  
  - [Tiefgestellt](api/events/subscript.md) / [Hochgestellt](api/events/superscript.md) anwenden

- **Listenverwaltung**  
  [Listen einfügen und verwalten](api/events/insert-list.md) in Ihren Inhalten

- **Import/Export & Drucken**  
  - [DOCX-Dateien importieren](api/events/import.md)
  - Inhalte als DOCX oder PDF [exportieren](api/events/export.md)
  - Dokumente direkt aus dem Editor [drucken](api/events/print.md)

- **Tastaturkürzel**  
  Erweiterte Unterstützung für gängige Formatierungs- und Bearbeitungskürzel

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

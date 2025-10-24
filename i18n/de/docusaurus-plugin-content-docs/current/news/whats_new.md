---
sidebar_label: Was ist neu
title: Was ist neu
description: Entdecken Sie die neuesten Updates in DHTMLX RichText und sehen Sie sich den Release-Verlauf direkt hier in der Dokumentation zur DHTMLX JavaScript UI-Bibliothek an. Sie finden hier Leitfäden, API-Referenzen, Codebeispiele, Live-Demos und einen kostenlosen 30-Tage-Testdownload für DHTMLX RichText.
---

## Version 2.0.4

Veröffentlicht am 15. Oktober 2025

### Fehlerbehebungen

- Die Auswahl von Absatzbereichen funktionierte nicht immer richtig
- Link-Popups wurden nicht angezeigt, wenn sie sich neben verlinkten Bildern befanden
- Die Toolbar-Werte beim Start entsprachen nicht immer dem tatsächlichen Inhalt

## Version 2.0.3

Veröffentlicht am 27. August 2025

### Fehlerbehebungen

- Das Klicken auf eine horizontale Linie konnte einen Skriptfehler auslösen
- Die Standard-Zeilenhöhe wurde nicht korrekt gesetzt
- Einige Inhaltsstile hatten doppelte Selektoren
- Plain-Text-Blöcke übernahmen beim Parsen von HTML keine Stiländerungen
- Der Parser übersprang in HTML maskierte Schriftartnamen
- Der Parser ignorierte `margin-left` und `line-height` in HTML

## Version 2.0.2

Veröffentlicht am 4. August 2025

### Fehlerbehebungen

- Der Paketinhalt wurde aktualisiert

## Version 2.0.1

Veröffentlicht am 30. Juli 2025

### Fehlerbehebungen

- Typdefinitionen für die Eigenschaft `defaultStyles` wurden aktualisiert

## Version 2.0

Veröffentlicht am 30. Juli 2025

:::note
Die v1.2 API ist nicht mit v2.0 kompatibel. Weitere Details finden Sie im [**Migrationsleitfaden**](news/migration.md).
:::

### Neue Funktionen

- **Next-Gen-Text-Rendering**  
  Die neue Engine sorgt für ein flüssigeres, schnelleres und präziseres Text-Rendering

- **Granulare Toolbar-Konfiguration**  
  Die Toolbar ist jetzt vollständig anpassbar:
  - Wählen Sie [einzelne Toolbar-Elemente](guides/configuration.md#default-toolbar-controls) aus und legen Sie deren Reihenfolge fest
  - Fügen Sie eigene [benutzerdefinierte Elemente](guides/configuration.md#custom-toolbar-controls) hinzu

- **Optionale [Menüleiste](api/config/menubar.md)**  
  Sie können eine klassische Menü-Oberfläche am oberen Rand des Editors hinzufügen

- **Verbesserter [Dokumentenmodus](guides/configuration.md#layout-modes)**  
  Unterstützt jetzt verschiedene Dokumentgrößen

- **Bildunterstützung**  
  - Bilder mit [Upload-Funktionen](api/config/image-upload-url.md) einfügen  
  - [Bilder direkt im Editor](api/events/resize-image.md) skalieren  

- **Verbesserte Link-Erfahrung**  
  Link-[Popup-Interaktionen](api/events/show-popup.md) wurden für eine einfachere Nutzung neu gestaltet

- **Neue Formatierungswerkzeuge**  
  - Textausrichtung: **Blocksatz**  
  - [Horizontale Linien](api/events/insert-line.md) einfügen  
  - [Einrücken](api/events/indent.md) / [Ausrücken](api/events/outdent.md)  
  - [Zeilenhöhe](api/events/set-line-height.md) festlegen  
  - [Tiefgestellt](api/events/subscript.md) / [Hochgestellt](api/events/superscript.md) verwenden

- **Listenverwaltung**  
  Es ist jetzt einfach, [Listen einzufügen und zu verwalten](api/events/insert-list.md)

- **Import/Export & Drucken**  
  - [DOCX importieren](api/events/import.md)
  - [Exportieren](api/events/export.md) nach DOCX oder PDF
  - [Drucken](api/events/print.md) direkt aus dem Editor heraus

- **Tastenkombinationen**  
  Mehr gängige Formatierungs- und Bearbeitungskürzel werden unterstützt

### Neue API

#### Neue Eigenschaften

- [`fullscreenMode`](api/config/fullscreen-mode.md)  
- [`imageUploadUrl`](api/config/image-upload-url.md)  
- [`layoutMode`](api/config/layout-mode.md)  
- [`locale`](api/config/locale.md)  
- [`menubar`](api/config/menubar.md)  
- [`toolbar`](api/config/toolbar.md)  
- [`value`](api/config/value.md)

#### Neue Methoden

- [`setConfig()`](api/methods/set-config.md) - Konfiguration zur Laufzeit aktualisieren  
- [`setLocale()`](api/methods/set-locale.md) - Spracheinstellung sofort ändern

#### Neue interne Methoden

- [`api.exec()`](api/internal/exec.md)  
- [`api.intercept()`](api/internal/intercept.md)  
- [`api.getReactiveState()`](api/internal/get-reactive-state.md)  
- [`api.getState()`](api/internal/get-state.md)

#### Neue Events

Eine vollständige Liste der neuen Events finden Sie [hier](api/overview/events_overview.md)

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
Verwenden Sie die entfernte API nicht in Ihren Projekten! <br/> Weitere Details finden Sie unter [Migration](news/migration.md).
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

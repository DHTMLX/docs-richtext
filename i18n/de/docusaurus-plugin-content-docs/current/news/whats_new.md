---
sidebar_label: Was ist neu
title: Was ist neu
description: Entdecken Sie die Neuigkeiten in DHTMLX RichText und die Versionshistorie in der Dokumentation der DHTMLX JavaScript-UI-Bibliothek. Lesen Sie Entwickleranleitungen und API-Referenzen, probieren Sie Code-Beispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText herunter.
---

## Version 2.1 {#version-21}

Veröffentlicht am 22. Juni 2026

### Neue Funktionalität {#new-functionality}

- Die [`imageUploadUrl`](api/config/image-upload-url.md) ist optional: Wird sie weggelassen, werden Bilder inline als Base64-Daten-URLs eingefügt, ohne dass ein Server erforderlich ist
- Drag-and-Drop-Bildeinfügung: Ziehen Sie eine Bilddatei direkt in den Editor-Bereich
- Markdown-Unterstützung: Inhalte des Editors als Markdown über den `markdown`-Encoder in den Methoden [`setValue()`](api/methods/set-value.md), [`getValue()`](api/methods/get-value.md) und [`insertValue()`](api/methods/insert-value.md) einlesen und ausgeben (siehe das Beispiel [RichText. Arbeiten mit verschiedenen Formaten (Markdown, HTML, Text)](https://snippet.dhtmlx.com/cne4kujn?tag=richtext))
- Erwähnungen, Tags und benutzerdefinierte Dropdown-Trigger über die Eigenschaft [`triggers`](api/config/triggers.md): Geben Sie ein Zeichen wie `@`, `#`, `/` oder `:` ein, um ein Vorschlags-Dropdown zu öffnen und das ausgewählte Element als nicht bearbeitbares Token einzufügen (siehe Anleitung [Erwähnungen und Tags](guides/mentions_and_tags.md) und das Beispiel [RichText. Erwähnungen, Tags und asynchrone Suche](https://snippet.dhtmlx.com/nfvvfize?tag=richtext))
- Benutzerdefinierte Darstellung von Vorschlagselementen über die Eigenschaft [`triggerTemplate`](api/config/trigger-template.md) (zum Beispiel ein Avatar mit Name und E-Mail-Adresse) (siehe das Beispiel [RichText. Benutzerdefinierte Dropdown-Vorlage pro Trigger](https://snippet.dhtmlx.com/0p3bbnhz?tag=richtext))
- Benutzerdefinierte Aktion bei der Auswahl eines Triggers: Führen Sie eigenen Code aus (ein Emoji einfügen, einen Slash-Befehl ausführen und mehr), anstatt ein Token einzufügen (siehe die Beispiele [RichText. Emoji-Autovervollständigung](https://snippet.dhtmlx.com/g5z1d868?tag=richtext) und [RichText. Slash-Befehle](https://snippet.dhtmlx.com/e0mrmyam?tag=richtext))
- Zwischenablagen-Unterstützung (Kopieren, Ausschneiden und Einfügen), die die Formatierung zwischen RichText-Instanzen beibehält und externen Inhalt als Klartext einfügt
- Tastenkürzel zum Löschen auf Wort- und Zeilenebene: vorheriges/nächstes Wort löschen mit `Ctrl+Backspace` / `Ctrl+Delete` (Windows/Linux) oder `Opt+Backspace` / `Opt+Delete` (macOS); vorherige/nächste visuelle Zeile löschen mit `Cmd+Backspace` / `Cmd+Delete` (nur macOS)
- Neue Tastenkürzel zum Ändern der Blockeinrückung: die Einrückung eines Blocks mit `Tab` vergrößern und mit `Shift+Tab` verringern; in Listen verschachteln dieselben Tasten Elemente oder heben sie an

###  Neue API {#new-api}

#### Neue Eigenschaften {#new-properties}

- [`triggers`](api/config/triggers.md) — Definiert Dropdown-Trigger für das Einfügen von Erwähnungen, Tags und anderen Tokens
- [`triggerTemplate`](api/config/trigger-template.md) — Passt die Darstellung von Elementen im Vorschlags-Dropdown an

#### Neue Methoden {#new-methods}

- [`insertValue()`](api/methods/insert-value.md) — Fügt Text-, Markdown- oder HTML-Inhalt an der Cursorposition ein oder ersetzt den ausgewählten Text (siehe das Beispiel [RichText. Inhalt an Cursorposition einfügen](https://snippet.dhtmlx.com/pew2g1ku?tag=richtext))

#### Neue Events {#new-events}

- [`show-suggest`](api/events/show-suggest.md) — Wird ausgelöst, wenn das Vorschlags-Dropdown für einen konfigurierten Trigger geöffnet wird
- [`insert-token`](api/events/insert-token.md) — Wird ausgelöst, nachdem der Benutzer ein Vorschlagselement im Dropdown auswählt und RichText es als Token einfügt
- [`hide-suggest`](api/events/hide-suggest.md) — Wird ausgelöst, wenn das Vorschlags-Dropdown geschlossen wird

### Fehlerbehebungen {#fixes}

- Probleme beim Einfügen von Inline-Inhalten (einschließlich Inhalten innerhalb oder neben Inline-Elementen wie Erwähnungen und Bildern)
- Das Ablegen eines Bildes auf sich selbst löst einen Fehler aus

## Version 2.0.6 {#version-206}

Veröffentlicht am 28. Mai 2026

### Neue Funktionalität {#new-functionality-206}

- Kontextbewusste OL/UL-Symbolleistenschaltflächen, die Listen basierend auf der Auswahl umschalten oder konvertieren
- Ändern der Listenverschachtelungsebene mit den Schaltflächen **Einzug** und **Ausrücken**
- Beenden einer Liste oder Verringern der Verschachtelung durch Drücken von Enter in einem leeren Listenelement
- Eigene Farbe für besuchte Links

###  Neue API {#new-api-206}

#### Neue Events {#new-events-206}

- [`toggle-list`](api/events/toggle-list.md) — Wird ausgelöst, wenn ein Benutzer eine Liste für die ausgewählten Blöcke umschaltet

### Fehlerbehebungen {#fixes-206}

- Falsche horizontale Ausrichtung von Listenmarkierungen
- Inkonsistenter Abstand zwischen nummerierten und nicht nummerierten Listen
- Formatierung löschen entfernt keine Eigenschaften auf Blockebene
- Falsche Gestaltung von Überschriften und Blockzitaten innerhalb von Listenelementen
- Unerwünschtes Eingabeelement in horizontalen Linien sichtbar
- Der Editor friert ein, wenn eine horizontale Linie in der Mitte oder am Ende einer Liste eingefügt wird

## Version 2.0.5 {#version-205}

Veröffentlicht am 6. März 2026

### Fehlerbehebungen {#fixes-205}

- IME-Eingabe wird nicht korrekt verarbeitet
- Kompositionsbasierte Eingabe (z. B. Chinesisch, Japanisch, Koreanisch auf dem Desktop) wird nicht korrekt verarbeitet
- Die Eigenschaften `margin-left` und `line-height` werden beim HTML-Parsing ignoriert
- Inline-Elemente erben Eigenschaften von übergeordneten Elementen auf Blockebene
- Text zwischen zwei Editor-Instanzen kann nicht kopiert werden
- Die Auswahl wird bei zwei (oder mehr) aktiven Editor-Instanzen falsch verarbeitet
- Der Cursor wird falsch positioniert, wenn der einzige Inhalt im Absatz ein Bild ist
- Endloses Umbrechen von Tief- und Hochstellungselementen
- Beim Einfügen von Bildern werden diese inline eingefügt, anstatt sie zuerst hochzuladen
- Leere Inline-Blöcke können an bestimmten Positionen (erste oder letzte Zeile) nicht entfernt werden
- Der Editor scrollt beim Tippen nicht zum Cursor
- Eingabe auf Android wird nicht korrekt verarbeitet
- Falsche Auswahlbehandlung für HR-Elemente
- Falsche Darstellung bei leeren Anfangswerten
- Das Kopieren von Inhalten kann fehlschlagen, wenn diese selbstschließende Blöcke enthalten
- Chrome: Emojis können nicht über das Kontextmenü eingefügt werden
- Firefox: Alles auswählen (CTRL+A) wird nicht korrekt verarbeitet

## Version 2.0.4 {#version-204}

Veröffentlicht am 15. Oktober 2025

### Fehlerbehebungen {#fixes-204}

- Falsche Bereichsauswahl für Absätze
- Link-Popups werden nicht angezeigt, wenn sie neben verknüpften Bildern stehen
- Anfängliche Symbolleistenwerte stimmen nicht mit dem tatsächlichen Inhalt überein

## Version 2.0.3 {#version-203}

Veröffentlicht am 27. August 2025

### Fehlerbehebungen {#fixes-203}

- Ein Klick auf eine horizontale Linie verursacht einen Skriptfehler
- Die Standard-Zeilenhöhe ist falsch
- Inhaltsstile enthalten doppelte Selektoren
- Nur-Text-Blöcke ignorieren Stiländerungen beim HTML-Parsing
- Der Parser ignoriert maskierte Schriftartnamen in HTML
- Der Parser ignoriert die Eigenschaften `margin-left` und `line-height` in HTML

## Version 2.0.2 {#version-202}

Veröffentlicht am 4. August 2025

### Fehlerbehebungen {#fixes-202}

- Paketinhalt aktualisiert

## Version 2.0.1 {#version-201}

Veröffentlicht am 30. Juli 2025

### Fehlerbehebungen {#fixes-201}

- Typdefinitionen für die Eigenschaft `defaultStyles` aktualisiert

## Version 2.0 {#version-20}

Veröffentlicht am 30. Juli 2025

:::note[Hinweis]
Die API von v1.2 ist nicht kompatibel mit v2.0. Weitere Informationen finden Sie in der [**Migrationsanleitung**](news/migration.md).
:::

### Neue Funktionalität {#new-functionality-20}

- **Textdarstellung der nächsten Generation**  
  Erleben Sie eine flüssigere, schnellere und genauere Textdarstellung mit unserer neuen Engine

- **Granulare Symbolleistenkonfiguration**  
  Übernehmen Sie die volle Kontrolle über die Symbolleiste:  
  - [Einzelne Symbolleisten-Steuerelemente](guides/configuration.md/#default-toolbar-controls) und ihre Reihenfolge festlegen
  - [Benutzerdefinierte Steuerelemente](guides/configuration.md/#add-custom-toolbar-controls) hinzufügen

- **Optionale [Menüleiste](api/config/menubar.md)**  
  Aktivieren Sie eine klassische Menüoberfläche oben im Editor

- **Verbesserter [Dokumentenmodus](guides/configuration.md/#layout-modes)**  
  Unterstützung für verschiedene Dokumentgrößen hinzugefügt

- **Bildunterstützung**  
  - Bilder mit [Upload-Funktionen](api/config/image-upload-url.md) einfügen  
  - [Bilder interaktiv skalieren](api/events/resize-image.md)  

- **Verbesserte Link-Erfahrung**  
  Neu gestaltete [Popup-Interaktionen](api/events/show-popup.md) für bessere Benutzerfreundlichkeit

- **Neue Formatierungswerkzeuge**  
  - Textausrichtung: **Blocksatz**  
  - [Horizontale Linien](api/events/insert-line.md) einfügen  
  - [Einzug](api/events/indent.md) / [Ausrücken](api/events/outdent.md)  
  - [Zeilenhöhe](api/events/set-line-height.md) festlegen  
  - [Tiefstellung](api/events/subscript.md) / [Hochstellung](api/events/superscript.md) anwenden

- **Listenverwaltung**  
  [Listen in Ihren Inhalten einfach einfügen und verwalten](api/events/insert-list.md)

- **Import/Export & Drucken**  
  - [DOCX-Dateien importieren](api/events/import.md)
  - Inhalte als DOCX oder PDF [exportieren](api/events/export.md)
  - Dokumente direkt aus dem Editor [drucken](api/events/print.md)

- **Tastaturkürzel**  
  Erweiterte Unterstützung für gängige Formatierungs- und Bearbeitungskürzel

###  Neue API {#new-api-20}

#### Neue Eigenschaften {#new-properties-20}

- [`fullscreenMode`](api/config/fullscreen-mode.md)  
- [`imageUploadUrl`](api/config/image-upload-url.md)  
- [`layoutMode`](api/config/layout-mode.md)  
- [`locale`](api/config/locale.md)  
- [`menubar`](api/config/menubar.md)  
- [`toolbar`](api/config/toolbar.md)  
- [`value`](api/config/value.md)

####  Neue Methoden {#new-methods-20}

- [`setConfig()`](api/methods/set-config.md) — Konfiguration dynamisch aktualisieren  
- [`setLocale()`](api/methods/set-locale.md) — Sprache zur Laufzeit wechseln

#### Neue interne Methoden {#new-internal-methods-20}

- [`api.exec()`](api/internal/exec.md)  
- [`api.intercept()`](api/internal/intercept.md)  
- [`api.getReactiveState()`](api/internal/get-reactive-state.md)  
- [`api.getState()`](api/internal/get-state.md)

#### Neue Events {#new-events-20}

Eine vollständige Liste der neuen Events ist [hier](api/overview/events_overview.md) verfügbar

### Aktualisierte API {#updated-api}

#### Aktualisierte Eigenschaften {#updated-properties}

- [`defaultStyles`](api/config/default-styles.md)

#### Aktualisierte Methoden {#updated-methods}

- [`setValue()`](api/methods/set-value.md)  
- [`getValue()`](api/methods/get-value.md)

#### Aktualisierte interne Methoden {#updated-internal-methods}

- [`api.detach()`](api/internal/detach.md)  
- [`api.on()`](api/internal/on.md)

## Entfernte API {#removed-api}

:::warning[Warnung]
Verwenden Sie die entfernte API nicht in Ihren Projekten! <br/> Weitere Informationen finden Sie im Thema [Migration](news/migration.md).
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

### Entfernte Events {#removed-events}

- `Action`  
- `Change`  
- `selectionChange`  
- `selectionRefresh`

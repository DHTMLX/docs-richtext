---
sidebar_label: API-Übersicht
title: API-Übersicht
description: Eine API-Übersicht des JavaScript RichText finden Sie in der Dokumentation der DHTMLX JavaScript RichText-Bibliothek. Erkunden Sie Entwickleranleitungen und die API-Referenz, probieren Sie Code-Beispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText herunter.
---

# API-Übersicht

## RichText-Konstruktor

~~~js
new richtext.RichText("#root", {
    // configuration parameters
});
~~~

**Parameter**:

- ein HTML-Container (z. B. CSS-Selektor oder DOM-Element)
- ein Konfigurationsobjekt ([siehe Eigenschaften](api/overview/properties_overview.md))

## RichText-Methoden

| Name                                          | Beschreibung                              |
| ----------------------------------------------|-------------------------------------------|
| [](api/methods/get-value.md)                   | @getshort(api/methods/get-value.md)        |
| [](api/methods/set-value.md)                   | @getshort(api/methods/set-value.md)        |
| [](api/methods/set-config.md)                  | @getshort(api/methods/set-config.md)       |
| [](api/methods/set-locale.md)                  | @getshort(api/methods/set-locale.md)       |
| [](api/methods/destructor.md)                  | @getshort(api/methods/destructor.md)       |

## Event Bus-Methoden

| Name                                          | Beschreibung                              |
| ----------------------------------------------|-------------------------------------------|
| [](api/internal/exec.md)                       | @getshort(api/internal/exec.md)            |
| [](api/internal/intercept.md)                  | @getshort(api/internal/intercept.md)       |
| [](api/internal/on.md)                         | @getshort(api/internal/on.md)              |
| [](api/internal/detach.md)                     | @getshort(api/internal/detach.md)          |
| [](api/internal/set-next.md)                   | @getshort(api/internal/set-next.md)        |

## State-Methoden

| Name                                          | Beschreibung                              |
| ----------------------------------------------|-------------------------------------------|
| [](api/internal/get-state.md)                  | @getshort(api/internal/get-state.md)       |
| [](api/internal/get-reactive-state.md)         | @getshort(api/internal/get-reactive-state.md) |

## Events

| Name                                           | Beschreibung                              |
| ----------------------------------------------|-------------------------------------------|
| [](api/events/align.md)                        | @getshort(api/events/align.md)             |
| [](api/events/clear-text-format.md)            | @getshort(api/events/clear-text-format.md) |
| [](api/events/copy.md)                         | @getshort(api/events/copy.md)              |
| [](api/events/create-new.md)                   | @getshort(api/events/create-new.md)        |
| [](api/events/cut.md)                          | @getshort(api/events/cut.md)               |
| [](api/events/delete-link.md)                  | @getshort(api/events/delete-link.md)       |
| [](api/events/export.md)                       | @getshort(api/events/export.md)            |
| [](api/events/import.md)                       | @getshort(api/events/import.md)            |
| [](api/events/indent.md)                       | @getshort(api/events/indent.md)            |
| [](api/events/insert-image.md)                 | @getshort(api/events/insert-image.md)      |
| [](api/events/insert-line.md)                  | @getshort(api/events/insert-line.md)       |
| [](api/events/insert-link.md)                  | @getshort(api/events/insert-link.md)       |
| [](api/events/insert-list.md)                  | @getshort(api/events/insert-list.md)       |
| [](api/events/outdent.md)                      | @getshort(api/events/outdent.md)           |
| [](api/events/paste.md)                        | @getshort(api/events/paste.md)             |
| [](api/events/print.md)                        | @getshort(api/events/print.md)             |
| [](api/events/redo.md)                         | @getshort(api/events/redo.md)              |
| [](api/events/resize-image.md)                 | @getshort(api/events/resize-image.md)      |
| [](api/events/set-font-family.md)              | @getshort(api/events/set-font-family.md)   |
| [](api/events/set-font-size.md)                | @getshort(api/events/set-font-size.md)     |
| [](api/events/set-line-height.md)              | @getshort(api/events/set-line-height.md)   |
| [](api/events/set-text-color.md)               | @getshort(api/events/set-text-color.md)    |
| [](api/events/set-text-format.md)              | @getshort(api/events/set-text-format.md)   |
| [](api/events/set-text-style.md)               | @getshort(api/events/set-text-style.md)    |
| [](api/events/show-popup.md)                   | @getshort(api/events/show-popup.md)        |
| [](api/events/subscript.md)                    | @getshort(api/events/subscript.md)         |
| [](api/events/superscript.md)                  | @getshort(api/events/superscript.md)       |
| [](api/events/toggle-fullscreen-mode.md)       | @getshort(api/events/toggle-fullscreen-mode.md) |
| [](api/events/toggle-layout-mode.md)           | @getshort(api/events/toggle-layout-mode.md) |
| [](api/events/toggle-shortcut-info.md)         | @getshort(api/events/toggle-shortcut-info.md) |
| [](api/events/undo.md)                         | @getshort(api/events/undo.md)              |
| [](api/events/update-link.md)                  | @getshort(api/events/update-link.md)       |

## Eigenschaften

| Name                                          | Beschreibung                              |
| ----------------------------------------------|-------------------------------------------|
| [](api/config/default-styles.md)               | @getshort(api/config/default-styles.md)    |
| [](api/config/fullscreen-mode.md)              | @getshort(api/config/fullscreen-mode.md)   |
| [](api/config/image-upload-url.md)             | @getshort(api/config/image-upload-url.md)  |
| [](api/config/layout-mode.md)                  | @getshort(api/config/layout-mode.md)       |
| [](api/config/locale.md)                       | @getshort(api/config/locale.md)            |
| [](api/config/menubar.md)                      | @getshort(api/config/menubar.md)           |
| [](api/config/toolbar.md)                      | @getshort(api/config/toolbar.md)           |
| [](api/config/value.md)                        | @getshort(api/config/value.md)             |

---
sidebar_label: Descripción general de la API
title: Descripción general de la API
description: Puede consultar la descripción general de la API de JavaScript RichText en la documentación de la biblioteca DHTMLX JavaScript RichText. Explore guías para desarrolladores y referencia de API, pruebe ejemplos de código y demostraciones en vivo, y descargue una versión de evaluación gratuita de 30 días de DHTMLX RichText.
---

# Descripción general de la API {#api-overview}

## Constructor de RichText {#richtext-constructor}

~~~js
new richtext.RichText("#root", {
    // configuration parameters
});
~~~

**Parámetros**:

- un contenedor HTML (por ejemplo, selector CSS o elemento DOM)
- un objeto de configuración ([ver propiedades](api/overview/properties_overview.md))

## Métodos de RichText {#richtext-methods}

| Nombre                                        | Descripción                               |
| ----------------------------------------------|-------------------------------------------|
| [](api/methods/get-value.md)                   | @getshort(api/methods/get-value.md)        |
| [](api/methods/set-value.md)                   | @getshort(api/methods/set-value.md)        |
| [](api/methods/set-config.md)                  | @getshort(api/methods/set-config.md)       |
| [](api/methods/set-locale.md)                  | @getshort(api/methods/set-locale.md)       |
| [](api/methods/destructor.md)                  | @getshort(api/methods/destructor.md)       |

## Métodos del Event Bus {#event-bus-methods}

| Nombre                                        | Descripción                               |
| ----------------------------------------------|-------------------------------------------|
| [](api/internal/exec.md)                       | @getshort(api/internal/exec.md)            |
| [](api/internal/intercept.md)                  | @getshort(api/internal/intercept.md)       |
| [](api/internal/on.md)                         | @getshort(api/internal/on.md)              |
| [](api/internal/detach.md)                     | @getshort(api/internal/detach.md)          |
| [](api/internal/set-next.md)                   | @getshort(api/internal/set-next.md)        |

## Métodos de estado {#state-methods}

| Nombre                                        | Descripción                               |
| ----------------------------------------------|-------------------------------------------|
| [](api/internal/get-state.md)                  | @getshort(api/internal/get-state.md)       |
| [](api/internal/get-reactive-state.md)         | @getshort(api/internal/get-reactive-state.md) |

## Eventos {#events}

| Nombre                                         | Descripción                               |
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

## Propiedades {#properties}

| Nombre                                        | Descripción                               |
| ----------------------------------------------|-------------------------------------------|
| [](api/config/default-styles.md)               | @getshort(api/config/default-styles.md)    |
| [](api/config/fullscreen-mode.md)              | @getshort(api/config/fullscreen-mode.md)   |
| [](api/config/image-upload-url.md)             | @getshort(api/config/image-upload-url.md)  |
| [](api/config/layout-mode.md)                  | @getshort(api/config/layout-mode.md)       |
| [](api/config/locale.md)                       | @getshort(api/config/locale.md)            |
| [](api/config/menubar.md)                      | @getshort(api/config/menubar.md)           |
| [](api/config/toolbar.md)                      | @getshort(api/config/toolbar.md)           |
| [](api/config/value.md)                        | @getshort(api/config/value.md)             |

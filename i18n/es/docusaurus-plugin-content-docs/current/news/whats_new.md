---
sidebar_label: Novedades
title: Novedades
description: Puede explorar las novedades de DHTMLX RichText y su historial de versiones en la documentación de la biblioteca JavaScript UI de DHTMLX. Explore guías para desarrolladores y referencias de API, pruebe ejemplos de código y demostraciones en vivo, y descargue una versión de evaluación gratuita de 30 días de DHTMLX RichText.
---

## Versión 2.0.5 {#version-205}

Lanzada el 6 de marzo de 2026

### Correcciones {#fixes}

- La entrada IME no se procesa correctamente
- La entrada basada en composición (por ejemplo, chino, japonés, coreano en escritorio) no se procesa correctamente
- Las propiedades `margin-left` y `line-height` se ignoran al analizar HTML
- Los elementos en línea heredan propiedades de los elementos de bloque padre
- No es posible copiar texto entre dos instancias del editor
- La selección se maneja incorrectamente cuando hay dos o más instancias del editor activas
- El cursor se posiciona incorrectamente cuando el único contenido del párrafo es una imagen
- Envoltura indefinida de elementos de subíndice y superíndice
- Al pegar imágenes, se incrustan en línea en lugar de cargarse primero
- Los bloques en línea vacíos no se pueden eliminar en posiciones específicas (primera o última línea)
- El editor no desplaza la vista al cursor al escribir
- La entrada en Android no se procesa correctamente
- Manejo incorrecto de la selección para elementos HR
- Renderizado incorrecto con valores iniciales vacíos
- Copiar contenido puede fallar si contiene bloques de cierre automático
- Chrome: no se pueden insertar emojis desde el menú contextual
- Firefox: seleccionar todo (CTRL+A) no se maneja correctamente

## Versión 2.0.4 {#version-204}

Lanzada el 15 de octubre de 2025

### Correcciones {#fixes-1}

- Selección de rango incorrecta para párrafos
- Los popups de enlace no se muestran cuando están adyacentes a imágenes enlazadas
- Los valores iniciales de la toolbar no son precisos en relación con el contenido real

## Versión 2.0.3 {#version-203}

Lanzada el 27 de agosto de 2025

### Correcciones {#fixes-2}

- Hacer clic en una línea horizontal provoca un error de script
- La altura de línea predeterminada es incorrecta
- Los estilos de contenido incluyen selectores duplicados
- Los bloques de texto plano ignoran los cambios de estilo al analizar HTML
- El analizador ignora los nombres de fuente escapados en HTML
- El analizador ignora las propiedades `margin-left` y `line-height` en HTML

## Versión 2.0.2 {#version-202}

Lanzada el 4 de agosto de 2025

### Correcciones {#fixes-3}

- Contenido del paquete actualizado

## Versión 2.0.1 {#version-201}

Lanzada el 30 de julio de 2025

### Correcciones {#fixes-4}

- Actualización de las definiciones de tipo para la propiedad `defaultStyles`

## Versión 2.0 {#version-20}

Lanzada el 30 de julio de 2025

:::note[Nota]
La API de v1.2 no es compatible con v2.0. Consulte la [**guía de migración**](news/migration.md) para obtener información adicional.
:::

### Nueva funcionalidad {#new-functionality}

- **Renderizado de texto de nueva generación**
  Experimente un renderizado de texto más fluido, rápido y preciso con nuestro nuevo motor

- **Configuración granular de la toolbar**
  Tome control total de la toolbar:
  - Defina [controles individuales de la toolbar](guides/configuration.md/#default-toolbar-controls) y su orden
  - Agregue [controles personalizados](guides/configuration.md/#custom-toolbar-controls)

- **[Barra de menú](api/config/menubar.md) opcional**
  Habilite una interfaz clásica de menú en la parte superior del editor

- **[Modo documento](guides/configuration.md/#layout-modes) mejorado**
  Se agregó compatibilidad con diferentes tamaños de documento

- **Compatibilidad con imágenes**
  - Inserte imágenes con [capacidades de carga](api/config/image-upload-url.md).
  - [Redimensione imágenes](api/events/resize-image.md) de forma interactiva

- **Experiencia de enlaces mejorada**
  [Interacciones de popup](api/events/show-popup.md) rediseñadas para una mejor usabilidad

- **Nuevas herramientas de formato**
  - Alineación de texto: **justificar**
  - Insertar [líneas horizontales](api/events/insert-line.md)
  - [Sangría](api/events/indent.md) / [Quitar sangría](api/events/outdent.md)
  - Establecer [altura de línea](api/events/set-line-height.md)
  - Aplicar [subíndice](api/events/subscript.md) / [superíndice](api/events/superscript.md)

- **Gestión de listas**
  [Inserte y gestione listas](api/events/insert-list.md) fácilmente en su contenido

- **Importar/Exportar e Imprimir**
  - [Importar archivos DOCX](api/events/import.md)
  - [Exportar](api/events/export.md) contenido a DOCX o PDF
  - [Imprimir](api/events/print.md) documentos directamente desde el editor

- **Atajos de teclado**
  Compatibilidad ampliada con atajos comunes de formato y edición

### Nueva API {#new-api}

#### Nuevas propiedades {#new-properties}

- [`fullscreenMode`](api/config/fullscreen-mode.md)
- [`imageUploadUrl`](api/config/image-upload-url.md)
- [`layoutMode`](api/config/layout-mode.md)
- [`locale`](api/config/locale.md)
- [`menubar`](api/config/menubar.md)
- [`toolbar`](api/config/toolbar.md)
- [`value`](api/config/value.md)

#### Nuevos métodos {#new-methods}

- [`setConfig()`](api/methods/set-config.md) — Actualizar la configuración de forma dinámica
- [`setLocale()`](api/methods/set-locale.md) — Cambiar la configuración regional en tiempo real

#### Nuevos métodos internos {#new-internal-methods}

- [`api.exec()`](api/internal/exec.md)
- [`api.intercept()`](api/internal/intercept.md)
- [`api.getReactiveState()`](api/internal/get-reactive-state.md)
- [`api.getState()`](api/internal/get-state.md)

#### Nuevos eventos {#new-events}

La lista completa de nuevos eventos está disponible [aquí](api/overview/events_overview.md)

### API actualizada {#updated-api}

#### Propiedades actualizadas {#updated-properties}

- [`defaultStyles`](api/config/default-styles.md)

#### Métodos actualizados {#updated-methods}

- [`setValue()`](api/methods/set-value.md)
- [`getValue()`](api/methods/get-value.md)

#### Métodos internos actualizados {#updated-internal-methods}

- [`api.detach()`](api/internal/detach.md)
- [`api.on()`](api/internal/on.md)

## API eliminada {#removed-api}

:::warning[Advertencia]
¡No use la API eliminada en sus proyectos! <br/> Consulte el tema [Migración](news/migration.md) para obtener más información.
:::

### [Propiedades eliminadas](news/migration.md#properties-migration) {#removed-properties}

- [`customStats`](news/migration.md#--customstats)
- [`mode`](news/migration.md#--mode--layoutmode)
- [`toolbarBlocks`](news/migration.md#--toolbarblocks--toolbar)

### [Métodos eliminados](news/migration.md#methods-migration) {#removed-methods}

- `exitFullScreen()`
- `fullScreen()`
- `getEditorAPI()`
- `getStats()`
- `paint()`

### Métodos internos eliminados {#removed-internal-methods}

- [`events.fire()`](news/migration.md#--fire--use-exec-and-intercept)

### Eventos eliminados {#removed-events}

- `Action`
- `Change`
- `selectionChange`
- `selectionRefresh`

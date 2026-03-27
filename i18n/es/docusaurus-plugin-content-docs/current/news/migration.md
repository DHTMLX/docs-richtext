---
sidebar_label: Migración a versiones más recientes
title: Migración a versiones más recientes
description: Puede conocer la migración a versiones más recientes en la documentación de la biblioteca JavaScript RichText de DHTMLX. Explore guías para desarrolladores y referencias de API, pruebe ejemplos de código y demostraciones en vivo, y descargue una versión de evaluación gratuita de 30 días de DHTMLX RichText.
---

# Migración a versiones más recientes

## 1.2 -> 2.0 {#12---20}

### Migración de propiedades {#properties-migration}

| Propiedad anterior | Reemplazada por           | Notas                                              |
| ------------------ | ------------------------- | -------------------------------------------------- |
| `customStats`      | *(Eliminada)*             | No disponible en la nueva versión 2.0              |
| `toolbarBlocks`    | `toolbar`                 | Ahora admite estructura detallada de la toolbar    |
| `defaultStyles`    | `defaultStyles` (updated) | La estructura ahora es por bloque y basada en CSS  |
| `mode`             | `layoutMode`              | Reemplazada con una configuración basada en enum más estricta |

### - `customStats` {#--customstats}

La propiedad `customStats` ha sido eliminada. La versión actual de RichText ya no admite mostrar estadísticas definidas por el usuario (por ejemplo, recuento de caracteres, palabras u oraciones).

Si aún necesita calcular métricas de texto, puede hacerlo externamente accediendo al contenido del editor y procesándolo de forma manual:

```jsx
const content = editor.getValue();
const wordCount = content.split(/\s+/).length;
```

### - `toolbarBlocks` → [`toolbar`](api/config/toolbar.md) {#--toolbarblocks--toolbar}

Antes de **2.0**, los usuarios solo podían especificar bloques de controles
```jsx{2} title="Before 2.0"
new dhx.RichText("#root", {
  toolbarBlocks: ["undo", "style", "decoration", "colors", "align", "link"]
});
```

A partir de **2.0**, los usuarios pueden especificar controles individuales
```jsx{2-4} title="From 2.0"
new richtext.Richtext("#root", {
    toolbar: [
        "undo", "style", "bold", "italic", "underline", "text-color",
        "align", "link"
    ]
});
```

### - [`defaultStyles`](api/config/default-styles.md) {#--defaultstyles}

Antes de **2.0**, los usuarios podían definir valores predeterminados para los controles de selección de la toolbar
```jsx title="Before 2.0"
defaultStyles: {
    "font-family": "Tahoma",
    "font-size": "14px"
}
```

A partir de **2.0**, los usuarios pueden especificar valores de estilo predeterminados para tipos de bloque específicos
```jsx title="From 2.0"
defaultStyles: {
  "*": {
    "font-family": "Tahoma",
    "font-size": "14px"
  },
  h1: {
    "font-size": "32px",
    "color": "#333"
  }
}
```

:::note[Nota]
Use `*` para definir valores predeterminados base para todos los bloques y luego anule elementos específicos (p, h1, blockquote, etc.).
:::

### - `mode` → [`layoutMode`](api/config/layout-mode.md) {#--mode--layoutmode}

```jsx{2} title="Before 2.0"
new dhx.RichText("#root", {
    mode: "document"
});
```

```jsx{2} title="From 2.0"
new Richtext("#root", {
    layoutMode: "document" // o "classic"
});
```

El nuevo [`layoutMode`](api/config/layout-mode.md) admite estrictamente los valores `"classic"` y `"document"`.

### Migración de métodos {#methods-migration}

| Método anterior         | Nuevo equivalente                    | Notas                                                                |
| ----------------------- | ------------------------------------ | -------------------------------------------------------------------- |
| `getValue(mode)`        | `getValue(encoder)`                  | Los encoders reemplazan los modos de cadena; se necesita importación separada para los encoders |
| `setValue(value, mode)` | `setValue(value, encoder)`           | Los encoders reemplazan los modos de cadena; se necesita importación separada para los encoders |
| `getStats()`            | *Eliminado*                          | Sin reemplazo; se requiere lógica manual                             |
| `getEditorAPI()`        | *Eliminado*                          | Interno; use la API pública en su lugar                              |
| `fire()`                | *Eliminado*                          | Reemplazado por `exec()` e `intercept()`                             |
| `on()`, `detach()`      | ✅ Conservados (`api.on`, `api.detach`)| Ahora se acceden mediante `richtext.api`                           |
| `fullScreen()`          | *Eliminado*                          | Use la propiedad de configuración `fullscreenMode`                   |
| `exitFullScreen()`      | *Eliminado*                          | Use la propiedad de configuración `fullscreenMode`                   |
| `paint()`               | *Eliminado*                          | Ya no es necesario                                                   |
| `destructor()`          | ✅ Sigue disponible                  | Sin cambios                                                          |
| `setConfig()`           | ✅ Nuevo                             | Permite actualizaciones de configuración en tiempo real              |
| `setLocale()`           | ✅ Nuevo                             | Permite cambiar la configuración regional de forma dinámica          |
| `getReactiveState()`    | ✅ Nuevo                             | Habilita el seguimiento reactivo del estado                          |
| `getState()`            | ✅ Nuevo                             | Proporciona el estado de configuración estático actual               |
| `intercept()`           | ✅ Nuevo                             | Intercepta acciones internas                                         |
| `exec()`                | ✅ Nuevo                             | Ejecuta acciones internas                                            |

### - [`setValue()`](api/methods/set-value.md) / [`getValue()`](api/methods/get-value.md) {#--setvalue--getvalue}

```jsx title="Before 2.0"
...
editor.setValue("<p>Hello</p>", "html");
editor.getValue("text");
```

```jsx title="From 2.0"
const fromTextEncoder = richtext.text.fromText;
const fromHTMLEncoder = richtext.html.fromHTML;

const toTextEncoder = richtext.text.toText;
const toHTMLEncoder = richtext.html.toHTML;
...
editor.setValue("<p>Hello</p>", fromHTMLEncoder);
editor.getValue(toTextEncoder);
```

:::note[Nota]
Aún puede llamar a `getValue()` y `setValue()` sin un encoder — HTML se usa de forma predeterminada
:::

### - [`on`](api/internal/on.md) / [`detach`](api/internal/detach.md) {#--on--detach}

```jsx title="Before 2.0"
editor.events.on("Change", function(action, canUndo, canRedo){
  // su código aquí
});

editor.events.detach("Change");
```

```jsx title="From 2.0"
editor.api.on("set-font-size", (obj) => {
    console.log(obj.fontSize);
}, { tag: "track" });

editor.api.detach("track");
```

### - `fire()` → Use [`exec()`](api/internal/exec.md) e [`intercept()`](api/internal/intercept.md) {#--fire--use-exec-and-intercept}

```jsx title="Before 2.0"
editor.events.fire("some-event", [data]);
```

```jsx title="From 2.0"
editor.api.exec("some-event", obj);

// Prevenir la ejecución
editor.api.intercept("some-event", (obj) => false);
```

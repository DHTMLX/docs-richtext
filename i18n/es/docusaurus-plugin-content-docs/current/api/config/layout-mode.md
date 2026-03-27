---
sidebar_label: layoutMode
title: layoutMode Config
description: Aprenda sobre la configuración layoutMode en la documentación de la biblioteca DHTMLX JavaScript RichText. Explore guías para desarrolladores y referencia de API, pruebe ejemplos de código y demostraciones en vivo, y descargue una versión de evaluación gratuita de 30 días de DHTMLX RichText.
---

# layoutMode

### Descripción {#description}

@short: Opcional. Especifica el modo de diseño para el área principal del editor

### Uso {#usage}

~~~jsx {}
layoutMode: "classic" | "document";
~~~

El modo `"classic"` representa el área de edición que ocupa toda la página. El modo `"document"` representa fielmente los tamaños reales de un documento (tamaños utilizados: A4, A5, A6, A7).

### Configuración predeterminada {#default-config}

~~~jsx
layoutMode: "classic";
~~~

### Ejemplo {#example}

~~~jsx {3}
// inicializar RichText
new richtext.Richtext("#root", {
    layoutMode: "document"  // inicializa RichText con el modo "document" por defecto
    // otras propiedades de configuración
});
~~~

**Historial de cambios:** La propiedad fue añadida en v2.0 en lugar de la propiedad eliminada `mode`

**Artículos relacionados:** [Configuración](guides/configuration.md)

**Ejemplo relacionado:** [RichText. Initialization](https://snippet.dhtmlx.com/t55alxiy?tag=richtext)

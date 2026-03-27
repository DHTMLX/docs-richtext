---
sidebar_label: insert-line
title: Evento insert-line
description: Puede consultar información sobre el evento insert-line en la documentación de la biblioteca JavaScript DHTMLX RichText. Explore guías de desarrollo y referencia de API, pruebe ejemplos de código y demostraciones en vivo, y descargue una versión de evaluación gratuita de 30 días de DHTMLX RichText.
---

# insert-line

### Descripción {#description}

@short: Se activa cuando se inserta una línea horizontal

### Uso {#usage}

~~~jsx {}
"insert-line": () => boolean | void;
~~~

:::info[Información]
Para gestionar los eventos internos puede usar los [**métodos del Event Bus**](api/overview/event_bus_methods_overview.md)
:::

### Ejemplo {#example}

~~~jsx {5-8}
// inicializar RichText
const editor = new richtext.Richtext("#root", {
    // propiedades de configuración
});
// suscribirse al evento "insert-line"
editor.api.on("insert-line", () => {
    console.log("The horizontal line was inserted");
});
~~~

**Historial de cambios:** El evento fue añadido en v2.0

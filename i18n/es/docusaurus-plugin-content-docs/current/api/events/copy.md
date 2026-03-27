---
sidebar_label: copy
title: Evento copy
description: Puede consultar información sobre el evento copy en la documentación de la biblioteca JavaScript DHTMLX RichText. Explore guías de desarrollo y referencia de API, pruebe ejemplos de código y demostraciones en vivo, y descargue una versión de evaluación gratuita de 30 días de DHTMLX RichText.
---

# copy

### Descripción {#description}

@short: Se activa cuando se copia el texto seleccionado

### Uso {#usage}

~~~jsx {}
"copy": () => boolean | void;
~~~

:::info[Información]
Para gestionar eventos internos puede usar los [**métodos del Event Bus**](api/overview/event_bus_methods_overview.md)
:::

### Ejemplo {#example}

~~~jsx {5-8}
// inicializar RichText
const editor = new richtext.Richtext("#root", {
    // propiedades de configuración
});
// suscribirse al evento "copy"
editor.api.on("copy", () => {
    console.log("Selected text was copied");
});
~~~

**Historial de cambios:** El evento fue añadido en v2.0

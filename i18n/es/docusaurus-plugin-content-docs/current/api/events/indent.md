---
sidebar_label: indent
title: Evento indent
description: Puede consultar información sobre el evento indent en la documentación de la biblioteca JavaScript DHTMLX RichText. Explore guías de desarrollo y referencia de API, pruebe ejemplos de código y demostraciones en vivo, y descargue una versión de evaluación gratuita de 30 días de DHTMLX RichText.
---

# indent

### Descripción {#description}

@short: Se activa cuando se aumenta la sangría de un bloque

### Uso {#usage}

~~~jsx {}
"indent": ({ step: number }) => boolean | void;
~~~

### Parámetros {#parameters}

El callback del evento **indent** puede recibir un objeto con los siguientes parámetros:

- `step` - el paso con el que se aumentó la sangría

:::info[Información]
Para gestionar eventos internos puede usar los [**métodos del Event Bus**](api/overview/event_bus_methods_overview.md)
:::

### Ejemplo {#example}

~~~jsx {5-9}
// inicializar RichText
const editor = new richtext.Richtext("#root", {
    // propiedades de configuración
});
// suscribirse al evento "indent"
editor.api.on("indent", (obj) => {
    console.log(obj);
    console.log("The indention was increased");
});
~~~

**Historial de cambios:** El evento fue añadido en v2.0

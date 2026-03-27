---
sidebar_label: outdent
title: Evento outdent
description: Puede consultar información sobre el evento outdent en la documentación de la biblioteca JavaScript DHTMLX RichText. Explore guías de desarrollo y referencia de API, pruebe ejemplos de código y demostraciones en vivo, y descargue una versión de evaluación gratuita de 30 días de DHTMLX RichText.
---

# outdent

### Descripción {#description}

@short: Se activa cuando se reduce la sangría de un bloque

### Uso {#usage}

~~~jsx {}
"outdent": ({ step: number }) => boolean | void;
~~~

### Parámetros {#parameters}

El callback del evento **outdent** puede recibir un objeto con los siguientes parámetros:

- `step` - el paso con el que se redujo la sangría

:::info[Información]
Para gestionar eventos internos puede usar los [**métodos del Event Bus**](api/overview/event_bus_methods_overview.md)
:::

### Ejemplo {#example}

~~~jsx {5-9}
// inicializar RichText
const editor = new richtext.Richtext("#root", {
    // propiedades de configuración
});
// suscribirse al evento "outdent"
editor.api.on("outdent", (obj) => {
    console.log(obj);
    console.log("The indention was decreased");
});
~~~

**Historial de cambios:** El evento fue añadido en v2.0

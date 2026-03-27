---
sidebar_label: align
title: Evento align
description: Puede consultar información sobre el evento align en la documentación de la biblioteca JavaScript DHTMLX RichText. Explore guías de desarrollo y referencia de API, pruebe ejemplos de código y demostraciones en vivo, y descargue una versión de evaluación gratuita de 30 días de DHTMLX RichText.
---

# align

### Descripción {#description}

@short: Se activa cuando se cambia la alineación del texto mediante el menubar/toolbar o los métodos del Event Bus

### Uso {#usage}

~~~jsx {}
"align": ({
    align: "left" | "center" | "right" | "justify"
}) => boolean | void;
~~~

### Parámetros {#parameters}

El callback del evento **align** puede recibir un objeto con el siguiente parámetro:

- `align` - la alineación del texto. Puede especificar uno de los siguientes valores: `"left" | "center" | "right" | "justify"`

:::info[Información]
Para gestionar eventos internos puede usar los [**métodos del Event Bus**](api/overview/event_bus_methods_overview.md)
:::

### Ejemplo {#example}

~~~jsx {5-12}
// inicializar RichText
const editor = new richtext.Richtext("#root", {
    // propiedades de configuración
});
// suscribirse al evento "align"
editor.api.on("align", (obj) => {
    console.log(`Align to: ${obj.align}`);
});
// alinear el texto a la izquierda
editor.api.exec("align", {
    align: "left"
});
~~~

**Historial de cambios:** El evento fue añadido en v2.0

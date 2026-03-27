---
sidebar_label: set-font-size
title: Evento set-font-size
description: Puede obtener información sobre el evento set-font-size en la documentación de la biblioteca JavaScript RichText de DHTMLX. Explore guías de desarrollo y referencia de API, pruebe ejemplos de código y demostraciones en vivo, y descargue una versión de evaluación gratuita de 30 días de DHTMLX RichText.
---

# set-font-size

### Descripción {#description}

@short: Se activa cuando se establece un tamaño de fuente

### Uso {#usage}

~~~jsx {}
"set-font-size": ({ fontSize: string }) => boolean | void;
~~~

### Parámetros {#parameters}

El callback del evento **set-font-size** puede recibir un objeto con el siguiente parámetro:

- `fontSize` - el tamaño de fuente a aplicar

:::info[Información]
Para manejar eventos internos puede utilizar los [**métodos del Event Bus**](api/overview/event_bus_methods_overview.md)
:::

### Ejemplo {#example}

~~~jsx {5-13}
// inicializar RichText
const editor = new richtext.Richtext("#root", {
    // propiedades de configuración
});
// suscribirse al evento "set-font-size"
editor.api.on("set-font-size", (obj) => {
    console.log(obj.fontSize);
    console.log("The font size was changed");
});
// aplicar nuevo tamaño de fuente
editor.api.exec("set-font-size", {
    fontSize: "11px"
});
~~~

**Historial de cambios:** El evento fue añadido en v2.0

---
sidebar_label: set-font-family
title: Evento set-font-family
description: Puede obtener información sobre el evento set-font-family en la documentación de la biblioteca JavaScript RichText de DHTMLX. Explore guías de desarrollo y referencia de API, pruebe ejemplos de código y demostraciones en vivo, y descargue una versión de evaluación gratuita de 30 días de DHTMLX RichText.
---

# set-font-family

### Descripción {#description}

@short: Se activa cuando se establece una familia de fuente

### Uso {#usage}

~~~jsx {}
"set-font-family": ({ fontFamily: string }) => boolean | void;
~~~

### Parámetros {#parameters}

El callback del evento **set-font-family** puede recibir un objeto con el siguiente parámetro:

- `fontFamily` - la familia de fuente a aplicar. Las siguientes fuentes están disponibles: `"Roboto" | "Arial" | "Georgia" | "Tahoma" | "Times New Roman" | "Verdana"`

:::info[Información]
Para manejar eventos internos puede utilizar los [**métodos del Event Bus**](api/overview/event_bus_methods_overview.md)
:::

### Ejemplo {#example}

~~~jsx {5-13}
// inicializar RichText
const editor = new richtext.Richtext("#root", {
    // propiedades de configuración
});
// suscribirse al evento "set-font-family"
editor.api.on("set-font-family", (obj) => {
    console.log(obj.fontFamily);
    console.log("The font family was changed");
});
// aplicar nueva familia de fuente
editor.api.exec("set-font-family", {
    fontFamily: "Roboto"
});
~~~

**Historial de cambios:** El evento fue añadido en v2.0

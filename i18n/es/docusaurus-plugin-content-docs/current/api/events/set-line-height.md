---
sidebar_label: set-line-height
title: Evento set-line-height
description: Puede obtener información sobre el evento set-line-height en la documentación de la biblioteca JavaScript RichText de DHTMLX. Explore guías de desarrollo y referencia de API, pruebe ejemplos de código y demostraciones en vivo, y descargue una versión de evaluación gratuita de 30 días de DHTMLX RichText.
---

# set-line-height

### Descripción {#description}

@short: Se activa cuando se establece un interlineado

### Uso {#usage}

~~~jsx {}
"set-line-height": ({ lineHeight: string }) => boolean | void;
~~~

### Parámetros {#parameters}

El callback del evento **set-line-height** puede recibir un objeto con el siguiente parámetro:

- `lineHeight` - el interlineado

:::info[Información]
Para manejar eventos internos puede utilizar los [**métodos del Event Bus**](api/overview/event_bus_methods_overview.md)
:::

### Ejemplo {#example}

~~~jsx {5-13}
// inicializar RichText
const editor = new richtext.Richtext("#root", {
    // propiedades de configuración
});
// suscribirse al evento "set-line-height"
editor.api.on("set-line-height", (obj) => {
    console.log(obj);
    console.log("The line height was changed");
});
// aplicar un nuevo interlineado
editor.api.exec("set-line-height", {
   lineHeight: "15px"
});
~~~

**Historial de cambios:** El evento fue añadido en v2.0

---
sidebar_label: set-text-color
title: Evento set-text-color
description: Puede obtener información sobre el evento set-text-color en la documentación de la biblioteca JavaScript RichText de DHTMLX. Explore guías de desarrollo y referencia de API, pruebe ejemplos de código y demostraciones en vivo, y descargue una versión de evaluación gratuita de 30 días de DHTMLX RichText.
---

# set-text-color

### Descripción {#description}

@short: Se activa cuando se establece un color de texto y/o un color de fondo del texto

### Uso {#usage}

~~~jsx {}
"set-text-color": (ITextColor) => boolean | void;

interface ITextColor {
    color?: string;
    background?: string;
}
~~~

### Parámetros {#parameters}

El callback del evento **set-text-color** puede recibir un objeto con los siguientes parámetros:

- `color` - un color de texto
- `background` - un color de fondo del texto

:::info[Información]
Para manejar eventos internos puede utilizar los [**métodos del Event Bus**](api/overview/event_bus_methods_overview.md)
:::

### Ejemplo {#example}

~~~jsx {5-14}
// inicializar RichText
const editor = new richtext.Richtext("#root", {
    // propiedades de configuración
});
// suscribirse al evento "set-text-color"
editor.api.on("set-text-color", (obj) => {
    console.log(obj);
    console.log("The text color and/or background text color were changed");
});
// aplicar color de texto y fondo
editor.api.exec("set-text-color", {
   color: "red",
   background: "blue"
});
~~~

**Historial de cambios:** El evento fue añadido en v2.0

---
sidebar_label: set-text-style
title: Evento set-text-style
description: Puede obtener información sobre el evento set-text-style en la documentación de la biblioteca JavaScript RichText de DHTMLX. Explore guías de desarrollo y referencia de API, pruebe ejemplos de código y demostraciones en vivo, y descargue una versión de evaluación gratuita de 30 días de DHTMLX RichText.
---

# set-text-style

### Descripción {#description}

@short: Se activa cuando se establece un estilo de texto

### Uso {#usage}

~~~jsx {}
"set-text-style": ({ tag: TBlockType }) => boolean | void;

type TBlockType = "p" | "blockquote" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
~~~

### Parámetros {#parameters}

El callback del evento **set-text-style** puede recibir un objeto con los siguientes parámetros:

- `tag` - un estilo de texto

:::info[Información]
Para manejar eventos internos puede utilizar los [**métodos del Event Bus**](api/overview/event_bus_methods_overview.md)
:::

### Ejemplo {#example}

~~~jsx {5-13}
// inicializar RichText
const editor = new richtext.Richtext("#root", {
    // propiedades de configuración
});
// suscribirse al evento "set-text-style"
editor.api.on("set-text-style", (obj) => {
    console.log(obj.tag);
    console.log("The text style was changed");
});
// aplicar nuevo estilo de texto
editor.api.exec("set-text-style", {
    tag: "blockquote"
});
~~~

**Historial de cambios:** El evento fue añadido en v2.0

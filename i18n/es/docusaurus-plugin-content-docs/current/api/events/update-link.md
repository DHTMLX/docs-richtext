---
sidebar_label: update-link
title: Evento update-link
description: Puede obtener información sobre el evento update-link en la documentación de la biblioteca JavaScript RichText de DHTMLX. Explore guías de desarrollo y referencia de API, pruebe ejemplos de código y demostraciones en vivo, y descargue una versión de evaluación gratuita de 30 días de DHTMLX RichText.
---

# update-link

### Descripción {#description}

@short: Se activa cuando se actualiza un enlace

### Uso {#usage}

~~~jsx {}
"update-link": ({ id: number, url: string }) => boolean | void;
~~~

### Parámetros {#parameters}

El callback del evento **update-link** puede recibir un objeto con los siguientes parámetros:

- `id` - el ID del enlace
- `url` - la URL modificada

:::info[Información]
Para manejar eventos internos puede utilizar los [**métodos del Event Bus**](api/overview/event_bus_methods_overview.md)
:::

### Ejemplo {#example}

~~~jsx {5-9}
// inicializar RichText
const editor = new richtext.Richtext("#root", {
    // propiedades de configuración
});
// suscribirse al evento "update-link"
editor.api.on("update-link", (obj) => {
    console.log(obj);
    console.log("The following link was updated:" + obj.url);
});
~~~

**Historial de cambios:** El evento fue añadido en v2.0

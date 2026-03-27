---
sidebar_label: insert-link
title: Evento insert-link
description: Puede consultar información sobre el evento insert-link en la documentación de la biblioteca JavaScript DHTMLX RichText. Explore guías de desarrollo y referencia de API, pruebe ejemplos de código y demostraciones en vivo, y descargue una versión de evaluación gratuita de 30 días de DHTMLX RichText.
---

# insert-link

### Descripción {#description}

@short: Se activa cuando se inserta un enlace

### Uso {#usage}

~~~jsx {}
"insert-link": ({ url: string }) => boolean | void;
~~~

### Parámetros {#parameters}

El callback del evento **update-link** puede recibir un objeto con el siguiente parámetro:

- `url` - la URL a insertar

:::info[Información]
Para gestionar eventos internos puede usar los [**métodos del Event Bus**](api/overview/event_bus_methods_overview.md)
:::

### Ejemplo {#example}

~~~jsx {5-9}
// inicializar RichText
const editor = new richtext.Richtext("#root", {
    // propiedades de configuración
});
// suscribirse al evento "insert-link"
editor.api.on("insert-link", (obj) => {
    console.log(obj)
    console.log("The following link was inserted: " + obj.url);
});
~~~

**Historial de cambios:** El evento fue añadido en v2.0

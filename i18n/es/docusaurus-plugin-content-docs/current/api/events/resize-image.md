---
sidebar_label: resize-image
title: Evento resize-image
description: Puede obtener información sobre el evento resize-image en la documentación de la biblioteca JavaScript RichText de DHTMLX. Explore guías de desarrollo y referencia de API, pruebe ejemplos de código y demostraciones en vivo, y descargue una versión de evaluación gratuita de 30 días de DHTMLX RichText.
---

# resize-image

### Descripción {#description}

@short: Se activa cuando se redimensiona una imagen

### Uso {#usage}

~~~jsx {}
"resize-image": ({ id: number, width: number, height: number }) => boolean | void;
~~~

### Parámetros {#parameters}

El callback del evento **resize-image** puede recibir un objeto con los siguientes parámetros:

- `id` - el ID de la imagen
- `width` - el ancho de la imagen
- `height` - el alto de la imagen

:::info[Información]
Para manejar eventos internos puede utilizar los [**métodos del Event Bus**](api/overview/event_bus_methods_overview.md)
:::

### Ejemplo {#example}

~~~jsx {5-9}
// inicializar RichText
const editor = new richtext.Richtext("#root", {
// propiedades de configuración
});
// suscribirse al evento "resize-image"
editor.api.on("resize-image", (obj) => {
    console.log(obj);
    console.log("The image was resized")
});
~~~

**Historial de cambios:** El evento fue añadido en v2.0

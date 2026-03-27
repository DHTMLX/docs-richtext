---
sidebar_label: insert-image
title: Evento insert-image
description: Puede consultar información sobre el evento insert-image en la documentación de la biblioteca JavaScript DHTMLX RichText. Explore guías de desarrollo y referencia de API, pruebe ejemplos de código y demostraciones en vivo, y descargue una versión de evaluación gratuita de 30 días de DHTMLX RichText.
---

# insert-image

### Descripción {#description}

@short: Se activa cuando se inserta una imagen

### Uso {#usage}

~~~jsx {}
"insert-image": (IImageContext) => boolean | void;

interface IImageContext {
    id: TID;
    value: string;
    width: number;
    height: number;
    // props adicionales del ctx del uploader, no requeridas para la acción real
    name?: string;
    file?: File;
    status?: string;
    selected: (ctx: IImageContext) => void;
    uploaded: (ctx: IImageContext) => void;
}
~~~

:::info[Información]
Para gestionar eventos internos puede usar los [**métodos del Event Bus**](api/overview/event_bus_methods_overview.md)
:::

### Ejemplo {#example}

~~~jsx {5-9}
// inicializar RichText
const editor = new richtext.Richtext("#root", {
    // propiedades de configuración
});
// suscribirse al evento "insert-image"
editor.api.on("insert-image", (obj) => {
    console.log(obj);
    console.log("The image was inserted");
});
~~~

**Historial de cambios:** El evento fue añadido en v2.0

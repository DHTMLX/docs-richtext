---
sidebar_label: insert-list
title: Evento insert-list
description: Puede consultar información sobre el evento insert-list en la documentación de la biblioteca JavaScript DHTMLX RichText. Explore guías de desarrollo y referencia de API, pruebe ejemplos de código y demostraciones en vivo, y descargue una versión de evaluación gratuita de 30 días de DHTMLX RichText.
---

# insert-list

### Descripción {#description}

@short: Se activa cuando se inserta una lista

### Uso {#usage}

~~~jsx {}
"insert-list": ({ type: TListType }) => boolean | void;

type TListType = "bulleted" | "numbered";
~~~

### Parámetros {#parameters}

El callback del evento **insert-list** puede recibir un objeto con el siguiente parámetro:

- `type` - el tipo de lista insertada. Puede especificar los siguientes valores:
    - `"bulleted"` - lista con viñetas
    - `"numbered"` - lista numerada

:::info[Información]
Para gestionar eventos internos puede usar los [**métodos del Event Bus**](api/overview/event_bus_methods_overview.md)
:::

### Ejemplo {#example}

~~~jsx {5-9}
// inicializar RichText
const editor = new richtext.Richtext("#root", {
    // propiedades de configuración
});
// suscribirse al evento "insert-list"
editor.api.on("insert-list", (obj) => {
    console.log(obj.type);
    console.log("The list was inserted");
});
~~~

**Historial de cambios:** El evento fue añadido en v2.0

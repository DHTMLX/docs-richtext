---
sidebar_label: create-new
title: Evento create-new
description: Puede consultar información sobre el evento create-new en la documentación de la biblioteca JavaScript DHTMLX RichText. Explore guías de desarrollo y referencia de API, pruebe ejemplos de código y demostraciones en vivo, y descargue una versión de evaluación gratuita de 30 días de DHTMLX RichText.
---

# create-new

### Descripción {#description}

@short: Se activa cuando se pulsa la opción "New" en el menubar o mediante los métodos del Event Bus

### Uso {#usage}

~~~jsx {}
"create-new": ({ reset?: boolean }) => boolean | void;
~~~

### Parámetros {#parameters}

El callback del evento **create-new** puede recibir un objeto con el siguiente parámetro:

- `reset` - restablece el historial al crear un nuevo archivo

:::info[Información]
Para gestionar eventos internos puede usar los [**métodos del Event Bus**](api/overview/event_bus_methods_overview.md)
:::

### Ejemplo {#example}

~~~jsx {5-10}
// inicializar RichText
const editor = new richtext.Richtext("#root", {
    // propiedades de configuración
});
// suscribirse al evento "create-new"
editor.api.on("create-new", ({ reset }) => {
    console.log(`Document has been cleared. History has ${reset ? "" : "not"} been reset.`);
});
// crear nuevo archivo y restablecer el historial
editor.api.exec("create-new", { reset: true });
~~~

**Historial de cambios:** El evento fue añadido en v2.0

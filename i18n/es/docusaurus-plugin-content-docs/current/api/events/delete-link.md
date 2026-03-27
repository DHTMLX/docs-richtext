---
sidebar_label: delete-link
title: Evento delete-link
description: Puede consultar información sobre el evento delete-link en la documentación de la biblioteca JavaScript DHTMLX RichText. Explore guías de desarrollo y referencia de API, pruebe ejemplos de código y demostraciones en vivo, y descargue una versión de evaluación gratuita de 30 días de DHTMLX RichText.
---

# delete-link

### Descripción {#description}

@short: Se activa cuando se elimina un enlace

### Uso {#usage}

~~~jsx {}
"delete-link": () => boolean | void;
~~~

:::info[Información]
Para gestionar eventos internos puede usar los [**métodos del Event Bus**](api/overview/event_bus_methods_overview.md)
:::

### Ejemplo {#example}

~~~jsx {5-8}
// inicializar RichText
const editor = new richtext.Richtext("#root", {
    // propiedades de configuración
});
// suscribirse al evento "delete-link"
editor.api.on("delete-link", () => {
    console.log("The link was deleted");
});
~~~

**Historial de cambios:** El evento fue añadido en v2.0

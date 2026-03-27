---
sidebar_label: paste
title: Evento paste
description: Puede consultar información sobre el evento paste en la documentación de la biblioteca JavaScript DHTMLX RichText. Explore guías de desarrollo y referencia de API, pruebe ejemplos de código y demostraciones en vivo, y descargue una versión de evaluación gratuita de 30 días de DHTMLX RichText.
---

# paste

### Descripción {#description}

@short: Se activa cuando se pega contenido

### Uso {#usage}

~~~jsx {}
"paste": () => boolean | void;
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
// suscribirse al evento "paste"
editor.api.on("paste", () => {
    console.log("Content was pasted");
});
~~~

**Historial de cambios:** El evento fue añadido en v2.0

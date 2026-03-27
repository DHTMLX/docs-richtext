---
sidebar_label: clear-text-format
title: Evento clear-text-format
description: Puede consultar información sobre el evento clear-text-format en la documentación de la biblioteca JavaScript DHTMLX RichText. Explore guías de desarrollo y referencia de API, pruebe ejemplos de código y demostraciones en vivo, y descargue una versión de evaluación gratuita de 30 días de DHTMLX RichText.
---

# clear-text-format

### Descripción {#description}

@short: Se activa cuando se borra el formato de un texto mediante el menubar/toolbar o los métodos del Event Bus

### Uso {#usage}

~~~jsx {}
"clear-text-format": () => boolean | void;
~~~

:::info[Información]
Para gestionar eventos internos puede usar los [**métodos del Event Bus**](api/overview/event_bus_methods_overview.md)
:::

### Ejemplo {#example}

~~~jsx {5-10}
// inicializar RichText
const editor = new richtext.Richtext("#root", {
    // propiedades de configuración
});
// suscribirse al evento "clear-text-format"
editor.api.on("clear-text-format", () => {
    console.log("Text format was cleared");
});
// borrar el formato del texto
editor.api.exec("clear-text-format", {});
~~~

**Historial de cambios:** El evento fue añadido en v2.0

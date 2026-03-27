---
sidebar_label: subscript
title: Evento subscript
description: Puede obtener información sobre el evento subscript en la documentación de la biblioteca JavaScript RichText de DHTMLX. Explore guías de desarrollo y referencia de API, pruebe ejemplos de código y demostraciones en vivo, y descargue una versión de evaluación gratuita de 30 días de DHTMLX RichText.
---

# subscript

### Descripción {#description}

@short: Se activa cuando se presiona el botón "Subscript" en el menubar/toolbar o mediante los métodos del Event Bus

### Uso {#usage}

~~~jsx {}
"subscript": () => boolean | void;
~~~

:::info[Información]
Para manejar eventos internos puede utilizar los [**métodos del Event Bus**](api/overview/event_bus_methods_overview.md)
:::

### Ejemplo {#example}

~~~jsx {5-10}
// inicializar RichText
const editor = new richtext.Richtext("#root", {
    // propiedades de configuración
});
// suscribirse al evento "subscript"
editor.api.on("subscript", () => {
    console.log("Subscript was applied");
});
// disparar el evento "subscript"
editor.api.exec("subscript", {});
~~~

**Historial de cambios:** El evento fue añadido en v2.0

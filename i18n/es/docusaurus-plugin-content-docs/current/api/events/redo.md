---
sidebar_label: redo
title: Evento redo
description: Puede obtener información sobre el evento redo en la documentación de la biblioteca JavaScript RichText de DHTMLX. Explore guías de desarrollo y referencia de API, pruebe ejemplos de código y demostraciones en vivo, y descargue una versión de evaluación gratuita de 30 días de DHTMLX RichText.
---

# redo

### Descripción {#description}

@short: Se activa cuando se presiona el botón "Redo" en el menubar/toolbar o mediante los métodos del Event Bus

### Uso {#usage}

~~~jsx {}
"redo": () => boolean | void;
~~~

:::info[Información]
Para manejar eventos internos puede utilizar los [**métodos del Event Bus**](api/overview/event_bus_methods_overview.md)
:::

### Ejemplo {#example}

~~~jsx {5-8}
// inicializar RichText
const editor = new richtext.Richtext("#root", {
    // propiedades de configuración
});
// suscribirse al evento "redo"
editor.api.on("redo", () => {
    console.log("Redo operation was performed");
});
~~~

**Historial de cambios:** El evento fue añadido en v2.0

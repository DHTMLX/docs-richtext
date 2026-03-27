---
sidebar_label: toggle-layout-mode
title: Evento toggle-layout-mode
description: Puede obtener información sobre el evento toggle-layout-mode en la documentación de la biblioteca JavaScript RichText de DHTMLX. Explore guías de desarrollo y referencia de API, pruebe ejemplos de código y demostraciones en vivo, y descargue una versión de evaluación gratuita de 30 días de DHTMLX RichText.
---

# toggle-layout-mode

### Descripción {#description}

@short: Se activa cuando se cambia el modo de diseño

### Uso {#usage}

~~~jsx {}
"toggle-layout-mode": ({ mode?: "classic" | "document" }) => boolean | void;
~~~

### Parámetros {#parameters}

El callback del evento **toggle-layout-mode** puede recibir un objeto con los siguientes parámetros:

- `mode` - el modo de diseño. Los siguientes modos están disponibles: `"classic" | "document"`

:::info[Información]
Para manejar eventos internos puede utilizar los [**métodos del Event Bus**](api/overview/event_bus_methods_overview.md)
:::

### Ejemplo {#example}

~~~jsx {5-11}
// inicializar RichText
const editor = new richtext.Richtext("#root", {
    // propiedades de configuración
});
// suscribirse al evento "toggle-layout-mode"
editor.api.on("toggle-layout-mode", (obj) => {
    console.log(obj);
    console.log("The layout mode was changed");
});
// establecer el modo de diseño "document"
editor.api.exec("toggle-layout-mode", { mode: "document" });
~~~

**Historial de cambios:** El evento fue añadido en v2.0

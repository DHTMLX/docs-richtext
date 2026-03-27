---
sidebar_label: toggle-fullscreen-mode
title: Evento toggle-fullscreen-mode
description: Puede obtener información sobre el evento toggle-fullscreen-mode en la documentación de la biblioteca JavaScript RichText de DHTMLX. Explore guías de desarrollo y referencia de API, pruebe ejemplos de código y demostraciones en vivo, y descargue una versión de evaluación gratuita de 30 días de DHTMLX RichText.
---

# toggle-fullscreen-mode

### Descripción {#description}

@short: Se activa cuando se cambia el modo de pantalla completa

### Uso {#usage}

~~~jsx {}
"toggle-fullscreen-mode": ({ mode?: boolean }) => boolean | void;
~~~

### Parámetros {#parameters}

El callback del evento **toggle-fullscreen-mode** puede recibir un objeto con el siguiente parámetro:

- `mode` - activa el modo de pantalla completa

:::info[Información]
Para manejar eventos internos puede utilizar los [**métodos del Event Bus**](api/overview/event_bus_methods_overview.md)
:::

### Ejemplo {#example}

~~~jsx {5-9}
// inicializar RichText
const editor = new richtext.Richtext("#root", {
    // propiedades de configuración
});
// suscribirse al evento "toggle-fullscreen-mode"
editor.api.on("toggle-fullscreen-mode", (obj) => {
    console.log(obj);
    console.log("The full screen mode was changed");
});
// activar el modo de pantalla completa
editor.api.exec("toggle-fullscreen-mode", { mode: true });
~~~

**Historial de cambios:** El evento fue añadido en v2.0

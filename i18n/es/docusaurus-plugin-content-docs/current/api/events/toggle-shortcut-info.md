---
sidebar_label: toggle-shortcut-info
title: Evento toggle-shortcut-info
description: Puede obtener información sobre el evento toggle-shortcut-info en la documentación de la biblioteca JavaScript RichText de DHTMLX. Explore guías de desarrollo y referencia de API, pruebe ejemplos de código y demostraciones en vivo, y descargue una versión de evaluación gratuita de 30 días de DHTMLX RichText.
---

# toggle-shortcut-info

### Descripción {#description}

@short: Se activa cuando se cambia la información de atajos de teclado

### Uso {#usage}

~~~jsx {}
"toggle-shortcut-info": ({ mode?: boolean }) => boolean | void;
~~~

### Parámetros {#parameters}

El callback del evento **toggle-shortcut-info** puede recibir un objeto con el siguiente parámetro:

- `mode` - activa la información de atajos de teclado; `true` para mostrar el popup de información de atajos, `false` para ocultarlo

:::info[Información]
Para manejar eventos internos puede utilizar los [**métodos del Event Bus**](api/overview/event_bus_methods_overview.md)
:::

### Ejemplo {#example}

~~~jsx {5-9}
// inicializar RichText
const editor = new richtext.Richtext("#root", {
    // propiedades de configuración
});
// suscribirse al evento "toggle-shortcut-info"
editor.api.on("toggle-shortcut-info", (obj) => {
    console.log(obj);
    console.log("The shortcut info was shown");
});
// activar la información de atajos de teclado
editor.api.exec("toggle-shortcut-info", { mode: true });
~~~

**Historial de cambios:** El evento fue añadido en v2.0

---
sidebar_label: show-popup
title: Evento show-popup
description: Puede obtener información sobre el evento show-popup en la documentación de la biblioteca JavaScript RichText de DHTMLX. Explore guías de desarrollo y referencia de API, pruebe ejemplos de código y demostraciones en vivo, y descargue una versión de evaluación gratuita de 30 días de DHTMLX RichText.
---

# show-popup

### Descripción {#description}

@short: Se activa cuando se muestra u oculta un popup

### Uso {#usage}

~~~jsx {}
"show-popup": (IPopupConfig) => boolean | void;

interface IPopupConfig {
    type: "link" | null;
    image?: boolean;
}
~~~

### Parámetros {#parameters}

El callback del evento **show-popup** puede recibir un objeto con los siguientes parámetros:

- `type` - el tipo de popup
- `image` - proporciona acceso a contexto adicional (si el cursor actual apunta a una imagen o no)

:::info[Información]
Para manejar eventos internos puede utilizar los [**métodos del Event Bus**](api/overview/event_bus_methods_overview.md)
:::

### Ejemplo {#example}

~~~jsx {5-13}
// inicializar RichText
const editor = new richtext.Richtext("#root", {
    // propiedades de configuración
});
// suscribirse al evento "show-popup"
editor.api.on("show-popup", (obj) => {
    console.log(obj);
    console.log("The popup was shown/hidden");
});
// mostrar el popup de enlace
editor.api.exec("show-popup", {
    type: "link"
});
~~~

**Historial de cambios:** El evento fue añadido en v2.0

---
sidebar_label: superscript
title: Evento superscript
description: Puede obtener información sobre el evento superscript en la documentación de la biblioteca JavaScript RichText de DHTMLX. Explore guías de desarrollo y referencia de API, pruebe ejemplos de código y demostraciones en vivo, y descargue una versión de evaluación gratuita de 30 días de DHTMLX RichText.
---

# superscript

### Descripción {#description}

@short: Se activa cuando se presiona el botón "Superscript" en el menubar/toolbar o mediante los métodos del Event Bus

### Uso {#usage}

~~~jsx {}
"superscript": () => boolean | void;
~~~

:::info[Información]
Para manejar eventos internos puede utilizar los [**métodos del Event Bus**](api/overview/event_bus_methods_overview.md)
:::

### Ejemplo {#example}

~~~jsx {5-9}
// inicializar RichText
const editor = new richtext.Richtext("#root", {
    // propiedades de configuración
});
// suscribirse al evento "superscript"
editor.api.on("superscript", () => {
    console.log("Superscript was applied");
});
// disparar el evento "superscript"
editor.api.exec("superscript", {});
~~~

**Historial de cambios:** El evento fue añadido en v2.0

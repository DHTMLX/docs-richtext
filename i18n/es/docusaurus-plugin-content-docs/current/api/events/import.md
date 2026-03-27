---
sidebar_label: import
title: Evento import
description: Puede consultar información sobre el evento import en la documentación de la biblioteca JavaScript DHTMLX RichText. Explore guías de desarrollo y referencia de API, pruebe ejemplos de código y demostraciones en vivo, y descargue una versión de evaluación gratuita de 30 días de DHTMLX RichText.
---

# import

### Descripción {#description}

@short: Se activa después de pulsar la opción "Import" en el menubar o mediante los métodos del Event Bus

### Uso {#usage}

~~~jsx {}
"import": ({ html?: string }) => boolean | void;
~~~

### Parámetros {#parameters}

El callback del evento **import** puede recibir un objeto con el siguiente parámetro:

- `html` - un valor de texto en formato html

:::info[Información]
Para gestionar eventos internos puede usar los [**métodos del Event Bus**](api/overview/event_bus_methods_overview.md)
:::

### Ejemplo {#example}

~~~jsx {5-13}
// inicializar RichText
const editor = new richtext.Richtext("#root", {
    // propiedades de configuración
});
// suscribirse al evento "import"
editor.api.on("import", (obj) => {
    console.log(obj.html);
    console.log("The new value was imported");
});
// importar nuevo valor
editor.api.exec("import", {
    html: "<h2>some value</h2>" // simplemente llama a setValue
});
~~~

**Historial de cambios:** El evento fue añadido en v2.0

---
sidebar_label: set-text-format
title: Evento set-text-format
description: Puede obtener información sobre el evento set-text-format en la documentación de la biblioteca JavaScript RichText de DHTMLX. Explore guías de desarrollo y referencia de API, pruebe ejemplos de código y demostraciones en vivo, y descargue una versión de evaluación gratuita de 30 días de DHTMLX RichText.
---

# set-text-format

### Descripción {#description}

@short: Se activa cuando se establece un formato de texto

### Uso {#usage}

~~~jsx {}
"set-text-format": (ITextFormat) => boolean | void;

interface ITextFormat {
    bold?: boolean;
    italic?: boolean;
    strike?: boolean;
    underline?: boolean;
}
~~~

:::info[Información]
Para manejar eventos internos puede utilizar los [**métodos del Event Bus**](api/overview/event_bus_methods_overview.md)
:::

### Parámetros {#parameters}

El callback del evento **set-text-format** puede recibir un objeto con los siguientes parámetros:

- `bold` - formato de texto negrita
- `italic` - formato de texto cursiva
- `strike` - formato de texto tachado
- `underline` - formato de texto subrayado

### Ejemplo {#example}

~~~jsx {5-14}
// inicializar RichText
const editor = new richtext.Richtext("#root", {
    // propiedades de configuración
});
// suscribirse al evento "set-text-format"
editor.api.on("set-text-format", (obj) => {
    console.log(obj);
    console.log("The text format was changed");
});
// aplicar el formato de texto "italic" y bold
editor.api.exec("set-text-format", {
    italic: true,
    bold: true
});
~~~

**Historial de cambios:** El evento fue añadido en v2.0

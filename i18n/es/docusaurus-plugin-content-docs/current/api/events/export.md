---
sidebar_label: export
title: Evento export
description: Puede consultar información sobre el evento export en la documentación de la biblioteca JavaScript DHTMLX RichText. Explore guías de desarrollo y referencia de API, pruebe ejemplos de código y demostraciones en vivo, y descargue una versión de evaluación gratuita de 30 días de DHTMLX RichText.
---

# export

### Descripción {#description}

@short: Se activa después de pulsar la opción "Export" en el menubar o mediante los métodos del Event Bus

### Uso {#usage}

~~~jsx {}
"export": ({ options: IExportOptions; result?: any }) => boolean | void;

interface IExportOptions {
    format?: "docx" | "pdf";
    url?: string;
    download?: boolean;
    fileName?: string;
}
~~~

### Parámetros {#parameters}

El callback del evento **export** puede recibir un objeto con los siguientes parámetros:

- `format` - el formato del archivo
- `url` - la URL base para la exportación del archivo
- `download` - permite al usuario especificar si desea descargar el archivo tras recibir la respuesta del servidor. Si la propiedad se establece en "false", el archivo no se descargará, pero el usuario podrá obtener los datos blob desde el objeto del evento (véase la propiedad `result` en la definición del evento)
- `fileName` - el nombre del archivo a exportar

:::info[Información]
Para gestionar eventos internos puede usar los [**métodos del Event Bus**](api/overview/event_bus_methods_overview.md)
:::

### Ejemplo {#example}

~~~jsx {5-15}
// inicializar RichText
const editor = new richtext.Richtext("#root", {
    // propiedades de configuración
});
// suscribirse al evento "export"
editor.api.on("export", (obj) => {
    console.log(obj);
    console.log("The file was exported");
});
// exportar el valor como archivo pdf
editor.api.exec("export", {
    format: "pdf",
    download: false,
    fileName: "some file"
});
~~~

**Historial de cambios:** El evento fue añadido en v2.0

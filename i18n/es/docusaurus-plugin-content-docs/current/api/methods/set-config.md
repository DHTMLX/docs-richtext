---
sidebar_label: setConfig()
title: Método setConfig
description: Puede obtener información sobre el método setConfig en la documentación de la biblioteca JavaScript RichText de DHTMLX. Consulte guías para desarrolladores y referencia de API, pruebe ejemplos de código y demostraciones en vivo, y descargue una versión de evaluación gratuita de 30 días de DHTMLX RichText.
---

# setConfig()

### Descripción {#description}

@short: Aplica nuevos parámetros de configuración a RichText

### Uso {#usage}

~~~jsx {}
setConfig(config: { [key:any]: any }): void;
~~~

### Parámetros {#parameters}

- `config` - (obligatorio) el objeto de parámetros de configuración de RichText. Consulte la lista completa de propiedades [aquí](api/overview/properties_overview.md)

:::note[Nota]
El método `setConfig()` preserva todos los parámetros previamente establecidos que no se proporcionan explícitamente en la llamada al método `setConfig()`.
:::

### Ejemplo {#example}

~~~jsx {6-8}
const editor = new richtext.Richtext("#root", {
    value: "<h1>Some text</h1>",
    // otras propiedades de configuración
});

editor.setConfig({
    layoutMode: "document"
});
~~~

**Historial de cambios:** El método fue añadido en v2.0

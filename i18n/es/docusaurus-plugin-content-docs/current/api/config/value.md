---
sidebar_label: value
title: value Config
description: Aprenda sobre la configuración value en la documentación de la biblioteca DHTMLX JavaScript RichText. Explore guías para desarrolladores y referencia de API, pruebe ejemplos de código y demostraciones en vivo, y descargue una versión de evaluación gratuita de 30 días de DHTMLX RichText.
---

# value

### Descripción {#description}

@short: Opcional. Especifica el valor (contenido) inicial que se muestra en el área del editor de RichText

:::tip[Consejo]
Si desea establecer el valor (contenido) usando un formato personalizado, utilice el método integrado [`setValue()`](api/methods/set-value.md).
:::

### Uso {#usage}

~~~jsx {}
value?: string;
~~~

### Ejemplo {#example}

~~~jsx {2}
new richtext.Richtext("#root", {
    value: "<h1>some value</h1>" // establece el valor predeterminado (formato HTML)
    // otras propiedades de configuración
});
~~~

**Historial de cambios:** La propiedad fue añadida en v2.0

**Artículos relacionados:** [Configuración](guides/configuration.md)

**Ejemplo relacionado:** [RichText. Initialization](https://snippet.dhtmlx.com/t55alxiy?tag=richtext)

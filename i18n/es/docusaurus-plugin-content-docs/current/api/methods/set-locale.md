---
sidebar_label: setLocale()
title: Método setLocale
description: Puede obtener información sobre el método setLocale en la documentación de la biblioteca JavaScript RichText de DHTMLX. Consulte guías para desarrolladores y referencia de API, pruebe ejemplos de código y demostraciones en vivo, y descargue una versión de evaluación gratuita de 30 días de DHTMLX RichText.
---

# setLocale()

### Descripción {#description}

@short: Aplica una nueva configuración regional a RichText

### Uso {#usage}

~~~jsx {}
setLocale(null | locale?: object): void;
~~~

### Parámetros {#parameters}

- `null` - (opcional) restablece la configuración regional predeterminada (*inglés*)
- `locale` - (opcional) el objeto de datos de la nueva configuración regional a aplicar

:::info[Información]
Use el método `setLocale()` para aplicar una nueva configuración regional a RichText. Para restablecer RichText a la configuración regional predeterminada, llame al método `setLocale()` sin argumentos (o con un valor *null*).
:::

### Ejemplo {#example}

~~~jsx {5-6}
const editor = new richtext.Richtext("#root", {
    // propiedades de configuración
});

// aplicar la configuración regional "de" a RichText
editor.setLocale(de);
~~~

**Historial de cambios:** El método fue añadido en v2.0

**Artículos relacionados:** [Localización](guides/localization.md)

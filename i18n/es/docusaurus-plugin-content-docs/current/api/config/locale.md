---
sidebar_label: locale
title: locale Config
description: Aprenda sobre la configuración locale en la documentación de la biblioteca DHTMLX JavaScript RichText. Explore guías para desarrolladores y referencia de API, pruebe ejemplos de código y demostraciones en vivo, y descargue una versión de evaluación gratuita de 30 días de DHTMLX RichText.
---

# locale

### Descripción {#description}

@short: Opcional. Un objeto que incluye las etiquetas de localización de RichText

:::info[Información]
El objeto **locale** debe incluir todas las etiquetas de RichText con sus traducciones correspondientes.
:::

### Uso {#usage}

~~~jsx {}
locale?: object;
~~~

### Configuración predeterminada {#default-config}

De manera predeterminada, RichText utiliza la configuración regional **inglesa**. También puede establecerla en una configuración regional personalizada.

:::tip[Consejo]
Para cambiar la configuración regional actual de forma dinámica, puede utilizar el método [**setLocale()**](api/methods/set-locale.md) de RichText
:::

### Ejemplo {#example}

~~~jsx {3}
// inicializar RichText
const editor = new richtext.RichText("#root", {
    locale: richtext.locales.cn // la configuración regional china se establecerá inicialmente
    // locale: richtext.locales.en // la configuración regional inglesa se establecerá inicialmente
    // locale: richtext.locales.de // la configuración regional alemana se establecerá inicialmente
    // otras propiedades de configuración
});
~~~

**Historial de cambios:** La propiedad fue añadida en v2.0

**Artículos relacionados:** [Localización](guides/localization.md)

**Ejemplo relacionado:** [RichText. Localization](https://snippet.dhtmlx.com/zxjrin3i?tag=richtext)

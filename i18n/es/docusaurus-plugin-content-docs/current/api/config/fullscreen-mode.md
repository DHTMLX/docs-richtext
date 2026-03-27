---
sidebar_label: fullscreenMode
title: fullscreenMode Config
description: Aprenda sobre la configuración fullscreenMode en la documentación de la biblioteca DHTMLX JavaScript RichText. Explore guías para desarrolladores y referencia de API, pruebe ejemplos de código y demostraciones en vivo, y descargue una versión de evaluación gratuita de 30 días de DHTMLX RichText.
---

# fullscreenMode

### Descripción {#description}

@short: Opcional. Habilita el modo de pantalla completa de RichText

### Uso {#usage}

~~~jsx {}
fullscreenMode?: boolean;
~~~

### Configuración predeterminada {#default-config}

~~~jsx
fullscreenMode: false;
~~~

### Ejemplo {#example}

~~~jsx {3}
// inicializar RichText
new richtext.Richtext("#root", {
    fullscreenMode: true
    // otras propiedades de configuración
});
~~~

**Historial de cambios:** La propiedad fue añadida en v2.0

**Artículos relacionados:** [Configuración](guides/configuration.md)

**Ejemplo relacionado:** [RichText. Full toolbar](https://snippet.dhtmlx.com/ziynafp7?tag=richtext)

---
sidebar_label: Inicialización
title: Inicialización
description: Puede consultar información sobre la inicialización en la documentación de la biblioteca JavaScript RichText de DHTMLX. Explore guías para desarrolladores y referencia de API, pruebe ejemplos de código y demostraciones en vivo, y descargue una versión de evaluación gratuita de 30 días de DHTMLX RichText.
---

# Inicialización

Esta guía le brindará instrucciones detalladas sobre cómo crear RichText en una página para enriquecer su aplicación con las funciones del editor RichText. Siga los pasos a continuación para obtener un componente listo para usar:

1. [Incluir los archivos fuente de RichText en la página](#including-source-files).
2. [Crear un contenedor para RichText](#creating-container).
3. [Inicializar RichText con el constructor del objeto](#initializing-richtext).

## Incluir los archivos fuente {#including-source-files}

[Descargue el paquete](https://dhtmlx.com/docs/products/dhtmlxRichText/download.shtml) y descomprímalo en una carpeta de su proyecto.

Para crear RichText, debe incluir 2 archivos fuente en su página:

- *richtext.js*
- *richtext.css*

Asegúrese de establecer rutas relativas correctas hacia los archivos fuente:

~~~html title="index.html"
<script type="text/javascript" src="./codebase/richtext.js"></script>
<link rel="stylesheet" href="./codebase/richtext.css">
~~~

## Crear el contenedor {#creating-container}

Agregue un contenedor para RichText y asígnele un ID, por ejemplo *"root"*:

~~~jsx title="index.html"
<div id="root"></div>
~~~

## Inicializar RichText {#initializing-richtext}

Inicialice RichText con el constructor `richtext.Richtext`. El constructor acepta dos parámetros:

- un contenedor HTML (el ID del contenedor HTML)
- un objeto con propiedades de configuración. [Consulte la lista completa aquí](#configuration-properties)

~~~jsx title="index.html"
// crear RichText
const editor = new richtext.Richtext("#root", {
    // propiedades de configuración
});
~~~

### Propiedades de configuración {#configuration-properties}

:::note[Nota]
La lista completa de propiedades para configurar **RichText** se encuentra [**aquí**](api/overview/properties_overview.md).
:::

## Ejemplo {#example}

En este snippet puede ver cómo inicializar **RichText** con datos iniciales:

<iframe src="https://snippet.dhtmlx.com/tjryzka7?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>

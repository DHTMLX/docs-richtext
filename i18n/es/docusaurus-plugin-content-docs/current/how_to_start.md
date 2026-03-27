---
sidebar_label: Cómo empezar
title: Cómo empezar
description: Puede explorar cómo empezar a trabajar con DHTMLX RichText en la documentación de la biblioteca JavaScript RichText de DHTMLX. Explore guías para desarrolladores y referencias de API, pruebe ejemplos de código y demostraciones en vivo, y descargue una versión de evaluación gratuita de 30 días de DHTMLX RichText.
---

# Cómo empezar

Este tutorial claro y completo lo guiará a través de los pasos necesarios para tener un RichText completamente funcional en una página.

<div className="img_border">
![Modo clásico de DHTMLX RichText](./assets/richtext/classic_mode.png)
</div>

## Paso 1. Incluir los archivos fuente {#step-1-including-source-files}

Comience creando un archivo HTML y llámelo *index.html*. Luego proceda a incluir los archivos fuente de RichText en el archivo creado.

Hay dos archivos necesarios:

- el archivo JS de RichText
- el archivo CSS de RichText

~~~html {5-6} title="index.html"
<!DOCTYPE html>
<html>
    <head>
        <title>How to Start with RichText</title>
        <script src="./codebase/richtext.js"></script>
        <link href="./codebase/richtext.css" rel="stylesheet">
    </head>
    <body>
        <script>
        // su código irá aquí
        </script>
    </body>
</html>
~~~

### Instalar RichText mediante npm o yarn {#installing-richtext-via-npm-or-yarn}

Puede importar JavaScript RichText a su proyecto usando el gestor de paquetes **yarn** o **npm**.

#### Instalar la versión de prueba de RichText mediante npm o yarn {#installing-trial-richtext-via-npm-or-yarn}

:::info[Información]
Si desea usar la versión de prueba de RichText, descargue el [**paquete de prueba de RichText**](https://dhtmlx.com/docs/products/dhtmlxRichtext/download.shtml) y siga los pasos indicados en el archivo *README*. Tenga en cuenta que la versión de prueba de RichText está disponible solo por 30 días.
:::

#### Instalar la versión PRO de RichText mediante npm o yarn {#installing-pro-richtext-via-npm-or-yarn}

:::info[Información]
Puede acceder al **npm** privado de DHTMLX directamente en el [Área de clientes](https://dhtmlx.com/clients/) generando su nombre de usuario y contraseña para **npm**. Allí también encontrará una guía de instalación detallada. Tenga en cuenta que el acceso al **npm** privado solo está disponible mientras su licencia propietaria de RichText esté activa.
:::

## Paso 2. Crear RichText {#step-2-creating-richtext}

Ahora está listo para agregar RichText a la página. Primero, creemos el contenedor `<div>` para RichText. Para ello, siga estos pasos:

- especifique un contenedor DIV en el archivo *index.html*
- inicialice RichText usando el constructor `richtext.Richtext`

Como parámetros, el constructor acepta cualquier selector CSS válido del contenedor HTML donde se ubicará RichText, así como los objetos de configuración correspondientes.

~~~html {9,12-14} title="index.html"
<!DOCTYPE html>
<html>
    <head>
        <title>How to Start with RichText</title>
        <script src="./codebase/richtext.js"></script>
        <link href="./codebase/richtext.css" rel="stylesheet">
    </head>
    <body>
        <div id="root"></div>

        <script>
            const editor = new richtext.Richtext("#root", {
                // propiedades de configuración
            });
        </script>
    </body>
</html>
~~~

## Paso 3. Configurar RichText {#step-3-configuring-richtext}

A continuación, puede especificar las propiedades de configuración que desea que tenga el componente RichText al inicializarse.

Para comenzar a trabajar con RichText, primero debe proporcionar los datos iniciales para el editor mediante la propiedad [`value`](api/config/value.md). Además, puede habilitar la [**barra de menú**](api/config/menubar.md), personalizar la [**toolbar**](api/config/toolbar.md), especificar los modos de [**pantalla completa**](api/config/fullscreen-mode.md) y [**diseño**](api/config/layout-mode.md), aplicar una nueva [**configuración regional**](api/config/locale.md) y [**estilos predeterminados**](api/config/default-styles.md).

~~~jsx {2-12}
const editor = new richtext.Richtext("#root", {
    menubar: true,
    toolbar: false,
    fullscreenMode: true,
    layoutMode: "document",
    locale: richtext.locales.cn
    defaultStyles: {
        h4: {
            "font-family": "Roboto"
        },
        // otras configuraciones
    }
});
~~~

## Qué sigue {#whats-next}

Eso es todo. Con solo tres simples pasos tiene una herramienta práctica para editar contenido. Ahora puede comenzar a trabajar con su contenido o seguir explorando el mundo interior de JavaScript RichText.

---
title: Estilización
sidebar_label: Estilización
description: Puede consultar información sobre la estilización en la documentación de la biblioteca JavaScript RichText de DHTMLX. Explore guías para desarrolladores y referencia de API, pruebe ejemplos de código y demostraciones en vivo, y descargue una versión de evaluación gratuita de 30 días de DHTMLX RichText.
---

# Estilización

Puede personalizar completamente la apariencia de DHTMLX RichText sobreescribiendo variables CSS y aplicando estilos personalizados a partes específicas del widget.

Esta guía muestra cómo aplicar un **tema oscuro** y usar los nombres de clase disponibles para estilizar el menubar, el toolbar, los popups y el área de contenido del editor.

## Estructura predeterminada y nombres de clase {#default-structure-and-class-names}

RichText usa las siguientes clases principales para estructurar su interfaz:

| Nombre de clase        | Descripción                                         |
|------------------------|-----------------------------------------------------|
| `.wx-richtext`         | Contenedor raíz del widget RichText                 |
| `.wx-richtext-menubar` | Contenedor del menubar                              |
| `.wx-richtext-menu`    | Contenedor del menú desplegable del menubar         |
| `.wx-richtext-toolbar` | Contenedor del toolbar                              |
| `.wx-editor-area`      | Contenedor del área de contenido editable principal |

Puede usar estas clases en sus selectores CSS personalizados para sobreescribir la apariencia del editor RichText.

## Sobreescribir los estilos predeterminados {#overriding-default-styles}

Puede sobreescribir los estilos predeterminados de RichText redefiniendo las variables CSS en el contenedor `#root` o en sub-elementos específicos:

```html
<div id="root" style="width: 100%; height: 100%;"></div>

<style>
  #root,
  .wx-richtext-menu {
    --wx-background: #404151;
    --wx-background-alt: #212329;
    --wx-color-primary: #14B195;
    --wx-color-font: #FFFFFF;
    --wx-border: 1px solid #6B6C79;
    --wx-color-secondary-hover: rgba(20, 177, 149, 0.12);
    --wx-button-active: rgba(20, 177, 149, 0.22);
    --wx-icon-color: var(--wx-color-font);
    --wx-color-font-alt: #9FA1AE;
    --wx-color-font-disabled: #9FA1AE;
    --wx-popup-border: var(--wx-border);

    color-scheme: dark;
  }

  .wx-richtext-menu {
    border: var(--wx-border);
  }
</style>
```

:::note[Nota]
Estos estilos aplicarán un fondo oscuro, ajustarán los colores de los botones e íconos, y mejorarán la visibilidad para temas de interfaz oscuros.
:::

## Lista de variables CSS admitidas {#list-of-supported-css-variables}

| Nombre de variable           | Descripción                                                                                    |
| ---------------------------- | ---------------------------------------------------------------------------------------------- |
| `--wx-background`            | Color de fondo del editor y del popup                                                          |
| `--wx-background-alt`        | Fondo alternativo para el menubar                                                              |
| `--wx-color-primary`         | Color de acento para enlaces, citas en bloque y bordes de imágenes en redimensionamiento       |
| `--wx-color-font`            | Color de fuente principal (para el editor, el menubar y el toolbar)                            |
| `--wx-color-font-alt`        | Color de fuente alternativo                                                                    |
| `--wx-color-font-disabled`   | Color del texto deshabilitado (para elementos del menubar y el toolbar)                        |
| `--wx-border`                | Estilo de borde usado en todo el editor                                                        |
| `--wx-color-secondary-hover` | Fondo del estado hover para botones dentro del menubar y el toolbar                            |
| `--wx-button-active`         | Fondo del estado activo para botones dentro del menubar y el toolbar                           |
| `--wx-icon-color`            | Color para los íconos de flecha del toolbar usados en los menús desplegables                   |
| `--wx-popup-border`          | Borde para los elementos popup                                                                 |

## Buenas prácticas {#best-practices}

* Use `color-scheme: dark` para mejorar el estilo de los inputs nativos en modo oscuro
* Evite cambiar propiedades relacionadas con el layout (como `display`, `position`) a menos que sea necesario

## Demo en vivo {#live-demo}

En este snippet puede ver cómo aplicar un estilo personalizado a RichText:

<iframe src="https://snippet.dhtmlx.com/q8j4qqq9?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

**Artículos relacionados:** [Customization](guides/configuration.md)

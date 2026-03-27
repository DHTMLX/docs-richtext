---
sidebar_label: toolbar
title: toolbar Config
description: Aprenda sobre la configuración toolbar en la documentación de la biblioteca DHTMLX JavaScript RichText. Explore guías para desarrolladores y referencia de API, pruebe ejemplos de código y demostraciones en vivo, y descargue una versión de evaluación gratuita de 30 días de DHTMLX RichText.
---

# toolbar

### Descripción {#description}

@short: Opcional. Habilita el toolbar y permite a los usuarios especificar/configurar los botones que se muestran en él

### Uso {#usage}

~~~jsx {}
toolbar?: boolean | Array<string | { id: string, type: string, label?: string, tooltip?: string, css?: string, handler?: () => any }>;
~~~

#### Botones disponibles en el Toolbar {#available-buttons-within-toolbar}

Puede especificar los siguientes botones en el toolbar de RichText:

| Botón               | Descripción                                                                      |
|---------------------|----------------------------------------------------------------------------------|
| `undo`              | Revierte la acción más reciente del usuario.                                     |
| `redo`              | Vuelve a aplicar la acción deshecha anteriormente.                               |
| `style`             | Permite seleccionar estilos de texto (p. ej., encabezados, párrafo, etc.).       |
| `font-family`       | Cambia la fuente del texto seleccionado.                                         |
| `font-size`         | Ajusta el tamaño del texto seleccionado.                                         |
| `bold`              | Aplica formato negrita al texto seleccionado.                                    |
| `italic`            | Aplica formato cursiva al texto seleccionado.                                    |
| `underline`         | Subraya el texto seleccionado.                                                   |
| `strike`            | Aplica formato de tachado.                                                       |
| `subscript`         | Formatea el texto como subíndice.                                                |
| `superscript`       | Formatea el texto como superíndice.                                              |
| `text-color`        | Cambia el color del texto.                                                       |
| `background-color`  | Cambia el color de fondo (resaltado) del texto.                                  |
| `align`             | Establece la alineación del texto (izquierda, centro, derecha, justificado).     |
| `indent`            | Aumenta la sangría del bloque de texto.                                          |
| `outdent`           | Reduce la sangría del párrafo.                                                   |
| `line-height`       | Ajusta el interlineado (altura de línea).                                        |
| `quote`             | Formatea el texto como cita en bloque.                                           |
| `bulleted-list`     | Crea una lista con viñetas.                                                      |
| `numbered-list`     | Crea una lista numerada.                                                         |
| `link`              | Inserta un hipervínculo.                                                         |
| `image`             | Inserta una imagen.                                                              |
| `line`              | Inserta una línea horizontal.                                                    |
| `clear`             | Elimina todo el formato del texto seleccionado.                                  |
| `print`             | Abre el cuadro de diálogo de impresión.                                          |
| `fullscreen`        | Activa o desactiva el modo de pantalla completa.                                 |
| `mode`              | Cambia entre [modos de diseño](api/config/layout-mode.md) (classic/document)    |
| `shortcuts`         | Muestra una lista de atajos de teclado disponibles.                              |
| `separator`         | Añade un separador visual entre grupos del toolbar.                              |

Puede usar estas cadenas para configurar los botones del toolbar de la siguiente manera:

~~~jsx {2-7}
new richtext.Richtext("#root", {
    toolbar: [
        "bold",
        "italic",
        "separator",
        // otros botones
    ],
    // otras propiedades de configuración
});
~~~

#### Botones personalizados en el Toolbar {#custom-buttons-within-toolbar}

Puede especificar botones personalizados como objetos con los siguientes parámetros:

- `type` - (requerido) especifica el tipo de control personalizado. Los tipos disponibles son: `"button"`, `"richselect"`, `"colorpicker"`
- `id` - (opcional) un ID de control personalizado (no puede coincidir con un ID de control existente)
- `label` - (opcional) una etiqueta del botón (se combina con el icono)
- `tooltip` - (opcional) un tooltip que se muestra al pasar el cursor (si no se especifica, usa el valor de "label")
- `css` - (opcional) un nombre de clase CSS asignado al control (clases compatibles por defecto: wx-primary, wx-secondary)
- `handler` - (opcional) una función callback que se ejecuta al hacer clic en el botón

~~~jsx {6-32}
new richtext.Richtext("#root", {
    toolbar: [
        // botones (las cadenas representan solo botones)
        "bold",
        "italic",
        // botones predefinidos (el usuario no puede definir otras opciones para estos (sin etiquetas, tooltips, opciones, etc.), solo ({ type: "button", id: string })
        {
            type: "button",
            id: "fullscreen",
        },
        // el usuario debe especificar el tipo correcto si desea usar un control predefinido (p. ej. richselect/colorpicker)
        // los tipos que no coincidan se ignorarán (no se añadirán al toolbar)
        {
            type: "richselect", // type: "button" - incorrecto, se ignorará
            id: "mode",
        },
        // botones personalizados (las opciones compatibles se detallan a continuación)
        // el usuario solo puede definir botones personalizados (sin soporte de richselect/colorpicker por ahora)
        {
            type: "button",
            id: "some",
            label: "Some",
            handler: () => {/* lógica personalizada */}
        },
        {
            type: "button",
            id: "other",
            icon: "wxo-help",
            label: "Other",
            tooltip: "Some tooltip",
            handler: () => {/* lógica personalizada */}
        }
    ],
    // otras propiedades de configuración
});
~~~

#### Ocultar el Toolbar {#hide-toolbar}

Si necesita ocultar el toolbar, establezca la propiedad `toolbar` en `false` de la siguiente manera:

~~~jsx {2}
new richtext.Richtext("#root", {
    toolbar: false
    // otras propiedades de configuración
});
~~~

### Configuración predeterminada {#default-config}

~~~jsx
const defaultToolbarButtons = {
    "undo",
    "redo",
    "separator",
    "style",
    "separator",
    "font-family",
    "font-size",
    "separator",
    "bold",
    "italic",
    "underline",
    "strike",
    "separator",
    "text-color",
    "background-color",
    "separator",
    "align",
    "line-height",
    "outdent",
    "indent",
    "separator",
    "bulleted-list",
    "numbered-list",
    "quote",
    "separator",
    "link",
    "image",
    "separator",
    "clear",
    "separator",
    "fullscreen",
    "mode"
};
~~~

:::tip[Consejo]
Los controles predeterminados del toolbar son exportados por el widget RichText y se pueden acceder mediante `richtext.defaultToolbarButtons`.

```jsx{4}
// inicializar RichText
new richtext.Richtext("#root", {
    toolbar: [
        ...richtext.defaultToolbarButtons,
        {
            type: "button",
            id: "btn1", // id del botón (no puede coincidir con ids de botones existentes si desea aplicar lógica personalizada)
            icon: "wxo-help", // icono del botón (se combina con la etiqueta)
            css: "rounded", // nombre de clase CSS asignado al control (clases compatibles por defecto: wx-primary, wx-secondary)
            label: "Custom button", // etiqueta del botón (se combina con el icono)
            tooltip: "Some tooltip", // tooltip que se muestra al pasar el cursor (si no se especifica, usa el valor de "label")
        }
    ]
    // otras propiedades de configuración
});
```
:::

### Ejemplo {#example}

~~~jsx {3-18}
// inicializar RichText
new richtext.Richtext("#root", {
    toolbar: [
        "bold",
        "italic",
        "separator",
        // botones personalizados (todas las opciones compatibles se usan a continuación)
        // el usuario solo puede definir botones personalizados (sin soporte de richselect/colorpicker en este momento)
        {
            type: "button",
            id: "btn1", // id del botón (no puede coincidir con ids de botones existentes si desea aplicar lógica personalizada)
            icon: "wxo-help", // icono del botón (se combina con la etiqueta)
            css: "rounded", // nombre de clase CSS asignado al control (clases compatibles por defecto: wx-primary, wx-secondary)
            label: "Custom button", // etiqueta del botón (se combina con el icono)
            tooltip: "Some tooltip", // tooltip que se muestra al pasar el cursor (si no se especifica, usa el valor de "label")
            handler: () => ..., // lógica personalizada asociada a este botón
        }
    ]
    // otras propiedades de configuración
});
~~~

**Historial de cambios:** La propiedad fue añadida en v2.0

**Artículos relacionados:** [Configuración](guides/configuration.md)

**Ejemplo relacionado:** [RichText. Custom control and simplified toolbar](https://snippet.dhtmlx.com/wda202ih?tag=richtext)

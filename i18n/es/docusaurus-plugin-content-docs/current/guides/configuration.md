---
sidebar_label: Configuración
title: Configuración
description: Puede consultar información sobre la configuración en la documentación de la biblioteca JavaScript RichText de DHTMLX. Explore guías para desarrolladores y referencia de API, pruebe ejemplos de código y demostraciones en vivo, y descargue una versión de evaluación gratuita de 30 días de DHTMLX RichText.
---

# Configuración

Puede configurar la apariencia y la funcionalidad de RichText mediante la API correspondiente. Los parámetros disponibles le permiten:

- Mostrar/ocultar el **menubar** usando la propiedad [`menubar`](api/config/menubar.md)
- Configurar el **toolbar** usando la propiedad [`toolbar`](api/config/toolbar.md)
- Habilitar el **modo de pantalla completa** usando la propiedad [`fullscreenMode`](api/config/fullscreen-mode.md)
- Alternar el **layout** entre los modos "classic" y "document" usando la propiedad [`layoutMode`](api/config/layout-mode.md)
- Especificar el **valor inicial** usando la propiedad [`value`](api/config/value.md)
- Especificar el **locale inicial** usando la propiedad [`locale`](api/config/locale.md)
- Aplicar **estilos iniciales** usando la propiedad [`defaultStyles`](api/config/default-styles.md)

## Modos de layout {#layout-modes}

Existen dos modos de layout del editor RichText entre los que puede elegir para obtener el mejor espacio de trabajo al crear su contenido:

- **"classic"**

<div className="img_border">
![Modo Classic](./../assets/richtext/classic_mode.png)
</div>

- **"document"**

<div className="img_border">
![Modo Document](./../assets/richtext/document_mode.png)
</div>

Para especificar el modo deseado, debe definirlo en la propiedad [`layoutMode`](api/config/layout-mode.md) del objeto de configuración de RichText durante la inicialización del componente:

~~~jsx
const editor = new richtext.Richtext("#root", {
    layoutMode: "document"
});
~~~

## Toolbar {#toolbar}

El toolbar de RichText consta de varios bloques de controles que pueden modificarse según sus necesidades.

### Controles predeterminados del toolbar {#default-toolbar-controls}

Puede especificar los siguientes botones y controles en el toolbar de RichText:

| Botón               | Descripción                                                                 |
|---------------------|-----------------------------------------------------------------------------|
| `undo`              | Revierte la acción más reciente del usuario                                 |
| `redo`              | Vuelve a aplicar la acción deshecha anteriormente                           |
| `style`             | Permite seleccionar estilos de texto (por ejemplo, encabezados, párrafo, etc.) |
| `font-family`       | Cambia la fuente del texto seleccionado                                     |
| `font-size`         | Ajusta el tamaño del texto seleccionado                                     |
| `bold`              | Aplica formato en negrita al texto seleccionado                             |
| `italic`            | Aplica formato en cursiva al texto seleccionado                             |
| `underline`         | Subraya el texto seleccionado                                               |
| `strike`            | Aplica formato de tachado                                                   |
| `subscript`         | Formatea el texto como subíndice                                            |
| `superscript`       | Formatea el texto como superíndice                                          |
| `text-color`        | Cambia el color del texto                                                   |
| `background-color`  | Cambia el color de fondo (resaltado) del texto                              |
| `align`             | Establece la alineación del texto (izquierda, centro, derecha, justificado) |
| `indent`            | Aumenta la sangría del párrafo                                              |
| `outdent`           | Reduce la sangría del párrafo                                               |
| `line-height`       | Ajusta el interlineado (altura de línea)                                    |
| `quote`             | Formatea el texto como cita en bloque                                       |
| `bulleted-list`     | Crea una lista con viñetas                                                  |
| `numbered-list`     | Crea una lista numerada                                                     |
| `link`              | Inserta o edita un hipervínculo                                             |
| `image`             | Inserta una imagen                                                          |
| `line`              | Inserta una línea horizontal                                                |
| `clear`             | Elimina todo el formato del texto seleccionado                              |
| `print`             | Abre el cuadro de diálogo de impresión                                      |
| `fullscreen`        | Activa o desactiva el modo de pantalla completa                             |
| `mode`              | Alterna entre 2 modos de vista: Classic/Document                            |
| `shortcuts`         | Muestra una lista de los atajos de teclado disponibles                      |
| `separator`         | Agrega un separador visual entre los controles                              |

La estructura del toolbar se define mediante la propiedad [`toolbar`](api/config/toolbar.md), que es un array con cadenas que representan los nombres de los controles.

~~~jsx {2-36}
new richtext.Richtext("#root", {
    toolbar: [
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
        // otros botones
    ],
    // otras propiedades de configuración
});
~~~

**Ejemplo relacionado:** [RichText. Custom control and simplified toolbar](https://snippet.dhtmlx.com/wda202ih?tag=richtext)

### Controles personalizados del toolbar {#custom-toolbar-controls}

También puede especificar controles personalizados como objetos en la propiedad [`toolbar`](api/config/toolbar.md) con los siguientes parámetros:

- `type` - (requerido) especifica el tipo de control personalizado. Los tipos disponibles son: `"button"`, `"richselect"`, `"colorpicker"`
- `id` - (opcional) un ID de control personalizado (no puede coincidir con un ID de control existente)
- `label` - (opcional) una etiqueta para el botón (se combina con el ícono)
- `tooltip` - (opcional) un tooltip que se muestra al pasar el cursor (si no se especifica, usa el valor de "label")
- `css` - (opcional) un nombre de clase CSS asignado al control (clases admitidas por defecto: wx-primary, wx-secondary)
- `handler` - (opcional) una función de callback que se ejecuta cuando se hace clic en el botón

~~~jsx {6-32}
new richtext.Richtext("#root", {
    toolbar: [
        // botones (las cadenas representan solo botones)
        "bold",
        "italic",
        // botones predefinidos (el usuario no puede definir otras opciones para estos (sin etiquetas, tooltips, opciones, etc.), por lo que solo ({ type: "button", id: string })
        {
            type: "button",
            id: "fullscreen",
        },
        // el usuario debe especificar el tipo correcto si desea usar un control predefinido (por ejemplo, richselect/colorpicker)
        // los tipos que no coincidan serán ignorados (no se agregarán al toolbar)
        {
            type: "richselect", // type: "button" - incorrecto, será ignorado
            id: "mode",
        },
        // botones personalizados (las opciones admitidas se muestran a continuación)
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

**Ejemplo relacionado:** [RichText. Custom control and simplified toolbar](https://snippet.dhtmlx.com/wda202ih?tag=richtext)

### Ocultar el toolbar {#hide-toolbar}

Si necesita ocultar el toolbar, establezca la propiedad [`toolbar`](api/config/toolbar.md) en `false` de la siguiente manera:

~~~jsx {2}
new richtext.Richtext("#root", {
    toolbar: false,
    // otras propiedades de configuración
});
~~~

## Estilos predeterminados {#default-styles}

Puede aplicar valores de estilo predeterminados para tipos de bloque específicos en el editor usando la propiedad [`defaultStyles`](api/config/default-styles.md).

~~~jsx {}
defaultStyles?: boolean | {
    "*"?: { // afecta a todos los bloques, permitiéndole establecer propiedades comunes para todos ellos
        "font-family"?: string; // "Roboto"| "Arial" | "Georgia" | "Tahoma" | "Times New Roman" | "Verdana"
        "font-size"?: string; // "12px" | "14px" | "16px" | "18px" | "20px" | "24px" | "28px" | "32px" | "36px"
        color?: string;
        background?: string;
    },
    p?: {
        "font-family"?: string; // "Roboto"| "Arial" | "Georgia" | "Tahoma" | "Times New Roman" | "Verdana"
        "font-size"?: string; // "12px" | "14px" | "16px" | "18px" | "20px" | "24px" | "28px" | "32px" | "36px"
        color?: string;
        background?: string;
    },
    blockquote?: {
        "font-family"?: string; // "Roboto"| "Arial" | "Georgia" | "Tahoma" | "Times New Roman" | "Verdana"
        "font-size"?: string; // "12px" | "14px" | "16px" | "18px" | "20px" | "24px" | "28px" | "32px" | "36px"
        color?: string;
        background?: string;
    },
    h1?: {
        "font-family"?: string; // "Roboto"| "Arial" | "Georgia" | "Tahoma" | "Times New Roman" | "Verdana"
        "font-size"?: string; // "12px" | "14px" | "16px" | "18px" | "20px" | "24px" | "28px" | "32px" | "36px"
        color?: string;
        background?: string;
    },
    h2?: {
        "font-family"?: string; // "Roboto"| "Arial" | "Georgia" | "Tahoma" | "Times New Roman" | "Verdana"
        "font-size"?: string; // "12px" | "14px" | "16px" | "18px" | "20px" | "24px" | "28px" | "32px" | "36px"
        color?: string;
        background?: string;
    },
    h3?: {
        "font-family"?: string; // "Roboto"| "Arial" | "Georgia" | "Tahoma" | "Times New Roman" | "Verdana"
        "font-size"?: string; // "12px" | "14px" | "16px" | "18px" | "20px" | "24px" | "28px" | "32px" | "36px"
        color?: string;
        background?: string;
    },
    h4?: {
        "font-family"?: string; // "Roboto"| "Arial" | "Georgia" | "Tahoma" | "Times New Roman" | "Verdana"
        "font-size"?: string; // "12px" | "14px" | "16px" | "18px" | "20px" | "24px" | "28px" | "32px" | "36px"
        color?: string;
        background?: string;
    },
    h5?: {
        "font-family"?: string; // "Roboto"| "Arial" | "Georgia" | "Tahoma" | "Times New Roman" | "Verdana"
        "font-size"?: string; // "12px" | "14px" | "16px" | "18px" | "20px" | "24px" | "28px" | "32px" | "36px"
        color?: string;
        background?: string;
    },
    h6?: {
        "font-family"?: string; // "Roboto"| "Arial" | "Georgia" | "Tahoma" | "Times New Roman" | "Verdana"
        "font-size"?: string; // "12px" | "14px" | "16px" | "18px" | "20px" | "24px" | "28px" | "32px" | "36px"
        color?: string;
        background?: string;
    }
};
~~~

La propiedad `defaultStyles` NO establece el CSS real en los bloques afectados. Los estilos CSS deben aplicarse por separado:

```html title="index.html"
<div id="root"></div>
```

```jsx {2-9} title="index.js"
const editor = new richtext.Richtext("#root", {
    defaultStyles: {
        h2: {
            "font-family": "Roboto",
            "font-size": "28px",
            color: "purple",
            background: "#FFC0CB"
        }
    }
});
```

```css title="index.css"
#root h2 {
    font-family: Roboto;
    font-size: 28px;
    color: purple;
    background: #FFC0CB;
}
```

En este ejemplo, a todos los bloques `h2` se les asigna la familia de fuente `"Roboto"` con un tamaño de fuente de 28px y también se cambian los colores de primer plano y de fondo. Los estilos CSS también se aplican a los bloques `h2`.

**Ejemplo relacionado:** [RichText. Changing the default value for typography (font, font size, etc.)](https://snippet.dhtmlx.com/6u3ti01s?tag=richtext)

---
sidebar_label: getValue()
title: Método getValue
description: Puede obtener información sobre el método getValue en la documentación de la biblioteca JavaScript RichText de DHTMLX. Consulte guías para desarrolladores y referencia de API, pruebe ejemplos de código y demostraciones en vivo, y descargue una versión de evaluación gratuita de 30 días de DHTMLX RichText.
---

# getValue()

### Descripción {#description}

@short: Devuelve el valor de RichText

### Uso {#usage}

~~~jsx {}
getValue(encoder?: any): string;
~~~

### Parámetros {#parameters}

- `encoder` - (opcional) un analizador usado para codificar el contenido de RichText en un formato personalizado. Los siguientes formatos están disponibles: `html` (predeterminado) y `text`

Puede obtener el encoder requerido de la siguiente manera:

```jsx
const toTextEncoder = richtext.text.toText; // encoder de texto
const toHTMLEncoder = richtext.html.toHTML; // encoder html
```

### Ejemplo {#example}

~~~jsx {6-8}
const editor = new richtext.Richtext("#root", {
    value: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos." // establece el valor predeterminado (formato HTML)
    // otras propiedades de configuración
});

const toTextEncoder = richtext.text.toText;
const editor_value = editor.getValue(toTextEncoder);
console.log(editor_value);
~~~

**Historial de cambios:** El método fue actualizado en v2.0. El parámetro `mode` fue eliminado. El parámetro `encoder` fue añadido

---
sidebar_label: setValue()
title: Método setValue
description: Puede obtener información sobre el método setValue en la documentación de la biblioteca JavaScript RichText de DHTMLX. Consulte guías para desarrolladores y referencia de API, pruebe ejemplos de código y demostraciones en vivo, y descargue una versión de evaluación gratuita de 30 días de DHTMLX RichText.
---

# setValue()

### Descripción {#description}

@short: Aplica un nuevo valor a RichText

### Uso {#usage}

~~~jsx {}
setValue: (value: string, encoder?: any): void;
~~~

### Parámetros {#parameters}

- `value` - (obligatorio) un valor a insertar en RichText
- `encoder` - (opcional) un analizador personalizado usado para codificar el contenido de RichText en un formato personalizado. Los siguientes formatos están disponibles: `html` (predeterminado) y `text`

Puede obtener el encoder requerido de la siguiente manera:

```jsx
const fromTextEncoder = richtext.text.fromText; // encoder de texto
const fromHTMLEncoder = richtext.html.fromHTML; // encoder html
```

### Ejemplo {#example}

~~~jsx {7-8}
const editor = new richtext.Richtext("#root", {
    // propiedades de configuración
});

const editor_value = "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos."

const fromTextEncoder = richtext.text.fromText;
editor.setValue(editor_value, fromTextEncoder);
~~~

**Historial de cambios:** El método fue actualizado en v2.0. El parámetro `mode` fue eliminado. El parámetro `encoder` fue añadido

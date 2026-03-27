---
sidebar_label: api.getState()
title: Método getState
description: Puede obtener información sobre el método getState en la documentación de la biblioteca JavaScript RichText de DHTMLX. Consulte guías para desarrolladores y referencia de API, pruebe ejemplos de código y demostraciones en vivo, y descargue una versión de evaluación gratuita de 30 días de DHTMLX RichText.
---

# api.getState()

### Descripción {#description}

@short: Devuelve un objeto con las propiedades del StateStore de RichText

### Uso {#usage}

~~~jsx {}
api.getState(): object;
~~~

### Valor de retorno {#returns}

El método devuelve un objeto con los siguientes parámetros:

~~~jsx {}
{
    cursorState: {},
    defaultStyles: {},
    document: {},
    fullscreen: boolean,
    history: []
    layoutMode: string,
    popup: any,
    selection: {}
}
~~~

### Ejemplo {#example}

~~~jsx {5-7}
// inicializar RichText
const editor = new richtext.Richtext("#root", {
    // propiedades de configuración
});
// obtener el estado de RichText
const state = editor.api.getState();
console.log(state);
~~~

**Historial de cambios:** El método fue añadido en v2.0

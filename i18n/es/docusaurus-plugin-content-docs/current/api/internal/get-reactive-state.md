---
sidebar_label: api.getReactiveState()
title: Método getReactiveState
description: Puede obtener información sobre el método getReactiveState en la documentación de la biblioteca JavaScript RichText de DHTMLX. Consulte guías para desarrolladores y referencia de API, pruebe ejemplos de código y demostraciones en vivo, y descargue una versión de evaluación gratuita de 30 días de DHTMLX RichText.
---

# api.getReactiveState()

### Descripción {#description}

@short: Devuelve un objeto con las propiedades reactivas de RichText

### Uso {#usage}

~~~jsx {}
api.getReactiveState(): object;
~~~

### Valor de retorno {#returns}

El método devuelve un objeto con los siguientes parámetros:

~~~jsx {}
{
    cursorState: { subscribe: any },
    defaultStyles {...},
    document {...},
    fullscreen {...},
    history {...},
    layoutMode {...},
    popup {...},
    selection {...}
}
~~~

### Ejemplo {#example}

~~~jsx {5-7}
// inicializar RichText
const editor = new richtext.Richtext("#root", {
    // propiedades de configuración
});
// obtener el estado reactivo de RichText
const reactive_state = editor.api.getReactiveState();
console.log(reactive_state)
~~~

**Historial de cambios:** El método fue añadido en v2.0

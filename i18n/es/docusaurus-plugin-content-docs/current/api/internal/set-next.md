---
sidebar_label: api.setNext()
title: Método setNext
description: Puede obtener información sobre el método setNext en la documentación de la biblioteca JavaScript RichText de DHTMLX. Consulte guías para desarrolladores y referencia de API, pruebe ejemplos de código y demostraciones en vivo, y descargue una versión de evaluación gratuita de 30 días de DHTMLX RichText.
---

# api.setNext()

### Descripción {#description}

@short: Permite añadir una acción en el orden del Event Bus

### Uso {#usage}

~~~jsx {}
api.setNext(next: any): void;
~~~

### Parámetros {#parameters}

- `next` - (obligatorio) la acción a incluir en el orden del **Event Bus**

### Ejemplo {#example}

~~~jsx {10-11}
const server = "https://some-backend-url";
// Asuma que tiene una clase de servicio de servidor personalizada llamada someServerService
const someServerService = new ServerDataService(server);

fetch(server + "/data").then((res) => res.json()).then((data) => {
    const editor = new richtext.Richtext("#root", {
        value: data
    });

    // Integrar someServerService en el orden del Event Bus del widget
    editor.api.setNext(someServerService);
});
~~~

**Historial de cambios:** El método fue añadido en v2.0

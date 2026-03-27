---
sidebar_label: api.intercept()
title: Método intercept
description: Puede obtener información sobre el método intercept en la documentación de la biblioteca JavaScript RichText de DHTMLX. Consulte guías para desarrolladores y referencia de API, pruebe ejemplos de código y demostraciones en vivo, y descargue una versión de evaluación gratuita de 30 días de DHTMLX RichText.
---

# api.intercept()

### Descripción {#description}

@short: Permite interceptar y prevenir los eventos internos

### Uso {#usage}

~~~jsx {}
api.intercept(
    event: string,
    callback: function
): void;
~~~

### Parámetros {#parameters}

- `event` - (obligatorio) un evento a disparar
- `callback` - (obligatorio) un callback a ejecutar (los argumentos del callback dependerán del evento a disparar)

### Eventos {#events}

:::info[Información]
La lista completa de eventos internos de RichText se puede encontrar [**aquí**](api/overview/events_overview.md)
:::

### Ejemplo {#example}

~~~jsx {5-10}
// crear RichText
const editor = new richtext.Richtext("#root", {
    // propiedades de configuración
});
// prohibir el cambio del tamaño de fuente
editor.api.intercept("set-font-size", (obj) => {
    if(obj.fontSize !== "36px" ){
        return false;
    }
});
~~~

**Historial de cambios:** El método fue añadido en v2.0

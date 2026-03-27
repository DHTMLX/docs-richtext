---
sidebar_label: api.on()
title: Método on
description: Puede obtener información sobre el método on en la documentación de la biblioteca JavaScript RichText de DHTMLX. Consulte guías para desarrolladores y referencia de API, pruebe ejemplos de código y demostraciones en vivo, y descargue una versión de evaluación gratuita de 30 días de DHTMLX RichText.
---

# api.on()

### Descripción {#description}

@short: Permite adjuntar un manejador a los eventos internos

### Uso {#usage}

~~~jsx {}
api.on(
    event: string,
    handler: function
): void;
~~~

### Parámetros {#parameters}

- `event` - (obligatorio) un evento a disparar
- `handler` - (obligatorio) un manejador a adjuntar (los argumentos del manejador dependerán del evento a disparar)

### Eventos {#events}

:::info[Información]
La lista completa de eventos internos de RichText se puede encontrar [**aquí**](api/overview/events_overview.md)
:::

### Ejemplo {#example}

~~~jsx {5-8}
// inicializar RichText
const editor = new richtext.Richtext("#root", {
    // propiedades de configuración
});
// suscribirse al evento "set-font-size"
editor.api.on("set-font-size", (obj) => {
    console.log(obj.fontSize);
});
~~~

**Historial de cambios:** El método fue actualizado en v2.0. El parámetro `context` fue eliminado

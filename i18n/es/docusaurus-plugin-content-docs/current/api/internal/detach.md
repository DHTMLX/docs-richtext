---
sidebar_label: api.detach()
title: Método detach
description: Puede obtener información sobre el método detach en la documentación de la biblioteca JavaScript RichText de DHTMLX. Consulte guías para desarrolladores y referencia de API, pruebe ejemplos de código y demostraciones en vivo, y descargue una versión de evaluación gratuita de 30 días de DHTMLX RichText.
---

# api.detach()

### Descripción {#description}

@short: Permite eliminar/desconectar manejadores de eventos

### Uso {#usage}

~~~jsx {}
api.detach( tag: string ): void;
~~~

### Parámetros {#parameters}

- `tag` - (obligatorio) el nombre de la etiqueta de acción

### Eventos {#events}

:::info[Información]
La lista completa de eventos internos de RichText se puede encontrar [**aquí**](api/overview/events_overview.md)
:::

### Ejemplo {#example}

~~~jsx {6-8,10}
// inicializar RichText
const editor = new richtext.Richtext("#root", {
    // propiedades de configuración
});

editor.api.on("set-font-size", (obj) => {
    console.log(obj.fontSize);
}, { tag: "track" });

editor.api.detach("track");
~~~

**Historial de cambios:** El método fue actualizado en v2.0. Los parámetros `name` y `context` fueron eliminados

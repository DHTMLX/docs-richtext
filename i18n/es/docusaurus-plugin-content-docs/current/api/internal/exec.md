---
sidebar_label: api.exec()
title: Método exec
description: Puede obtener información sobre el método exec en la documentación de la biblioteca JavaScript RichText de DHTMLX. Consulte guías para desarrolladores y referencia de API, pruebe ejemplos de código y demostraciones en vivo, y descargue una versión de evaluación gratuita de 30 días de DHTMLX RichText.
---

# api.exec()

### Descripción {#description}

@short: Permite disparar eventos internos

### Uso {#usage}

~~~jsx {}
api.exec(
    event: string,
    config: object
): void;
~~~

### Parámetros {#parameters}

- `event` - (obligatorio) un evento a disparar
- `config` - (obligatorio) el objeto de configuración con parámetros (véase el evento a disparar)

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
// establecer el tamaño de fuente del texto
editor.api.exec("set-font-size", {
    fontSize: "16px"
});
~~~

**Historial de cambios:** El método fue añadido en v2.0

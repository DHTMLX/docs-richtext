---
sidebar_label: destructor()
title: Método destructor
description: Puede obtener información sobre el método destructor en la documentación de la biblioteca JavaScript RichText de DHTMLX. Consulte guías para desarrolladores y referencia de API, pruebe ejemplos de código y demostraciones en vivo, y descargue una versión de evaluación gratuita de 30 días de DHTMLX RichText.
---

# destructor()

### Descripción {#description}

@short: Elimina todos los elementos HTML de RichText y desconecta todos los eventos relacionados

### Uso {#usage}

~~~jsx {}
destructor(): void;
~~~

### Ejemplo {#example}

~~~jsx {5-6}
const editor = new richtext.Richtext("#root", {
    // propiedades de configuración
});

// eliminar RichText
editor.destructor();
~~~

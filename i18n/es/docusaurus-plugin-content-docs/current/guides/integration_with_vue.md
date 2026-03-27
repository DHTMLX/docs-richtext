---
sidebar_label: Integración con Vue
title: Integración con Vue
description: Puede consultar información sobre la integración con Vue en la documentación de la biblioteca JavaScript RichText de DHTMLX. Explore guías para desarrolladores y referencia de API, pruebe ejemplos de código y demostraciones en vivo, y descargue una versión de evaluación gratuita de 30 días de DHTMLX RichText.
---

# Integración con Vue

:::tip[Consejo]
Debe estar familiarizado con los conceptos básicos y los patrones de [**Vue**](https://vuejs.org/) antes de leer esta documentación. Para refrescar sus conocimientos, consulte la [**documentación de Vue 3**](https://vuejs.org/guide/introduction.html#getting-started).
:::

DHTMLX RichText es compatible con **Vue**. Hemos preparado ejemplos de código sobre cómo usar DHTMLX RichText con **Vue 3**. Para más información, consulte el correspondiente [**ejemplo en GitHub**](https://github.com/DHTMLX/vue-richtext-demo).

## Crear un proyecto {#creating-a-project}

:::info[Información]
Antes de comenzar a crear un nuevo proyecto, instale [**Node.js**](https://nodejs.org/en/).
:::

Para crear un proyecto **Vue**, ejecute el siguiente comando:

~~~json
npm create vue@latest
~~~

Este comando instala y ejecuta `create-vue`, la herramienta oficial de scaffolding de proyectos **Vue**. Consulte los detalles en [Vue.js Quick Start](https://vuejs.org/guide/quick-start.html#creating-a-vue-application).

Nombremos el proyecto **my-vue-richtext-app**.

### Instalación de dependencias {#installation-of-dependencies}

Vaya a la carpeta de la aplicación:

~~~json
cd my-vue-richtext-app
~~~

Instale las dependencias e inicie el dev server. Para ello, use un gestor de paquetes:

- si usa [**yarn**](https://yarnpkg.com/), ejecute los siguientes comandos:

~~~jsx
yarn
yarn start // o yarn dev
~~~

- si usa [**npm**](https://www.npmjs.com/), ejecute los siguientes comandos:

~~~json
npm install
npm run dev
~~~

La aplicación debería ejecutarse en localhost (por ejemplo, `http://localhost:3000`).

## Crear RichText {#creating-richtext}

Ahora debe obtener el código fuente de DHTMLX RichText. En primer lugar, detenga la aplicación y proceda con la instalación del paquete RichText.

### Paso 1. Instalación del paquete {#step-1-package-installation}

Descargue el [**paquete de prueba de RichText**](/how_to_start/#installing-richtext-via-npm-or-yarn) y siga los pasos indicados en el archivo README. Tenga en cuenta que el RichText de prueba está disponible solo por 30 días.

### Paso 2. Creación del componente {#step-2-component-creation}

Ahora debe crear un componente Vue para agregar RichText a la aplicación. Cree un nuevo archivo en el directorio ***src/components/*** y nómbrelo ***Richtext.vue***.

#### Importar los archivos fuente {#import-source-files}

Abra el archivo ***Richtext.vue*** e importe los archivos fuente de RichText. Tenga en cuenta que:

- si usa la versión PRO e instala el paquete RichText desde una carpeta local, las rutas de importación tienen el siguiente aspecto:

~~~html title="Richtext.vue"
<script>
import { Richtext} from 'dhx-richtext-package';
import 'dhx-richtext-package/dist/richtext.css';
</script>
~~~

- si usa la versión de prueba de RichText, especifique las siguientes rutas:

~~~html title="Richtext.vue"
<script>
import { Richtext} from '@dhx/trial-richtext';
import '@dhx/trial-richtext/dist/richtext.css';
</script>
~~~

En este tutorial puede ver cómo configurar la versión de **prueba** de RichText.

#### Establecer los contenedores y agregar Richtext {#setting-containers-and-adding-richtext}

Para mostrar Richtext en la página, debe crear un contenedor para RichText e inicializar el componente usando el constructor correspondiente:

~~~html {} title="Richtext.vue"
<script>
import { Richtext} from "@dhx/trial-richtext";
import "@dhx/trial-richtext/dist/richtext.css";

export default {
    mounted() {
        // inicializar el componente RichText
        this.editor = new Richtext(this.$refs.richtext_container, {});
    },

    unmounted() {
        this.editor.destructor(); // destruir RichText
    }
};
</script>

<template>
    <div class="component_container">
        <div ref="richtext_container" class="widget"></div>
    </div>
</template>
~~~

#### Agregar estilos {#adding-styles}

Para mostrar RichText correctamente, debe especificar los estilos importantes para RichText y su contenedor en el archivo CSS principal del proyecto:

~~~css title="main.css"
/* especificar estilos para la página inicial */
html,
body,
#app { /* asegúrese de usar el contenedor raíz #app */
    height: 100%;
    padding: 0;
    margin: 0;
}

/* especificar estilos para el contenedor de RichText */
.component_container {
    height: 100%;
    margin: 0 auto;
}

/* especificar estilos para el widget de RichText */
.widget {
    height: calc(100% - 56px);
}
~~~

#### Cargar datos {#loading-data}

Para agregar datos a RichText, debe proporcionar un conjunto de datos. Puede crear el archivo ***data.js*** en el directorio ***src/*** y agregar algunos datos en él:

~~~jsx {} title="data.ts"
export function getData() {
  const value = `
    <h2>RichText 2.0</h2>
    <p>Repository at <a href="https://git.webix.io/xbs/richtext">https://git.webix.io/xbs/richtext</a></p>
    <p><img src="https://placecats.com/500/300" style="width:500px;height:300px;"></p>`;
  return { value };
}
~~~

Luego abra el archivo ***App.vue***, importe los datos e inicialícelos mediante el método interno `data()`. Después de esto puede pasar los datos al nuevo componente `<RichText/>` creado como **props**:

~~~html {} title="App.vue"
<script>
import RichText from "./components/Richtext.vue";
import { getData } from "./data";

export default {
    components: { RichText },
    data() {
        const { value } = getData();
        return { value };
    }
};
</script>

<template>
    <RichText :value="value" />
</template>
~~~

Vaya al archivo ***Richtext.vue*** y aplique los **props** pasados al objeto de configuración de RichText:

~~~html {} title="Richtext.vue"
<script>
import { Richtext} from "@dhx/trial-richtext";
import "@dhx/trial-richtext/dist/richtext.css";

export default {
    props: ["value"],

    mounted() {
        this.editor = new Richtext(this.$refs.richtext_container, {
            value: this.value,
            // otras propiedades de configuración
        });
    },

    unmounted() {
        this.editor.destructor();
    }
};
</script>

<template>
    <div class="component_container">
        <div ref="richtext_container" class="widget"></div>
    </div>
</template>
~~~

También puede usar el método [`setValue()`](api/methods/set-value.md) dentro del método `mounted()` de Vue para cargar datos en RichText:

~~~html {} title="Richtext.vue"
<script>
import { Richtext} from "@dhx/trial-richtext";
import "@dhx/trial-richtext/dist/richtext.css";

export default {
    props: ["value"],

    mounted() {
        this.editor = new Richtext(this.$refs.richtext_container, {
            // otras propiedades de configuración
        });

        this.editor.setValue(this.value);
    },

    unmounted() {
        this.editor.destructor();
    }
};
</script>

<template>
    <div class="component_container">
        <div ref="richtext_container" class="widget"></div>
    </div>
</template>
~~~

Ahora el componente RichText está listo para usarse. Cuando el elemento se agregue a la página, inicializará RichText con los datos. También puede proporcionar los ajustes de configuración necesarios. Visite nuestra [documentación de la API de RichText](api/overview/main_overview.md) para consultar la lista completa de propiedades disponibles.

#### Gestionar eventos {#handling-events}

Cuando un usuario realiza alguna acción en RichText, se invoca un evento. Puede usar estos eventos para detectar la acción y ejecutar el código deseado. Consulte la [lista completa de eventos](api/overview/events_overview.md).

Abra ***Richtext.vue*** y complete el método `mounted()`:

~~~html {} title="Richtext.vue"
<script>
// ...
export default {
    // ...
    mounted() {
        this.editor = new Richtext(this.$refs.cont, {});

        this.editor.api.on("print", () => {
            console.log("The document is printing");
        });
    },

    unmounted() {
        this.editor.destructor();
    }
}
</script>

// ...
~~~

Después de eso, puede iniciar la aplicación para ver RichText cargado con datos en la página.

<div className="img_border">
![Inicialización de RichText](../assets/trial_richtext.png)
</div>

Ahora sabe cómo integrar DHTMLX RichText con Vue. Puede personalizar el código según sus necesidades específicas. El ejemplo avanzado final lo puede encontrar en [**GitHub**](https://github.com/DHTMLX/vue-richtext-demo).

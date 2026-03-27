---
sidebar_label: Integración con Svelte
title: Integración con Svelte
description: Puede consultar información sobre la integración con Svelte en la documentación de la biblioteca JavaScript RichText de DHTMLX. Explore guías para desarrolladores y referencia de API, pruebe ejemplos de código y demostraciones en vivo, y descargue una versión de evaluación gratuita de 30 días de DHTMLX RichText.
---

# Integración con Svelte

:::tip[Consejo]
Debe estar familiarizado con los conceptos básicos y los patrones de **Svelte** antes de leer esta documentación. Para refrescar sus conocimientos, consulte la [**documentación de Svelte**](https://svelte.dev/).
:::

DHTMLX RichText es compatible con **Svelte**. Hemos preparado ejemplos de código sobre cómo usar DHTMLX RichText con **Svelte**. Para más información, consulte el correspondiente [**ejemplo en GitHub**](https://github.com/DHTMLX/svelte-richtext-demo).

## Crear un proyecto {#creating-a-project}

:::info[Información]
Antes de comenzar a crear un nuevo proyecto, instale [**Vite**](https://vite.dev/) (opcional) y [**Node.js**](https://nodejs.org/en/).
:::

Existen varias formas de crear un proyecto **Svelte**:

- puede usar [**SvelteKit**](https://kit.svelte.dev/)

o

- también puede usar **Svelte con Vite** (pero sin SvelteKit):

~~~json
npm create vite@latest
~~~

Consulte los detalles en el [artículo relacionado](https://svelte.dev/docs/introduction#start-a-new-project-alternatives-to-sveltekit).

### Instalación de dependencias {#installation-of-dependencies}

Nombremos el proyecto **my-svelte-richtext-app** y vayamos a la carpeta de la aplicación:

~~~json
cd my-svelte-richtext-app
~~~

Instale las dependencias e inicie el dev server. Para ello, use un gestor de paquetes:

- si usa [**yarn**](https://yarnpkg.com/), ejecute los siguientes comandos:

~~~json
yarn
yarn start
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

Ahora debe crear un componente Svelte para agregar RichText a la aplicación. Creemos un nuevo archivo en el directorio ***src/*** y nombremos ***Richtext.svelte***.

#### Importar los archivos fuente {#importing-source-files}

Abra el archivo ***Richtext.svelte*** e importe los archivos fuente de RichText. Tenga en cuenta que:

- si usa la versión PRO e instala el paquete RichText desde una carpeta local, las rutas de importación tienen el siguiente aspecto:

~~~html title="Richtext.svelte"
<script>
import { Richtext} from 'dhx-richtext-package';
import 'dhx-richtext-package/dist/richtext.css';
</script>
~~~

- si usa la versión de prueba de RichText, especifique las siguientes rutas:

~~~html title="Richtext.svelte"
<script>
import { Richtext} from '@dhx/trial-richtext';
import '@dhx/trial-richtext/dist/richtext.css';
<script>
~~~

En este tutorial puede ver cómo configurar la versión de **prueba** de RichText.

#### Establecer los contenedores y agregar RichText {#setting-containers-and-adding-richtext}

Para mostrar RichText en la página, debe crear un contenedor para RichText e inicializar el componente usando el constructor correspondiente:

~~~html {} title="Richtext.svelte"
<script>
import { onMount, onDestroy } from "svelte";
import { Richtext} from "@dhx/trial-richtext";
import "@dhx/trial-richtext/dist/richtext.css";

let richtext_container; // inicializar el contenedor para RichText
let editor;

onMount(() => {
    // inicializar el componente RichText
    editor = new Richtext(richtext_container, {});
});

onDestroy(() => {
    editor?.destructor(); // destruir RichText
});
</script>

<div class="component_container">
    <div bind:this={richtext_container} class="widget"></div>
</div>
~~~

#### Cargar datos {#loading-data}

Para agregar datos a RichText, necesitamos proporcionar un conjunto de datos. Puede crear el archivo ***data.js*** en el directorio ***src/*** y agregar algunos datos en él:

~~~jsx {} title="data.ts"
export function getData() {
  const value = `
    <h2>RichText 2.0</h2>
    <p>Repository at <a href="https://git.webix.io/xbs/richtext">https://git.webix.io/xbs/richtext</a></p>
    <p><img src="https://placecats.com/500/300" style="width:500px;height:300px;"></p>`;
  return { value };
}
~~~

Luego abra el archivo ***App.svelte***, importe los datos y páselos al nuevo componente `<RichText/>` creado como **props**:

~~~html {} title="App.svelte"
<script>
import RichText from "./Richtext.svelte";
import { getData } from "./data.js";

const { value } = getData();
</script>

<RichText value={value} />
~~~

Vaya al archivo ***Richtext.svelte*** y aplique los **props** pasados al objeto de configuración de RichText:

~~~html {} title="Richtext.svelte"
<script>
import { onMount, onDestroy } from "svelte";
import { Richtext } from "@dhx/trial-richtext";
import "@dhx/trial-richtext/dist/richtext.css";

export let value

let richtext_container;
let editor;

onMount(() => {
    editor = new Richtext(richtext_container, {
        value
        // otras propiedades de configuración
    })
});

onDestroy(() => {
    editor.destructor();
});
</script>

<div class="component_container">
    <div bind:this={richtext_container} class="widget"></div>
</div>
~~~

También puede usar el método [`setValue()`](/api/methods/set-value.md) dentro del método `onMount()` de Svelte para cargar datos en RichText:

~~~html {} title="Richtext.svelte"
<script>
import { onMount, onDestroy } from "svelte";
import { Richtext } from "@dhx/trial-richtext";
import "@dhx/trial-richtext/dist/richtext.css";

export let value;

let richtext_container;
let editor;

onMount(() => {
    editor = new Richtext(richtext_container, {
        // otras propiedades de configuración
    })

    editor.setValue(value);
});

onDestroy(() => {
    editor.destructor();
});
</script>

<div class="component_container">
    <div bind:this={richtext_container} class="widget"></div>
</div>
~~~

Ahora el componente RichText está listo para usarse. Cuando el elemento se agregue a la página, inicializará RichText con los datos. También puede proporcionar los ajustes de configuración necesarios. Visite nuestra [documentación de la API de RichText](api/overview/main_overview.md) para consultar la lista completa de propiedades disponibles.

#### Gestionar eventos {#handling-events}

Cuando un usuario realiza alguna acción en RichText, se invoca un evento. Puede usar estos eventos para detectar la acción y ejecutar el código deseado. Consulte la [lista completa de eventos](api/overview/events_overview.md).

Abra ***Richtext.svelte*** y complete el método `onMount()` de la siguiente manera:

~~~html {} title="Richtext.svelte"
<script>
// ...
let editor;

onMount(() => {
    editor = new Richtext(richtext_container, {})

    editor.api.on("print", () => {
        console.log("The document is printing");
    });
});

onDestroy(() => {
    editor?.destructor();
});
</script>

// ...
~~~

### Paso 3. Agregar RichText a la aplicación {#step-3-adding-richtext-into-the-app}

Para agregar el componente a la aplicación, abra el archivo **App.svelte** y reemplace el código predeterminado con el siguiente:

~~~html title="App.svelte"
<script>
    import RichText from "./Richtext.svelte";
    import { getData } from "./data.js";

    const { value } = getData();
</script>

<RichText value={value}  />
~~~

Después de eso, puede iniciar la aplicación para ver RichText cargado con datos en la página.

<div className="img_border">
![Inicialización de RichText](../assets/trial_richtext.png)
</div>

Ahora sabe cómo integrar DHTMLX RichText con Svelte. Puede personalizar el código según sus necesidades específicas. El ejemplo avanzado final lo puede encontrar en [**GitHub**](https://github.com/DHTMLX/svelte-richtext-demo).

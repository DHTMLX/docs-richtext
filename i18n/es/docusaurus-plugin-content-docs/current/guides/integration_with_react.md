---
sidebar_label: Integración con React
title: Integración con React
description: Puede consultar información sobre la integración con React en la documentación de la biblioteca JavaScript RichText de DHTMLX. Explore guías para desarrolladores y referencia de API, pruebe ejemplos de código y demostraciones en vivo, y descargue una versión de evaluación gratuita de 30 días de DHTMLX RichText.
---

# Integración con React

:::tip[Consejo]
Debe estar familiarizado con los conceptos básicos y los patrones de [**React**](https://react.dev) antes de leer esta documentación. Para refrescar sus conocimientos, consulte la [**documentación de React**](https://react.dev/learn).
:::

DHTMLX RichText es compatible con **React**. Hemos preparado ejemplos de código sobre cómo usar DHTMLX RichText con **React**. Para más información, consulte el correspondiente [**ejemplo en GitHub**](https://github.com/DHTMLX/react-richtext-demo).

## Crear un proyecto {#creating-a-project}

:::info[Información]
Antes de comenzar a crear un nuevo proyecto, instale [**Vite**](https://vite.dev/) (opcional) y [**Node.js**](https://nodejs.org/en/).
:::

Puede crear un proyecto básico de **React** o usar **React con Vite**. Nombremos el proyecto **my-react-richtext-app**:

~~~json
npx create-react-app my-react-richtext-app
~~~

### Instalación de dependencias {#installation-of-dependencies}

Vaya a la carpeta de la aplicación recién creada:

~~~json
cd my-react-richtext-app
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

Ahora debe crear un componente React para agregar RichText a la aplicación. Cree un nuevo archivo en el directorio ***src/*** y nómbrelo ***Richtext.jsx***.

#### Importar los archivos fuente {#importing-source-files}

Abra el archivo ***Richtext.jsx*** e importe los archivos fuente de RichText. Tenga en cuenta que:

- si usa la versión PRO e instala el paquete RichText desde una carpeta local, las rutas de importación tienen el siguiente aspecto:

~~~jsx title="Richtext.jsx"
import { Richtext} from 'dhx-richtext-package';
import 'dhx-richtext-package/dist/richtext.css';
~~~

- si usa la versión de prueba de RichText, especifique las siguientes rutas:

~~~jsx title="Richtext.jsx"
import { Richtext} from '@dhx/trial-richtext';
import "@dhx/trial-richtext/dist/richtext.css";
~~~

En este tutorial puede ver cómo configurar la versión de **prueba** de RichText.

#### Establecer los contenedores y agregar Richtext {#setting-containers-and-adding-richtext}

Para mostrar RichText en la página, debe crear un contenedor para RichText e inicializar el componente usando los constructores correspondientes:

~~~jsx {} title="Richtext.jsx"
import { useEffect, useRef } from "react";
import { Richtext} from '@dhx/trial-richtext';
import '@dhx/trial-richtext/dist/richtext.css'; // incluir los estilos de RichText

export default function RichTextComponent(props) {
    let richtext_container = useRef(); // inicializar el contenedor para RichText

    useEffect(() => {
        // inicializar el componente RichText
        const editor = new Richtext(richtext_container.current, {});

        return () => {
            editor.destructor(); // destruir RichText
        };
    }, []);

    return  <div className="component_container">
                <div ref={richtext_container} className="widget"></div>
            </div>
}
~~~

#### Agregar estilos {#adding-styles}

Para mostrar RichText correctamente, debe especificar los estilos importantes para RichText y su contenedor en el archivo CSS principal del proyecto:

~~~css title="index.css"
/* especificar estilos para la página inicial */
html,
body,
#root {
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

~~~jsx {} title="data.js"
export function getData() {
  const value = `
    <h2>RichText 2.0</h2>
    <p>Repository at <a href="https://git.webix.io/xbs/richtext">https://git.webix.io/xbs/richtext</a></p>
    <p><img src="https://placecats.com/500/300" style="width:500px;height:300px;"></p>`;
  return { value };
}
~~~

Luego abra el archivo ***App.js*** e importe los datos. Después de esto puede pasar los datos al nuevo componente `<RichText/>` creado como **props**:

~~~jsx {2,5-6} title="App.js"
import RichText from "./Richtext";
import { getData } from "./data";

function App() {
    const { value } = getData();
    return <RichText value={value} />;
}

export default App;
~~~

Vaya al archivo ***Richtext.jsx*** y aplique los **props** pasados al objeto de configuración de RichText:

~~~jsx {} title="Richtext.jsx"
import { useEffect, useRef } from "react";
import { Richtext} from "@dhx/trial-richtext";
import "@dhx/trial-richtext/dist/richtext.css";

export default function RichTextComponent(props) {
    let richtext_container = useRef();

    useEffect(() => {
        const editor = new Richtext(richtext_container.current, {
            value: props.value, // aplicar el valor
            // otras propiedades de configuración
        });

        return () => {
            editor.destructor();
        };
    }, []);

    return  <div className="component_container">
                <div ref={richtext_container} className="widget"></div>
            </div>
}
~~~

También puede usar el método [`setValue()`](api/methods/set-value.md) dentro del método `useEffect()` de React para cargar datos en RichText:

~~~jsx {} title="Richtext.jsx"
import { useEffect, useRef } from "react";
import { Richtext} from "@dhx/trial-richtext";
import "@dhx/trial-richtext/dist/richtext.css";

export default function RichTextComponent(props) {
    let richtext_container = useRef();

    let value = props.value;

    useEffect(() => {
        const editor = new Richtext(richtext_container.current, {
            // propiedades de configuración
        });

        editor.setValue(value);

        return () => {
            editor.destructor();
        };
    }, []);

    return  <div className="component_container">
                <div ref={richtext_container} className="widget"></div>
            </div>
}
~~~

Ahora el componente RichText está listo. Cuando el elemento se agregue a la página, inicializará RichText con los datos. También puede proporcionar los ajustes de configuración necesarios. Visite nuestra [documentación de la API de RichText](api/overview/main_overview.md) para consultar la lista completa de propiedades disponibles.

#### Gestionar eventos {#handling-events}

Cuando un usuario realiza alguna acción en RichText, se invoca un evento. Puede usar estos eventos para detectar la acción y ejecutar el código deseado. Consulte la [lista completa de eventos](api/overview/events_overview.md).

Abra ***Richtext.jsx*** y complete el método `useEffect()` de la siguiente manera:

~~~jsx {} title="Richtext.jsx"
// ...
useEffect(() => {
    const editor = new Richtext(richtext_container.current, {});

    editor.api.on("print", () => {
        console.log("The document is printing");
    });

    return () => {
        editor.destructor();
    };
}, []);
// ...
~~~

Después de eso, puede iniciar la aplicación para ver RichText cargado con datos en la página.

<div className="img_border">
![Inicialización de RichText](../assets/trial_richtext.png)
</div>

Ahora sabe cómo integrar DHTMLX RichText con React. Puede personalizar el código según sus necesidades específicas. El ejemplo avanzado final lo puede encontrar en [**GitHub**](https://github.com/DHTMLX/react-richtext-demo).

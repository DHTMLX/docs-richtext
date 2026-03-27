---
sidebar_label: Integración con Angular
title: Integración con Angular
description: Puede consultar información sobre la integración con Angular en la documentación de la biblioteca JavaScript RichText de DHTMLX. Explore guías para desarrolladores y referencia de API, pruebe ejemplos de código y demostraciones en vivo, y descargue una versión de evaluación gratuita de 30 días de DHTMLX RichText.
---

# Integración con Angular

:::tip[Consejo]
Debe estar familiarizado con los conceptos básicos y los patrones de **Angular** antes de leer esta documentación. Para refrescar sus conocimientos, consulte la [**documentación de Angular**](https://v17.angular.io/docs).
:::

DHTMLX RichText es compatible con **Angular**. Hemos preparado ejemplos de código sobre cómo usar DHTMLX RichText con **Angular**. Para más información, consulte el correspondiente [**ejemplo en GitHub**](https://github.com/DHTMLX/angular-richtext-demo).

## Crear un proyecto {#creating-a-project}

:::info[Información]
Antes de comenzar a crear un nuevo proyecto, instale [**Angular CLI**](https://v17.angular.io/cli) y [**Node.js**](https://nodejs.org/en/).
:::

Cree un nuevo proyecto **my-angular-richtext-app** usando Angular CLI. Ejecute el siguiente comando para este fin:

~~~json
ng new my-angular-richtext-app
~~~

:::note[Nota]
Si desea seguir esta guía, ¡deshabilite Server-Side Rendering (SSR) y Static Site Generation (SSG/Prerendering) al crear la nueva aplicación Angular!
:::

El comando anterior instala todas las herramientas necesarias, por lo que no necesita ejecutar comandos adicionales.

### Instalación de dependencias {#installation-of-dependencies}

Vaya a la carpeta de la aplicación recién creada:

~~~json
cd my-angular-richtext-app
~~~

Instale las dependencias e inicie el dev server. Para ello, use el gestor de paquetes [**yarn**](https://yarnpkg.com/):

~~~json
yarn
yarn start
~~~

La aplicación debería ejecutarse en localhost (por ejemplo, `http://localhost:3000`).

## Crear RichText {#creating-richtext}

Ahora debe obtener el código fuente de DHTMLX RichText. En primer lugar, detenga la aplicación y proceda con la instalación del paquete RichText.

### Paso 1. Instalación del paquete {#step-1-package-installation}

Descargue el [**paquete de prueba de RichText**](/how_to_start/#installing-richtext-via-npm-or-yarn) y siga los pasos indicados en el archivo README. Tenga en cuenta que el RichText de prueba está disponible solo por 30 días.

### Paso 2. Creación del componente {#step-2-component-creation}

Ahora debe crear un componente Angular para agregar RichText a la aplicación. Cree la carpeta **richtext** en el directorio **src/app/**, agréguele un nuevo archivo y nómbrelo **richtext.component.ts**.

#### Importar los archivos fuente {#import-source-files}

Abra el archivo **richtext.component.ts** e importe los archivos fuente de RichText. Tenga en cuenta que:

- si usa la versión PRO e instala el paquete RichText desde una carpeta local, la ruta de importación tiene el siguiente aspecto:

~~~jsx
import { Richtext} from 'dhx-richtext-package';
~~~

- si usa la versión de prueba de RichText, especifique la siguiente ruta:

~~~jsx
import { Richtext} from '@dhx/trial-richtext';
~~~

En este tutorial puede ver cómo configurar la versión de **prueba** de RichText.

#### Establecer los contenedores e inicializar Richtext {#set-containers-and-initialize-the-richtext}

Para mostrar RichText en la página, debe establecer un contenedor para RichText e inicializar el componente usando el constructor correspondiente:

~~~jsx {} title="richtext.component.ts"
import { Richtext} from '@dhx/trial-richtext';
import { Component, ElementRef, OnInit, ViewChild, OnDestroy, ViewEncapsulation} from '@angular/core';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: "richtext", // nombre de plantilla usado en el archivo "app.component.ts" como <richtext />
    styleUrls: ["./richtext.component.css"], // incluir el archivo css
    template:  `<div class = "component_container">
                    <div #richtext_container class = "widget"></div>
                </div>`
})

export class RichTextComponent implements OnInit, OnDestroy {
    // inicializar el contenedor para RichText
    @ViewChild("richtext_container", { static: true }) richtext_container!: ElementRef;

    private _editor!: Richtext;

    ngOnInit() {
        // inicializar el componente RichText
        this._editor = new Richtext(this.richtext_container.nativeElement, {});
    }

    ngOnDestroy(): void {
        this._editor.destructor(); // destruir RichText
    }
}
~~~

#### Agregar estilos {#adding-styles}

Para mostrar RichText correctamente, debe proporcionar los estilos correspondientes. Para ello, puede crear el archivo **richtext.component.css** en el directorio **src/app/richtext/** y especificar los estilos importantes para RichText y su contenedor:

~~~css title="richtext.component.css"
/* importar los estilos de RichText */
@import "@dhx/trial-richtext/dist/richtext.css";

/* especificar estilos para la página inicial */
html,
body{
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

Para agregar datos a RichText, debe proporcionar un conjunto de datos. Puede crear el archivo **data.ts** en el directorio **src/app/richtext/** y agregar algunos datos en él:

~~~jsx {} title="data.ts"
export function getData() {
  const value = `
    <h2>RichText 2.0</h2>
    <p>Repository at <a href="https://git.webix.io/xbs/richtext">https://git.webix.io/xbs/richtext</a></p>
    <p><img src="https://placecats.com/500/300" style="width:500px;height:300px;"></p>`;
  return { value };
}
~~~

Luego abra el archivo ***richtext.component.ts***. Importe el archivo con datos y especifique las propiedades de datos correspondientes en el objeto de configuración de RichText dentro del método `ngOnInit()`, como se muestra a continuación:

~~~jsx {} title="richtext.component.ts"
import { Richtext} from '@dhx/trial-richtext';
import { getData } from "./data"; // importar datos
import { Component, ElementRef, OnInit, ViewChild, OnDestroy, ViewEncapsulation} from '@angular/core';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: "richtext",
    styleUrls: ["./richtext.component.css"],
    template:  `<div class = "component_container">
                    <div #richtext_container class = "widget"></div>
                </div>`
})

export class RichTextComponent implements OnInit, OnDestroy {
    @ViewChild("richtext_container", { static: true }) richtext_container!: ElementRef;

    private _editor!: RichText;

    ngOnInit() {
        const { value } = getData(); // inicializar la propiedad de datos
        this._editor = new Richtext(this.richtext_container.nativeElement, {
            value
            // otras propiedades de configuración
        });
    }

    ngOnDestroy(): void {
        this._editor.destructor();
    }
}
~~~

También puede usar el método [`setValue()`](api/methods/set-value.md) dentro del método `ngOnInit()` de Angular para cargar datos en RichText.

~~~jsx {} title="richtext.component.ts"
import { Richtext} from '@dhx/trial-richtext';
import { getData } from "./data"; // importar datos
import { Component, ElementRef, OnInit, ViewChild, OnDestroy, ViewEncapsulation} from '@angular/core';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: "richtext",
    styleUrls: ["./richtext.component.css"],
    template:  `<div class = "component_container">
                    <div #richtext_container class = "widget"></div>
                </div>`
})

export class RichTextComponent implements OnInit, OnDestroy {
    @ViewChild("richtext_container", { static: true }) richtext_container!: ElementRef;

    private _editor!: RichText;

    ngOnInit() {
        const { value } = getData(); // inicializar la propiedad de datos
        this._editor = new Richtext(this.richtext_container.nativeElement, {
            // otras propiedades de configuración
        });

        // aplicar los datos mediante el método setValue()
        this._editor.setValue({ value });
    }

    ngOnDestroy(): void {
        this._editor.destructor();
    }
}
~~~

Ahora el componente RichText está listo para usarse. Cuando el elemento se agregue a la página, inicializará RichText con los datos. También puede proporcionar los ajustes de configuración necesarios. Visite nuestra [documentación de la API de RichText](api/overview/main_overview.md) para consultar la lista completa de propiedades disponibles.

#### Gestionar eventos {#handling-events}

Cuando un usuario realiza alguna acción en RichText, se invoca un evento. Puede usar estos eventos para detectar la acción y ejecutar el código deseado. Consulte la [lista completa de eventos](api/overview/events_overview.md).

Abra el archivo **richtext.component.ts** y complete el método `ngOnInit()` de la siguiente manera:

~~~jsx {} title="richtext.component.ts"
// ...
ngOnInit() {
    this._editor = new Richtext(this.richtext_container.nativeElement, {});

    this._editor.api.on("print", () => {
        console.log("The document is printing");
    });
}

ngOnDestroy(): void {
    this._editor.destructor();
}
~~~

### Paso 3. Agregar RichText a la aplicación {#step-3-adding-richtext-into-the-app}

Para agregar el componente ***RichTextComponent*** a su aplicación, abra el archivo ***src/app/app.component.ts*** y reemplace el código predeterminado con el siguiente:

~~~jsx {} title="app.component.ts"
import { Component } from "@angular/core";

@Component({
    selector: "app-root",
    template: `<richtext/>`
})
export class AppComponent {
    name = "";
}
~~~

Luego cree el archivo ***app.module.ts*** en el directorio ***src/app/*** y especifique el *RichTextComponent* como se muestra a continuación:

~~~jsx {} title="app.module.ts"
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { RichTextComponent } from "./richtext/richtext.component";

@NgModule({
    declarations: [AppComponent, RichTextComponent],
    imports: [BrowserModule],
    bootstrap: [AppComponent]
})
export class AppModule {}
~~~

El último paso es abrir el archivo ***src/main.ts*** y reemplazar el código existente con el siguiente:

~~~jsx title="main.ts"
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/app.module";
platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch((err) => console.error(err));
~~~

Después de eso, puede iniciar la aplicación para ver RichText cargado con datos en la página.

<div className="img_border">
![Inicialización de RichText](../assets/trial_richtext.png)
</div>

Ahora sabe cómo integrar DHTMLX RichText con Angular. Puede personalizar el código según sus necesidades específicas. El ejemplo avanzado final lo puede encontrar en [**GitHub**](https://github.com/DHTMLX/angular-richtext-demo).

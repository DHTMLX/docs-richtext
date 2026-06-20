---
sidebar_label: Integration with Angular
title: Integration with Angular
description: You can learn about the integration with Angular in the documentation of the DHTMLX JavaScript RichText library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX RichText.
---

# Integration with Angular

:::tip
Make sure you are familiar with basic Angular concepts and patterns. For a refresher, see the [Angular documentation](https://v17.angular.io/docs).
:::

DHTMLX RichText works with Angular. For a complete code example, see the [GitHub demo](https://github.com/DHTMLX/angular-richtext-demo).

## Create a project

:::info
Install [Angular CLI](https://v17.angular.io/cli) and [Node.js](https://nodejs.org/en/) before creating a new project.
:::

Create a new *my-angular-richtext-app* project with Angular CLI:

~~~bash
ng new my-angular-richtext-app
~~~

:::note
Disable Server-Side Rendering (SSR) and Static Site Generation (SSG/Prerendering) when the Angular CLI prompts you during project creation.
:::

The command installs all the necessary tools. No additional commands are required.

### Install dependencies

Switch to the new app directory:

~~~bash
cd my-angular-richtext-app
~~~

Install dependencies and start the dev server with the [yarn](https://yarnpkg.com/) package manager:

~~~bash
yarn
yarn start
~~~

The app runs on localhost (for example, `http://localhost:3000`).

## Create RichText

Stop the app and install the RichText package.

### Step 1. Install the package

Download the [trial RichText package](/how_to_start/#installing-richtext-via-npm-or-yarn) and follow the steps in the README file. The trial license is valid for 30 days.

### Step 2. Create the component

Create an Angular component to add RichText to the application. In the *src/app/* directory, create the *richtext* folder and add a new file named *richtext.component.ts*.

#### Import source files

Open *richtext.component.ts* and import the RichText source files.

For the PRO version installed from a local folder, use:

~~~jsx
import { Richtext } from 'dhx-richtext-package';
~~~

For the trial version, use:

~~~jsx
import { Richtext } from '@dhx/trial-richtext';
~~~

This tutorial uses the trial version of RichText.

#### Set the container and initialize RichText

Set a container element for RichText and initialize the component with the `Richtext` constructor inside `ngOnInit()`. Call the [`destructor()`](api/methods/destructor.md) method inside `ngOnDestroy()` to clean up:

~~~jsx {} title="richtext.component.ts"
import { Richtext } from '@dhx/trial-richtext';
import { Component, ElementRef, OnInit, ViewChild, OnDestroy, ViewEncapsulation } from '@angular/core';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: "richtext", // use the "richtext" selector in app.component.ts as <richtext />
    styleUrls: ["./richtext.component.css"], // include the css file
    template:  `<div class = "component_container">
                    <div #richtext_container class = "widget"></div>
                </div>`
})

export class RichTextComponent implements OnInit, OnDestroy {
    // container for RichText
    @ViewChild("richtext_container", { static: true }) richtext_container!: ElementRef;

    private _editor!: Richtext;

    ngOnInit() {
        // initialize the RichText component
        this._editor = new Richtext(this.richtext_container.nativeElement, {});
    }

    ngOnDestroy(): void {
        this._editor.destructor(); // destroy RichText
    }
}
~~~

#### Add styles

Create the *richtext.component.css* file in the *src/app/richtext/* directory with the styles for RichText and its container:

~~~css title="richtext.component.css"
/* import RichText styles */
@import "@dhx/trial-richtext/dist/richtext.css";

/* base page styles */
html,
body{
    height: 100%;
    padding: 0;
    margin: 0;
}

/* RichText container */
.component_container {
    height: 100%; 
    margin: 0 auto;
}

/* RichText widget */
.widget {
    height: calc(100% - 56px);
}
~~~

#### Load data

Provide data for RichText. Create the *data.ts* file in the *src/app/richtext/* directory:

~~~jsx {} title="data.ts"
export function getData() {
  const value = `
    <h2>RichText 2.0</h2>
    <p>Repository at <a href="https://git.webix.io/xbs/richtext">https://git.webix.io/xbs/richtext</a></p>
    <p><img src="https://placecats.com/500/300" style="width:500px;height:300px;"></p>`;
  return { value };
}
~~~

Open *richtext.component.ts*. Import the data and pass the `value` property to the RichText configuration inside `ngOnInit()`:

~~~jsx {} title="richtext.component.ts"
import { Richtext } from '@dhx/trial-richtext';
import { getData } from "./data"; // import data
import { Component, ElementRef, OnInit, ViewChild, OnDestroy, ViewEncapsulation } from '@angular/core';

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

    private _editor!: Richtext;

    ngOnInit() {
        const { value } = getData(); // extract the value from the data module
        this._editor = new Richtext(this.richtext_container.nativeElement, {
            value
            // other configuration properties 
        });
    }

    ngOnDestroy(): void {
        this._editor.destructor(); 
    }
}
~~~

Alternatively, call the [`setValue()`](api/methods/set-value.md) method inside `ngOnInit()` to load data into RichText:

~~~jsx {} title="richtext.component.ts"
import { Richtext } from '@dhx/trial-richtext';
import { getData } from "./data"; // import data
import { Component, ElementRef, OnInit, ViewChild, OnDestroy, ViewEncapsulation } from '@angular/core';

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

    private _editor!: Richtext;

    ngOnInit() {
        const { value } = getData(); // extract the value from the data module
        this._editor = new Richtext(this.richtext_container.nativeElement, {
            // other configuration properties 
        });

        // apply the data via the setValue() method
        this._editor.setValue(value); 
    }

    ngOnDestroy(): void {
        this._editor.destructor(); 
    }
}
~~~

The RichText component is ready to use. Angular renders the editor with data when the `<richtext/>` element mounts. For the full list of configuration options, see the [RichText API overview](api/overview/main_overview.md).

#### Handle events

RichText fires events on user actions. Subscribe to events with the [`api.on()`](api/internal/on.md) method to react to user input. See the [full list of events](api/overview/events_overview.md).

Open *richtext.component.ts* and update the `ngOnInit()` method. The example below logs a message on every [`print`](api/events/print.md) event:

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

### Step 3. Add RichText to the app

Open *src/app/app.component.ts* and replace the default code with the `<richtext/>` selector:

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

Create *src/app/app.module.ts* and declare the `RichTextComponent`:

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

Open *src/main.ts* and replace the contents with the bootstrap code:

~~~jsx title="main.ts"
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/app.module";
platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch((err) => console.error(err));
~~~

Start the app to see RichText render with data on the page.

<div className="img_border">
![DHTMLX RichText rendered in an Angular application with sample content](/img/trial_richtext.png)
</div>

You now have a working RichText integration in Angular. Customize the code to fit your needs. A complete example is available on [GitHub](https://github.com/DHTMLX/angular-richtext-demo).

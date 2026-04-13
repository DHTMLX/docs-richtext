---
sidebar_label: Integration with Angular
title: Integration with Angular
description: You can learn about the integration with Angular in the documentation of the DHTMLX JavaScript RichText library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX RichText.
---

# Integration with Angular

:::tip
You should be familiar with basic concepts and patterns of **Angular** before reading this documentation. To refresh your knowledge, please refer to the [**Angular documentation**](https://v17.angular.io/docs).
:::

DHTMLX RichText is compatible with **Angular**. We have prepared code examples on how to use DHTMLX RichText with **Angular**. For more information, refer to the corresponding [**Example on GitHub**](https://github.com/DHTMLX/angular-richtext-demo).

## Create a project

:::info
Before you start to create a new project, install [**Angular CLI**](https://v17.angular.io/cli) and [**Node.js**](https://nodejs.org/en/).
:::

Create a new **my-angular-richtext-app** project using Angular CLI. Run the following command:

~~~json
ng new my-angular-richtext-app
~~~

:::note
If you want to follow this guide, disable Server-Side Rendering (SSR) and Static Site Generation (SSG/Prerendering) when creating new Angular app.
:::

This command installs all necessary tools. No additional commands are required.

### Install dependencies

Go to the newly created app directory:

~~~json
cd my-angular-richtext-app
~~~

Install dependencies and start the dev server. Use the [**yarn**](https://yarnpkg.com/) package manager:

~~~json
yarn
yarn start
~~~

The app should run on a localhost (for instance `http://localhost:3000`).

## Create RichText

Get the DHTMLX RichText source code. Stop the dev server, then install the RichText package.

### Step 1. Package installation

Download the [**trial RichText package**](/how_to_start/#installing-richtext-via-npm-or-yarn) and follow steps mentioned in the README file. Note that the trial version is available for 30 days only.

### Step 2. Component creation

Create an Angular component to add RichText to the application. Create the *richtext* folder in the *src/app/* directory, then add a new file named *richtext.component.ts*.

#### Import source files

Open *richtext.component.ts* and import RichText source files. Note that:

- if you use PRO version and install the RichText package from a local folder, the imported path looks like this:

~~~jsx
import { Richtext} from 'dhx-richtext-package';
~~~

- if you use the trial version of RichText, specify the following path:

~~~jsx
import { Richtext} from '@dhx/trial-richtext';
~~~

In this tutorial you can see how to configure the **trial** version of RichText.

#### Set up the container and initialize RichText

To display RichText on the page, set a container for RichText and initialize the component with the `Richtext` constructor:

~~~jsx {} title="richtext.component.ts"
import { Richtext} from '@dhx/trial-richtext';
import { Component, ElementRef, OnInit, ViewChild, OnDestroy, ViewEncapsulation} from '@angular/core';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: "richtext", // a template name used in the "app.component.ts" file as <richtext />
    styleUrls: ["./richtext.component.css"], // include the css file
    template:  `<div class = "component_container">
                    <div #richtext_container class = "widget"></div>
                </div>`
})

export class RichTextComponent implements OnInit, OnDestroy {
    // initialize container for RichText
    @ViewChild("richtext_container", { static: true }) richtext_container!: ElementRef;

    private _editor!: Richtext;

    ngOnInit() {
        // initialize the RichText component
        this._editor = new Richtext(this.richtext_container.nativeElement, {});
    }

    ngOnDestroy(): void {
        this._editor.destructor(); // destruct RichText
    }
}
~~~

#### Add styles

To display RichText correctly, provide the corresponding styles. Create *richtext.component.css* in the *src/app/richtext/* directory and specify styles for RichText and its container:

~~~css title="richtext.component.css"
/* import RichText styles */
@import "@dhx/trial-richtext/dist/richtext.css";

/* specify styles for initial page */
html,
body{
    height: 100%;
    padding: 0;
    margin: 0;
}

/* specify styles for RichText container */
.component_container {
    height: 100%; 
    margin: 0 auto;
}

/* specify styles for RichText widget */
.widget {
    height: calc(100% - 56px);
}
~~~

#### Load data

To add data, provide a data set. Create *data.ts* in the *src/app/richtext/* directory and add some data:

~~~jsx {} title="data.ts"
export function getData() {
  const value = `
    <h2>RichText 2.0</h2>
    <p>Repository at <a href="https://git.webix.io/xbs/richtext">https://git.webix.io/xbs/richtext</a></p>
    <p><img src="https://placecats.com/500/300" style="width:500px;height:300px;"></p>`;
  return { value };
}
~~~

Open *richtext.component.ts*, import the data file, and pass data properties to the RichText configuration object inside `ngOnInit()`:

~~~jsx {} title="richtext.component.ts"
import { Richtext} from '@dhx/trial-richtext';
import { getData } from "./data"; // import data
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
        const { value } = getData(); // initialize data property
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

You can also use the [`setValue()`](api/methods/set-value.md) method inside `ngOnInit()` to load data into RichText:

~~~jsx {} title="richtext.component.ts"
import { Richtext} from '@dhx/trial-richtext';
import { getData } from "./data"; // import data
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
        const { value } = getData(); // initialize data property
        this._editor = new Richtext(this.richtext_container.nativeElement, {
            // other configuration properties 
        });

        // apply the data via the setValue() method
        this._editor.setValue({ value }); 
    }

    ngOnDestroy(): void {
        this._editor.destructor(); 
    }
}
~~~

The RichText component is ready. When the element is added to the page, RichText initializes with data. Visit our [RichText API docs](api/overview/main_overview.md) to check the full list of available properties.

#### Handle events

When a user performs an action in RichText, the component fires an event. Use these events to detect the action and run the desired code. See the [full list of events](api/overview/events_overview.md).

Open *richtext.component.ts* and complete the `ngOnInit()` method:

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

To add the *RichTextComponent* component to your app, open *src/app/app.component.ts* and replace the default code:

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

Create *app.module.ts* in the *src/app/* directory and specify the *RichTextComponent*:

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

Open *src/main.ts* and replace the existing code:

~~~jsx title="main.ts"
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/app.module";
platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch((err) => console.error(err));
~~~

Start the app to see RichText loaded with data on a page.

<div className="img_border">
![RichText initialization](../assets/trial_richtext.png)
</div>

You have integrated DHTMLX RichText with Angular. Customize the code to fit your requirements. For the complete advanced example, see [**GitHub**](https://github.com/DHTMLX/angular-richtext-demo).

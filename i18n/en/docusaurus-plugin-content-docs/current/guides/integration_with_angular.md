---
sidebar_label: Integration with Angular
title: Integration with Angular
description: You can learn about the integration with Angular in the documentation of the DHTMLX JavaScript RichText library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX RichText.
---

# Integration with Angular

:::tip
It's helpful to be familiar with the main ideas and patterns of **Angular** before jumping in here. For a quick refresher, check out the [**Angular documentation**](https://v17.angular.io/docs).
:::

DHTMLX RichText works well with **Angular**. There are code samples available showing how to use DHTMLX RichText in an **Angular** project. For more details, take a look at the [**Example on GitHub**](https://github.com/DHTMLX/angular-richtext-demo).

## Creating a project

:::info
Before starting a new project, make sure [**Angular CLI**](https://v17.angular.io/cli) and [**Node.js**](https://nodejs.org/en/) are installed.
:::

To set up a new **my-angular-richtext-app** project using Angular CLI, just run:

~~~json
ng new my-angular-richtext-app
~~~

:::note
To keep things simple while following this guide, turn off Server-Side Rendering (SSR) and Static Site Generation (SSG/Prerendering) when creating your Angular app!
:::

This command sets up everything needed, so there’s no need for any extra installation steps.

### Installation of dependencies

Move into your new app’s directory:

~~~json
cd my-angular-richtext-app
~~~

Install the dependencies and start the development server with [**yarn**](https://yarnpkg.com/):

~~~json
yarn
yarn start
~~~

The app will be up and running locally (for example, at `http://localhost:3000`).

## Creating RichText

Next, grab the DHTMLX RichText source code. Stop the app for a moment and install the RichText package.

### Step 1. Package installation

Download the [**trial RichText package**](how_to_start.md#installing-richtext-via-npm-or-yarn) and follow the steps in the README file. Just a heads-up: the trial version is good for 30 days.

### Step 2. Component creation

To add RichText to your app, create a new Angular component. Make a **richtext** folder in **src/app/**, then add a new file called **richtext.component.ts**.

#### Import source files

Open **richtext.component.ts** and bring in the RichText source files. Here’s how the import path should look:

- For the PRO version installed from a local folder:

~~~jsx
import { Richtext} from 'dhx-richtext-package';
~~~

- For the trial version:

~~~jsx
import { Richtext} from '@dhx/trial-richtext';
~~~

This guide shows how to set up the **trial** version.

#### Set containers and initialize the Richtext

To show RichText on the page, set up a container and initialize the component with its constructor:

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

#### Adding styles

To make sure RichText looks right, add the needed styles. Create a **richtext.component.css** file in **src/app/richtext/** and include these styles for RichText and its container:

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

#### Loading data

To load data into RichText, just provide a data set. Make a **data.ts** file in **src/app/richtext/** and add some sample data:

~~~jsx {} title="data.ts"
export function getData() {
  const value = `
    <h2>RichText 2.0</h2>
    <p>Repository at <a href="https://git.webix.io/xbs/richtext">https://git.webix.io/xbs/richtext</a></p>
    <p><img src="https://placecats.com/500/300" style="width:500px;height:300px;"></p>`;
  return { value };
}
~~~

Next, open ***richtext.component.ts***. Import the data file and set the data properties in the RichText configuration inside the `ngOnInit()` method, like this:

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

Alternatively, you can use the [`setValue()`](api/methods/set-value.md) method in `ngOnInit()` to load data into RichText.

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

At this point, the RichText component is set up and ready. When it’s added to the page, RichText will initialize with the provided data. You can also add any configuration options you need. For the full list of properties, check out the [RichText API docs](api/overview/main_overview.md).

#### Handling events

Whenever something happens in RichText, it fires an event. You can listen for these events to trigger your own code. The [full list of events](api/overview/events_overview.md) is available.

Edit the **richtext.component.ts** file and update the `ngOnInit()` method like this:

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

### Step 3. Adding RichText into the app

To use the ***RichTextComponent*** in your app, open ***src/app/app.component.ts*** and replace the default code with:

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

Now, create ***app.module.ts*** in ***src/app/*** and add *RichTextComponent* as shown below:

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

The last thing to do is update ***src/main.ts*** with the following code:

~~~jsx title="main.ts"
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/app.module";
platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch((err) => console.error(err));
~~~

Now you can start the app and see RichText loaded with data on the page.

import trial_richtext from '@site/static/img/trial_richtext.png';

<img
    src={trial_richtext}
    alt="Trial richtext"
    className="img_border"
/>

That's all it takes to get DHTMLX RichText working with Angular. Feel free to tailor the code to your own needs. A complete example can be found on [**GitHub**](https://github.com/DHTMLX/angular-richtext-demo).

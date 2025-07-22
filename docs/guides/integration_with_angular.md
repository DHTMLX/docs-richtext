---
sidebar_label: Integration with Angular
title: Integration with Angular
description: You can learn about the integration with Angular in the documentation of the DHTMLX JavaScript RichText library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX RichText.
---

# Integration with Angular

:::tip
You should be familiar with basic concepts and patterns of **Angular** before reading this documentation. To refresh your knowledge, please refer to the [**Angular documentation**](https://angular.io/docs).
:::

DHTMLX RichText is compatible with **Angular**. We have prepared code examples on how to use DHTMLX RichText with **Angular**. For more information, refer to the corresponding [**Example on GitHub**](https://github.com/DHTMLX/angular-richtext-demo).

## Creating a project

:::info
Before you start to create a new project, install [**Angular CLI**](https://angular.io/cli) and [**Node.js**](https://nodejs.org/en/).
:::

Create a new **my-angular-richtext-app** project using Angular CLI. Run the following command for this purpose:

~~~json
ng new my-angular-richtext-app
~~~

:::note
If you want to follow this guide, disable Server-Side Rendering (SSR) and Static Site Generation (SSG/Prerendering) when creating new Angular app!
:::

The command above installs all the necessary tools, so you don't need to run any additional commands.

### Installation of dependencies

Go to the new created app directory:

~~~json
cd my-angular-richtext-app
~~~

Install dependencies and start the dev server. For this, use the [**yarn**](https://yarnpkg.com/) package manager:

~~~json
yarn
yarn start
~~~

The app should run on a localhost (for instance `http://localhost:3000`).

## Creating RichText

Now you should get the DHTMLX RichText source code. First of all, stop the app and proceed with installing the RichText package.

### Step 1. Package installation

Download the [**trial RichText package**](/how_to_start/#installing-richtext-via-npm-or-yarn) and follow steps mentioned in the README file. Note that trial RichText is available 30 days only.
  
### Step 2. Component creation

Now you need to create an Angular component, to add Richtext into the application. Create the **richtext** folder in the **src/app/** directory, add a new file into it and name it **richtext.component.ts**.

#### Import source files

Open the **richtext.component.ts** file and import RichText source files. Note that:

- if you use PRO version and install the RichText package from a local folder, the imported path looks like this:

~~~jsx
import { Richtext} from 'dhx-richtext-package';
~~~

- if you use the trial version of RichText, specify the following path:

~~~jsx
import { Richtext} from '@dhx/trial-richtext';
~~~

In this tutorial you can see how to configure the **trial** version of RichText.

#### Set containers and initialize the Richtext

To display RichText on the page, you need to set a container for RichText, and initialize the component using the corresponding constructor:

~~~jsx {1,8-11,15-18,24-31} title="Richtext.component.ts"
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

To display RichText correctly, you need to provide the corresponding styles. For this purpose, you can create the **richtext.component.css** file in the **src/app/richtext/** directory and specify important styles for RichText and its container:

~~~css title="Richtext.component.css"
/* import RichText styles */
@import "@dhx/trial-richtext/codebase/richtext.css";

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

To add data into RichText, you need to provide a data set. You can create the **data.ts** file in the **src/app/richtext/** directory and add some data into it:

~~~jsx {2-6} title="data.ts"
export function getData() {
  const value = `
    <h2>RichText 2.0</h2>
    <p>Repository at <a href="https://git.webix.io/xbs/richtext">https://git.webix.io/xbs/richtext</a></p>
    <p><img src="https://placecats.com/500/300" style="width:500px;height:300px;"></p>`;
  return { value };
}
~~~

Then open the ***richtext.component.ts*** file. Import the file with data and specify the corresponding data properties to the configuration object of RichText within the `ngOnInit()` method, as shown below:

~~~jsx {2,23,25-27} title="Richtext.component.ts"
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

You can also use the [`setValue()`](api/methods/set-value.md) method inside the `ngOnInit()` method of Angular to load data into RichText.

~~~jsx {2,23,37-42} title="Richtext.component.ts"
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

Now the RichText component is ready to use. When the element will be added to the page, it will initialize the RichText with data. You can provide necessary configuration settings as well. Visit our [RichText API docs](/category/api/) to check the full list of available properties.

#### Handling events

When a user makes some action in the RichText, it invokes an event. You can use these events to detect the action and run the desired code for it. See the [full list of events](/category/richtext-events/).

Open the **richtext.component.ts** file and complete the `ngOnInit()` method in the following way:

~~~jsx {5-7} title="Richtext.component.ts"
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

To add the ***RichTextComponent*** component into your app, open the ***src/app/app.component.ts*** file and replace the default code with the following one:

~~~jsx {5} title="app.component.ts"
import { Component } from "@angular/core";

@Component({
    selector: "app-root",
    template: `<richtext/>`
})
export class AppComponent {
    name = "";
}
~~~

Then create the ***app.module.ts*** file in the ***src/app/*** directory and specify the *RichTextComponent* as shown below:

~~~jsx {4-5,8} title="app.module.ts"
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

The last step is to open the ***src/main.ts*** file and replace the existing code with the following one:

~~~jsx title="main.ts"
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/app.module";
platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch((err) => console.error(err));
~~~

After that, you can start the app to see RichText loaded with data on a page.

<div className="img_border">
![RichText initialization](../assets/trial_richtext.png)
</div>

Now you know how to integrate DHTMLX RichText with Angular. You can customize the code according to your specific requirements. The final advanced example you can find on [**GitHub**](https://github.com/DHTMLX/angular-richtext-demo).

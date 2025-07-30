---
sidebar_label: Integration with Svelte
title: Integration with Svelte
description: You can learn about the integration with Svelte in the documentation of the DHTMLX JavaScript RichText library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX RichText.
---

# Integration with Svelte

:::tip
You should be familiar with the basic concepts and patterns of **Svelte** before reading this documentation. To refresh your knowledge, please refer to the [**Svelte documentation**](https://svelte.dev/).
:::

DHTMLX RichText is compatible with **Svelte**. We have prepared code examples on how to use DHTMLX RichText with **Svelte**. For more information, refer to the corresponding [**Example on GitHub**](https://github.com/DHTMLX/svelte-richtext-demo).

## Creating a project

:::info
Before you start to create a new project, install [**Vite**](https://vite.dev/) (optional) and [**Node.js**](https://nodejs.org/en/).
:::

There are several ways of creating a **Svelte** project:

- you can use the [**SvelteKit**](https://kit.svelte.dev/)

or

- you can also use **Svelte with Vite** (but without SvelteKit):

~~~json
npm create vite@latest
~~~

Check the details in the [related article](https://svelte.dev/docs/introduction#start-a-new-project-alternatives-to-sveltekit).

### Installation of dependencies

Let's name the project as **my-svelte-richtext-app** and go to the app directory:

~~~json
cd my-svelte-richtext-app
~~~

Install dependencies and start the dev server. For this, use a package manager:

- if you use [**yarn**](https://yarnpkg.com/), run the following commands:

~~~json
yarn
yarn start
~~~

- if you use [**npm**](https://www.npmjs.com/), run the following commands:

~~~json
npm install
npm run dev
~~~

The app should run on a localhost (for instance `http://localhost:3000`).

## Creating RichText

Now you should get the DHTMLX RichText source code. First of all, stop the app and proceed with installing the RichText package.

### Step 1. Package installation

Download the [**trial RichText package**](/how_to_start/#installing-richtext-via-npm-or-yarn) and follow steps mentioned in the README file. Note that trial RichText is available 30 days only.

### Step 2. Component creation

Now you need to create a Svelte component, to add a RichText into the application. Let's create a new file in the ***src/*** directory and name it ***Richtext.svelte***.

#### Importing source files

Open the ***Richtext.svelte*** file and import RichText source files. Note that:

- if you use PRO version and install the RichText package from a local folder, the import paths look like this:

~~~html title="Richtext.svelte"
<script>
import { Richtext} from 'dhx-richtext-package';
import 'dhx-richtext-package/dist/richtext.css';
</script>
~~~

- if you use the trial version of RichText, specify the following paths:

~~~html title="Richtext.svelte"
<script>
import { Richtext} from '@dhx/trial-richtext';
import '@dhx/trial-richtext/dist/richtext.css';
<script>
~~~

In this tutorial you can see how to configure the **trial** version of RichText.

#### Setting containers and adding RichText

To display RichText on the page, you need to create container for RichText, and initialize the component using the corresponding constructor:

~~~html {} title="Richtext.svelte"
<script>
import { onMount, onDestroy } from "svelte";
import { Richtext} from "@dhx/trial-richtext";
import "@dhx/trial-richtext/dist/richtext.css";

let richtext_container; // initialize container for RichText
let editor;

onMount(() => {
    // initialize the RichText component
    editor = new Richtext(richtext_container, {});
});

onDestroy(() => {
    editor?.destructor(); // destruct RichText
});
</script>

<div class="component_container">
    <div bind:this={richtext_container} class="widget"></div>
</div>
~~~

#### Loading data

To add data into the RichText, we need to provide a data set. You can create the ***data.js*** file in the ***src/*** directory and add some data into it:

~~~jsx {} title="data.ts"
export function getData() {
  const value = `
    <h2>RichText 2.0</h2>
    <p>Repository at <a href="https://git.webix.io/xbs/richtext">https://git.webix.io/xbs/richtext</a></p>
    <p><img src="https://placecats.com/500/300" style="width:500px;height:300px;"></p>`;
  return { value };
}
~~~

Then open the ***App.svelte*** file, import data, and pass it into the new created `<RichText/>` components as **props**:

~~~html {} title="App.svelte"
<script>
import RichText from "./Richtext.svelte";
import { getData } from "./data.js";

const { value } = getData();
</script>

<RichText value={value} />
~~~

Go to the ***Richtext.svelte*** file and apply the passed **props** to the RichText configuration object:

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
        // other configuration properties
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

You can also use the [`setValue()`](/api/methods/set-value.md) method inside the `onMount()` method of Svelte to load data into RichText:

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
        // other configuration properties
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

Now the RichText component is ready to use. When the element will be added to the page, it will initialize the RichText with data. You can provide necessary configuration settings as well. Visit our [RichText API docs](api/overview/main_overview.md) to check the full list of available properties.

#### Handling events

When a user makes some action in the RichText, it invokes an event. You can use these events to detect the action and run the desired code for it. See the [full list of events](api/overview/events_overview.md).

Open ***Richtext.svelte*** and complete the `onMount()` method in the following way:

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

### Step 3. Adding RichText into the app

To add the component into the app, open the **App.svelte** file and replace the default code with the following one:

~~~html title="App.svelte"
<script>
    import RichText from "./Richtext.svelte";
    import { getData } from "./data.js";
    
    const { value } = getData();
</script>

<RichText value={value}  />
~~~

After that, you can start the app to see RichText loaded with data on a page.

<div className="img_border">
![RichText initialization](../assets/trial_richtext.png)
</div>

Now you know how to integrate DHTMLX RichText with Svelte. You can customize the code according to your specific requirements. The final advanced example you can find on [**GitHub**](https://github.com/DHTMLX/svelte-richtext-demo).

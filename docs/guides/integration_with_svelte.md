---
sidebar_label: Integration with Svelte
title: Integration with Svelte
description: You can learn about the integration with Svelte in the documentation of the DHTMLX JavaScript RichText library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX RichText.
---

# Integration with Svelte

:::tip
Make sure you are familiar with basic [Svelte](https://svelte.dev/) concepts and patterns. For a refresher, see the [Svelte documentation](https://svelte.dev/).
:::

DHTMLX RichText works with Svelte. For a complete code example, see the [GitHub demo](https://github.com/DHTMLX/svelte-richtext-demo).

## Create a project

:::info
Install [Node.js](https://nodejs.org/en/) and (optionally) [Vite](https://vite.dev/) before creating a new project.
:::

Create a Svelte project with one of the supported scaffolders:

- [SvelteKit](https://kit.svelte.dev/) — full framework setup
- [Vite](https://vite.dev/) — minimal Svelte + Vite

For details on both options, see the [Svelte project guide](https://svelte.dev/docs/introduction#start-a-new-project-alternatives-to-sveltekit). To start a Vite-based project, run:

~~~bash
npm create vite@latest
~~~

### Install dependencies

Name the project *my-svelte-richtext-app* and switch to the app directory:

~~~bash
cd my-svelte-richtext-app
~~~

Install dependencies and start the dev server with a package manager.

For [yarn](https://yarnpkg.com/), run:

~~~bash
yarn
yarn dev
~~~

For [npm](https://www.npmjs.com/), run:

~~~bash
npm install
npm run dev
~~~

The app runs on localhost (for example, `http://localhost:3000`).

## Create RichText

Stop the app and install the RichText package.

### Step 1. Install the package

Download the [trial RichText package](/how_to_start/#installing-richtext-via-npm-or-yarn) and follow the steps in the README file. The trial license is valid for 30 days.

### Step 2. Create the component

Create a Svelte component to add RichText to the application. In the *src/* directory, create a new file named *Richtext.svelte*.

#### Import source files

Open *Richtext.svelte* and import the RichText source files.

For the PRO version installed from a local folder, use:

~~~html title="Richtext.svelte"
<script>
import { Richtext } from 'dhx-richtext-package';
import 'dhx-richtext-package/dist/richtext.css';
</script>
~~~

For the trial version, use:

~~~html title="Richtext.svelte"
<script>
import { Richtext } from '@dhx/trial-richtext';
import '@dhx/trial-richtext/dist/richtext.css';
</script>
~~~

This tutorial uses the trial version of RichText.

#### Set the container and initialize RichText

Set a container element for RichText and initialize the component inside `onMount()`. Call the [`destructor()`](api/methods/destructor.md) method inside `onDestroy()` to remove RichText when Svelte unmounts the component:

~~~html {} title="Richtext.svelte"
<script>
import { onMount, onDestroy } from "svelte";
import { Richtext } from "@dhx/trial-richtext";
import "@dhx/trial-richtext/dist/richtext.css";

let richtext_container; // container for RichText
let editor;

onMount(() => {
    // initialize the RichText component
    editor = new Richtext(richtext_container, {});
});

onDestroy(() => {
    editor?.destructor(); // destroy RichText
});
</script>

<div class="component_container">
    <div bind:this={richtext_container} class="widget"></div>
</div>
~~~

#### Add styles

Provide the required styles for RichText. Add the styles to the main CSS file of the project (for example, *src/app.css*):

~~~css title="app.css"
/* base page styles */
html,
body {
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

Provide data for RichText. Create the *data.js* file in the *src/* directory:

~~~jsx {} title="data.js"
export function getData() {
  const value = `
    <h2>RichText 2.0</h2>
    <p>Repository at <a href="https://git.webix.io/xbs/richtext">https://git.webix.io/xbs/richtext</a></p>
    <p><img src="https://placecats.com/500/300" style="width:500px;height:300px;"></p>`;
  return { value };
}
~~~

Open *App.svelte*, import the data, and pass the value to the `<RichText/>` component as a prop:

~~~html {} title="App.svelte"
<script>
import RichText from "./Richtext.svelte";
import { getData } from "./data.js";

const { value } = getData();
</script>

<RichText value={value} />
~~~

Open *Richtext.svelte* and pass the prop value to the RichText configuration:

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
        value
        // other configuration properties
    });
});

onDestroy(() => {
    editor?.destructor(); 
});
</script>

<div class="component_container">
    <div bind:this={richtext_container} class="widget"></div>
</div>
~~~

Alternatively, call the [`setValue()`](api/methods/set-value.md) method inside `onMount()` to load data into RichText:

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
    });

    editor.setValue(value);
});

onDestroy(() => {
    editor?.destructor(); 
});
</script>

<div class="component_container">
    <div bind:this={richtext_container} class="widget"></div>
</div>
~~~

The RichText component is ready to use. Svelte renders the editor with data when the `<RichText/>` element mounts. For the full list of configuration options, see the [RichText API overview](api/overview/main_overview.md).

#### Handle events

RichText fires events on user actions. Subscribe to events with the [`api.on()`](api/internal/on.md) method to react to user input. See the [full list of events](api/overview/events_overview.md).

Open *Richtext.svelte* and update the `onMount()` hook. The example below logs a message on every [`print`](api/events/print.md) event:

~~~html {} title="Richtext.svelte"
<script>
// ...
let editor;

onMount(() => {
    editor = new Richtext(richtext_container, {});

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

Start the app to see RichText render with data on the page.

<div className="img_border">
![RichText initialization](../assets/trial_richtext.png)
</div>

You now have a working RichText integration in Svelte. Customize the code to fit your needs. A full advanced example is available on [GitHub](https://github.com/DHTMLX/svelte-richtext-demo).

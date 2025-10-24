---
sidebar_label: Integration with Svelte
title: Integration with Svelte
description: You can learn about the integration with Svelte in the documentation of the DHTMLX JavaScript RichText library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX RichText.
---

# Integration with Svelte

:::tip
It's helpful to already know the basics of **Svelte** for this guide. If you need a quick refresher, check out the [**Svelte documentation**](https://svelte.dev/).
:::

DHTMLX RichText works well with **Svelte**. There are some handy code examples showing how to use DHTMLX RichText in Svelte apps. More details and examples are available in the [**Example on GitHub**](https://github.com/DHTMLX/svelte-richtext-demo).

## Creating a project

:::info
Before starting a new project, make sure you have [**Vite**](https://vite.dev/) (optional) and [**Node.js**](https://nodejs.org/en/) installed.
:::

There are a couple of ways to set up a **Svelte** project:

- Use [**SvelteKit**](https://kit.svelte.dev/)

or

- Go with **Svelte and Vite** (without SvelteKit):

~~~json
npm create vite@latest
~~~

You can find more details in this [related article](https://svelte.dev/docs/introduction#start-a-new-project-alternatives-to-sveltekit).

### Installation of dependencies

Let's call the project **my-svelte-richtext-app** and move into its directory:

~~~json
cd my-svelte-richtext-app
~~~

Next, install the dependencies and start the development server using your package manager of choice:

- For [**yarn**](https://yarnpkg.com/):

~~~json
yarn
yarn start
~~~

- For [**npm**](https://www.npmjs.com/):

~~~json
npm install
npm run dev
~~~

The app should now be running locally (for example, at `http://localhost:3000`).

## Creating RichText

You'll need the DHTMLX RichText source code. Before going further, stop the app and install the RichText package.

### Step 1. Package installation

Download the [**trial RichText package**](how_to_start.md#installing-richtext-via-npm-or-yarn) and follow the steps in the README file. The trial version works for 30 days.

### Step 2. Component creation

Now it's time to make a Svelte component for RichText. In the ***src/*** directory, create a new file called ***Richtext.svelte***.

#### Importing source files

In ***Richtext.svelte***, import the RichText source files. Here's how the imports look depending on your version:

- For the PRO version installed locally, use these paths:

~~~html title="Richtext.svelte"
<script>
import { Richtext} from 'dhx-richtext-package';
import 'dhx-richtext-package/dist/richtext.css';
</script>
~~~

- For the trial version, use these imports:

~~~html title="Richtext.svelte"
<script>
import { Richtext} from '@dhx/trial-richtext';
import '@dhx/trial-richtext/dist/richtext.css';
<script>
~~~

This guide uses the **trial** version as an example.

#### Setting containers and adding RichText

To show RichText in your app, set up a container and initialize the component with its constructor:

~~~html {} title="Richtext.svelte"
<script>
import { onMount, onDestroy } from "svelte";
import { Richtext} from "@dhx/trial-richtext";
import "@dhx/trial-richtext/dist/richtext.css";

let richtext_container; // container for RichText
let editor;

onMount(() => {
    // initialize the RichText component
    editor = new Richtext(richtext_container, {});
});

onDestroy(() => {
    editor?.destructor(); // clean up RichText
});
</script>

<div class="component_container">
    <div bind:this={richtext_container} class="widget"></div>
</div>
~~~

#### Loading data

To load data into RichText, you'll need a data set. Create a ***data.js*** file in the ***src/*** directory and add some sample data:

~~~jsx {} title="data.ts"
export function getData() {
  const value = `
    <h2>RichText 2.0</h2>
    <p>Repository at <a href="https://git.webix.io/xbs/richtext">https://git.webix.io/xbs/richtext</a></p>
    <p><img src="https://placecats.com/500/300" style="width:500px;height:300px;"></p>`;
  return { value };
}
~~~

Then, in ***App.svelte***, import the data and pass it as a prop to your `<RichText/>` component:

~~~html {} title="App.svelte"
<script>
import RichText from "./Richtext.svelte";
import { getData } from "./data.js";

const { value } = getData();
</script>

<RichText value={value} />
~~~

Now, update ***Richtext.svelte*** to use the passed **props** in the RichText configuration:

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

Alternatively, you can use the [`setValue()`](api/methods/set-value.md) method within Svelte's `onMount()` to load the data:

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

At this point, the RichText component is set up and will load with your data when added to the page. You can tweak the configuration as needed. For more options, check out the [RichText API docs](api/overview/main_overview.md).

#### Handling events

RichText emits events when actions happen, and you can listen to these to run your own code. The [full list of events](api/overview/events_overview.md) is available for reference.

To handle events, update ***Richtext.svelte*** like this in the `onMount()` method:

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

To use the component in your app, open **App.svelte** and replace the default content with:

~~~html title="App.svelte"
<script>
    import RichText from "./Richtext.svelte";
    import { getData } from "./data.js";
    
    const { value } = getData();
</script>

<RichText value={value}  />
~~~

Now, start up the app and you'll see RichText loaded with your data on the page.

import trial_richtext from '@site/static/img/trial_richtext.png';

<img
  src={trial_richtext}
  alt="Trial richtext"
  className="img_border"
/>

That's all there is to integrating DHTMLX RichText with Svelte. Feel free to adjust the code to fit your needs. If you want to check out a more advanced example, it's available on [**GitHub**](https://github.com/DHTMLX/svelte-richtext-demo).

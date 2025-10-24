---
sidebar_label: Integration with Vue
title: Integration with Vue
description: You can learn about the integration with Vue in the documentation of the DHTMLX JavaScript RichText library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX RichText.
---

# Integration with Vue

:::tip
It's helpful to have a basic understanding of [**Vue**](https://vuejs.org/) before diving into this documentation. If you need a refresher, check out the [**Vue 3 documentation**](https://vuejs.org/guide/introduction.html#getting-started).
:::

DHTMLX RichText works well with **Vue**. There are code samples available that show how to use DHTMLX RichText with **Vue 3**. For more details, take a look at the [**Example on GitHub**](https://github.com/DHTMLX/vue-richtext-demo).

## Creating a project

:::info
Before starting a new project, make sure [**Node.js**](https://nodejs.org/en/) is installed.
:::

To set up a **Vue** project, use this command:

~~~json
npm create vue@latest
~~~

This runs `create-vue`, the official tool for scaffolding **Vue** projects. More info is available in the [Vue.js Quick Start](https://vuejs.org/guide/quick-start.html#creating-a-vue-application).

For this guide, the project will be called **my-vue-richtext-app**.

### Installation of dependencies

Switch into the app directory:

~~~json
cd my-vue-richtext-app
~~~

Install dependencies and start the development server using your preferred package manager:

- For [**yarn**](https://yarnpkg.com/):

~~~jsx
yarn
yarn start // or yarn dev
~~~

- For [**npm**](https://www.npmjs.com/):

~~~json
npm install
npm run dev
~~~

The app should be available on your localhost (for example, `http://localhost:3000`).

## Creating RichText

Next, you'll need the DHTMLX RichText source code. Stop the app for now and install the RichText package.

### Step 1. Package installation

Download the [**trial RichText package**](how_to_start.md/#installing-richtext-via-npm-or-yarn) and follow the instructions in the README file. The trial version is available for 30 days.

### Step 2. Component creation

Create a Vue component to add RichText to your app. Make a new file in the ***src/components/*** directory and name it ***Richtext.vue***.

#### Import source files

Open ***Richtext.vue*** and import the RichText source files. Keep in mind:

- If you're using the PRO version and installed RichText from a local folder, your imports should look like this:

~~~html title="Richtext.vue"
<script>
import { Richtext} from 'dhx-richtext-package';
import 'dhx-richtext-package/dist/richtext.css';
</script>
~~~

- For the trial version, the imports are:

~~~html title="Richtext.vue"
<script>
import { Richtext} from '@dhx/trial-richtext';
import '@dhx/trial-richtext/dist/richtext.css';
</script>
~~~

This tutorial shows how to set up the **trial** version of RichText.

#### Setting containers and adding Richtext

To show RichText on the page, set up a container and initialize the component with its constructor:

~~~html {} title="Richtext.vue"
<script>
import { Richtext} from "@dhx/trial-richtext";
import "@dhx/trial-richtext/dist/richtext.css";

export default {
    mounted() {
        // initialize the RichText component
        this.editor = new Richtext(this.$refs.richtext_container, {});
    },

    unmounted() {
        this.editor.destructor(); // destruct RichText
    }
};
</script>

<template>
    <div class="component_container">
        <div ref="richtext_container" class="widget"></div>
    </div>
</template>
~~~

#### Adding styles

To make sure RichText displays properly, add some key styles for RichText and its container in your main CSS file:

~~~css title="main.css"
/* specify styles for initial page */
html,
body,
#app { /* make sure that you use the #app root container */
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

To load data into RichText, create a data set. You can add a ***data.js*** file in the ***src/*** directory with something like:

~~~jsx {} title="data.ts"
export function getData() {
  const value = `
    <h2>RichText 2.0</h2>
    <p>Repository at <a href="https://git.webix.io/xbs/richtext">https://git.webix.io/xbs/richtext</a></p>
    <p><img src="https://placecats.com/500/300" style="width:500px;height:300px;"></p>`;
  return { value };
}
~~~

Then, in ***App.vue***, import the data and initialize it with the `data()` method. Pass the data to the `<RichText/>` component as **props**:

~~~html {} title="App.vue"
<script>
import RichText from "./components/Richtext.vue";
import { getData } from "./data";

export default {
    components: { RichText },
    data() {
        const { value } = getData();
        return { value };
    }
};
</script>

<template>
    <RichText :value="value" />
</template>
~~~

Now, go back to ***Richtext.vue*** and use the **props** in the RichText configuration:

~~~html {} title="Richtext.vue"
<script>
import { Richtext} from "@dhx/trial-richtext";
import "@dhx/trial-richtext/dist/richtext.css";

export default {
    props: ["value"],

    mounted() {
        this.editor = new Richtext(this.$refs.richtext_container, {
            value: this.value,
            // other configuration properties
        });
    },

    unmounted() {
        this.editor.destructor(); 
    }
};
</script>

<template>
    <div class="component_container">
        <div ref="richtext_container" class="widget"></div>
    </div>
</template>
~~~

Alternatively, you can use the [`setValue()`](api/methods/set-value.md) method inside the `mounted()` hook to load data into RichText:

~~~html {} title="Richtext.vue"
<script>
import { Richtext} from "@dhx/trial-richtext";
import "@dhx/trial-richtext/dist/richtext.css";

export default {
    props: ["value"],

    mounted() {
        this.editor = new Richtext(this.$refs.richtext_container, {
            // other configuration properties
        });

        this.editor.setValue(this.value);
    },

    unmounted() {
        this.editor.destructor(); 
    }
};
</script>

<template>
    <div class="component_container">
        <div ref="richtext_container" class="widget"></div>
    </div>
</template>
~~~

At this point, the RichText component is set up and ready. When it's added to the page, it will initialize RichText with your data. You can adjust the configuration as needed. The full list of available properties is in the [RichText API docs](api/overview/main_overview.md).

#### Handling events

When actions happen in RichText, events are triggered. These are useful for running custom code in response. The [full list of events](api/overview/events_overview.md) has more details.

In ***Richtext.vue***, you can update the `mounted()` method to handle events:

~~~html {} title="Richtext.vue"
<script>
// ...
export default {
    // ...
    mounted() {
        this.editor = new Richtext(this.$refs.cont, {});

        this.editor.api.on("print", () => {
            console.log("The document is printing");
        });
    },

    unmounted() {
        this.editor.destructor();
    }
}
</script>

// ...
~~~

Now, start the app and you'll see RichText with your data on the page.

<div className="img_border">
![RichText initialization](../assets/trial_richtext.png)
</div>

That's how DHTMLX RichText can be integrated with Vue. Feel free to tweak the code to fit your needs. For a more advanced example, check out [**GitHub**](https://github.com/DHTMLX/vue-richtext-demo).
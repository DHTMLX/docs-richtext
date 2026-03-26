---
sidebar_label: Integration with Vue
title: Integration with Vue
description: You can learn about the integration with Vue in the documentation of the DHTMLX JavaScript RichText library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX RichText.
---

# Integration with Vue

:::tip
You should be familiar with the basic concepts and patterns of [**Vue**](https://vuejs.org/) before reading this documentation. To refresh your knowledge, please refer to the [**Vue 3 documentation**](https://vuejs.org/guide/introduction.html#getting-started).
:::

DHTMLX RichText is compatible with **Vue**. We have prepared code examples on how to use DHTMLX RichText with **Vue 3**. For more information, refer to the corresponding [**Example on GitHub**](https://github.com/DHTMLX/vue-richtext-demo).

## Creating a project

:::info
Before you start to create a new project, install [**Node.js**](https://nodejs.org/en/).
:::

To create a **Vue** project, run the following command:

~~~json
npm create vue@latest
~~~

This command installs and executes `create-vue`, the official **Vue** project scaffolding tool. Check the details in the [Vue.js Quick Start](https://vuejs.org/guide/quick-start.html#creating-a-vue-application).

Let's name the project as **my-vue-richtext-app**.

### Installation of dependencies

Go to the app directory:

~~~json
cd my-vue-richtext-app
~~~

Install dependencies and start the dev server. For this, use a package manager:

- if you use [**yarn**](https://yarnpkg.com/), run the following commands:

~~~jsx
yarn
yarn start // or yarn dev
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

Now you need to create a Vue component, to add RichText into the application. Create a new file in the ***src/components/*** directory and name it ***Richtext.vue***.

#### Import source files

Open the ***Richtext.vue*** file and import RichText source files. Note that:

- if you use PRO version and install the RichText package from a local folder, the import paths look like this:

~~~html title="Richtext.vue"
<script>
import { Richtext} from 'dhx-richtext-package';
import 'dhx-richtext-package/dist/richtext.css';
</script>
~~~

- if you use the trial version of RichText, specify the following paths:

~~~html title="Richtext.vue"
<script>
import { Richtext} from '@dhx/trial-richtext';
import '@dhx/trial-richtext/dist/richtext.css';
</script>
~~~

In this tutorial you can see how to configure the **trial** version of RichText.

#### Setting containers and adding Richtext

To display Richtext on the page, you need to create a container for RichText and initialize the component using the corresponding constructor:

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

To display RichText correctly, you need to specify important styles for RichText and its container in the main css file of the project:

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

To add data into the RichText, you need to provide a data set. You can create the ***data.js*** file in the ***src/*** directory and add some data into it:

~~~jsx {} title="data.js"
export function getData() {
  const value = `
    <h2>RichText 2.0</h2>
    <p>Repository at <a href="https://git.webix.io/xbs/richtext">https://git.webix.io/xbs/richtext</a></p>
    <p><img src="https://placecats.com/500/300" style="width:500px;height:300px;"></p>`;
  return { value };
}
~~~

Then open the ***App.vue*** file, import data, and initialize it via the inner `data()` method. After this you can pass data into the new created `<RichText/>` component as **props**:

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

Go to the ***Richtext.vue*** file and apply the passed **props** to the RichText configuration object:

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

You can also use the [`setValue()`](api/methods/set-value.md) method inside the `mounted()` method of Vue to load data into RichText:

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

Now the RichText component is ready to use. When the element will be added to the page, it will initialize the RichText with data. You can provide necessary configuration settings as well. Visit our [RichText API docs](api/overview/main_overview.md) to check the full list of available properties.

#### Handling events

When a user makes some action in the RichText, it invokes an event. You can use these events to detect the action and run the desired code for it. See the [full list of events](api/overview/events_overview.md).

Open ***Richtext.vue*** and complete the `mounted()` method:

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

After that, you can start the app to see RichText loaded with data on a page.

<div className="img_border">
![RichText initialization](../assets/trial_richtext.png)
</div>

Now you know how to integrate DHTMLX RichText with Vue. You can customize the code according to your specific requirements. The final advanced example you can find on [**GitHub**](https://github.com/DHTMLX/vue-richtext-demo).

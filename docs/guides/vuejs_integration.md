---
sidebar_label: Integration with Vue
title: Integration with Vue.js
description: This guide provides explanations on possible ways of adding and initializing DHTMLX Rich Text Editor in Vue-based web apps.
---

# Integration with Vue

You can use DHTMLX RichText in an application created with the [Vue.js](https://vuejs.org/) framework. [Check the demo on Github](https://github.com/DHTMLX/vuejs-widgets).

:::note
Note, that the implementation provided below is not the only way to use DHTMLX RichText in a Vue.js-based application. It gives you initial schema of integration and implies further extension of the app functionality depending on your goals.
:::

## Including source files

To add RichText package into your Vue.js-based app you need to [download the component package](https://dhtmlx.com/docs/products/dhtmlxRichText/download.shtml) and unpack it into a folder of your project.

Then include ***richtext.js*** and ***richtext.css*** files into a page.
Make sure that you set correct relative paths to these files:

~~~html title="index.html"
<script type="text/javascript" src="codebase/richtext.js"></script>  
<link rel="stylesheet" href="codebase/richtext.css">
~~~

## Initialization

There are two possible scenarios of initializing RichText inside a Vue application. One consists in isolating RichText structure and data inside of the Vue component and another one suggests 
separating view and data parts with the possibility of interaction between them.

### Scenario 1. Isolating RichText in a Vue component

In this variant RichText configuration and data are held inside of the Vie component with no bonds with the external part of the application.

#### RichText initialization

- Create a `RichText.vue` file and add a container for RichText inside the `<template></template>` tags. Define the name of the container in the `ref` attribute:

~~~jsx title="RichText.vue"
<template>
      <div ref="container" class="widget-box"></div>
</template>
~~~

- Define the JS part of the Vue component and use the `new Richtext` constructor to initialize RichText inside of the container that you've set above: 

~~~jsx title="RichText.vue"
<script>
export default {
    mounted: function() {
        this.richtext = new Richtext(this.$refs.container, {
              toolbarBlocks: ["default", "clear", "fullscreen"]
        });
    }
};
</script>
~~~

#### Changing config

- Next you can do some actions, e.g. add a new control into the Toolbar:

~~~jsx title="RichText.vue"
<script>
export default {
    mounted: function() {
        this.richtext = new Richtext(this.$refs.container, {
              toolbarBlocks: ["default", "clear", "fullscreen"]
        });
        this.richtext.toolbar.data.add({
            value:"MyAction"
        });
    }
};
</script>
~~~

### Scenario 2. Exposing RichText data and config 

This variant adds flexibility in the control over RichText data and configuration by allowing access to them from other parts of the application.

#### RichText initialization

- The first step is the same. Create a file, let it be `RichText2.vue` this time, and add a container for the RichText inside the `<template></template>` tags:

~~~jsx title="RichText.vue"
<template>
    <div ref="container" class="widget-box"></div>
</template>
~~~

- Then initialize RichText with the `new Richtext` constructor and define the configuration properties of RichText in the object passed as a second parameter of the constructor:

~~~jsx title="RichText.vue"
<script>
export default {
    mounted: function() {
        this.richtext = new Richtext(this.$refs.container, {
            mode: this.mode,
            css: this.css
        });
    }
};
</script>
~~~

#### Working with configuration options

- Set the list of used RichText configuration properties and their types in the `props` configuration option:

~~~jsx title="RichText.vue"
<script>
export default {
    props: {
        css: String,
        mode: {type: String, default: "classic"},
        value: String,
        dataType: {type: String, default: "html"}
    },
    mounted: function() {
        this.richtext = new Richtext(this.$refs.container, {
            mode: this.mode,
            css: this.css
        });
    }
};
</script>
~~~

The properties of RichText are exposed and available to work with outside the component. For example, you can:

- Create another file and change the configuration of RichText from there. In the example below the mode of a RichText id changed to "document":

~~~jsx title="BasicSample.vue"
<template>
<div class='app-box'>
    <RichText mode="document"></RichText>
</div>
</template>
~~~

#### Working with RichText API

This variant of using RichText in a Vue.js application allows working with its API moving all calls of methods and event handlers into a separate file.

First, you can add a couple of wrappers for convenient work with RichText API. The example below shows how you can wrap actions for setting RichText value and handling the `change` event taking into account the type of data:

~~~jsx title="RichText2.vue"
export default {
    props: {
        css: String,
        mode: {type: String, default: "classic"},
        value: String,
        dataType: {type: String, default: "html"}
    },
    mounted: function() {
        this.richtext = new Richtext(this.$refs.container, {
            mode: this.mode,
            css: this.css
        });
        if (this.value) {
            this.richtext.setValue(this.value, this.dataType);
        }
        this.richtext.events.on("change", () => {
            this.$emit("change", this.richtext.getValue(this.dataType));
        });
    }
}
~~~

After that you can use the ready wrappers in other parts of application.

- Create a `DataSample.vue` file and describe the methods you want to use while working with the RichText. In the example below the `updateMarkdown` and `updateHTML` methods are added for updating the the content of the RichText editor:

~~~jsx title="DataSample.vue"
<script>
import RichText from "./RichText.vue";
export default {
    components: {
        RichText
    },
    methods: {
        updateHTML(val) {
            this.html = val;
        },
        updateMarkdown(val) {
            this.markdown = val;
        }
    }
}
</script>
~~~

- Use the above methods to update the RichText content depending on the type of entered data when some changes are made:

~~~jsx title="DataSample.vue"
<template>
    <div class='app-box'>
        <p>HTML serialize</p>
        <RichText :value="html" v-on:change="updateHTML"></RichText>
        <p>Markdown serialize</p>
        <RichText :value="markdown" dataType=markdown 
            v-on:change="updateMarkdown"></RichText>
    </div>
</template>
~~~

---
sidebar_label: Integration with React
title: Integration with React
description: You can learn about the integration with React in the documentation of the DHTMLX JavaScript RichText library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX RichText.
---

# Integration with React

:::tip
You should be familiar with the basic concepts and patterns of [**React**](https://react.dev) before reading this documentation. To refresh your knowledge, please refer to the [**React documentation**](https://reactjs.org/docs/getting-started.html).
:::

DHTMLX RichText is compatible with **React**. We have prepared code examples on how to use DHTMLX RichText with **React**. For more information, refer to the corresponding [**Example on GitHub**](https://github.com/DHTMLX/react-richtext-demo).

## Creating a project

:::info
Before you start to create a new project, install [**Vite**](https://vite.dev/) (optional) and [**Node.js**](https://nodejs.org/en/).
:::

You can create a basic **React** project or use **React with Vite**. Let's name the project as **my-react-richtext-app**:

~~~json
npx create-react-app my-react-richtext-app
~~~

### Installation of dependencies

Go to the new created app directory:

~~~json
cd my-react-richtext-app
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

Now you need to create a React component, to add a RichText into the application. Create a new file in the ***src/*** directory and name it ***Richtext.jsx***.

#### Importing source files

Open the ***Richtext.jsx*** file and import RichText source files. Note that:

- if you use PRO version and install the RichText package from a local folder, the import paths look like this:

~~~jsx title="Richtext.jsx"
import { Richtext} from 'dhx-richtext-package';
import 'dhx-richtext-package/codebase/richtext.css';
~~~

Note that depending on the used package, the source files can be minified. In this case make sure that you are importing the CSS file as ***richtext.min.css***.

- if you use the trial version of RichText, specify the following paths:

~~~jsx title="Richtext.jsx"
import { Richtext} from '@dhx/trial-richtext';
import "@dhx/trial-richtext/codebase/richtext.css";
~~~

In this tutorial you can see how to configure the **trial** version of RichText.

#### Setting containers and adding Richtext

To display RichText on the page, you need to create container for RichText and initialize the component using the corresponding constructors:

~~~jsx {} title="Richtext.jsx"
import { useEffect, useRef } from "react";
import { Richtext} from '@dhx/trial-richtext';
import '@dhx/trial-richtext/codebase/richtext.css'; // include RichText styles

export default function RichTextComponent(props) {
    let richtext_container = useRef(); // initialize container for RichText

    useEffect(() => {
        // initialize the RichText component
        const editor = new Richtext(richtext_container.current, {});

        return () => {
            editor.destructor(); // destruct RichText
        };
    }, []);

    return  <div className="component_container">
                <div ref={richtext_container} className="widget"></div>
            </div>
}
~~~

#### Adding styles

To display RichText correctly, you need to specify important styles for RichText and its container in the main css file of the project:

~~~css title="index.css"
/* specify styles for initial page */
html,
body,
#root {
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

Then open the ***App.js*** file and import data. After this you can pass data into the new created `<RichText/>` components as **props**:

~~~jsx {2,5-6} title="App.js"
import RichText from "./Richtext";
import { getData } from "./data";

function App() {
    const { value } = getData();
    return <RichText value={value} />;
}

export default App;
~~~

Go to the ***Richtext.jsx*** file and apply the passed **props** to the RichText configuration object:

~~~jsx {} title="Richtext.jsx"
import { useEffect, useRef } from "react";
import { Richtext} from "@dhx/trial-richtext";
import "@dhx/trial-richtext/codebase/richtext.css";

export default function RichTextComponent(props) {
    let richtext_container = useRef();

    useEffect(() => {
        const editor = new Richtext(richtext_container.current, {
            value: props.value, // apply value
            // other configuration properties
        });

        return () => {
            editor.destructor();
        };
    }, []);

    return  <div className="component_container">
                <div ref={richtext_container} className="widget"></div>
            </div>
}
~~~

You can also use the [`setValue()`](api/methods/set-value.md) method inside the `useEffect()` method of React to load data into RichText:

~~~jsx {} title="Richtext.jsx"
import { useEffect, useRef } from "react";
import { Richtext} from "@dhx/trial-richtext";
import "@dhx/trial-richtext/codebase/richtext.css";

export default function RichTextComponent(props) {
    let richtext_container = useRef();

    let value = props.value;

    useEffect(() => {
        const editor = new Richtext(richtext_container.current, {
            // configuration properties
        });
    
        editor.setValue(value);

        return () => {
            editor.destructor();
        };
    }, []);

    return  <div className="component_container">
                <div ref={richtext_container} className="widget"></div>
            </div>
}
~~~

Now the RichText component is ready. When the element will be added to the page, it will initialize the RichText with data. You can provide necessary configuration settings as well. Visit our [RichText API docs](/category/api/) to check the full list of available properties.

#### Handling events

When a user makes some action in the RichText, it invokes an event. You can use these events to detect the action and run the desired code for it. See the [full list of events](/category/richtext-events/).

Open ***Richtext.jsx*** and complete the `useEffect()` method in the following way:

~~~jsx {} title="Richtext.jsx"
// ...
useEffect(() => {
    const editor = new Richtext(richtext_container.current, {});

    editor.api.on("print", () => {
        console.log("The document is printing");
    });
    
    return () => {
        editor.destructor();
    };
}, []);
// ...
~~~

After that, you can start the app to see RichText loaded with data on a page.

<div className="img_border">
![RichText initialization](../assets/trial_richtext.png)
</div>

Now you know how to integrate DHTMLX RichText with React. You can customize the code according to your specific requirements. The final advanced example you can find on [**GitHub**](https://github.com/DHTMLX/react-richtext-demo).

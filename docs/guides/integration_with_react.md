---
sidebar_label: Integration with React
title: Integration with React
description: You can learn about the integration with React in the documentation of the DHTMLX JavaScript RichText library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX RichText.
---

# Integration with React

:::tip
You should be familiar with the basic concepts and patterns of [**React**](https://react.dev) before reading this documentation. To refresh your knowledge, please refer to the [**React documentation**](https://react.dev/learn).
:::

DHTMLX RichText is compatible with **React**. You can find code examples for using DHTMLX RichText with React in the [**Example on GitHub**](https://github.com/DHTMLX/react-richtext-demo).

## Creating a project

:::info
Before you start to create a new project, install [**Vite**](https://vite.dev/) (optional) and [**Node.js**](https://nodejs.org/en/).
:::

Create a basic **React** project or use **React with Vite**. The following command creates a project named **my-react-richtext-app**:

~~~json
npx create-react-app my-react-richtext-app
~~~

### Install dependencies

Go to the newly created app directory:

~~~json
cd my-react-richtext-app
~~~

Use a package manager to install dependencies and start the dev server:

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

The app runs on a localhost port, for example `http://localhost:3000`.

## Creating RichText

Get the DHTMLX RichText source code. Stop the app and install the RichText package.

### Step 1. Package installation

Download the [**trial RichText package**](/how_to_start/#installing-richtext-via-npm-or-yarn) and follow steps mentioned in the README file. Note that trial RichText is available 30 days only.

### Step 2. Component creation

Create a React component to add RichText to the application. Create a new file in **src/** and name it **Richtext.jsx**.

#### Import source files

Open the ***Richtext.jsx*** file and import RichText source files. Note that:

- if you use PRO version and install the RichText package from a local folder, the import paths look like this:

~~~jsx title="Richtext.jsx"
import { Richtext} from 'dhx-richtext-package';
import 'dhx-richtext-package/dist/richtext.css';
~~~

- if you use the trial version of RichText, specify the following paths:

~~~jsx title="Richtext.jsx"
import { Richtext} from '@dhx/trial-richtext';
import "@dhx/trial-richtext/dist/richtext.css";
~~~

This tutorial uses the **trial** version of RichText.

#### Set containers and add RichText

Create a container for RichText and initialize the component:

~~~jsx {} title="Richtext.jsx"
import { useEffect, useRef } from "react";
import { Richtext} from '@dhx/trial-richtext';
import '@dhx/trial-richtext/dist/richtext.css'; // include RichText styles

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

#### Add styles

Specify styles for RichText and its container in the main CSS file of the project:

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

#### Load data

To add data to RichText, create a data set. Create the **data.js** file in **src/** and add the initial content:

~~~jsx {} title="data.js"
export function getData() {
  const value = `
    <h2>RichText 2.0</h2>
    <p>Repository at <a href="https://git.webix.io/xbs/richtext">https://git.webix.io/xbs/richtext</a></p>
    <p><img src="https://placecats.com/500/300" style="width:500px;height:300px;"></p>`;
  return { value };
}
~~~

Open **App.js**, import data, and pass it to the `<RichText/>` component as props:

~~~jsx {2,5-6} title="App.js"
import RichText from "./Richtext";
import { getData } from "./data";

function App() {
    const { value } = getData();
    return <RichText value={value} />;
}

export default App;
~~~

Open **Richtext.jsx** and apply the props to the RichText configuration object:

~~~jsx {} title="Richtext.jsx"
import { useEffect, useRef } from "react";
import { Richtext} from "@dhx/trial-richtext";
import "@dhx/trial-richtext/dist/richtext.css";

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

You can also use the [`setValue()`](api/methods/set-value.md) method inside `useEffect()` to load data into RichText:

~~~jsx {} title="Richtext.jsx"
import { useEffect, useRef } from "react";
import { Richtext} from "@dhx/trial-richtext";
import "@dhx/trial-richtext/dist/richtext.css";

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

The RichText component is ready. When the element is added to the page, it initializes RichText with data. You can also provide configuration settings — see the [RichText API docs](api/overview/main_overview.md) for the full list of available properties.

#### Handle events

When a user performs an action in RichText, it fires an event. Use these events to detect the action and run the desired code. See the [full list of events](api/overview/events_overview.md).

Open **Richtext.jsx** and update `useEffect()`:

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

Start the app to see RichText loaded with data on a page.

<div className="img_border">
![RichText initialization](../assets/trial_richtext.png)
</div>

You know how to integrate DHTMLX RichText with React. Customize the code according to your requirements. Find the final advanced example on [**GitHub**](https://github.com/DHTMLX/react-richtext-demo).

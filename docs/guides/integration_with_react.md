---
sidebar_label: Integration with React
title: Integration with React
description: You can learn about the integration with React in the documentation of the DHTMLX JavaScript RichText library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX RichText.
---

# Integration with React

:::tip
Make sure you are familiar with basic [React](https://react.dev) concepts and patterns. For a refresher, see the [React documentation](https://react.dev/learn).
:::

DHTMLX RichText works with React. For a complete code example, see the [GitHub demo](https://github.com/DHTMLX/react-richtext-demo).

## Create a project

:::info
Install [Node.js](https://nodejs.org/en/) and (optionally) [Vite](https://vite.dev/) before creating a new project.
:::

Create a new *my-react-richtext-app* project with Create React App:

~~~bash
npx create-react-app my-react-richtext-app
~~~

### Install dependencies

Switch to the new app directory:

~~~bash
cd my-react-richtext-app
~~~

Install dependencies and start the dev server with a package manager.

For [yarn](https://yarnpkg.com/), run:

~~~bash
yarn
yarn start
~~~

For [npm](https://www.npmjs.com/), run:

~~~bash
npm install
npm start
~~~

The app runs on localhost (for example, `http://localhost:3000`).

## Create RichText

Stop the app and install the RichText package.

### Step 1. Install the package

Download the [trial RichText package](/how_to_start/#installing-richtext-via-npm-or-yarn) and follow the steps in the README file. The trial license is valid for 30 days.

### Step 2. Create the component

Create a React component to add RichText to the application. In the *src/* directory, create a new file named *Richtext.jsx*.

#### Import source files

Open *Richtext.jsx* and import the RichText source files.

For the PRO version installed from a local folder, use:

~~~jsx title="Richtext.jsx"
import { Richtext } from 'dhx-richtext-package';
import 'dhx-richtext-package/dist/richtext.css';
~~~

For the trial version, use:

~~~jsx title="Richtext.jsx"
import { Richtext } from '@dhx/trial-richtext';
import "@dhx/trial-richtext/dist/richtext.css";
~~~

This tutorial uses the trial version of RichText.

#### Set the container and initialize RichText

Set a container element for RichText and initialize the component with the `Richtext` constructor inside `useEffect()`. Call the [`destructor()`](api/methods/destructor.md) method in the cleanup function to remove RichText:

~~~jsx {} title="Richtext.jsx"
import { useEffect, useRef } from "react";
import { Richtext } from '@dhx/trial-richtext';
import '@dhx/trial-richtext/dist/richtext.css'; // include RichText styles

export default function RichTextComponent(props) {
    let richtext_container = useRef(); // container for RichText

    useEffect(() => {
        // initialize the RichText component
        const editor = new Richtext(richtext_container.current, {});

        return () => {
            editor.destructor(); // destroy RichText
        };
    }, []);

    return  <div className="component_container">
                <div ref={richtext_container} className="widget"></div>
            </div>
}
~~~

#### Add styles

Add the styles for RichText and its container to the main CSS file of the project:

~~~css title="index.css"
/* base page styles */
html,
body,
#root {
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

Open *App.js* and import the data. Pass the value to the `<RichText/>` component as a prop:

~~~jsx {2,5-6} title="App.js"
import RichText from "./Richtext";
import { getData } from "./data";

function App() {
    const { value } = getData();
    return <RichText value={value} />;
}

export default App;
~~~

Open *Richtext.jsx* and pass `props.value` to the RichText configuration:

~~~jsx {} title="Richtext.jsx"
import { useEffect, useRef } from "react";
import { Richtext } from "@dhx/trial-richtext";
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

Alternatively, call the [`setValue()`](api/methods/set-value.md) method inside `useEffect()` to load data into RichText:

~~~jsx {} title="Richtext.jsx"
import { useEffect, useRef } from "react";
import { Richtext } from "@dhx/trial-richtext";
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

The RichText component is ready to use. React renders the editor with data when the `<RichText/>` element mounts. For the full list of configuration options, see the [RichText API overview](api/overview/main_overview.md).

#### Handle events

RichText fires events on user actions. Subscribe to events with the [`api.on()`](api/internal/on.md) method to react to user input. See the [full list of events](api/overview/events_overview.md).

Open *Richtext.jsx* and update the `useEffect()` hook. The example below logs a message on every [`print`](api/events/print.md) event:

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

Start the app to see RichText render with data on the page.

<div className="img_border">
![RichText initialization](../assets/trial_richtext.png)
</div>

You now have a working RichText integration in React. Customize the code to fit your needs. A complete example is available on [GitHub](https://github.com/DHTMLX/react-richtext-demo).

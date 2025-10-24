---
sidebar_label: Integration with React
title: Integration with React
description: You can learn about the integration with React in the documentation of the DHTMLX JavaScript RichText library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX RichText.
---

# Integration with React

:::tip
It's good to have some experience with [**React**](https://react.dev) before jumping into this guide. If you need a quick refresher, check out the [**React documentation**](https://react.dev/learn).
:::

DHTMLX RichText works well with **React**. There are code samples showing how to use DHTMLX RichText in React apps. The [**Example on GitHub**](https://github.com/DHTMLX/react-richtext-demo) has more details.

## Creating a project

:::info
Before starting a new project, make sure you have [**Vite**](https://vite.dev/) (optional) and [**Node.js**](https://nodejs.org/en/) installed.
:::

You can set up a basic **React** project or use **React with Vite**. In this example, the project is called **my-react-richtext-app**:

~~~json
npx create-react-app my-react-richtext-app
~~~

### Installation of dependencies

Move into your new app folder:

~~~json
cd my-react-richtext-app
~~~

Next, install the dependencies and start the development server using your preferred package manager:

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

The app will be available on localhost (like `http://localhost:3000`).

## Creating RichText

Now it's time to add the DHTMLX RichText code. First, stop the app and install the RichText package.

### Step 1. Package installation

Download the [**trial RichText package**](how_to_start.md/#installing-richtext-via-npm-or-yarn) and follow the steps in the README file. The trial version of RichText is available for 30 days.

### Step 2. Component creation

Next, create a React component to add RichText to your app. In the ***src/*** directory, create a new file called ***Richtext.jsx***.

#### Importing source files

Open ***Richtext.jsx*** and import the RichText files. Keep in mind:

- If you have the PRO version and are installing RichText from a local folder, your imports should look like this:

~~~jsx title="Richtext.jsx"
import { Richtext} from 'dhx-richtext-package';
import 'dhx-richtext-package/dist/richtext.css';
~~~

- For the trial version, use these imports:

~~~jsx title="Richtext.jsx"
import { Richtext} from '@dhx/trial-richtext';
import "@dhx/trial-richtext/dist/richtext.css";
~~~

This guide uses the **trial** version for demonstration.

#### Setting containers and adding Richtext

To show RichText on the page, set up a container and initialize the component with its constructor:

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

#### Adding styles

You'll need to add some CSS so RichText displays correctly. Update the main CSS file with these styles:

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

To load data into RichText, prepare a data set. Create a file called ***data.js*** in the ***src/*** folder and add some content:

~~~jsx {} title="data.js"
export function getData() {
  const value = `
    <h2>RichText 2.0</h2>
    <p>Repository at <a href="https://git.webix.io/xbs/richtext">https://git.webix.io/xbs/richtext</a></p>
    <p><img src="https://placecats.com/500/300" style="width:500px;height:300px;"></p>`;
  return { value };
}
~~~

Next, open ***App.js*** and import the data. Pass it to your `<RichText/>` component as a **prop**:

~~~jsx {2,5-6} title="App.js"
import RichText from "./Richtext";
import { getData } from "./data";

function App() {
    const { value } = getData();
    return <RichText value={value} />;
}

export default App;
~~~

Now, in ***Richtext.jsx***, use the incoming **prop** in the RichText configuration:

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

If you want, you can also use the [`setValue()`](api/methods/set-value.md) method inside `useEffect()` to load data:

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

At this point, the RichText component is set up. When it's rendered, it will display the RichText editor with your data. You can adjust the configuration as needed. The [RichText API docs](api/overview/main_overview.md) have the full list of available options.

#### Handling events

RichText triggers events when users interact with it. You can use these events to run your own code. The [full list of events](api/overview/events_overview.md) is available in the docs.

To handle an event, update ***Richtext.jsx*** like this:

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

Now, you can start the app to see RichText with your data on the page.

import trial_richtext from '@site/static/img/trial_richtext.png';

<img
  src={trial_richtext}
  alt="Trial richtext"
  className="img_border"
/>

That's it for integrating DHTMLX RichText with React. You can tweak the code to fit your needs. For a more advanced example, check out [**GitHub**](https://github.com/DHTMLX/react-richtext-demo).

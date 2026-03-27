---
sidebar_label: 与React集成
title: 与React集成
description: 您可以在DHTMLX JavaScript RichText库的文档中了解与React集成的相关内容。浏览开发指南和API参考，查看代码示例和在线演示，并下载DHTMLX RichText的免费30天评估版本。
---

# 与React集成 {#integration-with-react}

:::tip[提示]
在阅读本文档之前，您应该熟悉[**React**](https://react.dev)的基本概念和模式。如需复习，请参阅[**React文档**](https://react.dev/learn)。
:::

DHTMLX RichText与**React**兼容。我们已准备了如何在**React**中使用DHTMLX RichText的代码示例。更多信息，请参阅对应的[**GitHub示例**](https://github.com/DHTMLX/react-richtext-demo)。

## 创建项目 {#creating-a-project}

:::info[信息]
在开始创建新项目之前，请安装[**Vite**](https://vite.dev/)（可选）和[**Node.js**](https://nodejs.org/en/)。
:::

您可以创建一个基础的**React**项目，或使用**React with Vite**。将项目命名为**my-react-richtext-app**：

~~~json
npx create-react-app my-react-richtext-app
~~~

### 安装依赖 {#installation-of-dependencies}

进入新创建的应用文件夹：

~~~json
cd my-react-richtext-app
~~~

安装依赖并启动dev server。请使用包管理器：

- 如果您使用[**yarn**](https://yarnpkg.com/)，运行以下命令：

~~~json
yarn
yarn start
~~~

- 如果您使用[**npm**](https://www.npmjs.com/)，运行以下命令：

~~~json
npm install
npm run dev
~~~

应用应在本地运行（例如`http://localhost:3000`）。

## 创建RichText {#creating-richtext}

现在您需要获取DHTMLX RichText的源代码。首先，停止应用并继续安装RichText包。

### 步骤1：安装包 {#step-1-package-installation}

下载[**试用版RichText包**](/how_to_start/#installing-richtext-via-npm-or-yarn)并按照README文件中的步骤操作。请注意，试用版RichText仅可使用30天。

### 步骤2：创建组件 {#step-2-component-creation}

现在您需要创建一个React组件，以便将RichText添加到应用中。在***src/***文件夹中创建一个新文件并命名为***Richtext.jsx***。

#### 引入源文件 {#importing-source-files}

打开***Richtext.jsx***文件并引入RichText源文件。请注意：

- 如果您使用PRO版本并从本地文件夹安装RichText包，引入路径如下：

~~~jsx title="Richtext.jsx"
import { Richtext} from 'dhx-richtext-package';
import 'dhx-richtext-package/dist/richtext.css';
~~~

- 如果您使用试用版RichText，请指定以下路径：

~~~jsx title="Richtext.jsx"
import { Richtext} from '@dhx/trial-richtext';
import "@dhx/trial-richtext/dist/richtext.css";
~~~

在本教程中，您可以查看如何配置**试用版**RichText。

#### 设置容器并添加RichText {#setting-containers-and-adding-richtext}

要在页面上显示RichText，您需要为RichText创建容器，并使用对应的构造函数初始化组件：

~~~jsx {} title="Richtext.jsx"
import { useEffect, useRef } from "react";
import { Richtext} from '@dhx/trial-richtext';
import '@dhx/trial-richtext/dist/richtext.css'; // 引入RichText样式

export default function RichTextComponent(props) {
    let richtext_container = useRef(); // 初始化RichText的容器

    useEffect(() => {
        // 初始化RichText组件
        const editor = new Richtext(richtext_container.current, {});

        return () => {
            editor.destructor(); // 销毁RichText
        };
    }, []);

    return  <div className="component_container">
                <div ref={richtext_container} className="widget"></div>
            </div>
}
~~~

#### 添加样式 {#adding-styles}

要正确显示RichText，您需要在项目主CSS文件中为RichText及其容器指定重要样式：

~~~css title="index.css"
/* 为初始页面指定样式 */
html,
body,
#root {
    height: 100%;
    padding: 0;
    margin: 0;
}

/* 为RichText容器指定样式 */
.component_container {
    height: 100%;
    margin: 0 auto;
}

/* 为RichText widget指定样式 */
.widget {
    height: calc(100% - 56px);
}
~~~

#### 加载数据 {#loading-data}

要向RichText中添加数据，您需要提供一个数据集。可以在***src/***文件夹中创建***data.js***文件并添加一些数据：

~~~jsx {} title="data.js"
export function getData() {
  const value = `
    <h2>RichText 2.0</h2>
    <p>Repository at <a href="https://git.webix.io/xbs/richtext">https://git.webix.io/xbs/richtext</a></p>
    <p><img src="https://placecats.com/500/300" style="width:500px;height:300px;"></p>`;
  return { value };
}
~~~

然后打开***App.js***文件并引入数据。之后，您可以将数据作为**props**传入新创建的`<RichText/>`组件：

~~~jsx {2,5-6} title="App.js"
import RichText from "./Richtext";
import { getData } from "./data";

function App() {
    const { value } = getData();
    return <RichText value={value} />;
}

export default App;
~~~

进入***Richtext.jsx***文件，将传入的**props**应用到RichText配置对象：

~~~jsx {} title="Richtext.jsx"
import { useEffect, useRef } from "react";
import { Richtext} from "@dhx/trial-richtext";
import "@dhx/trial-richtext/dist/richtext.css";

export default function RichTextComponent(props) {
    let richtext_container = useRef();

    useEffect(() => {
        const editor = new Richtext(richtext_container.current, {
            value: props.value, // 应用值
            // 其他配置属性
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

您也可以在React的`useEffect()`方法中使用[`setValue()`](api/methods/set-value.md)方法向RichText加载数据：

~~~jsx {} title="Richtext.jsx"
import { useEffect, useRef } from "react";
import { Richtext} from "@dhx/trial-richtext";
import "@dhx/trial-richtext/dist/richtext.css";

export default function RichTextComponent(props) {
    let richtext_container = useRef();

    let value = props.value;

    useEffect(() => {
        const editor = new Richtext(richtext_container.current, {
            // 配置属性
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

现在RichText组件已准备就绪。当元素被添加到页面时，它将使用数据初始化RichText。您也可以提供必要的配置设置。请访问我们的[RichText API文档](api/overview/main_overview.md)查看完整的可用属性列表。

#### 处理事件 {#handling-events}

当用户在RichText中执行某些操作时，会触发一个事件。您可以使用这些事件来检测操作并运行相应的代码。请参阅[完整事件列表](api/overview/events_overview.md)。

打开***Richtext.jsx***，按以下方式完善`useEffect()`方法：

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

完成后，您可以启动应用，查看加载了数据的RichText页面。

<div className="img_border">
![RichText初始化](../assets/trial_richtext.png)
</div>

现在您已了解如何将DHTMLX RichText与React集成。您可以根据具体需求自定义代码。最终的高级示例可在[**GitHub**](https://github.com/DHTMLX/react-richtext-demo)上找到。

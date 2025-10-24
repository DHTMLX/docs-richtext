---
sidebar_label: 与 React 集成
title: 与 React 集成
description: 您可以在 DHTMLX JavaScript RichText 库的文档中了解与 React 的集成。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX RichText 的 30 天免费评估版。
---

# 与 React 集成

:::tip
在阅读本指南之前，建议您具备一定的 [**React**](https://react.dev) 使用经验。如果需要快速回顾，可以查看 [**React 官方文档**](https://react.dev/learn)。
:::

DHTMLX RichText 能很好地与 **React** 集成。我们提供了在 React 应用中使用 DHTMLX RichText 的代码示例。更多细节请参考 [**GitHub 示例**](https://github.com/DHTMLX/react-richtext-demo)。

## 创建项目

:::info
在开始新项目之前，请确保已安装 [**Vite**](https://vite.dev/)（可选）和 [**Node.js**](https://nodejs.org/en/)。
:::

您可以创建一个基础的 **React** 项目，或使用 **Vite** 搭建 React 项目。本例中，项目名为 **my-react-richtext-app**:

~~~json
npx create-react-app my-react-richtext-app
~~~

### 安装依赖

进入新建的应用文件夹:

~~~json
cd my-react-richtext-app
~~~

接下来，使用您喜欢的包管理器安装依赖并启动开发服务器:

- 使用 [**yarn**](https://yarnpkg.com/):

~~~json
yarn
yarn start
~~~

- 使用 [**npm**](https://www.npmjs.com/):

~~~json
npm install
npm run dev
~~~

应用将运行在本地服务器（如 `http://localhost:3000`）。

## 创建 RichText

现在可以添加 DHTMLX RichText 相关代码。首先，停止应用并安装 RichText 包。

### 步骤 1. 安装包

下载 [**RichText 试用包**](how_to_start.md#installing-richtext-via-npm-or-yarn)，并按照 README 文件中的步骤操作。RichText 试用版可免费使用 30 天。

### 步骤 2. 创建组件

接下来，创建一个 React 组件以在应用中集成 RichText。在 ***src/*** 目录下新建文件 ***Richtext.jsx***。

#### 导入源文件

打开 ***Richtext.jsx*** 并导入 RichText 文件。请注意:

- 如果您拥有 PRO 版本，并从本地文件夹安装 RichText，导入方式如下:

~~~jsx title="Richtext.jsx"
import { Richtext} from 'dhx-richtext-package';
import 'dhx-richtext-package/dist/richtext.css';
~~~

- 对于试用版，使用如下导入方式:

~~~jsx title="Richtext.jsx"
import { Richtext} from '@dhx/trial-richtext';
import "@dhx/trial-richtext/dist/richtext.css";
~~~

本指南以 **试用版** 为例进行演示。

#### 设置容器并添加 Richtext

要在页面中展示 RichText，需要设置一个容器，并用构造函数初始化组件:

~~~jsx {} title="Richtext.jsx"
import { useEffect, useRef } from "react";
import { Richtext} from '@dhx/trial-richtext';
import '@dhx/trial-richtext/dist/richtext.css'; // 引入 RichText 样式

export default function RichTextComponent(props) {
    let richtext_container = useRef(); // 初始化 RichText 容器

    useEffect(() => {
        // 初始化 RichText 组件
        const editor = new Richtext(richtext_container.current, {});

        return () => {
            editor.destructor(); // 销毁 RichText
        };
    }, []);

    return  <div className="component_container">
                <div ref={richtext_container} className="widget"></div>
            </div>
}
~~~

#### 添加样式

需要添加一些 CSS 以保证 RichText 正确显示。请在主 CSS 文件中加入如下样式:

~~~css title="index.css"
/* 页面初始样式 */
html,
body,
#root {
    height: 100%;
    padding: 0;
    margin: 0;
}

/* RichText 容器样式 */
.component_container {
    height: 100%; 
    margin: 0 auto;
}

/* RichText 组件样式 */
.widget {
    height: calc(100% - 56px);
}
~~~

#### 加载数据

如需向 RichText 加载数据，请准备一份数据集。在 ***src/*** 文件夹下新建 ***data.js*** 文件并添加内容:

~~~jsx {} title="data.js"
export function getData() {
  const value = `
    <h2>RichText 2.0</h2>
    <p>Repository at <a href="https://git.webix.io/xbs/richtext">https://git.webix.io/xbs/richtext</a></p>
    <p><img src="https://placecats.com/500/300" style="width:500px;height:300px;"></p>`;
  return { value };
}
~~~

然后，打开 ***App.js*** 并导入数据。将其作为 **prop** 传递给 `<RichText/>` 组件:

~~~jsx {2,5-6} title="App.js"
import RichText from "./Richtext";
import { getData } from "./data";

function App() {
    const { value } = getData();
    return <RichText value={value} />;
}

export default App;
~~~

现在，在 ***Richtext.jsx*** 文件中，在 RichText 配置中使用传入的 **prop**:

~~~jsx {} title="Richtext.jsx"
import { useEffect, useRef } from "react";
import { Richtext} from "@dhx/trial-richtext";
import "@dhx/trial-richtext/dist/richtext.css";

export default function RichTextComponent(props) {
    let richtext_container = useRef();

    useEffect(() => {
        const editor = new Richtext(richtext_container.current, {
            value: props.value, // 应用 value
            // 其他配置项
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

如果需要，也可以在 `useEffect()` 内使用 [`setValue()`](api/methods/set-value.md) 方法加载数据:

~~~jsx {} title="Richtext.jsx"
import { useEffect, useRef } from "react";
import { Richtext} from "@dhx/trial-richtext";
import "@dhx/trial-richtext/dist/richtext.css";

export default function RichTextComponent(props) {
    let richtext_container = useRef();

    let value = props.value;

    useEffect(() => {
        const editor = new Richtext(richtext_container.current, {
            // 配置项
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

此时，RichText 组件已配置完成。组件渲染时，将显示带有数据的 RichText 编辑器。您可以根据需要调整配置。完整的可用选项请参阅 [RichText API 文档](api/overview/main_overview.md)。

#### 事件处理

RichText 在用户交互时会触发事件。您可以利用这些事件执行自定义代码。完整的事件列表可在文档 [事件总览](api/overview/events_overview.md) 中查阅。

要处理事件，请按如下方式更新 ***Richtext.jsx***:

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

现在，您可以启动应用，在页面上看到带有数据的 RichText 组件。

import trial_richtext from '@site/static/img/trial_richtext.png';

<img
  src={trial_richtext}
  alt="Trial richtext"
  className="img_border"
/>

以上就是 DHTMLX RichText 与 React 集成的全部内容。您可以根据实际需求调整代码。如需更高级的示例，请参考 [**GitHub**](https://github.com/DHTMLX/react-richtext-demo)。

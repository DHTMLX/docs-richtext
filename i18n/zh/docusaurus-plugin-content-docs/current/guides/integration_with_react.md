---
sidebar_label: 与 React 集成
title: 与 React 集成
description: 您可以在 DHTMLX JavaScript RichText 库的文档中了解与 React 的集成方法。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX RichText 的 30 天免费评估版本。
---

# 与 React 集成 {#integration-with-react}

:::tip[提示]
请确保您已熟悉 [React](https://react.dev) 的基本概念和模式。如需复习，请参阅 [React 文档](https://react.dev/learn)。
:::

DHTMLX RichText 支持与 React 配合使用。完整的代码示例请参见 [GitHub 演示](https://github.com/DHTMLX/react-richtext-demo)。

## 创建项目 {#create-a-project}

:::info[信息]
在创建新项目之前，请先安装 [Node.js](https://nodejs.org/en/) 以及（可选）[Vite](https://vite.dev/)。
:::

使用 Create React App 创建一个新的 *my-react-richtext-app* 项目：

~~~bash
npx create-react-app my-react-richtext-app
~~~

### 安装依赖 {#install-dependencies}

切换到新的应用目录：

~~~bash
cd my-react-richtext-app
~~~

使用包管理器安装依赖并启动开发服务器。

使用 [yarn](https://yarnpkg.com/) 时，运行：

~~~bash
yarn
yarn start
~~~

使用 [npm](https://www.npmjs.com/) 时，运行：

~~~bash
npm install
npm start
~~~

应用将在本地运行（例如 `http://localhost:3000`）。

## 创建 RichText {#create-richtext}

停止应用并安装 RichText 包。

### 第一步：安装包 {#step-1-install-the-package}

下载 [试用版 RichText 包](/how_to_start/#installing-richtext-via-npm-or-yarn) 并按照 README 文件中的步骤操作。试用许可证有效期为 30 天。

### 第二步：创建组件 {#step-2-create-the-component}

创建一个 React 组件以将 RichText 添加到应用中。在 *src/* 目录下，创建一个名为 *Richtext.jsx* 的新文件。

#### 导入源文件 {#import-source-files}

打开 *Richtext.jsx* 并导入 RichText 源文件。

对于从本地文件夹安装的 PRO 版本，请使用：

~~~jsx title="Richtext.jsx"
import { Richtext } from 'dhx-richtext-package';
import 'dhx-richtext-package/dist/richtext.css';
~~~

对于试用版，请使用：

~~~jsx title="Richtext.jsx"
import { Richtext } from '@dhx/trial-richtext';
import "@dhx/trial-richtext/dist/richtext.css";
~~~

本教程使用 RichText 的试用版本。

#### 设置容器并初始化 RichText {#set-the-container-and-initialize-richtext}

为 RichText 设置一个容器元素，并在 `useEffect()` 内使用 `Richtext` 构造函数初始化组件。在清理函数中调用 [`destructor()`](api/methods/destructor.md) 方法以销毁 RichText：

~~~jsx {} title="Richtext.jsx"
import { useEffect, useRef } from "react";
import { Richtext } from '@dhx/trial-richtext';
import '@dhx/trial-richtext/dist/richtext.css'; // 引入 RichText 样式

export default function RichTextComponent(props) {
    let richtext_container = useRef(); // RichText 的容器

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

#### 添加样式 {#add-styles}

将 RichText 及其容器的样式添加到项目的主 CSS 文件中：

~~~css title="index.css"
/* 页面基础样式 */
html,
body,
#root {
    height: 100%;
    padding: 0;
    margin: 0;
}

/* RichText 容器 */
.component_container {
    height: 100%; 
    margin: 0 auto;
}

/* RichText 控件 */
.widget {
    height: calc(100% - 56px);
}
~~~

#### 加载数据 {#load-data}

为 RichText 提供数据。在 *src/* 目录下创建 *data.js* 文件：

~~~jsx {} title="data.js"
export function getData() {
  const value = `
    <h2>RichText 2.0</h2>
    <p>Repository at <a href="https://git.webix.io/xbs/richtext">https://git.webix.io/xbs/richtext</a></p>
    <p><img src="https://placecats.com/500/300" style="width:500px;height:300px;"></p>`;
  return { value };
}
~~~

打开 *App.js* 并导入数据，将值作为 prop 传递给 `<RichText/>` 组件：

~~~jsx {2,5-6} title="App.js"
import RichText from "./Richtext";
import { getData } from "./data";

function App() {
    const { value } = getData();
    return <RichText value={value} />;
}

export default App;
~~~

打开 *Richtext.jsx* 并将 `props.value` 传入 RichText 配置：

~~~jsx {} title="Richtext.jsx"
import { useEffect, useRef } from "react";
import { Richtext } from "@dhx/trial-richtext";
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

或者，在 `useEffect()` 内调用 [`setValue()`](api/methods/set-value.md) 方法将数据加载到 RichText 中：

~~~jsx {} title="Richtext.jsx"
import { useEffect, useRef } from "react";
import { Richtext } from "@dhx/trial-richtext";
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

RichText 组件现已可以使用。当 `<RichText/>` 元素挂载时，React 会渲染带有数据的编辑器。完整的配置选项列表请参见 [RichText API 概览](api/overview/main_overview.md)。

#### 处理事件 {#handle-events}

RichText 会在用户操作时触发事件。使用 [`api.on()`](api/internal/on.md) 方法订阅事件以响应用户输入。请参见[完整事件列表](api/overview/events_overview.md)。

打开 *Richtext.jsx* 并更新 `useEffect()` 钩子。以下示例在每次触发 [`print`](api/events/print.md) 事件时记录一条消息：

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

启动应用，即可看到 RichText 在页面上渲染并显示数据。

<div className="img_border">
![在 React 应用程序中渲染的 DHTMLX RichText（含示例内容）](/img/trial_richtext.png)
</div>

现在您已在 React 中完成了 RichText 的集成。请根据需要自定义代码。完整示例可在 [GitHub](https://github.com/DHTMLX/react-richtext-demo) 上获取。

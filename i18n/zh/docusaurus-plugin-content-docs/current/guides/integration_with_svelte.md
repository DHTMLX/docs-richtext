---
sidebar_label: 与Svelte集成
title: 与Svelte集成
description: 您可以在DHTMLX JavaScript RichText库的文档中了解与Svelte集成的相关内容。浏览开发指南和API参考，查看代码示例和在线演示，并下载DHTMLX RichText的免费30天评估版本。
---

# 与Svelte集成 {#integration-with-svelte}

:::tip[提示]
在阅读本文档之前，您应该熟悉**Svelte**的基本概念和模式。如需复习，请参阅[**Svelte文档**](https://svelte.dev/)。
:::

DHTMLX RichText与**Svelte**兼容。我们已准备了如何在**Svelte**中使用DHTMLX RichText的代码示例。更多信息，请参阅对应的[**GitHub示例**](https://github.com/DHTMLX/svelte-richtext-demo)。

## 创建项目 {#creating-a-project}

:::info[信息]
在开始创建新项目之前，请安装[**Vite**](https://vite.dev/)（可选）和[**Node.js**](https://nodejs.org/en/)。
:::

创建**Svelte**项目有以下几种方式：

- 您可以使用[**SvelteKit**](https://kit.svelte.dev/)

或

- 您也可以使用**Svelte with Vite**（不含SvelteKit）：

~~~json
npm create vite@latest
~~~

详情请参阅[相关文章](https://svelte.dev/docs/introduction#start-a-new-project-alternatives-to-sveltekit)。

### 安装依赖 {#installation-of-dependencies}

将项目命名为**my-svelte-richtext-app**并进入应用文件夹：

~~~json
cd my-svelte-richtext-app
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

现在您需要创建一个Svelte组件，以便将RichText添加到应用中。在***src/***文件夹中创建一个新文件并命名为***Richtext.svelte***。

#### 引入源文件 {#importing-source-files}

打开***Richtext.svelte***文件并引入RichText源文件。请注意：

- 如果您使用PRO版本并从本地文件夹安装RichText包，引入路径如下：

~~~html title="Richtext.svelte"
<script>
import { Richtext} from 'dhx-richtext-package';
import 'dhx-richtext-package/dist/richtext.css';
</script>
~~~

- 如果您使用试用版RichText，请指定以下路径：

~~~html title="Richtext.svelte"
<script>
import { Richtext} from '@dhx/trial-richtext';
import '@dhx/trial-richtext/dist/richtext.css';
<script>
~~~

在本教程中，您可以查看如何配置**试用版**RichText。

#### 设置容器并添加RichText {#setting-containers-and-adding-richtext}

要在页面上显示RichText，您需要为RichText创建容器，并使用对应的构造函数初始化组件：

~~~html {} title="Richtext.svelte"
<script>
import { onMount, onDestroy } from "svelte";
import { Richtext} from "@dhx/trial-richtext";
import "@dhx/trial-richtext/dist/richtext.css";

let richtext_container; // 初始化RichText的容器
let editor;

onMount(() => {
    // 初始化RichText组件
    editor = new Richtext(richtext_container, {});
});

onDestroy(() => {
    editor?.destructor(); // 销毁RichText
});
</script>

<div class="component_container">
    <div bind:this={richtext_container} class="widget"></div>
</div>
~~~

#### 加载数据 {#loading-data}

要向RichText中添加数据，我们需要提供一个数据集。可以在***src/***文件夹中创建***data.js***文件并添加一些数据：

~~~jsx {} title="data.ts"
export function getData() {
  const value = `
    <h2>RichText 2.0</h2>
    <p>Repository at <a href="https://git.webix.io/xbs/richtext">https://git.webix.io/xbs/richtext</a></p>
    <p><img src="https://placecats.com/500/300" style="width:500px;height:300px;"></p>`;
  return { value };
}
~~~

然后打开***App.svelte***文件，引入数据，并将其作为**props**传入新创建的`<RichText/>`组件：

~~~html {} title="App.svelte"
<script>
import RichText from "./Richtext.svelte";
import { getData } from "./data.js";

const { value } = getData();
</script>

<RichText value={value} />
~~~

进入***Richtext.svelte***文件，将传入的**props**应用到RichText配置对象：

~~~html {} title="Richtext.svelte"
<script>
import { onMount, onDestroy } from "svelte";
import { Richtext } from "@dhx/trial-richtext";
import "@dhx/trial-richtext/dist/richtext.css";

export let value

let richtext_container;
let editor;

onMount(() => {
    editor = new Richtext(richtext_container, {
        value
        // 其他配置属性
    })
});

onDestroy(() => {
    editor.destructor();
});
</script>

<div class="component_container">
    <div bind:this={richtext_container} class="widget"></div>
</div>
~~~

您也可以在Svelte的`onMount()`方法中使用[`setValue()`](/api/methods/set-value.md)方法向RichText加载数据：

~~~html {} title="Richtext.svelte"
<script>
import { onMount, onDestroy } from "svelte";
import { Richtext } from "@dhx/trial-richtext";
import "@dhx/trial-richtext/dist/richtext.css";

export let value;

let richtext_container;
let editor;

onMount(() => {
    editor = new Richtext(richtext_container, {
        // 其他配置属性
    })

    editor.setValue(value);
});

onDestroy(() => {
    editor.destructor();
});
</script>

<div class="component_container">
    <div bind:this={richtext_container} class="widget"></div>
</div>
~~~

现在RichText组件已准备就绪。当元素被添加到页面时，它将使用数据初始化RichText。您也可以提供必要的配置设置。请访问我们的[RichText API文档](api/overview/main_overview.md)查看完整的可用属性列表。

#### 处理事件 {#handling-events}

当用户在RichText中执行某些操作时，会触发一个事件。您可以使用这些事件来检测操作并运行相应的代码。请参阅[完整事件列表](api/overview/events_overview.md)。

打开***Richtext.svelte***，按以下方式完善`onMount()`方法：

~~~html {} title="Richtext.svelte"
<script>
// ...
let editor;

onMount(() => {
    editor = new Richtext(richtext_container, {})

    editor.api.on("print", () => {
        console.log("The document is printing");
    });
});

onDestroy(() => {
    editor?.destructor();
});
</script>

// ...
~~~

### 步骤3：将RichText添加到应用中 {#step-3-adding-richtext-into-the-app}

要将组件添加到应用中，打开**App.svelte**文件，将默认代码替换为以下内容：

~~~html title="App.svelte"
<script>
    import RichText from "./Richtext.svelte";
    import { getData } from "./data.js";

    const { value } = getData();
</script>

<RichText value={value}  />
~~~

完成后，您可以启动应用，查看加载了数据的RichText页面。

<div className="img_border">
![RichText初始化](../assets/trial_richtext.png)
</div>

现在您已了解如何将DHTMLX RichText与Svelte集成。您可以根据具体需求自定义代码。最终的高级示例可在[**GitHub**](https://github.com/DHTMLX/svelte-richtext-demo)上找到。

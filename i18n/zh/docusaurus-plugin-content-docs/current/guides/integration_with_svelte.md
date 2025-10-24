---
sidebar_label: 与 Svelte 集成
title: 与 Svelte 集成
description: 您可以在 DHTMLX JavaScript RichText 库的文档中了解与 Svelte 的集成。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX RichText 的免费 30 天评估版。
---

# 与 Svelte 集成

:::tip
阅读本指南前，建议您已了解 **Svelte** 的基础知识。如果需要快速复习，请查阅 [**Svelte 文档**](https://svelte.dev/)。
:::

DHTMLX RichText 可以很好地与 **Svelte** 集成。以下提供了一些实用的代码示例，展示如何在 Svelte 应用中使用 DHTMLX RichText。更多细节和示例可在 [**GitHub 示例**](https://github.com/DHTMLX/svelte-richtext-demo) 中找到。

## 创建项目

:::info
在开始新项目之前，请确保您已安装了 [**Vite**](https://vite.dev/)（可选）和 [**Node.js**](https://nodejs.org/en/)。
:::

有几种方式可以搭建 **Svelte** 项目:

- 使用 [**SvelteKit**](https://kit.svelte.dev/)

或

- 选择 **Svelte 和 Vite**（不使用 SvelteKit）:

~~~json
npm create vite@latest
~~~

您可以在这篇[相关文章](https://svelte.dev/docs/introduction#start-a-new-project-alternatives-to-sveltekit)中了解更多细节。

### 安装依赖

我们假设项目名为 **my-svelte-richtext-app**，并进入该目录:

~~~json
cd my-svelte-richtext-app
~~~

接下来，使用您喜欢的包管理器安装依赖并启动开发服务器:

- 对于 [**yarn**](https://yarnpkg.com/):

~~~json
yarn
yarn start
~~~

- 对于 [**npm**](https://www.npmjs.com/):

~~~json
npm install
npm run dev
~~~

此时，应用应该已经在本地运行（例如，`http://localhost:3000`）。

## 创建 RichText 组件

您需要 DHTMLX RichText 的源代码。在继续之前，请停止应用并安装 RichText 包。

### 第一步:安装包

下载 [**试用版 RichText 包**](how_to_start.md#installing-richtext-via-npm-or-yarn)，并按照 README 文件中的步骤操作。试用版可使用 30 天。

### 第二步:创建组件

现在需要为 RichText 创建一个 Svelte 组件。在 ***src/*** 目录下新建文件 ***Richtext.svelte***。

#### 导入源文件

在 ***Richtext.svelte*** 文件中，导入 RichText 的源文件。根据您的版本，导入方式如下:

- 如果是本地安装的 PRO 版本，使用以下路径:

~~~html title="Richtext.svelte"
<script>
import { Richtext} from 'dhx-richtext-package';
import 'dhx-richtext-package/dist/richtext.css';
</script>
~~~

- 如果是试用版，使用以下导入:

~~~html title="Richtext.svelte"
<script>
import { Richtext} from '@dhx/trial-richtext';
import '@dhx/trial-richtext/dist/richtext.css';
<script>
~~~

本指南以 **试用版** 为例进行说明。

#### 设置容器并添加 RichText

要在应用中展示 RichText，需要设置一个容器，并通过构造函数初始化组件:

~~~html {} title="Richtext.svelte"
<script>
import { onMount, onDestroy } from "svelte";
import { Richtext} from "@dhx/trial-richtext";
import "@dhx/trial-richtext/dist/richtext.css";

let richtext_container; // RichText 的容器
let editor;

onMount(() => {
    // 初始化 RichText 组件
    editor = new Richtext(richtext_container, {});
});

onDestroy(() => {
    editor?.destructor(); // 清理 RichText
});
</script>

<div class="component_container">
    <div bind:this={richtext_container} class="widget"></div>
</div>
~~~

#### 加载数据

要向 RichText 加载数据，需要准备一份数据集。在 ***src/*** 目录下创建 ***data.js*** 文件，并添加一些示例数据:

~~~jsx {} title="data.ts"
export function getData() {
  const value = `
    <h2>RichText 2.0</h2>
    <p>Repository at <a href="https://git.webix.io/xbs/richtext">https://git.webix.io/xbs/richtext</a></p>
    <p><img src="https://placecats.com/500/300" style="width:500px;height:300px;"></p>`;
  return { value };
}
~~~

然后，在 ***App.svelte*** 中导入数据，并以 prop 形式传递给 `<RichText/>` 组件:

~~~html {} title="App.svelte"
<script>
import RichText from "./Richtext.svelte";
import { getData } from "./data.js";

const { value } = getData();
</script>

<RichText value={value} />
~~~

接下来，更新 ***Richtext.svelte***，在 RichText 配置中使用传递的 **props**:

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
        // 其他配置项
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

另外，您也可以在 Svelte 的 `onMount()` 中使用 [`setValue()`](api/methods/set-value.md) 方法加载数据:

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
        // 其他配置项
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

此时，RichText 组件已设置完成，并会在页面加载时显示您的数据。您可以根据需要调整配置。更多选项请参考 [RichText API 文档](api/overview/main_overview.md)。

#### 事件处理

RichText 在执行操作时会触发事件，您可以监听这些事件以执行自定义代码。完整事件列表可参考 [events](api/overview/events_overview.md)。

要处理事件，可在 `onMount()` 方法中如下更新 ***Richtext.svelte***:

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

### 第三步:将 RichText 添加到应用中

要在应用中使用该组件，打开 **App.svelte** 并用以下内容替换默认内容:

~~~html title="App.svelte"
<script>
    import RichText from "./Richtext.svelte";
    import { getData } from "./data.js";
    
    const { value } = getData();
</script>

<RichText value={value}  />
~~~

现在，启动应用，您将在页面上看到载入数据的 RichText 组件。

import trial_richtext from '@site/static/img/trial_richtext.png';

<img
  src={trial_richtext}
  alt="Trial richtext"
  className="img_border"
/>

以上就是将 DHTMLX RichText 集成到 Svelte 的全部步骤。您可以根据实际需求调整代码。如果想查看更高级的示例，可以访问 [**GitHub**](https://github.com/DHTMLX/svelte-richtext-demo)。

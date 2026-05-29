---
sidebar_label: 与 Svelte 集成
title: 与 Svelte 集成
description: 您可以在 DHTMLX JavaScript RichText 库的文档中了解与 Svelte 的集成方式。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX RichText 的 30 天免费试用版本。
---

# 与 Svelte 集成

:::tip
请确保您已熟悉 [Svelte](https://svelte.dev/) 的基本概念和模式。如需复习，请参阅 [Svelte 文档](https://svelte.dev/docs)。
:::

DHTMLX RichText 支持与 Svelte 配合使用。完整的代码示例请参见 [GitHub 演示](https://github.com/DHTMLX/svelte-richtext-demo)。

## 创建项目

:::info
在创建新项目之前，请先安装 [Node.js](https://nodejs.org/en/) 以及（可选）[Vite](https://vite.dev/)。
:::

本教程使用基于 Vite 的 Svelte 项目。对于 SvelteKit 及其他选项，请参阅 [Svelte 项目指南](https://svelte.dev/docs/introduction#start-a-new-project-alternatives-to-sveltekit)。

启动一个新的 Vite 项目：

~~~bash
npm create vite@latest
~~~

### 安装依赖

当脚手架工具提示输入项目名称时，使用 *my-svelte-richtext-app*。然后切换到新目录：

~~~bash
cd my-svelte-richtext-app
~~~

使用包管理器安装依赖并启动开发服务器。

使用 [yarn](https://yarnpkg.com/)，运行：

~~~bash
yarn
yarn dev
~~~

使用 [npm](https://www.npmjs.com/)，运行：

~~~bash
npm install
npm run dev
~~~

应用将在 localhost 上运行（例如 `http://localhost:3000`）。

## 创建 RichText

停止应用并安装 RichText 包。

### 第 1 步. 安装包

下载 [试用版 RichText 包](/how_to_start/#installing-richtext-via-npm-or-yarn) 并按照 README 文件中的步骤操作。试用许可证有效期为 30 天。

### 第 2 步. 创建组件

创建一个 Svelte 组件以将 RichText 添加到应用中。在 *src/* 目录下，创建一个名为 *Richtext.svelte* 的新文件。

#### 导入源文件

打开 *Richtext.svelte* 并导入 RichText 源文件。

对于从本地文件夹安装的 PRO 版本，使用：

~~~html title="Richtext.svelte"
<script>
import { Richtext } from 'dhx-richtext-package';
import 'dhx-richtext-package/dist/richtext.css';
</script>
~~~

对于试用版，使用：

~~~html title="Richtext.svelte"
<script>
import { Richtext } from '@dhx/trial-richtext';
import '@dhx/trial-richtext/dist/richtext.css';
</script>
~~~

本教程使用 RichText 的试用版本。

#### 设置容器并初始化 RichText

为 RichText 设置容器元素，并在 `onMount()` 内部初始化组件。在 `onDestroy()` 内部调用 [`destructor()`](api/methods/destructor.md) 方法以移除 RichText：

~~~html {} title="Richtext.svelte"
<script>
import { onMount, onDestroy } from "svelte";
import { Richtext } from "@dhx/trial-richtext";
import "@dhx/trial-richtext/dist/richtext.css";

let richtext_container; // RichText 的容器
let editor;

onMount(() => {
    // 初始化 RichText 组件
    editor = new Richtext(richtext_container, {});
});

onDestroy(() => {
    editor?.destructor(); // 销毁 RichText
});
</script>

<div class="component_container">
    <div bind:this={richtext_container} class="widget"></div>
</div>
~~~

#### 添加样式

将 RichText 及其容器的样式添加到项目的主 CSS 文件中（例如 *src/app.css*）：

~~~css title="app.css"
/* 基础页面样式 */
html,
body {
    height: 100%;
    padding: 0;
    margin: 0;
}

/* RichText 容器 */
.component_container {
    height: 100%; 
    margin: 0 auto;
}

/* RichText widget */
.widget {
    height: calc(100% - 56px);
}
~~~

#### 加载数据

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

打开 *App.svelte*，导入数据，并将值作为 prop 传递给 `<RichText/>` 组件：

~~~html {} title="App.svelte"
<script>
import RichText from "./Richtext.svelte";
import { getData } from "./data.js";

const { value } = getData();
</script>

<RichText value={value} />
~~~

打开 *Richtext.svelte*，将 prop 值传递给 RichText 配置：

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
        value
        // 其他配置属性
    });
});

onDestroy(() => {
    editor?.destructor(); 
});
</script>

<div class="component_container">
    <div bind:this={richtext_container} class="widget"></div>
</div>
~~~

或者，在 `onMount()` 内部调用 [`setValue()`](api/methods/set-value.md) 方法以将数据加载到 RichText 中：

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
    });

    editor.setValue(value);
});

onDestroy(() => {
    editor?.destructor(); 
});
</script>

<div class="component_container">
    <div bind:this={richtext_container} class="widget"></div>
</div>
~~~

RichText 组件已准备就绪。当 `<RichText/>` 元素挂载时，Svelte 会渲染带有数据的编辑器。有关配置选项的完整列表，请参阅 [RichText API 概览](api/overview/main_overview.md)。

#### 处理事件

RichText 在用户操作时触发事件。使用 [`api.on()`](api/internal/on.md) 方法订阅事件以响应用户输入。请参阅[完整的事件列表](api/overview/events_overview.md)。

打开 *Richtext.svelte* 并更新 `onMount()` 钩子。以下示例在每次 [`print`](api/events/print.md) 事件触发时记录一条消息：

~~~html {} title="Richtext.svelte"
<script>
// ...
let editor;

onMount(() => {
    editor = new Richtext(richtext_container, {});

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

启动应用，查看 RichText 在页面上渲染数据的效果。

<div className="img_border">
![RichText initialization](../assets/trial_richtext.png)
</div>

现在您已在 Svelte 中完成了 RichText 的集成。请根据您的需求自定义代码。完整示例可在 [GitHub](https://github.com/DHTMLX/svelte-richtext-demo) 上获取。

---
sidebar_label: 与 Vue 集成
title: 与 Vue 集成
description: 您可以在 DHTMLX JavaScript RichText 库的文档中了解与 Vue 的集成方式。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX RichText 的 30 天免费试用版。
---

# 与 Vue 集成 {#integration-with-vue}

:::tip[提示]
请确保您已熟悉基本的 [Vue](https://vuejs.org/) 概念和模式。如需复习，请参阅 [Vue 3 文档](https://vuejs.org/guide/introduction.html#getting-started)。
:::

DHTMLX RichText 可与 Vue 配合使用。完整代码示例请参见 [GitHub 演示](https://github.com/DHTMLX/vue-richtext-demo)。

## 创建项目 {#create-a-project}

:::info[信息]
在创建新项目之前，请先安装 [Node.js](https://nodejs.org/en/)。
:::

使用官方脚手架工具创建 Vue 项目：

~~~bash
npm create vue@latest
~~~

该命令会安装并运行 `create-vue`。当脚手架提示输入项目名称时，使用 *my-vue-richtext-app*。详情请参阅 [Vue.js 快速入门](https://vuejs.org/guide/quick-start.html#creating-a-vue-application)。

### 安装依赖 {#install-dependencies}

切换到应用目录：

~~~bash
cd my-vue-richtext-app
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

应用将在 localhost 上运行（例如，`http://localhost:3000`）。

## 创建 RichText {#create-richtext}

停止应用并安装 RichText 包。

### 第一步：安装包 {#step-1-install-the-package}

下载 [RichText 试用包](/how_to_start/#installing-richtext-via-npm-or-yarn) 并按照 README 文件中的步骤操作。试用许可证有效期为 30 天。

### 第二步：创建组件 {#step-2-create-the-component}

创建一个 Vue 组件以将 RichText 添加到应用中。在 *src/components/* 目录下，创建一个名为 *Richtext.vue* 的新文件。

#### 导入源文件 {#import-source-files}

打开 *Richtext.vue* 并导入 RichText 源文件。

对于从本地文件夹安装的 PRO 版本，使用：

~~~html title="Richtext.vue"
<script>
import { Richtext } from 'dhx-richtext-package';
import 'dhx-richtext-package/dist/richtext.css';
</script>
~~~

对于试用版本，使用：

~~~html title="Richtext.vue"
<script>
import { Richtext } from '@dhx/trial-richtext';
import '@dhx/trial-richtext/dist/richtext.css';
</script>
~~~

本教程使用 RichText 的试用版本。

#### 设置容器并初始化 RichText {#set-the-container-and-initialize-richtext}

为 RichText 设置容器元素，并在 `mounted()` 中使用 `Richtext` 构造函数初始化组件。在 `unmounted()` 中调用 [`destructor()`](api/methods/destructor.md) 方法以移除 RichText：

~~~html {} title="Richtext.vue"
<script>
import { Richtext } from "@dhx/trial-richtext";
import "@dhx/trial-richtext/dist/richtext.css";

export default {
    mounted() {
        // 初始化 RichText 组件
        this.editor = new Richtext(this.$refs.richtext_container, {});
    },

    unmounted() {
        this.editor.destructor(); // 销毁 RichText
    }
};
</script>

<template>
    <div class="component_container">
        <div ref="richtext_container" class="widget"></div>
    </div>
</template>
~~~

#### 添加样式 {#add-styles}

将 RichText 及其容器的样式添加到项目的主 CSS 文件中：

~~~css title="main.css"
/* 基础页面样式 */
html,
body,
#app { /* 使用 #app 根容器 */
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

打开 *App.vue*，导入数据，并通过 `data()` 方法初始化。将值作为 prop 传递给 `<RichText/>` 组件：

~~~html {} title="App.vue"
<script>
import RichText from "./components/Richtext.vue";
import { getData } from "./data";

export default {
    components: { RichText },
    data() {
        const { value } = getData();
        return { value };
    }
};
</script>

<template>
    <RichText :value="value" />
</template>
~~~

打开 *Richtext.vue* 并将 prop 值传递给 RichText 配置：

~~~html {} title="Richtext.vue"
<script>
import { Richtext } from "@dhx/trial-richtext";
import "@dhx/trial-richtext/dist/richtext.css";

export default {
    props: ["value"],

    mounted() {
        this.editor = new Richtext(this.$refs.richtext_container, {
            value: this.value,
            // 其他配置属性
        });
    },

    unmounted() {
        this.editor.destructor(); 
    }
};
</script>

<template>
    <div class="component_container">
        <div ref="richtext_container" class="widget"></div>
    </div>
</template>
~~~

或者，在 `mounted()` 中调用 [`setValue()`](api/methods/set-value.md) 方法将数据加载到 RichText 中：

~~~html {} title="Richtext.vue"
<script>
import { Richtext } from "@dhx/trial-richtext";
import "@dhx/trial-richtext/dist/richtext.css";

export default {
    props: ["value"],

    mounted() {
        this.editor = new Richtext(this.$refs.richtext_container, {
            // 其他配置属性
        });

        this.editor.setValue(this.value);
    },

    unmounted() {
        this.editor.destructor(); 
    }
};
</script>

<template>
    <div class="component_container">
        <div ref="richtext_container" class="widget"></div>
    </div>
</template>
~~~

RichText 组件已准备好使用。当 `<RichText/>` 元素挂载时，Vue 会渲染带有数据的编辑器。完整的配置选项列表，请参阅 [RichText API 概览](api/overview/main_overview.md)。

#### 处理事件 {#handle-events}

RichText 会在用户操作时触发事件。使用 [`api.on()`](api/internal/on.md) 方法订阅事件以响应用户输入。请参阅[完整事件列表](api/overview/events_overview.md)。

打开 *Richtext.vue* 并更新 `mounted()` 钩子。以下示例在每次 [`print`](api/events/print.md) 事件触发时记录一条消息：

~~~html {} title="Richtext.vue"
<script>
// ...
export default {
    // ...
    mounted() {
        this.editor = new Richtext(this.$refs.richtext_container, {});

        this.editor.api.on("print", () => {
            console.log("The document is printing");
        });
    },

    unmounted() {
        this.editor.destructor();
    }
}
</script>

// ...
~~~

启动应用，查看 RichText 在页面上渲染数据的效果。

<div className="img_border">
![RichText 初始化](../assets/trial_richtext.png)
</div>

您现在已在 Vue 中完成 RichText 的集成。可根据需要自定义代码。完整示例可在 [GitHub](https://github.com/DHTMLX/vue-richtext-demo) 上获取。

---
sidebar_label: 与 Vue 集成
title: 与 Vue 集成
description: 您可以在 DHTMLX JavaScript RichText 库的文档中了解与 Vue 的集成。浏览开发者指南和 API 参考，尝试代码示例和在线演示，并下载 DHTMLX RichText 的 30 天免费评估版。
---

# 与 Vue 集成

:::tip
在深入阅读本篇文档之前，建议您对 [**Vue**](https://vuejs.org/) 有基本的了解。如果需要复习，可以查阅 [**Vue 3 文档**](https://vuejs.org/guide/introduction.html#getting-started)。
:::

DHTMLX RichText 与 **Vue** 配合良好。我们提供了展示如何在 **Vue 3** 中使用 DHTMLX RichText 的代码示例。更多信息请参考 [**GitHub 示例**](https://github.com/DHTMLX/vue-richtext-demo)。

## 创建项目

:::info
在开始新项目之前，请确保已安装 [**Node.js**](https://nodejs.org/en/)。
:::

要搭建一个 **Vue** 项目，请使用以下命令:

~~~json
npm create vue@latest
~~~

该命令会运行 `create-vue`，这是官方用于搭建 **Vue** 项目的工具。更多信息可查阅 [Vue.js 快速开始](https://vuejs.org/guide/quick-start.html#creating-a-vue-application)。

本指南中，项目命名为 **my-vue-richtext-app**。

### 安装依赖

切换到应用目录:

~~~json
cd my-vue-richtext-app
~~~

使用您喜欢的包管理器安装依赖并启动开发服务器:

- 对于 [**yarn**](https://yarnpkg.com/):

~~~jsx
yarn
yarn start // 或 yarn dev
~~~

- 对于 [**npm**](https://www.npmjs.com/):

~~~json
npm install
npm run dev
~~~

应用应可在本地（例如 `http://localhost:3000`）访问。

## 创建 RichText

接下来，您需要获取 DHTMLX RichText 的源码。请先停止应用，然后安装 RichText 包。

### 步骤 1. 安装包

下载 [**试用版 RichText 包**](how_to_start.md#installing-richtext-via-npm-or-yarn)，并按照 README 文件中的说明操作。试用版可使用 30 天。

### 步骤 2. 创建组件

创建一个 Vue 组件，将 RichText 添加到您的应用中。在 ***src/components/*** 目录下新建一个文件，命名为 ***Richtext.vue***。

#### 引入源码文件

打开 ***Richtext.vue*** 并引入 RichText 源码文件。请注意:

- 如果您使用的是 PRO 版本，并从本地文件夹安装了 RichText，导入方式如下:

~~~html title="Richtext.vue"
<script>
import { Richtext} from 'dhx-richtext-package';
import 'dhx-richtext-package/dist/richtext.css';
</script>
~~~

- 对于试用版，导入方式如下:

~~~html title="Richtext.vue"
<script>
import { Richtext} from '@dhx/trial-richtext';
import '@dhx/trial-richtext/dist/richtext.css';
</script>
~~~

本教程演示如何设置 **试用版** RichText。

#### 设置容器并添加 Richtext

要在页面上展示 RichText，需要设置一个容器，并使用构造函数初始化组件:

~~~html {} title="Richtext.vue"
<script>
import { Richtext} from "@dhx/trial-richtext";
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

#### 添加样式

为确保 RichText 正常显示，请在主 CSS 文件中为 RichText 及其容器添加必要样式:

~~~css title="main.css"
/* 设置页面初始样式 */
html,
body,
#app { /* 确保使用 #app 作为根容器 */
    height: 100%;
    padding: 0;
    margin: 0;
}

/* 设置 RichText 容器样式 */
.component_container {
    height: 100%; 
    margin: 0 auto;
}

/* 设置 RichText 组件样式 */
.widget {
    height: calc(100% - 56px);
}
~~~

#### 加载数据

如需向 RichText 加载数据，可以创建一个数据集。在 ***src/*** 目录下添加一个 ***data.js*** 文件，内容如下:

~~~jsx {} title="data.ts"
export function getData() {
  const value = `
    <h2>RichText 2.0</h2>
    <p>Repository at <a href="https://git.webix.io/xbs/richtext">https://git.webix.io/xbs/richtext</a></p>
    <p><img src="https://placecats.com/500/300" style="width:500px;height:300px;"></p>`;
  return { value };
}
~~~

然后，在 ***App.vue*** 中引入该数据，并通过 `data()` 方法进行初始化。将数据作为 **props** 传递给 `<RichText/>` 组件:

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

现在，回到 ***Richtext.vue***，在 RichText 配置中使用 **props**:

~~~html {} title="Richtext.vue"
<script>
import { Richtext} from "@dhx/trial-richtext";
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

或者，您也可以在 `mounted()` 钩子中使用 [`setValue()`](api/methods/set-value.md) 方法向 RichText 加载数据:

~~~html {} title="Richtext.vue"
<script>
import { Richtext} from "@dhx/trial-richtext";
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

此时，RichText 组件已设置完成。当其被添加到页面时，会使用您的数据进行初始化。您可以根据需要调整配置。完整的可用属性列表请参见 [RichText API 文档](api/overview/main_overview.md)。

#### 事件处理

RichText 组件在发生操作时会触发事件。您可以利用这些事件执行自定义代码。更多详情请查阅 [事件完整列表](api/overview/events_overview.md)。

在 ***Richtext.vue*** 中，您可以更新 `mounted()` 方法来处理事件:

~~~html {} title="Richtext.vue"
<script>
// ...
export default {
    // ...
    mounted() {
        this.editor = new Richtext(this.$refs.cont, {});

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

现在，启动应用，您将在页面上看到带有数据的 RichText 组件。

import trial_richtext from '@site/static/img/trial_richtext.png';

<img
  src={trial_richtext}
  alt="Trial richtext"
  className="img_border"
/>

这就是 DHTMLX RichText 与 Vue 集成的方式。您可以根据需要调整代码。想了解更高级的示例，请参见 [**GitHub**](https://github.com/DHTMLX/vue-richtext-demo)。

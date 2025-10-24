---
sidebar_label: 与 Angular 集成
title: 与 Angular 集成
description: 您可以在 DHTMLX JavaScript RichText 库的文档中了解与 Angular 的集成。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX RichText 的 30 天免费评估版。
---

# 与 Angular 集成

:::tip
在开始之前，建议您先熟悉 **Angular** 的主要思想和模式。如需快速回顾，请查阅 [**Angular 文档**](https://v17.angular.io/docs)。
:::

DHTMLX RichText 与 **Angular** 配合良好。官方提供了代码示例，展示如何在 **Angular** 项目中使用 DHTMLX RichText。详情请查看 [**GitHub 示例**](https://github.com/DHTMLX/angular-richtext-demo)。

## 创建项目

:::info
在开始新项目之前，请确保已安装 [**Angular CLI**](https://v17.angular.io/cli) 和 [**Node.js**](https://nodejs.org/en/)。
:::

要使用 Angular CLI 创建新的 **my-angular-richtext-app** 项目，只需运行:

~~~json
ng new my-angular-richtext-app
~~~

:::note
为了便于本指南演示，在创建 Angular 应用时请关闭服务端渲染（SSR）和静态站点生成（SSG/Prerendering）。
:::

该命令会完成所有必需的设置，无需额外安装步骤。

### 安装依赖

进入新创建的应用目录:

~~~json
cd my-angular-richtext-app
~~~

使用 [**yarn**](https://yarnpkg.com/) 安装依赖并启动开发服务器:

~~~json
yarn
yarn start
~~~

应用将在本地运行（例如 `http://localhost:3000`）。

## 创建 RichText 组件

接下来，获取 DHTMLX RichText 的源代码。请先停止应用，然后安装 RichText 包。

### 步骤 1. 安装包

下载 [**试用版 RichText 包**](how_to_start.md#installing-richtext-via-npm-or-yarn)，并按照 README 文件中的步骤操作。请注意:试用版有效期为 30 天。

### 步骤 2. 创建组件

要将 RichText 添加到您的应用中，请创建一个新的 Angular 组件。在 **src/app/** 下新建一个 **richtext** 文件夹，然后添加名为 **richtext.component.ts** 的新文件。

#### 导入源文件

打开 **richtext.component.ts**，引入 RichText 的源文件。导入路径如下:

- 对于从本地文件夹安装的 PRO 版本:

~~~jsx
import { Richtext} from 'dhx-richtext-package';
~~~

- 对于试用版:

~~~jsx
import { Richtext} from '@dhx/trial-richtext';
~~~

本指南以 **试用版** 为例进行演示。

#### 设置容器并初始化 Richtext

要在页面上显示 RichText，需要设置一个容器，并在构造函数中初始化组件:

~~~jsx {} title="richtext.component.ts"
import { Richtext} from '@dhx/trial-richtext';
import { Component, ElementRef, OnInit, ViewChild, OnDestroy, ViewEncapsulation} from '@angular/core';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: "richtext", // 在 "app.component.ts" 文件中以 <richtext /> 形式引用的模板名称
    styleUrls: ["./richtext.component.css"], // 引入 css 文件
    template:  `<div class = "component_container">
                    <div #richtext_container class = "widget"></div>
                </div>`
})

export class RichTextComponent implements OnInit, OnDestroy {
    // 初始化 RichText 的容器
    @ViewChild("richtext_container", { static: true }) richtext_container!: ElementRef;

    private _editor!: Richtext;

    ngOnInit() {
        // 初始化 RichText 组件
        this._editor = new Richtext(this.richtext_container.nativeElement, {});
    }

    ngOnDestroy(): void {
        this._editor.destructor(); // 销毁 RichText
    }
}
~~~

#### 添加样式

为确保 RichText 显示正常，请添加所需的样式。在 **src/app/richtext/** 目录下创建 **richtext.component.css** 文件，并为 RichText 及其容器添加如下样式:

~~~css title="richtext.component.css"
/* 导入 RichText 样式 */
@import "@dhx/trial-richtext/dist/richtext.css";

/* 设置页面初始样式 */
html,
body{
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

要为 RichText 加载数据，只需提供一组数据。在 **src/app/richtext/** 下新建 **data.ts** 文件，并添加一些示例数据:

~~~jsx {} title="data.ts"
export function getData() {
  const value = `
    <h2>RichText 2.0</h2>
    <p>Repository at <a href="https://git.webix.io/xbs/richtext">https://git.webix.io/xbs/richtext</a></p>
    <p><img src="https://placecats.com/500/300" style="width:500px;height:300px;"></p>`;
  return { value };
}
~~~

接下来，打开 ***richtext.component.ts***，导入数据文件，并在 `ngOnInit()` 方法中将数据属性设置到 RichText 的配置中，如下所示:

~~~jsx {} title="richtext.component.ts"
import { Richtext} from '@dhx/trial-richtext';
import { getData } from "./data"; // 导入数据
import { Component, ElementRef, OnInit, ViewChild, OnDestroy, ViewEncapsulation} from '@angular/core';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: "richtext", 
    styleUrls: ["./richtext.component.css"],
    template:  `<div class = "component_container">
                    <div #richtext_container class = "widget"></div>
                </div>`
})

export class RichTextComponent implements OnInit, OnDestroy {
    @ViewChild("richtext_container", { static: true }) richtext_container!: ElementRef;

    private _editor!: RichText;

    ngOnInit() {
        const { value } = getData(); // 初始化数据属性
        this._editor = new Richtext(this.richtext_container.nativeElement, {
            value
            // 其他配置属性 
        });
    }

    ngOnDestroy(): void {
        this._editor.destructor(); 
    }
}
~~~

另外，您也可以在 `ngOnInit()` 方法中使用 [`setValue()`](api/methods/set-value.md) 方法为 RichText 加载数据。

~~~jsx {} title="richtext.component.ts"
import { Richtext} from '@dhx/trial-richtext';
import { getData } from "./data"; // 导入数据
import { Component, ElementRef, OnInit, ViewChild, OnDestroy, ViewEncapsulation} from '@angular/core';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: "richtext", 
    styleUrls: ["./richtext.component.css"],
    template:  `<div class = "component_container">
                    <div #richtext_container class = "widget"></div>
                </div>`
})

export class RichTextComponent implements OnInit, OnDestroy {
    @ViewChild("richtext_container", { static: true }) richtext_container!: ElementRef;

    private _editor!: RichText;

    ngOnInit() {
        const { value } = getData(); // 初始化数据属性
        this._editor = new Richtext(this.richtext_container.nativeElement, {
            // 其他配置属性 
        });

        // 通过 setValue() 方法设置数据
        this._editor.setValue({ value }); 
    }

    ngOnDestroy(): void {
        this._editor.destructor(); 
    }
}
~~~

至此，RichText 组件已搭建完成。当其被添加到页面时，RichText 会使用提供的数据进行初始化。您还可以根据需要添加其他配置选项。完整属性列表请参阅 [RichText API 文档](api/overview/main_overview.md)。

#### 事件处理

每当 RichText 中发生某些操作时，都会触发事件。您可以监听这些事件以执行自定义代码。完整事件列表请见 [事件 API 文档](api/overview/events_overview.md)。

编辑 **richtext.component.ts** 文件，并将 `ngOnInit()` 方法更新如下:

~~~jsx {} title="richtext.component.ts"
// ...
ngOnInit() {
    this._editor = new Richtext(this.richtext_container.nativeElement, {});

    this._editor.api.on("print", () => {
        console.log("The document is printing");
    });
}

ngOnDestroy(): void {
    this._editor.destructor(); 
}
~~~

### 步骤 3. 在应用中添加 RichText

要在应用中使用 ***RichTextComponent***，请打开 ***src/app/app.component.ts*** 并将默认代码替换为:

~~~jsx {} title="app.component.ts"
import { Component } from "@angular/core";

@Component({
    selector: "app-root",
    template: `<richtext/>`
})
export class AppComponent {
    name = "";
}
~~~

现在，在 ***src/app/*** 下创建 ***app.module.ts***，并按如下方式添加 *RichTextComponent*:

~~~jsx {} title="app.module.ts"
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { RichTextComponent } from "./richtext/richtext.component";

@NgModule({
    declarations: [AppComponent, RichTextComponent],
    imports: [BrowserModule],
    bootstrap: [AppComponent]
})
export class AppModule {}
~~~

最后，更新 ***src/main.ts***，代码如下:

~~~jsx title="main.ts"
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/app.module";
platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch((err) => console.error(err));
~~~

现在您可以启动应用，在页面上看到加载了数据的 RichText 组件。

import trial_richtext from '@site/static/img/trial_richtext.png';

<img
  src={trial_richtext}
  alt="Trial richtext"
  className="img_border"
/>

至此，DHTMLX RichText 与 Angular 的集成就完成了。您可以根据实际需求调整代码。完整示例可参考 [**GitHub**](https://github.com/DHTMLX/angular-richtext-demo)。

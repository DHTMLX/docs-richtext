---
sidebar_label: 与Angular集成
title: 与Angular集成
description: 您可以在DHTMLX JavaScript RichText库的文档中了解与Angular集成的相关内容。浏览开发指南和API参考，查看代码示例和在线演示，并下载DHTMLX RichText的免费30天评估版本。
---

# 与Angular集成 {#integration-with-angular}

:::tip[提示]
在阅读本文档之前，您应该熟悉**Angular**的基本概念和模式。如需复习，请参阅[**Angular文档**](https://v17.angular.io/docs)。
:::

DHTMLX RichText与**Angular**兼容。我们已准备了如何在**Angular**中使用DHTMLX RichText的代码示例。更多信息，请参阅对应的[**GitHub示例**](https://github.com/DHTMLX/angular-richtext-demo)。

## 创建项目 {#creating-a-project}

:::info[信息]
在开始创建新项目之前，请安装[**Angular CLI**](https://v17.angular.io/cli)和[**Node.js**](https://nodejs.org/en/)。
:::

使用Angular CLI创建一个新的**my-angular-richtext-app**项目。运行以下命令：

~~~json
ng new my-angular-richtext-app
~~~

:::note[注意]
如果您想按照本指南操作，在创建新Angular应用时请禁用服务端渲染（SSR）和静态站点生成（SSG/Prerendering）！
:::

上述命令会安装所有必要的工具，您无需运行任何额外命令。

### 安装依赖 {#installation-of-dependencies}

进入新创建的应用文件夹：

~~~json
cd my-angular-richtext-app
~~~

安装依赖并启动dev server。请使用[**yarn**](https://yarnpkg.com/)包管理器：

~~~json
yarn
yarn start
~~~

应用应在本地运行（例如`http://localhost:3000`）。

## 创建RichText {#creating-richtext}

现在您需要获取DHTMLX RichText的源代码。首先，停止应用并继续安装RichText包。

### 步骤1：安装包 {#step-1-package-installation}

下载[**试用版RichText包**](/how_to_start/#installing-richtext-via-npm-or-yarn)并按照README文件中的步骤操作。请注意，试用版RichText仅可使用30天。

### 步骤2：创建组件 {#step-2-component-creation}

现在您需要创建一个Angular组件，以便将RichText添加到应用中。在**src/app/**文件夹中创建**richtext**文件夹，在其中添加一个新文件并命名为**richtext.component.ts**。

#### 引入源文件 {#import-source-files}

打开**richtext.component.ts**文件并引入RichText源文件。请注意：

- 如果您使用PRO版本并从本地文件夹安装RichText包，引入路径如下：

~~~jsx
import { Richtext} from 'dhx-richtext-package';
~~~

- 如果您使用试用版RichText，请指定以下路径：

~~~jsx
import { Richtext} from '@dhx/trial-richtext';
~~~

在本教程中，您可以查看如何配置**试用版**RichText。

#### 设置容器并初始化RichText {#set-containers-and-initialize-the-richtext}

要在页面上显示RichText，您需要为RichText设置一个容器，并使用对应的构造函数初始化组件：

~~~jsx {} title="richtext.component.ts"
import { Richtext} from '@dhx/trial-richtext';
import { Component, ElementRef, OnInit, ViewChild, OnDestroy, ViewEncapsulation} from '@angular/core';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: "richtext", // 在"app.component.ts"文件中用作<richtext />的模板名称
    styleUrls: ["./richtext.component.css"], // 引入css文件
    template:  `<div class = "component_container">
                    <div #richtext_container class = "widget"></div>
                </div>`
})

export class RichTextComponent implements OnInit, OnDestroy {
    // 初始化RichText的容器
    @ViewChild("richtext_container", { static: true }) richtext_container!: ElementRef;

    private _editor!: Richtext;

    ngOnInit() {
        // 初始化RichText组件
        this._editor = new Richtext(this.richtext_container.nativeElement, {});
    }

    ngOnDestroy(): void {
        this._editor.destructor(); // 销毁RichText
    }
}
~~~

#### 添加样式 {#adding-styles}

要正确显示RichText，您需要提供相应的样式。为此，可以在**src/app/richtext/**文件夹中创建**richtext.component.css**文件，并为RichText及其容器指定重要样式：

~~~css title="richtext.component.css"
/* 引入RichText样式 */
@import "@dhx/trial-richtext/dist/richtext.css";

/* 为初始页面指定样式 */
html,
body{
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

要向RichText中添加数据，您需要提供一个数据集。可以在**src/app/richtext/**文件夹中创建**data.ts**文件并添加一些数据：

~~~jsx {} title="data.ts"
export function getData() {
  const value = `
    <h2>RichText 2.0</h2>
    <p>Repository at <a href="https://git.webix.io/xbs/richtext">https://git.webix.io/xbs/richtext</a></p>
    <p><img src="https://placecats.com/500/300" style="width:500px;height:300px;"></p>`;
  return { value };
}
~~~

然后打开***richtext.component.ts***文件，引入数据文件，并在`ngOnInit()`方法中将相应的数据属性传入RichText配置对象，如下所示：

~~~jsx {} title="richtext.component.ts"
import { Richtext} from '@dhx/trial-richtext';
import { getData } from "./data"; // 引入数据
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

您也可以在Angular的`ngOnInit()`方法中使用[`setValue()`](api/methods/set-value.md)方法向RichText加载数据。

~~~jsx {} title="richtext.component.ts"
import { Richtext} from '@dhx/trial-richtext';
import { getData } from "./data"; // 引入数据
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

        // 通过setValue()方法应用数据
        this._editor.setValue({ value });
    }

    ngOnDestroy(): void {
        this._editor.destructor();
    }
}
~~~

现在RichText组件已准备就绪。当元素被添加到页面时，它将使用数据初始化RichText。您也可以提供必要的配置设置。请访问我们的[RichText API文档](api/overview/main_overview.md)查看完整的可用属性列表。

#### 处理事件 {#handling-events}

当用户在RichText中执行某些操作时，会触发一个事件。您可以使用这些事件来检测操作并运行相应的代码。请参阅[完整事件列表](api/overview/events_overview.md)。

打开**richtext.component.ts**文件，按以下方式完善`ngOnInit()`方法：

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

### 步骤3：将RichText添加到应用中 {#step-3-adding-richtext-into-the-app}

要将***RichTextComponent***组件添加到应用中，打开***src/app/app.component.ts***文件，将默认代码替换为以下内容：

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

然后在***src/app/***文件夹中创建***app.module.ts***文件，并按如下所示指定*RichTextComponent*：

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

最后一步是打开***src/main.ts***文件，将现有代码替换为以下内容：

~~~jsx title="main.ts"
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/app.module";
platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch((err) => console.error(err));
~~~

完成后，您可以启动应用，查看加载了数据的RichText页面。

<div className="img_border">
![RichText初始化](../assets/trial_richtext.png)
</div>

现在您已了解如何将DHTMLX RichText与Angular集成。您可以根据具体需求自定义代码。最终的高级示例可在[**GitHub**](https://github.com/DHTMLX/angular-richtext-demo)上找到。

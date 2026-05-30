---
sidebar_label: 快速入门
title: 快速入门
description: 您可以在 DHTMLX JavaScript RichText 库的文档中了解如何开始使用 DHTMLX RichText。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX RichText 的免费 30 天评估版本。
---

# 快速入门

本教程清晰全面，将引导您完成在页面上获得功能完整的 RichText 所需的各个步骤。

<div className="img_border">
![DHTMLX RichText Classic Mode](./assets/richtext/classic_mode.png)
</div>

## 第一步：引入源文件

首先创建一个 HTML 文件并将其命名为 *index.html*，然后将 RichText 源文件引入到该文件中。

需要引入两个必要文件：

- RichText 的 JS 文件
- RichText 的 CSS 文件

~~~html {5-6} title="index.html"
<!DOCTYPE html>
<html>
    <head>
        <title>How to Start with RichText</title>
        <script src="./codebase/richtext.js"></script>   
        <link href="./codebase/richtext.css" rel="stylesheet">
    </head>
    <body>
        <script>
        // 您的代码将写在这里
        </script>
    </body>
</html>
~~~

### 通过 npm 或 yarn 安装 RichText

您可以使用 **yarn** 或 **npm** 包管理器将 JavaScript RichText 导入到项目中。

#### 通过 npm 或 yarn 安装试用版 RichText

:::info
如果您希望使用 RichText 试用版，请下载 [**试用版 RichText 安装包**](https://dhtmlx.com/docs/products/dhtmlxRichtext/download.shtml) 并按照 *README* 文件中的步骤操作。请注意，试用版 RichText 仅可使用 30 天。
:::

#### 通过 npm 或 yarn 安装专业版 RichText

:::info
您可以在 [客户专区](https://dhtmlx.com/clients/) 生成 **npm** 登录名和密码，直接访问 DHTMLX 私有 **npm**。详细安装指南也可在该页面获取。请注意，访问私有 **npm** 需要您的专有 RichText 许可证处于有效状态。
:::

## 第二步：创建 RichText

现在您可以向页面添加 RichText 了。首先，创建 RichText 的 `<div>` 容器，具体步骤如下：

- 在 *index.html* 文件中指定一个 DIV 容器
- 使用 `richtext.Richtext` 构造函数初始化 RichText

构造函数接受 HTML 容器的任意有效 CSS 选择器（RichText 将被放置其中）以及相应的配置对象作为参数。

~~~html {9,12-14} title="index.html"
<!DOCTYPE html>
<html>
    <head>
        <title>How to Start with RichText</title>
        <script src="./codebase/richtext.js"></script>   
        <link href="./codebase/richtext.css" rel="stylesheet">  
    </head>
    <body>
        <div id="root"></div>

        <script>
            const editor = new richtext.Richtext("#root", {
                // 配置属性
            });
        </script>
    </body>
</html>
~~~

## 第三步：配置 RichText

接下来，您可以指定 RichText 组件初始化时所需的配置属性。

要开始使用 RichText，首先需要通过 [`value`](api/config/value.md) 属性为编辑器提供初始数据。此外，您还可以启用 [**menubar**](api/config/menubar.md)、自定义 [**toolbar**](api/config/toolbar.md)、指定 [**fullscreen**](api/config/fullscreen-mode.md) 和 [**layout**](api/config/layout-mode.md) 模式、应用新的 [**locale**](api/config/locale.md) 以及 [**默认样式**](api/config/default-styles.md)。

~~~jsx {2-12}
const editor = new richtext.Richtext("#root", {
    menubar: true,
    toolbar: false,
    fullscreenMode: true,
    layoutMode: "document",
    locale: richtext.locales.cn
    defaultStyles: {
        h4: {
            "font-family": "Roboto"
        },
        // 其他设置
    }
});
~~~

## 下一步

完成了。仅需三个简单步骤，您就拥有了一个便捷的内容编辑工具。现在您可以开始处理内容，或继续深入探索 JavaScript RichText 的更多功能。

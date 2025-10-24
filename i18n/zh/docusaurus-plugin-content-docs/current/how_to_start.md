---
sidebar_label: 如何开始
title: 如何开始
description: 您可以在 DHTMLX JavaScript RichText 库的文档中了解如何开始使用 DHTMLX RichText。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX RichText 的免费 30 天评估版本。
---

# 如何开始

以下是让 RichText 在页面上运行的简单步骤。

import classic_mode from '@site/static/img/richtext/classic_mode.png';

<img
  src={classic_mode}
  alt="Classic mode"
  className="img_border"
/>

## 第一步:引入源文件

首先，创建一个名为 *index.html* 的 HTML 文件，并在该文件中添加 RichText 的源文件。

您需要以下两个文件:

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
        // your code will be here
        </script>
    </body>
</html>
~~~

### 通过 npm 或 yarn 安装 RichText

您可以通过 **yarn** 或 **npm** 将 RichText 添加到您的项目中。

#### 通过 npm 或 yarn 安装试用版 RichText

:::info
如需使用 RichText 试用版，请获取 [**trial RichText package**](https://dhtmlx.com/docs/products/dhtmlxRichtext/download.shtml) 并参阅 *README* 文件中的步骤。请注意，试用版有效期为 30 天。
:::

#### 通过 npm 或 yarn 安装 PRO 版 RichText

:::info
如需获取 PRO 版本，请前往 [Client's Area](https://dhtmlx.com/clients/) 并为 DHTMLX 私有 **npm** 生成您的登录名和密码。那里有详细的安装指南。只要您的专有 RichText 许可证处于有效状态，即可访问私有 **npm**。
:::

## 第二步:创建 RichText

现在可以将 RichText 添加到页面上。首先为 RichText 创建一个 `<div>` 容器。操作如下:

- 在 *index.html* 文件中添加一个 DIV 容器
- 使用 `richtext.Richtext` 构造函数初始化 RichText

该构造函数接受任何有效的 HTML 容器 CSS 选择器，以及您希望包含的配置对象。

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
                // configuration properties
            });
        </script>
    </body>
</html>
~~~

## 第三步:配置 RichText

现在，您可以设置 RichText 启动时所需的配置选项。

首先，可通过 [`value`](api/config/value.md) 属性为编辑器设置初始数据。您还可以启用 [**menubar**](api/config/menubar.md)、自定义 [**toolbar**](api/config/toolbar.md)、设置 [**fullscreen**](api/config/fullscreen-mode.md) 和 [**layout**](api/config/layout-mode.md) 模式、选择新的 [**locale**](api/config/locale.md)，以及应用 [**default styles**](api/config/default-styles.md)。

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
        // other settings
    }
});
~~~

## 后续步骤

就是这样！通过这三个步骤，RichText 已经可以编辑内容。您可以立即开始使用，也可以继续探索 JavaScript RichText 的更多功能。

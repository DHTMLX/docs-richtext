---
sidebar_label: 快速入门
title: 快速入门
description: 您可以在 DHTMLX JavaScript RichText 库的文档中了解如何开始使用 DHTMLX RichText。浏览开发指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX RichText 的免费 30 天评估版本。
---

# 快速入门 {#how-to-start}

本清晰全面的教程将引导您完成在页面上创建一个功能齐全的 RichText 所需的步骤。

<div className="img_border">
![DHTMLX RichText 经典模式](/img/richtext/classic_mode.png)
</div>

## 第一步：引入源文件 {#step-1-including-source-files}

首先创建一个 HTML 文件并将其命名为 *index.html*，然后将 RichText 源文件引入该文件中。

需要引入以下两个文件：

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
        // 您的代码将放在这里
        </script>
    </body>
</html>
~~~

### 通过 npm 或 yarn 安装 RichText {#installing-richtext-via-npm-or-yarn}

您可以使用 **yarn** 或 **npm** 包管理器将 JavaScript RichText 导入到您的项目中。

#### 通过 npm 或 yarn 安装试用版 RichText {#installing-trial-richtext-via-npm-or-yarn}

:::info[信息]
如果您想使用 RichText 的试用版，请下载 [**RichText 试用包**](https://dhtmlx.com/docs/products/dhtmlxRichtext/download.shtml) 并按照 *README* 文件中的步骤操作。请注意，试用版 RichText 仅提供 30 天的使用期限。
:::

#### 通过 npm 或 yarn 安装专业版 RichText {#installing-pro-richtext-via-npm-or-yarn}

:::info[信息]
您可以在 [客户专区](https://dhtmlx.com/clients/) 中生成您的 **npm** 登录名和密码，从而直接访问 DHTMLX 私有 **npm**。详细的安装指南也可在该页面获取。请注意，访问私有 **npm** 的权限仅在您的专有 RichText 许可证有效期内可用。
:::

## 第二步：创建 RichText {#step-2-creating-richtext}

现在您可以将 RichText 添加到页面中了。首先，为 RichText 创建一个 `<div>` 容器，按以下步骤操作：

- 在 *index.html* 文件中指定一个 DIV 容器
- 使用 `richtext.Richtext` 构造函数初始化 RichText

构造函数接受任意有效的 CSS 选择器（用于指定 RichText 所在的 HTML 容器）以及相应的配置对象作为参数。

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

## 第三步：配置 RichText {#step-3-configuring-richtext}

接下来，您可以指定 RichText 组件在初始化时所需的配置属性。

要开始使用 RichText，首先需要通过 [`value`](api/config/value.md) 属性为编辑器提供初始数据。此外，您还可以启用 [`menubar`](api/config/menubar.md)，自定义 [`toolbar`](api/config/toolbar.md)，指定 [**fullscreen**](api/config/fullscreen-mode.md) 和 [**layout**](api/config/layout-mode.md) 模式，应用新的 [`locale`](api/config/locale.md) 以及 [**默认样式**](api/config/default-styles.md)。

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

## 下一步 {#whats-next}

就这些。只需三个简单的步骤，您就拥有了一个便捷的内容编辑工具。现在您可以开始处理内容，或继续探索 JavaScript RichText 的更多功能。

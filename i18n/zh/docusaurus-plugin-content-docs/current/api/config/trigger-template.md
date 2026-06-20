---
sidebar_label: triggerTemplate
title: triggerTemplate 配置项
description: 您可以在 DHTMLX JavaScript RichText 库的文档中了解 triggerTemplate 配置项。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX RichText 的免费 30 天评估版本。
---

# triggerTemplate

### 描述 {#description}

@short: 可选。自定义 RichText 在由 [`triggers`](api/config/triggers.md) 条目触发的建议下拉菜单中渲染各项内容的方式

默认情况下，下拉菜单以纯文本形式显示每个项目的 `label`。使用 `triggerTemplate` 可以渲染更丰富的行内容，例如头像加姓名和电子邮件。

### 用法 {#usage}

~~~jsx {}
function triggerTemplate({ data, trigger }) {
    return "HTML template of the suggestion item";
};
~~~

### 参数 {#parameters}

回调函数接受一个包含以下参数的对象：

- `data` - 当前建议项（`{ id, label, url }`，以及您添加到 trigger 的 `data` 数据源中的任何自定义字段）
- `trigger` - 打开下拉菜单的触发字符（`"@"`、`"#"` 等）

:::tip[提示]
下拉菜单的默认宽度为 `160px`。如果您的模板需要更多空间，请在选择器前添加 `.wx-editor` 父级：

~~~css {}
.wx-editor .wx-suggest-anchor {
    width: 220px;
}
~~~
:::

### 示例 {#example}

以下代码片段配置了两个触发器：`@` 用于提及，`#` 用于标签。使用 `triggerTemplate` 扩展 `trigger` 值以不同方式渲染每个下拉菜单。对于 `@` 下拉菜单，模板返回一个带有头像（`data.image`）、昵称（`data.label`）和全名（`data.name`）的自定义 HTML 行。对于 `#` 触发器，模板使用 `label`：

~~~jsx {5-6,8-15}
const { template, Richtext } = richtext;

new Richtext("#root", {
    triggers: [
        { trigger: "@", data: people },
        { trigger: "#", data: tags }
    ],
    triggerTemplate: template(obj => {
        if (obj.trigger === "@") {
            return `<div class="user">
                <img class="user-avatar" src="${obj.data.image}">
                <div class="user-nickname">${obj.data.label}</div>
                <div class="user-name">${obj.data.name}</div>
            </div>`;
        }
        // 其他触发器（例如 "#"）使用纯文本 label
        return obj.data.label;
    })
});
~~~

**更新日志：** 该属性在 v2.1 中新增

**相关文章：** [提及与标签](guides/mentions_and_tags.md)

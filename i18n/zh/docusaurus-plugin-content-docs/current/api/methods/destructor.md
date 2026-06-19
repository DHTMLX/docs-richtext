---
sidebar_label: destructor()
title: destructor 方法
description: 您可以在 DHTMLX JavaScript RichText 库的文档中了解 destructor 方法。浏览开发指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX RichText 的 30 天免费评估版本。
---

# destructor()

### 描述 {#description}

@short: 移除 RichText 的所有 HTML 元素，并解除所有相关事件的绑定

### 用法 {#usage}

~~~jsx {}
destructor(): void;
~~~

### 示例 {#example}

~~~jsx {5-6}
const editor = new richtext.Richtext("#root", {
    // configuration properties
});

// remove RichText
editor.destructor();
~~~

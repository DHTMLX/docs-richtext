---
sidebar_label: destructor()
title: destructor 方法
description: 您可以在 DHTMLX JavaScript RichText 库的文档中了解 destructor 方法。浏览开发者指南和 API 参考，尝试代码示例和在线演示，并下载 DHTMLX RichText 的免费 30 天试用版。
---

# destructor()

### 描述

@short: 清除 RichText 组件的所有 HTML 元素并解除所有关联的事件。

### 用法

~~~jsx {}
destructor(): void;
~~~

### 示例

~~~jsx {5-6}
const editor = new richtext.Richtext("#root", {
    // 配置属性
});

// 移除 RichText
editor.destructor();
~~~

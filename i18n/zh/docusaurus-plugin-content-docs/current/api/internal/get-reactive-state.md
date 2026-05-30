---
sidebar_label: api.getReactiveState()
title: getReactiveState 方法
description: 您可以在 DHTMLX JavaScript RichText 库的文档中了解 getReactiveState 方法。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX RichText 的免费 30 天评估版本。
---

# api.getReactiveState()

### 描述

@short: 返回包含 RichText 响应式属性的对象

### 用法

~~~jsx {}
api.getReactiveState(): object;
~~~

### 返回值

该方法返回一个包含以下参数的对象：

~~~jsx {}
{
    cursorState: { subscribe: any },
    defaultStyles {...},
    document {...},
    fullscreen {...},
    history {...},
    layoutMode {...},
    popup {...},
    selection {...}
}
~~~  

### 示例

~~~jsx {5-7}
// 初始化 RichText
const editor = new richtext.Richtext("#root", {
    // 配置属性
});
// 获取 RichText 的响应式状态
const reactive_state = editor.api.getReactiveState();
console.log(reactive_state)
~~~

**变更日志：** 该方法在 v2.0 中添加

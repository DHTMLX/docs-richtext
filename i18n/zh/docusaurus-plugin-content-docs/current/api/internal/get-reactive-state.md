---
sidebar_label: api.getReactiveState()
title: getReactiveState 方法
description: 您可以在 DHTMLX JavaScript RichText 库的文档中了解 getReactiveState 方法。浏览开发者指南和 API 参考，尝试代码示例和在线演示，并免费下载 DHTMLX RichText 的 30 天试用版。
---

# api.getReactiveState()

### 描述

@short: 提供一个包含 RichText 响应式属性的对象。

### 用法

~~~jsx {}
api.getReactiveState(): object;
~~~

### 返回值

该方法返回一个包含以下属性的对象:

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

**更新日志:** 此方法自版本 2.0 起引入

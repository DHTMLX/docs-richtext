---
sidebar_label: api.getState()
title: getState 方法
description: 您可以在 DHTMLX JavaScript RichText 库的文档中了解 getState 方法。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载免费 30 天评估版 DHTMLX RichText。
---

# api.getState()

### 描述

@short: Returns an object with the StateStore properties of RichText

### 用法

~~~jsx {}
api.getState(): object;
~~~

### 返回值

该方法返回一个包含以下参数的对象：

~~~jsx {}
{     
    cursorState: {},
    defaultStyles: {},
    document: {},
    fullscreen: boolean,
    history: []
    layoutMode: string,
    popup: any,
    selection: {}
}
~~~

### 示例

~~~jsx {5-7}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// get the State of RichText
const state = editor.api.getState();
console.log(state);
~~~

**更新日志：** 该方法在 v2.0 中添加

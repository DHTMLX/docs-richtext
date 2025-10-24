---
sidebar_label: api.getState()
title: getState 方法
description: 您可以在 DHTMLX JavaScript RichText 库的文档中了解 getState 方法。浏览开发者指南和 API 参考，试用代码示例和在线演示，并免费下载 30 天评估版的 DHTMLX RichText。
---

# api.getState()

### 描述

@short: 提供一个包含 RichText 当前 StateStore 属性的对象。

### 用法

~~~jsx {}
api.getState(): object;
~~~

### 返回值

该方法返回一个包含以下属性的对象:

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
// 初始化 RichText
const editor = new richtext.Richtext("#root", {
    // 配置属性
});
// 获取 RichText 的当前状态
const state = editor.api.getState();
console.log(state);
~~~

**更新日志:** 该方法自 v2.0 版本起添加

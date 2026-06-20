---
sidebar_label: api.getState()
title: getState 方法
description: 您可以在 DHTMLX JavaScript RichText 库的文档中了解 getState 方法。浏览开发指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX RichText 的 30 天免费试用版。
---

# api.getState()

### 描述 {#description}

@short: 返回包含 RichText 的 StateStore 属性的对象

### 用法 {#usage}

~~~jsx {}
api.getState(): object;
~~~

### 返回值 {#returns}

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

### 示例 {#example}

~~~jsx {5-7}
// 初始化 RichText
const editor = new richtext.Richtext("#root", {
    // 配置属性
});
// 获取 RichText 的状态
const state = editor.api.getState();
console.log(state);
~~~

**更新日志：** 该方法在 v2.0 中添加

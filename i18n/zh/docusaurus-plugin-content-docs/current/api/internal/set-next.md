---
sidebar_label: api.setNext()
title: setNext 方法
description: 您可以在 DHTMLX JavaScript RichText 库的文档中了解 setNext 方法。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX RichText 的免费 30 天评估版本。
---

# api.setNext()

### 描述 {#description}

@short: 用于将某个操作添加到 Event Bus 顺序中

### 用法 {#usage}

~~~jsx {}
api.setNext(next: any): void;
~~~

### 参数 {#parameters}

- `next` - （必填）要加入 **Event Bus** 顺序的操作

### 示例 {#example}

~~~jsx {10-11}
const server = "https://some-backend-url";
// Assume that you have a custom server service class named someServerService
const someServerService = new ServerDataService(server);

fetch(server + "/data").then((res) => res.json()).then((data) => {
    const editor = new richtext.Richtext("#root", {
        value: data
    });

    // Integrate someServerService into the Event Bus order of widget
    editor.api.setNext(someServerService);
});
~~~

**变更日志：** 该方法在 v2.0 中新增

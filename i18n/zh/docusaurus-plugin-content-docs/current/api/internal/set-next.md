---
sidebar_label: api.setNext()
title: setNext 方法
description: 您可以在 DHTMLX JavaScript RichText 库的文档中了解 setNext 方法。浏览开发者指南和 API 参考，尝试代码示例和实时演示，并下载 DHTMLX RichText 的免费 30 天评估版本。
---

# api.setNext()

### 描述

@short: 此方法允许您将一个操作添加到事件总线（Event Bus）序列中。

### 用法

~~~jsx {}
api.setNext(next: any): void;
~~~

### 参数

- `next` - （必填）要添加到**事件总线**序列中的操作  

### 示例

~~~jsx {10-11}
const server = "https://some-backend-url";
// 假设您有一个名为 someServerService 的自定义服务器服务类
const someServerService = new ServerDataService(server);

fetch(server + "/data").then((res) => res.json()).then((data) => {
    const editor = new richtext.Richtext("#root", {
        value: data
    });

    // 将 someServerService 添加到组件的事件总线序列中
    editor.api.setNext(someServerService);
});
~~~

**更新日志:** 此方法自 v2.0 版本起新增

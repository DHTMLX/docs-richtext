---
sidebar_label: 粘贴
title: paste 事件
description: 浏览 DHTMLX JavaScript RichText 库文档中的 paste 事件。访问开发者指南、API 参考，试用代码示例和在线演示，并下载 DHTMLX RichText 的免费 30 天试用版。
---

# paste

### 描述

@short: 当内容被粘贴时触发

### 用法

~~~jsx {}
"paste": () => boolean | void;
~~~

:::info
要管理内部事件，请参考 [**事件总线方法**](api/overview/event_bus_methods_overview.md)
:::

### 示例

~~~jsx {5-8}
// 初始化 RichText
const editor = new richtext.Richtext("#root", {
    // 配置属性
});
// 订阅 "paste" 事件
editor.api.on("paste", () => {
    console.log("内容已被粘贴");
});
~~~

**更新日志:** 该事件自 v2.0 版本引入

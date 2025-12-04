---
sidebar_label: 导入
title: 导入事件
description: 了解 DHTMLX JavaScript RichText 库中的导入事件。探索开发者指南、API 参考，试用代码示例和在线演示，并免费下载 DHTMLX RichText 30 天试用版。
---

# 导入

### 描述

@short: 当从菜单栏选择"导入"选项或通过 Event Bus 方法触发时，会触发此事件。

### 用法

~~~jsx {}
"import": ({ html?: string }) => boolean | void;
~~~

### 参数

**import** 事件的回调函数接收一个包含以下参数的对象:

- `html` - 包含 HTML 内容的字符串

:::info
要管理内部事件，可以使用[**Event Bus 方法**](api/overview/event_bus_methods_overview.md)
:::

### 示例

~~~jsx {5-13}
// 初始化 RichText
const editor = new richtext.Richtext("#root", {
    // 配置属性
});
// 监听 "import" 事件
editor.api.on("import", (obj) => {
    console.log(obj.html);
    console.log("新值已导入");
});
// 执行导入操作
editor.api.exec("import", {
    html: "<h2>some value</h2>" // 内部调用 setValue
});
~~~

**更新日志:** 此事件自 v2.0 版本引入

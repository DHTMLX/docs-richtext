---
sidebar_label: import
title: import 事件
description: 您可以在 DHTMLX JavaScript RichText 库的文档中了解 import 事件。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX RichText 的免费 30 天评估版本。
---

# import

### 描述

@short: 在菜单栏中按下"Import"选项或通过 Event Bus 方法触发后触发

### 用法

~~~jsx {}
"import": ({ html?: string }) => boolean | void;
~~~

### 参数

**import** 事件的回调可以接受一个包含以下参数的对象：

- `html` - HTML 格式的文本值

:::info
如需处理内部事件，可以使用 [**Event Bus 方法**](api/overview/event_bus_methods_overview.md)
:::

### 示例

~~~jsx {5-13}
// 初始化 RichText
const editor = new richtext.Richtext("#root", {
    // 配置属性
});
// 订阅 "import" 事件
editor.api.on("import", (obj) => {
    console.log(obj.html);
    console.log("The new value was imported");
});
// 导入新值
editor.api.exec("import", {
    html: "<h2>some value</h2>" // simply calls setValue
});
~~~

**更新日志：** 该事件已在 v2.0 中添加

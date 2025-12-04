---
sidebar_label: 导出
title: export 事件
description: 本节介绍 DHTMLX JavaScript RichText 库中的 export 事件。内容包括开发者指南、API 参考、代码示例、在线演示以及 DHTMLX RichText 的免费 30 天试用。
---

# export

### 描述

@short: 在从菜单栏选择"导出"选项或通过事件总线方法触发后触发。

### 用法

~~~jsx {}
"export": ({ options: IExportOptions; result?: any }) => boolean | void;

interface IExportOptions {
    format?: "docx" | "pdf";
    url?: string;
    download?: boolean;
    fileName?: string;
}
~~~

### 参数

**export** 事件的回调函数接收一个包含以下属性的对象:

- `format` - 指定文件格式
- `url` - 用于导出文件的基础 URL
- `download` - 指示在服务器响应后是否自动下载文件。如果设置为 "false"，文件不会自动下载，但可以通过事件对象中的 `result` 属性访问 blob 数据
- `fileName` - 导出文件的名称

:::info
内部事件可以通过[**事件总线方法**](api/overview/event_bus_methods_overview.md)进行管理
:::

### 示例

~~~jsx {5-15}
// 初始化 RichText
const editor = new richtext.Richtext("#root", {
    // 配置属性
});
// 监听 "export" 事件
editor.api.on("export", (obj) => {
    console.log(obj);
    console.log("文件已导出");
});
// 以 pdf 格式导出内容
editor.api.exec("export", {
    format: "pdf",
    download: false,
    fileName: "some file"
});
~~~

**更新日志:** 此事件自 v2.0 版本引入

---
sidebar_label: export
title: export 事件
description: 您可以在 DHTMLX JavaScript RichText 库的文档中了解 export 事件。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX RichText 的免费 30 天评估版本。
---

# export

### 描述

@short: 在菜单栏中点击"Export"选项或通过 Event Bus 方法触发后触发

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

**export** 事件的 callback 可接收一个包含以下参数的对象：

- `format` - 文件格式
- `url` - 文件导出的基础 URL
- `download` - 允许用户指定是否在收到服务器响应后下载文件。如果该属性设置为 `"false"`，文件将不会下载，但用户可以从事件对象中获取 blob 数据（参见事件定义中的 `result` 属性）
- `fileName` - 要导出的文件名

:::info
如需处理内部事件，可使用 [**Event Bus 方法**](api/overview/event_bus_methods_overview.md)
:::

### 示例

~~~jsx {5-15}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// subscribe to the "export" event
editor.api.on("export", (obj) => {
    console.log(obj);
    console.log("The file was exported");
});
// export value as pdf file
editor.api.exec("export", {
    format: "pdf",
    download: false,
    fileName: "some file"
});
~~~

**更新日志：** 该事件在 v2.0 中新增

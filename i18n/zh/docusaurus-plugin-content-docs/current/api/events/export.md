---
sidebar_label: export
title: export 事件
description: 您可以在 DHTMLX JavaScript RichText 库的文档中了解 export 事件。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX RichText 的免费 30 天评估版本。
---

# export

### 描述 {#description}

@short: 在菜单栏中按下"Export"选项或通过 Event Bus 方法触发后触发

### 用法 {#usage}

~~~jsx {}
"export": ({ options: IExportOptions; result?: any }) => boolean | void;

interface IExportOptions {
    format?: "docx" | "pdf";
    url?: string;
    download?: boolean;
    fileName?: string;
}
~~~

### 参数 {#parameters}

**export** 事件的回调函数可接收一个包含以下参数的对象：

- `format` - 文件格式
- `url` - 文件导出的基础 URL
- `download` - 允许用户指定是否在收到服务器响应后下载文件。若该属性设置为 `"false"`，文件将不会下载，用户可通过事件对象获取 blob 数据（参见事件定义中的 `result` 属性）
- `fileName` - 要导出的文件名

:::info[信息]
如需处理内部事件，可使用 [**Event Bus 方法**](api/overview/event_bus_methods_overview.md)
:::

### 示例 {#example}

~~~jsx {5-15}
// 初始化 RichText
const editor = new richtext.Richtext("#root", {
    // 配置属性
});
// 订阅 "export" 事件
editor.api.on("export", (obj) => {
    console.log(obj);
    console.log("The file was exported");
});
// 将值导出为 pdf 文件
editor.api.exec("export", {
    format: "pdf",
    download: false,
    fileName: "some file"
});
~~~

**变更日志：** 该事件在 v2.0 中新增

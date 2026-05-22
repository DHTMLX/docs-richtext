---
sidebar_label: export
title: export Event
description: DHTMLX JavaScript RichText 라이브러리의 export 이벤트에 대해 문서에서 확인할 수 있습니다. 개발자 가이드 및 API 참조를 살펴보고, 코드 예제와 라이브 데모를 직접 시험해 보세요. DHTMLX RichText의 무료 30일 평가판도 다운로드할 수 있습니다.
---

# export

### Description

@short: 메뉴바의 "Export" 옵션을 클릭하거나 Event Bus 메서드를 통해 실행한 후 발생합니다

### Usage

~~~jsx {}
"export": ({ options: IExportOptions; result?: any }) => boolean | void;

interface IExportOptions {
    format?: "docx" | "pdf";
    url?: string;
    download?: boolean;
    fileName?: string;
}
~~~

### Parameters

**export** 이벤트의 callback은 다음 파라미터를 가진 객체를 받을 수 있습니다:

- `format` - 파일 형식
- `url` - 파일 내보내기를 위한 기본 URL
- `download` - 서버로부터 응답을 받은 후 파일을 다운로드할지 여부를 사용자가 지정할 수 있게 합니다. 이 속성을 "false"로 설정하면 파일이 다운로드되지 않으며, 대신 이벤트 객체에서 blob 데이터를 가져올 수 있습니다 (이벤트 정의의 `result` 속성 참조)
- `fileName` - 내보낼 파일 이름

:::info
내부 이벤트 처리를 위해 [**Event Bus 메서드**](api/overview/event_bus_methods_overview.md)를 사용할 수 있습니다
:::

### Example

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

**Change log:** The event was added in v2.0

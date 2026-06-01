---
sidebar_label: export
title: export 이벤트
description: DHTMLX JavaScript RichText 라이브러리 문서에서 export 이벤트에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 사용해 보며, DHTMLX RichText의 무료 30일 평가판을 다운로드하세요.
---

# export

### 설명

@short: 메뉴바의 "Export" 옵션을 누르거나 Event Bus 메서드를 통해 호출된 후에 발생합니다

### 사용법

~~~jsx {}
"export": ({ options: IExportOptions; result?: any }) => boolean | void;

interface IExportOptions {
    format?: "docx" | "pdf";
    url?: string;
    download?: boolean;
    fileName?: string;
}
~~~

### 파라미터

**export** 이벤트의 콜백은 다음 파라미터를 포함하는 객체를 받을 수 있습니다:

- `format` - 파일 형식
- `url` - 파일 내보내기를 위한 기본 URL
- `download` - 서버로부터 응답을 받은 후 파일을 다운로드할지 여부를 사용자가 지정할 수 있도록 합니다. 이 속성이 "false"로 설정되면 파일이 다운로드되지 않고, 대신 사용자가 이벤트 객체에서 blob 데이터를 받을 수 있습니다(이벤트 정의의 `result` 속성 참조)
- `fileName` - 내보낼 파일 이름

:::info
내부 이벤트를 처리하려면 [**Event Bus 메서드**](api/overview/event_bus_methods_overview.md)를 사용할 수 있습니다
:::

### 예제

~~~jsx {5-15}
// RichText 초기화
const editor = new richtext.Richtext("#root", {
    // 설정 속성
});
// "export" 이벤트 구독
editor.api.on("export", (obj) => {
    console.log(obj);
    console.log("The file was exported");
});
// 값을 pdf 파일로 내보내기
editor.api.exec("export", {
    format: "pdf",
    download: false,
    fileName: "some file"
});
~~~

**변경 이력:** 이 이벤트는 v2.0에서 추가되었습니다

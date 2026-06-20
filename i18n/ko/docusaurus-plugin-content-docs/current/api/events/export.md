---
sidebar_label: export
title: export 이벤트
description: DHTMLX JavaScript RichText 라이브러리 문서에서 export 이벤트에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 확인하며, DHTMLX RichText 무료 30일 평가판을 다운로드하십시오.
---

# export

### 설명 {#description}

@short: 메뉴바에서 "내보내기" 옵션을 누르거나 Event Bus 메서드를 통해 호출한 후 발생합니다

### 사용법 {#usage}

~~~jsx {}
"export": ({ options: IExportOptions; result?: any }) => boolean | void;

interface IExportOptions {
    format?: "docx" | "pdf";
    url?: string;
    download?: boolean;
    fileName?: string;
}
~~~

### 매개변수 {#parameters}

`export` 이벤트의 callback은 다음 매개변수를 포함하는 객체를 받을 수 있습니다:

- `format` - 파일 형식
- `url` - 파일 내보내기에 사용할 기본 URL
- `download` - 서버로부터 응답을 받은 후 파일을 다운로드할지 여부를 사용자가 지정할 수 있습니다. 이 속성을 "false"로 설정하면 파일이 다운로드되지 않으며, 대신 이벤트 객체에서 blob 데이터를 가져올 수 있습니다 (이벤트 정의의 `result` 속성 참조)
- `fileName` - 내보낼 파일 이름

:::info[정보]
내부 이벤트를 처리하려면 [**Event Bus 메서드**](api/overview/event_bus_methods_overview.md)를 사용할 수 있습니다
:::

### 예제 {#example}

~~~jsx {5-15}
// RichText 초기화
const editor = new richtext.Richtext("#root", {
    // 구성 속성
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

**변경 로그:** 이 이벤트는 v2.0에서 추가되었습니다

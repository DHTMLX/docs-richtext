---
sidebar_label: export
title: export 이벤트
description: 이 섹션에서는 DHTMLX JavaScript RichText 라이브러리의 export 이벤트에 대해 다룹니다. 개발자 가이드, API 참조, 코드 예제, 라이브 데모, 그리고 DHTMLX RichText의 무료 30일 체험판이 포함되어 있습니다.
---

# export

### 설명

@short: 메뉴바에서 "Export" 옵션을 선택하거나 Event Bus 메서드를 통해 호출된 후 발생합니다.

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

### 매개변수

**export** 이벤트의 콜백은 다음 속성을 가진 객체를 받습니다:

- `format` - 파일 형식을 지정합니다.
- `url` - 파일 내보내기에 사용되는 기본 URL입니다.
- `download` - 서버 응답 후 파일을 자동으로 다운로드할지 여부를 나타냅니다. "false"로 설정하면 자동 다운로드가 되지 않으며, 이벤트 객체의 `result` 속성을 통해 blob 데이터를 접근할 수 있습니다.
- `fileName` - 내보내는 파일의 이름입니다.

:::info
내부 이벤트는 [**Event Bus 메서드**](api/overview/event_bus_methods_overview.md)를 사용하여 관리할 수 있습니다.
:::

### 예제

~~~jsx {5-15}
// RichText 초기화
const editor = new richtext.Richtext("#root", {
    // 설정 속성
});
// "export" 이벤트 리스너 등록
editor.api.on("export", (obj) => {
    console.log(obj);
    console.log("파일이 내보내졌습니다");
});
// 내용을 pdf 파일로 내보내기
editor.api.exec("export", {
    format: "pdf",
    download: false,
    fileName: "some file"
});
~~~

**변경 로그:** 이 이벤트는 v2.0에 도입되었습니다.

---
sidebar_label: import
title: import 이벤트
description: DHTMLX JavaScript RichText 라이브러리 문서에서 import 이벤트를 알아보세요. 개발자 가이드, API 참조, 코드 샘플 및 라이브 데모를 탐색하고 DHTMLX RichText의 30일 무료 체험판을 다운로드할 수 있습니다.
---

# import

### 설명

@short: 메뉴바에서 "Import" 옵션을 선택하거나 Event Bus 메서드를 통해 호출된 후 트리거됩니다.

### 사용법

~~~jsx {}
"import": ({ html?: string }) => boolean | void;
~~~

### 매개변수

**import** 이벤트의 콜백은 다음 매개변수를 가진 객체를 받습니다:

- `html` - HTML 콘텐츠를 포함하는 문자열

:::info
내부 이벤트를 관리하려면 [**Event Bus 메서드**](api/overview/event_bus_methods_overview.md)를 사용할 수 있습니다.
:::

### 예제

~~~jsx {5-13}
// RichText 초기화
const editor = new richtext.Richtext("#root", {
    // 구성 속성
});
// "import" 이벤트 리스닝
editor.api.on("import", (obj) => {
    console.log(obj.html);
    console.log("새 값이 import되었습니다");
});
// import 실행
editor.api.exec("import", {
    html: "<h2>some value</h2>" // 내부적으로 setValue를 호출합니다
});
~~~

**변경 로그:** 이 이벤트는 v2.0에 도입되었습니다

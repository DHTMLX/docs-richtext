---
sidebar_label: import
title: import 이벤트
description: DHTMLX JavaScript RichText 라이브러리 문서에서 import 이벤트에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 사용해 보며, DHTMLX RichText의 무료 30일 평가판을 다운로드하세요.
---

# import

### 설명

@short: 메뉴바의 "Import" 옵션을 누르거나 Event Bus 메서드를 통해 호출된 후에 발생합니다

### 사용법

~~~jsx {}
"import": ({ html?: string }) => boolean | void;
~~~

### 파라미터

**import** 이벤트의 콜백은 다음 파라미터를 포함하는 객체를 받을 수 있습니다:

- `html` - html 형식의 텍스트 값

:::info
내부 이벤트를 처리하려면 [**Event Bus 메서드**](api/overview/event_bus_methods_overview.md)를 사용할 수 있습니다
:::

### 예제

~~~jsx {5-13}
// RichText 초기화
const editor = new richtext.Richtext("#root", {
    // 설정 속성
});
// "import" 이벤트 구독
editor.api.on("import", (obj) => {
    console.log(obj.html);
    console.log("The new value was imported");
});
// 새 값 가져오기
editor.api.exec("import", {
    html: "<h2>some value</h2>" // 단순히 setValue를 호출합니다
});
~~~

**변경 이력:** 이 이벤트는 v2.0에서 추가되었습니다

---
sidebar_label: import
title: import 이벤트
description: DHTMLX JavaScript RichText 라이브러리 문서에서 import 이벤트에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 사용해 보세요. DHTMLX RichText의 무료 30일 평가판도 다운로드할 수 있습니다.
---

# import

### 설명 {#description}

@short: 메뉴바의 "Import" 옵션을 누르거나 Event Bus 메서드를 통해 호출된 후 발생합니다

### 사용법 {#usage}

~~~jsx {}
"import": ({ html?: string }) => boolean | void;
~~~

### 매개변수 {#parameters}

**import** 이벤트의 callback은 다음 매개변수를 포함하는 객체를 받을 수 있습니다:

- `html` - HTML 형식의 텍스트 값

:::info[정보]
내부 이벤트를 처리하려면 [**Event Bus 메서드**](api/overview/event_bus_methods_overview.md)를 사용할 수 있습니다.
:::

### 예제 {#example}

~~~jsx {5-13}
// RichText 초기화
const editor = new richtext.Richtext("#root", {
    // 구성 속성
});
// "import" 이벤트 구독
editor.api.on("import", (obj) => {
    console.log(obj.html);
    console.log("The new value was imported");
});
// 새 값 가져오기
editor.api.exec("import", {
    html: "<h2>some value</h2>" // simply calls setValue
});
~~~

**변경 이력:** 이 이벤트는 v2.0에서 추가되었습니다

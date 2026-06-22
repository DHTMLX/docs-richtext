---
sidebar_label: subscript
title: subscript 이벤트
description: DHTMLX JavaScript RichText 라이브러리의 subscript 이벤트에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 확인하며, DHTMLX RichText의 무료 30일 평가판을 다운로드하세요.
---

# subscript

### 설명 {#description}

@short: 메뉴바/툴바의 "Subscript" 버튼을 클릭하거나 Event Bus 메서드를 통해 실행될 때 발생합니다

### 사용법 {#usage}

~~~jsx {}
"subscript": () => boolean | void;
~~~

:::info[정보]
내부 이벤트를 처리하려면 [**Event Bus 메서드**](api/overview/event_bus_methods_overview.md)를 사용할 수 있습니다
:::

### 예제 {#example}

~~~jsx {5-10}
// RichText 초기화
const editor = new richtext.Richtext("#root", {
    // 구성 속성
});
// "subscript" 이벤트 구독
editor.api.on("subscript", () => {
    console.log("Subscript was applied");
});
// "subscript" 이벤트 트리거
editor.api.exec("subscript", {});
~~~

**변경 이력:** 이 이벤트는 v2.0에서 추가되었습니다

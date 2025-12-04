---
sidebar_label: subscript
title: subscript 이벤트
description: DHTMLX JavaScript RichText 라이브러리 문서에서 subscript 이벤트를 살펴보세요. 개발자 가이드, API 참조, 코드 샘플 및 라이브 데모를 확인하고 DHTMLX RichText의 무료 30일 평가판을 다운로드할 수 있습니다.
---

# subscript

### 설명

@short: 메뉴바/툴바에서 "Subscript" 버튼이 클릭되거나 Event Bus 메서드를 통해 호출될 때 발생합니다.

### 사용법

~~~jsx {}
"subscript": () => boolean | void;
~~~

:::info
내부 이벤트를 다루려면 [**Event Bus 메서드**](api/overview/event_bus_methods_overview.md)를 사용할 수 있습니다.
:::

### 예제

~~~jsx {5-10}
// RichText 초기화
const editor = new richtext.Richtext("#root", {
    // 구성 속성
});
// "subscript" 이벤트 리스닝
editor.api.on("subscript", () => {
    console.log("아래 첨자가 적용되었습니다");
});
// "subscript" 이벤트 실행
editor.api.exec("subscript", {});
~~~

**변경 로그:** 이 이벤트는 v2.0에서 도입되었습니다.

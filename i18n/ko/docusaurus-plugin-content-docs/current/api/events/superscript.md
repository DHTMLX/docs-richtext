---
sidebar_label: superscript
title: superscript 이벤트
description: DHTMLX JavaScript RichText 라이브러리 문서에서 superscript 이벤트에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 시도해 보며, DHTMLX RichText의 30일 무료 평가판을 다운로드하세요.
---

# superscript

### 설명

@short: 메뉴바/툴바의 "Superscript" 버튼을 누르거나 Event Bus 메서드를 통해 호출될 때 실행됨

### 사용법

~~~jsx {}
"superscript": () => boolean | void;
~~~

:::info
내부 이벤트를 처리하려면 [**Event Bus 메서드**](api/overview/event_bus_methods_overview.md)를 사용할 수 있습니다
:::

### 예제

~~~jsx {5-9}
// RichText 초기화
const editor = new richtext.Richtext("#root", {
    // 구성 속성
});
// "superscript" 이벤트 구독
editor.api.on("superscript", () => {
    console.log("Superscript was applied");
});
// "superscript" 이벤트 트리거
editor.api.exec("superscript", {});
~~~

**변경 이력:** 이 이벤트는 v2.0에서 추가되었습니다

---
sidebar_label: undo
title: undo 이벤트
description: DHTMLX JavaScript RichText 라이브러리 문서에서 undo 이벤트를 살펴보세요. 개발자 가이드, API 참조, 코드 예제 및 라이브 데모를 확인하고 DHTMLX RichText의 30일 무료 체험판을 다운로드할 수 있습니다.
---

# undo

### 설명

@short: 메뉴바/툴바에서 "Undo" 버튼이 클릭되거나 Event Bus 메서드를 통해 활성화될 때 발생합니다.

### 사용법

~~~jsx {}
"undo": () => boolean | void;
~~~

:::info
내부 이벤트는 [**Event Bus 메서드**](api/overview/event_bus_methods_overview.md)를 사용하여 관리할 수 있습니다.
:::

### 예제

~~~jsx {5-8}
// RichText 초기화
const editor = new richtext.Richtext("#root", {
    // 구성 속성
});
// "undo" 이벤트 리스닝
editor.api.on("undo", () => {
    console.log("Undo 작업이 수행되었습니다");
});
~~~

**변경 로그:** 이 이벤트는 v2.0에서 도입되었습니다

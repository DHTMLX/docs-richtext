---
sidebar_label: 위첨자
title: superscript 이벤트
description: DHTMLX JavaScript RichText 라이브러리 문서에서 superscript 이벤트를 살펴보세요. 개발자 가이드, API 참조, 코드 샘플 및 라이브 데모를 확인하고 DHTMLX RichText의 무료 30일 체험판을 다운로드하세요.
---

# superscript

### 설명

@short: 이 이벤트는 메뉴바 또는 툴바에서 "Superscript" 버튼이 클릭되었을 때 또는 Event Bus 메서드를 통해 활성화되었을 때 발생합니다.

### 사용법

~~~jsx {}
"superscript": () => boolean | void;
~~~

:::info
내부 이벤트 관리는 [**Event Bus 메서드**](api/overview/event_bus_methods_overview.md)를 참조하세요.
:::

### 예제

~~~jsx {5-9}
// RichText 초기화
const editor = new richtext.Richtext("#root", {
    // 구성 속성
});
// "superscript" 이벤트 구독
editor.api.on("superscript", () => {
    console.log("위첨자가 적용되었습니다");
});
// "superscript" 이벤트 실행
editor.api.exec("superscript", {});
~~~

**변경 로그:** 이 이벤트는 v2.0에서 도입되었습니다

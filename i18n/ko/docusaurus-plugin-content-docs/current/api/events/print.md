---
sidebar_label: print
title: print 이벤트
description: DHTMLX JavaScript RichText 라이브러리 문서에서 print 이벤트를 살펴보세요. 개발자 가이드, API 참조, 코드 예제 및 라이브 데모를 확인하고 DHTMLX RichText의 무료 30일 평가판을 받아보세요.
---

# print

### 설명

@short: 문서가 인쇄를 시작할 때 발생합니다.

### 사용법

~~~jsx {}
"print": () => boolean | void;
~~~

:::info
내부 이벤트 관리는 [**Event Bus methods**](api/overview/event_bus_methods_overview.md)를 참조하세요.
:::

### 예제

~~~jsx {5-8}
// RichText 초기화
const editor = new richtext.Richtext("#root", {
// 구성 속성
});
// "print" 이벤트 리스닝
editor.api.on("print", () => {
    console.log("문서가 인쇄 중입니다");
});
~~~

**변경 로그:** 이 이벤트는 v2.0에 도입되었습니다.

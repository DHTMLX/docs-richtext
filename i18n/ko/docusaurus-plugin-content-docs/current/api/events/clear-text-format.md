---
sidebar_label: clear-text-format
title: clear-text-format 이벤트
description: DHTMLX JavaScript RichText 라이브러리 문서에서 clear-text-format 이벤트에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 사용해 보며, DHTMLX RichText의 무료 30일 평가판을 다운로드하세요.
---

# clear-text-format

### 설명

@short: 메뉴바/툴바 또는 Event Bus 메서드를 통해 텍스트 서식이 지워질 때 발생합니다

### 사용법

~~~jsx {}
"clear-text-format": () => boolean | void;
~~~

:::info
내부 이벤트를 처리하려면 [**Event Bus 메서드**](api/overview/event_bus_methods_overview.md)를 사용할 수 있습니다
:::

### 예제

~~~jsx {5-10}
// RichText 초기화
const editor = new richtext.Richtext("#root", {
    // 설정 속성
});
// "clear-text-format" 이벤트 구독
editor.api.on("clear-text-format", () => {
    console.log("Text format was cleared");
});
// 텍스트 서식 지우기
editor.api.exec("clear-text-format", {});
~~~

**변경 이력:** 이 이벤트는 v2.0에서 추가되었습니다

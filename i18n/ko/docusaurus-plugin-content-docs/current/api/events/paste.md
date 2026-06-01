---
sidebar_label: paste
title: paste 이벤트
description: DHTMLX JavaScript RichText 라이브러리 문서에서 paste 이벤트에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 사용해 보며, DHTMLX RichText의 무료 30일 평가판을 다운로드하세요.
---

# paste

### 설명

@short: 콘텐츠를 붙여넣을 때 발생합니다

### 사용법

~~~jsx {}
"paste": () => boolean | void;
~~~

:::info
내부 이벤트를 처리하려면 [**Event Bus 메서드**](api/overview/event_bus_methods_overview.md)를 사용할 수 있습니다
:::

### 예제

~~~jsx {5-8}
// RichText 초기화
const editor = new richtext.Richtext("#root", {
    // 설정 속성
});
// "paste" 이벤트 구독
editor.api.on("paste", () => {
    console.log("Content was pasted");
});
~~~

**변경 이력:** 이 이벤트는 v2.0에서 추가되었습니다

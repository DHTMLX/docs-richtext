---
sidebar_label: copy
title: copy 이벤트
description: DHTMLX JavaScript RichText 라이브러리 문서에서 copy 이벤트에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험하며, DHTMLX RichText 30일 무료 평가판을 다운로드하세요.
---

# copy

### 설명

@short: 선택한 텍스트를 복사할 때 발생합니다

### 사용법

~~~jsx {}
"copy": () => boolean | void;
~~~

:::info
내부 이벤트를 처리하려면 [**Event Bus 메서드**](api/overview/event_bus_methods_overview.md)를 사용할 수 있습니다
:::

### 예제

~~~jsx {5-8}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// subscribe to the "copy" event
editor.api.on("copy", () => {
    console.log("Selected text was copied");
});
~~~

**변경 이력:** 해당 이벤트는 v2.0에서 추가되었습니다

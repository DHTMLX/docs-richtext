---
sidebar_label: insert-line
title: insert-line 이벤트
description: DHTMLX JavaScript RichText 라이브러리 문서에서 insert-line 이벤트에 대해 알아볼 수 있습니다. 개발자 가이드 및 API 레퍼런스를 참조하고, 코드 예제와 라이브 데모를 확인하며, DHTMLX RichText의 무료 30일 평가판을 다운로드하세요.
---

# insert-line

### 설명

@short: 수평선 삽입 시 발생합니다

### 사용법

~~~jsx {}
"insert-line": () => boolean | void;
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
// subscribe to the "insert-line" event
editor.api.on("insert-line", () => {
    console.log("The horizontal line was inserted");
});
~~~

**변경 이력:** v2.0에서 이벤트가 추가되었습니다

---
sidebar_label: outdent
title: outdent Event
description: DHTMLX JavaScript RichText 라이브러리 문서에서 outdent 이벤트에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험해 보세요. DHTMLX RichText 30일 무료 평가판도 다운로드할 수 있습니다.
---

# outdent

### 설명

@short: 블록 들여쓰기를 감소시킬 때 발생합니다

### 사용법

~~~jsx {}
"outdent": ({ step: number }) => boolean | void;
~~~

### 매개변수

**outdent** 이벤트의 callback은 다음 매개변수를 포함하는 객체를 받을 수 있습니다:

- `step` - 들여쓰기가 감소된 단계 값

:::info
내부 이벤트를 처리하려면 [**Event Bus methods**](api/overview/event_bus_methods_overview.md)를 사용할 수 있습니다
:::

### 예제

~~~jsx {5-9}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// subscribe to the "outdent" event
editor.api.on("outdent", (obj) => {
    console.log(obj);
    console.log("The indention was decreased");
});
~~~

**변경 이력:** 이 이벤트는 v2.0에서 추가되었습니다

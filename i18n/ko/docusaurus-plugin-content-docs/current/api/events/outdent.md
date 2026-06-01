---
sidebar_label: outdent
title: outdent 이벤트
description: DHTMLX JavaScript RichText 라이브러리 문서에서 outdent 이벤트에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 사용해 보며, DHTMLX RichText의 무료 30일 평가판을 다운로드하세요.
---

# outdent

### 설명

@short: 블록 들여쓰기가 감소할 때 발생합니다

### 사용법

~~~jsx {}
"outdent": ({ step: number }) => boolean | void;
~~~

### 파라미터

**outdent** 이벤트의 콜백은 다음 파라미터를 포함하는 객체를 받을 수 있습니다:

- `step` - 들여쓰기가 감소한 단계

:::info
내부 이벤트를 처리하려면 [**Event Bus 메서드**](api/overview/event_bus_methods_overview.md)를 사용할 수 있습니다
:::

### 예제

~~~jsx {5-9}
// RichText 초기화
const editor = new richtext.Richtext("#root", {
    // 설정 속성
});
// "outdent" 이벤트 구독
editor.api.on("outdent", (obj) => {
    console.log(obj);
    console.log("The indention was decreased");
});
~~~

**변경 이력:** 이 이벤트는 v2.0에서 추가되었습니다

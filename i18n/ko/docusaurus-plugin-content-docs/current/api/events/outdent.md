---
sidebar_label: outdent
title: outdent 이벤트
description: DHTMLX JavaScript RichText 라이브러리의 outdent 이벤트에 대해 설명합니다. 개발자 가이드 및 API 레퍼런스를 참고하고, 코드 예시와 라이브 데모를 확인하며, DHTMLX RichText의 30일 무료 평가판을 다운로드하십시오.
---

# outdent

### 설명 {#description}

@short: 블록 들여쓰기를 감소시킬 때 발생합니다.

### 사용법 {#usage}

~~~jsx {}
"outdent": ({ step: number }) => boolean | void;
~~~

### 파라미터 {#parameters}

**outdent** 이벤트의 callback은 다음 파라미터를 포함하는 객체를 받을 수 있습니다:

- `step` - 들여쓰기가 감소한 단계 값

:::info[정보]
내부 이벤트를 처리하려면 [**Event Bus 메서드**](api/overview/event_bus_methods_overview.md)를 사용하십시오.
:::

### 예시 {#example}

~~~jsx {5-9}
// RichText 초기화
const editor = new richtext.Richtext("#root", {
    // 구성 속성
});
// "outdent" 이벤트 구독
editor.api.on("outdent", (obj) => {
    console.log(obj);
    console.log("The indention was decreased");
});
~~~

**변경 로그:** 해당 이벤트는 v2.0에서 추가되었습니다.

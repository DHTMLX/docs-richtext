---
sidebar_label: outdent
title: outdent 이벤트
description: DHTMLX JavaScript RichText 라이브러리 문서에서 outdent 이벤트를 살펴보세요. 개발자 가이드, API 참조, 코드 샘플, 라이브 데모를 확인하고 DHTMLX RichText의 무료 30일 체험판을 다운로드하세요.
---

# outdent

### 설명

@short: 블록 들여쓰기가 줄어들 때 발생합니다

### 사용법

~~~jsx {}
"outdent": ({ step: number }) => boolean | void;
~~~

### 매개변수

**outdent** 이벤트의 콜백은 다음을 포함하는 객체를 받습니다:

- `step` - 들여쓰기가 줄어든 양

:::info
내부 이벤트를 다루려면 [**Event Bus methods**](api/overview/event_bus_methods_overview.md)를 참조하세요
:::

### 예제

~~~jsx {5-9}
// RichText 초기화
const editor = new richtext.Richtext("#root", {
    // 구성 속성
});
// "outdent" 이벤트를 수신 대기
editor.api.on("outdent", (obj) => {
    console.log(obj);
    console.log("들여쓰기가 줄어들었습니다");
});
~~~

**변경 로그:** 이 이벤트는 v2.0에 도입되었습니다

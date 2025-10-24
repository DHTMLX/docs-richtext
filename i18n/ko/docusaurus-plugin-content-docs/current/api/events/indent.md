---
sidebar_label: 들여쓰기
title: indent 이벤트
description: DHTMLX JavaScript RichText 라이브러리 문서에서 indent 이벤트를 살펴보세요. 개발자 가이드, API 참조, 코드 샘플, 라이브 데모를 확인하고 DHTMLX RichText의 무료 30일 체험판을 다운로드할 수 있습니다.
---

# indent

### 설명

@short: 블록 들여쓰기가 증가할 때 발생합니다.

### 사용법

~~~jsx {}
"indent": ({ step: number }) => boolean | void;
~~~

### 매개변수

**indent** 이벤트의 콜백은 다음 속성을 포함하는 객체를 받습니다:

- `step` - 들여쓰기가 증가한 양

:::info
내부 이벤트 관리를 위해서는 [**Event Bus methods**](api/overview/event_bus_methods_overview.md)를 참조하세요.
:::

### 예제

~~~jsx {5-9}
// RichText 초기화
const editor = new richtext.Richtext("#root", {
    // 구성 속성
});
// "indent" 이벤트 구독
editor.api.on("indent", (obj) => {
    console.log(obj);
    console.log("들여쓰기가 증가했습니다");
});
~~~

**변경 로그:** 이 이벤트는 버전 2.0에서 도입되었습니다.

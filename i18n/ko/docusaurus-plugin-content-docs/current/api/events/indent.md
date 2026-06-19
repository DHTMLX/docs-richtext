---
sidebar_label: indent
title: indent 이벤트
description: DHTMLX JavaScript RichText 라이브러리 문서에서 indent 이벤트에 대해 알아볼 수 있습니다. 개발자 가이드 및 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험하며, DHTMLX RichText 30일 무료 평가판을 다운로드하세요.
---

# indent

### 설명 {#description}

@short: 블록 들여쓰기를 증가시킬 때 발생합니다

### 사용법 {#usage}

~~~jsx {}
"indent": ({ step: number }) => boolean | void;
~~~

### 매개변수 {#parameters}

**indent** 이벤트의 callback은 다음 매개변수를 포함한 객체를 받을 수 있습니다:

- `step` - 들여쓰기가 증가한 단계 값

:::info[정보]
내부 이벤트 처리를 위해 [**Event Bus 메서드**](api/overview/event_bus_methods_overview.md)를 사용할 수 있습니다
:::

### 예제 {#example}

~~~jsx {5-9}
// RichText 초기화
const editor = new richtext.Richtext("#root", {
    // 구성 속성
});
// "indent" 이벤트 구독
editor.api.on("indent", (obj) => {
    console.log(obj);
    console.log("The indention was increased");
});
~~~

**변경 로그:** 해당 이벤트는 v2.0에서 추가되었습니다

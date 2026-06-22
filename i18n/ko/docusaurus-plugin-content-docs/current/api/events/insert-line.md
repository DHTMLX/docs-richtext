---
sidebar_label: insert-line
title: insert-line 이벤트
description: DHTMLX JavaScript RichText 라이브러리 문서에서 insert-line 이벤트에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 직접 체험해 보세요. DHTMLX RichText의 무료 30일 평가판도 다운로드할 수 있습니다.
---

# insert-line

### 설명 {#description}

@short: 수평선을 삽입할 때 발생합니다

### 사용법 {#usage}

~~~jsx {}
"insert-line": () => boolean | void;
~~~

:::info[정보]
내부 이벤트를 처리하려면 [**Event Bus 메서드**](api/overview/event_bus_methods_overview.md)를 사용할 수 있습니다
:::

### 예제 {#example}

~~~jsx {5-8}
// RichText 초기화
const editor = new richtext.Richtext("#root", {
    // 구성 속성
});
// "insert-line" 이벤트 구독
editor.api.on("insert-line", () => {
    console.log("The horizontal line was inserted");
});
~~~

**변경 로그:** 이 이벤트는 v2.0에서 추가되었습니다

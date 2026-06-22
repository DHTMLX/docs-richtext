---
sidebar_label: print
title: print 이벤트
description: DHTMLX JavaScript RichText 라이브러리 문서에서 print 이벤트에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 확인하며, DHTMLX RichText의 무료 30일 평가판을 다운로드하세요.
---

# print

### 설명 {#description}

@short: 문서를 인쇄할 때 발생합니다

### 사용법 {#usage}

~~~jsx {}
"print": () => boolean | void;
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
// "print" 이벤트 구독
editor.api.on("print", () => {
    console.log("The document is printing");
});
~~~

**변경 로그:** 이 이벤트는 v2.0에서 추가되었습니다

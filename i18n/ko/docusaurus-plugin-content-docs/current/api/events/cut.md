---
sidebar_label: cut
title: cut 이벤트
description: DHTMLX JavaScript RichText 라이브러리 문서에서 cut 이벤트를 살펴보세요. 개발자 가이드, API 참조, 코드 샘플 및 라이브 데모를 확인하고 DHTMLX RichText의 무료 30일 체험판을 다운로드할 수 있습니다.
---

# cut

### 설명

@short: 선택한 텍스트가 잘렸을 때 발생합니다

### 사용법

~~~jsx {}
"cut": () => boolean | void;
~~~

:::info
내부 이벤트 관리를 위해 [**Event Bus 메서드**](api/overview/event_bus_methods_overview.md)를 사용할 수 있습니다.
:::

### 예제

~~~jsx {5-8}
// RichText 초기화
const editor = new richtext.Richtext("#root", {
    // 구성 속성
});
// "cut" 이벤트 구독
editor.api.on("cut", () => {
    console.log("선택한 텍스트가 잘렸습니다");
});
~~~

**변경 로그:** 이 이벤트는 v2.0에서 도입되었습니다

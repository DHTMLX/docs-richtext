---
sidebar_label: hide-suggest
title: hide-suggest 이벤트
description: DHTMLX JavaScript RichText 라이브러리 문서에서 hide-suggest 이벤트에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험해 보세요. DHTMLX RichText 무료 30일 평가판도 다운로드할 수 있습니다.
---

# hide-suggest

### 설명 {#description}

@short: 제안 드롭다운이 닫힐 때 발생합니다

다음 중 하나가 발생하면 이 이벤트가 발생합니다.

- 사용자가 드롭다운에서 항목을 선택한 경우
- 사용자가 `Escape` 키를 누른 경우
- 트리거 컨텍스트에서 커서가 벗어난 경우 (예: 트리거 문자 이전에 `Backspace`를 누른 경우)
- 현재 쿼리와 일치하는 항목이 없는 경우

### 사용법 {#usage}

~~~jsx {}
"hide-suggest": () => boolean | void;
~~~

### 파라미터 {#parameters}

`hide-suggest` 이벤트 callback은 파라미터를 받지 않습니다.

:::info[정보]
내부 이벤트를 처리하려면 [**Event Bus 메서드**](api/overview/event_bus_methods_overview.md)를 사용하십시오.
:::

### 예제 {#example}

~~~jsx {5-7}
// RichText 초기화
const editor = new richtext.Richtext("#root", {
    // 설정 속성
});
// "hide-suggest" 이벤트 구독
editor.api.on("hide-suggest", () => {
    console.log("Suggestion dropdown closed");
});
~~~

**변경 이력:** 이 이벤트는 v2.1에서 추가되었습니다

---
sidebar_label: redo
title: redo 이벤트
description: DHTMLX JavaScript RichText 라이브러리 문서에서 redo 이벤트에 대해 알아볼 수 있습니다. 개발자 가이드 및 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 사용해 보거나, DHTMLX RichText 30일 무료 평가판을 다운로드하세요.
---

# redo

### 설명 {#description}

@short: 메뉴바/툴바의 "Redo" 버튼을 누르거나 Event Bus methods를 통해 실행될 때 발생합니다

### 사용법 {#usage}

~~~jsx {}
"redo": () => boolean | void;
~~~

:::info[정보]
내부 이벤트를 처리하려면 [**Event Bus methods**](api/overview/event_bus_methods_overview.md)를 사용할 수 있습니다
:::

### 예제 {#example}

~~~jsx {5-8}
// RichText 초기화
const editor = new richtext.Richtext("#root", {
    // 구성 속성
});
// "redo" 이벤트 구독
editor.api.on("redo", () => {
    console.log("Redo operation was performed");
});
~~~

**변경 이력:** 이 이벤트는 v2.0에서 추가되었습니다

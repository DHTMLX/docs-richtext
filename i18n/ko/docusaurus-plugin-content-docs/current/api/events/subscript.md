---
sidebar_label: subscript
title: subscript Event
description: DHTMLX JavaScript RichText 라이브러리 문서에서 subscript 이벤트에 대해 학습할 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험하며, DHTMLX RichText의 30일 무료 평가판을 다운로드하세요.
---

# subscript

### Description

@short: 메뉴바/툴바의 "Subscript" 버튼을 누르거나 Event Bus 메서드를 통해 실행될 때 발생합니다

### Usage

~~~jsx {}
"subscript": () => boolean | void;
~~~

:::info
내부 이벤트 처리에는 [**Event Bus 메서드**](api/overview/event_bus_methods_overview.md)를 사용할 수 있습니다
:::

### Example

~~~jsx {5-10}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// subscribe to the "subscript" event
editor.api.on("subscript", () => {
    console.log("Subscript was applied");
});
// trigger the "subscript" event
editor.api.exec("subscript", {});
~~~

**Change log:** The event was added in v2.0

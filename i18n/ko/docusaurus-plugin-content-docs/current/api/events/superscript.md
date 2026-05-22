---
sidebar_label: superscript
title: superscript Event
description: DHTMLX JavaScript RichText 라이브러리 문서에서 superscript 이벤트에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험해 보세요. DHTMLX RichText 30일 무료 평가판을 다운로드할 수도 있습니다.
---

# superscript

### Description

@short: 메뉴바/툴바에서 "Superscript" 버튼을 누르거나 Event Bus 메서드를 통해 실행될 때 발생합니다

### Usage

~~~jsx {}
"superscript": () => boolean | void;
~~~

:::info
내부 이벤트 처리에는 [**Event Bus 메서드**](api/overview/event_bus_methods_overview.md)를 사용할 수 있습니다
:::

### Example

~~~jsx {5-9}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// subscribe to the "superscript" event
editor.api.on("superscript", () => {
    console.log("Superscript was applied");
});
// trigger the "superscript" event
editor.api.exec("superscript", {});
~~~

**Change log:** v2.0에서 추가된 이벤트입니다

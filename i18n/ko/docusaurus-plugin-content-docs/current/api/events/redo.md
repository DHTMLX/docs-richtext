---
sidebar_label: redo
title: redo Event
description: DHTMLX JavaScript RichText 라이브러리의 redo 이벤트에 대해 설명서에서 확인할 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험해 보세요. DHTMLX RichText의 무료 30일 평가판도 다운로드할 수 있습니다.
---

# redo

### Description

@short: 메뉴바/툴바의 "Redo" 버튼을 누르거나 Event Bus 메서드를 통해 실행될 때 발생합니다

### Usage

~~~jsx {}
"redo": () => boolean | void;
~~~

:::info
내부 이벤트를 처리하려면 [**Event Bus methods**](api/overview/event_bus_methods_overview.md)를 사용할 수 있습니다
:::

### Example

~~~jsx {5-8}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// subscribe to the "redo" event
editor.api.on("redo", () => {
    console.log("Redo operation was performed");
});
~~~

**Change log:** v2.0에서 추가된 이벤트입니다

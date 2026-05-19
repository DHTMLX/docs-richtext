---
sidebar_label: undo
title: undo Event
description: DHTMLX JavaScript RichText 라이브러리의 undo 이벤트에 대해 설명합니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 확인하며, DHTMLX RichText 30일 무료 평가판을 다운로드하세요.
---

# undo

### Description

@short: 메뉴바/툴바의 "Undo" 버튼을 누르거나 Event Bus 메서드를 통해 실행될 때 발생합니다

### Usage

~~~jsx {}
"undo": () => boolean | void;
~~~

:::info
내부 이벤트를 처리하려면 [**Event Bus 메서드**](api/overview/event_bus_methods_overview.md)를 사용할 수 있습니다
:::

### Example

~~~jsx {5-8}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// subscribe to the "undo" event
editor.api.on("undo", () => {
    console.log("Undo operation was performed");
});
~~~

**Change log:** v2.0에서 추가된 이벤트입니다

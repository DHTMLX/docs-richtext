---
sidebar_label: clear-text-format
title: clear-text-format Event
description: DHTMLX JavaScript RichText 라이브러리의 clear-text-format 이벤트에 대한 내용을 문서에서 확인할 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 직접 실행해 보세요. DHTMLX RichText 무료 30일 평가판도 다운로드할 수 있습니다.
---

# clear-text-format

### Description

@short: 메뉴바/툴바 또는 Event Bus 메서드를 통해 텍스트 서식이 지워질 때 발생합니다

### Usage

~~~jsx {}
"clear-text-format": () => boolean | void;
~~~

:::info
내부 이벤트를 처리하려면 [**Event Bus 메서드**](api/overview/event_bus_methods_overview.md)를 사용할 수 있습니다
:::

### Example

~~~jsx {5-10}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// subscribe to the "clear-text-format" event
editor.api.on("clear-text-format", () => {
    console.log("Text format was cleared");
});
// clear text format
editor.api.exec("clear-text-format", {});
~~~

**Change log:** 해당 이벤트는 v2.0에서 추가되었습니다

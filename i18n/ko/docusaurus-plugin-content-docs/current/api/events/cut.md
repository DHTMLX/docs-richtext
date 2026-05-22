---
sidebar_label: cut
title: cut Event
description: DHTMLX JavaScript RichText 라이브러리의 cut 이벤트에 대해 설명서에서 확인할 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 체험하며, DHTMLX RichText 30일 무료 평가판을 다운로드하세요.
---

# cut

### Description

@short: 선택한 텍스트를 잘라낼 때 발생합니다

### Usage

~~~jsx {}
"cut": () => boolean | void;
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
// subscribe to the "cut" event
editor.api.on("cut", () => {
    console.log("Selected text was cut");
});
~~~

**Change log:** 이 이벤트는 v2.0에서 추가되었습니다

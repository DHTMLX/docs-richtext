---
sidebar_label: paste
title: paste 이벤트
description: DHTMLX JavaScript RichText 라이브러리 문서에서 paste 이벤트에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 체험해 보세요. DHTMLX RichText 무료 30일 평가판을 다운로드하실 수 있습니다.
---

# paste

### Description

@short: 콘텐츠를 붙여넣을 때 발생합니다

### Usage

~~~jsx {}
"paste": () => boolean | void;
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
// subscribe to the "paste" event
editor.api.on("paste", () => {
    console.log("Content was pasted");
});
~~~

**Change log:** 이 이벤트는 v2.0에서 추가되었습니다

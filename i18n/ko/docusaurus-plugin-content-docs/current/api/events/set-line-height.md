---
sidebar_label: set-line-height
title: set-line-height Event
description: DHTMLX JavaScript RichText 라이브러리의 set-line-height 이벤트에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험해 보세요. DHTMLX RichText 무료 30일 평가판도 다운로드할 수 있습니다.
---

# set-line-height

### Description

@short: 줄 높이를 설정할 때 발생합니다

### Usage

~~~jsx {}
"set-line-height": ({ lineHeight: string }) => boolean | void;
~~~

### Parameters

**set-line-height** 이벤트의 callback은 다음 파라미터를 포함하는 객체를 받을 수 있습니다:

- `lineHeight` - 줄 높이

:::info
내부 이벤트를 처리하려면 [**Event Bus methods**](api/overview/event_bus_methods_overview.md)를 사용할 수 있습니다
:::

### Example

~~~jsx {5-13}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// subscribe to the "set-line-height" event
editor.api.on("set-line-height", (obj) => {
    console.log(obj);
    console.log("The line height was changed");
});
// apply a new line height
editor.api.exec("set-line-height", {
   lineHeight: "15px"
});
~~~

**Change log:** v2.0에서 이벤트가 추가되었습니다

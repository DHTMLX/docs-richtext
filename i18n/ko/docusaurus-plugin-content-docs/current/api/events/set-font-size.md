---
sidebar_label: set-font-size
title: set-font-size Event
description: DHTMLX JavaScript RichText 라이브러리의 set-font-size 이벤트에 대해 설명합니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 사용해 보세요. DHTMLX RichText의 무료 30일 평가판을 다운로드할 수도 있습니다.
---

# set-font-size

### Description

@short: 글꼴 크기를 설정할 때 발생합니다

### Usage

~~~jsx {}
"set-font-size": ({ fontSize: string }) => boolean | void;
~~~

### Parameters

**set-font-size** 이벤트의 callback은 다음 파라미터를 포함하는 객체를 받을 수 있습니다:

- `fontSize` - 적용할 글꼴 크기

:::info
내부 이벤트를 처리하려면 [**Event Bus methods**](api/overview/event_bus_methods_overview.md)를 사용할 수 있습니다
:::

### Example

~~~jsx {5-13}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// subscribe to the "set-font-size" event
editor.api.on("set-font-size", (obj) => {
    console.log(obj.fontSize);
    console.log("The font size was changed");
});
// apply new font size
editor.api.exec("set-font-size", {
    fontSize: "11px"
});
~~~

**Change log:** The event was added in v2.0

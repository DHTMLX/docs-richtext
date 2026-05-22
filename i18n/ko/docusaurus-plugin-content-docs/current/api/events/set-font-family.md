---
sidebar_label: set-font-family
title: set-font-family Event
description: DHTMLX JavaScript RichText 라이브러리 문서에서 set-font-family 이벤트에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 참고하고, 코드 예제와 라이브 데모를 확인하며, DHTMLX RichText의 30일 무료 평가판을 다운로드하세요.
---

# set-font-family

### Description

@short: 폰트 패밀리를 설정할 때 발생합니다

### Usage

~~~jsx {}
"set-font-family": ({ fontFamily: string }) => boolean | void;
~~~

### Parameters

**set-font-family** 이벤트의 callback은 다음 파라미터를 포함하는 객체를 받을 수 있습니다:

- `fontFamily` - 적용할 폰트 패밀리. 사용 가능한 폰트: `"Roboto" | "Arial" | "Georgia" | "Tahoma" | "Times New Roman" | "Verdana"`

:::info
내부 이벤트 처리에는 [**Event Bus methods**](api/overview/event_bus_methods_overview.md)를 사용할 수 있습니다
:::

### Example

~~~jsx {5-13}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// subscribe to the "set-font-family" event
editor.api.on("set-font-family", (obj) => {
    console.log(obj.fontFamily);
    console.log("The font family was changed");
});
// apply new font family
editor.api.exec("set-font-family", {
    fontFamily: "Roboto"
}); 
~~~

**Change log:** v2.0에서 이벤트가 추가되었습니다

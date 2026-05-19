---
sidebar_label: show-popup
title: show-popup Event
description: DHTMLX JavaScript RichText 라이브러리의 show-popup 이벤트에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 사용해 보세요. DHTMLX RichText의 무료 30일 평가판을 다운로드하실 수 있습니다.
---

# show-popup

### Description

@short: 팝업이 표시되거나 숨겨질 때 발생합니다

### Usage

~~~jsx {}
"show-popup": (IPopupConfig) => boolean | void;

interface IPopupConfig {
    type: "link" | null;
    image?: boolean;
}
~~~

### Parameters

**show-popup** 이벤트의 callback은 다음 파라미터를 포함한 객체를 받을 수 있습니다:

- `type` - 팝업의 타입
- `image` - 추가 컨텍스트에 대한 접근 제공 (현재 커서가 이미지를 가리키고 있는지 여부)

:::info
내부 이벤트 처리에는 [**Event Bus methods**](api/overview/event_bus_methods_overview.md)를 사용할 수 있습니다
:::

### Example

~~~jsx {5-13}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// subscribe to the "show-popup" event
editor.api.on("show-popup", (obj) => {
    console.log(obj);
    console.log("The popup was shown/hidden");
});
// show-popup the text to the left
editor.api.exec("show-popup", {
    type: "link"
}); 
~~~

**Change log:** 이 이벤트는 v2.0에서 추가되었습니다

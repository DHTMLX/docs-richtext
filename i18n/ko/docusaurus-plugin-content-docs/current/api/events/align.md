---
sidebar_label: align
title: align Event
description: DHTMLX JavaScript RichText 라이브러리의 align 이벤트에 대해 문서에서 확인할 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험해 보세요. DHTMLX RichText 무료 30일 평가판도 다운로드할 수 있습니다.
---

# align

### Description

@short: 메뉴바/툴바 또는 Event Bus 메서드를 통해 텍스트 정렬이 변경될 때 발생합니다

### Usage

~~~jsx {}
"align": ({ 
    align: "left" | "center" | "right" | "justify"
}) => boolean | void;
~~~

### Parameters

**align** 이벤트의 callback은 다음 파라미터를 포함하는 객체를 받을 수 있습니다:

- `align` - 텍스트 정렬 방식. 다음 값 중 하나를 지정할 수 있습니다: `"left" | "center" | "right" | "justify"`

:::info
내부 이벤트를 처리하려면 [**Event Bus 메서드**](api/overview/event_bus_methods_overview.md)를 사용할 수 있습니다
:::

### Example

~~~jsx {5-12}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// subscribe to the "align" event
editor.api.on("align", (obj) => {
    console.log(`Align to: ${obj.align}`);
});
// align the text to the left
editor.api.exec("align", {
    align: "left"
}); 
~~~

**Change log:** v2.0에서 추가된 이벤트입니다

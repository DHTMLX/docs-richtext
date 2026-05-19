---
sidebar_label: indent
title: indent Event
description: DHTMLX JavaScript RichText 라이브러리 문서에서 indent 이벤트에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험해 보세요. DHTMLX RichText 30일 무료 평가판도 다운로드할 수 있습니다.
---

# indent

### Description

@short: 블록 들여쓰기를 늘릴 때 발생합니다

### Usage

~~~jsx {}
"indent": ({ step: number }) => boolean | void;
~~~

### Parameters

**indent** 이벤트의 callback은 다음 파라미터를 포함하는 객체를 받을 수 있습니다:

- `step` - 들여쓰기가 증가된 단계 값

:::info
내부 이벤트 처리는 [**Event Bus methods**](api/overview/event_bus_methods_overview.md)를 사용할 수 있습니다
:::

### Example

~~~jsx {5-9}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// subscribe to the "indent" event
editor.api.on("indent", (obj) => {
    console.log(obj);
    console.log("The indention was increased");
});
~~~

**Change log:** v2.0에서 이벤트가 추가되었습니다

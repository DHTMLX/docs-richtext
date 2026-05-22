---
sidebar_label: import
title: import Event
description: DHTMLX JavaScript RichText 라이브러리 문서에서 import 이벤트에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험해 보세요. DHTMLX RichText 30일 무료 평가판도 다운로드할 수 있습니다.
---

# import

### Description

@short: 메뉴바의 "Import" 옵션을 누르거나 Event Bus 메서드를 통해 호출된 후 발생합니다

### Usage

~~~jsx {}
"import": ({ html?: string }) => boolean | void;
~~~

### Parameters

**import** 이벤트의 callback은 다음 파라미터를 포함하는 객체를 받을 수 있습니다:

- `html` - html 형식의 텍스트 값

:::info
내부 이벤트를 처리하려면 [**Event Bus 메서드**](api/overview/event_bus_methods_overview.md)를 사용할 수 있습니다
:::

### Example

~~~jsx {5-13}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// subscribe to the "import" event
editor.api.on("import", (obj) => {
    console.log(obj.html);
    console.log("The new value was imported");
});
// import new value
editor.api.exec("import", {
    html: "<h2>some value</h2>" // simply calls setValue
});
~~~

**Change log:** v2.0에서 이벤트가 추가되었습니다

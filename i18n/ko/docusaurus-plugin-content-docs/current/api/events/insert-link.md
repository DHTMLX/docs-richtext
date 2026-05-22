---
sidebar_label: insert-link
title: insert-link Event
description: DHTMLX JavaScript RichText 라이브러리의 insert-link 이벤트에 대해 문서에서 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험하며, DHTMLX RichText 30일 무료 평가판을 다운로드하세요.
---

# insert-link

### Description

@short: 링크를 삽입할 때 발생합니다

### Usage

~~~jsx {}
"insert-link": ({ url: string }) => boolean | void;
~~~

### Parameters

**update-link** 이벤트의 callback은 다음 파라미터를 포함한 객체를 받을 수 있습니다:

- `url` - 삽입할 URL

:::info
내부 이벤트를 처리하려면 [**Event Bus methods**](api/overview/event_bus_methods_overview.md)를 사용할 수 있습니다
:::

### Example

~~~jsx {5-9}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// subscribe to the "insert-link" event
editor.api.on("insert-link", (obj) => {
    console.log(obj)
    console.log("The following link was inserted: " + obj.url);
});
~~~

**Change log:** v2.0에서 이벤트가 추가되었습니다

---
sidebar_label: insert-list
title: insert-list Event
description: DHTMLX JavaScript RichText 라이브러리 문서에서 insert-list 이벤트에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험해 보세요. DHTMLX RichText의 무료 30일 평가판을 다운로드할 수도 있습니다.
---

# insert-list

### Description

@short: 목록을 삽입할 때 발생합니다

### Usage

~~~jsx {}
"insert-list": ({ type: TListType }) => boolean | void;

type TListType = "bulleted" | "numbered";
~~~

### Parameters

**insert-list** 이벤트의 callback은 다음 파라미터를 포함하는 객체를 받을 수 있습니다:

- `type` - 삽입된 목록의 유형입니다. 다음 값을 지정할 수 있습니다:
    - `"bulleted"` - 글머리 기호 목록
    - `"numbered"` - 번호 매기기 목록

:::info
내부 이벤트를 처리하려면 [**Event Bus methods**](api/overview/event_bus_methods_overview.md)를 사용할 수 있습니다
:::

### Example

~~~jsx {5-9}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// subscribe to the "insert-list" event
editor.api.on("insert-list", (obj) => {
    console.log(obj.type);
    console.log("The list was inserted");
});
~~~

**Change log:** v2.0에서 이벤트가 추가되었습니다

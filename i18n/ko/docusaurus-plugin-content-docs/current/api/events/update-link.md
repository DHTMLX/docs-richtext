---
sidebar_label: update-link
title: update-link Event
description: DHTMLX JavaScript RichText 라이브러리 문서에서 update-link 이벤트에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 참고하고, 코드 예제와 라이브 데모를 직접 실행해 보세요. DHTMLX RichText 무료 30일 평가판도 다운로드할 수 있습니다.
---

# update-link

### Description

@short: 링크를 업데이트할 때 발생합니다

### Usage

~~~jsx {}
"update-link": ({ id: number, url: string }) => boolean | void;
~~~

### Parameters

**update-link** 이벤트의 callback은 다음 파라미터를 포함하는 객체를 받을 수 있습니다:

- `id` - 링크 ID
- `url` - 수정된 url

:::info
내부 이벤트를 처리하려면 [**Event Bus methods**](api/overview/event_bus_methods_overview.md)를 사용할 수 있습니다
:::

### Example

~~~jsx {5-9}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// subscribe to the "update-link" event
editor.api.on("update-link", (obj) => {
    console.log(obj);
    console.log("The following link was updated:" + obj.url);
});
~~~

**Change log:** v2.0에서 이벤트가 추가되었습니다

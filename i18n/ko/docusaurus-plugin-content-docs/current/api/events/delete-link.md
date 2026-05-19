---
sidebar_label: delete-link
title: delete-link Event
description: DHTMLX JavaScript RichText 라이브러리의 delete-link 이벤트에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험해 보세요. DHTMLX RichText의 무료 30일 평가판도 다운로드할 수 있습니다.
---

# delete-link

### Description

@short: 링크를 삭제할 때 발생합니다

### Usage

~~~jsx {}
"delete-link": () => boolean | void;
~~~

:::info
내부 이벤트를 처리하려면 [**Event Bus methods**](api/overview/event_bus_methods_overview.md)를 사용할 수 있습니다
:::

### Example

~~~jsx {5-8}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// subscribe to the "delete-link" event
editor.api.on("delete-link", () => {
    console.log("The link was deleted");
});
~~~

**Change log:** v2.0에서 추가된 이벤트입니다

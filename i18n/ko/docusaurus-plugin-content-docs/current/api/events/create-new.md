---
sidebar_label: create-new
title: create-new Event
description: DHTMLX JavaScript RichText 라이브러리 문서에서 create-new 이벤트에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 직접 확인하며, DHTMLX RichText의 무료 30일 평가판을 다운로드하세요.
---

# create-new

### Description

@short: 메뉴바의 "New" 옵션을 누르거나 Event Bus 메서드를 통해 호출할 때 발생합니다

### Usage

~~~jsx {}
"create-new": ({ reset?: boolean }) => boolean | void;
~~~

### Parameters

**create-new** 이벤트의 callback은 다음 파라미터를 포함한 객체를 받을 수 있습니다:

- `reset` - 새 파일을 생성할 때 히스토리를 초기화합니다

:::info
내부 이벤트를 처리하려면 [**Event Bus 메서드**](api/overview/event_bus_methods_overview.md)를 사용할 수 있습니다
:::

### Example

~~~jsx {5-10}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// subscribe to the "create-new" event
editor.api.on("create-new", ({ reset }) => {
    console.log(`Document has been cleared. History has ${reset ? "" : "not"} been reset.`);
});
// create new file and reset the history
editor.api.exec("create-new", { reset: true });
~~~

**Change log:** The event was added in v2.0

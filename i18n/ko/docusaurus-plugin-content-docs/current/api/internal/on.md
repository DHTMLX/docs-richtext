---
sidebar_label: api.on()
title: on 메서드
description: DHTMLX JavaScript RichText 라이브러리 문서에서 on 메서드에 대해 알아볼 수 있습니다. 개발자 가이드 및 API 참조를 탐색하고, 코드 예제와 라이브 데모를 사용해 보며, DHTMLX RichText 무료 30일 평가판을 다운로드하세요.
---

# api.on()

### Description

@short: 내부 이벤트에 핸들러를 연결할 수 있습니다

### Usage

~~~jsx {}
api.on(
    event: string,
    handler: function
): void;
~~~

### Parameters

- `event` - (필수) 발생시킬 이벤트
- `handler` - (필수) 연결할 핸들러 (핸들러 인수는 발생하는 이벤트에 따라 달라집니다)

### Events

:::info
RichText 내부 이벤트의 전체 목록은 [**여기**](api/overview/events_overview.md)에서 확인할 수 있습니다
:::

### Example

~~~jsx {5-8}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// subscribe to the "set-font-size" event
editor.api.on("set-font-size", (obj) => {
    console.log(obj.fontSize);
});
~~~

**Change log:** v2.0에서 메서드가 업데이트되었습니다. `context` 매개변수가 제거되었습니다

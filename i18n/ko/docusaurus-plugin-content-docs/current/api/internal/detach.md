---
sidebar_label: api.detach()
title: on Method
description: DHTMLX JavaScript RichText 라이브러리의 on 메서드에 대해 알아볼 수 있습니다. 개발자 가이드 및 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 사용해 보세요. DHTMLX RichText의 무료 30일 평가판도 다운로드할 수 있습니다.
---

# api.detach()

### Description

@short: 이벤트 핸들러를 제거하거나 분리할 수 있습니다

### Usage

~~~jsx {}
api.detach( tag: string ): void;
~~~

### Parameters

- `tag` - (필수) 액션 태그의 이름

### Events

:::info
RichText 내부 이벤트의 전체 목록은 [**여기**](api/overview/events_overview.md)에서 확인할 수 있습니다
:::

### Example

~~~jsx {6-8,10}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});

editor.api.on("set-font-size", (obj) => {
    console.log(obj.fontSize);
}, { tag: "track" });

editor.api.detach("track");
~~~

**Change log:** v2.0에서 메서드가 업데이트되었습니다. `name` 및 `context` 파라미터가 제거되었습니다

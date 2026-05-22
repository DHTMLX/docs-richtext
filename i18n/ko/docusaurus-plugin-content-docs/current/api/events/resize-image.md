---
sidebar_label: resize-image
title: resize-image Event
description: DHTMLX JavaScript RichText 라이브러리 문서에서 resize-image 이벤트에 대해 알아볼 수 있습니다. 개발자 가이드 및 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 사용해 보세요. DHTMLX RichText의 무료 30일 평가판을 다운로드할 수도 있습니다.
---

# resize-image

### Description

@short: 이미지 크기를 조정할 때 발생합니다

### Usage

~~~jsx {}
"resize-image": ({ id: number, width: number, height: number }) => boolean | void;
~~~

### Parameters

**resize-image** 이벤트의 callback은 다음 파라미터를 포함하는 객체를 받을 수 있습니다:

- `id` - 이미지 ID
- `width` - 이미지 너비
- `height` - 이미지 높이

:::info
내부 이벤트를 처리하려면 [**Event Bus methods**](api/overview/event_bus_methods_overview.md)를 사용할 수 있습니다
:::

### Example

~~~jsx {5-9}
// initialize RichText
const editor = new richtext.Richtext("#root", {
// configuration properties
});
// subscribe to the "resize-image" event
editor.api.on("resize-image", (obj) => {
    console.log(obj);
    console.log("The image was resized")
});
~~~

**Change log:** v2.0에서 이벤트가 추가되었습니다

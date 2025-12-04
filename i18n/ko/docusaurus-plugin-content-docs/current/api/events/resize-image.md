---
sidebar_label: resize-image
title: resize-image 이벤트
description: DHTMLX JavaScript RichText 라이브러리 문서에서 resize-image 이벤트에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 탐색하고, 코드 예제와 라이브 데모를 시도해 보며, DHTMLX RichText의 무료 30일 평가판을 다운로드할 수 있습니다.
---

# resize-image

### 설명

@short: 이미지 크기가 조정될 때 트리거됩니다.

### 사용법

~~~jsx {}
"resize-image": ({ id: number, width: number, height: number }) => boolean | void;
~~~

### 매개변수

**resize-image** 이벤트의 콜백은 다음 속성을 가진 객체를 받습니다:

- `id` - 이미지의 고유 식별자
- `width` - 이미지의 새로운 너비
- `height` - 이미지의 새로운 높이

:::info
내부 이벤트를 다루려면 [**Event Bus methods**](api/overview/event_bus_methods_overview.md)를 사용할 수 있습니다.
:::

### 예제

~~~jsx {5-9}
// RichText 초기화
const editor = new richtext.Richtext("#root", {
// 구성 속성
});
// "resize-image" 이벤트를 청취
editor.api.on("resize-image", (obj) => {
    console.log(obj);
    console.log("이미지 크기가 조정되었습니다.")
});
~~~

**변경 로그:** 이 이벤트는 v2.0에서 도입되었습니다.

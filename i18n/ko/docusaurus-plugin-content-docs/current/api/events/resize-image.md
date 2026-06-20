---
sidebar_label: resize-image
title: resize-image 이벤트
description: DHTMLX JavaScript RichText 라이브러리의 resize-image 이벤트에 대해 알아볼 수 있습니다. 개발자 가이드 및 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험해 보세요. DHTMLX RichText의 30일 무료 평가판도 다운로드할 수 있습니다.
---

# resize-image

### 설명 {#description}

@short: 이미지 크기 조정 시 발생합니다

### 사용법 {#usage}

~~~jsx {}
"resize-image": ({ id: number, width: number, height: number }) => boolean | void;
~~~

### 매개변수 {#parameters}

`resize-image` 이벤트의 callback은 다음 매개변수를 포함하는 객체를 받을 수 있습니다:

- `id` - 이미지 ID
- `width` - 이미지 너비
- `height` - 이미지 높이

:::info[정보]
내부 이벤트 처리에는 [**Event Bus 메서드**](api/overview/event_bus_methods_overview.md)를 사용할 수 있습니다
:::

### 예제 {#example}

~~~jsx {5-9}
// RichText 초기화
const editor = new richtext.Richtext("#root", {
// 구성 속성
});
// "resize-image" 이벤트 구독
editor.api.on("resize-image", (obj) => {
    console.log(obj);
    console.log("The image was resized")
});
~~~

**변경 로그:** 이 이벤트는 v2.0에서 추가되었습니다

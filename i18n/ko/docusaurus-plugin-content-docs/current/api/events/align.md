---
sidebar_label: align
title: align 이벤트
description: DHTMLX JavaScript RichText 라이브러리 문서에서 align 이벤트에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험해 보세요. DHTMLX RichText 무료 30일 평가판도 다운로드할 수 있습니다.
---

# align

### 설명 {#description}

@short: 메뉴바/툴바 또는 Event Bus 메서드를 통해 텍스트 정렬이 변경될 때 발생합니다

### 사용법 {#usage}

~~~jsx {}
"align": ({
    align: "left" | "center" | "right" | "justify"
}) => boolean | void;
~~~

### 매개변수 {#parameters}

**align** 이벤트의 콜백은 다음 매개변수를 포함하는 객체를 받을 수 있습니다:

- `align` - 텍스트 정렬 방식입니다. 다음 값 중 하나를 지정할 수 있습니다: `"left" | "center" | "right" | "justify"`

:::info[정보]
내부 이벤트 처리에는 [**Event Bus 메서드**](api/overview/event_bus_methods_overview.md)를 사용할 수 있습니다.
:::

### 예시 {#example}

~~~jsx {5-12}
// RichText 초기화
const editor = new richtext.Richtext("#root", {
    // 구성 속성
});
// "align" 이벤트 구독
editor.api.on("align", (obj) => {
    console.log(`Align to: ${obj.align}`);
});
// 텍스트를 왼쪽으로 정렬
editor.api.exec("align", {
    align: "left"
});
~~~

**변경 이력:** 이 이벤트는 v2.0에서 추가되었습니다.

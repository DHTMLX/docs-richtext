---
sidebar_label: set-text-color
title: set-text-color 이벤트
description: DHTMLX JavaScript RichText 라이브러리 문서에서 set-text-color 이벤트에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험해 보세요. DHTMLX RichText 무료 30일 평가판도 다운로드할 수 있습니다.
---

# set-text-color

### 설명 {#description}

@short: 텍스트 색상 및/또는 텍스트 배경 색상을 설정할 때 발생합니다

### 사용법 {#usage}

~~~jsx {}
"set-text-color": (ITextColor) => boolean | void;

interface ITextColor {
    color?: string;
    background?: string;
}
~~~

### 매개변수 {#parameters}

`set-text-color` 이벤트의 callback은 다음 매개변수를 포함한 객체를 받을 수 있습니다:

- `color` - 텍스트 색상
- `background` - 텍스트 배경 색상

:::info[정보]
내부 이벤트를 처리하려면 [**Event Bus 메서드**](api/overview/event_bus_methods_overview.md)를 사용할 수 있습니다
:::

### 예제 {#example}

~~~jsx {5-14}
// RichText 초기화
const editor = new richtext.Richtext("#root", {
    // 구성 속성
});
// "set-text-color" 이벤트 구독
editor.api.on("set-text-color", (obj) => {
    console.log(obj);
    console.log("The text color and/or background text color were changed");
});
// 텍스트 색상 및 배경 적용
editor.api.exec("set-text-color", {
   color: "red",
   background: "blue"
});
~~~

**변경 이력:** 이 이벤트는 v2.0에서 추가되었습니다

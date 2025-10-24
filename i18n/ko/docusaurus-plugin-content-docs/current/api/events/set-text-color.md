---
sidebar_label: set-text-color
title: set-text-color 이벤트
description: DHTMLX JavaScript RichText 라이브러리 문서에서 set-text-color 이벤트를 살펴보세요. 개발자 가이드, API 참조, 코드 샘플, 라이브 데모를 확인하고 DHTMLX RichText의 무료 30일 체험판을 받아보세요.
---

# set-text-color

### 설명

@short: 텍스트 색상 및/또는 배경 색상이 적용될 때 트리거됩니다.

### 사용법

~~~jsx {}
"set-text-color": (ITextColor) => boolean | void;

interface ITextColor {
    color?: string;
    background?: string;
}
~~~

### 매개변수

**set-text-color** 이벤트의 콜백 함수는 다음 속성을 가진 객체를 받습니다:

- `color` - 텍스트 색상
- `background` - 텍스트의 배경 색상

:::info
내부 이벤트 관리를 위해 [**Event Bus methods**](api/overview/event_bus_methods_overview.md)를 참조할 수 있습니다.
:::

### 예제

~~~jsx {5-14}
// RichText 초기화
const editor = new richtext.Richtext("#root", {
    // 설정 속성
});
// "set-text-color" 이벤트 리스닝
editor.api.on("set-text-color", (obj) => {
    console.log(obj);
    console.log("텍스트 색상 및/또는 배경 색상이 업데이트되었습니다.");
});
// 텍스트 색상 및 배경 설정
editor.api.exec("set-text-color", {
   color: "red",
   background: "blue"
});
~~~

**변경 로그:** 이 이벤트는 v2.0에서 도입되었습니다.

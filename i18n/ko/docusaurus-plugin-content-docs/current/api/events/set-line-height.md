---
sidebar_label: set-line-height
title: set-line-height 이벤트
description: DHTMLX JavaScript RichText 라이브러리 문서에서 set-line-height 이벤트에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 시도해 보며, DHTMLX RichText의 30일 무료 평가판을 다운로드하세요.
---

# set-line-height

### 설명

@short: 줄 높이를 설정할 때 실행됨

### 사용법

~~~jsx {}
"set-line-height": ({ lineHeight: string }) => boolean | void;
~~~

### 파라미터

**set-line-height** 이벤트의 콜백은 다음 파라미터를 포함하는 객체를 인자로 받을 수 있습니다:

- `lineHeight` - 줄 높이

:::info
내부 이벤트를 처리하려면 [**Event Bus 메서드**](api/overview/event_bus_methods_overview.md)를 사용할 수 있습니다
:::

### 예제

~~~jsx {5-13}
// RichText 초기화
const editor = new richtext.Richtext("#root", {
    // 구성 속성
});
// "set-line-height" 이벤트 구독
editor.api.on("set-line-height", (obj) => {
    console.log(obj);
    console.log("The line height was changed");
});
// 새 줄 높이 적용
editor.api.exec("set-line-height", {
   lineHeight: "15px"
});
~~~

**변경 이력:** 이 이벤트는 v2.0에서 추가되었습니다

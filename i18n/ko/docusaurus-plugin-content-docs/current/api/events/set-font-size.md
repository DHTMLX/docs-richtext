---
sidebar_label: set-font-size
title: set-font-size 이벤트
description: DHTMLX JavaScript RichText 라이브러리 문서에서 set-font-size 이벤트를 살펴보세요. 개발자 가이드, API 참조, 데모 체험 및 DHTMLX RichText 30일 무료 체험판 다운로드를 확인할 수 있습니다.
---

# set-font-size

### 설명

@short: 글꼴 크기가 설정될 때 발생하는 이벤트

### 사용법

~~~jsx {}
"set-font-size": ({ fontSize: string }) => boolean | void;
~~~

### 매개변수

**set-font-size** 이벤트의 콜백은 다음 매개변수를 포함하는 객체를 받습니다:

- `fontSize` - 적용할 글꼴 크기

:::info
내부 이벤트 관리를 위해서는 [**Event Bus methods**](api/overview/event_bus_methods_overview.md)를 참조하세요.
:::

### 예제

~~~jsx {5-13}
// RichText 초기화
const editor = new richtext.Richtext("#root", {
    // 구성 속성
});
// "set-font-size" 이벤트 리스닝
editor.api.on("set-font-size", (obj) => {
    console.log(obj.fontSize);
    console.log("글꼴 크기가 변경되었습니다");
});
// 새 글꼴 크기 설정
editor.api.exec("set-font-size", {
    fontSize: "11px"
});
~~~

**변경 로그:** 이 이벤트는 v2.0에서 도입되었습니다

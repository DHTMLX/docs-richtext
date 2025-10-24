---
sidebar_label: set-line-height
title: set-line-height 이벤트
description: DHTMLX JavaScript RichText 라이브러리 문서에서 set-line-height 이벤트에 대해 알아보세요. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 체험하며, DHTMLX RichText의 무료 30일 평가판을 다운로드할 수 있습니다.
---

# set-line-height

### 설명

@short: 줄 높이가 설정될 때마다 발생합니다.

### 사용법

~~~jsx {}
"set-line-height": ({ lineHeight: string }) => boolean | void;
~~~

### 매개변수

**set-line-height** 이벤트의 콜백 함수는 다음 매개변수를 포함하는 객체를 받습니다:

- `lineHeight` - 설정되는 줄 높이 값

:::info
내부 이벤트 관리를 위해서는 [**Event Bus methods**](api/overview/event_bus_methods_overview.md)를 참조하세요.
:::

### 예제

~~~jsx {5-13}
// RichText 초기화
const editor = new richtext.Richtext("#root", {
    // 구성 속성
});
// "set-line-height" 이벤트 리스닝
editor.api.on("set-line-height", (obj) => {
    console.log(obj);
    console.log("줄 높이가 변경되었습니다");
});
// 새 줄 높이 설정
editor.api.exec("set-line-height", {
   lineHeight: "15px"
});
~~~

**변경 로그:** 이 이벤트는 v2.0에서 도입되었습니다.

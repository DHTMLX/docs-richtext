---
sidebar_label: set-font-family
title: set-font-family 이벤트
description: DHTMLX JavaScript RichText 라이브러리 문서에서 set-font-family 이벤트에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 탐색하고, 코드 예제와 라이브 데모를 체험하며, DHTMLX RichText의 30일 무료 평가판을 다운로드하세요.
---

# set-font-family

### 설명

@short: 글꼴 패밀리가 설정될 때 발생하는 이벤트

### 사용법

~~~jsx {}
"set-font-family": ({ fontFamily: string }) => boolean | void;
~~~

### 매개변수

**set-font-family** 이벤트의 콜백은 다음 매개변수를 포함하는 객체를 받습니다:

- `fontFamily` - 적용할 글꼴 패밀리입니다. 사용 가능한 옵션은 다음과 같습니다: `"Roboto" | "Arial" | "Georgia" | "Tahoma" | "Times New Roman" | "Verdana"`

:::info
내부 이벤트를 처리하려면 [**Event Bus methods**](api/overview/event_bus_methods_overview.md)를 사용할 수 있습니다.
:::

### 예제

~~~jsx {5-13}
// RichText 초기화
const editor = new richtext.Richtext("#root", {
    // 구성 속성들
});
// "set-font-family" 이벤트 리스닝
editor.api.on("set-font-family", (obj) => {
    console.log(obj.fontFamily);
    console.log("글꼴 패밀리가 변경되었습니다");
});
// 새 글꼴 패밀리 설정
editor.api.exec("set-font-family", {
    fontFamily: "Roboto"
}); 
~~~

**변경 로그:** 이 이벤트는 v2.0에 도입되었습니다

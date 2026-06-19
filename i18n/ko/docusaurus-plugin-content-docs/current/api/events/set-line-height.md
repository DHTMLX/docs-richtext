---
sidebar_label: set-line-height
title: set-line-height 이벤트
description: DHTMLX JavaScript RichText 라이브러리의 set-line-height 이벤트에 대한 내용을 문서에서 확인할 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 사용해 보세요. DHTMLX RichText 30일 무료 평가판도 다운로드할 수 있습니다.
---

# set-line-height

### 설명 {#description}

@short: 줄 높이를 설정할 때 발생합니다

### 사용법 {#usage}

~~~jsx {}
"set-line-height": ({ lineHeight: string }) => boolean | void;
~~~

### 매개변수 {#parameters}

**set-line-height** 이벤트의 callback은 다음 매개변수를 포함하는 객체를 받을 수 있습니다:

- `lineHeight` - 줄 높이

:::info[정보]
내부 이벤트를 처리하려면 [**Event Bus 메서드**](api/overview/event_bus_methods_overview.md)를 사용할 수 있습니다
:::

### 예제 {#example}

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

**변경 로그:** 이 이벤트는 v2.0에서 추가되었습니다

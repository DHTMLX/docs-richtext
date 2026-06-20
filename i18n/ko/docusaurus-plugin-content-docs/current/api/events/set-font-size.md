---
sidebar_label: set-font-size
title: set-font-size 이벤트
description: DHTMLX JavaScript RichText 라이브러리 문서에서 set-font-size 이벤트에 대해 학습할 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험해 보세요. DHTMLX RichText 무료 30일 평가판을 다운로드할 수도 있습니다.
---

# set-font-size

### 설명 {#description}

@short: 글꼴 크기를 설정할 때 발생합니다

### 사용법 {#usage}

~~~jsx {}
"set-font-size": ({ fontSize: string }) => boolean | void;
~~~

### 파라미터 {#parameters}

`set-font-size` 이벤트의 callback은 다음 파라미터를 포함하는 객체를 받을 수 있습니다:

- `fontSize` - 적용할 글꼴 크기

:::info[정보]
내부 이벤트를 처리하려면 [**Event Bus 메서드**](api/overview/event_bus_methods_overview.md)를 사용할 수 있습니다
:::

### 예제 {#example}

~~~jsx {5-13}
// RichText 초기화
const editor = new richtext.Richtext("#root", {
    // 구성 속성
});
// "set-font-size" 이벤트 구독
editor.api.on("set-font-size", (obj) => {
    console.log(obj.fontSize);
    console.log("The font size was changed");
});
// 새 글꼴 크기 적용
editor.api.exec("set-font-size", {
    fontSize: "11px"
});
~~~

**변경 로그:** 이 이벤트는 v2.0에서 추가되었습니다

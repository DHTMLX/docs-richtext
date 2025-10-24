---
sidebar_label: align
title: align 이벤트
description: DHTMLX JavaScript RichText 라이브러리 문서에서 align 이벤트를 살펴보세요. 개발자 가이드, API 참조, 코드 예제 및 라이브 데모를 확인하고 DHTMLX RichText의 30일 무료 체험판을 다운로드하세요.
---

# align

### 설명

@short: menubar/toolbar 또는 Event Bus 메서드를 사용하여 텍스트 정렬이 업데이트될 때마다 발생합니다.

### 사용법

~~~jsx {}
"align": ({ 
    align: "left" | "center" | "right" | "justify"
}) => boolean | void;
~~~

### 매개변수

**align** 이벤트의 콜백은 다음 속성을 가진 객체를 받습니다:

- `align` - 텍스트 정렬을 지정하며, 가능한 값은 `"left" | "center" | "right" | "justify"` 중 하나입니다.

:::info
내부 이벤트는 [**Event Bus 메서드**](api/overview/event_bus_methods_overview.md)를 사용하여 처리할 수 있습니다.
:::

### 예제

~~~jsx {5-12}
// RichText 초기화
const editor = new richtext.Richtext("#root", {
    // 구성 속성
});
// "align" 이벤트 리스닝
editor.api.on("align", (obj) => {
    console.log(`정렬 위치: ${obj.align}`);
});
// 텍스트 정렬을 왼쪽으로 설정
editor.api.exec("align", {
    align: "left"
}); 
~~~

**변경 로그:** 이 이벤트는 버전 2.0에서 도입되었습니다.

---
sidebar_label: show-popup
title: show-popup 이벤트
description: DHTMLX JavaScript RichText 라이브러리 문서에서 show-popup 이벤트에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험해 보세요. DHTMLX RichText 30일 무료 평가판도 다운로드할 수 있습니다.
---

# show-popup

### 설명 {#description}

@short: 팝업이 표시되거나 숨겨질 때 발생합니다

### 사용법 {#usage}

~~~jsx {}
"show-popup": (IPopupConfig) => boolean | void;

interface IPopupConfig {
    type: "link" | null;
    image?: boolean;
}
~~~

### 매개변수 {#parameters}

**show-popup** 이벤트의 callback은 다음 매개변수를 포함하는 객체를 받을 수 있습니다:

- `type` - 팝업의 유형
- `image` - 추가 컨텍스트에 대한 접근을 제공합니다 (현재 커서가 이미지를 가리키고 있는지 여부)

:::info[정보]
내부 이벤트를 처리하려면 [**Event Bus 메서드**](api/overview/event_bus_methods_overview.md)를 사용할 수 있습니다
:::

### 예제 {#example}

~~~jsx {5-13}
// RichText 초기화
const editor = new richtext.Richtext("#root", {
    // 구성 속성
});
// "show-popup" 이벤트 구독
editor.api.on("show-popup", (obj) => {
    console.log(obj);
    console.log("The popup was shown/hidden");
});
// 텍스트를 왼쪽으로 show-popup
editor.api.exec("show-popup", {
    type: "link"
}); 
~~~

**변경 로그:** 이 이벤트는 v2.0에서 추가되었습니다

---
sidebar_label: show-popup
title: show-popup 이벤트
description: DHTMLX JavaScript RichText 라이브러리 문서에서 show-popup 이벤트에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 시도해 보며, DHTMLX RichText의 30일 무료 평가판을 다운로드하세요.
---

# show-popup

### 설명

@short: 팝업이 표시되거나 숨겨질 때 실행됨

### 사용법

~~~jsx {}
"show-popup": (IPopupConfig) => boolean | void;

interface IPopupConfig {
    type: "link" | null;
    image?: boolean;
}
~~~

### 파라미터

**show-popup** 이벤트의 콜백은 다음 파라미터를 포함하는 객체를 인자로 받을 수 있습니다:

- `type` - 팝업의 유형
- `image` - 추가 컨텍스트에 대한 접근을 제공함 (현재 커서가 이미지를 가리키고 있는지 여부)

:::info
내부 이벤트를 처리하려면 [**Event Bus 메서드**](api/overview/event_bus_methods_overview.md)를 사용할 수 있습니다
:::

### 예제

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
// 텍스트를 왼쪽에 표시
editor.api.exec("show-popup", {
    type: "link"
}); 
~~~

**변경 이력:** 이 이벤트는 v2.0에서 추가되었습니다

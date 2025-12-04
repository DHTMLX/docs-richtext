---
sidebar_label: show-popup
title: show-popup 이벤트
description: DHTMLX JavaScript RichText 라이브러리 문서에서 show-popup 이벤트를 살펴보세요. 개발자 가이드, API 참조, 코드 예제, 라이브 데모를 확인하고 DHTMLX RichText의 무료 30일 체험판을 다운로드하세요.
---

# show-popup

### 설명

@short: 팝업이 표시되거나 숨겨질 때 발생합니다.

### 사용법

~~~jsx {}
"show-popup": (IPopupConfig) => boolean | void;

interface IPopupConfig {
    type: "link" | null;
    image?: boolean;
}
~~~

### 매개변수

**show-popup** 이벤트의 콜백은 다음 속성을 가진 객체를 받습니다:

- `type` - 팝업의 유형을 지정합니다.
- `image` - 현재 커서가 이미지 위에 있는지 여부를 나타냅니다.

:::info
내부 이벤트를 관리하려면 [**Event Bus methods**](api/overview/event_bus_methods_overview.md)를 활용할 수 있습니다.
:::

### 예제

~~~jsx {5-13}
// RichText 초기화
const editor = new richtext.Richtext("#root", {
    // 구성 속성들
});
// "show-popup" 이벤트 구독
editor.api.on("show-popup", (obj) => {
    console.log(obj);
    console.log("팝업이 표시되거나 숨겨졌습니다.");
});
// 왼쪽에 텍스트 팝업 표시
editor.api.exec("show-popup", {
    type: "link"
}); 
~~~

**변경 로그:** 이 이벤트는 v2.0에 도입되었습니다.

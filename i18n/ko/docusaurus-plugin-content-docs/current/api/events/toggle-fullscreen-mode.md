---
sidebar_label: toggle-fullscreen-mode
title: toggle-fullscreen-mode 이벤트
description: DHTMLX JavaScript RichText 라이브러리 문서에서 toggle-fullscreen-mode 이벤트에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 참고하고, 코드 예제와 라이브 데모를 살펴보세요.
---

# toggle-fullscreen-mode

### 설명 {#description}

@short: 전체 화면 모드를 전환할 때 발생합니다

### 사용법 {#usage}

~~~jsx {}
"toggle-fullscreen-mode": ({ mode?: boolean }) => boolean | void;
~~~

### 매개변수 {#parameters}

**toggle-fullscreen-mode** 이벤트의 콜백은 다음 매개변수를 포함하는 객체를 받을 수 있습니다:

- `mode` - 전체 화면 모드를 활성화합니다

:::info[정보]
내부 이벤트를 처리하려면 [**Event Bus 메서드**](api/overview/event_bus_methods_overview.md)를 사용할 수 있습니다
:::

### 예시 {#example}

~~~jsx {5-9}
// RichText 초기화
const editor = new richtext.Richtext("#root", {
    // 구성 속성
});
// "toggle-fullscreen-mode" 이벤트 구독
editor.api.on("toggle-fullscreen-mode", (obj) => {
    console.log(obj);
    console.log("The full screen mode was changed");
});
// 전체 화면 모드 활성화
editor.api.exec("toggle-fullscreen-mode", { mode: true });
~~~

**변경 이력:** 이 이벤트는 v2.0에서 추가되었습니다

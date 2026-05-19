---
sidebar_label: toggle-fullscreen-mode
title: toggle-fullscreen-mode Event
description: DHTMLX JavaScript RichText 라이브러리의 toggle-fullscreen-mode 이벤트에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 참고하고, 코드 예제와 라이브 데모를 사용해 보세요. DHTMLX RichText 30일 무료 평가판도 다운로드할 수 있습니다.
---

# toggle-fullscreen-mode

### 설명

@short: 전체 화면 모드 전환 시 발생합니다

### 사용법

~~~jsx {}
"toggle-fullscreen-mode": ({ mode?: boolean }) => boolean | void;
~~~

### 파라미터

**toggle-fullscreen-mode** 이벤트의 callback은 다음 파라미터를 포함하는 객체를 받을 수 있습니다:

- `mode` - 전체 화면 모드를 활성화합니다

:::info
내부 이벤트를 처리하려면 [**Event Bus 메서드**](api/overview/event_bus_methods_overview.md)를 사용할 수 있습니다
:::

### 예제

~~~jsx {5-9}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// subscribe to the "toggle-fullscreen-mode" event
editor.api.on("toggle-fullscreen-mode", (obj) => {
    console.log(obj);
    console.log("The full screen mode was changed");
});
// enable the full screen mode
editor.api.exec("toggle-fullscreen-mode", { mode: true });
~~~

**변경 이력:** 이 이벤트는 v2.0에서 추가되었습니다

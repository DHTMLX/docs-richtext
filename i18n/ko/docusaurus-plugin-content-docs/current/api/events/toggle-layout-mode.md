---
sidebar_label: toggle-layout-mode
title: toggle-layout-mode Event
description: DHTMLX JavaScript RichText 라이브러리 문서에서 toggle-layout-mode 이벤트에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험해 보세요. DHTMLX RichText의 무료 30일 평가판도 다운로드할 수 있습니다.
---

# toggle-layout-mode

### 설명

@short: 레이아웃 모드를 전환할 때 발생합니다

### 사용법

~~~jsx {}
"toggle-layout-mode": ({ mode?: "classic" | "document" }) => boolean | void;
~~~

### 파라미터

**toggle-layout-mode** 이벤트의 callback은 다음 파라미터를 포함하는 객체를 받을 수 있습니다:

- `mode` - 레이아웃 모드. 사용 가능한 모드: `"classic" | "document"`

:::info
내부 이벤트를 처리하려면 [**Event Bus methods**](api/overview/event_bus_methods_overview.md)를 사용할 수 있습니다
:::

### 예제

~~~jsx {5-11}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// subscribe to the "toggle-layout-mode" event
editor.api.on("toggle-layout-mode", (obj) => {
    console.log(obj);
    console.log("The layout mode was changed");
});
// set the "document" layout mode
editor.api.exec("toggle-layout-mode", { mode: "document" });
~~~

**변경 이력:** 이 이벤트는 v2.0에서 추가되었습니다

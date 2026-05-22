---
sidebar_label: toggle-shortcut-info
title: toggle-shortcut-info Event
description: DHTMLX JavaScript RichText 라이브러리 문서에서 toggle-shortcut-info 이벤트에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 참고하고, 코드 예제와 라이브 데모를 직접 확인하거나 DHTMLX RichText 30일 무료 평가판을 다운로드해 보세요.
---

# toggle-shortcut-info

### Description

@short: 단축키 정보를 토글할 때 발생합니다

### Usage

~~~jsx {}
"toggle-shortcut-info": ({ mode?: boolean }) => boolean | void;
~~~

### Parameters

**toggle-shortcut-info** 이벤트의 callback은 다음 파라미터를 포함하는 객체를 받을 수 있습니다:

- `mode` - 단축키 정보를 활성화합니다. `true`이면 단축키 정보 팝업을 표시하고, `false`이면 단축키 정보 팝업을 숨깁니다

:::info
내부 이벤트를 처리하려면 [**Event Bus methods**](api/overview/event_bus_methods_overview.md)를 사용할 수 있습니다
:::

### Example

~~~jsx {5-9}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// subscribe to the "toggle-shortcut-info" event
editor.api.on("toggle-shortcut-info", (obj) => {
    console.log(obj);
    console.log("The shortcut info was shown");
});
// enable the shortcut info
editor.api.exec("toggle-shortcut-info", { mode: true });
~~~

**변경 이력:** 이 이벤트는 v2.0에서 추가되었습니다

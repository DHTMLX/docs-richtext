---
sidebar_label: toggle-shortcut-info
title: toggle-shortcut-info 이벤트
description: DHTMLX JavaScript RichText 라이브러리 문서에서 toggle-shortcut-info 이벤트에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 시도해 보며, DHTMLX RichText의 30일 무료 평가판을 다운로드하세요.
---

# toggle-shortcut-info

### 설명

@short: 단축키 정보를 전환할 때 실행됨

### 사용법

~~~jsx {}
"toggle-shortcut-info": ({ mode?: boolean }) => boolean | void;
~~~

### 파라미터

**toggle-shortcut-info** 이벤트의 콜백은 다음 파라미터를 포함하는 객체를 인자로 받을 수 있습니다:

- `mode` - 단축키 정보를 활성화함; `true`이면 단축키 정보 팝업을 표시하고, `false`이면 단축키 정보 팝업을 숨김

:::info
내부 이벤트를 처리하려면 [**Event Bus 메서드**](api/overview/event_bus_methods_overview.md)를 사용할 수 있습니다
:::

### 예제

~~~jsx {5-9}
// RichText 초기화
const editor = new richtext.Richtext("#root", {
    // 구성 속성
});
// "toggle-shortcut-info" 이벤트 구독
editor.api.on("toggle-shortcut-info", (obj) => {
    console.log(obj);
    console.log("The shortcut info was shown");
});
// 단축키 정보 활성화
editor.api.exec("toggle-shortcut-info", { mode: true });
~~~

**변경 이력:** 이 이벤트는 v2.0에서 추가되었습니다

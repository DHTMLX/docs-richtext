---
sidebar_label: toggle-fullscreen-mode
title: toggle-fullscreen-mode 이벤트
description: DHTMLX JavaScript RichText 라이브러리 문서에서 toggle-fullscreen-mode 이벤트에 대해 알아보세요. 개발자 가이드와 API 참조를 탐색하고, 코드 예제와 라이브 데모를 시도해 보며, DHTMLX RichText의 30일 무료 평가판을 다운로드할 수 있습니다.
---

# toggle-fullscreen-mode

### 설명

@short: 전체 화면 모드를 켜거나 끌 때 발생합니다.

### 사용법

~~~jsx {}
"toggle-fullscreen-mode": ({ mode?: boolean }) => boolean | void;
~~~

### 매개변수

**toggle-fullscreen-mode** 이벤트의 콜백은 다음 속성을 가진 객체를 받습니다:

- `mode` - 전체 화면 모드가 활성화되었는지 여부를 나타냅니다.

:::info
내부 이벤트를 관리하려면 [**Event Bus 메서드**](api/overview/event_bus_methods_overview.md)를 사용할 수 있습니다.
:::

### 예제

~~~jsx {5-9}
// RichText 초기화
const editor = new richtext.Richtext("#root", {
    // 구성 속성
});
// "toggle-fullscreen-mode" 이벤트 구독
editor.api.on("toggle-fullscreen-mode", (obj) => {
    console.log(obj);
    console.log("전체 화면 모드가 변경되었습니다");
});
// 전체 화면 모드 활성화
editor.api.exec("toggle-fullscreen-mode", { mode: true });
~~~

**변경 로그:** 이 이벤트는 v2.0에 도입되었습니다.

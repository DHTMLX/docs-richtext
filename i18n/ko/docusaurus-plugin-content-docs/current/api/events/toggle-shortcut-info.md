---
sidebar_label: toggle-shortcut-info
title: toggle-shortcut-info 이벤트
description: DHTMLX JavaScript RichText 라이브러리 문서에서 toggle-shortcut-info 이벤트에 대해 알아보세요. 개발자 가이드와 API 참조를 탐색하고, 코드 예제와 라이브 데모를 시도해보며, DHTMLX RichText의 무료 30일 평가판을 다운로드할 수 있습니다.
---

# toggle-shortcut-info

### 설명

@short: 단축키 정보가 토글될 때 발생합니다

### 사용법

~~~jsx {}
"toggle-shortcut-info": ({ mode?: boolean }) => boolean | void;
~~~

### 매개변수

**toggle-shortcut-info** 이벤트의 콜백은 다음 속성을 포함하는 객체를 받습니다:

- `mode` - 단축키 정보 표시를 제어합니다; `true`는 단축키 정보 팝업을 표시, `false`는 숨깁니다

:::info
내부 이벤트 관리는 [**Event Bus methods**](api/overview/event_bus_methods_overview.md)를 참고하세요
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
    console.log("단축키 정보가 표시되었습니다");
});
// 단축키 정보 활성화
editor.api.exec("toggle-shortcut-info", { mode: true });
~~~

**변경 로그:** 이 이벤트는 v2.0에 도입되었습니다

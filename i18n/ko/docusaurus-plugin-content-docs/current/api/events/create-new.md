---
sidebar_label: create-new
title: create-new 이벤트
description: DHTMLX JavaScript RichText 라이브러리 문서에서 create-new 이벤트에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험해 보세요. DHTMLX RichText 무료 30일 평가판을 다운로드할 수 있습니다.
---

# create-new

### 설명 {#description}

@short: 메뉴바에서 "New" 옵션을 누르거나 Event Bus methods를 통해 호출될 때 발생합니다

### 사용법 {#usage}

~~~jsx {}
"create-new": ({ reset?: boolean }) => boolean | void;
~~~

### 파라미터 {#parameters}

`create-new` 이벤트의 callback은 다음 파라미터를 포함하는 객체를 받을 수 있습니다:

- `reset` - 새 파일을 생성할 때 기록(history)을 초기화합니다

:::info[정보]
내부 이벤트를 처리하려면 [**Event Bus 메서드**](api/overview/event_bus_methods_overview.md)를 사용할 수 있습니다
:::

### 예제 {#example}

~~~jsx {5-10}
// RichText 초기화
const editor = new richtext.Richtext("#root", {
    // 구성 속성
});
// "create-new" 이벤트 구독
editor.api.on("create-new", ({ reset }) => {
    console.log(`Document has been cleared. History has ${reset ? "" : "not"} been reset.`);
});
// 새 파일을 생성하고 기록을 초기화
editor.api.exec("create-new", { reset: true });
~~~

**변경 이력:** 이 이벤트는 v2.0에서 추가되었습니다

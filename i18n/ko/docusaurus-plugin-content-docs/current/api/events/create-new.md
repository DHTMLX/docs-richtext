---
sidebar_label: create-new
title: create-new 이벤트
description: DHTMLX JavaScript RichText 라이브러리에서 create-new 이벤트가 어떻게 작동하는지 알아보세요. 개발자 가이드, API 참조, 코드 샘플 및 라이브 데모를 탐색하고, DHTMLX RichText의 무료 30일 평가판을 이용해보세요.
---

# create-new

### 설명

@short: 이 이벤트는 메뉴바에서 "New" 옵션을 선택하거나 Event Bus 메서드를 사용할 때 발생합니다.

### 사용법

~~~jsx {}
"create-new": ({ reset?: boolean }) => boolean | void;
~~~

### 매개변수

**create-new** 이벤트의 콜백은 다음 속성을 가진 객체를 받습니다:

- `reset` - 새 파일이 생성될 때 히스토리를 초기화할지 여부를 나타냅니다.

:::info
내부 이벤트를 관리하려면 [**Event Bus 메서드**](api/overview/event_bus_methods_overview.md)를 활용할 수 있습니다.
:::

### 예제

~~~jsx {5-10}
// RichText 초기화
const editor = new richtext.Richtext("#root", {
    // 구성 속성
});
// "create-new" 이벤트 구독
editor.api.on("create-new", ({ reset }) => {
    console.log(`문서가 초기화되었습니다. 히스토리는 ${reset ? "" : "초기화되지 않았습니다."}`);
});
// 새 파일 생성 및 히스토리 초기화
editor.api.exec("create-new", { reset: true });
~~~

**변경 로그:** 이 이벤트는 v2.0에 도입되었습니다.

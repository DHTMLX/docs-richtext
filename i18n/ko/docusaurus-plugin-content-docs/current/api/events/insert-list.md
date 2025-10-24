---
sidebar_label: insert-list
title: insert-list 이벤트
description: DHTMLX JavaScript RichText 라이브러리 문서에서 insert-list 이벤트를 살펴보세요. 개발자 가이드, API 참조, 코드 샘플 및 라이브 데모를 확인하고 DHTMLX RichText의 30일 무료 체험을 이용해 보세요.
---

# insert-list

### 설명

@short: 리스트가 삽입될 때 발생합니다.

### 사용법

~~~jsx {}
"insert-list": ({ type: TListType }) => boolean | void;

type TListType = "bulleted" | "numbered";
~~~

### 매개변수

**insert-list** 이벤트의 콜백은 다음 매개변수를 포함하는 객체를 받습니다:

- `type` - 삽입된 리스트의 종류를 나타냅니다. 가능한 값은 다음과 같습니다:
    - `"bulleted"` - 글머리 기호 리스트
    - `"numbered"` - 번호 매긴 리스트

:::info
내부 이벤트 관리를 위해 [**Event Bus methods**](api/overview/event_bus_methods_overview.md)를 참조할 수 있습니다.
:::

### 예제

~~~jsx {5-9}
// RichText 초기화
const editor = new richtext.Richtext("#root", {
    // 구성 속성
});
// "insert-list" 이벤트 리스닝
editor.api.on("insert-list", (obj) => {
    console.log(obj.type);
    console.log("리스트가 삽입되었습니다");
});
~~~

**변경 내역:** 이 이벤트는 버전 2.0에서 도입되었습니다.

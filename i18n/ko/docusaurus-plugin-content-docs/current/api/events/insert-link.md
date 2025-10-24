---
sidebar_label: insert-link
title: insert-link 이벤트
description: DHTMLX JavaScript RichText 라이브러리 문서에서 insert-link 이벤트를 살펴보세요. 개발자 가이드, API 참조, 샘플 코드 및 라이브 데모를 확인하고 DHTMLX RichText의 30일 무료 평가판을 다운로드할 수 있습니다.
---

# insert-link

### 설명

@short: 링크가 삽입될 때 발생합니다

### 사용법

~~~jsx {}
"insert-link": ({ url: string }) => boolean | void;
~~~

### 매개변수

**update-link** 이벤트의 콜백은 다음 매개변수를 포함하는 객체를 받습니다:

- `url` - 삽입되는 URL

:::info
내부 이벤트를 관리하려면 [**Event Bus methods**](api/overview/event_bus_methods_overview.md)를 사용할 수 있습니다.
:::

### 예제

~~~jsx {5-9}
// RichText 초기화
const editor = new richtext.Richtext("#root", {
    // 구성 속성
});
// "insert-link" 이벤트 리스닝
editor.api.on("insert-link", (obj) => {
    console.log(obj)
    console.log("다음 링크가 삽입되었습니다: " + obj.url);
});
~~~

**변경 로그:** 이 이벤트는 v2.0에서 도입되었습니다

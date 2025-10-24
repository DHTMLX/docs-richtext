---
sidebar_label: insert-line
title: insert-line 이벤트
description: DHTMLX JavaScript RichText 라이브러리 문서에서 insert-line 이벤트에 대한 자세한 정보를 확인하세요. 개발자 가이드, API 참조, 예제 및 라이브 데모를 탐색하고 DHTMLX RichText의 무료 30일 평가판을 다운로드할 수 있습니다.
---

# insert-line

### 설명

@short: 수평선이 삽입될 때 트리거됩니다.

### 사용법

~~~jsx {}
"insert-line": () => boolean | void;
~~~

:::info
내부 이벤트를 다루려면 [**Event Bus 메서드**](api/overview/event_bus_methods_overview.md)를 사용할 수 있습니다.
:::

### 예제

~~~jsx {5-8}
// RichText 초기화
const editor = new richtext.Richtext("#root", {
    // 구성 속성
});
// "insert-line" 이벤트 리스닝
editor.api.on("insert-line", () => {
    console.log("수평선이 삽입되었습니다.");
});
~~~

**변경 로그:** 이 이벤트는 v2.0에 도입되었습니다.

---
sidebar_label: delete-link
title: delete-link 이벤트
description: DHTMLX JavaScript RichText 라이브러리 문서에서 delete-link 이벤트에 대해 알아보세요. 개발자 가이드와 API 참조를 둘러보고, 코드 예제와 라이브 데모를 체험하며, DHTMLX RichText의 30일 무료 평가판을 다운로드할 수 있습니다.
---

# delete-link

### 설명

@short: 링크가 삭제될 때마다 발생합니다.

### 사용법

~~~jsx {}
"delete-link": () => boolean | void;
~~~

:::info
내부 이벤트 관리를 위해 [**Event Bus methods**](api/overview/event_bus_methods_overview.md)를 참고하세요.
:::

### 예제

~~~jsx {5-8}
// RichText 초기화
const editor = new richtext.Richtext("#root", {
    // 구성 속성
});
// "delete-link" 이벤트 구독
editor.api.on("delete-link", () => {
    console.log("링크가 삭제되었습니다");
});
~~~

**변경 로그:** 이 이벤트는 v2.0에서 도입되었습니다.

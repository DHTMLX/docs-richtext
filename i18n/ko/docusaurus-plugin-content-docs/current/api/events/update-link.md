---
sidebar_label: update-link
title: update-link 이벤트
description: DHTMLX JavaScript RichText 라이브러리 문서에서 update-link 이벤트에 대해 알아보세요. 개발자 가이드와 API 참조를 탐색하고, 코드 예제와 라이브 데모를 시도하며, DHTMLX RichText의 무료 30일 평가판을 다운로드할 수 있습니다.
---

# update-link

### 설명

@short: 링크가 업데이트될 때 발생합니다

### 사용법

~~~jsx {}
"update-link": ({ id: number, url: string }) => boolean | void;
~~~

### 매개변수

**update-link** 이벤트의 콜백은 다음 속성을 포함하는 객체를 전달받습니다:

- `id` - 링크의 식별자
- `url` - 업데이트된 URL

:::info
내부 이벤트 관리를 위해 [**Event Bus methods**](api/overview/event_bus_methods_overview.md)를 참고할 수 있습니다.
:::

### 예제

~~~jsx {5-9}
// RichText 초기화
const editor = new richtext.Richtext("#root", {
    // 구성 속성
});
// "update-link" 이벤트 구독
editor.api.on("update-link", (obj) => {
    console.log(obj);
    console.log("다음 링크가 업데이트되었습니다:" + obj.url);
});
~~~

**변경 로그:** 이 이벤트는 v2.0에서 도입되었습니다

---
sidebar_label: update-link
title: update-link 이벤트
description: DHTMLX JavaScript RichText 라이브러리의 update-link 이벤트에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험해 보세요. DHTMLX RichText 30일 무료 평가판을 다운로드할 수도 있습니다.
---

# update-link

### 설명 {#description}

@short: 링크가 업데이트될 때 발생합니다

### 사용법 {#usage}

~~~jsx {}
"update-link": ({ id: number, url: string }) => boolean | void;
~~~

### 파라미터 {#parameters}

**update-link** 이벤트의 callback은 다음 파라미터를 포함하는 객체를 받을 수 있습니다:

- `id` - 링크 ID
- `url` - 수정된 url

:::info[정보]
내부 이벤트를 처리하려면 [**Event Bus 메서드**](api/overview/event_bus_methods_overview.md)를 사용할 수 있습니다
:::

### 예제 {#example}

~~~jsx {5-9}
// RichText 초기화
const editor = new richtext.Richtext("#root", {
    // 구성 속성
});
// "update-link" 이벤트 구독
editor.api.on("update-link", (obj) => {
    console.log(obj);
    console.log("The following link was updated:" + obj.url);
});
~~~

**변경 로그:** 이 이벤트는 v2.0에서 추가되었습니다

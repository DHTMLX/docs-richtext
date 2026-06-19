---
sidebar_label: api.setNext()
title: setNext 메서드
description: DHTMLX JavaScript RichText 라이브러리의 setNext 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험해 보세요. DHTMLX RichText 무료 30일 평가판도 다운로드할 수 있습니다.
---

# api.setNext()

### 설명 {#description}

@short: Event Bus 순서에 특정 액션을 추가할 수 있습니다

### 사용법 {#usage}

~~~jsx {}
api.setNext(next: any): void;
~~~

### 파라미터 {#parameters}

- `next` - (필수) **Event Bus** 순서에 포함할 액션

### 예제 {#example}

~~~jsx {10-11}
const server = "https://some-backend-url";
// Assume that you have a custom server service class named someServerService
const someServerService = new ServerDataService(server);

fetch(server + "/data").then((res) => res.json()).then((data) => {
    const editor = new richtext.Richtext("#root", {
        value: data
    });

    // Integrate someServerService into the Event Bus order of widget
    editor.api.setNext(someServerService);
});
~~~

**변경 이력:** 이 메서드는 v2.0에서 추가되었습니다

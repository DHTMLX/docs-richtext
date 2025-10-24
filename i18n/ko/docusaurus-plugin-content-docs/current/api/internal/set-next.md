---
sidebar_label: api.setNext()
title: setNext 메서드
description: DHTMLX JavaScript RichText 라이브러리 문서에서 setNext 메서드에 대해 알아보세요. 개발자 가이드와 API 참조를 탐색하고, 코드 예제와 라이브 데모를 시도해보며, DHTMLX RichText의 30일 무료 평가판을 다운로드할 수 있습니다.
---

# api.setNext()

### 설명

@short: 이 메서드는 Event Bus 시퀀스에 액션을 추가할 수 있게 해줍니다.

### 사용법

~~~jsx {}
api.setNext(next: any): void;
~~~

### 매개변수

- `next` - (필수) **Event Bus** 시퀀스에 추가할 액션  

### 예제

~~~jsx {10-11}
const server = "https://some-backend-url";
// someServerService라는 커스텀 서버 서비스 클래스가 있다고 가정합니다.
const someServerService = new ServerDataService(server);

fetch(server + "/data").then((res) => res.json()).then((data) => {
    const editor = new richtext.Richtext("#root", {
        value: data
    });

    // 위젯의 Event Bus 시퀀스에 someServerService를 추가합니다.
    editor.api.setNext(someServerService);
});
~~~

**변경 로그:** 이 메서드는 v2.0에 추가되었습니다.

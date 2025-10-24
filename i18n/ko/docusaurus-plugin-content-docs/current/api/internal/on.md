---
sidebar_label: api.on()
title: on 메서드
description: DHTMLX JavaScript RichText 라이브러리 문서에서 on 메서드에 대해 배울 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 시도해 보며, DHTMLX RichText의 30일 무료 평가판을 다운로드할 수 있습니다.
---

# api.on()

### 설명

@short: 내부 이벤트에 핸들러를 연결할 수 있습니다.

### 사용법

~~~jsx {}
api.on(
    event: string,
    handler: function
): void;
~~~

### 매개변수

- `event` - (필수) 핸들러를 실행할 이벤트
- `handler` - (필수) 이벤트가 발생할 때 호출될 함수 (인자는 이벤트에 따라 다름)

### 이벤트

:::info
RichText 내부 이벤트 전체 목록은 [**여기**](api/overview/events_overview.md)에서 확인할 수 있습니다.
:::

### 예제

~~~jsx {5-8}
// RichText 초기화
const editor = new richtext.Richtext("#root", {
    // 설정 속성
});
// "set-font-size" 이벤트를 감지
editor.api.on("set-font-size", (obj) => {
    console.log(obj.fontSize);
});
~~~

**변경 내역:** 이 메서드는 v2.0에서 업데이트되었습니다. `context` 매개변수가 제거되었습니다.

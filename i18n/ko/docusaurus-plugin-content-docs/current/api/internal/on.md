---
sidebar_label: api.on()
title: on 메서드
description: DHTMLX JavaScript RichText 라이브러리 문서에서 on 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 직접 실행해 보며, DHTMLX RichText의 무료 30일 평가판을 다운로드할 수 있습니다.
---

# api.on()

### 설명

@short: 내부 이벤트에 핸들러를 연결할 수 있도록 합니다

### 사용법

~~~jsx {}
api.on(
    event: string,
    handler: function
): void;
~~~

### 매개변수

- `event` - (필수) 발생시킬 이벤트
- `handler` - (필수) 연결할 핸들러 (핸들러의 인자는 발생시킬 이벤트에 따라 달라집니다)

### 이벤트

:::info
RichText 내부 이벤트의 전체 목록은 [**여기**](api/overview/events_overview.md)에서 확인할 수 있습니다
:::

### 예제

~~~jsx {5-8}
// RichText 초기화
const editor = new richtext.Richtext("#root", {
    // 구성 속성
});
// "set-font-size" 이벤트 구독
editor.api.on("set-font-size", (obj) => {
    console.log(obj.fontSize);
});
~~~

**변경 이력:** 이 메서드는 v2.0에서 업데이트되었습니다. `context` 매개변수가 제거되었습니다

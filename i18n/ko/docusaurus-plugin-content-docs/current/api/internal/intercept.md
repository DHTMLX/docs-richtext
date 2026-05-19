---
sidebar_label: api.intercept()
title: intercept 메서드
description: DHTMLX JavaScript RichText 라이브러리의 intercept 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험해 보세요. DHTMLX RichText 무료 30일 평가판을 다운로드할 수도 있습니다.
---

# api.intercept()

### 설명

@short: 내부 이벤트를 가로채고 차단할 수 있습니다

### 사용법

~~~jsx {}
api.intercept(
    event: string,
    callback: function
): void;
~~~

### 매개변수

- `event` - (필수) 발생시킬 이벤트
- `callback` - (필수) 실행할 callback (callback 인수는 발생하는 이벤트에 따라 달라집니다)

### 이벤트

:::info
RichText 내부 이벤트의 전체 목록은 [**여기**](api/overview/events_overview.md)에서 확인할 수 있습니다
:::

### 예제

~~~jsx {5-10}
// create RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// forbid changing the font size
editor.api.intercept("set-font-size", (obj) => {
    if(obj.fontSize !== "36px" ){
        return false;
    }
});
~~~

**변경 이력:** 해당 메서드는 v2.0에서 추가되었습니다

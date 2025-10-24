---
sidebar_label: api.intercept()
title: intercept 메서드
description: DHTMLX JavaScript RichText 라이브러리의 intercept 메서드에 대해 알아보세요. 개발자 가이드와 API 참조를 탐색하고, 코드 예제와 라이브 데모를 시도해보며, DHTMLX RichText의 무료 30일 평가판을 다운로드할 수 있습니다.
---

# api.intercept()

### 설명

@short: 내부 이벤트가 진행되기 전에 이를 가로채고 차단할 수 있는 방법을 제공합니다.

### 사용법

~~~jsx {}
api.intercept(
    event: string,
    callback: function
): void;
~~~

### 매개변수

- `event` - (필수) 가로챌 이벤트 이름
- `callback` - (필수) 이벤트 발생 시 실행할 함수 (인수는 특정 이벤트에 따라 다름)

### 이벤트

:::info
RichText 내부 이벤트 전체 목록은 [**여기서**](api/overview/events_overview.md) 확인할 수 있습니다.
:::

### 예제

~~~jsx {5-10}
// RichText 생성
const editor = new richtext.Richtext("#root", {
    // 구성 속성들
});
// "36px" 외의 폰트 크기 변경을 차단
editor.api.intercept("set-font-size", (obj) => {
    if(obj.fontSize !== "36px" ){
        return false;
    }
});
~~~

**변경 로그:** 이 메서드는 v2.0에 추가되었습니다.

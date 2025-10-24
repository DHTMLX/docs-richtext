---
sidebar_label: 붙여넣기
title: 붙여넣기 이벤트
description: DHTMLX JavaScript RichText 라이브러리 문서에서 붙여넣기 이벤트를 살펴보세요. 개발자 가이드, API 참조, 코드 샘플 및 라이브 데모를 이용하고 DHTMLX RichText의 30일 무료 체험판을 다운로드할 수 있습니다.
---

# 붙여넣기

### 설명

@short: 내용이 붙여넣기될 때 발생합니다

### 사용법

~~~jsx {}
"paste": () => boolean | void;
~~~

:::info
내부 이벤트 관리는 [**Event Bus methods**](api/overview/event_bus_methods_overview.md)를 참조하세요.
:::

### 예제

~~~jsx {5-8}
// RichText 초기화
const editor = new richtext.Richtext("#root", {
    // 구성 속성
});
// "paste" 이벤트 구독
editor.api.on("paste", () => {
    console.log("내용이 붙여넣기되었습니다");
});
~~~

**변경 로그:** 이 이벤트는 v2.0에 도입되었습니다

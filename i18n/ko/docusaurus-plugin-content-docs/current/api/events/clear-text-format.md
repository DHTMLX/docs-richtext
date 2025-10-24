---
sidebar_label: clear-text-format
title: clear-text-format 이벤트
description: DHTMLX JavaScript RichText 라이브러리 문서에서 clear-text-format 이벤트에 대해 알아보세요. 개발자 가이드와 API 참조를 탐색하고, 코드 예제와 라이브 데모를 시도하며, DHTMLX RichText의 무료 30일 평가판을 다운로드할 수 있습니다.
---

# clear-text-format

### 설명

@short: menubar, toolbar 또는 Event Bus 메서드를 사용하여 텍스트 서식이 제거될 때마다 트리거됩니다.

### 사용법

~~~jsx {}
"clear-text-format": () => boolean | void;
~~~

:::info
내부 이벤트를 관리하려면 [**Event Bus 메서드**](api/overview/event_bus_methods_overview.md)를 활용할 수 있습니다.
:::

### 예제

~~~jsx {5-10}
// RichText 초기화
const editor = new richtext.Richtext("#root", {
    // 구성 속성
});
// "clear-text-format" 이벤트 구독
editor.api.on("clear-text-format", () => {
    console.log("텍스트 서식이 지워졌습니다");
});
// 텍스트 서식 지우기
editor.api.exec("clear-text-format", {});
~~~

**변경 로그:** 이 이벤트는 v2.0에서 도입되었습니다

---
sidebar_label: setConfig()
title: setConfig 메서드
description: DHTMLX JavaScript RichText 라이브러리 문서에서 setConfig 메서드에 대해 알아보세요. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 체험하며, DHTMLX RichText의 무료 30일 평가판을 다운로드할 수 있습니다.
---

# setConfig()

### 설명

@short: RichText 편집기의 설정을 새로운 구성으로 업데이트합니다.

### 사용법

~~~jsx {}
setConfig(config: { [key:any]: any }): void;
~~~

### 매개변수

- `config` - (필수) RichText 구성 옵션을 포함하는 객체입니다. 전체 속성 목록은 [여기](api/overview/properties_overview.md)에서 확인하세요.

:::note
`setConfig()` 메서드를 사용할 때, 새 호출에 포함되지 않은 이전에 설정된 매개변수들은 변경되지 않고 그대로 유지됩니다.
:::

### 예제

~~~jsx {6-8}
const editor = new richtext.Richtext("#root", {
    value: "<h1>Some text</h1>",
    // 기타 구성 속성
});

editor.setConfig({
    layoutMode: "document"
});
~~~

**변경 이력:** 이 메서드는 v2.0에 도입되었습니다.

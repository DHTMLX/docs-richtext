---
sidebar_label: setConfig()
title: setConfig 메서드
description: DHTMLX JavaScript RichText 라이브러리 문서에서 setConfig 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험하며, DHTMLX RichText 30일 무료 평가판을 다운로드하세요.
---

# setConfig()

### 설명 {#description}

@short: RichText에 새로운 구성 파라미터를 적용합니다

### 사용법 {#usage}

~~~jsx {}
setConfig(config: { [key:any]: any }): void;
~~~

### 파라미터 {#parameters}

- `config` - (필수) RichText 구성 파라미터 객체입니다. 전체 속성 목록은 [여기](api/overview/properties_overview.md)에서 확인하세요

:::note[참고]
`setConfig()` 메서드는 `setConfig()` 호출 시 명시적으로 전달되지 않은 기존 파라미터를 모두 유지합니다.
:::

### 예제 {#example}

~~~jsx {6-8}
const editor = new richtext.Richtext("#root", {
    value: "<h1>Some text</h1>",
    // other configuration properties
});

editor.setConfig({
    layoutMode: "document"
});
~~~

**변경 로그:** 이 메서드는 v2.0에서 추가되었습니다

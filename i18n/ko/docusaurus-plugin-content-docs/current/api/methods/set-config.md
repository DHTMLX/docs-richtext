---
sidebar_label: setConfig()
title: setConfig 메서드
description: DHTMLX JavaScript RichText 라이브러리 문서에서 setConfig 메서드에 대해 알아볼 수 있습니다. 개발자 가이드 및 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험해 보세요. DHTMLX RichText 무료 30일 평가판도 다운로드할 수 있습니다.
---

# setConfig()

### 설명

@short: RichText에 새로운 구성 파라미터를 적용합니다

### 사용법

~~~jsx {}
setConfig(config: { [key:any]: any }): void;
~~~

### 파라미터

- `config` - (필수) RichText 구성 파라미터 객체. 속성 전체 목록은 [여기](api/overview/properties_overview.md)를 참조하세요

:::note
`setConfig()` 메서드는 `setConfig()` 호출 시 명시적으로 제공되지 않은 이전에 설정된 모든 파라미터를 유지합니다.
:::

### 예제

~~~jsx {6-8}
const editor = new richtext.Richtext("#root", {
    value: "<h1>Some text</h1>",
    // other configuration properties
});

editor.setConfig({
    layoutMode: "document"
});
~~~

**변경 이력:** 이 메서드는 v2.0에서 추가되었습니다

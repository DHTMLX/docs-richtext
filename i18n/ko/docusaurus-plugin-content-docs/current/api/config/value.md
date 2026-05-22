---
sidebar_label: value
title: value Config
description: DHTMLX JavaScript RichText 라이브러리 문서에서 value config에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 탐색하고, 코드 예제와 라이브 데모를 사용해 보세요. DHTMLX RichText 무료 30일 평가판도 다운로드할 수 있습니다.
---

# value

### Description

@short: Optional. Specifies the initial value (content) displayed within the editor area of RichText

:::tip
커스텀 형식으로 값(콘텐츠)을 설정하려면 내장 [`setValue()`](api/methods/set-value.md) 메서드를 사용하세요.
:::

### Usage

~~~jsx {}
value?: string; 
~~~

### Example

~~~jsx {2}
new richtext.Richtext("#root", {
    value: "<h1>some value</h1>" // sets the default value (HTML format)
    // other configuration properties
});
~~~

**Change log:** 이 속성은 v2.0에서 추가되었습니다.

**Related articles:** [Configuration](guides/configuration.md)

**Related sample:** [RichText. Initialization](https://snippet.dhtmlx.com/t55alxiy?tag=richtext)

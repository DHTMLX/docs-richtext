---
sidebar_label: value
title: value 구성
description: DHTMLX JavaScript RichText 라이브러리의 공식 문서에서 value 구성에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 확인하고, 코드 예제와 라이브 데모를 체험해 보세요. DHTMLX RichText 30일 무료 평가판도 다운로드할 수 있습니다.
---

# value

### 설명 {#description}

@short: 선택 사항입니다. RichText 편집기 영역에 표시되는 초기 값(콘텐츠)을 지정합니다.

:::tip[팁]
커스텀 형식으로 값(콘텐츠)을 설정하려면 내장 [`setValue()`](api/methods/set-value.md) 메서드를 사용하십시오.
:::

### 사용법 {#usage}

~~~jsx {}
value?: string; 
~~~

### 예제 {#example}

~~~jsx {2}
new richtext.Richtext("#root", {
    value: "<h1>some value</h1>" // 기본값을 설정합니다 (HTML 형식)
    // 다른 구성 속성
});
~~~

**변경 로그:** 이 속성은 v2.0에서 추가되었습니다.

**관련 문서:** [구성](guides/configuration.md)

**관련 예제:** [RichText. 초기화](https://snippet.dhtmlx.com/t55alxiy?tag=richtext)

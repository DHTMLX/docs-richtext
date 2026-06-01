---
sidebar_label: value
title: value 설정
description: DHTMLX JavaScript RichText 라이브러리 문서에서 value 설정에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 시험해 보며, DHTMLX RichText의 30일 무료 평가판을 다운로드하세요.
---

# value

### 설명

@short: 선택 사항. RichText 에디터 영역 내에 표시되는 초기 값(콘텐츠)을 지정합니다

:::tip[팁]
커스텀 형식으로 값(콘텐츠)을 설정하려면, 내장된 [`setValue()`](api/methods/set-value.md) 메서드를 사용하세요.
:::

### 사용법

~~~jsx {}
value?: string; 
~~~

### 예제

~~~jsx {2}
new richtext.Richtext("#root", {
    value: "<h1>some value</h1>" // 기본 값(HTML 형식)을 설정합니다
    // 기타 설정 속성
});
~~~

**변경 이력:** 이 속성은 v2.0에서 추가되었습니다

**관련 문서:** [설정](guides/configuration.md)

**관련 샘플:** [RichText. 초기화](https://snippet.dhtmlx.com/t55alxiy?tag=richtext)

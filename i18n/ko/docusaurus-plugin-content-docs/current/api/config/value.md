---
sidebar_label: value
title: value 구성
description: DHTMLX JavaScript RichText 라이브러리 문서에서 value 구성에 대해 알아보세요. 개발자 가이드, API 참조, 코드 샘플 및 라이브 데모를 확인하고 DHTMLX RichText의 무료 30일 체험판을 다운로드하세요.
---

# value

### 설명

@short: 선택 사항입니다. RichText 편집기 영역에 처음 표시될 내용을 정의합니다.

:::tip
커스텀 형식으로 내용을 설정하려면 내장된 [`setValue()`](api/methods/set-value.md) 메서드를 사용하세요.
:::

### 사용법

~~~jsx {}
value?: string; 
~~~

### 예제

~~~jsx {2}
new richtext.Richtext("#root", {
    value: "<h1>some value</h1>" // 기본 값 설정 (HTML 형식)
    // 기타 구성 속성
});
~~~

**변경 로그:** 이 속성은 버전 2.0에서 도입되었습니다.

**관련 문서:** [구성](guides/configuration.md)

**관련 샘플:** [RichText. 초기화](https://snippet.dhtmlx.com/t55alxiy?tag=richtext)

---
sidebar_label: setLocale()
title: setLocale 메서드
description: DHTMLX JavaScript RichText 라이브러리 문서에서 setLocale 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 직접 실행해 보며, DHTMLX RichText의 무료 30일 평가판을 다운로드할 수 있습니다.
---

# setLocale()

### 설명

@short: 새로운 locale을 RichText에 적용합니다

### 사용법

~~~jsx {}
setLocale(null | locale?: object): void;
~~~

### 매개변수

- `null` - (선택) 기본 locale로 재설정합니다 (*영어*)
- `locale` - (선택) 적용할 새 locale의 데이터 객체

:::info
`setLocale()` 메서드를 사용하여 새로운 locale을 RichText에 적용할 수 있습니다. RichText를 기본 locale로 재설정하려면 인자 없이 (또는 *null* 값으로) `setLocale()` 메서드를 호출하세요.
:::

### 예제

~~~jsx {5-6}
const editor = new richtext.Richtext("#root", {
    // 구성 속성
});

// "de" locale을 RichText에 적용
editor.setLocale(de);
~~~

**변경 이력:** 이 메서드는 v2.0에서 추가되었습니다

**관련 문서:** [현지화](guides/localization.md)

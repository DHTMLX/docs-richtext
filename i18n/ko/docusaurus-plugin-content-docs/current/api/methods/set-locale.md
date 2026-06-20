---
sidebar_label: setLocale()
title: setLocale 메서드
description: DHTMLX JavaScript RichText 라이브러리 문서에서 setLocale 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험해 보세요. DHTMLX RichText 무료 30일 평가판도 다운로드할 수 있습니다.
---

# setLocale()

### 설명 {#description}

@short: RichText에 새 로케일을 적용합니다

### 사용법 {#usage}

~~~jsx {}
setLocale(null | locale?: object): void;
~~~

### 파라미터 {#parameters}

- `null` - (선택) 기본 로케일(*영어*)로 초기화합니다
- `locale` - (선택) 적용할 새 로케일의 데이터 객체

:::info[정보]
`setLocale()` 메서드를 사용하여 RichText에 새 로케일을 적용합니다. RichText를 기본 로케일로 초기화하려면 인수 없이(또는 *null* 값을 전달하여) `setLocale()` 메서드를 호출합니다.
:::

### 예제 {#example}

~~~jsx {5-6}
const editor = new richtext.Richtext("#root", {
    // 구성 속성
});

// RichText에 "de" 로케일 적용
editor.setLocale(de);
~~~

**변경 이력:** 이 메서드는 v2.0에서 추가되었습니다

**관련 아티클:** [현지화](guides/localization.md)

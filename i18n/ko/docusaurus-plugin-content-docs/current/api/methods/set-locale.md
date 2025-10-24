---
sidebar_label: setLocale()
title: setLocale 메서드
description: DHTMLX JavaScript RichText 라이브러리의 setLocale 메서드에 대해 알아보세요. 개발자 가이드와 API 참조를 탐색하고, 코드 예제와 라이브 데모를 시도해보며, DHTMLX RichText의 30일 무료 평가판을 다운로드할 수 있습니다.
---

# setLocale()

### 설명

@short: RichText의 로케일 설정을 업데이트합니다

### 사용법

~~~jsx {}
setLocale(null | locale?: object): void;
~~~

### 매개변수

- `null` - (선택 사항) 기본 로케일(*영어*)로 다시 전환합니다
- `locale` - (선택 사항) 적용할 새 로케일 데이터를 포함하는 객체입니다

:::info
`setLocale()` 메서드는 RichText에서 사용하는 로케일을 업데이트합니다. 인수를 전달하지 않거나 *null*을 전달하면 로케일이 기본 설정으로 되돌아갑니다.
:::

### 예제

~~~jsx {5-6}
const editor = new richtext.Richtext("#root", {
    // 구성 속성
});

// RichText의 로케일을 "de"로 설정
editor.setLocale(de);
~~~

**변경 로그:** 이 메서드는 v2.0에 도입되었습니다

**관련 문서:** [Localization](guides/localization.md)

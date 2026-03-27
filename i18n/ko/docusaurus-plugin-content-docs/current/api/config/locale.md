---
sidebar_label: locale
title: locale 설정
description: DHTMLX JavaScript RichText 라이브러리 문서에서 locale 설정에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험하며, DHTMLX RichText 30일 무료 평가판을 다운로드하세요.
---

# locale

### 설명 {#description}

@short: 선택 사항. RichText의 현지화 레이블을 포함하는 객체입니다

:::info[정보]
**locale** 객체에는 RichText의 모든 레이블과 해당 번역이 포함되어야 합니다.
:::

### 사용법 {#usage}

~~~jsx {}
locale?: object;
~~~

### 기본 설정 {#default-config}

기본적으로 RichText는 **영어** 로케일을 사용합니다. 사용자 정의 로케일로 설정할 수도 있습니다.

:::tip[팁]
현재 로케일을 동적으로 변경하려면 RichText의 [**setLocale()**](api/methods/set-locale.md) 메서드를 사용할 수 있습니다
:::

### 예제 {#example}

~~~jsx {3}
// RichText 초기화
const editor = new richtext.RichText("#root", {
    locale: richtext.locales.cn // 중국어 로케일을 초기값으로 설정합니다
    // locale: richtext.locales.en // 영어 로케일을 초기값으로 설정합니다
    // locale: richtext.locales.de // 독일어 로케일을 초기값으로 설정합니다
    // 기타 설정 속성
});
~~~

**변경 이력:** 이 속성은 v2.0에서 추가되었습니다

**관련 문서:** [Localization](guides/localization.md)

**관련 예제:** [RichText. Localization](https://snippet.dhtmlx.com/zxjrin3i?tag=richtext)

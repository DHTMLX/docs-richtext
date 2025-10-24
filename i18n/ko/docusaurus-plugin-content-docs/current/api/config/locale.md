---
sidebar_label: locale
title: locale 구성
description: DHTMLX JavaScript RichText 라이브러리 문서에서 locale 구성을 살펴보세요. 개발자 가이드, API 참조, 코드 샘플 및 라이브 데모를 확인하고 DHTMLX RichText의 무료 30일 체험판을 다운로드할 수 있습니다.
---

# locale

### 설명

@short: 선택 사항입니다. RichText의 현지화 레이블을 포함하는 객체입니다.

:::info
**locale** 객체는 모든 RichText 레이블과 해당 번역을 포함해야 합니다.
:::

### 사용법

~~~jsx {}
locale?: object;
~~~

### 기본 구성

기본적으로 RichText는 **영어** locale을 제공합니다. 또한 사용자 지정 locale을 설정할 수도 있습니다.

:::tip
실시간으로 locale을 전환하려면 RichText의 [**setLocale()**](api/methods/set-locale.md) 메서드를 사용하세요.
:::

### 예제

~~~jsx {3}
// RichText 초기화
const editor = new richtext.RichText("#root", {
    locale: richtext.locales.cn // 처음에 중국어 locale이 설정됨
    // locale: richtext.locales.en // 처음에 영어 locale이 설정됨
    // locale: richtext.locales.de // 처음에 독일어 locale이 설정됨
    // 기타 구성 속성
});
~~~

**변경 로그:** 이 속성은 v2.0에서 도입되었습니다.

**관련 문서:** [현지화](guides/localization.md)

**관련 샘플:** [RichText. 현지화](https://snippet.dhtmlx.com/zxjrin3i?tag=richtext)

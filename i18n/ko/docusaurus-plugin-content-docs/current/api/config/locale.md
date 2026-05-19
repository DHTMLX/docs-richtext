---
sidebar_label: locale
title: locale Config
description: DHTMLX JavaScript RichText 라이브러리 문서에서 locale config에 대해 알아볼 수 있습니다. 개발자 가이드 및 API 레퍼런스를 탐색하고, 코드 예제와 라이브 데모를 확인하며, DHTMLX RichText의 무료 30일 평가판을 다운로드하세요.
---

# locale

### Description

@short: 선택 사항. RichText의 현지화 레이블을 포함하는 객체

:::info
**locale** 객체에는 RichText의 모든 레이블과 그에 해당하는 번역이 포함되어야 합니다.
:::

### Usage

~~~jsx {}
locale?: object;
~~~

### Default config

기본적으로 RichText는 **영어** locale을 사용합니다. 사용자 지정 locale로 설정할 수도 있습니다.

:::tip
현재 locale을 동적으로 변경하려면 RichText의 [**setLocale()**](api/methods/set-locale.md) 메서드를 사용할 수 있습니다.
:::

### Example

~~~jsx {3}
// initialize RichText
const editor = new richtext.RichText("#root", {
    locale: richtext.locales.cn // the Chineese locale will be set initially
    // locale: richtext.locales.en // the English locale will be set initially
    // locale: richtext.locales.de // the Germany locale will be set initially
    // other configuration properties
});
~~~

**Change log:** v2.0에서 추가된 속성

**Related articles:** [Localization](guides/localization.md)

**Related sample:** [RichText. Localization](https://snippet.dhtmlx.com/zxjrin3i?tag=richtext)

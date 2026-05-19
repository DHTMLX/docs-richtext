---
sidebar_label: fullscreenMode
title: fullscreenMode Config
description: DHTMLX JavaScript RichText 라이브러리 문서에서 fullscreenMode config에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 직접 실행해 보며, DHTMLX RichText 30일 무료 평가판을 다운로드하세요.
---

# fullscreenMode

### Description

@short: Optional. RichText 전체 화면 모드를 활성화합니다

### Usage

~~~jsx {}
fullscreenMode?: boolean; 
~~~

### Default config

~~~jsx
fullscreenMode: false;
~~~

### Example

~~~jsx {3}
// initialize RichText
new richtext.Richtext("#root", {
    fullscreenMode: true
    // other configuration properties
});
~~~

**Change log:** 이 속성은 v2.0에서 추가되었습니다

**Related articles:** [Configuration](guides/configuration.md)

**Related sample:** [RichText. Full toolbar](https://snippet.dhtmlx.com/ziynafp7?tag=richtext)

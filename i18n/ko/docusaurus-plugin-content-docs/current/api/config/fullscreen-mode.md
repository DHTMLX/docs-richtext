---
sidebar_label: fullscreenMode
title: fullscreenMode 설정
description: DHTMLX JavaScript RichText 라이브러리 문서에서 fullscreenMode 설정에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험하며, DHTMLX RichText 30일 무료 평가판을 다운로드하세요.
---

# fullscreenMode

### 설명 {#description}

@short: 선택 사항. RichText 전체화면 모드를 활성화합니다

### 사용법 {#usage}

~~~jsx {}
fullscreenMode?: boolean;
~~~

### 기본 설정 {#default-config}

~~~jsx
fullscreenMode: false;
~~~

### 예제 {#example}

~~~jsx {3}
// RichText 초기화
new richtext.Richtext("#root", {
    fullscreenMode: true
    // 기타 설정 속성
});
~~~

**변경 이력:** 이 속성은 v2.0에서 추가되었습니다

**관련 문서:** [Configuration](guides/configuration.md)

**관련 예제:** [RichText. Full toolbar](https://snippet.dhtmlx.com/ziynafp7?tag=richtext)

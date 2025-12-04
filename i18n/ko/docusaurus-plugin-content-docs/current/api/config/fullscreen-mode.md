---
sidebar_label: fullscreenMode
title: fullscreenMode 구성
description: DHTMLX JavaScript RichText 라이브러리 문서에서 fullscreenMode 구성을 살펴보세요. 개발자 가이드, API 참조, 코드 예제 및 라이브 데모를 확인하고 DHTMLX RichText의 30일 무료 평가판을 다운로드하세요.
---

# fullscreenMode

### 설명

@short: 선택 사항입니다. RichText 전체 화면 모드를 활성화합니다.

### 사용법

~~~jsx {}
fullscreenMode?: boolean; 
~~~

### 기본 구성

~~~jsx
fullscreenMode: false;
~~~

### 예제

~~~jsx {3}
// RichText 초기화
new richtext.Richtext("#root", {
    fullscreenMode: true
    // 기타 구성 속성
});
~~~

**변경 로그:** 이 속성은 v2.0에 도입되었습니다.

**관련 문서:** [구성](guides/configuration.md)

**관련 샘플:** [RichText. 전체 툴바](https://snippet.dhtmlx.com/ziynafp7?tag=richtext)

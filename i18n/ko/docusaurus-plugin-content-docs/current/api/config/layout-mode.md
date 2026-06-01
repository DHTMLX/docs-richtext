---
sidebar_label: layoutMode
title: layoutMode 설정
description: DHTMLX JavaScript RichText 라이브러리 문서에서 layoutMode 설정에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 시험해 보며, DHTMLX RichText의 30일 무료 평가판을 다운로드하세요.
---

# layoutMode

### 설명

@short: 선택 사항. 메인 에디터 영역의 레이아웃 모드를 지정합니다

### 사용법

~~~jsx {}
layoutMode: "classic" | "document";
~~~

`"classic"` 모드는 전체 편집 영역을 채웁니다. `"document"` 모드는 편집 영역을 문서 페이지 형태로 표시합니다.

### 기본 설정

~~~jsx
layoutMode: "classic";
~~~

### 예제

~~~jsx {3}
// RichText 초기화
new richtext.Richtext("#root", {
    layoutMode: "document"  // 기본적으로 "document" 모드로 RichText를 초기화합니다
    // 기타 설정 속성
});
~~~

**변경 이력:** 이 속성은 제거된 `mode` 속성 대신 v2.0에서 추가되었습니다

**관련 문서:** [설정](guides/configuration.md)

**관련 샘플:** [RichText. 초기화](https://snippet.dhtmlx.com/t55alxiy?tag=richtext)

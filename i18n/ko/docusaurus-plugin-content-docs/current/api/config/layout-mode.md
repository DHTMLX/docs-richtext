---
sidebar_label: layoutMode
title: layoutMode 구성 옵션
description: DHTMLX JavaScript RichText 라이브러리의 layoutMode 구성 옵션에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제 및 라이브 데모를 체험해 보세요. DHTMLX RichText 30일 무료 평가판도 다운로드할 수 있습니다.
---

# layoutMode

### 설명 {#description}

@short: 선택 사항. 메인 편집기 영역의 레이아웃 모드를 지정합니다

### 사용법 {#usage}

~~~jsx {}
layoutMode: "classic" | "document";
~~~

`"classic"` 모드는 전체 편집 영역을 채웁니다. `"document"` 모드는 편집 영역을 문서 페이지 형태로 표시합니다.

### 기본 구성 {#default-config}

~~~jsx
layoutMode: "classic";
~~~

### 예제 {#example}

~~~jsx {3}
// RichText 초기화
new richtext.Richtext("#root", {
    layoutMode: "document"  // 기본값으로 "document" 모드로 RichText를 초기화합니다
    // 기타 구성 속성
});
~~~

**변경 이력:** 이 속성은 제거된 `mode` 속성 대신 v2.0에서 추가되었습니다

**관련 문서:** [구성](guides/configuration.md)

**관련 예제:** [RichText. 초기화](https://snippet.dhtmlx.com/t55alxiy?tag=richtext)

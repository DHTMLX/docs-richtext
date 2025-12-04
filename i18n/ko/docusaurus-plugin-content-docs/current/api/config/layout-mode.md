---
sidebar_label: layoutMode
title: layoutMode 구성
description: DHTMLX JavaScript RichText 라이브러리 문서에서 layoutMode 구성에 대해 알아보세요. 개발자 가이드, API 참조, 코드 샘플, 라이브 데모를 확인하고 DHTMLX RichText의 무료 30일 체험판을 다운로드하세요.
---

# layoutMode

### 설명

@short: 선택 사항입니다. 메인 편집기 영역의 레이아웃 스타일을 정의합니다.

### 사용법

~~~jsx {}
layoutMode: "classic" | "document";
~~~

`"classic"` 모드는 편집 영역이 페이지 전체에 걸쳐 확장됩니다. `"document"` 모드는 실제 문서 크기를 시뮬레이션하며 A4, A5, A6, A7과 같은 형식을 사용합니다.

### 기본 구성

~~~jsx
layoutMode: "classic";
~~~

### 예제

~~~jsx {3}
// RichText 초기화
new richtext.Richtext("#root", {
    layoutMode: "document"  // 기본적으로 "document" 모드를 사용하도록 RichText 설정
    // 기타 구성 속성
});
~~~

**변경 사항:** 이 속성은 v2.0에서 도입되었으며, 이전의 `mode` 속성을 대체합니다.

**관련 문서:** [Configuration](guides/configuration.md)

**관련 샘플:** [RichText. Initialization](https://snippet.dhtmlx.com/t55alxiy?tag=richtext)

---
sidebar_label: layoutMode
title: layoutMode Config
description: DHTMLX JavaScript RichText 라이브러리 문서에서 layoutMode config에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 직접 실행해 보세요. DHTMLX RichText 무료 30일 평가판도 다운로드할 수 있습니다.
---

# layoutMode

### Description

@short: Optional. Specifies the layout mode for the main editor area

### Usage

~~~jsx {}
layoutMode: "classic" | "document";
~~~

`"classic"` 모드는 전체 편집 영역을 채웁니다. `"document"` 모드는 편집 영역을 문서 페이지 형태로 표시합니다.

### Default config

~~~jsx
layoutMode: "classic";
~~~

### Example

~~~jsx {3}
// initialize RichText
new richtext.Richtext("#root", {
    layoutMode: "document"  // initializes RichText with "document" mode by default
    // other configuration properties
});
~~~

**Change log:** 이 속성은 제거된 `mode` 속성 대신 v2.0에서 추가되었습니다

**Related articles:** [Configuration](guides/configuration.md)

**Related sample:** [RichText. Initialization](https://snippet.dhtmlx.com/t55alxiy?tag=richtext)

---
sidebar_label: 초기화
title: 초기화
description: DHTMLX JavaScript RichText 라이브러리 문서에서 초기화에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 탐색하고, 코드 예제와 라이브 데모를 사용해 보세요. DHTMLX RichText의 무료 30일 평가판도 다운로드할 수 있습니다.
---

# 초기화 {#initialization}

이 가이드는 페이지에 RichText를 추가하는 방법을 설명합니다. 다음 단계에 따라 사용 가능한 에디터를 설정하세요:

1. [페이지에 소스 파일 추가하기](#include-the-source-files)
2. [RichText용 컨테이너 생성하기](#create-a-container)
3. [RichText 초기화하기](#initialize-richtext)

## 소스 파일 추가하기 {#include-the-source-files}

프로젝트에 RichText JavaScript 및 CSS 파일을 추가합니다. [패키지를 다운로드](https://dhtmlx.com/docs/products/dhtmlxRichText/download.shtml)하여 프로젝트 폴더에 압축을 풀어 주세요.

RichText를 생성하려면 페이지에 두 개의 소스 파일을 추가해야 합니다:

- *richtext.js*
- *richtext.css*

HTML에서 해당 파일을 참조합니다. 폴더 구조에 맞게 상대 경로를 조정하세요:

~~~html title="index.html"
<script type="text/javascript" src="./codebase/richtext.js"></script>  
<link rel="stylesheet" href="./codebase/richtext.css">
~~~

## 컨테이너 생성하기 {#create-a-container}

*"root"*와 같은 ID를 가진 RichText용 컨테이너를 추가합니다:

~~~jsx title="index.html"
<div id="root"></div>
~~~

## RichText 초기화하기 {#initialize-richtext}

`richtext.Richtext` 생성자를 사용하여 RichText를 초기화합니다. 생성자는 두 가지 매개변수를 받습니다:

- 컨테이너 — CSS 선택자 또는 DOM 요소
- 에디터 속성이 포함된 구성 객체. 아래의 [전체 속성 목록](#configuration-properties)을 참조하세요

아래 예제는 `#root` 컨테이너에서 RichText를 초기화합니다:

~~~jsx title="index.html"
const editor = new richtext.Richtext("#root", {
    // 구성 속성
});
~~~

### 구성 속성 {#configuration-properties}

구성 객체의 키로 구성 옵션을 추가합니다.

:::note[참고]
전체 구성 속성 목록은 [속성 개요](api/overview/properties_overview.md)를 참조하세요.
:::

## RichText 인스턴스 제거하기 {#destroy-the-richtext-instance}

[`destructor()`](api/methods/destructor.md) 메서드를 호출하여 RichText HTML을 제거하고 관련 이벤트를 모두 해제합니다:

~~~jsx
const editor = new richtext.Richtext("#root", {
    // 구성 속성
});

editor.destructor();
~~~

## 예제 {#example}

아래 예제는 메뉴바를 활성화한 상태로 RichText를 초기화합니다:

<iframe src="https://snippet.dhtmlx.com/tjryzka7?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>

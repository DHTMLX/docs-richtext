---
sidebar_label: 초기화
title: 초기화
description: DHTMLX JavaScript RichText 라이브러리 문서에서 초기화에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 시도해 보며, DHTMLX RichText의 무료 30일 평가판을 다운로드하세요.
---

# 초기화

이 가이드에서는 페이지에 RichText를 추가하는 방법을 설명합니다. 즉시 사용 가능한 에디터를 얻으려면 다음 단계를 따르세요:

1. [페이지에 소스 파일 포함하기](#include-the-source-files).
2. [RichText 컨테이너 만들기](#create-a-container).
3. [RichText 초기화](#initialize-richtext).

## 소스 파일 포함

RichText JavaScript 및 CSS 파일을 프로젝트에 추가합니다. [패키지를 다운로드](https://dhtmlx.com/docs/products/dhtmlxRichText/download.shtml)한 후 콘텐츠를 프로젝트 폴더에 압축 해제합니다.

RichText를 생성하려면 페이지에 두 개의 소스 파일을 포함합니다:

- *richtext.js*
- *richtext.css*

HTML에서 파일을 참조합니다. 폴더 레이아웃에 맞게 상대 경로를 조정합니다:

~~~html title="index.html"
<script type="text/javascript" src="./codebase/richtext.js"></script>  
<link rel="stylesheet" href="./codebase/richtext.css">
~~~

## 컨테이너 만들기

*"root"* 와 같은 ID를 가진 RichText용 컨테이너를 추가합니다:

~~~jsx title="index.html"
<div id="root"></div>
~~~

## RichText 초기화

`richtext.Richtext` 생성자로 RichText를 초기화합니다. 생성자는 두 개의 매개변수를 받습니다:

- 컨테이너 — CSS 선택자 또는 DOM 요소
- 에디터 속성을 가진 설정 객체. 아래의 [전체 속성 목록](#configuration-properties)을 참조하세요

아래 예제는 `#root` 컨테이너에서 RichText를 초기화합니다:

~~~jsx title="index.html"
const editor = new richtext.Richtext("#root", {
    // 설정 속성
});
~~~

### 설정 속성

설정 옵션을 설정 객체의 키로 추가합니다.

:::note
설정 속성의 전체 목록은 [속성 개요](api/overview/properties_overview.md)를 참조하세요.
:::

## RichText 인스턴스 제거

RichText HTML을 제거하고 관련된 모든 이벤트를 분리하려면 [`destructor()`](api/methods/destructor.md) 메서드를 호출합니다:

~~~jsx
const editor = new richtext.Richtext("#root", {
    // 설정 속성
});

editor.destructor();
~~~

## 예제

아래 예제는 메뉴바를 활성화한 상태로 RichText를 초기화합니다:

<iframe src="https://snippet.dhtmlx.com/tjryzka7?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>

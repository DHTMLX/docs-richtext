---
sidebar_label: 초기화
title: 초기화
description: DHTMLX JavaScript RichText 라이브러리 문서에서 초기화 방법을 확인하실 수 있습니다. 개발자 가이드와 API 레퍼런스를 탐색하고, 코드 예제와 라이브 데모를 체험해 보세요. DHTMLX RichText의 무료 30일 평가판도 다운로드할 수 있습니다.
---

# 초기화

이 가이드에서는 페이지에 RichText를 생성하고 애플리케이션에 편집기 기능을 추가하는 방법을 자세히 안내합니다. 아래 단계를 따라 사용 가능한 컴포넌트를 준비하십시오:

1. [페이지에 RichText 소스 파일 포함하기](#including-source-files).
2. [RichText용 컨테이너 생성하기](#creating-container).
3. [객체 생성자로 RichText 초기화하기](#initializing-richtext).

## 소스 파일 포함하기 {#including-source-files}

[패키지를 다운로드](https://dhtmlx.com/docs/products/dhtmlxRichText/download.shtml)하여 프로젝트의 폴더에 압축을 해제합니다.

RichText를 생성하려면 페이지에 다음 소스 파일 2개를 포함해야 합니다:

- *richtext.js*
- *richtext.css*

소스 파일에 대한 상대 경로가 올바르게 설정되어 있는지 확인하십시오:

~~~html title="index.html"
<script type="text/javascript" src="./codebase/richtext.js"></script>
<link rel="stylesheet" href="./codebase/richtext.css">
~~~

## 컨테이너 생성하기 {#creating-container}

RichText용 컨테이너를 추가하고 ID를 지정합니다. 예를 들어 *"root"*와 같이 지정합니다:

~~~jsx title="index.html"
<div id="root"></div>
~~~

## RichText 초기화하기 {#initializing-richtext}

`richtext.Richtext` 생성자를 사용하여 RichText를 초기화합니다. 생성자는 두 가지 매개변수를 받습니다:

- HTML 컨테이너 (HTML 컨테이너의 ID)
- 구성 속성이 담긴 객체. [전체 목록은 여기서 확인하세요](#configuration-properties)

~~~jsx title="index.html"
// RichText 생성
const editor = new richtext.Richtext("#root", {
    // 구성 속성
});
~~~

### 구성 속성 {#configuration-properties}

:::note[참고]
**RichText**를 구성하기 위한 전체 속성 목록은 [**여기**](api/overview/properties_overview.md)에서 확인할 수 있습니다.
:::

## 예제 {#example}

이 스니펫에서 초기 데이터로 **RichText**를 초기화하는 방법을 확인할 수 있습니다:

<iframe src="https://snippet.dhtmlx.com/tjryzka7?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>

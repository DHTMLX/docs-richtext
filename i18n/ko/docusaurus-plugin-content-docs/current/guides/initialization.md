---
sidebar_label: 초기화
title: 초기화
description: DHTMLX JavaScript RichText 라이브러리의 초기화에 대해 문서에서 확인할 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 시도해 보며, DHTMLX RichText의 30일 무료 평가판도 다운로드할 수 있습니다.
---

# 초기화

이 문서는 페이지에 RichText를 설정하는 간단한 과정을 안내합니다. 아래 단계만 따라하면 앱에서 RichText 에디터를 바로 사용할 수 있습니다.

1. [RichText 소스 파일을 페이지에 포함하기](#including-source-files)
2. [RichText 컨테이너 만들기](#creating-container)
3. [객체 생성자로 RichText 초기화하기](#initializing-richtext)

## Including source files

먼저, [패키지를 다운로드](https://dhtmlx.com/docs/products/dhtmlxRichText/download.shtml)하여 프로젝트 폴더 내 원하는 위치에 압축을 해제하세요.

RichText를 사용하려면 아래 두 파일을 페이지에 추가해야 합니다.

- *richtext.js*
- *richtext.css*

이 파일들을 저장한 경로를 정확히 지정해야 합니다.

~~~html title="index.html"
<script type="text/javascript" src="./codebase/richtext.js"></script>  
<link rel="stylesheet" href="./codebase/richtext.css">
~~~

## Creating container

다음으로, RichText를 위한 컨테이너를 만듭니다. 예를 들어 *"root"*와 같은 ID를 부여하세요.

~~~jsx title="index.html"
<div id="root"></div>
~~~

## Initializing RichText

이제 `richtext.Richtext` 생성자를 사용하여 RichText를 생성할 수 있습니다. 이 생성자에는 두 가지가 필요합니다.

- HTML 컨테이너(지정한 ID 사용)
- 설정 옵션을 담은 객체. [전체 옵션 목록은 여기에서 확인하세요](#configuration-properties)

~~~jsx title="index.html"
// RichText 생성
const editor = new richtext.Richtext("#root", {
    // configuration properties  
});
~~~

### Configuration properties

:::note
**RichText**에서 사용할 수 있는 모든 속성은 [**여기**](api/overview/properties_overview.md)에서 확인할 수 있습니다.
:::

## Example

아래는 초기 데이터와 함께 **RichText**를 설정하는 간단한 예시입니다.

<iframe src="https://snippet.dhtmlx.com/tjryzka7?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>

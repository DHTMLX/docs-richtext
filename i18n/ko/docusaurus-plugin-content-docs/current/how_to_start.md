---
sidebar_label: 시작 방법
title: 시작 방법
description: DHTMLX JavaScript RichText 라이브러리 문서에서 DHTMLX RichText 작업을 시작하는 방법을 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 탐색하고, 코드 예제와 라이브 데모를 시도해 보며, DHTMLX RichText의 30일 무료 평가판을 다운로드하세요.
---

# 시작 방법

이 명확하고 포괄적인 튜토리얼은 페이지에 완전히 작동하는 RichText를 배치하기 위해 거쳐야 하는 단계들을 안내합니다.

<div className="img_border">
![DHTMLX RichText Classic 모드](./assets/richtext/classic_mode.png)
</div>

## 1단계. 소스 파일 포함

먼저 HTML 파일을 생성하고 *index.html*이라고 명명합니다. 그런 다음 생성된 파일에 RichText 소스 파일을 포함시킵니다.

두 개의 필수 파일이 있습니다:

- RichText의 JS 파일
- RichText의 CSS 파일

~~~html {5-6} title="index.html"
<!DOCTYPE html>
<html>
    <head>
        <title>How to Start with RichText</title>
        <script src="./codebase/richtext.js"></script>   
        <link href="./codebase/richtext.css" rel="stylesheet">
    </head>
    <body>
        <script>
        // 여기에 코드를 작성합니다
        </script>
    </body>
</html>
~~~

### npm 또는 yarn을 통한 RichText 설치

**yarn** 또는 **npm** 패키지 매니저를 사용하여 JavaScript RichText를 프로젝트에 가져올 수 있습니다.

#### npm 또는 yarn을 통한 평가판 RichText 설치

:::info
RichText의 평가판을 사용하려면 [**평가판 RichText 패키지**](https://dhtmlx.com/docs/products/dhtmlxRichtext/download.shtml)를 다운로드하고 *README* 파일에 언급된 단계를 따르세요. 평가판 RichText는 30일 동안만 사용 가능합니다.
:::

#### npm 또는 yarn을 통한 PRO RichText 설치

:::info
DHTMLX 비공개 **npm**에는 [클라이언트 영역](https://dhtmlx.com/clients/)에서 **npm**용 로그인 및 비밀번호를 생성하여 직접 접근할 수 있습니다. 자세한 설치 가이드도 그곳에서 확인할 수 있습니다. 비공개 **npm** 접근은 독점 RichText 라이선스가 활성화되어 있는 동안에만 가능합니다.
:::

## 2단계. RichText 생성

이제 페이지에 RichText를 추가할 준비가 되었습니다. 먼저 RichText를 위한 `<div>` 컨테이너를 생성해 봅시다. 다음 단계를 따르세요:

- *index.html* 파일에 DIV 컨테이너를 지정합니다
- `richtext.Richtext` 생성자를 사용하여 RichText를 초기화합니다

매개변수로 생성자는 RichText가 배치될 HTML 컨테이너의 유효한 CSS 선택자와 해당 구성 객체를 받습니다.

~~~html {9,12-14} title="index.html"
<!DOCTYPE html>
<html>
    <head>
        <title>How to Start with RichText</title>
        <script src="./codebase/richtext.js"></script>   
        <link href="./codebase/richtext.css" rel="stylesheet">  
    </head>
    <body>
        <div id="root"></div>

        <script>
            const editor = new richtext.Richtext("#root", {
                // 구성 속성
            });
        </script>
    </body>
</html>
~~~

## 3단계. RichText 구성

다음으로 초기화 시 RichText 컴포넌트에 적용할 구성 속성을 지정할 수 있습니다.

RichText 작업을 시작하려면 먼저 [`value`](api/config/value.md) 속성을 통해 에디터에 초기 데이터를 제공해야 합니다. 이 외에도 [**menubar**](api/config/menubar.md)를 활성화하고, [**toolbar**](api/config/toolbar.md)를 사용자 정의하며, [**전체 화면**](api/config/fullscreen-mode.md) 및 [**레이아웃**](api/config/layout-mode.md) 모드를 지정하고, 새로운 [**로케일**](api/config/locale.md)뿐만 아니라 [**기본 스타일**](api/config/default-styles.md)을 적용할 수 있습니다.

~~~jsx {2-12}
const editor = new richtext.Richtext("#root", {
    menubar: true,
    toolbar: false,
    fullscreenMode: true,
    layoutMode: "document",
    locale: richtext.locales.cn
    defaultStyles: {
        h4: {
            "font-family": "Roboto"
        },
        // 기타 설정
    }
});
~~~

## 다음 단계

이것이 전부입니다. 단 세 가지 간단한 단계로 콘텐츠 편집을 위한 편리한 도구를 갖추게 됩니다. 이제 콘텐츠 작업을 시작하거나 JavaScript RichText의 내부 세계를 계속 탐험할 수 있습니다.

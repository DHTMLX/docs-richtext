---
sidebar_label: 시작하기
title: 시작하기
description: DHTMLX JavaScript RichText 라이브러리 문서에서 DHTMLX RichText 사용을 시작하는 방법을 확인하실 수 있습니다. 개발자 가이드 및 API 참조를 살펴보고, 코드 예제와 라이브 데모를 체험하며, DHTMLX RichText의 무료 30일 평가판을 다운로드하십시오.
---

# 시작하기

이 명확하고 포괄적인 튜토리얼은 페이지에서 완전히 작동하는 RichText를 구성하기 위해 필요한 단계를 안내합니다.

<div className="img_border">
![DHTMLX RichText 클래식 모드](./assets/richtext/classic_mode.png)
</div>

## 1단계. 소스 파일 포함 {#step-1-including-source-files}

HTML 파일을 생성하고 *index.html*로 저장하는 것부터 시작하십시오. 그런 다음 생성된 파일에 RichText 소스 파일을 포함시키십시오.

다음 두 가지 파일이 필요합니다:

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
        // 여기에 코드를 작성하십시오
        </script>
    </body>
</html>
~~~

### npm 또는 yarn으로 RichText 설치 {#installing-richtext-via-npm-or-yarn}

**yarn** 또는 **npm** 패키지 관리자를 사용하여 JavaScript RichText를 프로젝트에 가져올 수 있습니다.

#### npm 또는 yarn으로 체험판 RichText 설치 {#installing-trial-richtext-via-npm-or-yarn}

:::info[정보]
RichText 체험판을 사용하려면 [**체험판 RichText 패키지**](https://dhtmlx.com/docs/products/dhtmlxRichtext/download.shtml)를 다운로드하고 *README* 파일에 명시된 단계를 따르십시오. 체험판 RichText는 30일 동안만 사용할 수 있습니다.
:::

#### npm 또는 yarn으로 PRO RichText 설치 {#installing-pro-richtext-via-npm-or-yarn}

:::info[정보]
[고객 영역](https://dhtmlx.com/clients/)에서 **npm** 로그인 및 비밀번호를 생성하여 DHTMLX 프라이빗 **npm**에 직접 접근할 수 있습니다. 상세한 설치 안내도 해당 페이지에서 확인할 수 있습니다. 프라이빗 **npm** 접근은 독점 RichText 라이선스가 활성 상태인 동안에만 가능합니다.
:::

## 2단계. RichText 생성 {#step-2-creating-richtext}

이제 페이지에 RichText를 추가할 준비가 되었습니다. 먼저 RichText를 위한 `<div>` 컨테이너를 생성하겠습니다. 다음 단계를 따르십시오:

- *index.html* 파일에 DIV 컨테이너 지정
- `richtext.Richtext` 생성자를 사용하여 RichText 초기화

생성자는 RichText가 배치될 HTML 컨테이너의 유효한 CSS 선택자와 해당 구성 객체를 매개변수로 받습니다.

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

## 3단계. RichText 구성 {#step-3-configuring-richtext}

다음으로 초기화 시 RichText 컴포넌트에 적용할 구성 속성을 지정할 수 있습니다.

RichText 작업을 시작하려면 먼저 [`value`](api/config/value.md) 속성을 통해 에디터의 초기 데이터를 제공해야 합니다. 또한 [**메뉴바**](api/config/menubar.md) 활성화, [**툴바**](api/config/toolbar.md) 커스터마이징, [**전체 화면**](api/config/fullscreen-mode.md) 및 [**레이아웃**](api/config/layout-mode.md) 모드 지정, 새 [**로케일**](api/config/locale.md) 적용, [**기본 스타일**](api/config/default-styles.md) 설정이 가능합니다.

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

## 다음 단계 {#whats-next}

이것으로 끝입니다. 단 세 가지 간단한 단계만으로 콘텐츠를 편집하기 위한 편리한 도구를 갖추게 되었습니다. 이제 콘텐츠 작업을 시작하거나 JavaScript RichText의 내부 세계를 계속 탐색하실 수 있습니다.

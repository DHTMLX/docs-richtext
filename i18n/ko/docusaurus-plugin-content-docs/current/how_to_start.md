---
sidebar_label: 시작하기
title: 시작하기
description: DHTMLX JavaScript RichText 라이브러리의 문서를 통해 DHTMLX RichText를 시작하는 방법을 알아보세요. 개발자 가이드와 API 레퍼런스를 참고하고, 코드 예제와 라이브 데모를 직접 실행해 보며, DHTMLX RichText의 30일 무료 평가판도 다운로드할 수 있습니다.
---

# 시작하기

페이지에 RichText를 적용하는 간단한 절차를 안내합니다.

import classic_mode from '@site/static/img/richtext/classic_mode.png';

<img
  src={classic_mode}
  alt="Classic mode"
  className="img_border"
/>

## 1단계. 소스 파일 포함하기

먼저, *index.html*이라는 HTML 파일을 생성하세요. 이 파일에 RichText 소스 파일을 추가합니다.

필요한 파일은 다음 두 가지입니다:

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
        // your code will be here
        </script>
    </body>
</html>
~~~

### npm 또는 yarn을 통한 RichText 설치

RichText는 **yarn** 또는 **npm**을 사용해 프로젝트에 추가할 수 있습니다.

#### npm 또는 yarn으로 체험판 RichText 설치

:::info
체험판 RichText를 사용하려면 [**trial RichText package**](https://dhtmlx.com/docs/products/dhtmlxRichtext/download.shtml)를 다운로드하고, *README* 파일의 안내에 따라 설치하세요. 참고로, 체험판은 30일 동안 사용할 수 있습니다.
:::

#### npm 또는 yarn으로 PRO RichText 설치

:::info
PRO 버전을 이용하려면 [Client's Area](https://dhtmlx.com/clients/)에서 DHTMLX 전용 **npm**을 위한 로그인 정보와 비밀번호를 생성하세요. 자세한 설치 가이드도 제공됩니다. 전용 **npm** 접근 권한은 RichText 라이선스가 활성화되어 있는 동안 유지됩니다.
:::

## 2단계. RichText 생성하기

이제 RichText를 페이지에 추가할 차례입니다. 먼저 RichText를 위한 `<div>` 컨테이너를 만드세요. 절차는 다음과 같습니다:

- *index.html* 파일에 DIV 컨테이너 추가
- `richtext.Richtext` 생성자를 사용해 RichText 초기화

생성자는 RichText가 표시될 HTML 컨테이너에 대한 유효한 CSS 선택자와, 필요한 경우 설정 객체를 인자로 받습니다.

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
                // configuration properties
            });
        </script>
    </body>
</html>
~~~

## 3단계. RichText 설정하기

이제 RichText가 시작될 때 사용할 설정 옵션을 지정할 수 있습니다.

가장 먼저, [`value`](api/config/value.md) 속성을 사용해 에디터의 초기 데이터를 설정하세요. 또한 [**menubar**](api/config/menubar.md)를 활성화하거나, [**toolbar**](api/config/toolbar.md)를 조정하고, [**fullscreen**](api/config/fullscreen-mode.md) 및 [**layout**](api/config/layout-mode.md) 모드를 설정할 수 있습니다. [**locale**](api/config/locale.md)를 변경하거나 [**default styles**](api/config/default-styles.md)를 적용할 수도 있습니다.

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
        // other settings
    }
});
~~~

## 다음 단계

이제 세 단계만 거치면 RichText를 사용해 콘텐츠를 편집할 준비가 완료됩니다. 바로 작업을 시작하거나, JavaScript RichText의 다양한 기능을 더 살펴보세요.

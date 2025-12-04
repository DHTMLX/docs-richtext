---
sidebar_label: 구성
title: 구성
description: DHTMLX JavaScript RichText 라이브러리의 문서에서 구성 방법을 알아보세요. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험하며, DHTMLX RichText의 30일 무료 평가판도 다운로드할 수 있습니다.
---

# 구성

RichText는 API를 통해 원하는 모양과 동작으로 설정할 수 있습니다. 제공되는 옵션을 사용하여 다음과 같이 설정할 수 있습니다:

- [`menubar`](api/config/menubar.md) 속성으로 **메뉴바**를 표시하거나 숨길 수 있습니다.
- [`toolbar`](api/config/toolbar.md) 속성으로 **툴바**를 설정할 수 있습니다.
- [`fullscreenMode`](api/config/fullscreen-mode.md) 속성으로 **전체화면 모드**를 활성화할 수 있습니다.
- [`layoutMode`](api/config/layout-mode.md) 속성으로 **레이아웃**을 "classic"과 "document" 모드 중에서 전환할 수 있습니다.
- [`value`](api/config/value.md) 속성으로 **초기 값**을 지정할 수 있습니다.
- [`locale`](api/config/locale.md) 속성으로 **초기 로케일**을 선택할 수 있습니다.
- [`defaultStyles`](api/config/default-styles.md) 속성으로 **초기 스타일**을 적용할 수 있습니다.

## 레이아웃 모드

RichText 에디터는 두 가지 레이아웃 모드를 제공합니다. 콘텐츠에 맞는 환경에서 작업할 수 있습니다:

- **"classic"**

import classic_mode from '@site/static/img/richtext/classic_mode.png';

<img
  src={classic_mode}
  alt="Classic mode"
  className="img_border"
/>

- **"document"**

import document_mode from '@site/static/img/richtext/document_mode.png';

<img
  src={document_mode}
  alt="Document mode"
  className="img_border"
/>

모드를 선택하려면, 컴포넌트 초기화 시 RichText 설정에서 [`layoutMode`](api/config/layout-mode.md) 속성을 지정하세요:

~~~jsx
const editor = new richtext.Richtext("#root", {
    layoutMode: "document"
});
~~~

## 툴바

RichText 툴바는 여러 그룹의 컨트롤로 구성되어 있으며, 필요에 맞게 변경할 수 있습니다.

### 기본 툴바 컨트롤

RichText 툴바에서 사용할 수 있는 버튼 및 컨트롤은 아래와 같습니다:

| 버튼                | 설명                                                                      |
|---------------------|---------------------------------------------------------------------------|
| `undo`              | 가장 최근의 사용자 동작을 되돌립니다                                      |
| `redo`              | 이전에 실행 취소한 동작을 다시 적용합니다                                 |
| `style`             | 텍스트 스타일(예: 제목, 본문 등) 선택                                     |
| `font-family`       | 선택한 텍스트의 글꼴을 변경합니다                                         |
| `font-size`         | 선택한 텍스트의 크기를 조정합니다                                         |
| `bold`              | 선택한 텍스트에 굵게 서식을 적용합니다                                    |
| `italic`            | 선택한 텍스트에 기울임 서식을 적용합니다                                  |
| `underline`         | 선택한 텍스트에 밑줄을 적용합니다                                         |
| `strike`            | 취소선 서식을 적용합니다                                                  |
| `subscript`         | 텍스트를 아래 첨자로 표시합니다                                           |
| `superscript`       | 텍스트를 위 첨자로 표시합니다                                             |
| `text-color`        | 텍스트 색상을 변경합니다                                                  |
| `background-color`  | 텍스트의 배경(하이라이트) 색상을 변경합니다                              |
| `align`             | 텍스트 정렬(왼쪽, 가운데, 오른쪽, 양쪽 맞춤)을 설정합니다                |
| `indent`            | 단락 들여쓰기를 증가시킵니다                                              |
| `outdent`           | 단락 들여쓰기를 감소시킵니다                                              |
| `line-height`       | 줄 간격(행 높이)을 조정합니다                                             |
| `quote`             | 텍스트를 인용구로 서식화합니다                                            |
| `bulleted-list`     | 글머리 기호 목록을 만듭니다                                               |
| `numbered-list`     | 번호 매기기 목록을 만듭니다                                               |
| `link`              | 하이퍼링크를 삽입하거나 편집합니다                                        |
| `image`             | 이미지를 삽입합니다                                                       |
| `line`              | 가로선을 삽입합니다                                                       |
| `clear`             | 선택한 텍스트의 모든 서식을 제거합니다                                    |
| `print`             | 인쇄 대화상자를 엽니다                                                    |
| `fullscreen`        | 전체화면 모드를 전환합니다                                                |
| `mode`              | 2가지 보기 모드(클래식/문서) 간 전환                                      |
| `shortcuts`         | 사용 가능한 키보드 단축키 목록을 표시합니다                               |
| `separator`         | 컨트롤 사이에 시각적 구분선을 추가합니다                                  |

툴바 레이아웃은 [`toolbar`](api/config/toolbar.md) 속성으로 설정합니다. 이 속성은 원하는 컨트롤의 이름을 나열한 문자열 배열입니다.

~~~jsx {2-36}
new richtext.Richtext("#root", {
    toolbar: [
        "undo",
        "redo",
        "separator",
        "style",
        "separator",
        "font-family",
        "font-size",
        "separator",
        "bold",
        "italic",
        "underline",
        "strike",
        "separator",
        "text-color",
        "background-color",
        "separator",
        "align",
        "line-height",
        "outdent",
        "indent",
        "separator",
        "bulleted-list",
        "numbered-list",
        "quote",
        "separator",
        "link",
        "image",
        "separator",
        "clear",
        "separator",
        "fullscreen",
        "mode"
        // 다른 버튼 추가 가능
    ],
    // 기타 구성 속성
});
~~~

**관련 샘플:** [RichText. Custom control and simplified toolbar](https://snippet.dhtmlx.com/wda202ih?tag=richtext)

### 사용자 지정 툴바 컨트롤

사용자만의 컨트롤을 추가하고 싶다면, [`toolbar`](api/config/toolbar.md) 속성에 아래 옵션을 가진 객체를 포함할 수 있습니다:

- `type` - (필수) 사용자 지정 컨트롤의 타입을 지정합니다. `"button"`, `"richselect"`, `"colorpicker"` 중 하나를 사용할 수 있습니다.
- `id` - (선택) 사용자 지정 컨트롤 ID(내장 컨트롤 ID와 중복되지 않아야 함)
- `label` - (선택) 버튼 라벨(아이콘과 함께 사용할 수 있음)
- `tooltip` - (선택) 마우스 오버 시 표시되는 툴팁(설정하지 않으면 "label" 값 사용)
- `css` - (선택) 컨트롤에 적용할 CSS 클래스명(기본 지원: wx-primary, wx-secondary)
- `handler` - (선택) 버튼 클릭 시 실행할 콜백 함수

~~~jsx {6-32}
new richtext.Richtext("#root", {
    toolbar: [
        // 버튼(문자열은 버튼만 나타냄)
        "bold",
        "italic",
        // 미리 정의된 버튼(사용자가 다른 옵션을 정의할 수 없음(라벨, 툴팁, 옵션 등), ({ type: "button", id: string })만 가능)
        {
            type: "button",
            id: "fullscreen",
        },
        // 미리 정의된 컨트롤을 사용하려면 올바른 타입을 지정해야 함(richselect/colorpicker)
        // 타입이 일치하지 않으면 무시됨(툴바에 추가되지 않음)
        {
            type: "richselect", // type: "button" - 잘못된 값, 무시됨
            id: "mode",
        },
        // 사용자 지정 버튼(아래 옵션만 지원)
        // 현재 richselect/colorpicker는 사용자 정의 불가
        {
            type: "button",
            id: "some",
            label: "Some",
            handler: () => {/* custom logic */}
        },
        {
            type: "button",
            id: "other",
            icon: "wxo-help",
            label: "Other",
            tooltip: "Some tooltip",
            handler: () => {/* custom logic */}
        }
    ],
    // 기타 구성 속성
});
~~~

**관련 샘플:** [RichText. Custom control and simplified toolbar](https://snippet.dhtmlx.com/wda202ih?tag=richtext)

### 툴바 숨기기

툴바를 숨기려면 [`toolbar`](api/config/toolbar.md) 속성을 `false`로 설정하세요:

~~~jsx {2}
new richtext.Richtext("#root", {
    toolbar: false,
    // 기타 구성 속성
});
~~~

## 기본 스타일

에디터 내 특정 블록 유형의 기본 스타일 값은 [`defaultStyles`](api/config/default-styles.md) 속성으로 지정할 수 있습니다.

~~~jsx {}
defaultStyles?: boolean | {
    "*"?: { // 모든 블록에 적용, 공통 속성 설정
        "font-family"?: string; // "Roboto"| "Arial" | "Georgia" | "Tahoma" | "Times New Roman" | "Verdana"
        "font-size"?: string; // "12px" | "14px" | "16px" | "18px" | "20px" | "24px" | "28px" | "32px" | "36px"
        color?: string;
        background?: string;
    },
    p?: {
        "font-family"?: string; // "Roboto"| "Arial" | "Georgia" | "Tahoma" | "Times New Roman" | "Verdana"
        "font-size"?: string; // "12px" | "14px" | "16px" | "18px" | "20px" | "24px" | "28px" | "32px" | "36px"
        color?: string;
        background?: string;
    },
    blockquote?: {
        "font-family"?: string; // "Roboto"| "Arial" | "Georgia" | "Tahoma" | "Times New Roman" | "Verdana"
        "font-size"?: string; // "12px" | "14px" | "16px" | "18px" | "20px" | "24px" | "28px" | "32px" | "36px"
        color?: string;
        background?: string;
    },
    h1?: {
        "font-family"?: string; // "Roboto"| "Arial" | "Georgia" | "Tahoma" | "Times New Roman" | "Verdana"
        "font-size"?: string; // "12px" | "14px" | "16px" | "18px" | "20px" | "24px" | "28px" | "32px" | "36px"
        color?: string;
        background?: string;
    },
    h2?: {
        "font-family"?: string; // "Roboto"| "Arial" | "Georgia" | "Tahoma" | "Times New Roman" | "Verdana"
        "font-size"?: string; // "12px" | "14px" | "16px" | "18px" | "20px" | "24px" | "28px" | "32px" | "36px"
        color?: string;
        background?: string;
    },
    h3?: {
        "font-family"?: string; // "Roboto"| "Arial" | "Georgia" | "Tahoma" | "Times New Roman" | "Verdana"
        "font-size"?: string; // "12px" | "14px" | "16px" | "18px" | "20px" | "24px" | "28px" | "32px" | "36px"
        color?: string;
        background?: string;
    },
    h4?: {
        "font-family"?: string; // "Roboto"| "Arial" | "Georgia" | "Tahoma" | "Times New Roman" | "Verdana"
        "font-size"?: string; // "12px" | "14px" | "16px" | "18px" | "20px" | "24px" | "28px" | "32px" | "36px"
        color?: string;
        background?: string;
    },
    h5?: {
        "font-family"?: string; // "Roboto"| "Arial" | "Georgia" | "Tahoma" | "Times New Roman" | "Verdana"
        "font-size"?: string; // "12px" | "14px" | "16px" | "18px" | "20px" | "24px" | "28px" | "32px" | "36px"
        color?: string;
        background?: string;
    },
    h6?: {
        "font-family"?: string; // "Roboto"| "Arial" | "Georgia" | "Tahoma" | "Times New Roman" | "Verdana"
        "font-size"?: string; // "12px" | "14px" | "16px" | "18px" | "20px" | "24px" | "28px" | "32px" | "36px"
        color?: string;
        background?: string;
    }
};
~~~

`defaultStyles` 속성은 실제로 블록에 CSS를 적용하지 않고, 스타일 값을 설정만 해줍니다. 별도로 CSS 스타일을 추가해야 합니다:

```html title="index.html"
<div id="root"></div>
```

```jsx {2-9} title="index.js"
const editor = new richtext.Richtext("#root", {
    defaultStyles: {
        h2: { 
            "font-family": "Roboto",
            "font-size": "28px",
            color: "purple",
            background: "#FFC0CB"
        }
    }
});
```

```css title="index.css"
#root h2 {
    font-family: Roboto;
    font-size: 28px;
    color: purple;
    background: #FFC0CB;
}
```

이 예시에서는 모든 `h2` 블록에 "Roboto" 글꼴, 28px 폰트 크기, 그리고 전경색과 배경색이 적용됩니다. CSS 규칙은 `h2` 블록에 적용됩니다.

**관련 샘플:** [RichText. Changing the default value for typography (font, font size, etc.)](https://snippet.dhtmlx.com/6u3ti01s?tag=richtext)

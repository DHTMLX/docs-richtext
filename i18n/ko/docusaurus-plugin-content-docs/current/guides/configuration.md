---
sidebar_label: 설정
title: 설정
description: DHTMLX JavaScript RichText 라이브러리 문서에서 설정에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 시도해 보며, DHTMLX RichText의 무료 30일 평가판을 다운로드하세요.
---

# 설정

다음 속성을 사용하여 RichText의 외관과 동작을 설정할 수 있습니다:

- [`menubar`](api/config/menubar.md) — 상단 메뉴바 표시 또는 숨김
- [`toolbar`](api/config/toolbar.md) — 툴바 가시성 및 버튼 설정
- [`fullscreenMode`](api/config/fullscreen-mode.md) — 전체화면 모드로 에디터 시작
- [`layoutMode`](api/config/layout-mode.md) — `"classic"` 과 `"document"` 레이아웃 간 전환
- [`value`](api/config/value.md) — 초기 HTML 콘텐츠 설정
- [`locale`](api/config/locale.md) — 초기화 시 로케일 객체 적용
- [`defaultStyles`](api/config/default-styles.md) — 특정 블록 유형에 대한 기본 스타일 설정
- [`imageUploadUrl`](api/config/image-upload-url.md) — 이미지 업로드 엔드포인트 설정

## 레이아웃 모드

RichText는 편집 영역에 대해 두 가지 레이아웃 모드를 지원합니다:

- **"classic"** — 편집 영역이 페이지 전체를 채웁니다

<div className="img_border">
![Classic mode](./../assets/richtext/classic_mode.png)
</div>

- **"document"** — 편집 영역이 문서 페이지처럼 보입니다

<div className="img_border">
![Document mode](./../assets/richtext/document_mode.png)
</div>

초기화 시 [`layoutMode`](api/config/layout-mode.md) 속성을 설정하여 모드를 선택합니다:

~~~jsx
const editor = new richtext.Richtext("#root", {
    layoutMode: "document"
});
~~~

## 툴바

RichText 툴바는 컨트롤을 사용자 정의 가능한 여러 블록으로 그룹화합니다.

### 기본 툴바 컨트롤

RichText 툴바에 다음 버튼과 컨트롤을 포함할 수 있습니다:

| 버튼                | 설명                                                                        |
|---------------------|-----------------------------------------------------------------------------|
| `undo`              | 가장 최근의 사용자 작업을 되돌립니다                                        |
| `redo`              | 이전에 취소한 작업을 다시 적용합니다                                        |
| `style`             | 텍스트 스타일을 선택합니다 (예: 제목, 단락, 인용문)                         |
| `font-family`       | 선택한 텍스트의 글꼴을 변경합니다                                           |
| `font-size`         | 선택한 텍스트의 크기를 조정합니다                                           |
| `bold`              | 선택한 텍스트에 굵게 서식을 적용합니다                                      |
| `italic`            | 선택한 텍스트에 기울임꼴 서식을 적용합니다                                  |
| `underline`         | 선택한 텍스트에 밑줄을 적용합니다                                           |
| `strike`            | 취소선 서식을 적용합니다                                                    |
| `subscript`         | 텍스트를 아래 첨자로 서식 지정합니다                                        |
| `superscript`       | 텍스트를 위 첨자로 서식 지정합니다                                          |
| `text-color`        | 텍스트 색상을 변경합니다                                                    |
| `background-color`  | 텍스트의 배경(강조) 색상을 변경합니다                                       |
| `align`             | 텍스트 정렬을 설정합니다 (왼쪽, 가운데, 오른쪽, 양쪽 맞춤)                  |
| `indent`            | 단락 들여쓰기를 늘립니다                                                    |
| `outdent`           | 단락 들여쓰기를 줄입니다                                                    |
| `line-height`       | 줄 간격(줄 높이)을 조정합니다                                               |
| `quote`             | 텍스트를 인용문으로 서식 지정합니다                                         |
| `bulleted-list`     | 글머리 기호 목록을 생성합니다                                               |
| `numbered-list`     | 번호 매기기 목록을 생성합니다                                               |
| `link`              | 하이퍼링크를 삽입하거나 편집합니다                                          |
| `image`             | 이미지를 삽입합니다                                                         |
| `line`              | 수평선을 삽입합니다                                                         |
| `clear`             | 선택한 텍스트의 모든 서식을 제거합니다                                      |
| `print`             | 인쇄 대화상자를 엽니다                                                      |
| `fullscreen`        | 전체화면 모드를 전환합니다                                                  |
| `mode`              | 두 가지 레이아웃 모드 사이를 전환합니다: `classic` 과 `document`            |
| `shortcuts`         | 사용 가능한 키보드 단축키 목록을 표시합니다                                 |
| `separator`         | 컨트롤 사이에 시각적 구분자를 추가합니다                                    |

[`toolbar`](api/config/toolbar.md) 속성을 사용하여 툴바를 컨트롤 이름 문자열의 배열로 정의합니다:

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
        // 기타 버튼
    ],
    // 기타 설정 속성
});
~~~

**관련 샘플:** [RichText. 사용자 정의 컨트롤과 단순화된 툴바](https://snippet.dhtmlx.com/wda202ih?tag=richtext)

### 사용자 정의 툴바 컨트롤 추가

[`toolbar`](api/config/toolbar.md) 배열에 다음 필드 중 하나를 가진 객체를 전달합니다:

- `type: string` — 필수. 컨트롤 유형: `"button"`, `"richselect"`, 또는 `"colorpicker"`
- `id: string` — 선택. 사용자 정의 컨트롤 ID; 기존 컨트롤 ID와 중복될 수 없습니다
- `icon: string` — 선택. 아이콘 클래스 이름; 라벨과 함께 결합됩니다
- `label: string` — 선택. 버튼 라벨; 아이콘과 함께 결합됩니다
- `tooltip: string` — 선택. 마우스를 올렸을 때 표시되는 툴팁; 설정하지 않으면 `label` 로 기본 설정됩니다
- `css: string` — 선택. 컨트롤에 대한 CSS 클래스. 내장 클래스: `wx-primary`, `wx-secondary`
- `handler: () => void` — 선택. 클릭 시 실행되는 콜백

아래 예제는 내장 버튼, `richselect` 유형의 사전 정의된 컨트롤 및 두 개의 사용자 정의 버튼을 결합합니다:

~~~jsx {6-32}
new richtext.Richtext("#root", {
    toolbar: [
        // 문자열 항목은 내장 버튼을 나타냅니다
        "bold",
        "italic",
        // 사전 정의된 버튼은 { type: "button", id: string } 만 허용합니다
        {
            type: "button",
            id: "fullscreen",
        },
        // 사전 정의된 richselect/colorpicker 컨트롤의 경우 일치하는 type 을 설정합니다
        // 일치하지 않는 type 의 항목은 무시됩니다
        {
            type: "richselect", // type: "button" 은 여기서 무시됩니다
            id: "mode",
        },
        // 사용자 정의 버튼 (richselect/colorpicker 는 사용자 정의 컨트롤에서 지원되지 않습니다)
        {
            type: "button",
            id: "some",
            label: "Some",
            handler: () => {/* 사용자 정의 로직 */}
        },
        {
            type: "button",
            id: "other",
            icon: "wxo-help",
            label: "Other",
            tooltip: "Some tooltip",
            handler: () => {/* 사용자 정의 로직 */}
        }
    ],
    // 기타 설정 속성
});
~~~

**관련 샘플:** [RichText. 사용자 정의 컨트롤과 단순화된 툴바](https://snippet.dhtmlx.com/wda202ih?tag=richtext)

### 툴바 숨기기

툴바를 숨기려면 [`toolbar`](api/config/toolbar.md) 속성을 `false` 로 설정합니다:

~~~jsx {2}
new richtext.Richtext("#root", {
    toolbar: false,
    // 기타 설정 속성
});
~~~

## 메뉴바 표시

툴바 위에 상단 메뉴바를 렌더링하려면 [`menubar`](api/config/menubar.md) 속성을 활성화합니다. 기본값은 `false` 입니다.

~~~jsx {2}
new richtext.Richtext("#root", {
    menubar: true
    // 기타 설정 속성
});
~~~

## 초기 콘텐츠 설정

초기화 시 에디터에 초기 HTML 콘텐츠를 전달하려면 [`value`](api/config/value.md) 속성을 사용합니다:

~~~jsx {2}
new richtext.Richtext("#root", {
    value: "<h1>some value</h1>"
    // 기타 설정 속성
});
~~~

초기화 후 콘텐츠를 바꾸거나 사용자 정의 인코더로 HTML이 아닌 형식의 콘텐츠를 로드하려면 [`setValue()`](api/methods/set-value.md) 메서드를 호출합니다.

## 초기 로케일 설정

초기화 시 로케일 객체를 적용하려면 [`locale`](api/config/locale.md) 속성을 사용합니다:

~~~jsx {2}
new richtext.Richtext("#root", {
    locale: richtext.locales.cn
    // 기타 설정 속성
});
~~~

[`setLocale()`](api/methods/set-locale.md) 을 사용한 동적 로케일 전환 및 자세한 내용은 [로컬라이제이션](guides/localization.md) 가이드를 참조하세요.

## 전체화면 모드로 시작

초기화 시 에디터를 전체화면으로 열려면 [`fullscreenMode`](api/config/fullscreen-mode.md) 속성을 `true` 로 설정합니다. 기본값은 `false` 입니다.

~~~jsx {2}
new richtext.Richtext("#root", {
    fullscreenMode: true
    // 기타 설정 속성
});
~~~

## 이미지 업로드 URL 설정

툴바 이미지 업로드에 대한 서버 엔드포인트를 설정하려면 [`imageUploadUrl`](api/config/image-upload-url.md) 속성에 URL을 전달합니다:

~~~jsx {2}
new richtext.Richtext("#root", {
    imageUploadUrl: "https://example.com/upload"
    // 기타 설정 속성
});
~~~

## 기본 스타일 설정

블록 유형별로 기본 스타일을 설정하려면 [`defaultStyles`](api/config/default-styles.md) 속성을 사용합니다.

[`defaultStyles`](api/config/default-styles.md) 속성에는 다음과 같은 유형 시그니처가 있습니다:

~~~jsx {}
defaultStyles?: boolean | {
    "*"?: { // 모든 블록에 적용됩니다; 모든 블록에 대해 공통 속성을 설정합니다
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

[`defaultStyles`](api/config/default-styles.md) 속성은 영향을 받는 블록에 CSS를 적용하지 않습니다. 일치하는 CSS 스타일을 별도로 적용하세요:

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

이 예제에서 모든 `h2` 블록은 28px 의 `"Roboto"` 글꼴을 사용하며 텍스트는 보라색, 배경은 분홍색입니다. 일치하는 CSS 규칙은 렌더링된 `h2` 요소에 동일한 값을 적용합니다.

**관련 샘플:** [RichText. 타이포그래피의 기본값 변경(글꼴, 글꼴 크기 등)](https://snippet.dhtmlx.com/6u3ti01s?tag=richtext)

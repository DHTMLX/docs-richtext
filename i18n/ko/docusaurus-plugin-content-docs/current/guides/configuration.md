---
sidebar_label: 구성
title: 구성
description: DHTMLX JavaScript RichText 라이브러리 문서에서 구성 방법을 확인하실 수 있습니다. 개발자 가이드와 API 레퍼런스를 탐색하고, 코드 예제와 라이브 데모를 체험해 보세요. DHTMLX RichText의 무료 30일 평가판도 다운로드할 수 있습니다.
---

# 구성

해당 API를 통해 RichText의 외관과 기능을 구성할 수 있습니다. 제공되는 매개변수를 활용하여 다음 작업을 수행할 수 있습니다:

- [`menubar`](api/config/menubar.md) 속성을 사용하여 **menubar** 표시/숨기기
- [`toolbar`](api/config/toolbar.md) 속성을 사용하여 **toolbar** 구성
- [`fullscreenMode`](api/config/fullscreen-mode.md) 속성을 사용하여 **전체화면 모드** 활성화
- [`layoutMode`](api/config/layout-mode.md) 속성을 사용하여 **레이아웃**을 "classic"과 "document" 모드 간 전환
- [`value`](api/config/value.md) 속성을 사용하여 **초기 값** 지정
- [`locale`](api/config/locale.md) 속성을 사용하여 **초기 로케일** 지정
- [`defaultStyles`](api/config/default-styles.md) 속성을 사용하여 **초기 스타일** 적용

## 레이아웃 모드 {#layout-modes}

RichText 편집기에는 두 가지 레이아웃 모드가 있으며, 최적의 콘텐츠 작성 환경을 위해 원하는 모드를 선택할 수 있습니다:

- **"classic"**

<div className="img_border">
![클래식 모드](./../assets/richtext/classic_mode.png)
</div>

- **"document"**

<div className="img_border">
![문서 모드](./../assets/richtext/document_mode.png)
</div>

원하는 모드를 지정하려면 컴포넌트 초기화 시 RichText 구성 객체의 [`layoutMode`](api/config/layout-mode.md) 속성에 정의해야 합니다:

~~~jsx
const editor = new richtext.Richtext("#root", {
    layoutMode: "document"
});
~~~

## Toolbar {#toolbar}

RichText toolbar는 필요에 따라 변경할 수 있는 여러 컨트롤 블록으로 구성됩니다.

### 기본 toolbar 컨트롤 {#default-toolbar-controls}

RichText toolbar에서 사용할 수 있는 버튼 및 컨트롤 목록은 다음과 같습니다:

| 버튼                | 설명                                                                        |
|---------------------|-----------------------------------------------------------------------------|
| `undo`              | 가장 최근 사용자 동작을 되돌립니다                                           |
| `redo`              | 이전에 취소된 동작을 다시 적용합니다                                         |
| `style`             | 텍스트 스타일 선택을 허용합니다 (예: 제목, 단락 등)                          |
| `font-family`       | 선택한 텍스트의 글꼴을 변경합니다                                            |
| `font-size`         | 선택한 텍스트의 크기를 조정합니다                                            |
| `bold`              | 선택한 텍스트에 굵게 서식을 적용합니다                                       |
| `italic`            | 선택한 텍스트에 기울임꼴 서식을 적용합니다                                   |
| `underline`         | 선택한 텍스트에 밑줄을 추가합니다                                            |
| `strike`            | 취소선 서식을 적용합니다                                                     |
| `subscript`         | 텍스트를 아래 첨자로 서식 지정합니다                                         |
| `superscript`       | 텍스트를 위 첨자로 서식 지정합니다                                           |
| `text-color`        | 텍스트 색상을 변경합니다                                                     |
| `background-color`  | 텍스트의 배경(강조 표시) 색상을 변경합니다                                   |
| `align`             | 텍스트 정렬을 설정합니다 (왼쪽, 가운데, 오른쪽, 양쪽 맞춤)                  |
| `indent`            | 단락 들여쓰기를 늘립니다                                                     |
| `outdent`           | 단락 들여쓰기를 줄입니다                                                     |
| `line-height`       | 줄 간격(행 높이)을 조정합니다                                                |
| `quote`             | 텍스트를 인용구로 서식 지정합니다                                            |
| `bulleted-list`     | 글머리 기호 목록을 만듭니다                                                  |
| `numbered-list`     | 번호 매기기 목록을 만듭니다                                                  |
| `link`              | 하이퍼링크를 삽입하거나 편집합니다                                           |
| `image`             | 이미지를 삽입합니다                                                          |
| `line`              | 수평선을 삽입합니다                                                          |
| `clear`             | 선택한 텍스트의 모든 서식을 제거합니다                                       |
| `print`             | 인쇄 대화 상자를 엽니다                                                      |
| `fullscreen`        | 전체화면 모드를 전환합니다                                                   |
| `mode`              | Classic/Document 두 가지 보기 모드 간 전환합니다                             |
| `shortcuts`         | 사용 가능한 키보드 단축키 목록을 표시합니다                                  |
| `separator`         | 컨트롤 사이에 시각적 구분선을 추가합니다                                     |

toolbar 구조는 [`toolbar`](api/config/toolbar.md) 속성을 사용하여 정의하며, 이는 컨트롤 이름을 나타내는 문자열 배열입니다.

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
        // 다른 버튼들
    ],
    // 다른 구성 속성들
});
~~~

**관련 예제:** [RichText. Custom control and simplified toolbar](https://snippet.dhtmlx.com/wda202ih?tag=richtext)

### 사용자 정의 toolbar 컨트롤 {#custom-toolbar-controls}

[`toolbar`](api/config/toolbar.md) 속성에서 다음 매개변수를 가진 객체로 사용자 정의 컨트롤을 지정할 수도 있습니다:

- `type` - (필수) 사용자 정의 컨트롤 유형을 지정합니다. 사용 가능한 유형: `"button"`, `"richselect"`, `"colorpicker"`
- `id` - (선택) 사용자 정의 컨트롤 ID (기존 컨트롤 ID와 중복 불가)
- `label` - (선택) 버튼 레이블 (아이콘과 함께 표시됨)
- `tooltip` - (선택) 마우스 오버 시 표시되는 툴팁 (지정하지 않으면 "label" 값 사용)
- `css` - (선택) 컨트롤에 할당되는 CSS 클래스 이름 (기본 지원 클래스: wx-primary, wx-secondary)
- `handler` - (선택) 버튼 클릭 시 실행되는 콜백 함수

~~~jsx {6-32}
new richtext.Richtext("#root", {
    toolbar: [
        // 버튼들 (문자열은 버튼만 나타냅니다)
        "bold",
        "italic",
        // 미리 정의된 버튼들 (레이블, 툴팁, 옵션 등 다른 옵션은 정의할 수 없으며, ({ type: "button", id: string }) 형태만 허용됨)
        {
            type: "button",
            id: "fullscreen",
        },
        // 미리 정의된 컨트롤을 사용하려면 올바른 유형을 지정해야 합니다 (예: richselect/colorpicker)
        // 유형이 일치하지 않으면 무시됩니다 (toolbar에 추가되지 않음)
        {
            type: "richselect", // type: "button" - 잘못된 유형, 무시됨
            id: "mode",
        },
        // 사용자 정의 버튼들 (지원되는 옵션은 아래 참조)
        // 현재 사용자는 사용자 정의 버튼만 정의할 수 있습니다 (richselect/colorpicker는 지원되지 않음)
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
    // 다른 구성 속성들
});
~~~

**관련 예제:** [RichText. Custom control and simplified toolbar](https://snippet.dhtmlx.com/wda202ih?tag=richtext)

### Toolbar 숨기기 {#hide-toolbar}

toolbar를 숨겨야 하는 경우, 다음과 같이 [`toolbar`](api/config/toolbar.md) 속성을 `false`로 설정하십시오:

~~~jsx {2}
new richtext.Richtext("#root", {
    toolbar: false,
    // 다른 구성 속성들
});
~~~

## 기본 스타일 {#default-styles}

[`defaultStyles`](api/config/default-styles.md) 속성을 사용하여 편집기의 특정 블록 유형에 기본 스타일 값을 적용할 수 있습니다.

~~~jsx {}
defaultStyles?: boolean | {
    "*"?: { // 모든 블록에 영향을 미치며, 모든 블록에 공통 속성을 설정할 수 있습니다
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

`defaultStyles` 속성은 영향을 받는 블록에 실제 CSS를 직접 설정하지 않습니다. CSS 스타일은 별도로 적용해야 합니다:

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

이 예제에서 모든 `h2` 블록에는 `"Roboto"` 글꼴이 적용되고, 글꼴 크기는 28px이며, 전경색과 배경색도 함께 변경됩니다. CSS 스타일도 `h2` 블록에 적용됩니다.

**관련 예제:** [RichText. Changing the default value for typography (font, font size, etc.)](https://snippet.dhtmlx.com/6u3ti01s?tag=richtext)

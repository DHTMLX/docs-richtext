---
sidebar_label: 구성
title: 구성
description: DHTMLX JavaScript RichText 라이브러리 문서에서 구성 방법을 확인할 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험해 보세요. DHTMLX RichText의 30일 무료 평가판도 다운로드할 수 있습니다.
---

# 구성 {#configuration}

다음 속성을 사용하여 RichText의 외관과 동작을 구성할 수 있습니다:

- [`menubar`](api/config/menubar.md) — 상단 메뉴바 표시 또는 숨기기
- [`toolbar`](api/config/toolbar.md) — 툴바 표시 여부 및 버튼 구성
- [`fullscreenMode`](api/config/fullscreen-mode.md) — 편집기를 전체 화면으로 시작
- [`layoutMode`](api/config/layout-mode.md) — `"classic"`과 `"document"` 레이아웃 간 전환
- [`value`](api/config/value.md) — 초기 HTML 콘텐츠 설정
- [`locale`](api/config/locale.md) — 초기화 시 로컬라이제이션 객체 적용
- [`defaultStyles`](api/config/default-styles.md) — 특정 블록 유형의 기본 스타일 설정
- [`imageUploadUrl`](api/config/image-upload-url.md) — 이미지 업로드 엔드포인트 설정
- [`triggers`](api/config/triggers.md) — @mentions, #tags 및 커스텀 드롭다운 트리거 활성화 ([멘션 및 태그](guides/mentions_and_tags.md) 가이드 참고)

## 레이아웃 모드 {#layout-modes}

RichText는 편집 영역에 대해 두 가지 레이아웃 모드를 지원합니다:

- `"classic"` — 편집 영역이 전체 페이지를 채웁니다

<div className="img_border">
![클래식 레이아웃 모드의 DHTMLX RichText 편집기](/img/richtext/classic_mode.png)
</div>

- `"document"` — 편집 영역이 문서 페이지처럼 표시됩니다

<div className="img_border">
![문서 모드의 DHTMLX RichText 편집기](/img/richtext/document_mode.png)
</div>

초기화 시 [`layoutMode`](api/config/layout-mode.md) 속성을 설정하여 모드를 선택합니다:

~~~jsx
const editor = new richtext.Richtext("#root", {
    layoutMode: "document"
});
~~~

## 툴바 {#toolbar}

RichText 툴바는 컨트롤을 여러 블록으로 그룹화하며 커스터마이즈할 수 있습니다.

### 기본 툴바 컨트롤 {#default-toolbar-controls}

RichText 툴바에 포함할 수 있는 버튼 및 컨트롤은 다음과 같습니다:

| 버튼                | 설명                                                                        |
|---------------------|-----------------------------------------------------------------------------|
| `undo`              | 가장 최근 사용자 작업을 되돌립니다                                           |
| `redo`              | 이전에 취소된 작업을 다시 적용합니다                                         |
| `style`             | 텍스트 스타일을 선택합니다 (예: 제목, 단락, 인용구)                          |
| `font-family`       | 선택한 텍스트의 글꼴을 변경합니다                                            |
| `font-size`         | 선택한 텍스트의 크기를 조정합니다                                            |
| `bold`              | 선택한 텍스트에 굵게 서식을 적용합니다                                       |
| `italic`            | 선택한 텍스트에 기울임꼴 서식을 적용합니다                                   |
| `underline`         | 선택한 텍스트에 밑줄을 추가합니다                                            |
| `strike`            | 취소선 서식을 적용합니다                                                     |
| `subscript`         | 텍스트를 아래 첨자로 서식 지정합니다                                         |
| `superscript`       | 텍스트를 위 첨자로 서식 지정합니다                                           |
| `text-color`        | 텍스트 색상을 변경합니다                                                     |
| `background-color`  | 텍스트의 배경(강조) 색상을 변경합니다                                        |
| `align`             | 텍스트 정렬을 설정합니다 (왼쪽, 가운데, 오른쪽, 양쪽)                       |
| `indent`            | 단락 들여쓰기를 늘립니다                                                     |
| `outdent`           | 단락 들여쓰기를 줄입니다                                                     |
| `line-height`       | 줄 간격(행 높이)을 조정합니다                                                |
| `quote`             | 텍스트를 인용구로 서식 지정합니다                                            |
| `bulleted-list`     | 글머리 기호 목록을 만듭니다                                                  |
| `numbered-list`     | 번호 매기기 목록을 만듭니다                                                  |
| `link`              | 하이퍼링크를 삽입하거나 편집합니다                                           |
| `image`             | 이미지를 삽입합니다                                                          |
| `line`              | 가로 구분선을 삽입합니다                                                     |
| `clear`             | 선택한 텍스트의 모든 서식을 제거합니다                                       |
| `print`             | 인쇄 대화 상자를 엽니다                                                      |
| `fullscreen`        | 전체 화면 모드를 전환합니다                                                  |
| `mode`              | 두 레이아웃 모드 간 전환합니다: `classic`과 `document`                      |
| `shortcuts`         | 사용 가능한 키보드 단축키 목록을 표시합니다                                  |
| `separator`         | 컨트롤 사이에 시각적 구분자를 추가합니다                                     |

[`toolbar`](api/config/toolbar.md) 속성을 사용하여 컨트롤 이름 문자열 배열로 툴바를 정의합니다:

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

**관련 샘플:** [RichText. 커스텀 컨트롤 및 간소화된 툴바](https://snippet.dhtmlx.com/wda202ih?tag=richtext)

### 커스텀 툴바 컨트롤 추가 {#add-custom-toolbar-controls}

다음 필드 중 하나를 포함하는 객체를 [`toolbar`](api/config/toolbar.md) 배열에 전달합니다:

- `type: string` — 필수. 컨트롤 유형: `"button"`, `"richselect"`, 또는 `"colorpicker"`
- `id: string` — 선택 사항. 커스텀 컨트롤 ID; 기존 컨트롤 ID와 중복될 수 없습니다
- `icon: string` — 선택 사항. 아이콘 클래스 이름; 라벨과 함께 사용됩니다
- `label: string` — 선택 사항. 버튼 라벨; 아이콘과 함께 사용됩니다
- `tooltip: string` — 선택 사항. 마우스를 올렸을 때 표시되는 툴팁; 설정하지 않으면 `label`로 기본값이 지정됩니다
- `css: string` — 선택 사항. 컨트롤의 CSS 클래스. 내장 클래스: `wx-primary`, `wx-secondary`
- `handler: () => void` — 선택 사항. 클릭 시 실행되는 callback

아래 예제는 내장 버튼, `richselect` 유형의 미리 정의된 컨트롤, 그리고 두 개의 커스텀 버튼을 조합합니다:

~~~jsx {6-32}
new richtext.Richtext("#root", {
    toolbar: [
        // 문자열 항목은 내장 버튼을 나타냅니다
        "bold",
        "italic",
        // 미리 정의된 버튼은 { type: "button", id: string }만 허용합니다
        {
            type: "button",
            id: "fullscreen",
        },
        // 미리 정의된 richselect/colorpicker 컨트롤의 경우 일치하는 type을 설정합니다
        // type이 일치하지 않는 항목은 무시됩니다
        {
            type: "richselect", // type: "button"으로 설정하면 여기서는 무시됩니다
            id: "mode",
        },
        // 커스텀 버튼 (richselect/colorpicker는 커스텀 컨트롤에서 지원되지 않습니다)
        {
            type: "button",
            id: "some",
            label: "Some",
            handler: () => {/* 커스텀 로직 */}
        },
        {
            type: "button",
            id: "other",
            icon: "wxo-help",
            label: "Other",
            tooltip: "Some tooltip",
            handler: () => {/* 커스텀 로직 */}
        }
    ],
    // 다른 구성 속성들
});
~~~

**관련 샘플:** [RichText. 커스텀 컨트롤 및 간소화된 툴바](https://snippet.dhtmlx.com/wda202ih?tag=richtext)

### 툴바 숨기기 {#hide-the-toolbar}

[`toolbar`](api/config/toolbar.md) 속성을 `false`로 설정하여 툴바를 숨깁니다:

~~~jsx {2}
new richtext.Richtext("#root", {
    toolbar: false,
    // 다른 구성 속성들
});
~~~

## 메뉴바 표시 {#show-the-menubar}

[`menubar`](api/config/menubar.md) 속성을 활성화하면 툴바 위에 상단 메뉴바가 렌더링됩니다. 기본값은 `false`입니다.

~~~jsx {2}
new richtext.Richtext("#root", {
    menubar: true
    // 다른 구성 속성들
});
~~~

## 초기 콘텐츠 설정 {#set-the-initial-content}

[`value`](api/config/value.md) 속성을 사용하여 초기화 시 편집기에 초기 HTML 콘텐츠를 전달합니다:

~~~jsx {2}
new richtext.Richtext("#root", {
    value: "<h1>some value</h1>"
    // 다른 구성 속성들
});
~~~

초기화 후 콘텐츠를 교체하거나, 커스텀 인코더를 사용하여 비-HTML 형식으로 로드하려면 [`setValue()`](api/methods/set-value.md) 메서드를 호출합니다.

## 초기 로케일 설정 {#set-the-initial-locale}

[`locale`](api/config/locale.md) 속성을 사용하여 초기화 시 로컬라이제이션 객체를 적용합니다:

~~~jsx {2}
new richtext.Richtext("#root", {
    locale: richtext.locales.cn
    // 다른 구성 속성들
});
~~~

자세한 내용과 [`setLocale()`](api/methods/set-locale.md)을 사용한 동적 로케일 전환에 대해서는 [로컬라이제이션](guides/localization.md) 가이드를 참고하십시오.

## 전체 화면 모드로 시작 {#start-in-fullscreen-mode}

[`fullscreenMode`](api/config/fullscreen-mode.md) 속성을 `true`로 설정하면 초기화 시 편집기가 전체 화면으로 열립니다. 기본값은 `false`입니다.

~~~jsx {2}
new richtext.Richtext("#root", {
    fullscreenMode: true
    // 다른 구성 속성들
});
~~~

## 이미지 삽입 구성 {#configure-image-insertion}

RichText는 툴바, 메뉴바, 붙여넣기, 드래그 앤 드롭을 통한 이미지 삽입에 두 가지 모드를 지원합니다. [`imageUploadUrl`](api/config/image-upload-url.md) 속성에 따라 모드가 자동으로 선택됩니다.

### 서버에 이미지 업로드 {#upload-images-to-a-server}

[`imageUploadUrl`](api/config/image-upload-url.md) 속성에 URL을 전달하면 삽입된 각 이미지를 해당 엔드포인트에 업로드합니다. RichText는 파일을 `multipart/form-data`(필드명 `upload`)로 전송하고 서버가 반환한 URL을 삽입합니다:

~~~jsx {2}
new richtext.Richtext("#root", {
    imageUploadUrl: "https://example.com/upload"
    // 다른 구성 속성들
});
~~~

### 이미지를 base64로 인라인 삽입 {#insert-images-inline-as-base64}

[`imageUploadUrl`](api/config/image-upload-url.md)을 생략하거나 빈 문자열로 설정하면 이미지가 base64 데이터 URL로 문서 콘텐츠에 직접 임베드됩니다. 서버가 필요하지 않습니다:

~~~jsx {2}
new richtext.Richtext("#root", {
    // imageUploadUrl이 설정되지 않은 경우 이미지는 인라인으로 삽입됩니다
    // 다른 구성 속성들
});
~~~

1024×800보다 큰 인라인 이미지는 축소된 크기로 표시됩니다(`width`/`height` 속성이 이 한도 내에 맞게 제한됨). 단, 임베드된 바이트는 원본 전체 해상도 파일이며, 클라이언트에서 다운스케일하거나 재인코딩하지 않습니다.

:::note[참고]
인라인(base64) 이미지는 내장 DOCX/PDF [내보내기](api/events/export.md)에서 보존되지 않습니다. 내보내기 기능에 의존하는 경우 이미지가 외부 위치를 참조할 수 있도록 `imageUploadUrl`을 제공하십시오.
:::

업로드 엔드포인트가 구현해야 하는 전체 요청/응답 계약 및 인라인 이미지 폴백에 대한 자세한 내용은 [서버 연동](guides/working_with_server.md)을 참고하십시오.

## 기본 스타일 구성 {#configure-default-styles}

[`defaultStyles`](api/config/default-styles.md) 속성을 사용하여 블록 유형별 기본 스타일을 설정합니다.

[`defaultStyles`](api/config/default-styles.md) 속성의 타입 시그니처는 다음과 같습니다:

~~~jsx {}
defaultStyles?: boolean | {
    "*"?: { // 모든 블록에 적용됩니다; 모든 블록에 대한 공통 속성을 설정합니다
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

[`defaultStyles`](api/config/default-styles.md) 속성은 영향을 받는 블록에 CSS를 직접 적용하지 않습니다. 일치하는 CSS 스타일은 별도로 적용해야 합니다:

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

이 예제에서 모든 `h2` 블록은 분홍색 배경에 보라색 텍스트로 28px 크기의 `"Roboto"` 글꼴 패밀리를 사용합니다. 일치하는 CSS 규칙은 렌더링된 `h2` 요소에 동일한 값을 적용합니다.

**관련 샘플:** [RichText. 타이포그래피 기본값 변경 (글꼴, 글꼴 크기 등)](https://snippet.dhtmlx.com/6u3ti01s?tag=richtext)

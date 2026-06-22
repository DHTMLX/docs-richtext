---
sidebar_label: toolbar
title: toolbar 설정
description: DHTMLX JavaScript RichText 라이브러리 문서에서 toolbar 설정에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 탐색하고, 코드 예제와 라이브 데모를 직접 실행해 보거나, DHTMLX RichText 무료 30일 평가판을 다운로드하세요.
---

# toolbar

### 설명 {#description}

@short: 선택 사항입니다. 툴바를 활성화하고 툴바에 표시할 버튼을 지정하거나 구성할 수 있습니다.

### 사용법 {#usage}

~~~jsx {}
toolbar?: boolean | Array<string | { id: string, type: string, label?: string, tooltip?: string, css?: string, handler?: () => any }>;
~~~

#### 툴바에서 사용 가능한 버튼 {#available-buttons-within-toolbar}

RichText 툴바에는 다음 버튼을 지정할 수 있습니다:

| 버튼                | 설명                                                                        |
|---------------------|-----------------------------------------------------------------------------|
| `undo`              | 가장 최근 사용자 작업을 되돌립니다.                                          |
| `redo`              | 이전에 되돌린 작업을 다시 실행합니다.                                        |
| `style`             | 텍스트 스타일(예: 제목, 단락 등)을 선택할 수 있습니다.                       |
| `font-family`       | 선택한 텍스트의 글꼴을 변경합니다.                                          |
| `font-size`         | 선택한 텍스트의 크기를 조정합니다.                                          |
| `bold`              | 선택한 텍스트에 굵게 서식을 적용합니다.                                      |
| `italic`            | 선택한 텍스트에 기울임꼴 서식을 적용합니다.                                  |
| `underline`         | 선택한 텍스트에 밑줄을 표시합니다.                                          |
| `strike`            | 취소선 서식을 적용합니다.                                                   |
| `subscript`         | 텍스트를 아래 첨자로 서식을 지정합니다.                                      |
| `superscript`       | 텍스트를 위 첨자로 서식을 지정합니다.                                        |
| `text-color`        | 텍스트 색상을 변경합니다.                                                   |
| `background-color`  | 텍스트의 배경(강조 표시) 색상을 변경합니다.                                  |
| `align`             | 텍스트 정렬(왼쪽, 가운데, 오른쪽, 양쪽)을 설정합니다.                       |
| `indent`            | 텍스트 블록의 들여쓰기를 늘립니다.                                          |
| `outdent`           | 단락 들여쓰기를 줄입니다.                                                   |
| `line-height`       | 줄 간격(행 높이)을 조정합니다.                                              |
| `quote`             | 텍스트를 인용구로 서식을 지정합니다.                                         |
| `bulleted-list`     | 글머리 기호 목록을 켜거나 끕니다.                                           |
| `numbered-list`     | 번호 매기기 목록을 켜거나 끕니다.                                           |
| `link`              | 하이퍼링크를 삽입합니다.                                                    |
| `image`             | 이미지를 삽입합니다.                                                        |
| `line`              | 수평선을 삽입합니다.                                                        |
| `clear`             | 선택한 텍스트의 모든 서식을 제거합니다.                                      |
| `print`             | 인쇄 대화상자를 엽니다.                                                     |
| `fullscreen`        | 전체 화면 모드를 전환합니다.                                                |
| `mode`              | [레이아웃 모드](api/config/layout-mode.md)(클래식/문서) 간에 전환합니다.    |
| `shortcuts`         | 사용 가능한 키보드 단축키 목록을 표시합니다.                                 |
| `separator`         | 툴바 그룹 사이에 시각적 구분선을 추가합니다.                                 |

이 문자열을 사용하여 툴바 버튼을 다음과 같이 구성할 수 있습니다:

~~~jsx {2-7}
new richtext.Richtext("#root", {
    toolbar: [
        "bold",
        "italic",
        "separator",
        // 기타 버튼
    ],
    // 기타 설정 속성
});
~~~

#### 툴바의 커스텀 버튼 {#custom-buttons-within-toolbar}

커스텀 버튼을 다음 매개변수를 가진 객체로 지정할 수 있습니다:

- `type` - (필수) 커스텀 컨트롤 유형을 지정합니다. 사용 가능한 유형은 `"button"`, `"richselect"`, `"colorpicker"`입니다.
- `id` - (선택 사항) 커스텀 컨트롤 ID(기존 컨트롤 ID와 중복 불가)
- `label` - (선택 사항) 버튼 레이블(아이콘과 함께 사용)
- `tooltip` - (선택 사항) 마우스 오버 시 표시되는 툴팁(지정하지 않으면 "label" 값을 사용)
- `css` - (선택 사항) 컨트롤에 할당된 CSS 클래스 이름(기본 지원 클래스: wx-primary, wx-secondary)
- `handler` - (선택 사항) 버튼 클릭 시 실행되는 callback 함수

~~~jsx {6-32}
new richtext.Richtext("#root", {
    toolbar: [
        // 버튼 (문자열은 버튼만 나타냄)
        "bold",
        "italic",
        // 사전 정의된 버튼 (이러한 버튼에는 다른 옵션을 정의할 수 없으므로(레이블, 툴팁, 옵션 등 없음), ({ type: "button", id: string })만 사용)
        {
            type: "button",
            id: "fullscreen",
        },
        // 사전 정의된 컨트롤을 사용하려면 올바른 type을 지정해야 합니다(예: richselect/colorpicker)
        // 일치하지 않는 type은 무시됩니다(툴바에 추가되지 않음)
        {
            type: "richselect", // type: "button" - 올바르지 않으며 무시됩니다
            id: "mode",
        },
        // 커스텀 버튼 (지원되는 옵션은 아래와 같습니다)
        // 사용자는 커스텀 버튼만 정의할 수 있습니다(현재 richselect/colorpicker는 지원되지 않음)
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
    // 기타 설정 속성
});
~~~

#### 툴바 숨기기 {#hide-toolbar}

툴바를 숨기려면 `toolbar` 속성을 다음과 같이 `false`로 설정합니다:

~~~jsx {2}
new richtext.Richtext("#root", {
    toolbar: false
    // 기타 설정 속성
});
~~~

### 기본 설정 {#default-config}

~~~jsx
const defaultToolbarButtons = {
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
};
~~~

:::tip[팁]
기본 툴바 컨트롤은 RichText 위젯에서 export되며 `richtext.defaultToolbarButtons`를 통해 접근할 수 있습니다.

```jsx{4}
// RichText 초기화
new richtext.Richtext("#root", {
    toolbar: [
        ...richtext.defaultToolbarButtons,
        {
            type: "button",
            id: "btn1", // 버튼 id (커스텀 로직을 적용하려면 기존 버튼 id와 겹치면 안 됩니다)
            icon: "wxo-help", // 버튼 아이콘 (레이블과 함께 표시됨)
            css: "rounded", // 컨트롤에 할당된 css 클래스 이름 (기본 지원 클래스: wx-primary, wx-secondary)
            label: "Custom button", // 버튼 레이블 (아이콘과 함께 표시됨)
            tooltip: "Some tooltip", // 마우스를 올렸을 때 표시되는 툴팁 (지정하지 않으면 "label"의 값을 사용)
        }
    ]
    // 기타 설정 속성
});
```
:::

### 예제 {#example}

~~~jsx {3-18}
// RichText 초기화
new richtext.Richtext("#root", {
    toolbar: [
        "bold",
        "italic",
        "separator",
        // 커스텀 버튼 (아래에서 지원되는 모든 옵션을 사용합니다)
        // 사용자는 커스텀 버튼만 정의할 수 있습니다(현재 richselect/colorpicker는 지원되지 않음)
        {
            type: "button",
            id: "btn1", // 버튼 id (커스텀 로직을 적용하려면 기존 버튼 id와 겹치면 안 됩니다)
            icon: "wxo-help", // 버튼 아이콘 (레이블과 함께 표시됨)
            css: "rounded", // 컨트롤에 할당된 css 클래스 이름 (기본 지원 클래스: wx-primary, wx-secondary)
            label: "Custom button", // 버튼 레이블 (아이콘과 함께 표시됨)
            tooltip: "Some tooltip", // 마우스를 올렸을 때 표시되는 툴팁 (지정하지 않으면 "label"의 값을 사용)
            handler: () => ..., // 이 버튼에 연결된 커스텀 로직
        }
    ]
    // 기타 설정 속성
});
~~~

**변경 사항:** v2.0에서 속성이 추가되었습니다.

**관련 문서:** [설정](guides/configuration.md)

**관련 샘플:** [RichText. 커스텀 컨트롤과 간소화된 툴바](https://snippet.dhtmlx.com/wda202ih?tag=richtext)

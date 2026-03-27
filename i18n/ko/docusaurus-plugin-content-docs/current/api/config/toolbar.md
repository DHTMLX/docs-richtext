---
sidebar_label: toolbar
title: toolbar 설정
description: DHTMLX JavaScript RichText 라이브러리 문서에서 toolbar 설정에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험하며, DHTMLX RichText 30일 무료 평가판을 다운로드하세요.
---

# toolbar

### 설명 {#description}

@short: 선택 사항. 툴바를 활성화하고 툴바에 표시할 버튼을 지정 및 설정할 수 있습니다

### 사용법 {#usage}

~~~jsx {}
toolbar?: boolean | Array<string | { id: string, type: string, label?: string, tooltip?: string, css?: string, handler?: () => any }>;
~~~

#### 툴바에서 사용 가능한 버튼 {#available-buttons-within-toolbar}

RichText 툴바에서 다음 버튼을 지정할 수 있습니다:

| 버튼                | 설명                                                                        |
|---------------------|-----------------------------------------------------------------------------|
| `undo`              | 가장 최근의 사용자 동작을 되돌립니다.                                        |
| `redo`              | 이전에 취소한 동작을 다시 적용합니다.                                        |
| `style`             | 텍스트 스타일(예: 제목, 단락 등)을 선택할 수 있습니다.                       |
| `font-family`       | 선택한 텍스트의 폰트를 변경합니다.                                           |
| `font-size`         | 선택한 텍스트의 크기를 조정합니다.                                           |
| `bold`              | 선택한 텍스트에 굵게 서식을 적용합니다.                                      |
| `italic`            | 선택한 텍스트에 기울임꼴 서식을 적용합니다.                                  |
| `underline`         | 선택한 텍스트에 밑줄을 표시합니다.                                           |
| `strike`            | 취소선 서식을 적용합니다.                                                    |
| `subscript`         | 텍스트를 아래 첨자로 서식을 지정합니다.                                      |
| `superscript`       | 텍스트를 위 첨자로 서식을 지정합니다.                                        |
| `text-color`        | 텍스트 색상을 변경합니다.                                                    |
| `background-color`  | 텍스트의 배경(강조) 색상을 변경합니다.                                       |
| `align`             | 텍스트 정렬을 설정합니다(왼쪽, 가운데, 오른쪽, 양쪽 맞춤).                  |
| `indent`            | 텍스트 블록의 들여쓰기를 증가시킵니다.                                       |
| `outdent`           | 단락의 들여쓰기를 감소시킵니다.                                              |
| `line-height`       | 줄 간격(행 높이)을 조정합니다.                                               |
| `quote`             | 텍스트를 인용구로 서식을 지정합니다.                                         |
| `bulleted-list`     | 글머리 기호 목록을 생성합니다.                                               |
| `numbered-list`     | 번호 매기기 목록을 생성합니다.                                               |
| `link`              | 하이퍼링크를 삽입합니다.                                                     |
| `image`             | 이미지를 삽입합니다.                                                         |
| `line`              | 가로 구분선을 삽입합니다.                                                    |
| `clear`             | 선택한 텍스트의 모든 서식을 제거합니다.                                      |
| `print`             | 인쇄 대화상자를 엽니다.                                                      |
| `fullscreen`        | 전체화면 모드를 전환합니다.                                                  |
| `mode`              | [레이아웃 모드](api/config/layout-mode.md)를 전환합니다(classic/document)    |
| `shortcuts`         | 사용 가능한 키보드 단축키 목록을 표시합니다.                                 |
| `separator`         | 툴바 그룹 사이에 시각적 구분선을 추가합니다.                                 |

다음과 같이 이 문자열들을 사용하여 툴바 버튼을 설정할 수 있습니다:

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

#### 툴바의 사용자 정의 버튼 {#custom-buttons-within-toolbar}

사용자 정의 버튼을 다음 매개변수를 가진 객체로 지정할 수 있습니다:

- `type` - (필수) 사용자 정의 컨트롤 유형을 지정합니다. 사용 가능한 유형: `"button"`, `"richselect"`, `"colorpicker"`
- `id` - (선택) 사용자 정의 컨트롤 ID (기존 컨트롤 ID와 중복 불가)
- `label` - (선택) 버튼 레이블 (아이콘과 결합됨)
- `tooltip` - (선택) 마우스를 올렸을 때 표시되는 툴팁 (지정하지 않으면 "label" 값이 사용됨)
- `css` - (선택) 컨트롤에 할당된 CSS 클래스 이름 (기본 지원 클래스: wx-primary, wx-secondary)
- `handler` - (선택) 버튼 클릭 시 실행되는 콜백 함수

~~~jsx {6-32}
new richtext.Richtext("#root", {
    toolbar: [
        // 버튼 (문자열은 버튼만 나타냄)
        "bold",
        "italic",
        // 사전 정의된 버튼 (레이블, 툴팁, 옵션 등을 정의할 수 없으므로 ({ type: "button", id: string })만 사용 가능)
        {
            type: "button",
            id: "fullscreen",
        },
        // 사전 정의된 컨트롤을 사용하려면 올바른 type을 지정해야 함 (예: richselect/colorpicker)
        // 일치하지 않는 type은 무시됨 (툴바에 추가되지 않음)
        {
            type: "richselect", // type: "button" - 잘못된 유형으로 무시됨
            id: "mode",
        },
        // 사용자 정의 버튼 (아래에 지원되는 옵션이 있음)
        // 현재 사용자 정의 버튼만 정의 가능 (richselect/colorpicker 미지원)
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

#### 툴바 숨기기 {#hide-toolbar}

툴바를 숨기려면 다음과 같이 `toolbar` 속성을 `false`로 설정하세요:

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
기본 툴바 컨트롤은 RichText 위젯에서 내보내며 `richtext.defaultToolbarButtons`를 통해 접근할 수 있습니다.

```jsx{4}
// RichText 초기화
new richtext.Richtext("#root", {
    toolbar: [
        ...richtext.defaultToolbarButtons,
        {
            type: "button",
            id: "btn1", // 버튼 ID (사용자 정의 로직을 적용하려면 기존 버튼 ID와 중복 불가)
            icon: "wxo-help", // 버튼 아이콘 (레이블과 결합됨)
            css: "rounded", // 컨트롤에 할당된 CSS 클래스 이름 (기본 지원 클래스: wx-primary, wx-secondary)
            label: "Custom button", // 버튼 레이블 (아이콘과 결합됨)
            tooltip: "Some tooltip", // 마우스를 올렸을 때 표시되는 툴팁 (지정하지 않으면 "label" 값이 사용됨)
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
        // 사용자 정의 버튼 (아래에 지원되는 모든 옵션이 사용됨)
        // 현재 사용자 정의 버튼만 정의 가능 (richselect/colorpicker 미지원)
        {
            type: "button",
            id: "btn1", // 버튼 ID (사용자 정의 로직을 적용하려면 기존 버튼 ID와 중복 불가)
            icon: "wxo-help", // 버튼 아이콘 (레이블과 결합됨)
            css: "rounded", // 컨트롤에 할당된 CSS 클래스 이름 (기본 지원 클래스: wx-primary, wx-secondary)
            label: "Custom button", // 버튼 레이블 (아이콘과 결합됨)
            tooltip: "Some tooltip", // 마우스를 올렸을 때 표시되는 툴팁 (지정하지 않으면 "label" 값이 사용됨)
            handler: () => ..., // 이 버튼에 연결된 사용자 정의 로직
        }
    ]
    // 기타 설정 속성
});
~~~

**변경 이력:** 이 속성은 v2.0에서 추가되었습니다

**관련 문서:** [Configuration](guides/configuration.md)

**관련 예제:** [RichText. Custom control and simplified toolbar](https://snippet.dhtmlx.com/wda202ih?tag=richtext)

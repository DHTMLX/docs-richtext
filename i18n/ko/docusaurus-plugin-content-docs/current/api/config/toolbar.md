---
sidebar_label: toolbar
title: toolbar Config
description: DHTMLX JavaScript RichText 라이브러리 문서에서 toolbar config에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 탐색하고, 코드 예제와 라이브 데모를 사용해 보세요. DHTMLX RichText의 무료 30일 평가판을 다운로드하세요.
---

# toolbar

### Description

@short: Optional. Enables toolbar and allows users to specify/configure buttons displayed within toolbar

### Usage

~~~jsx {}
toolbar?: boolean | Array<string | { id: string, type: string, label?: string, tooltip?: string, css?: string, handler?: () => any }>;
~~~

#### Toolbar 내 사용 가능한 버튼

RichText toolbar에서 다음 버튼을 지정할 수 있습니다:

| 버튼                | 설명                                                                        |
|---------------------|-----------------------------------------------------------------------------|
| `undo`              | 가장 최근 사용자 작업을 되돌립니다.                                         |
| `redo`              | 이전에 취소된 작업을 다시 적용합니다.                                       |
| `style`             | 텍스트 스타일(예: 제목, 단락 등)을 선택할 수 있습니다.                      |
| `font-family`       | 선택한 텍스트의 글꼴을 변경합니다.                                          |
| `font-size`         | 선택한 텍스트의 크기를 조정합니다.                                          |
| `bold`              | 선택한 텍스트에 굵게 서식을 적용합니다.                                     |
| `italic`            | 선택한 텍스트에 기울임꼴 서식을 적용합니다.                                 |
| `underline`         | 선택한 텍스트에 밑줄을 표시합니다.                                          |
| `strike`            | 취소선 서식을 적용합니다.                                                   |
| `subscript`         | 텍스트를 아래 첨자로 서식 지정합니다.                                       |
| `superscript`       | 텍스트를 위 첨자로 서식 지정합니다.                                         |
| `text-color`        | 텍스트 색상을 변경합니다.                                                   |
| `background-color`  | 텍스트의 배경(강조 표시) 색상을 변경합니다.                                 |
| `align`             | 텍스트 정렬을 설정합니다(왼쪽, 가운데, 오른쪽, 양쪽 맞춤).                 |
| `indent`            | 텍스트 블록 들여쓰기를 증가시킵니다.                                        |
| `outdent`           | 단락 들여쓰기를 감소시킵니다.                                               |
| `line-height`       | 줄 간격(행 높이)을 조정합니다.                                              |
| `quote`             | 텍스트를 인용구로 서식 지정합니다.                                          |
| `bulleted-list`     | 글머리 기호 목록을 만듭니다.                                                |
| `numbered-list`     | 번호 매기기 목록을 만듭니다.                                                |
| `link`              | 하이퍼링크를 삽입합니다.                                                    |
| `image`             | 이미지를 삽입합니다.                                                        |
| `line`              | 가로 구분선을 삽입합니다.                                                   |
| `clear`             | 선택한 텍스트의 모든 서식을 제거합니다.                                     |
| `print`             | 인쇄 대화 상자를 엽니다.                                                    |
| `fullscreen`        | 전체 화면 모드를 전환합니다.                                                |
| `mode`              | [레이아웃 모드](api/config/layout-mode.md) 간 전환합니다(classic/document) |
| `shortcuts`         | 사용 가능한 키보드 단축키 목록을 표시합니다.                                |
| `separator`         | toolbar 그룹 사이에 시각적 구분자를 추가합니다.                             |

다음과 같이 이 문자열들을 사용하여 toolbar 버튼을 구성할 수 있습니다:

~~~jsx {2-7}
new richtext.Richtext("#root", {
    toolbar: [
        "bold",
        "italic",
        "separator",
        // other buttons
    ],
    // other configuration properties
});
~~~

#### Toolbar 내 사용자 정의 버튼

다음 매개변수를 가진 객체로 사용자 정의 버튼을 지정할 수 있습니다:

- `type` - (필수) 사용자 정의 컨트롤 유형을 지정합니다. 다음 유형을 사용할 수 있습니다: `"button"`, `"richselect"`, `"colorpicker"`
- `id` - (선택 사항) 사용자 정의 컨트롤 ID (기존 컨트롤 ID와 중복 불가)
- `label` - (선택 사항) 버튼 레이블 (아이콘과 결합)
- `tooltip` - (선택 사항) 마우스를 올렸을 때 표시되는 툴팁 (지정하지 않으면 "label" 값 사용)
- `css` - (선택 사항) 컨트롤에 할당된 css 클래스 이름 (기본 지원 클래스: wx-primary, wx-secondary)
- `handler` - (선택 사항) 버튼 클릭 시 실행되는 callback 함수

~~~jsx {6-32}
new richtext.Richtext("#root", {
    toolbar: [
        // buttons (strings represent buttons only)
        "bold",
        "italic",
        // predefined buttons (user cannot define any other options for these (no labels, tooltips, options, etc.), so only ({ type: "button", id: string })
        {
            type: "button",
            id: "fullscreen",
        },
        // user must specify the correct type if they want to use a predefined control (e.g. richselect/colorpicker)
        // non-matching types will be ignored (not added to the toolbar)
        {
            type: "richselect", // type: "button" - incorrect, will be ignored
            id: "mode",
        },
        // custom buttons (supported options are below)
        // user can only define custom buttons (no richselect/colorpicker support atm)
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
    // other configuration properties
});
~~~

#### Toolbar 숨기기

toolbar를 숨겨야 하는 경우, 다음과 같이 `toolbar` 속성을 `false`로 설정합니다:

~~~jsx {2}
new richtext.Richtext("#root", {
    toolbar: false
    // other configuration properties
});
~~~

### Default config

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

:::tip
기본 toolbar 컨트롤은 RichText 위젯에서 내보내지며 `richtext.defaultToolbarButtons`를 통해 접근할 수 있습니다.

```jsx{4}
// initialize RichText
new richtext.Richtext("#root", {
    toolbar: [
        ...richtext.defaultToolbarButtons,
        {
            type: "button",
            id: "btn1", // button id (cannot overlap with existing button ids if you want to apply custom logic)
            icon: "wxo-help", // button icon (combines with label)
            css: "rounded", // css class name assigned to the control (default supported classes: wx-primary, wx-secondary)
            label: "Custom button", // button label (combines with icon)
            tooltip: "Some tooltip", // tooltip displayed on hover (if not specified, uses the value from "label")
        }
    ]
    // other configuration properties
});
```
:::

### Example

~~~jsx {3-18}
// initialize RichText
new richtext.Richtext("#root", {
    toolbar: [
        "bold",
        "italic",
        "separator",
        // custom buttons (all supported options are used below)
        // user can only define custom buttons (no richselect/colorpicker support at the moment)
        {
            type: "button",
            id: "btn1", // button id (cannot overlap with existing button ids if you want to apply custom logic)
            icon: "wxo-help", // button icon (combines with label)
            css: "rounded", // css class name assigned to the control (default supported classes: wx-primary, wx-secondary)
            label: "Custom button", // button label (combines with icon)
            tooltip: "Some tooltip", // tooltip displayed on hover (if not specified, uses the value from "label")
            handler: () => ..., // custom logic attached to this button
        }
    ]
    // other configuration properties
});
~~~

**Change log:** v2.0에서 추가된 속성

**Related articles:** [Configuration](guides/configuration.md)

**Related sample:** [RichText. Custom control and simplified toolbar](https://snippet.dhtmlx.com/wda202ih?tag=richtext)

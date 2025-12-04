---
sidebar_label: toolbar
title: toolbar 구성
description: DHTMLX JavaScript RichText 라이브러리 문서에서 toolbar 구성을 살펴보세요. 개발자 가이드, API 참조, 코드 예제 및 라이브 데모를 확인하고 DHTMLX RichText의 30일 무료 평가판을 이용해 보세요.
---

# toolbar

### 설명

@short: 선택 사항입니다. toolbar를 활성화하여 사용자가 표시할 버튼을 선택하고 설정할 수 있게 합니다.

### 사용법

~~~jsx {}
toolbar?: boolean | Array<string | { id: string, type: string, label?: string, tooltip?: string, css?: string, handler?: () => any }>;
~~~

#### Toolbar 내에서 사용 가능한 버튼

RichText toolbar에 추가할 수 있는 버튼 목록은 다음과 같습니다:

| 버튼                | 설명                                                                      |
|---------------------|---------------------------------------------------------------------------|
| `undo`              | 마지막 사용자 작업을 되돌립니다.                                          |
| `redo`              | 이전에 실행 취소한 작업을 다시 적용합니다.                               |
| `style`             | 제목이나 단락과 같은 텍스트 스타일을 선택할 수 있습니다.                  |
| `font-family`       | 선택한 텍스트의 글꼴을 변경합니다.                                        |
| `font-size`         | 선택한 텍스트의 크기를 변경합니다.                                        |
| `bold`              | 선택한 텍스트를 굵게 만듭니다.                                           |
| `italic`            | 선택한 텍스트를 이탤릭체로 만듭니다.                                     |
| `underline`         | 선택한 텍스트에 밑줄을 긋습니다.                                         |
| `strike`            | 취소선 효과를 추가합니다.                                                 |
| `subscript`         | 텍스트를 아래첨자로 서식 지정합니다.                                     |
| `superscript`       | 텍스트를 위첨자로 서식 지정합니다.                                       |
| `text-color`        | 텍스트 색상을 변경합니다.                                                 |
| `background-color`  | 텍스트 배경 강조 색상을 변경합니다.                                      |
| `align`             | 텍스트 정렬을 설정합니다: 왼쪽, 가운데, 오른쪽, 또는 양쪽 맞춤.           |
| `indent`            | 텍스트 블록의 들여쓰기를 증가시킵니다.                                   |
| `outdent`           | 단락 들여쓰기를 감소시킵니다.                                             |
| `line-height`       | 줄 간격을 조정합니다.                                                     |
| `quote`             | 텍스트를 인용문 블록으로 서식 지정합니다.                               |
| `bulleted-list`     | 글머리 기호 목록을 만듭니다.                                             |
| `numbered-list`     | 번호 매기기 목록을 만듭니다.                                             |
| `link`              | 하이퍼링크를 삽입합니다.                                                 |
| `image`             | 이미지를 삽입합니다.                                                     |
| `line`              | 수평선을 삽입합니다.                                                     |
| `clear`             | 선택한 텍스트의 모든 서식을 제거합니다.                                 |
| `print`             | 인쇄 대화상자를 엽니다.                                                  |
| `fullscreen`        | 전체 화면 모드를 전환합니다.                                              |
| `mode`              | [레이아웃 모드](api/config/layout-mode.md) (고전/문서) 간 전환합니다.     |
| `shortcuts`         | 키보드 단축키 목록을 표시합니다.                                         |
| `separator`         | toolbar 그룹 사이에 시각적 구분선을 추가합니다.                          |

이 문자열들을 사용하여 toolbar 버튼을 다음과 같이 설정할 수 있습니다:

~~~jsx {2-7}
new richtext.Richtext("#root", {
    toolbar: [
        "bold",
        "italic",
        "separator",
        // 기타 버튼
    ],
    // 기타 구성 속성
});
~~~

#### Toolbar 내 맞춤 버튼

맞춤 버튼은 다음 옵션을 가진 객체로 설정할 수 있습니다:

- `type` - (필수) 컨트롤 유형을 정의합니다. 선택지는 `"button"`, `"richselect"`, `"colorpicker"`입니다.
- `id` - (선택) 고유한 컨트롤 ID (기존 ID와 충돌하지 않아야 함).
- `label` - (선택) 버튼의 텍스트 레이블 (아이콘 옆에 표시).
- `tooltip` - (선택) 마우스 오버 시 표시되는 텍스트 (설정하지 않으면 label이 기본값).
- `css` - (선택) 컨트롤에 적용할 CSS 클래스 (기본 클래스는 wx-primary, wx-secondary 포함).
- `handler` - (선택) 버튼 클릭 시 실행되는 함수.

~~~jsx {6-32}
new richtext.Richtext("#root", {
    toolbar: [
        // 버튼 (문자열은 버튼만 나타냄)
        "bold",
        "italic",
        // 미리 정의된 버튼 (사용자는 여기서 레이블이나 툴팁 같은 추가 옵션을 넣을 수 없으며, ({ type: "button", id: string }) 만 가능)
        {
            type: "button",
            id: "fullscreen",
        },
        // 미리 정의된 컨트롤에는 올바른 type을 지정해야 함 (예: richselect/colorpicker)
        // 잘못된 타입의 컨트롤은 추가되지 않음
        {
            type: "richselect", // type: "button" - 무시됨
            id: "mode",
        },
        // 맞춤 버튼 (지원되는 옵션만 사용 가능)
        // 현재는 맞춤 버튼만 허용됨 (richselect/colorpicker는 지원하지 않음)
        {
            type: "button",
            id: "some",
            label: "Some",
            handler: () => {/* 맞춤 로직 */}
        },
        {
            type: "button",
            id: "other",
            icon: "wxo-help",
            label: "Other",
            tooltip: "Some tooltip",
            handler: () => {/* 맞춤 로직 */}
        }
    ],
    // 기타 구성 속성
});
~~~

#### Toolbar 숨기기

toolbar를 숨기려면 `toolbar` 속성을 `false`로 설정하세요:

~~~jsx {2}
new richtext.Richtext("#root", {
    toolbar: false
    // 기타 구성 속성
});
~~~

### 기본 구성

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
기본 toolbar 컨트롤은 RichText 위젯에 포함되어 있으며 `richtext.defaultToolbarButtons`를 통해 접근할 수 있습니다.

```jsx{4}
// RichText 초기화
new richtext.Richtext("#root", {
    toolbar: [
        ...richtext.defaultToolbarButtons,
        {
            type: "button",
            id: "btn1", // 맞춤 로직용 고유 버튼 ID
            icon: "wxo-help", // 레이블과 함께 표시되는 아이콘
            css: "rounded", // 스타일링용 CSS 클래스 (기본 지원 클래스: wx-primary, wx-secondary)
            label: "Custom button", // 아이콘 옆 버튼 레이블
            tooltip: "Some tooltip", // 마우스 오버 시 툴팁 (없으면 label 사용)
        }
    ]
    // 기타 구성 속성
});
```
:::

### 예제

~~~jsx {3-18}
// RichText 초기화
new richtext.Richtext("#root", {
    toolbar: [
        "bold",
        "italic",
        "separator",
        // 맞춤 버튼 (모든 지원 옵션 포함)
        // 현재는 맞춤 버튼만 지원 (richselect/colorpicker 없음)
        {
            type: "button",
            id: "btn1", // 맞춤 로직용 고유 버튼 ID
            icon: "wxo-help", // 레이블과 함께 표시되는 아이콘
            css: "rounded", // 스타일링용 CSS 클래스 (기본 지원 클래스: wx-primary, wx-secondary)
            label: "Custom button", // 아이콘 옆 버튼 레이블
            tooltip: "Some tooltip", // 마우스 오버 시 툴팁 (없으면 label 사용)
            handler: () => ..., // 이 버튼에 대한 맞춤 로직
        }
    ]
    // 기타 구성 속성
});
~~~

**변경 로그:** 이 속성은 v2.0에서 도입되었습니다.

**관련 문서:** [구성](guides/configuration.md)

**관련 샘플:** [RichText. Custom control and simplified toolbar](https://snippet.dhtmlx.com/wda202ih?tag=richtext)

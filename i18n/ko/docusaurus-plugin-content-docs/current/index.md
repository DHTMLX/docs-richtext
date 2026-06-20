---
sidebar_label: RichText 개요
title: RichText 개요
slug: /
description: DHTMLX JavaScript RichText 라이브러리의 개요를 문서에서 확인할 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험해 보세요. 또한 DHTMLX RichText 무료 30일 평가판을 다운로드할 수 있습니다.
---

# RichText 개요 {#richtext-overview}

**DHTMLX RichText**는 JavaScript로 구축된 유연하고 경량화된 WYSIWYG 에디터입니다. 현대 웹 애플리케이션에서 원활한 편집 경험을 제공하도록 설계된 RichText는 깔끔한 UI, 풍부한 서식 기능, 그리고 콘텐츠 렌더링에 대한 완전한 제어를 제공합니다. CMS, 내부 관리 도구, 또는 임베디드 문서 에디터를 구축하는 경우 모두, RichText는 필요에 맞게 쉽게 통합하고 커스터마이징할 수 있습니다.

**DHTMLX RichText** 컴포넌트에는 다음과 같은 기능이 포함되어 있습니다:

- 두 가지 [**레이아웃 모드**](api/config/layout-mode.md)

- HTML, 일반 텍스트, Markdown으로의 콘텐츠 직렬화

- 기본 제공 버튼 및 커스텀 버튼을 포함하는 구성 가능한 [`toolbar`](api/config/toolbar.md)

- 표시 또는 숨김이 가능한 정적 [`menubar`](api/config/menubar.md)

- 선택적 서버 [업로드](api/config/image-upload-url.md) 또는 인라인 base64 임베딩을 통한 이미지 업로드, 풍부한 서식, 커스텀 스타일링, 전체 화면 모드

- [이벤트 처리](api/overview/event_bus_methods_overview.md), [콘텐츠 조작](api/overview/methods_overview.md), [반응형 상태 관리](api/overview/state_methods_overview.md)를 위한 [전체 API 접근](api/overview/main_overview.md)

RichText는 프레임워크에 구애받지 않으며 [React](guides/integration_with_react.md), [Angular](guides/integration_with_angular.md), [Vue](guides/integration_with_vue.md), [Svelte](guides/integration_with_svelte.md) 프레임워크와 쉽게 통합할 수 있어 다양한 프론트엔드 생태계에 적합합니다.

이 문서는 설치, 구성, 사용법, 커스터마이징에 대한 상세한 안내를 제공합니다. 일반적인 시나리오에 대한 예제, [전체 API 레퍼런스](api/overview/main_overview.md), 그리고 RichText를 애플리케이션에 임베딩하기 위한 모범 사례를 확인할 수 있습니다.

## RichText 구조 {#richtext-structure}

### 메뉴바 {#menubar}

RichText 메뉴바는 새 문서 생성, 인쇄, 콘텐츠 가져오기/내보내기 등 편집 작업에 대한 접근을 제공합니다. 기본적으로 숨겨져 있습니다.

[`menubar`](api/config/menubar.md) 속성을 사용하여 표시 여부를 전환할 수 있습니다. 메뉴바는 활성화 또는 비활성화할 수 있지만, 현재 그 내용은 구성할 수 없습니다.

<div className="img_border">
![메뉴바](/img/richtext/menubar.png)
</div>

### 툴바 {#toolbar}

RichText 툴바는 텍스트 서식 및 구조적 편집 기능에 대한 빠른 접근을 제공합니다. 기본적으로 [툴바](api/config/toolbar.md#default-config)는 활성화되어 있으며, 굵게, 기울임꼴, 글꼴 설정, 목록 서식 등 자주 사용되는 컨트롤의 사전 정의된 세트를 표시합니다.

[`toolbar`](api/config/toolbar.md) 속성을 사용하면 툴바의 내용과 레이아웃을 완전히 커스터마이징할 수 있습니다. 툴바를 활성화 또는 비활성화하거나, 기본 컨트롤을 재배치하거나, 사전 정의된 버튼 식별자와 커스텀 버튼 객체의 배열을 사용하여 완전히 커스텀 툴바를 정의할 수 있습니다.

<div className="img_border">
![툴바](/img/richtext/toolbar.png)
</div>

### 에디터 {#editor}

RichText 에디터는 사용자가 콘텐츠를 생성하고 서식을 지정하는 중앙 영역입니다. [`value`](api/config/value.md), [`layoutMode`](api/config/layout-mode.md), [`defaultStyles`](api/config/default-styles.md)와 같은 구성 옵션을 통해 에디터의 모양과 동작을 제어할 수 있습니다. RichText는 또한 커스텀 스타일링, 이미지 임베딩, 그리고 애플리케이션의 요구에 맞는 반응형 레이아웃 조정을 지원합니다.

#### 두 가지 작동 모드 {#two-working-modes}

DHTMLX RichText는 "classic" 및 "document" 모드로 콘텐츠를 처리할 수 있습니다. 텍스트 편집 시 가장 편안하게 느껴지는 모드를 선택할 수 있습니다. [`layoutMode`](api/config/layout-mode.md) 속성을 사용하여 프로그래밍 방식으로 모드를 전환하세요.

- `"classic"`

<div className="img_border">
![클래식 모드](/img/richtext/classic_mode.png)
</div>

- `"document"`

<div className="img_border">
![문서 모드](/img/richtext/document_mode.png)
</div>

## 지원 형식 {#supported-formats}

RichText 에디터는 **HTML**, **일반 텍스트**, **Markdown** 형식으로 콘텐츠의 [파싱](api/methods/set-value.md) 및 [직렬화](api/methods/get-value.md)를 지원합니다.

#### HTML 형식 {#html-format}

<div className="img_border">
![HTML 형식](/img/richtext/html_format.png)
</div>

#### 텍스트 형식 {#text-format}

<div className="img_border">
![텍스트 형식](/img/richtext/text_format.png)
</div>

#### Markdown 형식 {#markdown-format}

내장된 `markdown` 인코더를 [`setValue()`](api/methods/set-value.md) / [`getValue()`](api/methods/get-value.md)에 전달하여 Markdown으로 콘텐츠를 불러오거나 직렬화하세요:

~~~jsx
const editor = new richtext.Richtext("#root", {
    value: "Hello world"
    // 기타 설정 속성
});

// 에디터에 Markdown 불러오기
editor.setValue("# Title\n\nParagraph", richtext.markdown.fromMarkdown);

// 에디터 콘텐츠를 Markdown으로 읽기
const md = editor.getValue(richtext.markdown.toMarkdown);
~~~

:::note[참고]
Markdown 지원은 구문의 제한된 하위 집합만을 포함합니다 — 제목, 단락, 줄바꿈, 강조, 인용구, 목록, 링크와 같은 일반적인 블록 및 인라인 요소가 해당됩니다. Markdown에 해당하는 표현이 없는 서식(글꼴 패밀리, 글꼴 크기, 색상, 정렬, 줄 높이)은 직렬화 시 제거됩니다.

중첩 인라인 구조는 지원되지 않으며, **이탤릭체 안의 굵게**만 예외입니다. 링크 안의 굵게, 목록 항목 안의 이탤릭체, 또는 다단계(중첩) 목록과 같은 조합은 올바르게 렌더링되지 않습니다.
:::

## 복사 및 붙여넣기 {#copy-and-paste}

RichText 에디터는 표준 시스템 단축키(Windows/Linux에서 `Ctrl+C` / `Ctrl+X` / `Ctrl+V`, macOS에서 `⌘+C` / `⌘+X` / `⌘+V`), 해당 [툴바](api/config/toolbar.md) 버튼, 그리고 [메뉴바](api/config/menubar.md) 항목을 통해 클립보드 작업을 지원합니다.

콘텐츠를 복사하거나 잘라낼 때 RichText는 시스템 클립보드에 두 가지 형태로 데이터를 씁니다:

- 터미널, 코드 에디터, 일반 입력과 같은 간단한 대상과의 호환성을 위한 **일반 텍스트** 버전
- 굵게, 기울임꼴, 밑줄, 취소선, 글꼴 패밀리, 글꼴 크기, 텍스트 및 배경 색상, 제목, 인용구, 목록, 정렬, 들여쓰기, 줄 높이, 링크, 이미지 등 모든 인라인 및 블록 서식을 포함하는 **HTML** 버전

붙여넣기 동작은 클립보드 페이로드의 소스에 따라 다릅니다:

- 두 RichText 인스턴스 간 붙여넣기(동일한 문서 또는 다른 페이지)는 HTML 표현을 사용하며 원래 서식을 유지합니다.
- 브라우저, 워드 프로세서, 기타 에디터를 포함한 외부 소스에서 붙여넣기는 일반 텍스트로 처리됩니다. 삽입된 콘텐츠는 외부 서식 없이 텍스트로 추가됩니다.

:::note[참고]
툴바의 **붙여넣기** 버튼은 비동기 Clipboard API를 사용하며, 이는 일반 텍스트만 노출합니다. 다른 RichText에서 복사한 콘텐츠를 서식을 유지하면서 붙여넣으려면 `Ctrl+V` / `⌘+V` 단축키를 사용하세요. 이 단축키는 브라우저의 클립보드 이벤트에서 직접 전체 HTML 페이로드를 수신합니다.
:::

## 키보드 단축키 {#keyboard-shortcuts}

RichText 에디터는 더 빠른 서식 지정과 편집을 위한 일반적인 키보드 단축키 세트를 지원합니다. 단축키는 플랫폼 규칙을 따르며 **Windows/Linux** (`Ctrl`)와 **macOS** (`⌘`) 모두에서 사용할 수 있습니다.

### 텍스트 서식 {#text-formatting}

| 작업            | Windows/Linux   | macOS         |
|-----------------|-----------------|---------------|
| 굵게*           | `Ctrl+B`        | `⌘B`          |
| 기울임꼴        | `Ctrl+I`        | `⌘I`          |
| 밑줄            | `Ctrl+U`        | `⌘U`          |
| 취소선          | `Ctrl+Shift+X`  | `⌘⇧X`         |

### 편집 {#editing}

| 작업          | Windows/Linux            | macOS         |
|---------------|--------------------------|---------------|
| 실행 취소     | `Ctrl+Z`                 | `⌘Z`          |
| 다시 실행     | `Ctrl+Y` / `Ctrl+Shift+Z`| `⌘Y` / `⌘⇧Z`  |
| 잘라내기      | `Ctrl+X`                 | `⌘X`          |
| 복사          | `Ctrl+C`                 | `⌘C`          |
| 붙여넣기      | `Ctrl+V`                 | `⌘V`          |
| 단어 삭제     | `Ctrl+Backspace` / `Ctrl+Delete` | `⌥⌫` / `⌥⌦` |
| 줄 삭제       | —                        | `⌘⌫` / `⌘⌦`   |

### 들여쓰기 {#indentation}

| 작업                   | Windows/Linux | macOS |
|------------------------|---------------|-------|
| 들여쓰기 / 목록 중첩   | `Tab`         | `⇥`   |
| 내어쓰기 / 목록 해제   | `Shift+Tab`   | `⇧⇥`  |

### 특수 작업 {#special-actions}

| 작업         | Windows/Linux | macOS |
|--------------|---------------|-------|
| 링크 삽입    | `Ctrl+K`      | `⌘K`  |
| 인쇄         | `Ctrl+P`      | `⌘P`  |

:::info[정보]
향후 업데이트에서 더 많은 단축키가 추가될 수 있습니다.
:::

RichText 키보드 단축키와 관련된 실제 레퍼런스를 확인하려면 **도움말**을 누르고 **키보드 단축키** 옵션을 선택하세요:

<div className="img_border">
![키보드 단축키](/img/richtext/shortcut_reference.png)
</div>

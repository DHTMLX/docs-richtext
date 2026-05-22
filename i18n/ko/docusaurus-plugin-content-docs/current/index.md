---
sidebar_label: RichText 개요
title: RichText 개요
slug: /
description: DHTMLX JavaScript RichText 라이브러리의 개요를 문서에서 확인할 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험해 보세요. DHTMLX RichText의 무료 30일 평가판도 다운로드할 수 있습니다.
---

# RichText 개요

**DHTMLX RichText**는 JavaScript로 구축된 유연하고 경량화된 WYSIWYG 에디터입니다. 현대적인 웹 애플리케이션에서 원활한 편집 경험을 제공하도록 설계된 RichText는 깔끔한 UI, 풍부한 서식 기능, 그리고 콘텐츠 렌더링에 대한 완전한 제어를 제공합니다. CMS, 내부 관리 도구, 또는 임베디드 문서 에디터를 구축하는 경우에도 RichText를 손쉽게 통합하고 필요에 맞게 커스터마이징할 수 있습니다.

**DHTMLX RichText** 컴포넌트는 다음과 같은 기능을 포함합니다:

- 두 가지 [**레이아웃 모드**](api/config/layout-mode.md)

- 일반 텍스트 및 HTML 형식으로의 콘텐츠 직렬화

- 기본 제공 버튼과 커스텀 버튼을 갖춘 구성 가능한 [**toolbar**](api/config/toolbar.md)

- 표시하거나 숨길 수 있는 고정 [**menubar**](api/config/menubar.md)

- 이미지 업로드, 풍부한 서식, 커스텀 스타일링, 전체 화면 모드

- [이벤트 처리](api/overview/event_bus_methods_overview.md), [콘텐츠 조작](api/overview/methods_overview.md), [반응형 상태 관리](api/overview/state_methods_overview.md)를 위한 [전체 API 접근](api/overview/main_overview.md)

RichText는 프레임워크에 종속되지 않으며 [React](guides/integration_with_react.md), [Angular](guides/integration_with_angular.md), [Vue](guides/integration_with_vue.md), [Svelte](guides/integration_with_svelte.md) 프레임워크와 손쉽게 통합할 수 있어 다양한 프론트엔드 생태계에 적합합니다.

이 문서는 설치, 구성, 사용법 및 커스터마이징에 대한 상세한 지침을 제공합니다. 일반적인 시나리오에 대한 예제, [전체 API 레퍼런스](api/overview/main_overview.md), 그리고 RichText를 애플리케이션에 임베드하기 위한 모범 사례를 확인할 수 있습니다.

## RichText 구조

### Menubar

RichText menubar는 새 문서 만들기, 인쇄, 콘텐츠 가져오기/내보내기 등 편집 관련 작업에 대한 접근을 제공합니다. 기본적으로 숨겨져 있습니다.

[`menubar`](api/config/menubar.md) 속성을 사용하여 표시 여부를 전환할 수 있습니다. menubar는 활성화하거나 비활성화할 수 있지만, 현재 그 내용은 구성할 수 없습니다.

<div className="img_border">
![Menubar](./assets/richtext/menubar.png)
</div>

### Toolbar

RichText toolbar는 텍스트 서식 및 구조적 편집 기능에 빠르게 접근할 수 있게 해줍니다. 기본적으로 [toolbar](api/config/toolbar.md#default-config)는 활성화되어 있으며 굵게, 기울임꼴, 글꼴 설정, 목록 서식 등 일반적으로 사용되는 컨트롤의 사전 정의된 세트를 표시합니다.

[`toolbar`](api/config/toolbar.md) 속성을 사용하면 toolbar의 내용과 레이아웃을 완전히 커스터마이징할 수 있습니다. toolbar를 활성화하거나 비활성화하고, 기본 컨트롤을 재배치하거나, 사전 정의된 버튼 식별자와 커스텀 버튼 객체 배열을 사용하여 완전히 커스텀한 toolbar를 정의할 수 있습니다.

<div className="img_border">
![Toolbar](./assets/richtext/toolbar.png)
</div>

### Editor

RichText 에디터는 사용자가 콘텐츠를 작성하고 서식을 지정하는 중심 영역입니다. [`value`](api/config/value.md), [`layoutMode`](api/config/layout-mode.md), [`defaultStyles`](api/config/default-styles.md)와 같은 구성 옵션을 통해 에디터의 외관과 동작을 제어할 수 있습니다. RichText는 커스텀 스타일링, 이미지 임베딩, 그리고 애플리케이션 요구 사항에 맞는 반응형 레이아웃 조정도 지원합니다.

#### 두 가지 작동 모드

DHTMLX RichText는 "classic" 및 "document" 모드로 콘텐츠를 다룰 수 있습니다. 텍스트 편집 시 가장 편안하게 느껴지는 모드를 선택할 수 있습니다. [`layoutMode`](api/config/layout-mode.md) 속성을 사용하여 프로그래밍 방식으로 모드를 전환할 수 있습니다.

- **"classic"**

<div className="img_border">
![Classic mode](./assets/richtext/classic_mode.png)
</div>

- **"document"**

<div className="img_border">
![Document mode](./assets/richtext/document_mode.png)
</div>

## 지원 형식

RichText 에디터는 **HTML** 및 일반 텍스트 형식으로 콘텐츠의 [파싱](api/methods/set-value.md)과 [직렬화](api/methods/get-value.md)를 지원합니다.

#### HTML 형식

<div className="img_border">
![HTML format](./assets/richtext/html_format.png)
</div>

#### 텍스트 형식

<div className="img_border">
![Text format](./assets/richtext/text_format.png)
</div>

## 키보드 단축키

RichText 에디터는 더 빠른 서식 지정과 편집을 위한 일반적인 키보드 단축키 세트를 지원합니다. 단축키는 플랫폼 규칙을 따르며 **Windows/Linux** (`Ctrl`)와 **macOS** (`⌘`) 모두에서 사용할 수 있습니다.

### 텍스트 서식

| 작업            | Windows/Linux   | macOS         |
|-----------------|-----------------|---------------|
| Bold*           | `Ctrl+B`        | `⌘B`          |
| Italic          | `Ctrl+I`        | `⌘I`          |
| Underline       | `Ctrl+U`        | `⌘U`          |
| Strikethrough   | `Ctrl+Shift+X`  | `⌘⇧X`         |

### 편집

| 작업     | Windows/Linux            | macOS         |
|----------|--------------------------|---------------|
| Undo     | `Ctrl+Z`                 | `⌘Z`          |
| Redo     | `Ctrl+Y` / `Ctrl+Shift+Z`| `⌘Y` / `⌘⇧Z`  |
| Cut      | `Ctrl+X`                 | `⌘X`          |
| Copy     | `Ctrl+C`                 | `⌘C`          |
| Paste    | `Ctrl+V`                 | `⌘V`          |

### 특수 작업

| 작업         | Windows/Linux | macOS |
|--------------|---------------|-------|
| Insert link  | `Ctrl+K`      | `⌘K`  |
| Print        | `Ctrl+P`      | `⌘P`  |

:::info
향후 업데이트에서 더 많은 단축키가 추가될 수 있습니다.
:::

RichText 키보드 단축키에 대한 실제 레퍼런스를 확인하려면 **Help**를 누르고 **Keyboard shortcuts** 옵션을 선택하세요:

<div className="img_border">
![Keyboard shortcuts](./assets/richtext/shortcut_reference.png)
</div>

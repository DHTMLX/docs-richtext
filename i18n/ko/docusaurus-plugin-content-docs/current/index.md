---
sidebar_label: RichText 개요
title: RichText 개요
slug: /
description: DHTMLX JavaScript RichText 라이브러리 문서에서 DHTMLX JavaScript RichText 라이브러리의 개요를 확인할 수 있습니다. 개발자 가이드와 API 레퍼런스를 탐색하고, 코드 예제와 라이브 데모를 시도해 보며, DHTMLX RichText의 30일 무료 평가판을 다운로드하세요.
---

# RichText 개요

**DHTMLX RichText**는 JavaScript로 구축된 유연하고 가벼운 WYSIWYG 에디터입니다. 최신 웹 애플리케이션에서 원활한 편집 경험을 제공하도록 설계된 RichText는 깔끔한 UI, 풍부한 서식 기능 및 콘텐츠 렌더링에 대한 완벽한 제어 기능을 제공합니다. CMS, 내부 관리 도구 또는 임베디드 문서 편집기를 구축하는 경우에도 RichText는 손쉽게 통합하고 요구사항에 맞게 사용자 정의할 수 있습니다.

**DHTMLX RichText** 컴포넌트에는 다음과 같은 기능이 포함되어 있습니다:

- 두 가지 [**레이아웃 모드**](api/config/layout-mode.md)

- 일반 텍스트 및 HTML로의 콘텐츠 직렬화

- 내장 및 사용자 정의 버튼이 있는 구성 가능한 [**toolbar**](api/config/toolbar.md)

- 표시 또는 숨김이 가능한 정적 [**menubar**](api/config/menubar.md)

- 이미지 업로드, 풍부한 서식, 사용자 정의 스타일링 및 전체 화면 모드

- [이벤트 처리](api/overview/event_bus_methods_overview.md), [콘텐츠 조작](api/overview/methods_overview.md) 및 [반응형 상태 관리](api/overview/state_methods_overview.md)를 위한 [전체 API 접근](api/overview/main_overview.md)

RichText는 프레임워크에 구애받지 않으며 [React](guides/integration_with_react.md), [Angular](guides/integration_with_angular.md), [Vue](guides/integration_with_vue.md) 및 [Svelte](guides/integration_with_svelte.md) 프레임워크와 쉽게 통합되어 다양한 프런트엔드 생태계에 적합합니다.

이 문서는 설치, 구성, 사용 및 사용자 정의에 대한 자세한 안내를 제공합니다. 일반적인 시나리오에 대한 예제, [전체 API 레퍼런스](api/overview/main_overview.md) 및 애플리케이션에 RichText를 임베드하기 위한 모범 사례를 확인할 수 있습니다.

## RichText 구조

### Menubar

RichText menubar는 새 문서 작성, 인쇄, 콘텐츠 가져오기/내보내기 등의 편집 작업에 대한 접근을 제공합니다. 기본적으로 숨겨져 있습니다.

표시 여부를 전환하려면 [`menubar`](api/config/menubar.md) 속성을 사용하세요. menubar는 활성화하거나 비활성화할 수 있지만, 현재로서는 내용을 구성할 수 없습니다.

<div className="img_border">
![Menubar](./assets/richtext/menubar.png)
</div>

### Toolbar

RichText toolbar는 텍스트 서식 지정 및 구조적 편집 기능에 빠르게 접근할 수 있도록 제공합니다. 기본적으로 [toolbar](api/config/toolbar.md#default-config)는 활성화되어 있으며 굵게, 기울임꼴, 글꼴 설정, 목록 서식 등 일반적으로 사용되는 컨트롤의 사전 정의된 세트를 표시합니다.

[`toolbar`](api/config/toolbar.md) 속성을 통해 toolbar의 내용과 레이아웃을 완전히 사용자 정의할 수 있습니다. toolbar를 활성화 또는 비활성화하거나, 기본 컨트롤을 재배열하거나, 사전 정의된 버튼 식별자와 사용자 정의 버튼 객체의 배열을 사용하여 완전히 사용자 정의된 toolbar를 정의할 수 있습니다.

<div className="img_border">
![Toolbar](./assets/richtext/toolbar.png)
</div>

### 에디터

RichText 에디터는 사용자가 콘텐츠를 생성하고 서식을 지정하는 중앙 영역입니다. [`value`](api/config/value.md), [`layoutMode`](api/config/layout-mode.md) 및 [`defaultStyles`](api/config/default-styles.md)와 같은 구성 옵션을 통해 에디터의 외관과 동작을 제어할 수 있습니다. RichText는 또한 애플리케이션의 요구에 맞게 사용자 정의 스타일링, 이미지 임베딩 및 반응형 레이아웃 조정을 지원합니다.

#### 두 가지 작동 모드

DHTMLX RichText는 "classic" 및 "document" 모드에서 콘텐츠 작업이 가능합니다. 텍스트를 편집하는 동안 편안하게 작업할 수 있도록 가장 적합한 모드를 선택할 수 있습니다. 모드를 프로그래밍 방식으로 전환하려면 [`layoutMode`](api/config/layout-mode.md) 속성을 사용하세요.

- **"classic"**

<div className="img_border">
![Classic 모드](./assets/richtext/classic_mode.png)
</div>

- **"document"**

<div className="img_border">
![Document 모드](./assets/richtext/document_mode.png)
</div>

## 지원되는 형식

RichText 에디터는 **HTML** 및 일반 텍스트 형식의 콘텐츠 [파싱](api/methods/set-value.md) 및 [직렬화](api/methods/get-value.md)를 지원합니다.

#### HTML 형식

<div className="img_border">
![HTML 형식](./assets/richtext/html_format.png)
</div>

#### 텍스트 형식

<div className="img_border">
![텍스트 형식](./assets/richtext/text_format.png)
</div>

## 키보드 단축키

RichText 에디터는 빠른 서식 지정 및 편집을 위한 일반적인 키보드 단축키 세트를 지원합니다. 단축키는 플랫폼 규칙을 따르며 **Windows/Linux** (`Ctrl`) 및 **macOS** (`⌘`) 모두에서 사용할 수 있습니다.

### 텍스트 서식 지정

| 작업            | Windows/Linux   | macOS         |
|-----------------|-----------------|---------------|
| 굵게*           | `Ctrl+B`        | `⌘B`          |
| 기울임꼴        | `Ctrl+I`        | `⌘I`          |
| 밑줄            | `Ctrl+U`        | `⌘U`          |
| 취소선          | `Ctrl+Shift+X`  | `⌘⇧X`         |

### 편집

| 작업       | Windows/Linux            | macOS         |
|------------|--------------------------|---------------|
| 실행 취소  | `Ctrl+Z`                 | `⌘Z`          |
| 다시 실행  | `Ctrl+Y` / `Ctrl+Shift+Z`| `⌘Y` / `⌘⇧Z`  |
| 잘라내기   | `Ctrl+X`                 | `⌘X`          |
| 복사       | `Ctrl+C`                 | `⌘C`          |
| 붙여넣기   | `Ctrl+V`                 | `⌘V`          |

### 특수 작업

| 작업          | Windows/Linux | macOS |
|---------------|---------------|-------|
| 링크 삽입     | `Ctrl+K`      | `⌘K`  |
| 인쇄          | `Ctrl+P`      | `⌘P`  |

:::info
향후 업데이트에서 더 많은 단축키가 도입될 수 있습니다.
:::

RichText 키보드 단축키와 관련된 실제 레퍼런스를 얻으려면 **Help**를 누르고 **Keyboard shortcuts** 옵션을 선택하세요:

<div className="img_border">
![키보드 단축키](./assets/richtext/shortcut_reference.png)
</div>

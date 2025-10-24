---
sidebar_label: RichText 개요
title: RichText 개요
slug: /
description: DHTMLX JavaScript RichText 라이브러리의 개요를 문서에서 확인할 수 있습니다. 개발자 가이드와 API 레퍼런스를 둘러보고, 코드 예제와 라이브 데모를 체험하며, DHTMLX RichText의 30일 무료 평가판도 다운로드해보세요.
---

# RichText 개요

**DHTMLX RichText**는 JavaScript로 제작된 가볍고 유연한 WYSIWYG 에디터입니다. 현대 웹 애플리케이션에서 손쉬운 편집을 위해 설계되었으며, 단순한 인터페이스와 다양한 서식 도구, 그리고 콘텐츠 표시 방식에 대한 완전한 제어 기능을 제공합니다. CMS, 관리자 대시보드, 또는 내장 문서 편집기 등 다양한 프로젝트에 RichText를 쉽게 추가하고 조정할 수 있습니다.

**DHTMLX RichText**의 주요 기능은 다음과 같습니다:

- 두 가지 [**레이아웃 모드**](api/config/layout-mode.md)

- 콘텐츠를 일반 텍스트 또는 HTML로 저장 가능

- 기본 및 사용자 지정 버튼을 구성할 수 있는 [**툴바**](api/config/toolbar.md)

- 고정형이며 표시/숨김이 가능한 [**메뉴바**](api/config/menubar.md)

- 이미지 업로드, 다양한 서식 지정, 사용자 정의 스타일, 전체화면 편집 지원

- [전체 API 접근](api/overview/main_overview.md) - [이벤트 처리](api/overview/event_bus_methods_overview.md), [콘텐츠 변경](api/overview/methods_overview.md), [반응형 상태 관리](api/overview/state_methods_overview.md)

RichText는 어떤 프레임워크와도 함께 사용할 수 있으며, [React](guides/integration_with_react.md), [Angular](guides/integration_with_angular.md), [Vue](guides/integration_with_vue.md), [Svelte](guides/integration_with_svelte.md)와도 연동되어 다양한 프론트엔드 환경에 적용할 수 있습니다.

이 문서에서는 설치, 설정, 사용법, 그리고 다양한 조정 방법을 안내합니다. 일반적인 작업 예제, [전체 API 문서](api/overview/main_overview.md), 그리고 여러 앱에 RichText를 추가하는 팁도 제공합니다.

## RichText 구조

### 메뉴바

RichText 메뉴바는 새 문서 만들기, 인쇄, 가져오기/내보내기 등 다양한 편집 작업에 빠르게 접근할 수 있도록 도와줍니다. 기본적으로 메뉴바는 숨겨져 있습니다.

[`menubar`](api/config/menubar.md) 속성으로 메뉴바의 표시 여부를 제어할 수 있습니다. 메뉴바를 켜거나 끌 수 있지만, 현재는 항목을 변경할 수 없습니다.

import menubar from '@site/static/img/richtext/menubar.png';

<img
  src={menubar}
  alt="Menubar"
  className="img_border"
/>

### 툴바

RichText 툴바는 사용자가 텍스트를 빠르게 서식 지정하고 구조를 편집할 수 있도록 해줍니다. 기본적으로 [toolbar](api/config/toolbar.md#기본-구성)는 활성화되어 있으며, 굵게, 기울임, 글꼴 설정, 목록 등 일반적으로 많이 쓰는 컨트롤을 보여줍니다.

[`toolbar`](api/config/toolbar.md) 속성을 통해 어떤 컨트롤이 표시될지, 배열 순서 등을 변경할 수 있습니다. 툴바를 켜거나 끄는 것은 물론, 기본 버튼의 순서를 변경하거나, 내장 및 사용자 정의 버튼으로 직접 구성할 수도 있습니다.

import toolbar from '@site/static/img/richtext/toolbar.png';

<img
  src={toolbar}
  alt="Toolbar"
  className="img_border"
/>

### 에디터

RichText의 핵심은 바로 에디터로, 모든 콘텐츠가 작성되고 서식이 적용되는 부분입니다. [`value`](api/config/value.md), [`layoutMode`](api/config/layout-mode.md), [`defaultStyles`](api/config/default-styles.md) 등 다양한 옵션으로 에디터의 모양과 동작을 조정할 수 있습니다. RichText는 사용자 정의 스타일, 이미지 추가, 다양한 화면 및 요구에 맞춘 레이아웃 조정이 가능합니다.

#### 두 가지 작업 모드

DHTMLX RichText는 "classic"과 "document" 두 가지 방식으로 콘텐츠를 표시할 수 있습니다. 원하는 편집 스타일에 맞는 모드를 선택할 수 있으며, [`layoutMode`](api/config/layout-mode.md) 속성으로 전환할 수 있습니다.

- **"classic"**

import classic_mode from '@site/static/img/richtext/classic_mode.png';

<img
  src={classic_mode}
  alt="Classic mode"
  className="img_border"
/>

- **"document"**

import document_mode from '@site/static/img/richtext/document_mode.png';

<img
  src={document_mode}
  alt="Document mode"
  className="img_border"
/>

## 지원 포맷

RichText는 콘텐츠를 **HTML** 또는 일반 텍스트로 [읽기](api/methods/set-value.md) 및 [저장](api/methods/get-value.md)할 수 있습니다.

#### HTML 포맷

import html_format from '@site/static/img/richtext/html_format.png';

<img
  src={html_format}
  alt="HTML format"
  className="img_border"
/>

#### 텍스트 포맷

import text_format from '@site/static/img/richtext/text_format.png';

<img
  src={text_format}
  alt="Text format"
  className="img_border"
/>

## 키보드 단축키

RichText는 빠른 편집과 서식 지정을 위해 다양한 표준 키보드 단축키를 지원합니다. 단축키는 각 플랫폼에서 일반적으로 쓰이는 방식과 동일하며, **Windows/Linux**(`Ctrl`)와 **macOS**(`⌘`) 모두에서 동작합니다.

### 텍스트 서식

| 동작           | Windows/Linux   | macOS         |
|----------------|-----------------|---------------|
| 굵게*          | `Ctrl+B`        | `⌘B`          |
| 기울임         | `Ctrl+I`        | `⌘I`          |
| 밑줄           | `Ctrl+U`        | `⌘U`          |
| 취소선         | `Ctrl+Shift+X`  | `⌘⇧X`         |

### 편집

| 동작    | Windows/Linux            | macOS         |
|---------|--------------------------|---------------|
| 실행 취소 | `Ctrl+Z`                 | `⌘Z`          |
| 다시 실행 | `Ctrl+Y` / `Ctrl+Shift+Z`| `⌘Y` / `⌘⇧Z`  |
| 잘라내기 | `Ctrl+X`                 | `⌘X`          |
| 복사     | `Ctrl+C`                 | `⌘C`          |
| 붙여넣기 | `Ctrl+V`                 | `⌘V`          |

### 특수 동작

| 동작           | Windows/Linux | macOS |
|----------------|---------------|-------|
| 링크 삽입      | `Ctrl+K`      | `⌘K`  |
| 인쇄           | `Ctrl+P`      | `⌘P`  |

:::info
앞으로 더 많은 단축키가 추가될 수 있습니다.
:::

RichText의 전체 키보드 단축키 목록은 **도움말**에서 **키보드 단축키**를 선택하면 확인할 수 있습니다:

import shortcut_reference from '@site/static/img/richtext/shortcut_reference.png';

<img
  src={shortcut_reference}
  alt="Shortcut reference"
  className="img_border"
/>

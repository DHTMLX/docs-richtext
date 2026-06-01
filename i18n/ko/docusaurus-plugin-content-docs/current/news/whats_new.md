---
sidebar_label: 새로운 기능
title: 새로운 기능
description: DHTMLX JavaScript UI 라이브러리 문서에서 DHTMLX RichText의 새로운 기능과 릴리스 기록을 살펴볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 시도해 보며, DHTMLX RichText의 무료 30일 평가판을 다운로드하세요.
---

## 버전 2.0.5 

2026년 3월 6일 출시

### 수정 사항

- IME 입력이 올바르게 처리되지 않음
- 조합 기반 입력(예: 데스크톱의 중국어, 일본어, 한국어)이 올바르게 처리되지 않음
- HTML을 파싱할 때 `margin-left` 및 `line-height` 속성이 무시됨
- 인라인 요소가 블록 수준의 부모로부터 속성을 상속함
- 두 에디터 인스턴스 간에 텍스트를 복사할 수 없음
- 두 개 이상의 에디터 인스턴스가 활성화된 상태에서 선택이 잘못 처리됨
- 단락에서 콘텐츠가 이미지뿐인 경우 커서가 잘못 배치됨
- 아래 첨자 및 위 첨자 요소의 무한 래핑
- 이미지를 붙여넣을 때 먼저 업로드하지 않고 인라인으로 처리됨
- 특정 위치(첫 줄 또는 마지막 줄)에서 빈 인라인 블록을 제거할 수 없음
- 타이핑할 때 에디터가 커서로 스크롤되지 않음
- Android에서 입력이 올바르게 처리되지 않음
- HR 요소에 대한 선택 처리가 올바르지 않음
- 빈 초기값에서 렌더링이 잘못됨
- 콘텐츠에 자체 닫는 블록이 포함된 경우 복사가 실패할 수 있음
- Chrome: 컨텍스트 메뉴에서 이모지를 삽입할 수 없음
- Firefox: 전체 선택 (CTRL+A) 이 올바르게 처리되지 않음

## 버전 2.0.4

2025년 10월 15일 출시

### 수정 사항

- 단락에 대한 범위 선택이 잘못됨
- 링크된 이미지 인접에 있을 때 링크 팝업이 표시되지 않음
- 초기 툴바 값이 실제 콘텐츠와 일치하지 않음

## 버전 2.0.3

2025년 8월 27일 출시

### 수정 사항

- 수평선을 클릭하면 스크립트 오류가 발생함
- 기본 줄 높이가 잘못됨
- 콘텐츠 스타일에 중복 선택자가 포함됨
- HTML을 파싱할 때 일반 텍스트 블록이 스타일 변경을 무시함
- 파서가 HTML에서 이스케이프된 글꼴 이름을 무시함
- 파서가 HTML에서 `margin-left` 및 `line-height` 속성을 무시함

## 버전 2.0.2

2025년 8월 4일 출시

### 수정 사항

- 패키지 콘텐츠 업데이트

## 버전 2.0.1

2025년 7월 30일 출시

### 수정 사항

- `defaultStyles` 속성에 대한 타입 정의 업데이트

## 버전 2.0

2025년 7월 30일 출시

:::note
v1.2의 API는 v2.0과 호환되지 않습니다. 추가 정보는 [**마이그레이션 가이드**](news/migration.md)를 참조하세요.
:::

### 새로운 기능

- **차세대 텍스트 렌더링**  
  새로운 엔진으로 더 부드럽고 빠르며 정확한 텍스트 렌더링을 경험하세요

- **세분화된 툴바 설정**  
  툴바를 완전히 제어하세요:  
  - [개별 툴바 컨트롤](guides/configuration.md#default-toolbar-controls)과 그 순서를 정의합니다
  - [사용자 정의 컨트롤](guides/configuration.md#add-custom-toolbar-controls)을 추가합니다

- **선택적 [메뉴바](api/config/menubar.md)**  
  에디터 상단에 클래식 메뉴 스타일 인터페이스를 활성화합니다

- **향상된 [문서 모드](guides/configuration.md#layout-modes)**  
  다양한 문서 크기에 대한 지원 추가

- **이미지 지원**  
  - [업로드 기능](api/config/image-upload-url.md)으로 이미지를 삽입합니다.  
  - [이미지 크기 조정](api/events/resize-image.md)을 대화형으로 수행합니다  

- **개선된 링크 경험**  
  사용성 향상을 위해 재설계된 [팝업 상호작용](api/events/show-popup.md)

- **새로운 서식 도구**  
  - 텍스트 정렬: **justify**  
  - [수평선](api/events/insert-line.md) 삽입  
  - [Indent](api/events/indent.md) / [Outdent](api/events/outdent.md)  
  - [줄 높이](api/events/set-line-height.md) 설정  
  - [아래 첨자](api/events/subscript.md) / [위 첨자](api/events/superscript.md) 적용

- **목록 관리**  
  콘텐츠에서 [목록을 손쉽게 삽입하고 관리](api/events/insert-list.md)합니다

- **가져오기/내보내기 & 인쇄**  
  - [DOCX 가져오기](api/events/import.md) 파일
  - 콘텐츠를 DOCX 또는 PDF로 [내보내기](api/events/export.md)
  - 에디터에서 직접 문서 [인쇄](api/events/print.md)

- **키보드 단축키**  
  일반 서식 및 편집 단축키에 대한 지원 확대

###  새로운 API

#### 새로운 속성

- [`fullscreenMode`](api/config/fullscreen-mode.md)  
- [`imageUploadUrl`](api/config/image-upload-url.md)  
- [`layoutMode`](api/config/layout-mode.md)  
- [`locale`](api/config/locale.md)  
- [`menubar`](api/config/menubar.md)  
- [`toolbar`](api/config/toolbar.md)  
- [`value`](api/config/value.md)

####  새로운 메서드

- [`setConfig()`](api/methods/set-config.md) — 동적으로 설정 업데이트  
- [`setLocale()`](api/methods/set-locale.md) — 즉시 로케일 변경

#### 새로운 내부 메서드

- [`api.exec()`](api/internal/exec.md)  
- [`api.intercept()`](api/internal/intercept.md)  
- [`api.getReactiveState()`](api/internal/get-reactive-state.md)  
- [`api.getState()`](api/internal/get-state.md)

#### 새로운 이벤트

새 이벤트의 전체 목록은 [여기](api/overview/events_overview.md)에서 확인할 수 있습니다

### 업데이트된 API

#### 업데이트된 속성

- [`defaultStyles`](api/config/default-styles.md)

#### 업데이트된 메서드

- [`setValue()`](api/methods/set-value.md)  
- [`getValue()`](api/methods/get-value.md)

#### 업데이트된 내부 메서드

- [`api.detach()`](api/internal/detach.md)  
- [`api.on()`](api/internal/on.md)

## 제거된 API

:::warning
프로젝트에서 제거된 API를 사용하지 마세요! <br/> 자세한 내용은 [마이그레이션](news/migration.md) 항목을 참조하세요.
:::

### [제거된 속성](news/migration.md#properties-migration)

- [`customStats`](news/migration.md#--customstats)  
- [`mode`](news/migration.md#--mode--layoutmode)  
- [`toolbarBlocks`](news/migration.md#--toolbarblocks--toolbar)

### [제거된 메서드](news/migration.md#methods-migration)

- `exitFullScreen()`  
- `fullScreen()`  
- `getEditorAPI()`  
- `getStats()`  
- `paint()`

### 제거된 내부 메서드

- [`events.fire()`](news/migration.md#--fire--use-exec-and-intercept)

### 제거된 이벤트

- `Action`  
- `Change`  
- `selectionChange`  
- `selectionRefresh`

---
sidebar_label: 새 소식
title: 새 소식
description: DHTMLX JavaScript UI 라이브러리 문서에서 DHTMLX RichText의 새 소식과 릴리스 이력을 확인하실 수 있습니다. 개발자 가이드 및 API 참조를 살펴보고, 코드 예제와 라이브 데모를 체험하며, DHTMLX RichText의 무료 30일 평가판을 다운로드하십시오.
---

## 버전 2.0.5 {#version-205}

2026년 3월 6일 출시

### 수정 사항 {#fixes}

- IME 입력이 올바르게 처리되지 않는 문제
- 데스크탑에서 조합 기반 입력(예: 중국어, 일본어, 한국어)이 올바르게 처리되지 않는 문제
- HTML 파싱 시 `margin-left` 및 `line-height` 속성이 무시되는 문제
- 인라인 요소가 블록 수준 부모의 속성을 상속하는 문제
- 두 에디터 인스턴스 간에 텍스트를 복사할 수 없는 문제
- 두 개 이상의 에디터 인스턴스가 활성화된 경우 선택 영역이 올바르게 처리되지 않는 문제
- 단락 내 유일한 콘텐츠가 이미지인 경우 커서가 올바르게 위치하지 않는 문제
- 아래 첨자 및 위 첨자 요소의 무한 래핑 문제
- 이미지를 붙여넣을 때 먼저 업로드하지 않고 인라인으로 삽입되는 문제
- 특정 위치(첫 번째 또는 마지막 줄)에서 빈 인라인 블록을 제거할 수 없는 문제
- 타이핑 시 에디터가 커서로 스크롤되지 않는 문제
- Android에서 입력이 올바르게 처리되지 않는 문제
- HR 요소에 대한 선택 처리가 올바르지 않은 문제
- 빈 초기값으로 렌더링이 올바르지 않은 문제
- 자기 닫힘 블록이 포함된 경우 콘텐츠 복사가 실패할 수 있는 문제
- Chrome: 컨텍스트 메뉴에서 이모지를 삽입할 수 없는 문제
- Firefox: 전체 선택(CTRL+A)이 올바르게 처리되지 않는 문제

## 버전 2.0.4 {#version-204}

2025년 10월 15일 출시

### 수정 사항 {#fixes-1}

- 단락에 대한 범위 선택이 올바르지 않은 문제
- 링크된 이미지에 인접한 경우 링크 팝업이 표시되지 않는 문제
- 초기 툴바 값이 실제 콘텐츠를 정확히 반영하지 않는 문제

## 버전 2.0.3 {#version-203}

2025년 8월 27일 출시

### 수정 사항 {#fixes-2}

- 수평선 클릭 시 스크립트 오류가 발생하는 문제
- 기본 줄 높이가 올바르지 않은 문제
- 콘텐츠 스타일에 중복 선택자가 포함되는 문제
- 일반 텍스트 블록이 HTML 파싱 시 스타일 변경을 무시하는 문제
- 파서가 HTML에서 이스케이프된 글꼴 이름을 무시하는 문제
- 파서가 HTML에서 `margin-left` 및 `line-height` 속성을 무시하는 문제

## 버전 2.0.2 {#version-202}

2025년 8월 4일 출시

### 수정 사항 {#fixes-3}

- 패키지 내용 업데이트

## 버전 2.0.1 {#version-201}

2025년 7월 30일 출시

### 수정 사항 {#fixes-4}

- `defaultStyles` 속성의 타입 정의 업데이트

## 버전 2.0 {#version-20}

2025년 7월 30일 출시

:::note[참고]
v1.2의 API는 v2.0과 호환되지 않습니다. 추가 정보는 [**마이그레이션 가이드**](news/migration.md)를 참조하십시오.
:::

### 새 기능 {#new-functionality}

- **차세대 텍스트 렌더링**
  새 엔진으로 더 부드럽고 빠르며 정확한 텍스트 렌더링을 경험하십시오

- **세밀한 툴바 구성**
  툴바를 완전히 제어하십시오:
  - [개별 툴바 컨트롤](guides/configuration.md/#default-toolbar-controls) 및 순서 정의
  - [커스텀 컨트롤](guides/configuration.md/#custom-toolbar-controls) 추가

- **선택적 [메뉴바](api/config/menubar.md)**
  에디터 상단에 클래식 메뉴 스타일 인터페이스 활성화

- **향상된 [문서 모드](guides/configuration.md/#layout-modes)**
  다양한 문서 크기 지원 추가

- **이미지 지원**
  - [업로드 기능](api/config/image-upload-url.md)을 통한 이미지 삽입
  - 이미지 [대화형 크기 조정](api/events/resize-image.md)

- **개선된 링크 경험**
  더 나은 사용성을 위한 [팝업 상호작용](api/events/show-popup.md) 재설계

- **새 서식 도구**
  - 텍스트 정렬: **균등 배분**
  - [수평선](api/events/insert-line.md) 삽입
  - [들여쓰기](api/events/indent.md) / [내어쓰기](api/events/outdent.md)
  - [줄 높이](api/events/set-line-height.md) 설정
  - [아래 첨자](api/events/subscript.md) / [위 첨자](api/events/superscript.md) 적용

- **목록 관리**
  콘텐츠에서 [목록을 쉽게 삽입 및 관리](api/events/insert-list.md)

- **가져오기/내보내기 및 인쇄**
  - [DOCX 가져오기](api/events/import.md)
  - 콘텐츠를 DOCX 또는 PDF로 [내보내기](api/events/export.md)
  - 에디터에서 직접 문서 [인쇄](api/events/print.md)

- **키보드 단축키**
  일반적인 서식 및 편집 단축키에 대한 지원 확장

### 새 API {#new-api}

#### 새 속성 {#new-properties}

- [`fullscreenMode`](api/config/fullscreen-mode.md)
- [`imageUploadUrl`](api/config/image-upload-url.md)
- [`layoutMode`](api/config/layout-mode.md)
- [`locale`](api/config/locale.md)
- [`menubar`](api/config/menubar.md)
- [`toolbar`](api/config/toolbar.md)
- [`value`](api/config/value.md)

#### 새 메서드 {#new-methods}

- [`setConfig()`](api/methods/set-config.md) — 구성 동적 업데이트
- [`setLocale()`](api/methods/set-locale.md) — 실시간 로케일 변경

#### 새 내부 메서드 {#new-internal-methods}

- [`api.exec()`](api/internal/exec.md)
- [`api.intercept()`](api/internal/intercept.md)
- [`api.getReactiveState()`](api/internal/get-reactive-state.md)
- [`api.getState()`](api/internal/get-state.md)

#### 새 이벤트 {#new-events}

새 이벤트 전체 목록은 [여기](api/overview/events_overview.md)에서 확인하실 수 있습니다

### 업데이트된 API {#updated-api}

#### 업데이트된 속성 {#updated-properties}

- [`defaultStyles`](api/config/default-styles.md)

#### 업데이트된 메서드 {#updated-methods}

- [`setValue()`](api/methods/set-value.md)
- [`getValue()`](api/methods/get-value.md)

#### 업데이트된 내부 메서드 {#updated-internal-methods}

- [`api.detach()`](api/internal/detach.md)
- [`api.on()`](api/internal/on.md)

## 제거된 API {#removed-api}

:::warning[경고]
제거된 API를 프로젝트에 사용하지 마십시오! <br/> 자세한 내용은 [마이그레이션](news/migration.md) 항목을 참조하십시오.
:::

### [제거된 속성](news/migration.md#properties-migration) {#removed-properties}

- [`customStats`](news/migration.md#--customstats)
- [`mode`](news/migration.md#--mode--layoutmode)
- [`toolbarBlocks`](news/migration.md#--toolbarblocks--toolbar)

### [제거된 메서드](news/migration.md#methods-migration) {#removed-methods}

- `exitFullScreen()`
- `fullScreen()`
- `getEditorAPI()`
- `getStats()`
- `paint()`

### 제거된 내부 메서드 {#removed-internal-methods}

- [`events.fire()`](news/migration.md#--fire--use-exec-and-intercept)

### 제거된 이벤트 {#removed-events}

- `Action`
- `Change`
- `selectionChange`
- `selectionRefresh`

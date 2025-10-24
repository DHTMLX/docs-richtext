---
sidebar_label: 새로운 소식
title: 새로운 소식
description: DHTMLX RichText의 최신 업데이트와 릴리즈 히스토리를 DHTMLX JavaScript UI 라이브러리 문서에서 확인하세요. 가이드, API 레퍼런스, 코드 예제, 라이브 데모, 그리고 DHTMLX RichText의 30일 무료 체험판 다운로드도 제공됩니다.
---

## 버전 2.0.4

2025년 10월 15일 출시

### 수정 사항

- 단락 범위 선택이 항상 올바르게 동작하지 않던 문제 수정
- 링크 이미지 옆에 있을 때 링크 팝업이 표시되지 않던 문제 수정
- 시작 시 툴바 값이 실제 콘텐츠와 일치하지 않던 문제 수정

## 버전 2.0.3

2025년 8월 27일 출시

### 수정 사항

- 수평선을 클릭할 때 스크립트 오류가 발생할 수 있던 문제 수정
- 기본 줄 간격이 올바르게 설정되지 않던 문제 수정
- 일부 콘텐츠 스타일에 중복 선택자가 있던 문제 수정
- 일반 텍스트 블록이 HTML 파싱 시 스타일 변경을 반영하지 않던 문제 수정
- 파서가 HTML에서 이스케이프된 폰트명을 건너뛰던 문제 수정
- 파서가 HTML에서 `margin-left` 및 `line-height`를 무시하던 문제 수정

## 버전 2.0.2

2025년 8월 4일 출시

### 수정 사항

- 패키지 콘텐츠가 업데이트됨

## 버전 2.0.1

2025년 7월 30일 출시

### 수정 사항

- `defaultStyles` 속성의 타입 정의가 업데이트됨

## 버전 2.0

2025년 7월 30일 출시

:::note
v1.2 API는 v2.0과 호환되지 않습니다. 자세한 내용은 [**마이그레이션 가이드**](news/migration.md)를 참고하세요.
:::

### 새로운 기능

- **차세대 텍스트 렌더링**  
  새로운 엔진으로 더 부드럽고, 빠르며, 정확한 텍스트 렌더링 제공

- **세분화된 툴바 구성**  
  툴바를 완전히 커스터마이즈할 수 있습니다: 
  - [개별 툴바 컨트롤](guides/configuration.md#default-toolbar-controls) 선택 및 순서 지정
  - [사용자 정의 컨트롤](guides/configuration.md#custom-toolbar-controls) 추가

- **선택적 [menubar](api/config/menubar.md)**  
  에디터 상단에 고전적인 메뉴 스타일 인터페이스 추가 가능

- **향상된 [문서 모드](guides/configuration.md#layout-modes)**  
  다양한 문서 크기 지원

- **이미지 지원**  
  - [업로드 기능](api/config/image-upload-url.md)으로 이미지 삽입  
  - 에디터 내에서 바로 [이미지 크기 조정](api/events/resize-image.md) 가능  

- **개선된 링크 경험**  
  링크 [팝업 인터랙션](api/events/show-popup.md)이 더 쉽게 재설계됨

- **새로운 서식 도구**  
  - 텍스트 정렬: **양쪽 정렬**  
  - [수평선 삽입](api/events/insert-line.md)  
  - [들여쓰기](api/events/indent.md) / [내어쓰기](api/events/outdent.md)  
  - [줄 간격 설정](api/events/set-line-height.md)  
  - [아래 첨자](api/events/subscript.md) / [위 첨자](api/events/superscript.md) 사용

- **목록 관리**  
  [목록 삽입 및 관리](api/events/insert-list.md)가 더 쉬워짐

- **가져오기/내보내기 및 인쇄**  
  - [DOCX 가져오기](api/events/import.md)
  - [DOCX 또는 PDF로 내보내기](api/events/export.md)
  - 에디터에서 바로 [인쇄](api/events/print.md) 가능

- **키보드 단축키**  
  더 많은 일반 서식 및 편집 단축키 지원

### 새로운 API

#### 새로운 속성

- [`fullscreenMode`](api/config/fullscreen-mode.md)  
- [`imageUploadUrl`](api/config/image-upload-url.md)  
- [`layoutMode`](api/config/layout-mode.md)  
- [`locale`](api/config/locale.md)  
- [`menubar`](api/config/menubar.md)  
- [`toolbar`](api/config/toolbar.md)  
- [`value`](api/config/value.md)

#### 새로운 메서드

- [`setConfig()`](api/methods/set-config.md) - 실시간으로 설정 변경  
- [`setLocale()`](api/methods/set-locale.md) - 로케일 즉시 변경

#### 새로운 내부 메서드

- [`api.exec()`](api/internal/exec.md)  
- [`api.intercept()`](api/internal/intercept.md)  
- [`api.getReactiveState()`](api/internal/get-reactive-state.md)  
- [`api.getState()`](api/internal/get-state.md)

#### 새로운 이벤트

새로운 이벤트 전체 목록은 [여기](api/overview/events_overview.md)에서 확인할 수 있습니다.

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
제거된 API는 프로젝트에서 사용하지 마세요! <br/> 자세한 내용은 [Migration](news/migration.md) 항목을 참고하세요.
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

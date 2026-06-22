---
sidebar_label: 새로운 기능
title: 새로운 기능
description: DHTMLX RichText의 새로운 기능과 릴리스 히스토리를 DHTMLX JavaScript UI 라이브러리 문서에서 확인할 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험하며, DHTMLX RichText 30일 무료 평가판을 다운로드하세요.
---

## 버전 2.1 {#version-21}

2026년 6월 X일 출시

### 새로운 기능 {#new-functionality}

- [`imageUploadUrl`](api/config/image-upload-url.md)는 선택 사항입니다. 생략할 경우, 이미지는 서버 없이 base64 데이터 URL 형태로 인라인 삽입됩니다
- 드래그 앤 드롭 이미지 삽입: 이미지 파일을 에디터 영역에 직접 드롭할 수 있습니다
- Markdown 지원: [`setValue()`](api/methods/set-value.md), [`getValue()`](api/methods/get-value.md), [`insertValue()`](api/methods/insert-value.md) 메서드의 `markdown` 인코더를 통해 에디터 콘텐츠를 Markdown으로 파싱하고 직렬화할 수 있습니다([RichText. 다양한 형식으로 작업 (Markdown, HTML, 텍스트)](https://snippet.dhtmlx.com/cne4kujn?tag=richtext) 샘플 참조)
- [`triggers`](api/config/triggers.md) 속성을 통한 멘션, 태그, 커스텀 드롭다운 트리거: `@`, `#`, `/`, `:` 등의 문자를 입력하면 제안 드롭다운이 열리고, 선택한 항목이 편집 불가능한 토큰으로 삽입됩니다([멘션과 태그](guides/mentions_and_tags.md) 가이드 및 [RichText. 멘션, 태그 및 비동기 조회](https://snippet.dhtmlx.com/nfvvfize?tag=richtext) 샘플 참조)
- [`triggerTemplate`](api/config/trigger-template.md) 속성을 통한 제안 항목의 커스텀 렌더링(예: 이름과 이메일이 포함된 아바타)([RichText. 트리거별 커스텀 드롭다운 템플릿](https://snippet.dhtmlx.com/0p3bbnhz?tag=richtext) 샘플 참조)
- 사용자가 트리거를 선택했을 때의 커스텀 동작: 토큰을 삽입하는 대신 자체 코드를 실행할 수 있습니다(이모지 삽입, 슬래시 스타일 명령 실행 등)([RichText. 이모지 자동 완성](https://snippet.dhtmlx.com/g5z1d868?tag=richtext) 및 [RichText. 슬래시 명령](https://snippet.dhtmlx.com/e0mrmyam?tag=richtext) 샘플 참조)
- RichText 인스턴스 간 서식을 유지하는 클립보드 지원(복사, 잘라내기, 붙여넣기) 및 외부 콘텐츠를 일반 텍스트로 삽입
- 단어 및 줄 범위 삭제 단축키: `Ctrl+Backspace` / `Ctrl+Delete`(Windows/Linux) 또는 `Opt+Backspace` / `Opt+Delete`(macOS)로 이전/다음 단어 삭제; `Cmd+Backspace` / `Cmd+Delete`(macOS 전용)로 이전/다음 시각적 줄 삭제

### 새로운 API {#new-api}

#### 새로운 속성 {#new-properties}

- [`triggers`](api/config/triggers.md) — 멘션, 태그 및 기타 토큰 삽입을 위한 드롭다운 트리거를 정의합니다
- [`triggerTemplate`](api/config/trigger-template.md) — RichText가 제안 드롭다운에서 항목을 렌더링하는 방식을 커스터마이즈합니다

#### 새로운 메서드 {#new-methods}

- [`insertValue()`](api/methods/insert-value.md) — 커서 위치에 텍스트, Markdown 또는 HTML 콘텐츠를 삽입하거나 선택된 텍스트를 대체합니다([RichText. 커서 위치에 콘텐츠 삽입](https://snippet.dhtmlx.com/pew2g1ku?tag=richtext) 샘플 참조)

#### 새로운 이벤트 {#new-events}

- [`show-suggest`](api/events/show-suggest.md) — 설정된 트리거에 대해 제안 드롭다운이 열릴 때 발생합니다
- [`insert-token`](api/events/insert-token.md) — 사용자가 드롭다운에서 제안 항목을 선택하고 RichText가 이를 토큰으로 삽입한 후 발생합니다
- [`hide-suggest`](api/events/hide-suggest.md) — 제안 드롭다운이 닫힐 때 발생합니다

### 수정 사항 {#fixes}

- 인라인 콘텐츠 붙여넣기 문제(멘션, 이미지 등 인라인 요소의 내부 또는 인접 위치에 있는 콘텐츠 포함)
- 이미지를 자기 자신 위에 드롭하면 오류가 발생하는 문제

## 버전 2.0.6 {#version-206}

2026년 5월 28일 출시

### 새로운 기능 {#new-functionality-1}

- 선택 영역에 따라 목록을 토글하거나 변환하는 상황 인식 OL/UL 툴바 버튼
- **들여쓰기** 및 **내어쓰기** 버튼으로 목록 중첩 수준 변경
- 빈 목록 항목에서 Enter를 눌러 목록을 종료하거나 중첩 수준 줄이기
- 방문한 링크에 대한 별도 색상

### 새로운 API {#new-api-1}

#### 새로운 이벤트 {#new-events-1}

- [`toggle-list`](api/events/toggle-list.md) — 사용자가 선택된 블록에서 목록을 토글할 때 발생합니다

### 수정 사항 {#fixes-1}

- 목록 마커의 잘못된 수평 정렬
- 번호 있는 목록과 번호 없는 목록 간의 일관되지 않은 패딩
- 서식 지우기가 블록 레벨 속성을 지우지 않는 문제
- 목록 항목 내 제목과 인용구의 잘못된 스타일링
- 수평선 내부에 표시되는 불필요한 입력 요소
- 목록 중간이나 끝에 수평선을 삽입할 때 에디터가 멈추는 문제

## 버전 2.0.5 {#version-205}

2026년 3월 6일 출시

### 수정 사항 {#fixes-2}

- IME 입력이 올바르게 처리되지 않는 문제
- 조합 기반 입력(예: 데스크톱에서의 중국어, 일본어, 한국어)이 올바르게 처리되지 않는 문제
- HTML 파싱 시 `margin-left` 및 `line-height` 속성이 무시되는 문제
- 인라인 요소가 블록 레벨 부모의 속성을 상속하는 문제
- 두 에디터 인스턴스 간에 텍스트를 복사할 수 없는 문제
- 두 개 이상의 에디터 인스턴스가 활성화된 경우 선택 영역이 올바르게 처리되지 않는 문제
- 단락의 유일한 콘텐츠가 이미지인 경우 커서 위치가 잘못 지정되는 문제
- 아래 첨자 및 위 첨자 요소의 무한 중첩 문제
- 이미지 붙여넣기 시 먼저 업로드하지 않고 인라인으로 삽입되는 문제
- 특정 위치(첫 번째 또는 마지막 줄)에서 빈 인라인 블록을 제거할 수 없는 문제
- 입력 시 에디터가 커서로 스크롤되지 않는 문제
- Android에서 입력이 올바르게 처리되지 않는 문제
- HR 요소의 잘못된 선택 처리
- 빈 초기값으로 잘못된 렌더링
- 자기 닫힘 블록이 포함된 경우 콘텐츠 복사가 실패할 수 있는 문제
- Chrome: 컨텍스트 메뉴에서 이모지를 삽입할 수 없는 문제
- Firefox: 전체 선택(CTRL+A)이 올바르게 처리되지 않는 문제

## 버전 2.0.4 {#version-204}

2025년 10월 15일 출시

### 수정 사항 {#fixes-3}

- 단락의 잘못된 범위 선택
- 링크된 이미지에 인접한 경우 링크 팝업이 표시되지 않는 문제
- 초기 툴바 값이 실제 콘텐츠와 일치하지 않는 문제

## 버전 2.0.3 {#version-203}

2025년 8월 27일 출시

### 수정 사항 {#fixes-4}

- 수평선을 클릭하면 스크립트 오류가 발생하는 문제
- 기본 줄 높이가 올바르지 않은 문제
- 콘텐츠 스타일에 중복 선택자가 포함되는 문제
- HTML 파싱 시 일반 텍스트 블록이 스타일 변경을 무시하는 문제
- HTML에서 파서가 이스케이프된 글꼴 이름을 무시하는 문제
- HTML에서 파서가 `margin-left` 및 `line-height` 속성을 무시하는 문제

## 버전 2.0.2 {#version-202}

2025년 8월 4일 출시

### 수정 사항 {#fixes-5}

- 패키지 콘텐츠 업데이트

## 버전 2.0.1 {#version-201}

2025년 7월 30일 출시

### 수정 사항 {#fixes-6}

- `defaultStyles` 속성의 타입 정의 업데이트

## 버전 2.0 {#version-20}

2025년 7월 30일 출시

:::note[참고]
v1.2의 API는 v2.0과 호환되지 않습니다. 자세한 내용은 [**마이그레이션 가이드**](news/migration.md)를 참조하세요.
:::

### 새로운 기능 {#new-functionality-2}

- **차세대 텍스트 렌더링**  
  새로운 엔진으로 더 부드럽고, 빠르고, 정확한 텍스트 렌더링을 경험하세요

- **세밀한 툴바 구성**  
  툴바를 완전히 제어하세요:  
  - [개별 툴바 컨트롤](guides/configuration.md/#default-toolbar-controls) 및 순서 정의
  - [커스텀 컨트롤](guides/configuration.md/#add-custom-toolbar-controls) 추가

- **선택적 [menubar](api/config/menubar.md)**  
  에디터 상단에 클래식 메뉴 스타일 인터페이스를 활성화합니다

- **향상된 [문서 모드](guides/configuration.md/#layout-modes)**  
  다양한 문서 크기 지원 추가

- **이미지 지원**  
  - [업로드 기능](api/config/image-upload-url.md)을 통한 이미지 삽입  
  - 이미지를 [대화형으로 크기 조절](api/events/resize-image.md)

- **개선된 링크 경험**  
  더 나은 사용성을 위한 [팝업 인터랙션](api/events/show-popup.md) 재설계

- **새로운 서식 도구**  
  - 텍스트 정렬: **양쪽 맞춤**  
  - [수평선](api/events/insert-line.md) 삽입  
  - [들여쓰기](api/events/indent.md) / [내어쓰기](api/events/outdent.md)  
  - [줄 높이](api/events/set-line-height.md) 설정  
  - [아래 첨자](api/events/subscript.md) / [위 첨자](api/events/superscript.md) 적용

- **목록 관리**  
  콘텐츠에서 [목록을 쉽게 삽입하고 관리](api/events/insert-list.md)합니다

- **가져오기/내보내기 및 인쇄**  
  - DOCX 파일 [가져오기](api/events/import.md)
  - 콘텐츠를 DOCX 또는 PDF로 [내보내기](api/events/export.md)
  - 에디터에서 직접 문서 [인쇄](api/events/print.md)

- **키보드 단축키**  
  일반적인 서식 지정 및 편집 단축키 지원 확대

### 새로운 API {#new-api-2}

#### 새로운 속성 {#new-properties-1}

- [`fullscreenMode`](api/config/fullscreen-mode.md)  
- [`imageUploadUrl`](api/config/image-upload-url.md)  
- [`layoutMode`](api/config/layout-mode.md)  
- [`locale`](api/config/locale.md)  
- [`menubar`](api/config/menubar.md)  
- [`toolbar`](api/config/toolbar.md)  
- [`value`](api/config/value.md)

#### 새로운 메서드 {#new-methods-1}

- [`setConfig()`](api/methods/set-config.md) — 구성을 동적으로 업데이트합니다  
- [`setLocale()`](api/methods/set-locale.md) — 즉석에서 로케일을 변경합니다

#### 새로운 내부 메서드 {#new-internal-methods}

- [`api.exec()`](api/internal/exec.md)  
- [`api.intercept()`](api/internal/intercept.md)  
- [`api.getReactiveState()`](api/internal/get-reactive-state.md)  
- [`api.getState()`](api/internal/get-state.md)

#### 새로운 이벤트 {#new-events-2}

새로운 이벤트 전체 목록은 [여기](api/overview/events_overview.md)에서 확인할 수 있습니다

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
프로젝트에서 제거된 API를 사용하지 마세요! <br/> 자세한 내용은 [마이그레이션](news/migration.md) 항목을 참조하세요.
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

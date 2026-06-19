---
sidebar_label: 최신 버전으로 마이그레이션
title: 최신 버전으로 마이그레이션
description: DHTMLX JavaScript RichText 라이브러리 문서에서 최신 버전으로의 마이그레이션에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 직접 실행해 보세요. DHTMLX RichText 30일 무료 평가판도 다운로드할 수 있습니다.
---

# 최신 버전으로 마이그레이션 {#migration-to-newer-versions}

## 1.2 -> 2.0 {#12---20}

### 프로퍼티 마이그레이션 {#properties-migration}

| 기존 프로퍼티 | 대체 항목 | 비고 |
| --------------- | ------------------------- | ----------------------------------------- |
| `customStats`   | *(제거됨)*               | 새 버전 2.0에서 사용 불가      |
| `toolbarBlocks` | `toolbar`                 | 이제 세부적인 툴바 구조를 지원합니다   |
| `defaultStyles` | `defaultStyles` (업데이트됨) | 구조가 이제 블록별 CSS 기반으로 변경되었습니다  |
| `mode`          | `layoutMode`              | 더 엄격한 열거형 기반 설정으로 대체되었습니다 |

### - `customStats` {#--customstats}

`customStats` 프로퍼티가 제거되었습니다. 현재 버전의 RichText는 사용자 정의 통계(예: 문자 수, 단어 수, 문장 수) 표시를 더 이상 지원하지 않습니다.

텍스트 메트릭을 계산해야 하는 경우, 에디터 콘텐츠에 직접 접근하여 수동으로 처리할 수 있습니다.

```jsx
const content = editor.getValue();
const wordCount = content.split(/\s+/).length;
```

### - `toolbarBlocks` → [`toolbar`](api/config/toolbar.md) {#--toolbarblocks--toolbar}

**2.0** 이전에는 컨트롤 블록만 지정할 수 있었습니다.
```jsx{2} title="Before 2.0"
new dhx.RichText("#root", {
  toolbarBlocks: ["undo", "style", "decoration", "colors", "align", "link"]
});
```

**2.0**부터는 개별 컨트롤을 지정할 수 있습니다.
```jsx{2-4} title="From 2.0"
new richtext.Richtext("#root", {
    toolbar: [
        "undo", "style", "bold", "italic", "underline", "text-color",
        "align", "link"
    ]
});
```

### - [`defaultStyles`](api/config/default-styles.md) {#--defaultstyles}

**2.0** 이전에는 툴바 선택 컨트롤의 기본값을 정의할 수 있었습니다.
```jsx title="Before 2.0"
defaultStyles: {
    "font-family": "Tahoma",
    "font-size": "14px"
}
```

**2.0**부터는 특정 블록 유형에 대한 기본 스타일 값을 지정할 수 있습니다.
```jsx title="From 2.0"
defaultStyles: {
  "*": {
    "font-family": "Tahoma",
    "font-size": "14px"
  },
  h1: {
    "font-size": "32px",
    "color": "#333"
  }
}
```

:::note[참고]
`*`를 사용하여 모든 블록의 기본값을 정의한 후, 특정 요소(p, h1, blockquote 등)를 재정의할 수 있습니다.
:::

### - `mode` → [`layoutMode`](api/config/layout-mode.md) {#--mode--layoutmode}

```jsx{2} title="Before 2.0"
new dhx.RichText("#root", {
    mode: "document"
});
```

```jsx{2} title="From 2.0"
new Richtext("#root", {
    layoutMode: "document" // or "classic"
});
```

새로운 [`layoutMode`](api/config/layout-mode.md)는 `"classic"`과 `"document"` 값만 엄격히 지원합니다.

### 메서드 마이그레이션 {#methods-migration}

| 기존 메서드 | 새 동등 항목 | 비고 |
| ----------------------- | ------------------------------------ | ----------------------------------------------------- |
| `getValue(mode)`        | `getValue(encoder)`                  | 인코더가 문자열 모드를 대체합니다. 인코더 사용 시 별도 import가 필요합니다 |
| `setValue(value, mode)` | `setValue(value, encoder)`           | 인코더가 문자열 모드를 대체합니다. 인코더 사용 시 별도 import가 필요합니다 |
| `getStats()`            | *제거됨*                            | 대체 항목 없음. 수동 로직 필요                 |
| `getEditorAPI()`        | *제거됨*                            | 내부 전용. 공개 API를 사용하세요                      |
| `fire()`                | *제거됨*                            | `exec()`와 `intercept()`로 대체됨                |
| `on()`, `detach()`      | ✅ 유지됨 (`api.on`, `api.detach`)| 이제 `richtext.api`를 통해 접근합니다                       |
| `fullScreen()`          | *제거됨*                            | `fullscreenMode` 설정 프로퍼티를 사용하세요                  |
| `exitFullScreen()`      | *제거됨*                            | `fullscreenMode` 설정 프로퍼티를 사용하세요                  |
| `paint()`               | *제거됨*                            | 더 이상 필요하지 않습니다                                      |
| `destructor()`          | ✅ 계속 사용 가능                   | 변경 없음                                             |
| `setConfig()`           | ✅ 신규                               | 실시간 설정 업데이트를 지원합니다                           |
| `setLocale()`           | ✅ 신규                               | 동적 로케일 전환을 지원합니다                       |
| `getReactiveState()`    | ✅ 신규                               | 반응형 상태 추적을 지원합니다                       |
| `getState()`            | ✅ 신규                               | 현재 정적 설정 상태를 제공합니다                  |
| `intercept()`           | ✅ 신규                               | 내부 액션을 가로챌 수 있습니다                            |
| `exec()`                | ✅ 신규                               | 내부 액션을 실행합니다                              |

### - [`setValue()`](api/methods/set-value.md) / [`getValue()`](api/methods/get-value.md) {#--setvalue--getvalue}

```jsx title="Before 2.0"
...
editor.setValue("<p>Hello</p>", "html");
editor.getValue("text");
```

```jsx title="From 2.0"
const fromTextEncoder = richtext.text.fromText; 
const fromHTMLEncoder = richtext.html.fromHTML; 

const toTextEncoder = richtext.text.toText; 
const toHTMLEncoder = richtext.html.toHTML; 
...
editor.setValue("<p>Hello</p>", fromHTMLEncoder);
editor.getValue(toTextEncoder);
```

:::note[참고]
인코더 없이 `getValue()`와 `setValue()`를 호출할 수 있습니다. 기본값은 HTML입니다.
:::

### - [`on`](api/internal/on.md) / [`detach`](api/internal/detach.md) {#--on--detach}

```jsx title="Before 2.0"
editor.events.on("Change", function(action, canUndo, canRedo){
  // your code here
});
 
editor.events.detach("Change");
```

```jsx title="From 2.0"
editor.api.on("set-font-size", (obj) => {
    console.log(obj.fontSize);
}, { tag: "track" });

editor.api.detach("track");
```

### - `fire()` → [`exec()`](api/internal/exec.md)와 [`intercept()`](api/internal/intercept.md) 사용 {#--fire--use-exec-and-intercept}

```jsx title="Before 2.0"
editor.events.fire("some-event", [data]);
```

```jsx title="From 2.0"
editor.api.exec("some-event", obj);

// Preventing execution
editor.api.intercept("some-event", (obj) => false);
```

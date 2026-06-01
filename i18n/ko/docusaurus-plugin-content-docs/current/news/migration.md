---
sidebar_label: 최신 버전으로 마이그레이션
title: 최신 버전으로 마이그레이션
description: DHTMLX JavaScript RichTExt 라이브러리 문서에서 최신 버전으로의 마이그레이션에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 시도해 보며, DHTMLX RichTExt의 무료 30일 평가판을 다운로드하세요.
---

# 최신 버전으로 마이그레이션

## 1.2 -> 2.0

### 속성 마이그레이션

| 기존 속성       | 대체 속성                 | 비고                                      |
| --------------- | ------------------------- | ----------------------------------------- |
| `customStats`   | *(제거됨)*                | 새 버전 2.0에서 사용할 수 없음            |
| `toolbarBlocks` | `toolbar`                 | 이제 세부적인 툴바 구조를 지원합니다      |
| `defaultStyles` | `defaultStyles` (업데이트됨) | 구조는 이제 블록별이며 CSS 기반입니다  |
| `mode`          | `layoutMode`              | 보다 엄격한 enum 기반 설정으로 대체됨     |

### - `customStats`

`customStats` 속성이 제거되었습니다. RichText의 현재 버전은 더 이상 사용자 정의 통계(예: 문자 수, 단어 수, 문장 수) 표시를 지원하지 않습니다.

여전히 텍스트 지표를 계산해야 하는 경우 에디터 콘텐츠에 접근하여 수동으로 처리함으로써 외부에서 수행할 수 있습니다:

```jsx
const content = editor.getValue();
const wordCount = content.split(/\s+/).length;
```

### - `toolbarBlocks` → [`toolbar`](api/config/toolbar.md)

**2.0** 이전에는 사용자가 컨트롤이 있는 블록만 지정할 수 있었습니다
```jsx{2} title="2.0 이전"
new dhx.RichText("#root", {
  toolbarBlocks: ["undo", "style", "decoration", "colors", "align", "link"]
});
```

**2.0** 부터 사용자는 개별 컨트롤을 지정할 수 있습니다
```jsx{2-4} title="2.0 부터"
new richtext.Richtext("#root", {
    toolbar: [
        "undo", "style", "bold", "italic", "underline", "text-color",
        "align", "link"
    ]
});
```

### - [`defaultStyles`](api/config/default-styles.md)

**2.0** 이전에는 사용자가 툴바 선택 컨트롤에 대한 기본값을 정의할 수 있었습니다
```jsx title="2.0 이전"
defaultStyles: {
    "font-family": "Tahoma",
    "font-size": "14px"
}
```

**2.0** 부터 사용자는 특정 블록 유형에 대한 기본 스타일 값을 지정합니다
```jsx title="2.0 부터"
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

:::note
모든 블록에 대한 기본 설정을 정의하려면 `*` 를 사용하고, 특정 요소(p, h1, blockquote 등)를 재정의하세요.
:::

### - `mode` → [`layoutMode`](api/config/layout-mode.md)

```jsx{2} title="2.0 이전"
new dhx.RichText("#root", {
    mode: "document"
});
```

```jsx{2} title="2.0 부터"
new Richtext("#root", {
    layoutMode: "document" // 또는 "classic"
});
```

새로운 [`layoutMode`](api/config/layout-mode.md) 는 엄격하게 `"classic"` 과 `"document"` 값만 지원합니다.

### 메서드 마이그레이션

| 기존 메서드             | 새 대체 메서드                       | 비고                                                 |
| ----------------------- | ------------------------------------ | ----------------------------------------------------- |
| `getValue(mode)`        | `getValue(encoder)`                  | 인코더가 문자열 모드를 대체합니다; 인코더용 별도 import 필요 |
| `setValue(value, mode)` | `setValue(value, encoder)`           | 인코더가 문자열 모드를 대체합니다; 인코더용 별도 import 필요 |
| `getStats()`            | *제거됨*                             | 대체 없음; 수동 로직 필요                             |
| `getEditorAPI()`        | *제거됨*                             | 내부용; 공개 API 사용                                 |
| `fire()`                | *제거됨*                             | `exec()` 및 `intercept()` 로 대체됨                   |
| `on()`, `detach()`      | ✅ 유지됨 (`api.on`, `api.detach`)   | 이제 `richtext.api` 를 통해 접근                      |
| `fullScreen()`          | *제거됨*                             | `fullscreenMode` 설정 속성 사용                       |
| `exitFullScreen()`      | *제거됨*                             | `fullscreenMode` 설정 속성 사용                       |
| `paint()`               | *제거됨*                             | 더 이상 필요하지 않음                                 |
| `destructor()`          | ✅ 여전히 사용 가능                  | 변경 없음                                             |
| `setConfig()`           | ✅ 신규                              | 라이브 설정 업데이트 지원                             |
| `setLocale()`           | ✅ 신규                              | 동적 로케일 전환 허용                                 |
| `getReactiveState()`    | ✅ 신규                              | 반응형 상태 추적 지원                                 |
| `getState()`            | ✅ 신규                              | 현재 정적 설정 상태 제공                              |
| `intercept()`           | ✅ 신규                              | 내부 액션 가로채기                                    |
| `exec()`                | ✅ 신규                              | 내부 액션 실행                                        |

### - [`setValue()`](api/methods/set-value.md) / [`getValue()`](api/methods/get-value.md)

```jsx title="2.0 이전"
...
editor.setValue("<p>Hello</p>", "html");
editor.getValue("text");
```

```jsx title="2.0 부터"
const fromTextEncoder = richtext.text.fromText; 
const fromHTMLEncoder = richtext.html.fromHTML; 

const toTextEncoder = richtext.text.toText; 
const toHTMLEncoder = richtext.html.toHTML; 
...
editor.setValue("<p>Hello</p>", fromHTMLEncoder);
editor.getValue(toTextEncoder);
```

:::note
인코더 없이 `getValue()` 와 `setValue()` 를 호출할 수 있습니다 — 기본적으로 HTML이 사용됩니다
:::

### - [`on`](api/internal/on.md) / [`detach`](api/internal/detach.md)

```jsx title="2.0 이전"
editor.events.on("Change", function(action, canUndo, canRedo){
  // 코드 작성
});
 
editor.events.detach("Change");
```

```jsx title="2.0 부터"
editor.api.on("set-font-size", (obj) => {
    console.log(obj.fontSize);
}, { tag: "track" });

editor.api.detach("track");
```

### - `fire()` → [`exec()`](api/internal/exec.md) 및 [`intercept()`](api/internal/intercept.md) 사용

```jsx title="2.0 이전"
editor.events.fire("some-event", [data]);
```

```jsx title="2.0 부터"
editor.api.exec("some-event", obj);

// 실행 방지
editor.api.intercept("some-event", (obj) => false);
```

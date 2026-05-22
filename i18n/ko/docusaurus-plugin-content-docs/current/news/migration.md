---
sidebar_label: 최신 버전으로 마이그레이션
title: 최신 버전으로 마이그레이션
description: DHTMLX JavaScript RichText 라이브러리 문서에서 최신 버전으로의 마이그레이션에 대해 알아보세요. 개발자 가이드와 API 레퍼런스를 찾아보고, 코드 예제와 라이브 데모를 체험하거나 DHTMLX RichText 30일 무료 평가판을 다운로드하세요.
---

# 최신 버전으로 마이그레이션

## 1.2 -> 2.0

### Properties 마이그레이션

| 기존 property | 대체 항목                 | 비고                                      |
| --------------- | ------------------------- | ----------------------------------------- |
| `customStats`   | *(제거됨)*               | 새 버전 2.0에서 사용 불가      |
| `toolbarBlocks` | `toolbar`                 | 이제 상세한 toolbar 구조 지원   |
| `defaultStyles` | `defaultStyles` (업데이트됨) | 구조가 블록 단위 및 CSS 기반으로 변경  |
| `mode`          | `layoutMode`              | 더 엄격한 enum 기반 설정으로 대체 |

### - `customStats`

`customStats` property는 제거되었습니다. 현재 버전의 RichText는 사용자 정의 통계(예: 문자 수, 단어 수, 문장 수) 표시를 더 이상 지원하지 않습니다.

텍스트 메트릭을 계산해야 하는 경우, 에디터 콘텐츠에 접근하여 수동으로 처리하는 방식으로 외부에서 구현할 수 있습니다:

```jsx
const content = editor.getValue();
const wordCount = content.split(/\s+/).length;
```

### - `toolbarBlocks` → [`toolbar`](api/config/toolbar.md)

**2.0** 이전에는 컨트롤이 포함된 블록만 지정할 수 있었습니다.
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

### - [`defaultStyles`](api/config/default-styles.md)

**2.0** 이전에는 toolbar 선택 컨트롤의 기본값을 정의할 수 있었습니다.
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

:::note
`*`를 사용하여 모든 블록의 기본값을 정의한 후, 특정 요소(p, h1, blockquote 등)를 재정의하세요.
:::

### - `mode` → [`layoutMode`](api/config/layout-mode.md)

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

새로운 [`layoutMode`](api/config/layout-mode.md)는 `"classic"`과 `"document"` 값만 엄격하게 지원합니다.

### Methods 마이그레이션

| 기존 method             | 새 항목                               | 비고                                                  |
| ----------------------- | ------------------------------------ | ----------------------------------------------------- |
| `getValue(mode)`        | `getValue(encoder)`                  | encoder가 문자열 mode를 대체; encoder는 별도 import 필요 |
| `setValue(value, mode)` | `setValue(value, encoder)`           | encoder가 문자열 mode를 대체; encoder는 별도 import 필요 |
| `getStats()`            | *제거됨*                            | 대체 항목 없음; 수동 로직 필요                 |
| `getEditorAPI()`        | *제거됨*                            | 내부 전용; 공개 API를 사용하세요                      |
| `fire()`                | *제거됨*                            | `exec()`와 `intercept()`로 대체                |
| `on()`, `detach()`      | ✅ 유지됨 (`api.on`, `api.detach`)| 이제 `richtext.api`를 통해 접근                       |
| `fullScreen()`          | *제거됨*                            | `fullscreenMode` config property를 사용하세요                  |
| `exitFullScreen()`      | *제거됨*                            | `fullscreenMode` config property를 사용하세요                  |
| `paint()`               | *제거됨*                            | 더 이상 필요하지 않음                                      |
| `destructor()`          | ✅ 여전히 사용 가능                   | 변경 없음                                             |
| `setConfig()`           | ✅ 신규                               | 런타임 config 업데이트 지원                           |
| `setLocale()`           | ✅ 신규                               | 동적 로케일 전환 가능                                 |
| `getReactiveState()`    | ✅ 신규                               | 반응형 상태 추적 지원                                 |
| `getState()`            | ✅ 신규                               | 현재 정적 config 상태 제공                            |
| `intercept()`           | ✅ 신규                               | 내부 액션 인터셉트                                    |
| `exec()`                | ✅ 신규                               | 내부 액션 실행                                        |

### - [`setValue()`](api/methods/set-value.md) / [`getValue()`](api/methods/get-value.md)

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

:::note
encoder 없이 `getValue()`와 `setValue()`를 호출할 수 있으며, 이 경우 기본적으로 HTML이 사용됩니다.
:::

### - [`on`](api/internal/on.md) / [`detach`](api/internal/detach.md)

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

### - `fire()` → [`exec()`](api/internal/exec.md)와 [`intercept()`](api/internal/intercept.md) 사용

```jsx title="Before 2.0"
editor.events.fire("some-event", [data]);
```

```jsx title="From 2.0"
editor.api.exec("some-event", obj);

// Preventing execution
editor.api.intercept("some-event", (obj) => false);
```

---
sidebar_label: 최신 버전으로의 마이그레이션
title: 최신 버전으로의 마이그레이션
description: DHTMLX JavaScript RichTExt 라이브러리 문서에서 최신 버전으로의 마이그레이션에 대해 알아보세요. 개발자 가이드와 API 레퍼런스를 둘러보고, 코드 예제와 라이브 데모를 체험하며, DHTMLX RichTExt의 30일 무료 평가판도 다운로드할 수 있습니다.
---

# 최신 버전으로의 마이그레이션

## 1.2 -> 2.0

### 속성 마이그레이션

| 기존 속성         | 대체 속성                   | 비고                                         |
| ----------------- | -------------------------- | ------------------------------------------- |
| `customStats`     | *(삭제됨)*                 | 2.0 버전에서 더 이상 제공되지 않음           |
| `toolbarBlocks`   | `toolbar`                  | 툴바 구조를 더 세밀하게 설정 가능             |
| `defaultStyles`   | `defaultStyles` (업데이트) | 구조가 블록별 및 CSS 기반으로 변경됨          |
| `mode`            | `layoutMode`               | 더 엄격한 enum 기반 설정으로 대체됨           |

### - `customStats`

`customStats` 속성은 최신 RichText 버전에서 제거되었습니다. 따라서 문자, 단어, 문장 수와 같은 커스텀 통계에 대한 내장 지원이 더 이상 제공되지 않습니다.

텍스트 메트릭을 처리하려면, 에디터 내용을 직접 가져와 원하는 방식으로 처리하면 됩니다:

```jsx
const content = editor.getValue();
const wordCount = content.split(/\s+/).length;
```

### - `toolbarBlocks` → [`toolbar`](api/config/toolbar.md)

**2.0** 이전에는 컨트롤 블록만 설정할 수 있었습니다:
```jsx{2} title="Before 2.0"
new dhx.RichText("#root", {
  toolbarBlocks: ["undo", "style", "decoration", "colors", "align", "link"]
});
```

**2.0** 이후에는 필요한 개별 컨트롤을 자유롭게 나열할 수 있습니다:
```jsx{2-4} title="From 2.0"
new richtext.Richtext("#root", {
    toolbar: [
        "undo", "style", "bold", "italic", "underline", "text-color",
        "align", "link"
    ]
});
```

### - [`defaultStyles`](api/config/default-styles.md)

**2.0** 이전에는 툴바 선택 컨트롤의 기본값을 아래와 같이 지정했습니다:
```jsx title="Before 2.0"
defaultStyles: {
    "font-family": "Tahoma",
    "font-size": "14px"
}
```

**2.0**부터는 특정 블록 유형별로 기본 스타일 값을 설정할 수 있습니다:
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
`*` 키는 모든 요소에 대한 기본값을 설정하며, p, h1, blockquote 등 특정 요소별로 추가 커스터마이즈가 가능합니다.
:::

### - `mode` → [`layoutMode`](api/config/layout-mode.md)

```jsx{2} title="Before 2.0"
new dhx.RichText("#root", {
    mode: "document"
});
```

```jsx{2} title="From 2.0"
new Richtext("#root", {
    layoutMode: "document" // 또는 "classic"
});
```

이제 [`layoutMode`](api/config/layout-mode.md)는 `"classic"` 또는 `"document"` 값만 허용합니다.

### 메서드 마이그레이션

| 기존 메서드               | 대체 메서드                             | 비고                                                           |
| ------------------------- | ---------------------------------------- | -------------------------------------------------------------- |
| `getValue(mode)`          | `getValue(encoder)`                      | 문자열 모드 대신 encoder 사용, encoder는 별도 import 필요         |
| `setValue(value, mode)`   | `setValue(value, encoder)`               | 문자열 모드 대신 encoder 사용, encoder는 별도 import 필요         |
| `getStats()`              | *삭제됨*                                 | 대체 없음, 직접 구현 필요                                       |
| `getEditorAPI()`          | *삭제됨*                                 | 내부용, 공개 API 사용 권장                                      |
| `fire()`                  | *삭제됨*                                 | `exec()`와 `intercept()`로 대체                                 |
| `on()`, `detach()`        | ✅ 유지됨 (`api.on`, `api.detach`)       | 이제 `richtext.api`를 통해 접근                                 |
| `fullScreen()`            | *삭제됨*                                 | `fullscreenMode` 설정 속성 사용                                 |
| `exitFullScreen()`        | *삭제됨*                                 | `fullscreenMode` 설정 속성 사용                                 |
| `paint()`                 | *삭제됨*                                 | 더 이상 필요 없음                                              |
| `destructor()`            | ✅ 여전히 사용 가능                      | 변경 없음                                                      |
| `setConfig()`             | ✅ 새로 추가                             | 실시간 설정 업데이트 가능                                       |
| `setLocale()`             | ✅ 새로 추가                             | 동적으로 언어 전환 가능                                         |
| `getReactiveState()`      | ✅ 새로 추가                             | 반응형 상태 추적 가능                                           |
| `getState()`              | ✅ 새로 추가                             | 현재 정적 설정 상태 제공                                        |
| `intercept()`             | ✅ 새로 추가                             | 내부 동작 가로채기 가능                                         |
| `exec()`                  | ✅ 새로 추가                             | 내부 동작 실행 가능                                             |

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
encoder를 전달하지 않고 `getValue()` 및 `setValue()`를 호출해도 무방하며, 이 경우 기본적으로 HTML이 사용됩니다.
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

### - `fire()` → [`exec()`](api/internal/exec.md) 및 [`intercept()`](api/internal/intercept.md) 사용

```jsx title="Before 2.0"
editor.events.fire("some-event", [data]);
```

```jsx title="From 2.0"
editor.api.exec("some-event", obj);

// 실행 방지
editor.api.intercept("some-event", (obj) => false);
```

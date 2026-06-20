---
sidebar_label: insertValue()
title: insertValue 메서드
description: DHTMLX JavaScript RichText 라이브러리 문서에서 insertValue 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 직접 체험해 보세요. DHTMLX RichText 무료 30일 평가판을 다운로드할 수도 있습니다.
---

# insertValue()

### 설명 {#description}

@short: 현재 커서 위치에 텍스트, Markdown 또는 HTML 콘텐츠를 삽입하거나, 선택된 텍스트를 대체합니다

### 사용법 {#usage}

~~~jsx {}
insertValue: (value: string, encoder?: any): void;
~~~

### 매개변수 {#parameters}

- `value` - (필수) 현재 커서 위치의 RichText에 삽입할 값입니다. 선택 영역이 활성화된 경우, 선택 영역이 새 값으로 대체됩니다
- `encoder` - (선택) 삽입된 값을 디코딩하는 데 사용되는 파서입니다. 사용 가능한 형식은 `html`(기본값), `text`, `markdown`입니다

필요한 encoder는 다음과 같이 가져올 수 있습니다:

```jsx
const fromTextEncoder = richtext.text.fromText;             // 텍스트 encoder
const fromHTMLEncoder = richtext.html.fromHTML;             // HTML encoder
const fromMarkdownEncoder = richtext.markdown.fromMarkdown; // 마크다운 encoder
```

### 예제 {#example}

~~~jsx {6}
const editor = new richtext.Richtext("#root", {
    // 설정 속성
});

// 커서 위치에 커스텀 속성이 있는 HTML 링크를 삽입합니다
editor.insertValue("<a href=\"https://example.com\" title=\"Example\">link</a>");
~~~

삽입된 콘텐츠는 단일 히스토리 항목으로 추가되며, **실행 취소(Undo)** 한 번으로 되돌릴 수 있습니다.

**변경 이력:** 이 메서드는 v2.1에서 추가되었습니다

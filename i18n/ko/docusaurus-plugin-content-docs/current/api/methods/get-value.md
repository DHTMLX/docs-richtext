---
sidebar_label: getValue()
title: getValue 메서드
description: DHTMLX JavaScript RichText 라이브러리의 getValue 메서드에 대해 알아볼 수 있습니다. 개발자 가이드 및 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험하며, DHTMLX RichText 무료 30일 평가판을 다운로드하세요.
---

# getValue()

### 설명 {#description}

@short: RichText의 값을 반환합니다

### 사용법 {#usage}

~~~jsx {}
getValue(encoder?: any): string;
~~~

### 매개변수 {#parameters}

- `encoder` - (선택 사항) RichText의 콘텐츠를 사용자 정의 형식으로 인코딩하는 데 사용되는 파서입니다. 사용 가능한 형식은 `html`(기본값), `text`, `markdown`입니다.

필요한 encoder는 다음과 같이 가져올 수 있습니다:

```jsx
const toTextEncoder = richtext.text.toText;             // 텍스트 encoder
const toHTMLEncoder = richtext.html.toHTML;             // HTML encoder
const toMarkdownEncoder = richtext.markdown.toMarkdown; // 마크다운 encoder
```

### 예제 {#example}

~~~jsx {6-8}
const editor = new richtext.Richtext("#root", {
    value: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos." // 기본값 설정 (HTML 형식)
    // 기타 구성 속성
});

const toTextEncoder = richtext.text.toText;
const editor_value = editor.getValue(toTextEncoder);
console.log(editor_value);
~~~

**변경 로그:** 이 메서드는 v2.0에서 업데이트되었습니다. `mode` 매개변수가 제거되고 `encoder` 매개변수가 추가되었습니다

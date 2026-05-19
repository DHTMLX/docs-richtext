---
sidebar_label: getValue()
title: getValue 메서드
description: DHTMLX JavaScript RichText 라이브러리 문서에서 getValue 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 직접 실행해 보세요. DHTMLX RichText 무료 30일 평가판도 다운로드할 수 있습니다.
---

# getValue()

### 설명

@short: RichText의 값을 반환합니다

### 사용법

~~~jsx {}
getValue(encoder?: any): string;
~~~

### 파라미터

- `encoder` - (선택 사항) RichText의 콘텐츠를 사용자 정의 형식으로 인코딩하는 데 사용되는 파서입니다. 사용 가능한 형식은 `html`(기본값)과 `text`입니다

필요한 encoder는 다음과 같이 가져올 수 있습니다:

```jsx
const toTextEncoder = richtext.text.toText; // text encoder
const toHTMLEncoder = richtext.html.toHTML; // html encoder
```

### 예제

~~~jsx {6-8}
const editor = new richtext.Richtext("#root", {
    value: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos." // sets the default value (HTML format)
    // other configuration properties
});

const toTextEncoder = richtext.text.toText;
const editor_value = editor.getValue(toTextEncoder);
console.log(editor_value);
~~~

**변경 이력:** 이 메서드는 v2.0에서 업데이트되었습니다. `mode` 파라미터가 제거되고 `encoder` 파라미터가 추가되었습니다

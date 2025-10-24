---
sidebar_label: getValue()
title: getValue 메서드
description: DHTMLX JavaScript RichText 라이브러리 문서에서 getValue 메서드에 대해 알아보세요. 개발자 가이드와 API 참조를 탐색하고, 코드 예제와 라이브 데모를 시도해 보며, DHTMLX RichText의 30일 무료 평가판을 다운로드할 수 있습니다.
---

# getValue()

### 설명

@short: RichText 편집기의 현재 값을 가져옵니다

### 사용법

~~~jsx {}
getValue(encoder?: any): string;
~~~

### 매개변수

- `encoder` - (선택 사항) RichText 내용을 특정 형식으로 변환하는 파서입니다. 사용 가능한 옵션에는 기본값인 `html`과 `text`가 있습니다.

원하는 인코더를 얻으려면 다음을 사용하세요:

```jsx
const toTextEncoder = richtext.text.toText; // 텍스트 인코더
const toHTMLEncoder = richtext.html.toHTML; // HTML 인코더
```

### 예제

~~~jsx {6-8}
const editor = new richtext.Richtext("#root", {
    value: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos." // 기본값 설정 (HTML 형식)
    // 기타 구성 속성
});

const toTextEncoder = richtext.text.toText;
const editor_value = editor.getValue(toTextEncoder);
console.log(editor_value);
~~~

**변경 내역:** 이 메서드는 v2.0에서 업데이트되었습니다. `mode` 매개변수가 제거되고, `encoder` 매개변수가 추가되었습니다.

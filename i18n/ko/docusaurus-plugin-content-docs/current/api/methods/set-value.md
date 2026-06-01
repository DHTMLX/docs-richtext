---
sidebar_label: setValue()
title: setValue 메서드
description: DHTMLX JavaScript RichText 라이브러리 문서에서 setValue 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 직접 실행해 보며, DHTMLX RichText의 무료 30일 평가판을 다운로드할 수 있습니다.
---

# setValue()

### 설명

@short: 새로운 값을 RichText에 적용합니다

### 사용법

~~~jsx {}
setValue: (value: string, encoder?: any): void;
~~~

### 매개변수

- `value` - (필수) RichText에 삽입할 값
- `encoder` - (선택) RichText의 콘텐츠를 커스텀 형식으로 인코딩하는 데 사용되는 커스텀 파서. 다음 형식을 사용할 수 있습니다: `html` (기본값) 및 `text`

다음과 같은 방법으로 필요한 encoder를 가져올 수 있습니다:

```jsx
const fromTextEncoder = richtext.text.fromText; // text encoder
const fromHTMLEncoder = richtext.html.fromHTML; // html encoder
```

### 예제

~~~jsx {7-8}
const editor = new richtext.Richtext("#root", {
    // 구성 속성
});

const editor_value = "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos."

const fromTextEncoder = richtext.text.fromText;
editor.setValue(editor_value, fromTextEncoder);
~~~

**변경 이력:** 이 메서드는 v2.0에서 업데이트되었습니다. `mode` 매개변수가 제거되었습니다. `encoder` 매개변수가 추가되었습니다

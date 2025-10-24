---
sidebar_label: setValue()
title: setValue 메서드
description: DHTMLX JavaScript RichText 라이브러리 문서에서 setValue 메서드에 대해 알아보세요. 개발자 가이드와 API 참조를 탐색하고, 코드 예제와 라이브 데모를 시도해 보며, DHTMLX RichText의 무료 30일 평가판을 다운로드할 수 있습니다.
---

# setValue()

### 설명

@short: RichText 내용을 새로운 값으로 업데이트합니다.

### 사용법

~~~jsx {}
setValue: (value: string, encoder?: any): void;
~~~

### 매개변수

- `value` - (필수) RichText에 삽입할 내용
- `encoder` - (선택) RichText 내용을 특정 형식으로 인코딩하기 위한 사용자 정의 파서. 사용 가능한 형식은 `html` (기본값)과 `text`가 있습니다.

원하는 인코더는 다음과 같이 얻을 수 있습니다:

```jsx
const fromTextEncoder = richtext.text.fromText; // text 인코더
const fromHTMLEncoder = richtext.html.fromHTML; // html 인코더
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

**변경 내역:** 이 메서드는 v2.0에서 업데이트되었습니다. `mode` 매개변수가 제거되었고, `encoder` 매개변수가 추가되었습니다.

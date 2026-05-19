---
sidebar_label: setValue()
title: setValue 메서드
description: DHTMLX JavaScript RichText 라이브러리 문서에서 setValue 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 참조하고, 코드 예제와 라이브 데모를 사용해 보세요. DHTMLX RichText의 무료 30일 평가판도 다운로드할 수 있습니다.
---

# setValue()

### Description

@short: RichText에 새 값을 적용합니다

### Usage

~~~jsx {}
setValue: (value: string, encoder?: any): void;
~~~

### Parameters

- `value` - (필수) RichText에 삽입할 값
- `encoder` - (선택) RichText의 콘텐츠를 커스텀 형식으로 인코딩하는 데 사용되는 커스텀 파서. 사용 가능한 형식: `html` (기본값) 및 `text`

필요한 encoder는 다음과 같이 가져올 수 있습니다:

```jsx
const fromTextEncoder = richtext.text.fromText; // text encoder
const fromHTMLEncoder = richtext.html.fromHTML; // html encoder
```

### Example

~~~jsx {7-8}
const editor = new richtext.Richtext("#root", {
    // configuration properties
});

const editor_value = "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos."

const fromTextEncoder = richtext.text.fromText;
editor.setValue(editor_value, fromTextEncoder);
~~~

**변경 이력:** 이 메서드는 v2.0에서 업데이트되었습니다. `mode` 파라미터가 제거되고 `encoder` 파라미터가 추가되었습니다.

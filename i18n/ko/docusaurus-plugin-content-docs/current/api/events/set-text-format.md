---
sidebar_label: set-text-format
title: set-text-format 이벤트
description: DHTMLX JavaScript RichText 라이브러리 문서에서 set-text-format 이벤트에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 참고하고, 코드 예제와 라이브 데모를 살펴보세요.
---

# set-text-format

### 설명 {#description}

@short: 텍스트 형식을 설정할 때 발생합니다

### 사용법 {#usage}

~~~jsx {}
"set-text-format": (ITextFormat) => boolean | void;

interface ITextFormat {
    bold?: boolean;
    italic?: boolean;
    strike?: boolean;
    underline?: boolean;
}
~~~

:::info[정보]
내부 이벤트를 처리하려면 [**Event Bus 메서드**](api/overview/event_bus_methods_overview.md)를 사용할 수 있습니다
:::

### 매개변수 {#parameters}

**set-text-format** 이벤트의 콜백은 다음 매개변수를 포함하는 객체를 받을 수 있습니다:

- `bold` - 굵게 텍스트 형식
- `italic` - 기울임꼴 텍스트 형식
- `strike` - 취소선 텍스트 형식
- `underline` - 밑줄 텍스트 형식

### 예시 {#example}

~~~jsx {5-14}
// RichText 초기화
const editor = new richtext.Richtext("#root", {
    // 구성 속성
});
// "set-text-format" 이벤트 구독
editor.api.on("set-text-format", (obj) => {
    console.log(obj);
    console.log("The text format was changed");
});
// "italic" 및 bold 텍스트 형식 적용
editor.api.exec("set-text-format", {
    italic: true,
    bold: true
});
~~~

**변경 이력:** 이 이벤트는 v2.0에서 추가되었습니다

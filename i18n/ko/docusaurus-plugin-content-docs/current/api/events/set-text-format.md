---
sidebar_label: set-text-format
title: set-text-format 이벤트
description: DHTMLX JavaScript RichText 라이브러리 문서에서 set-text-format 이벤트에 대해 알아볼 수 있습니다. 개발자 가이드 및 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 확인하며, DHTMLX RichText 30일 무료 평가판을 다운로드하세요.
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

### 파라미터 {#parameters}

`set-text-format` 이벤트의 callback은 다음 파라미터를 포함하는 객체를 받을 수 있습니다:

- `bold` - 굵게 텍스트 형식
- `italic` - 기울임꼴 텍스트 형식
- `strike` - 취소선 텍스트 형식
- `underline` - 밑줄 텍스트 형식

### 예제 {#example}

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

**변경 로그:** 이 이벤트는 v2.0에서 추가되었습니다

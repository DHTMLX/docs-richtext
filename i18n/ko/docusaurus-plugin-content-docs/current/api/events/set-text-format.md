---
sidebar_label: set-text-format
title: set-text-format 이벤트
description: DHTMLX JavaScript RichText 라이브러리 문서에서 set-text-format 이벤트에 대해 알아보세요. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 체험하며, DHTMLX RichText의 무료 30일 평가판을 다운로드할 수 있습니다.
---

# set-text-format

### 설명

@short: 텍스트 서식이 적용될 때 발생하는 이벤트

### 사용법

~~~jsx {}
"set-text-format": (ITextFormat) => boolean | void;

interface ITextFormat {
    bold?: boolean;
    italic?: boolean;
    strike?: boolean;
    underline?: boolean;
}
~~~

:::info
내부 이벤트 관리를 위해 [**Event Bus methods**](api/overview/event_bus_methods_overview.md)를 참고할 수 있습니다.
:::

### 매개변수

**set-text-format** 이벤트의 콜백은 다음과 같은 선택적 속성을 가진 객체를 받습니다:

- `bold` - 굵은 글씨 서식을 나타냅니다
- `italic` - 이탤릭체 서식을 나타냅니다
- `strike` - 취소선 서식을 나타냅니다
- `underline` - 밑줄 서식을 나타냅니다

### 예제

~~~jsx {5-14}
// RichText 초기화
const editor = new richtext.Richtext("#root", {
    // 구성 속성
});
// "set-text-format" 이벤트 리스닝
editor.api.on("set-text-format", (obj) => {
    console.log(obj);
    console.log("텍스트 서식이 변경되었습니다");
});
// 텍스트에 이탤릭체와 굵은 글씨 서식 적용
editor.api.exec("set-text-format", {
    italic: true, 
    bold: true
});
~~~

**변경 로그:** 이 이벤트는 버전 2.0에서 도입되었습니다

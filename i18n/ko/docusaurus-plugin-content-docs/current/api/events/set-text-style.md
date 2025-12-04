---
sidebar_label: set-text-style
title: set-text-style 이벤트
description: DHTMLX JavaScript RichText 라이브러리 문서에서 set-text-style 이벤트를 살펴보세요. 개발자 가이드, API 참조, 코드 예제 및 라이브 데모를 확인하고 DHTMLX RichText의 무료 30일 평가판을 다운로드하세요.
---

# set-text-style

### 설명

@short: 텍스트 스타일이 적용될 때 발생합니다

### 사용법

~~~jsx {}
"set-text-style": ({ tag: TBlockType }) => boolean | void;

type TBlockType = "p" | "blockquote" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
~~~

### 매개변수

**set-text-style** 이벤트의 콜백은 다음 속성을 가진 객체를 받습니다:

- `tag` - 적용되는 텍스트 스타일을 지정합니다

:::info
내부 이벤트 관리를 위해서는 [**Event Bus methods**](api/overview/event_bus_methods_overview.md)를 참조하세요
:::

### 예제

~~~jsx {5-13}
// RichText 초기화
const editor = new richtext.Richtext("#root", {
    // 구성 속성
});
// "set-text-style" 이벤트 리스닝
editor.api.on("set-text-style", (obj) => {
    console.log(obj.tag);
    console.log("텍스트 스타일이 업데이트되었습니다");
});
// 텍스트 스타일 변경
editor.api.exec("set-text-style", {
    tag: "blockquote"
});
~~~

**변경 로그:** 이 이벤트는 v2.0에 도입되었습니다

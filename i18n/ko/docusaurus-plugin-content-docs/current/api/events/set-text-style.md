---
sidebar_label: set-text-style
title: set-text-style Event
description: DHTMLX JavaScript RichText 라이브러리 문서에서 set-text-style 이벤트에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험하거나, DHTMLX RichText의 무료 30일 평가판을 다운로드하세요.
---

# set-text-style

### 설명

@short: 텍스트 스타일을 설정할 때 발생합니다

### 사용법

~~~jsx {}
"set-text-style": ({ tag: TBlockType }) => boolean | void;

type TBlockType = "p" | "blockquote" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
~~~

### 매개변수

**set-text-style** 이벤트의 callback은 다음 매개변수를 포함하는 객체를 받을 수 있습니다:

- `tag` - 텍스트 스타일

:::info
내부 이벤트를 처리하려면 [**Event Bus 메서드**](api/overview/event_bus_methods_overview.md)를 사용할 수 있습니다
:::

### 예제

~~~jsx {5-13}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// subscribe to the "set-text-style" event
editor.api.on("set-text-style", (obj) => {
    console.log(obj.tag);
    console.log("The text style was changed");
});
// apply new text style
editor.api.exec("set-text-style", {
    tag: "blockquote"
});
~~~

**변경 이력:** 이 이벤트는 v2.0에서 추가되었습니다

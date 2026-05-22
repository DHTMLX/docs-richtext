---
sidebar_label: insert-image
title: insert-image 이벤트
description: DHTMLX JavaScript RichText 라이브러리 문서에서 insert-image 이벤트에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 탐색하고, 코드 예제와 라이브 데모를 살펴보며, DHTMLX RichText 무료 30일 평가판을 다운로드하세요.
---

# insert-image

### 설명

@short: 이미지를 삽입할 때 발생합니다

### 사용법

~~~jsx {}
"insert-image": (IImageContext) => boolean | void;

interface IImageContext {
    id: TID;
    value: string;
    width: number;
    height: number;
    // extra props from uploader ctx, not required for the actual action
    name?: string;
    file?: File;
    status?: string;
    selected: (ctx: IImageContext) => void;
    uploaded: (ctx: IImageContext) => void;
}
~~~

:::info
내부 이벤트를 처리하려면 [**Event Bus 메서드**](api/overview/event_bus_methods_overview.md)를 사용할 수 있습니다
:::

### 예제

~~~jsx {5-9}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// subscribe to the "insert-image" event
editor.api.on("insert-image", (obj) => {
    console.log(obj);
    console.log("The image was inserted");
});
~~~

**변경 이력:** 이 이벤트는 v2.0에서 추가되었습니다

---
sidebar_label: insert-image
title: insert-image 이벤트
description: DHTMLX JavaScript RichText 라이브러리 문서에서 insert-image 이벤트를 살펴보세요. 개발자 가이드, API 참조, 코드 예제 및 라이브 데모를 확인하고 DHTMLX RichText의 30일 무료 평가판을 다운로드할 수 있습니다.
---

# insert-image

### 설명

@short: 이미지가 삽입될 때 발생합니다

### 사용법

~~~jsx {}
"insert-image": (IImageContext) => boolean | void;

interface IImageContext {
    id: TID;
    value: string;
    width: number;
    height: number;
    // 업로더 컨텍스트에서 추가로 전달되는 속성, 실제 동작에는 필수 아님
    name?: string;
    file?: File;
    status?: string;
    selected: (ctx: IImageContext) => void;
    uploaded: (ctx: IImageContext) => void;
}
~~~

:::info
내부 이벤트 관리를 위해 [**Event Bus methods**](api/overview/event_bus_methods_overview.md)를 참고하세요.
:::

### 예제

~~~jsx {5-9}
// RichText 초기화
const editor = new richtext.Richtext("#root", {
    // 구성 속성들
});
// "insert-image" 이벤트 리스너 등록
editor.api.on("insert-image", (obj) => {
    console.log(obj);
    console.log("이미지가 삽입되었습니다");
});
~~~

**변경 로그:** 이 이벤트는 v2.0 버전에서 도입되었습니다

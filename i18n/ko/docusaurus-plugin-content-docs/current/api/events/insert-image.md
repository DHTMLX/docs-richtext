---
sidebar_label: insert-image
title: insert-image 이벤트
description: DHTMLX JavaScript RichText 라이브러리 문서에서 insert-image 이벤트에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험하며, DHTMLX RichText 30일 무료 평가판을 다운로드하세요.
---

# insert-image

### 설명 {#description}

@short: 이미지를 삽입할 때 발생합니다 (툴바, 메뉴바, 클립보드 붙여넣기 또는 드래그 앤 드롭을 통해)

### 사용법 {#usage}

~~~jsx {}
"insert-image": (IImageContext) => boolean | void;

interface IImageContext {
    id: TID;
    value: string;  // 이미지 소스: imageUploadUrl이 설정된 경우 서버 URL, 이미지가 인라인으로 처리되는 경우 base64 데이터 URL
    width: number;
    height: number;
    // 업로더 ctx에서 가져온 추가 props로, 실제 동작에는 필요하지 않음
    name?: string;
    file?: File;
    status?: string;
    selected: (ctx: IImageContext) => void;
    uploaded: (ctx: IImageContext) => void;
}
~~~

:::note[참고]
`value` 필드는 외부 URL([ `imageUploadUrl`](api/config/image-upload-url.md)이 설정되고 업로드가 성공한 경우) 또는 base64 데이터 URL(`imageUploadUrl`이 생략되고 이미지가 클라이언트에서 인라인으로 처리되는 경우) 중 하나를 보유합니다. URL을 재작성하거나 호스트를 검증하는 등 소스를 처리하는 핸들러는 두 형식 모두를 고려해야 합니다.
:::

:::info[정보]
내부 이벤트를 처리하려면 [**Event Bus 메서드**](api/overview/event_bus_methods_overview.md)를 사용할 수 있습니다.
:::

### 예제 {#example}

~~~jsx {5-9}
// RichText 초기화
const editor = new richtext.Richtext("#root", {
    // 설정 속성
});
// "insert-image" 이벤트 구독
editor.api.on("insert-image", (obj) => {
    console.log(obj);
    console.log("The image was inserted");
});
~~~

**변경 이력:** 이 이벤트는 v2.0에서 추가되었습니다

---
sidebar_label: imageUploadUrl
title: imageUploadUrl 설정
description: DHTMLX JavaScript RichText 라이브러리 문서에서 imageUploadUrl 설정에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 사용해 보세요. DHTMLX RichText 무료 30일 평가판도 다운로드하실 수 있습니다.
---

# imageUploadUrl

### 설명 {#description}

@short: 선택 사항입니다. 이미지 업로드 시 사용할 URL을 지정합니다 (툴바, 메뉴바, 클립보드 붙여넣기, 드래그 앤 드롭에서 사용됩니다).

이 속성이 설정되면 RichText는 삽입된 각 이미지를 지정된 엔드포인트에 업로드하고, 서버가 반환한 URL을 삽입합니다.

이 속성이 생략되거나 거짓 값(`""`, `null`, `undefined`)으로 설정된 경우, RichText는 **인라인 모드**로 전환됩니다. 이 경우 이미지 파일은 클라이언트에서 읽혀 base64 데이터 URL로 콘텐츠에 직접 임베드되며, 서버가 필요하지 않습니다. 1024×800보다 큰 인라인 이미지는 해당 크기에 맞게 비율을 유지하며 축소됩니다.

:::note[참고]
인라인(base64) 이미지는 내장된 DOCX / PDF [내보내기](api/events/export.md)에서 보존되지 않습니다. 내보내기 기능을 사용하는 경우 `imageUploadUrl`을 설정하여 이미지가 외부 위치를 참조하도록 하십시오.
:::

:::caution[주의]
Base64 인코딩은 원본 파일에 비해 인코딩된 페이로드를 약 3분의 1 정도 증가시킵니다. 여러 개의 큰 인라인 이미지가 포함된 문서는 이에 따라 크기가 커지며, 이는 [`getValue()`](api/methods/get-value.md)가 반환하는 값의 크기, 에디터의 메모리 사용량, 그리고 콘텐츠를 저장하거나 전송하는 비용에 영향을 줍니다. 이미지가 많거나 큰 문서의 경우 서버 `imageUploadUrl`을 사용하는 것을 권장합니다.
:::

### 사용법 {#usage}

~~~jsx {}
imageUploadUrl?: string;
~~~

### 예제 {#example}

서버 엔드포인트에 이미지 업로드:

~~~jsx {3}
// RichText 초기화
new richtext.Richtext("#root", {
    imageUploadUrl: "https://example.com/upload"
    // 기타 설정 속성
});
~~~

이미지를 base64로 인라인 삽입 (서버 불필요) — 속성을 생략하거나 빈 문자열을 전달합니다:

~~~jsx {2}
new richtext.Richtext("#root", {
    // imageUploadUrl이 설정되지 않으면 이미지는 base64 데이터 URL로 삽입됩니다
    // 기타 설정 속성
});
~~~

**변경 로그:** 이 속성은 v2.0에서 추가되었습니다. v2.1부터 이 속성은 선택 사항입니다. 생략 시 이미지는 base64 데이터 URL로 인라인 삽입됩니다.

**관련 문서:** [설정](guides/configuration.md), [서버와 함께 사용하기](guides/working_with_server.md)

**관련 샘플:** [RichText. 초기화](https://snippet.dhtmlx.com/t55alxiy?tag=richtext)

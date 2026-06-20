---
sidebar_label: 서버와 함께 사용하기
title: 서버와 함께 사용하기
description: 이미지 업로드를 위한 RichText와 백엔드 통신 방법을 알아봅니다. 요청/응답 계약 및 직접 서버를 연결하는 방법을 포함합니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험해 보세요. DHTMLX RichText 30일 무료 평가판도 다운로드할 수 있습니다.
---

# 서버와 함께 사용하기 {#working-with-the-server}

RichText는 완전히 브라우저에서 실행되므로 콘텐츠 편집이나 저장을 위한 백엔드가 필요하지 않습니다. 애플리케이션은 에디터의 콘텐츠를 원하는 방식으로 자유롭게 저장할 수 있습니다. 서버가 필요한 기능은 **이미지 업로드**뿐입니다. 사용자가 문서에 이미지를 삽입할 때 RichText는 파일을 콘텐츠에 인라인으로 삽입하거나, HTTP 엔드포인트에 전송한 뒤 해당 링크를 저장할 수 있습니다.

이 가이드에서는 다음 사항을 설명합니다.

- 업로드 서버가 설정되지 않은 경우 기본 동작
- 서버가 구현해야 하는 정확한 HTTP 계약
- 서버가 반환한 URL을 RichText가 사용하는 방식
- 데모 백엔드로 기능을 테스트하는 방법

## 기본 동작: 인라인 이미지 {#default-behavior-inline-images}

[`imageUploadUrl`](api/config/image-upload-url.md) 속성을 설정하지 않으면 RichText는 인라인 이미지를 사용합니다. 사용자가 이미지를 삽입하면 RichText는 브라우저에서 파일을 읽고, 원본 파일을 `data:image/...;base64,...` URL로 인코딩하여 `<img>` 요소의 `src`로 에디터 콘텐츠에 직접 씁니다. RichText는 `width`/`height` 속성을 통해 표시 크기를 1024×800 박스에 맞게 제한하지만, 삽입된 바이트는 원본 전체 해상도 파일 그대로입니다. 클라이언트는 크기를 줄이거나 재인코딩하지 않습니다.

이 방식은 백엔드 없이도 동작하며 빠른 데모에 유용하지만 명확한 한계가 있습니다.

- 인코딩된 바이트가 문서 내부에 저장되므로, 이미지가 추가될수록 저장된 HTML의 크기가 커집니다
- 두 문서에 동일한 이미지가 있어도 각각 저장되며, 중복을 제거할 공유 리소스가 없습니다
- 바이트가 별도의 리소스가 아니므로, 서버에서 CDN을 통해 제공하거나 후처리(리사이즈, 재인코딩, 검사)를 수행할 수 없습니다
- 인라인 이미지는 기본 제공 DOCX / PDF [내보내기](api/events/export.md)에서 보존되지 않습니다. 내보내기를 사용하는 경우 이미지가 외부 URL을 참조하도록 업로드 서버를 설정하십시오

## 직접 서버 작성하기 {#write-your-own-server}

프로덕션 앱에서는 [`imageUploadUrl`](api/config/image-upload-url.md)을 사용해 RichText가 서버를 가리키도록 설정하십시오.

~~~jsx {2}
new richtext.Richtext("#root", {
    imageUploadUrl: "https://example.com/upload"
    // 기타 설정 속성
});
~~~

최소한의 업로드 엔드포인트는 다음 조건을 충족해야 합니다.

1. `upload`라는 이름의 파일 필드를 포함한 `multipart/form-data` POST 요청을 수락합니다.
2. 파일을 검증합니다(허용 타입, 최대 크기).
3. 사용자의 브라우저가 가져올 수 있는 위치에 파일을 저장합니다(HTTP로 제공되는 로컬 디스크, S3, CDN 등).
4. 선택적으로 이미지를 리사이즈하거나 기타 처리를 수행합니다.
5. `status: "server"`, 저장된 파일의 공개 URL로 설정된 `value`, 그리고 이미지의 픽셀 단위 `width`와 `height`를 포함하는 JSON 객체로 응답합니다.

### 클라이언트가 전송하는 내용 {#what-the-client-sends}

[`imageUploadUrl`](api/config/image-upload-url.md)이 설정되면 RichText는 선택된 파일을 해당 URL로 직접 전송합니다(`/images`나 다른 경로를 추가하지 않음). 따라서 전달하는 URL이 전체 POST 대상이 됩니다.

요청은 표준 HTML 폼 업로드를 사용합니다.

- **Method:** `POST`
- **Content-Type:** `multipart/form-data`
- **Body:** `upload`라는 이름의 파일 필드 하나

### 클라이언트가 기대하는 응답 {#what-the-client-expects-back}

서버는 JSON 객체로 응답해야 합니다. RichText는 다음 필드를 읽습니다.

| 필드     | 타입    | 의미                                                                 |
| -------- | ------- | -------------------------------------------------------------------- |
| `status` | string  | 성공 마커 — 업로드 성공 시 `"server"`를 반환합니다. 업로더는 이 필드로 완료된 업로드와 실패한 업로드를 구분합니다. 다른 값(예: `"error"`)은 업로드 실패로 처리됩니다. 삽입된 이미지 자체는 `value`, `width`, `height`를 기반으로 구성됩니다. |
| `value`  | string  | 저장된 이미지의 URL입니다. RichText는 이 문자열을 삽입된 `<img>`의 `src`로 문서에 그대로 씁니다. |
| `width`  | integer | 삽입된 이미지의 크기 지정에 사용되는 너비(픽셀 단위)입니다.         |
| `height` | integer | 삽입된 이미지의 크기 지정에 사용되는 높이(픽셀 단위)입니다.         |

#### 성공 응답 {#successful-response}

업로드에 성공하면 저장된 이미지 URL과 크기 정보가 반환됩니다.

~~~json
{
    "status": "server",
    "value": "https://cdn.example.com/uploads/abc123.png",
    "width": 320,
    "height": 207
}
~~~

#### 업로드 실패 {#failed-upload}

업로드에 실패하면 `"server"` 이외의 status가 반환됩니다.

~~~json
{
    "status": "error"
}
~~~

### 업로드된 이미지 제공 {#serve-the-uploaded-image}

`value` URL은 업로드와 이후 문서 읽기를 연결하는 유일한 링크입니다. RichText는 이 URL을 문서에 직접 삽입하므로, 저장된 콘텐츠를 여는 모든 클라이언트(에디터 자체, 내보내기, 게시된 페이지)는 일반 `GET` 요청으로 해당 URL에서 이미지를 가져옵니다.

이는 다음을 의미합니다.

- URL은 사용자의 브라우저에서 접근 가능해야 하며, 일반적으로 **절대 경로**여야 합니다
- 호스트는 업로드 엔드포인트와 달라도 됩니다(예: 자체 서버에서 업로드를 수락하고 CDN이나 오브젝트 스토리지 URL을 반환할 수 있음)
- 이미지 호스트가 다른 출처(origin)에 있는 경우 페이지에서 이미지를 로드할 수 있도록 허용해야 합니다(CORS 설정 또는 단순 공개 읽기 접근)
- 서버는 문서가 해당 URL을 참조하는 동안 URL을 유효하게 유지해야 합니다. RichText는 바이트를 캐시하거나 복사하지 않습니다

URL 구조 자체는 계약의 일부가 **아닙니다**. 브라우저가 URL에 `GET` 요청을 보내고 이미지 바이트를 받을 수 있는 한, 경로, 쿼리 문자열, 심지어 스킴도 완전히 백엔드에 달려 있습니다.

### 데모 서버로 테스트하기 {#try-it-against-the-demo-server}

이 계약을 구현한 동작하는 백엔드로 기능을 테스트할 수 있습니다.

~~~jsx
new richtext.Richtext("#root", {
    imageUploadUrl: "https://docs.dhtmlx.com/richtext-backend/images"
    // 기타 설정 속성
});
~~~

데모 서버는 대용량 이미지를 리사이즈하고, 디스크에 저장하며, 직접 제공하는 URL을 반환합니다. 평가 및 데모 목적으로만 사용하도록 설계되었습니다. 프로덕션 에디터에서 이 서버를 가리키지 마십시오.

**관련 문서:**

- [구성](guides/configuration.md)
- [`imageUploadUrl`](api/config/image-upload-url.md)

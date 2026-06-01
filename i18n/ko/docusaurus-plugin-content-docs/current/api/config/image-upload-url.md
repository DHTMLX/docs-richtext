---
sidebar_label: imageUploadUrl
title: imageUploadUrl 설정
description: DHTMLX JavaScript RichText 라이브러리 문서에서 imageUploadUrl 설정에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 시험해 보며, DHTMLX RichText의 30일 무료 평가판을 다운로드하세요.
---

# imageUploadUrl

### 설명

@short: 선택 사항. 이미지 업로드에 사용될 URL을 지정합니다

### 사용법

~~~jsx {}
imageUploadUrl?: string;
~~~

### 예제

~~~jsx {3}
// RichText 초기화
new richtext.Richtext("#root", {
    imageUploadUrl: "some URL"
    // 기타 설정 속성
});
~~~

**변경 이력:** 이 속성은 v2.0에서 추가되었습니다

**관련 문서:** [설정](guides/configuration.md)

**관련 샘플:** [RichText. 초기화](https://snippet.dhtmlx.com/t55alxiy?tag=richtext)
